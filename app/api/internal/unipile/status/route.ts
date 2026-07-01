import { NextResponse } from "next/server";
import { getKv } from "@/lib/kv";
import { accountKey, UnipileAccount } from "@/lib/internalTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const account = await getKv().get<UnipileAccount>(accountKey());
    return NextResponse.json({ connected: !!account, account: account ?? null });
  } catch (err) {
    console.error("Unipile status error:", err);
    return NextResponse.json({ error: "Request failed." }, { status: 500 });
  }
}
