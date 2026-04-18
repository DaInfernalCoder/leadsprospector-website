"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Signal {
  name: string;
  source: string;
  trigger: string;
  timing: string;
}

interface ICPResult {
  icpSummary: string;
  signals: Signal[];
  preVetting: string;
  targetExample: string;
  urgency: string;
}

export default function ICPSignalFinder() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ICPResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    if (!input.trim() || loading) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/icp-signals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Input card */}
      <div className="bg-white rounded-2xl border border-[#E2DDD5] p-8 md:p-10">
        <label className="block text-sm font-medium text-[#1C1C1A] mb-3">
          Describe your practice and who you serve
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          placeholder="e.g. RIA serving post-exit founders with $5M–$50M in investable assets, primarily in Texas. We specialize in concentrated equity and business transition planning."
          className="w-full border border-[#E2DDD5] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#6B6B65]/50 focus:outline-none focus:ring-2 focus:ring-[#A07850]/40 focus:border-[#A07850] resize-none leading-relaxed bg-[#FAFAF6]"
        />
        <p className="text-xs text-[#6B6B65]/60 mt-2 mb-6">
          ex: HNWI investing assets $1–100M &nbsp;·&nbsp; family office &nbsp;·&nbsp; post-exit founders &nbsp;·&nbsp; inherited wealth
        </p>
        <button
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
          className="inline-flex items-center gap-2 bg-[#1C2B3A] text-[#F5F0E8] font-medium px-6 py-3 rounded-lg hover:bg-[#2C3F52] transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-[#F5F0E8]/30 border-t-[#F5F0E8] rounded-full animate-spin" />
              Building your signal strategy — up to a minute...
            </>
          ) : (
            <>
              Show my signal strategy
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-6 py-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-8 space-y-4">

          {/* ICP summary */}
          <div className="rounded-2xl bg-[#F0EDE6] border border-[#E2DDD5] px-8 py-6">
            <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-2">
              Your ICP
            </p>
            <p className="text-[#1C1C1A] text-base leading-relaxed">{result.icpSummary}</p>
          </div>

          {/* Signals */}
          <div className="rounded-2xl border border-[#E2DDD5] bg-white overflow-hidden">
            <div className="px-8 pt-7 pb-4 border-b border-[#E2DDD5]">
              <p className="text-xs font-medium text-[#6B6B65]/70 uppercase tracking-widest">
                Signals we will monitor — {result.signals.length} active for your ICP
              </p>
            </div>
            <div className="divide-y divide-[#EDE9E1]">
              {result.signals.map((signal, i) => (
                <div key={i} className="px-8 py-6 grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A07850] shrink-0" />
                      <p className="text-sm font-medium text-[#1C1C1A]">{signal.name}</p>
                    </div>
                    <p className="text-xs text-[#A07850] pl-3.5">{signal.source}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-wider mb-1">Trigger</p>
                    <p className="text-sm text-[#6B6B65] leading-relaxed">{signal.trigger}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-wider mb-1">Timing</p>
                    <p className="text-sm text-[#6B6B65] leading-relaxed">{signal.timing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pre-vetting + urgency side by side */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#E2DDD5] bg-white px-8 py-7">
              <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-widest mb-4">
                Next steps for your profile
              </p>
              <div className="space-y-3">
                {result.preVetting
                  .split(/(?=Stage\s+\d+)/i)
                  .filter(Boolean)
                  .filter((s) => /Stage\s+[12]/i.test(s))
                  .map((stage, i) => (
                    <p key={i} className="text-sm text-[#6B6B65] leading-relaxed">{stage.trim()}</p>
                  ))}
                <p className="text-sm text-[#6B6B65] leading-relaxed">Stage 3: We reach out directly to each individual to confirm they are open to speaking with a financial advisor. No one is introduced without expressed interest.</p>
                <p className="text-sm text-[#6B6B65] leading-relaxed">Stage 4: We make a warm introduction over email between you and the prospect with context already included. From there, they are yours to close.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E2DDD5] bg-[#F0EDE6] px-8 py-7">
              <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-4">
                Why timing matters
              </p>
              <p className="text-sm text-[#1C1C1A] leading-relaxed">{result.urgency}</p>
            </div>
          </div>

          {/* Target example */}
          <div className="rounded-2xl border border-[#E2DDD5] bg-[#F5F2EC] px-8 py-7">
            <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-widest mb-4">
              Example prospect we would surface for you
            </p>
            <p className="text-sm text-[#6B6B65] leading-relaxed">{result.targetExample}</p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#calendar"
              className="inline-flex items-center gap-2 bg-[#1C2B3A] text-[#F5F0E8] font-medium px-6 py-3 rounded-lg hover:bg-[#2C3F52] transition-colors text-sm"
            >
              Ready to get started? Book a call
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
