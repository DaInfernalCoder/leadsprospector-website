import { NextRequest, NextResponse } from "next/server";
import { enrichLead } from "@/lib/enrichLead";
import { getJobLeads, saveJobLeads } from "@/lib/jobStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { jobId, leadId } = await request.json().catch(() => ({}));
  if (!jobId || !leadId) {
    return NextResponse.json({ error: "jobId and leadId required." }, { status: 400 });
  }

  const leads = await getJobLeads(jobId);
  const index = leads.findIndex((l) => l.id === leadId);
  if (index === -1) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  const updated = await enrichLead(leads[index]);
  leads[index] = updated;
  await saveJobLeads(jobId, leads);

  return NextResponse.json({ lead: updated });
}
