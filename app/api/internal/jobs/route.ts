import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getJobMeta, saveJobMeta, saveJobLeads, listJobIds, addJobToIndex } from "@/lib/jobStore";
import { JobMeta } from "@/lib/internalTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_CAP = 1000;

export async function GET() {
  const ids = await listJobIds();
  const jobs = (await Promise.all(ids.map((id) => getJobMeta(id)))).filter(
    (j): j is JobMeta => !!j
  );
  return NextResponse.json({ jobs });
}

export async function POST(request: NextRequest) {
  const { searchUrl, cap } = await request.json().catch(() => ({}));
  if (!searchUrl || typeof searchUrl !== "string") {
    return NextResponse.json({ error: "searchUrl required." }, { status: 400 });
  }

  const id = randomUUID();
  const now = new Date().toISOString();
  const meta: JobMeta = {
    id,
    searchUrl,
    createdAt: now,
    updatedAt: now,
    cursor: null,
    loadedCount: 0,
    totalCount: null,
    cap: typeof cap === "number" && cap > 0 ? cap : DEFAULT_CAP,
    status: "idle",
  };

  await saveJobMeta(meta);
  await saveJobLeads(id, []);
  await addJobToIndex(id);

  return NextResponse.json({ job: meta });
}
