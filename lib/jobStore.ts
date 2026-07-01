import { getKv } from "@/lib/kv";
import { JobMeta, SalesNavLead, jobLeadsKey, jobMetaKey, jobsIndexKey } from "@/lib/internalTypes";

export async function getJobMeta(jobId: string): Promise<JobMeta | null> {
  return getKv().get<JobMeta>(jobMetaKey(jobId));
}

export async function saveJobMeta(meta: JobMeta): Promise<void> {
  await getKv().set(jobMetaKey(jobId(meta)), meta);
}

function jobId(meta: JobMeta): string {
  return meta.id;
}

export async function getJobLeads(jobId: string): Promise<SalesNavLead[]> {
  const leads = await getKv().get<SalesNavLead[]>(jobLeadsKey(jobId));
  return leads ?? [];
}

export async function saveJobLeads(jobId: string, leads: SalesNavLead[]): Promise<void> {
  await getKv().set(jobLeadsKey(jobId), leads);
}

export async function listJobIds(limit = 100): Promise<string[]> {
  return getKv().lrange<string>(jobsIndexKey(), 0, limit - 1);
}

export async function addJobToIndex(jobId: string): Promise<void> {
  await getKv().lpush(jobsIndexKey(), jobId);
}
