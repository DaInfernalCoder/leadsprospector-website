import { NextRequest, NextResponse } from "next/server";
import { viewProfile } from "@/lib/unipile";
import { enrichLead } from "@/lib/enrichLead";
import { getJobLeads, saveJobLeads } from "@/lib/jobStore";
import { getKv } from "@/lib/kv";
import { accountKey, UnipileAccount } from "@/lib/internalTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const { leadId } = await request.json().catch(() => ({}));
  if (!leadId) {
    return NextResponse.json({ error: "leadId required." }, { status: 400 });
  }

  const account = await getKv().get<UnipileAccount>(accountKey());
  if (!account) {
    return NextResponse.json({ error: "No LinkedIn account connected." }, { status: 400 });
  }

  const leads = await getJobLeads(jobId);
  const index = leads.findIndex((l) => l.id === leadId);
  if (index === -1) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  const lead = leads[index];
  const identifier = lead.publicIdentifier || lead.id;

  try {
    await viewProfile({ accountId: account.accountId, identifier });
  } catch (err) {
    // Profile view is best-effort (outreach signal) — enrichment still proceeds.
    console.error("View profile failed:", err);
  }

  const enriched = await enrichLead(lead);
  leads[index] = enriched;
  await saveJobLeads(jobId, leads);

  return NextResponse.json({ lead: enriched });
}
