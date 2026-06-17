// Shared types and helpers for the Claude Exit System guided flow.

export interface Driver {
  factor: string;
  direction: "up" | "down";
  note: string;
}
export interface ValuationResult {
  valuationLow: string;
  valuationHigh: string;
  basis: string;
  methodology: string;
  drivers: Driver[];
  quickWins: string[];
  walkAwayContext: string;
}

export interface Lever {
  name: string;
  driver: string;
  valueImpact: "High" | "Medium" | "Low";
  effort: "High" | "Medium" | "Low";
  timeline: string;
  action: string;
}
export interface OptimizerResult {
  overview: string;
  levers: Lever[];
  topPriority: string;
}

export interface Archetype {
  type: string;
  fit: "Strong" | "Moderate" | "Possible";
  whatTheyValue: string;
  howTheyPay: string;
  approach: string;
}
export interface BuyerResult {
  summary: string;
  archetypes: Archetype[];
  positioning: string;
}

export interface Criterion {
  name: string;
  score: number;
  note: string;
}
export interface Fix {
  item: string;
  why: string;
}
export interface ReadinessResult {
  score: number;
  band: string;
  summary: string;
  criteria: Criterion[];
  fixList: Fix[];
}

export interface IntakeData {
  industry: string;
  revenue: string;
  profit: string;
  years: string;
  growth: string;
  ownerDependence: string;
  ownerComp: string;
  notes: string;
}

// Parse a currency-ish string ("$3.0M", "$750K", "1,200,000") to a number.
export function parseMoney(v: string): number {
  if (!v) return 0;
  const s = v.trim().toLowerCase().replace(/[$,\s]/g, "");
  const mult = s.endsWith("m") ? 1_000_000 : s.endsWith("k") ? 1_000 : 1;
  const n = parseFloat(s.replace(/[mk]$/, ""));
  return isNaN(n) ? 0 : n * mult;
}

// Build the natural-language input the AI tools receive from intake business fields.
export function buildBusinessInput(d: IntakeData): string {
  return [
    `Industry: ${d.industry}`,
    `Annual revenue: ${d.revenue}`,
    `Annual profit / owner earnings (EBITDA or SDE): ${d.profit}`,
    d.years.trim() ? `Years in business: ${d.years}` : "",
    d.growth ? `Growth trend: ${d.growth}` : "",
    d.ownerDependence ? `Owner involvement: ${d.ownerDependence}` : "",
    d.ownerComp.trim()
      ? `Owner's salary and personal expenses run through the business (add-backs to normalize earnings): ${d.ownerComp}`
      : "",
    d.notes.trim() ? `Additional context: ${d.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function fmtMoney(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n).toLocaleString()}`;
}
