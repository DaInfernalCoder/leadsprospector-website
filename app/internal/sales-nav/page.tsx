"use client";

import { useEffect, useRef, useState } from "react";
import ConnectAccountCard from "@/components/internal/ConnectAccountCard";
import LeadsTable from "@/components/internal/LeadsTable";
import JobHistoryPanel from "@/components/internal/JobHistoryPanel";
import { JobMeta, SalesNavLead } from "@/lib/internalTypes";
import { leadsToCsv, downloadCsv } from "@/lib/csv";

type ConnectionState = "loading" | "disconnected" | "finalizing" | "connected";

const BATCH_SIZE = 15;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function SalesNavPage() {
  const [connection, setConnection] = useState<ConnectionState>("loading");
  const [searchUrlInput, setSearchUrlInput] = useState("");
  const [capInput, setCapInput] = useState(1000);
  const [job, setJob] = useState<JobMeta | null>(null);
  const [leads, setLeads] = useState<SalesNavLead[]>([]);
  const [jobHistory, setJobHistory] = useState<JobMeta[]>([]);
  const [scraping, setScraping] = useState(false);
  const [paused, setPaused] = useState(false);
  const [enrichingIds, setEnrichingIds] = useState<Set<string>>(new Set());
  const [bulkEnriching, setBulkEnriching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrapeControl = useRef({ stopped: false });
  const pausedRef = useRef(false);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    checkConnection();
    loadJobHistory();
  }, []);

  async function checkConnection() {
    const params = new URLSearchParams(window.location.search);
    const justConnected = params.get("connected") === "1";
    if (justConnected) setConnection("finalizing");

    for (let attempt = 0; attempt < (justConnected ? 15 : 1); attempt++) {
      try {
        const res = await fetch("/api/internal/unipile/status");
        const data = await res.json();
        if (data.connected) {
          setConnection("connected");
          return;
        }
      } catch {
        // fall through to retry/disconnected below
      }
      if (justConnected) await sleep(2000);
    }
    setConnection(justConnected ? "disconnected" : "disconnected");
  }

  async function loadJobHistory() {
    try {
      const res = await fetch("/api/internal/jobs");
      const data = await res.json();
      setJobHistory(data.jobs ?? []);
    } catch {
      // history is non-critical
    }
  }

  async function openJob(jobId: string) {
    setError(null);
    try {
      const res = await fetch(`/api/internal/jobs/${jobId}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to load job.");
        return;
      }
      setJob(data.job);
      setLeads(data.leads ?? []);
    } catch {
      setError("Failed to load job.");
    }
  }

  async function startScrape() {
    if (!searchUrlInput.trim() || scraping) return;
    setError(null);
    try {
      const res = await fetch("/api/internal/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchUrl: searchUrlInput.trim(), cap: capInput }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to start job.");
        return;
      }
      setJob(data.job);
      setLeads([]);
      loadJobHistory();
      runScrapeLoop(data.job.id);
    } catch {
      setError("Failed to start job.");
    }
  }

  async function runScrapeLoop(jobId: string) {
    scrapeControl.current.stopped = false;
    setPaused(false);
    setScraping(true);
    try {
      while (!scrapeControl.current.stopped) {
        if (pausedRef.current) {
          await sleep(300);
          continue;
        }
        const res = await fetch(`/api/internal/jobs/${jobId}/next-page`, { method: "POST" });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Scrape failed.");
          break;
        }
        setJob(data.job);
        setLeads((prev) => [...prev, ...data.leads]);
        if (["complete", "capped", "error"].includes(data.job.status)) break;
      }
    } finally {
      setScraping(false);
      loadJobHistory();
    }
  }

  function stopScrape() {
    scrapeControl.current.stopped = true;
  }

  async function enrichOne(leadId: string) {
    if (!job) return;
    setEnrichingIds((prev) => new Set(prev).add(leadId));
    try {
      const res = await fetch("/api/internal/enrich", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: job.id, leadId }),
      });
      const data = await res.json();
      if (res.ok) {
        setLeads((prev) => prev.map((l) => (l.id === leadId ? data.lead : l)));
      }
    } finally {
      setEnrichingIds((prev) => {
        const next = new Set(prev);
        next.delete(leadId);
        return next;
      });
    }
  }

  async function enrichAllOpenProfiles() {
    if (!job || bulkEnriching) return;
    const targets = leads.filter((l) => l.openProfile && l.enrichment.status === "idle");
    if (targets.length === 0) return;

    setBulkEnriching(true);
    try {
      for (let i = 0; i < targets.length; i += BATCH_SIZE) {
        const chunk = targets.slice(i, i + BATCH_SIZE).map((l) => l.id);
        setEnrichingIds((prev) => new Set([...prev, ...chunk]));
        const res = await fetch("/api/internal/enrich/batch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jobId: job.id, leadIds: chunk }),
        });
        const data = await res.json();
        if (res.ok) {
          const byId = new Map(data.leads.map((l: SalesNavLead) => [l.id, l]));
          setLeads((prev) => prev.map((l) => (byId.has(l.id) ? (byId.get(l.id) as SalesNavLead) : l)));
        }
        setEnrichingIds((prev) => {
          const next = new Set(prev);
          chunk.forEach((id: string) => next.delete(id));
          return next;
        });
      }
    } finally {
      setBulkEnriching(false);
    }
  }

  function exportCsv() {
    if (leads.length === 0) return;
    downloadCsv(`sales-nav-${job?.id ?? "export"}.csv`, leadsToCsv(leads));
  }

  if (connection === "loading" || connection === "finalizing") {
    return <ConnectAccountCard finalizing={connection === "finalizing"} />;
  }

  if (connection === "disconnected") {
    return <ConnectAccountCard finalizing={false} />;
  }

  const openUnenrichedCount = leads.filter(
    (l) => l.openProfile && l.enrichment.status === "idle"
  ).length;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-[220px_1fr] gap-6">
      <aside>
        <h2 className="text-sm font-medium text-neutral-400 mb-3">Job History</h2>
        <JobHistoryPanel jobs={jobHistory} currentJobId={job?.id} onOpen={openJob} />
      </aside>

      <section>
        <h1 className="text-xl font-semibold mb-4">Sales Navigator Scraper</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={searchUrlInput}
            onChange={(e) => setSearchUrlInput(e.target.value)}
            placeholder="Paste a Sales Navigator search URL..."
            className="flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <select
            value={capInput}
            onChange={(e) => setCapInput(Number(e.target.value))}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-2 text-sm"
          >
            <option value={100}>Cap: 100</option>
            <option value={500}>Cap: 500</option>
            <option value={1000}>Cap: 1000</option>
            <option value={2500}>Cap: 2500</option>
            <option value={100000}>Load all</option>
          </select>
          <button
            onClick={startScrape}
            disabled={!searchUrlInput.trim() || scraping}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium disabled:opacity-40"
          >
            Start Scrape
          </button>
        </div>

        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

        {job && (
          <div className="mb-4 flex items-center gap-3 text-sm text-neutral-400">
            <span>
              {job.loadedCount} {job.totalCount ? `/ ~${job.totalCount}` : ""} loaded ({job.status})
            </span>
            {scraping && (
              <>
                <button
                  onClick={() => setPaused((p) => !p)}
                  className="text-blue-400 hover:underline"
                >
                  {paused ? "Resume" : "Pause"}
                </button>
                <button onClick={stopScrape} className="text-red-400 hover:underline">
                  Stop
                </button>
              </>
            )}
            <button
              onClick={enrichAllOpenProfiles}
              disabled={bulkEnriching || openUnenrichedCount === 0}
              className="text-blue-400 hover:underline disabled:opacity-40 disabled:no-underline"
            >
              {bulkEnriching
                ? "Enriching..."
                : `Enrich all open-profile leads (${openUnenrichedCount})`}
            </button>
            <button
              onClick={exportCsv}
              disabled={leads.length === 0}
              className="text-blue-400 hover:underline disabled:opacity-40"
            >
              Export CSV
            </button>
          </div>
        )}

        <LeadsTable leads={leads} enrichingIds={enrichingIds} onEnrich={enrichOne} />
      </section>
    </div>
  );
}
