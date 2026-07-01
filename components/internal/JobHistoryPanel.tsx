"use client";

import { JobMeta } from "@/lib/internalTypes";

export default function JobHistoryPanel({
  jobs,
  currentJobId,
  onOpen,
}: {
  jobs: JobMeta[];
  currentJobId?: string;
  onOpen: (jobId: string) => void;
}) {
  if (jobs.length === 0) {
    return <p className="text-sm text-neutral-500">No past searches yet.</p>;
  }

  return (
    <ul className="space-y-1">
      {jobs.map((job) => (
        <li key={job.id}>
          <button
            onClick={() => onOpen(job.id)}
            className={`w-full text-left rounded-lg px-3 py-2 text-sm ${
              job.id === currentJobId
                ? "bg-neutral-800 text-neutral-100"
                : "text-neutral-400 hover:bg-neutral-900"
            }`}
          >
            <div className="truncate">{job.searchUrl}</div>
            <div className="text-xs text-neutral-500">
              {job.loadedCount} leads · {job.status} · {new Date(job.createdAt).toLocaleDateString()}
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
