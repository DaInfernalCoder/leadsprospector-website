import { NextResponse } from "next/server";
import { getJobMeta, saveJobMeta } from "@/lib/jobStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const meta = await getJobMeta(jobId);
  if (!meta) {
    return NextResponse.json({ error: "Job not found." }, { status: 404 });
  }

  meta.status = "complete";
  meta.updatedAt = new Date().toISOString();
  await saveJobMeta(meta);

  return NextResponse.json({ job: meta });
}
