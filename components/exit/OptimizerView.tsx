import type { OptimizerResult } from "@/lib/exitTypes";

const impactColor: Record<string, string> = {
  High: "text-[#3F7A4F] bg-[#3F7A4F]/10",
  Medium: "text-[#A07850] bg-[#A07850]/10",
  Low: "text-[#6B6B65] bg-[#6B6B65]/10",
};

export default function OptimizerView({ data }: { data: OptimizerResult }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#F0EDE6] border border-[#E2DDD5] px-8 py-6">
        <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-2">
          Where your value gaps are
        </p>
        <p className="text-[#1C1C1A] text-base leading-relaxed">{data.overview}</p>
      </div>

      <div className="rounded-2xl border border-[#E2DDD5] bg-white overflow-hidden">
        <div className="px-8 pt-7 pb-4 border-b border-[#E2DDD5]">
          <p className="text-xs font-medium text-[#6B6B65]/70 uppercase tracking-widest">
            Highest-leverage moves, ranked
          </p>
        </div>
        <div className="divide-y divide-[#EDE9E1]">
          {data.levers.map((l, i) => (
            <div key={i} className="px-8 py-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-[family-name:var(--font-cormorant)] text-[#A07850]/50 leading-none w-6">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#1C1C1A]">{l.name}</p>
                    <p className="text-xs text-[#A07850]">{l.driver}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${impactColor[l.valueImpact] ?? impactColor.Low}`}>
                  {l.valueImpact} impact
                </span>
              </div>
              <p className="text-sm text-[#6B6B65] leading-relaxed pl-9">{l.action}</p>
              <p className="text-xs text-[#6B6B65]/60 pl-9 mt-2">
                Effort: {l.effort} &nbsp;·&nbsp; Timeline: {l.timeline}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#E2DDD5] bg-[#1C2B3A] px-8 py-7">
        <p className="text-xs font-medium text-[#C9A87C] uppercase tracking-widest mb-3">
          Start here this quarter
        </p>
        <p className="text-sm text-[#F5F0E8] leading-relaxed">{data.topPriority}</p>
      </div>
    </div>
  );
}
