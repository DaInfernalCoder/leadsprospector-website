export interface UnipileAccount {
  accountId: string;
  name: string;
  connectedAt: string;
}

export interface CurrentPosition {
  company?: string;
  role?: string;
  location?: string;
  tenure?: string;
}

export interface LeadEnrichment {
  status: "idle" | "pending" | "done" | "not_found" | "error";
  email?: string;
  phone?: string;
  phoneType?: string;
  enrichedAt?: string;
}

export interface SalesNavLead {
  id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  headline?: string;
  location?: string;
  industry?: string;
  publicIdentifier?: string;
  publicProfileUrl?: string;
  profileUrl?: string;
  profilePictureUrl?: string;
  networkDistance?: string;
  openProfile: boolean;
  premium?: boolean;
  currentPositions: CurrentPosition[];
  enrichment: LeadEnrichment;
}

export type JobStatus = "idle" | "loading" | "scraped" | "capped" | "complete" | "error";

export interface JobMeta {
  id: string;
  searchUrl: string;
  createdAt: string;
  updatedAt: string;
  cursor: string | null;
  loadedCount: number;
  totalCount: number | null;
  cap: number;
  status: JobStatus;
}

export function accountKey(): string {
  return "internal:unipile:account";
}

export function jobsIndexKey(): string {
  return "internal:jobs:index";
}

export function jobMetaKey(jobId: string): string {
  return `internal:job:${jobId}:meta`;
}

export function jobLeadsKey(jobId: string): string {
  return `internal:job:${jobId}:leads`;
}
