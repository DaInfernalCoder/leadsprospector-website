import { SalesNavLead } from "@/lib/internalTypes";

const HEADERS = [
  "full_name",
  "first_name",
  "last_name",
  "is_open_profile",
  "linkedin",
  "profile_id",
  "email",
  "phone",
];

function csvCell(value: string | number | boolean | undefined | null): string {
  const str = value === undefined || value === null ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function leadsToCsv(leads: SalesNavLead[]): string {
  const rows = leads.map((lead) =>
    [
      lead.name,
      lead.firstName,
      lead.lastName,
      lead.openProfile,
      lead.publicProfileUrl,
      lead.id,
      lead.enrichment.email,
      lead.enrichment.phone,
    ]
      .map(csvCell)
      .join(",")
  );

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
