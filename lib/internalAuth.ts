// Uses the Web Crypto API (not node:crypto) so this file works in both the
// Node.js route handler runtime and the Edge runtime used by middleware.ts.

export const SESSION_COOKIE_NAME = "internal_session";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function getSecret(): string {
  const secret = process.env.INTERNAL_SESSION_SECRET;
  if (!secret) {
    throw new Error("INTERNAL_SESSION_SECRET is not set.");
  }
  return secret;
}

function toBase64Url(bytes: ArrayBuffer | Uint8Array): string {
  const buf = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (const b of buf) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function sign(payload: string): Promise<string> {
  const key = await hmacKey();
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toBase64Url(signature);
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

// Generic HMAC signing for short opaque values (e.g. a webhook query token),
// reusing INTERNAL_SESSION_SECRET rather than introducing a second secret.
export async function signValue(value: string): Promise<string> {
  return sign(value);
}

export async function verifySignedValue(value: string, signature: string): Promise<boolean> {
  const expected = await sign(value);
  return constantTimeEqual(fromBase64Url(signature), fromBase64Url(expected));
}

export async function createSessionToken(): Promise<string> {
  const payload = toBase64Url(new TextEncoder().encode(JSON.stringify({ iat: Date.now() })));
  return `${payload}.${await sign(payload)}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  if (!(await verifySignedValue(payload, signature))) return false;

  try {
    const { iat } = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    return typeof iat === "number" && Date.now() - iat < MAX_AGE_MS;
  } catch {
    return false;
  }
}
