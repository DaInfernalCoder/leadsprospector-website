"use client";

import { useEffect, useState } from "react";

function initialMessage(): { status: "success" | "failure"; hasOpener: boolean; message: string } {
  if (typeof window === "undefined") {
    return { status: "success", hasOpener: false, message: "Finishing up..." };
  }
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status") === "success" ? "success" : "failure";
  const hasOpener = !!window.opener;
  const message = hasOpener
    ? status === "success"
      ? "Connected. This window will close..."
      : "Connection failed. This window will close..."
    : status === "success"
      ? "Connected. You can close this tab."
      : "Connection failed. You can close this tab.";
  return { status, hasOpener, message };
}

export default function UnipileCallbackPage() {
  const [{ status, hasOpener, message }] = useState(initialMessage);

  useEffect(() => {
    if (!hasOpener) return;
    window.opener.postMessage({ type: "unipile-connect", status }, window.location.origin);
    const timer = setTimeout(() => window.close(), 300);
    return () => clearTimeout(timer);
  }, [hasOpener, status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100">
      <p className="text-sm text-neutral-400">{message}</p>
    </div>
  );
}
