import { SalesNavLead } from "@/lib/internalTypes";

const HEADERS = [
  "Name",
  "Headline",
  "Company",
  "Title",
  "Location",
  "Open Profile",
  "LinkedIn URL",
  "Email",
  "Phone",
  "Phone Type",
];

function csvCell(value: string | number | boolean | undefined | null): string {
  const str = value === undefined || value === null ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function leadsToCsv(leads: SalesNavLead[]): string {
  const rows = leads.map((lead) => {
    const position = lead.currentPositions[0];
    return [
      lead.name,
      lead.headline,
      position?.company,
      position?.role,
      lead.location,
      lead.openProfile ? "Yes" : "No",
      lead.publicProfileUrl,
      lead.enrichment.email,
      lead.enrichment.phone,
      lead.enrichment.phoneType,
    ]
      .map(csvCell)
      .join(",");
  });

  return [HEADERS.join(","), ...rows].join("\n");
}

export function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
