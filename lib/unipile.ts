const UNIPILE_DSN = process.env.UNIPILE_DSN ?? "";
const UNIPILE_API_KEY = process.env.UNIPILE_API_KEY ?? "";

function baseUrl(): string {
  return `https://${UNIPILE_DSN}`;
}

function assertConfigured() {
  if (!UNIPILE_DSN || !UNIPILE_API_KEY) {
    throw new Error("Unipile is not configured (UNIPILE_DSN / UNIPILE_API_KEY missing).");
  }
}

function headers() {
  return {
    "X-API-KEY": UNIPILE_API_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export interface HostedAuthLinkParams {
  name: string;
  successRedirectUrl: string;
  failureRedirectUrl: string;
  notifyUrl: string;
  expiresInMinutes?: number;
}

export interface HostedAuthLinkResponse {
  object: string;
  url: string;
}

export async function createHostedAuthLink(
  params: HostedAuthLinkParams
): Promise<{ status: number; data: HostedAuthLinkResponse }> {
  assertConfigured();
  const expiresOn = new Date(Date.now() + (params.expiresInMinutes ?? 15) * 60_000)
    .toISOString()
    .replace(/(\.\d{3})\d*Z$/, "$1Z");

  const res = await fetch(`${baseUrl()}/api/v1/hosted/accounts/link`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      type: "create",
      providers: ["LINKEDIN"],
      api_url: baseUrl(),
      expiresOn,
      name: params.name,
      success_redirect_url: params.successRedirectUrl,
      failure_redirect_url: params.failureRedirectUrl,
      notify_url: params.notifyUrl,
    }),
  });

  const data = await res.json();
  return { status: res.status, data };
}

export interface UnipileSearchItem {
  type: string;
  id: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  public_identifier?: string;
  public_profile_url?: string;
  profile_url?: string;
  profile_picture_url?: string;
  headline?: string;
  location?: string;
  industry?: string;
  network_distance?: string;
  open_profile?: boolean;
  premium?: boolean;
  current_positions?: Array<{
    company?: string;
    role?: string;
    location?: string;
    tenure?: string;
  }>;
}

export interface UnipileSearchResponse {
  object: string;
  items: UnipileSearchItem[];
  paging?: { start: number; page_count: number; total_count: number };
  cursor?: string | null;
}

export async function searchSalesNavigator(params: {
  accountId: string;
  searchUrl: string;
  cursor?: string | null;
  limit?: number;
}): Promise<{ status: number; data: UnipileSearchResponse }> {
  assertConfigured();
  const query = new URLSearchParams({
    account_id: params.accountId,
    limit: String(params.limit ?? 100),
  });
  if (params.cursor) query.set("cursor", params.cursor);

  const res = await fetch(`${baseUrl()}/api/v1/linkedin/search?${query.toString()}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ url: params.searchUrl }),
  });

  const data = await res.json();
  return { status: res.status, data };
}

export async function viewProfile(params: {
  accountId: string;
  identifier: string;
}): Promise<{ status: number; data: unknown }> {
  assertConfigured();
  const query = new URLSearchParams({ account_id: params.accountId, notify: "true" });

  const res = await fetch(
    `${baseUrl()}/api/v1/users/${encodeURIComponent(params.identifier)}?${query.toString()}`,
    { method: "GET", headers: headers() }
  );

  const data = await res.json();
  return { status: res.status, data };
}
