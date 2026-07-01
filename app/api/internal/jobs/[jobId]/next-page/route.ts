import { NextResponse } from "next/server";
import { searchSalesNavigator, UnipileSearchItem } from "@/lib/unipile";
import { getJobMeta, saveJobMeta, getJobLeads, saveJobLeads } from "@/lib/jobStore";
import { getKv } from "@/lib/kv";
import { accountKey, SalesNavLead, UnipileAccount } from "@/lib/internalTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function toLead(item: UnipileSearchItem): SalesNavLead {
  return {
    id: item.id,
    name: item.name,
    firstName: item.first_name,
    lastName: item.last_name,
    headline: item.headline,
    location: item.location,
    industry: item.industry,
    publicIdentifier: item.public_identifier,
    publicProfileUrl: item.public_profile_url,
    profileUrl: item.profile_url,
    profilePictureUrl: item.profile_picture_url,
    networkDistance: item.network_distance,
    openProfile: !!item.open_profile,
    premium: item.premium,
    currentPositions: item.current_positions ?? [],
    enrichment: { status: "idle" },
  };
}

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const meta = await getJobMeta(jobId);
  if (!meta) {
    return NextResponse.json({ error: "Job not found." }, { status: 404 });
  }
  if (meta.status === "scraped" || meta.status === "capped" || meta.status === "complete") {
    return NextResponse.json({ job: meta, leads: [] });
  }

  const account = await getKv().get<UnipileAccount>(accountKey());
  if (!account) {
    return NextResponse.json({ error: "No LinkedIn account connected." }, { status: 400 });
  }

  try {
    const remaining = meta.cap - meta.loadedCount;
    const limit = Math.max(1, Math.min(100, remaining));
    const { status, data } = await searchSalesNavigator({
      accountId: account.accountId,
      searchUrl: meta.searchUrl,
      cursor: meta.cursor,
      limit,
    });

    if (status >= 400) {
      meta.status = "error";
      meta.updatedAt = new Date().toISOString();
      await saveJobMeta(meta);
      return NextResponse.json({ error: "Unipile search failed.", detail: data }, { status });
    }

    const newLeads = (data.items ?? []).map(toLead);
    const leads = await getJobLeads(jobId);
    const updatedLeads = [...leads, ...newLeads];
    await saveJobLeads(jobId, updatedLeads);

    meta.cursor = data.cursor ?? null;
    meta.loadedCount = updatedLeads.length;
    meta.totalCount = data.paging?.total_count ?? meta.totalCount;
    meta.updatedAt = new Date().toISOString();
    meta.status = !meta.cursor ? "scraped" : meta.loadedCount >= meta.cap ? "capped" : "loading";
    await saveJobMeta(meta);

    return NextResponse.json({ job: meta, leads: newLeads });
  } catch (err) {
    console.error("Sales Nav next-page error:", err);
    meta.status = "error";
    await saveJobMeta(meta);
    return NextResponse.json({ error: "Request failed. Please try again." }, { status: 500 });
  }
}
