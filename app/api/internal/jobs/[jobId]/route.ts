import { NextResponse } from "next/server";
import { getJobMeta, getJobLeads } from "@/lib/jobStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const meta = await getJobMeta(jobId);
  if (!meta) {
    return NextResponse.json({ error: "Job not found." }, { status: 404 });
  }
  const leads = await getJobLeads(jobId);
  return NextResponse.json({ job: meta, leads });
}
