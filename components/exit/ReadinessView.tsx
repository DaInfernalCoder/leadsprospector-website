import type { ReadinessResult } from "@/lib/exitTypes";

function scoreColor(score: number) {
  if (score >= 80) return "#3F7A4F";
  if (score >= 60) return "#A07850";
  if (score >= 40) return "#C08A3E";
  return "#B05A4A";
}

export default function ReadinessView({ data }: { data: ReadinessResult }) {
  // Compute the /100 from the criteria so the headline always matches the bars.
  const total = data.criteria.reduce((s, c) => s + (c.score || 0), 0);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#1C2B3A] px-8 py-8 md:py-10 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="shrink-0">
          <p className="text-6xl md:text-7xl font-[family-name:var(--font-cormorant)] font-light leading-none" style={{ color: scoreColor(total) }}>
            {total}
            <span className="text-2xl text-[#A8A49E]">/100</span>
          </p>
          <p className="text-sm font-medium mt-2" style={{ color: scoreColor(total) }}>
            {data.band}
          </p>
        </div>
        <p className="text-sm text-[#A8A49E] leading-relaxed sm:border-l sm:border-white/10 sm:pl-6">
          {data.summary}
        </p>
      </div>

      <div className="rounded-2xl border border-[#E2DDD5] bg-white overflow-hidden">
        <div className="px-8 pt-7 pb-4 border-b border-[#E2DDD5]">
          <p className="text-xs font-medium text-[#6B6B65]/70 uppercase tracking-widest">
            The 10 criteria buyers grade
          </p>
        </div>
        <div className="divide-y divide-[#EDE9E1]">
          {data.criteria.map((c, i) => (
            <div key={i} className="px-8 py-5">
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <p className="text-sm font-medium text-[#1C1C1A]">{c.name}</p>
                <span className="text-sm font-medium shrink-0" style={{ color: scoreColor(c.score * 10) }}>
                  {c.score}/10
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-[#EDE9E1] mb-2 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.score * 10}%`, backgroundColor: scoreColor(c.score * 10) }} />
              </div>
              <p className="text-sm text-[#6B6B65] leading-relaxed">{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#E2DDD5] bg-[#F0EDE6] px-8 py-7">
        <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-4">
          Prioritized fix list
        </p>
        <div className="space-y-4">
          {data.fixList.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-sm font-medium text-[#A07850] w-5 shrink-0">{i + 1}.</span>
              <div>
                <p className="text-sm font-medium text-[#1C1C1A]">{f.item}</p>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{f.why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#6B6B65]/60 leading-relaxed px-1">
        Directional self-assessment from what you entered, not a formal diligence report.
      </p>
    </div>
  );
}
