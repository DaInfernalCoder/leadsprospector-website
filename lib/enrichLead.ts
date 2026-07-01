import { findEmail, findPhone } from "@/lib/quickenrich";
import { SalesNavLead } from "@/lib/internalTypes";

export async function enrichLead(lead: SalesNavLead): Promise<SalesNavLead> {
  const linkedinUrl = lead.publicProfileUrl;
  if (!linkedinUrl) {
    return { ...lead, enrichment: { status: "not_found" } };
  }

  try {
    const [email, phone] = await Promise.all([findEmail(linkedinUrl), findPhone(linkedinUrl)]);
    if (!email && !phone) {
      return { ...lead, enrichment: { status: "not_found", enrichedAt: new Date().toISOString() } };
    }
    return {
      ...lead,
      enrichment: {
        status: "done",
        email: email ?? undefined,
        phone: phone?.phone,
        phoneType: phone?.phoneType,
        enrichedAt: new Date().toISOString(),
      },
    };
  } catch (err) {
    console.error("Enrichment error:", err);
    return { ...lead, enrichment: { status: "error" } };
  }
}
