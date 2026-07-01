"use client";

import { useEffect, useRef, useState } from "react";

const POPUP_WIDTH = 520;
const POPUP_HEIGHT = 720;

export default function ConnectAccountCard({ onConnected }: { onConnected: () => void }) {
  const [loading, setLoading] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const popupRef = useRef<Window | null>(null);
  const pollRef = useRef<number | null>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== "unipile-connect") return;
      if (event.data.status === "success") {
        cleanup();
        onConnected();
      } else {
        setError("Connection failed or was cancelled.");
        cleanup();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function cleanup() {
    popupRef.current?.close();
    popupRef.current = null;
    if (pollRef.current) {
      window.clearInterval(pollRef.current);
      pollRef.current = null;
    }
    setConnecting(false);
  }

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

      const left = window.screenX + (window.outerWidth - POPUP_WIDTH) / 2;
      const top = window.screenY + (window.outerHeight - POPUP_HEIGHT) / 2;
      const popup = window.open(
        data.url,
        "unipile-connect",
        `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},left=${left},top=${top}`
      );

      if (!popup) {
        // Popup blocked by the browser: fall back to a full-page redirect.
        window.location.href = data.url;
        return;
      }

      popupRef.current = popup;
      setConnecting(true);
      pollRef.current = window.setInterval(() => {
        if (popupRef.current?.closed) {
          if (pollRef.current) window.clearInterval(pollRef.current);
          pollRef.current = null;
          setConnecting(false);
          // Popup was closed manually (X, or user closed the window itself)
          // without a postMessage landing first — do one last status check
          // in case the connection actually completed.
          fetch("/api/internal/unipile/status")
            .then((r) => r.json())
            .then((d) => {
              if (d.connected) onConnected();
            })
            .catch(() => {});
        }
      }, 500);
    } catch {
      setError("Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-24 rounded-xl border border-neutral-800 bg-neutral-900 p-8 text-center">
        <h2 className="text-lg font-semibold mb-2">Connect LinkedIn account</h2>
        <p className="text-sm text-neutral-400 mb-6">
          Link your LinkedIn account through Unipile before scraping Sales Navigator searches.
        </p>
        <button
          onClick={handleConnect}
          disabled={loading || connecting}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium disabled:opacity-40"
        >
          {loading ? "Starting..." : "Connect LinkedIn Account"}
        </button>
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      </div>

      {connecting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-center">
            <button
              onClick={cleanup}
              aria-label="Cancel"
              className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-200"
            >
              ✕
            </button>
            <p className="text-sm text-neutral-300">Complete LinkedIn login in the popup window...</p>
            <p className="text-xs text-neutral-500 mt-2">Closes automatically once connected.</p>
          </div>
        </div>
      )}
    </>
  );
}
