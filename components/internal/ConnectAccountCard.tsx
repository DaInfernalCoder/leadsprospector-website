"use client";

import { useState } from "react";

export default function ConnectAccountCard({ finalizing }: { finalizing: boolean }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConnect() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/internal/unipile/connect", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? "Failed to start connection.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-24 rounded-xl border border-neutral-800 bg-neutral-900 p-8 text-center">
      <h2 className="text-lg font-semibold mb-2">Connect LinkedIn account</h2>
      <p className="text-sm text-neutral-400 mb-6">
        {finalizing
          ? "Finalizing connection..."
          : "Link your LinkedIn account through Unipile before scraping Sales Navigator searches."}
      </p>
      {finalizing ? (
        <div className="text-sm text-neutral-500">Waiting for confirmation...</div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          {loading ? "Redirecting..." : "Connect LinkedIn Account"}
        </button>
      )}
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </div>
  );
}
