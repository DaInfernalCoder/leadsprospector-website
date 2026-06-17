import { TrendingUp, TrendingDown } from "lucide-react";
import type { ValuationResult } from "@/lib/exitTypes";

export default function ValuationView({ data }: { data: ValuationResult }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#1C2B3A] px-8 py-8 md:py-10">
        <p className="text-xs font-medium text-[#C9A87C] uppercase tracking-widest mb-3">
          Estimated valuation range
        </p>
        <p className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-none">
          {data.valuationLow} <span className="text-[#A8A49E]">to</span> {data.valuationHigh}
        </p>
        <p className="text-sm text-[#A07850] font-medium mt-3">{data.basis}</p>
        <p className="text-sm text-[#A8A49E] leading-relaxed mt-4 max-w-2xl">{data.methodology}</p>
      </div>

      <div className="rounded-2xl border border-[#E2DDD5] bg-white overflow-hidden">
        <div className="px-8 pt-7 pb-4 border-b border-[#E2DDD5]">
          <p className="text-xs font-medium text-[#6B6B65]/70 uppercase tracking-widest">
            What is moving your number
          </p>
        </div>
        <div className="divide-y divide-[#EDE9E1]">
          {data.drivers.map((d, i) => (
            <div key={i} className="px-8 py-5 flex items-start gap-4">
              <span className={`mt-0.5 shrink-0 ${d.direction === "up" ? "text-[#3F7A4F]" : "text-[#B05A4A]"}`}>
                {d.direction === "up" ? (
                  <TrendingUp className="w-4 h-4" strokeWidth={2} />
                ) : (
                  <TrendingDown className="w-4 h-4" strokeWidth={2} />
                )}
              </span>
              <div>
                <p className="text-sm font-medium text-[#1C1C1A] mb-1">{d.factor}</p>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{d.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[#E2DDD5] bg-white px-8 py-7">
          <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-widest mb-4">
            Levers to pull before going to market
          </p>
          <ul className="space-y-3">
            {data.quickWins.map((w, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#6B6B65] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A07850] mt-1.5 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#E2DDD5] bg-[#F0EDE6] px-8 py-7">
          <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-4">
            Setting your walk-away floor
          </p>
          <p className="text-sm text-[#1C1C1A] leading-relaxed">{data.walkAwayContext}</p>
        </div>
      </div>

      <p className="text-xs text-[#6B6B65]/60 leading-relaxed px-1">
        Directional estimate from the figures you entered, not a formal valuation or an offer.
      </p>
    </div>
  );
}
