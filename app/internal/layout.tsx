"use client";

import { useRouter, usePathname } from "next/navigation";

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLogin = pathname === "/internal/login";

  async function handleLogout() {
    await fetch("/api/internal/logout", { method: "POST" });
    router.push("/internal/login");
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {!isLogin && (
        <header className="border-b border-neutral-800 px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-300">Internal Tools</span>
          <button
            onClick={handleLogout}
            className="text-sm text-neutral-400 hover:text-neutral-200"
          >
            Log out
          </button>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
}
