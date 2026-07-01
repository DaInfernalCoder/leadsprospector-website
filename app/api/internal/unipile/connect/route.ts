import { NextResponse } from "next/server";
import { createHostedAuthLink } from "@/lib/unipile";
import { signValue } from "@/lib/internalAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK_TOKEN_PAYLOAD = "unipile-webhook";
const ACCOUNT_NAME = "sumit-sales-nav-tool";

export async function POST() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    return NextResponse.json({ error: "NEXT_PUBLIC_SITE_URL is not configured." }, { status: 500 });
  }

  try {
    const webhookToken = await signValue(WEBHOOK_TOKEN_PAYLOAD);
    const { status, data } = await createHostedAuthLink({
      name: ACCOUNT_NAME,
      successRedirectUrl: `${siteUrl}/unipile-callback?status=success`,
      failureRedirectUrl: `${siteUrl}/unipile-callback?status=failure`,
      notifyUrl: `${siteUrl}/api/internal/unipile/webhook?t=${encodeURIComponent(webhookToken)}`,
    });

    if (status >= 400) {
      return NextResponse.json({ error: "Failed to create auth link.", detail: data }, { status });
    }

    return NextResponse.json({ url: data.url });
  } catch (err) {
    console.error("Unipile connect error:", err);
    return NextResponse.json({ error: "Request failed. Please try again." }, { status: 500 });
  }
}
