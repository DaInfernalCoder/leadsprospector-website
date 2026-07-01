import { NextRequest, NextResponse } from "next/server";
import { enrichLead } from "@/lib/enrichLead";
import { getJobLeads, saveJobLeads } from "@/lib/jobStore";
import { SalesNavLead } from "@/lib/internalTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BATCH = 15;
const CONCURRENCY = 5;

export async function POST(request: NextRequest) {
  const { jobId, leadIds } = await request.json().catch(() => ({}));
  if (!jobId || !Array.isArray(leadIds) || leadIds.length === 0) {
    return NextResponse.json({ error: "jobId and leadIds required." }, { status: 400 });
  }
  if (leadIds.length > MAX_BATCH) {
    return NextResponse.json({ error: `Max ${MAX_BATCH} leads per batch.` }, { status: 400 });
  }

  const leads = await getJobLeads(jobId);
  const idSet = new Set(leadIds);
  const targets = leads.filter((l) => idSet.has(l.id));

  const results: SalesNavLead[] = [];
  for (let i = 0; i < targets.length; i += CONCURRENCY) {
    const chunk = targets.slice(i, i + CONCURRENCY);
    const enriched = await Promise.all(chunk.map(enrichLead));
    results.push(...enriched);
  }

  const resultsById = new Map(results.map((l) => [l.id, l]));
  const updatedLeads = leads.map((l) => resultsById.get(l.id) ?? l);
  await saveJobLeads(jobId, updatedLeads);

  return NextResponse.json({ leads: results });
}
