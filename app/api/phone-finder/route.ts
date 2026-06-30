import { NextRequest, NextResponse } from "next/server";

const QE_API_KEY = process.env.QUICKENRICH_API_KEY ?? "";
const QE_BASE = "https://app.quickenrich.io/api/employees";

export async function GET(request: NextRequest) {
  if (!QE_API_KEY) {
    return NextResponse.json({ error: "API not configured." }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode"); // "linkedin" | "manual"

  const params = new URLSearchParams();

  if (mode === "linkedin") {
    const linkedin_url = searchParams.get("linkedin_url");
    if (!linkedin_url) {
      return NextResponse.json({ error: "LinkedIn URL required." }, { status: 400 });
    }
    params.set("linkedin_url", linkedin_url);
  } else {
    const company_url = searchParams.get("company_url");
    const first_name = searchParams.get("first_name");
    const last_name = searchParams.get("last_name");
    if (!company_url || !first_name || !last_name) {
      return NextResponse.json(
        { error: "Company URL, first name, and last name are required." },
        { status: 400 }
      );
    }
    params.set("company_url", company_url);
    params.set("first_name", first_name);
    params.set("last_name", last_name);
  }

  try {
    const res = await fetch(`${QE_BASE}/phone-search?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${QE_API_KEY}`,
        Accept: "application/json",
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("QuickEnrich phone-finder error:", err);
    return NextResponse.json({ error: "Request failed. Please try again." }, { status: 500 });
  }
}
