"use client";

import { useEffect, useRef, useState } from "react";
import ConnectAccountCard from "@/components/internal/ConnectAccountCard";
import LeadsTable from "@/components/internal/LeadsTable";
import JobHistoryPanel from "@/components/internal/JobHistoryPanel";
import { JobMeta, SalesNavLead } from "@/lib/internalTypes";
import { leadsToCsv, downloadCsv } from "@/lib/csv";

type ConnectionState = "loading" | "disconnected" | "connected";
type Phase = "idle" | "scraping" | "enriching" | "done";

// Randomized pacing between per-lead profile views + enrichment, so the
// account doesn't hammer LinkedIn at a robotic, easily-flagged cadence.
const VIEW_DELAY_MIN_MS = 4000;
const VIEW_DELAY_MAX_MS = 11000;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay() {
  return VIEW_DELAY_MIN_MS + Math.random() * (VIEW_DELAY_MAX_MS - VIEW_DELAY_MIN_MS);
}

export default function LinkedInPage() {
  const [connection, setConnection] = useState<ConnectionState>("loading");
  const [searchUrlInput, setSearchUrlInput] = useState("");
  const [job, setJob] = useState<JobMeta | null>(null);
  const [leads, setLeads] = useState<SalesNavLead[]>([]);
  const [jobHistory, setJobHistory] = useState<JobMeta[]>([]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [scrapedCount, setScrapedCount] = useState(0);
  const [enrichedCount, setEnrichedCount] = useState(0);
  const [openCount, setOpenCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const stopRef = useRef(false);

  async function checkConnection() {
    try {
      const res = await fetch("/api/internal/unipile/status");
      const data = await res.json();
      setConnection(data.connected ? "connected" : "disconnected");
    } catch {
      setConnection("disconnected");
    }
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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time fetch on mount
    void checkConnection();
    void loadJobHistory();
  }, []);

  async function openJob(jobId: string) {
    setError(null);
    setShowHistory(false);
    try {
      const res = await fetch(`/api/internal/jobs/${jobId}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to load job.");
        return;
      }
      setJob(data.job);
      setLeads(data.leads ?? []);
      setPhase("done");
    } catch {
      setError("Failed to load job.");
    }
  }

  async function startRun() {
    if (!searchUrlInput.trim() || phase === "scraping" || phase === "enriching") return;
    setError(null);
    stopRef.current = false;
    try {
      const res = await fetch("/api/internal/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchUrl: searchUrlInput.trim(), cap: 100000 }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to start job.");
        return;
      }
      setJob(data.job);
      setLeads([]);
      setScrapedCount(0);
      setEnrichedCount(0);
      setOpenCount(0);
      loadJobHistory();
      await runScrapePhase(data.job.id);
    } catch {
      setError("Failed to start job.");
    }
  }

  async function runScrapePhase(jobId: string) {
    setPhase("scraping");
    let allLeads: SalesNavLead[] = [];
    try {
      while (!stopRef.current) {
        const res = await fetch(`/api/internal/jobs/${jobId}/next-page`, { method: "POST" });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Scrape failed.");
          setPhase("done");
          return;
        }
        allLeads = [...allLeads, ...data.leads];
        setScrapedCount(allLeads.length);
        setLeads(allLeads);
        if (["scraped", "capped", "error"].includes(data.job.status)) break;
      }
    } catch {
      setError("Scrape failed.");
      setPhase("done");
      return;
    }

    if (stopRef.current) {
      setPhase("done");
      loadJobHistory();
      return;
    }

    await runEnrichPhase(jobId, allLeads);
  }

  async function runEnrichPhase(jobId: string, allLeads: SalesNavLead[]) {
    const targets = allLeads.filter((l) => l.openProfile);
    setOpenCount(targets.length);

    if (targets.length === 0) {
      await finishJob(jobId);
      return;
    }

    setPhase("enriching");
    let done = 0;
    for (const lead of targets) {
      if (stopRef.current) break;
      try {
        const res = await fetch(`/api/internal/jobs/${jobId}/view-and-enrich`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ leadId: lead.id }),
        });
        const data = await res.json();
        if (res.ok) {
          setLeads((prev) => prev.map((l) => (l.id === lead.id ? data.lead : l)));
        }
      } catch {
        // best-effort per lead, keep going
      }
      done += 1;
      setEnrichedCount(done);
      if (done < targets.length && !stopRef.current) {
        await sleep(randomDelay());
      }
    }

    await finishJob(jobId);
  }

  async function finishJob(jobId: string) {
    try {
      const res = await fetch(`/api/internal/jobs/${jobId}/finish`, { method: "POST" });
      const data = await res.json();
      if (res.ok) setJob(data.job);
    } catch {
      // non-critical
    }
    setPhase("done");
    loadJobHistory();
  }

  function stopRun() {
    stopRef.current = true;
  }

  function exportCsv() {
    if (leads.length === 0) return;
    downloadCsv(`linkedin-${job?.id ?? "export"}.csv`, leadsToCsv(leads));
  }

  if (connection === "loading") {
    return null;
  }

  if (connection === "disconnected") {
    return <ConnectAccountCard onConnected={() => setConnection("connected")} />;
  }

  const running = phase === "scraping" || phase === "enriching";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold">LinkedIn</h1>
        <button
          onClick={() => setShowHistory((s) => !s)}
          className="text-sm text-neutral-400 hover:text-neutral-200"
        >
          {showHistory ? "Hide" : "Past searches"}
        </button>
      </div>

      {showHistory && (
        <div className="mb-8 rounded-lg border border-neutral-800 p-3">
          <JobHistoryPanel jobs={jobHistory} currentJobId={job?.id} onOpen={openJob} />
        </div>
      )}

      <div className="flex gap-2 mb-3">
        <input
          value={searchUrlInput}
          onChange={(e) => setSearchUrlInput(e.target.value)}
          disabled={running}
          placeholder="Paste a Sales Navigator search URL..."
          className="flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50"
        />
        <button
          onClick={startRun}
          disabled={!searchUrlInput.trim() || running}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          Start
        </button>
      </div>

      {error && <p className="text-sm text-red-400 mb-3">{error}</p>}

      {running && (
        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-6">
          <span>
            {phase === "scraping" && `Scraping leads... ${scrapedCount}`}
            {phase === "enriching" &&
              `Viewing & enriching open profiles... ${enrichedCount}/${openCount}`}
          </span>
          <button onClick={stopRun} className="text-red-400 hover:underline">
            Stop
          </button>
        </div>
      )}

      {phase === "done" && leads.length > 0 && (
        <div className="mb-4 flex items-center justify-between text-sm text-neutral-500">
          <span>
            {leads.length} leads · {leads.filter((l) => l.openProfile).length} open profile
          </span>
          <button onClick={exportCsv} className="text-blue-400 hover:underline">
            Export CSV
          </button>
        </div>
      )}

      {phase === "done" && <LeadsTable leads={leads} />}
    </div>
  );
}
