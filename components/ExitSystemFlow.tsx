"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Check, Loader2, AlertCircle } from "lucide-react";
import ValuationView from "@/components/exit/ValuationView";
import OptimizerView from "@/components/exit/OptimizerView";
import BuyerView from "@/components/exit/BuyerView";
import ReadinessView from "@/components/exit/ReadinessView";
import {
  IntakeData,
  ValuationResult,
  OptimizerResult,
  BuyerResult,
  ReadinessResult,
  buildBusinessInput,
} from "@/lib/exitTypes";

const INDUSTRIES = [
  "Construction & trades",
  "Manufacturing",
  "Professional services",
  "Healthcare & clinical",
  "SaaS & software",
  "E-commerce & retail",
  "Logistics & distribution",
  "Other",
];
const GROWTH = ["Growing fast", "Steady", "Flat", "Declining"];
const OWNER_DEPENDENCE = [
  "Runs without me day to day",
  "Involved but not essential",
  "The business depends on me",
];

type ToolKey = "valuation" | "optimizer" | "buyers" | "readiness";
type Status = "pending" | "done" | "error";

interface Results {
  valuation: ValuationResult | null;
  optimizer: OptimizerResult | null;
  buyers: BuyerResult | null;
  readiness: ReadinessResult | null;
}

const STEP_META: { key: ToolKey; n: string; eyebrow: string; title: string; blurb: string }[] = [
  { key: "valuation", n: "01", eyebrow: "Business Valuation Audit", title: "What your business is worth today", blurb: "A realistic range from your numbers, and the factors moving it." },
  { key: "optimizer", n: "02", eyebrow: "Value Optimizer", title: "The levers that add the most value", blurb: "Your business run through a 9-step value framework, ranked by impact." },
  { key: "buyers", n: "03", eyebrow: "Buyer Type Matcher", title: "Who is the right buyer", blurb: "The buyer archetypes most likely to acquire a business like yours." },
  { key: "readiness", n: "04", eyebrow: "Exit Readiness Score", title: "Would you survive due diligence", blurb: "Scored across the 10 criteria buyers grade, with a prioritized fix list." },
];

async function runTool<T>(endpoint: string, input: string): Promise<T | null> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

const emptyIntake: IntakeData = {
  industry: "",
  revenue: "",
  profit: "",
  years: "",
  growth: "",
  ownerDependence: "",
  ownerComp: "",
  notes: "",
};

export default function ExitSystemFlow() {
  const [phase, setPhase] = useState<"intake" | "analyzing" | "reveal">("intake");
  const [intake, setIntake] = useState<IntakeData>(emptyIntake);
  const [status, setStatus] = useState<Record<ToolKey, Status>>({
    valuation: "pending",
    optimizer: "pending",
    buyers: "pending",
    readiness: "pending",
  });
  const [results, setResults] = useState<Results | null>(null);
  const [step, setStep] = useState(0);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  const ready = intake.industry && intake.revenue.trim() && intake.profit.trim();

  function set<K extends keyof IntakeData>(key: K, val: string) {
    setIntake((prev) => ({ ...prev, [key]: val }));
  }

  // Auto-scroll to the latest revealed scene whenever step changes.
  useEffect(() => {
    if (phase !== "reveal") return;
    const el = sceneRefs.current[step];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, phase]);

  const start = useCallback(async () => {
    if (!ready) return;
    setPhase("analyzing");
    setStatus({ valuation: "pending", optimizer: "pending", buyers: "pending", readiness: "pending" });

    const businessInput = buildBusinessInput(intake);

    const markDone = (k: ToolKey, ok: boolean) =>
      setStatus((s) => ({ ...s, [k]: ok ? "done" : "error" }));

    const valuationP = runTool<ValuationResult>("/api/exit-valuation", businessInput).then((r) => {
      markDone("valuation", !!r);
      return r;
    });
    const optimizerP = runTool<OptimizerResult>("/api/exit-optimizer", businessInput).then((r) => {
      markDone("optimizer", !!r);
      return r;
    });
    const buyersP = runTool<BuyerResult>("/api/exit-buyers", businessInput).then((r) => {
      markDone("buyers", !!r);
      return r;
    });
    const readinessP = runTool<ReadinessResult>("/api/exit-readiness", businessInput).then((r) => {
      markDone("readiness", !!r);
      return r;
    });

    const [valuation, optimizer, buyers, readiness] = await Promise.all([
      valuationP,
      optimizerP,
      buyersP,
      readinessP,
    ]);

    setResults({ valuation, optimizer, buyers, readiness });
    setStep(0);
    setPhase("reveal");
  }, [ready, intake]);

  function renderView(key: ToolKey) {
    if (!results) return null;
    switch (key) {
      case "valuation":
        return results.valuation ? <ValuationView data={results.valuation} /> : <SceneError />;
      case "optimizer":
        return results.optimizer ? <OptimizerView data={results.optimizer} /> : <SceneError />;
      case "buyers":
        return results.buyers ? <BuyerView data={results.buyers} /> : <SceneError />;
      case "readiness":
        return results.readiness ? <ReadinessView data={results.readiness} /> : <SceneError />;
    }
  }

  // ---------- INTAKE ----------
  if (phase === "intake") {
    const inputClass =
      "w-full border border-[#E2DDD5] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#6B6B65]/50 focus:outline-none focus:ring-2 focus:ring-[#A07850]/40 focus:border-[#A07850] bg-[#FAFAF6]";
    const labelClass = "block text-sm font-medium text-[#1C1C1A] mb-2";
    return (
      <div className="bg-white rounded-2xl border border-[#E2DDD5] p-8 md:p-10">
        <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-2">
          Answer once
        </p>
        <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-6">
          Tell us about your business, we run all four analyses from this.
        </h3>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Industry</label>
            <select value={intake.industry} onChange={(e) => set("industry", e.target.value)} className={inputClass}>
              <option value="">Select your industry</option>
              {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Years in business</label>
            <input value={intake.years} onChange={(e) => set("years", e.target.value)} placeholder="e.g. 12" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Annual revenue</label>
            <input value={intake.revenue} onChange={(e) => set("revenue", e.target.value)} placeholder="e.g. $4.2M" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Annual profit (EBITDA or owner earnings)</label>
            <input value={intake.profit} onChange={(e) => set("profit", e.target.value)} placeholder="e.g. $750K" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Growth trend</label>
            <select value={intake.growth} onChange={(e) => set("growth", e.target.value)} className={inputClass}>
              <option value="">Select one</option>
              {GROWTH.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>How much does it depend on you?</label>
            <select value={intake.ownerDependence} onChange={(e) => set("ownerDependence", e.target.value)} className={inputClass}>
              <option value="">Select one</option>
              {OWNER_DEPENDENCE.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Owner salary and personal expenses run through the business</label>
            <input value={intake.ownerComp} onChange={(e) => set("ownerComp", e.target.value)} placeholder="e.g. $220,000 salary plus $40,000 personal" className={inputClass} />
          </div>
        </div>

        <div className="mt-5">
          <label className={labelClass}>What should a buyer know? Customer concentration, contracts, key staff, recent investments</label>
          <textarea
            value={intake.notes}
            onChange={(e) => set("notes", e.target.value)}
            rows={4}
            placeholder="e.g. one customer is 35% of revenue, most work is under annual maintenance contracts, I personally hold the key supplier relationships, no documented processes, books done by an outside bookkeeper."
            className={`${inputClass} resize-none leading-relaxed`}
          />
          <p className="text-xs text-[#6B6B65]/60 mt-1.5">The more detail here, the sharper the value, buyer, and readiness analyses.</p>
        </div>

        <div className="mt-8">
          <button
            onClick={start}
            disabled={!ready}
            className="inline-flex items-center gap-2 bg-[#A07850] text-[#F5F0E8] font-medium px-7 py-3.5 rounded-lg hover:bg-[#8B6A3E] transition-colors text-base disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Run my exit analysis
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
        {!ready && (
          <p className="text-xs text-[#6B6B65]/60 mt-3">
            Industry, revenue, and profit are required.
          </p>
        )}
      </div>
    );
  }

  // ---------- ANALYZING ----------
  if (phase === "analyzing") {
    return (
      <div className="bg-[#1C2B3A] rounded-2xl px-8 py-12 md:py-16 text-center">
        <Loader2 className="w-8 h-8 text-[#C9A87C] animate-spin mx-auto mb-6" strokeWidth={1.5} />
        <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] mb-2">
          Building your exit analysis
        </h3>
        <p className="text-sm text-[#A8A49E] mb-10">Claude is working through all four tools. This takes up to a minute.</p>
        <div className="max-w-sm mx-auto space-y-3 text-left">
          {STEP_META.map((m) => {
            const s = status[m.key];
            return (
              <div key={m.key} className="flex items-center gap-3">
                <span className="w-5 h-5 shrink-0 flex items-center justify-center">
                  {s === "done" ? (
                    <Check className="w-4 h-4 text-[#3F7A4F]" strokeWidth={2.5} />
                  ) : s === "error" ? (
                    <AlertCircle className="w-4 h-4 text-[#B05A4A]" strokeWidth={2} />
                  ) : (
                    <Loader2 className="w-4 h-4 text-[#A8A49E]/50 animate-spin" strokeWidth={2} />
                  )}
                </span>
                <span className={`text-sm ${s === "pending" ? "text-[#A8A49E]/50" : "text-[#F5F0E8]"}`}>
                  {m.eyebrow}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- REVEAL ----------
  const onLastTool = step >= STEP_META.length - 1;
  return (
    <div className="space-y-10 md:space-y-16">
      {STEP_META.slice(0, step + 1).map((m, i) => (
        <div
          key={m.key}
          ref={(el) => { sceneRefs.current[i] = el; }}
          className="scroll-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-2">
                Step {m.n} of 04 &nbsp;·&nbsp; {m.eyebrow}
              </p>
              <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] leading-tight">
                {m.title}
              </h3>
              <p className="text-[#6B6B65] mt-2 leading-relaxed">{m.blurb}</p>
            </div>
            {renderView(m.key)}

            {/* Advance control, only on the current (latest) scene */}
            {i === step && (
              <div className="mt-8 flex justify-center">
                {!onLastTool ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center gap-2 bg-[#1C2B3A] text-[#F5F0E8] font-medium px-7 py-3.5 rounded-lg hover:bg-[#2C3F52] transition-colors text-sm"
                  >
                    Continue to {STEP_META[i + 1].eyebrow}
                    <ArrowDown className="w-4 h-4" strokeWidth={2} />
                  </button>
                ) : (
                  <a
                    href="#recap"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("recap")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex items-center gap-2 bg-[#A07850] text-[#F5F0E8] font-medium px-7 py-3.5 rounded-lg hover:bg-[#8B6A3E] transition-colors text-base"
                  >
                    See what to do next
                    <ArrowDown className="w-4 h-4" strokeWidth={2} />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      ))}

      {/* Recap scene, appears once the last tool is reached. Booking lives in the page #calendar section. */}
      {onLastTool && (
        <motion.div
          id="recap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="scroll-mt-24 rounded-2xl bg-[#111E2A] px-6 py-10 md:px-12 md:py-14 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-3">
            Your next move
          </p>
          <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-tight mb-3">
            Turn this analysis into a real exit plan.
          </h3>
          <p className="text-[#A8A49E] leading-relaxed max-w-xl mx-auto mb-8">
            Now that you know what it is worth, we do the work of connecting you to a buyer. We help owners sell businesses over $200k in net income, with nothing upfront. Email us your analysis to pressure-test your number and start the process.
          </p>
          <a
            href="mailto:sunny@mabusinessadvisors.com"
            className="inline-flex items-center gap-2 bg-[#A07850] text-[#F5F0E8] font-medium px-7 py-3.5 rounded-lg hover:bg-[#8B6A3E] transition-colors text-base"
          >
            Email us
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </motion.div>
      )}
    </div>
  );
}

function SceneError() {
  return (
    <div className="rounded-2xl border border-[#E2DDD5] bg-[#F5F2EC] px-8 py-7 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-[#B05A4A] shrink-0 mt-0.5" strokeWidth={2} />
      <div>
        <p className="text-sm font-medium text-[#1C1C1A] mb-1">We could not generate this one.</p>
        <p className="text-sm text-[#6B6B65] leading-relaxed">
          The rest of your analysis is intact below. Email us and we will cover this part live.
        </p>
      </div>
    </div>
  );
}
