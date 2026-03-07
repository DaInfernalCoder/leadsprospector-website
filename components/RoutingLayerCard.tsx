"use client";

import { ReactNode } from "react";

interface RoutingLayerCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: ReactNode;
  youAreHere?: boolean;
}

export default function RoutingLayerCard({
  stepNumber,
  title,
  description,
  icon,
  youAreHere = false,
}: RoutingLayerCardProps) {
  return (
    <div className="relative rounded-xl bg-linear-to-b from-teal-900/40 to-emerald-950/50 border border-white/10 p-6 md:p-8 flex items-center gap-4 md:gap-6 shadow-[0_0_40px_-10px_rgba(13,148,136,0.25)]">
      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
          {youAreHere && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/30 text-white border border-emerald-400/50">
              YOU ARE HERE
            </span>
          )}
        </div>
        <p className="text-sm md:text-base text-white/80">{description}</p>
      </div>
      <span className="shrink-0 text-3xl md:text-4xl font-bold text-[#0d9488] tabular-nums">
        {String(stepNumber).padStart(2, "0")}
      </span>
    </div>
  );
}
