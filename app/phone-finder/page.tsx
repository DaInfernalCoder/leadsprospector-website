"use client";

import { useState } from "react";
import { Phone, Search, Building2, User, Linkedin, MapPin, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SearchMode = "linkedin" | "manual";

interface PhoneResult {
  first_name?: string;
  last_name?: string;
  company_name?: string;
  company_url?: string;
  employee_phone?: string;
  employee_phone_type?: string;
  employee_count?: string;
  address?: string;
  city?: string;
  region_code?: string;
  zip?: string;
  country_code?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: PhoneResult | PhoneResult[];
  meta?: {
    credits_used: number;
    remaining_credits: number;
    reason?: string;
  };
  error?: string;
}

export default function PhoneFinderPage() {
  const [mode, setMode] = useState<SearchMode>("linkedin");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PhoneResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit =
    !loading &&
    (mode === "linkedin"
      ? linkedinUrl.trim().length > 0
      : companyUrl.trim().length > 0 && firstName.trim().length > 0 && lastName.trim().length > 0);

  async function handleSearch() {
    if (!canSubmit) return;
    setLoading(true);
    setResult(null);
    setNotFound(false);
    setError(null);

    const params = new URLSearchParams({ mode });
    if (mode === "linkedin") {
      params.set("linkedin_url", linkedinUrl.trim());
    } else {
      params.set("company_url", companyUrl.trim());
      params.set("first_name", firstName.trim());
      params.set("last_name", lastName.trim());
    }

    try {
      const res = await fetch(`/api/phone-finder?${params.toString()}`);
      const data: ApiResponse = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || data.message || "Something went wrong. Please try again.");
        return;
      }

      if (
        !data.data ||
        (Array.isArray(data.data) && data.data.length === 0) ||
        data.meta?.reason === "PHONE_NOT_FOUND"
      ) {
        setNotFound(true);
        return;
      }

      const record = Array.isArray(data.data) ? data.data[0] : data.data;
      if (!record?.employee_phone || record.employee_phone === "N/A") {
        setNotFound(true);
      } else {
        setResult(record);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111E2A]">
        {/* Hero */}
        <section className="relative py-24 md:py-36 px-4 md:px-6 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#111E2A]" />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-6">
              Phone Finder
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6">
              Find anyone&apos;s{" "}
              <em className="italic font-light">direct phone number.</em>
            </h1>
            <p className="text-lg md:text-xl text-[#A8A49E] max-w-2xl mx-auto mb-10 leading-relaxed">
              Look up a contact&apos;s direct phone number by LinkedIn URL or company and name. No credit charged if no phone is found.
            </p>
          </div>
        </section>

        {/* Search tool */}
        <section className="px-4 md:px-6 pb-24 -mt-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E2DDD5] p-8 md:p-10">

              {/* Mode toggle */}
              <div className="flex gap-2 mb-8 p-1 bg-[#F5F0E8] rounded-xl">
                <button
                  onClick={() => { setMode("linkedin"); setResult(null); setNotFound(false); setError(null); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    mode === "linkedin"
                      ? "bg-[#1C2B3A] text-[#F5F0E8] shadow-sm"
                      : "text-[#6B6B65] hover:text-[#1C1C1A]"
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  By LinkedIn URL
                </button>
                <button
                  onClick={() => { setMode("manual"); setResult(null); setNotFound(false); setError(null); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    mode === "manual"
                      ? "bg-[#1C2B3A] text-[#F5F0E8] shadow-sm"
                      : "text-[#6B6B65] hover:text-[#1C1C1A]"
                  }`}
                >
                  <User className="w-4 h-4" />
                  By Name &amp; Company
                </button>
              </div>

              {/* Inputs */}
              {mode === "linkedin" ? (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full border border-[#E2DDD5] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#6B6B65]/50 focus:outline-none focus:ring-2 focus:ring-[#A07850]/40 focus:border-[#A07850] bg-[#FAFAF6]"
                  />
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
                      Company URL
                    </label>
                    <input
                      type="text"
                      value={companyUrl}
                      onChange={(e) => setCompanyUrl(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="https://company.com or company.com"
                      className="w-full border border-[#E2DDD5] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#6B6B65]/50 focus:outline-none focus:ring-2 focus:ring-[#A07850]/40 focus:border-[#A07850] bg-[#FAFAF6]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="John"
                        className="w-full border border-[#E2DDD5] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#6B6B65]/50 focus:outline-none focus:ring-2 focus:ring-[#A07850]/40 focus:border-[#A07850] bg-[#FAFAF6]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Doe"
                        className="w-full border border-[#E2DDD5] rounded-xl px-4 py-3 text-sm text-[#1C1C1A] placeholder-[#6B6B65]/50 focus:outline-none focus:ring-2 focus:ring-[#A07850]/40 focus:border-[#A07850] bg-[#FAFAF6]"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleSearch}
                disabled={!canSubmit}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1C2B3A] text-[#F5F0E8] font-medium px-6 py-3.5 rounded-xl hover:bg-[#2C3F52] transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#F5F0E8]/30 border-t-[#F5F0E8] rounded-full animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Find Phone Number
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Error */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Not found */}
              {notFound && !error && (
                <div className="mt-6 p-4 bg-[#FAFAF6] border border-[#E2DDD5] rounded-xl text-sm text-[#6B6B65] text-center">
                  No phone number found for this contact. No credit was charged.
                </div>
              )}

              {/* Result */}
              {result && (
                <div className="mt-8 border-t border-[#E2DDD5] pt-8">
                  <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                    Result
                  </p>

                  {/* Phone — prominent */}
                  <div className="bg-[#1C2B3A] rounded-xl p-5 mb-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C9A87C]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#C9A87C]" />
                    </div>
                    <div>
                      <p className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] tracking-wide">
                        {result.employee_phone}
                      </p>
                      {result.employee_phone_type && result.employee_phone_type !== "N/A" && (
                        <p className="text-xs text-[#A8A49E] mt-0.5 capitalize">
                          {result.employee_phone_type} line
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="grid gap-3">
                    {(result.first_name || result.last_name) && (
                      <div className="flex items-center gap-3 text-sm text-[#1C1C1A]">
                        <User className="w-4 h-4 text-[#6B6B65] flex-shrink-0" />
                        <span>{[result.first_name, result.last_name].filter(Boolean).join(" ")}</span>
                      </div>
                    )}
                    {result.company_name && (
                      <div className="flex items-center gap-3 text-sm text-[#1C1C1A]">
                        <Building2 className="w-4 h-4 text-[#6B6B65] flex-shrink-0" />
                        <span>
                          {result.company_name}
                          {result.company_url && (
                            <>
                              {" "}
                              <a
                                href={result.company_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#A07850] hover:underline"
                              >
                                {result.company_url.replace(/^https?:\/\/(www\.)?/, "")}
                              </a>
                            </>
                          )}
                        </span>
                      </div>
                    )}
                    {result.employee_count && (
                      <div className="flex items-center gap-3 text-sm text-[#1C1C1A]">
                        <Users className="w-4 h-4 text-[#6B6B65] flex-shrink-0" />
                        <span>{result.employee_count} employees</span>
                      </div>
                    )}
                    {(result.city || result.region_code) && (
                      <div className="flex items-center gap-3 text-sm text-[#1C1C1A]">
                        <MapPin className="w-4 h-4 text-[#6B6B65] flex-shrink-0" />
                        <span>
                          {[result.city, result.region_code, result.country_code]
                            .filter(Boolean)
                            .join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <p className="text-center text-xs text-[#A8A49E]/60 mt-6">
              Data powered by QuickEnrich &nbsp;·&nbsp; 1 credit per phone found
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
