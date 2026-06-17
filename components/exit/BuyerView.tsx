import type { BuyerResult } from "@/lib/exitTypes";

const fitColor: Record<string, string> = {
  Strong: "text-[#3F7A4F] bg-[#3F7A4F]/10",
  Moderate: "text-[#A07850] bg-[#A07850]/10",
  Possible: "text-[#6B6B65] bg-[#6B6B65]/10",
};

export default function BuyerView({ data }: { data: BuyerResult }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#F0EDE6] border border-[#E2DDD5] px-8 py-6">
        <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-2">
          Who should buy this
        </p>
        <p className="text-[#1C1C1A] text-base leading-relaxed">{data.summary}</p>
      </div>

      <div className="space-y-4">
        {data.archetypes.map((a, i) => (
          <div key={i} className="rounded-2xl border border-[#E2DDD5] bg-white px-8 py-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-base font-medium text-[#1C1C1A]">{a.type}</p>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${fitColor[a.fit] ?? fitColor.Possible}`}>
                {a.fit} fit
              </span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-wider mb-1">What they value</p>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{a.whatTheyValue}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-wider mb-1">How they pay</p>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{a.howTheyPay}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#6B6B65]/60 uppercase tracking-wider mb-1">How to approach</p>
                <p className="text-sm text-[#6B6B65] leading-relaxed">{a.approach}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-[#E2DDD5] bg-[#1C2B3A] px-8 py-7">
        <p className="text-xs font-medium text-[#C9A87C] uppercase tracking-widest mb-3">
          To create buyer competition
        </p>
        <p className="text-sm text-[#F5F0E8] leading-relaxed">{data.positioning}</p>
      </div>

      <p className="text-xs text-[#6B6B65]/60 leading-relaxed px-1">
        These are buyer archetypes, not named firms or an introduction. We build the real buyer list on
        a live engagement.
      </p>
    </div>
  );
}
