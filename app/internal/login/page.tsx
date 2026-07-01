"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function InternalLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password.trim() || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/internal/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Login failed.");
        return;
      }
      router.push("/internal/sales-nav");
      router.refresh();
    } catch {
      setError("Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-900 p-8"
      >
        <h1 className="text-lg font-semibold mb-6">Internal Tools</h1>
        <label className="block text-sm text-neutral-400 mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password.trim()}
          className="mt-5 w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
