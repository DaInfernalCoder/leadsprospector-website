const QE_API_KEY = process.env.QUICKENRICH_API_KEY ?? "";
const QE_BASE = "https://app.quickenrich.io/api/employees";

interface QuickEnrichEmployee {
  email?: string;
  employee_phone?: string;
  employee_phone_type?: string;
}

interface QuickEnrichResponse {
  success: boolean;
  data?: QuickEnrichEmployee | QuickEnrichEmployee[];
}

async function fetchQuickEnrich(path: string, linkedinUrl: string): Promise<QuickEnrichResponse> {
  if (!QE_API_KEY) throw new Error("QUICKENRICH_API_KEY is not configured.");

  const params = new URLSearchParams({ linkedin_url: linkedinUrl });
  const res = await fetch(`${QE_BASE}/${path}?${params.toString()}`, {
    headers: { Authorization: `Bearer ${QE_API_KEY}`, Accept: "application/json" },
  });
  return res.json();
}

export async function findEmail(linkedinUrl: string): Promise<string | null> {
  const data = await fetchQuickEnrich("search", linkedinUrl);
  const employee = Array.isArray(data.data) ? data.data[0] : data.data;
  return employee?.email ?? null;
}

export async function findPhone(
  linkedinUrl: string
): Promise<{ phone: string; phoneType?: string } | null> {
  const data = await fetchQuickEnrich("phone-search", linkedinUrl);
  const employee = Array.isArray(data.data) ? data.data[0] : data.data;
  if (!employee?.employee_phone) return null;
  return { phone: employee.employee_phone, phoneType: employee.employee_phone_type };
}
