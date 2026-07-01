import { NextRequest, NextResponse } from "next/server";
import { verifySignedValue } from "@/lib/internalAuth";
import { getKv } from "@/lib/kv";
import { accountKey, UnipileAccount } from "@/lib/internalTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK_TOKEN_PAYLOAD = "unipile-webhook";

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("t");
  if (!token || !(await verifySignedValue(WEBHOOK_TOKEN_PAYLOAD, token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { status?: string; account_id?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (!body.account_id || (body.status !== "CREATION_SUCCESS" && body.status !== "RECONNECTED")) {
    return NextResponse.json({ error: "Unexpected payload." }, { status: 400 });
  }

  const account: UnipileAccount = {
    accountId: body.account_id,
    name: body.name ?? "",
    connectedAt: new Date().toISOString(),
  };

  await getKv().set(accountKey(), account);

  return NextResponse.json({ success: true });
}
