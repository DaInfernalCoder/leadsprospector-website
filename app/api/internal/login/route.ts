import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, createSessionToken } from "@/lib/internalAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const expectedPassword = process.env.INTERNAL_TOOL_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json({ error: "Tool not configured." }, { status: 500 });
  }

  let password: string | undefined;
  try {
    const body = await request.json();
    password = body?.password;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof password !== "string" || password !== expectedPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
  return response;
}
