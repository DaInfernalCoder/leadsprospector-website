"use client";

import { SalesNavLead } from "@/lib/internalTypes";

export default function LeadsTable({
  leads,
  enrichingIds,
  onEnrich,
}: {
  leads: SalesNavLead[];
  enrichingIds: Set<string>;
  onEnrich: (leadId: string) => void;
}) {
  if (leads.length === 0) {
    return <p className="text-sm text-neutral-500 py-8 text-center">No leads loaded yet.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-800">
      <table className="w-full text-sm">
        <thead className="bg-neutral-900 text-neutral-400 text-left">
          <tr>
            <th className="px-3 py-2 font-medium">Name</th>
            <th className="px-3 py-2 font-medium">Headline</th>
            <th className="px-3 py-2 font-medium">Company</th>
            <th className="px-3 py-2 font-medium">Location</th>
            <th className="px-3 py-2 font-medium">Open Profile</th>
            <th className="px-3 py-2 font-medium">Email</th>
            <th className="px-3 py-2 font-medium">Phone</th>
            <th className="px-3 py-2 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => {
            const isEnriching = enrichingIds.has(lead.id);
            return (
              <tr key={lead.id} className="border-t border-neutral-800 hover:bg-neutral-900/50">
                <td className="px-3 py-2">
                  {lead.publicProfileUrl ? (
                    <a
                      href={lead.publicProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {lead.name ?? "Unknown"}
                    </a>
                  ) : (
                    lead.name ?? "Unknown"
                  )}
                </td>
                <td className="px-3 py-2 text-neutral-400 max-w-xs truncate">{lead.headline}</td>
                <td className="px-3 py-2 text-neutral-400">{lead.currentPositions[0]?.company}</td>
                <td className="px-3 py-2 text-neutral-400">{lead.location}</td>
                <td className="px-3 py-2">
                  {lead.openProfile ? (
                    <span className="rounded-full bg-green-500/15 text-green-400 px-2 py-0.5 text-xs">
                      Open
                    </span>
                  ) : (
                    <span className="rounded-full bg-neutral-800 text-neutral-500 px-2 py-0.5 text-xs">
                      No
                    </span>
                  )}
                </td>
                <td className="px-3 py-2 text-neutral-300">{lead.enrichment.email ?? "—"}</td>
                <td className="px-3 py-2 text-neutral-300">{lead.enrichment.phone ?? "—"}</td>
                <td className="px-3 py-2">
                  {lead.enrichment.status === "done" ? (
                    <span className="text-xs text-neutral-500">Enriched</span>
                  ) : (
                    <button
                      onClick={() => onEnrich(lead.id)}
                      disabled={isEnriching}
                      className="text-xs text-blue-400 hover:underline disabled:opacity-40"
                    >
                      {isEnriching ? "Enriching..." : "Enrich"}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
