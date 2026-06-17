import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import ExitSystemFlow from "@/components/ExitSystemFlow";

const title = "The Claude Exit System | Add value before you talk to a buyer";
const description =
  "A free system for business owners preparing to sell. Answer once and walk through four analyses: your valuation, the levers that add the most value, your buyer types, and your exit readiness score. Built on Claude AI and a framework refined across 100+ transactions.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function ExitSystem() {
  const CALENDLY_URL = "https://calendly.com/sunnymabusinessadvisors/new-meeting";

  const steps = [
    { n: "01", name: "Business Valuation Audit", body: "A realistic valuation range from your numbers, and what moves it." },
    { n: "02", name: "Value Optimizer", body: "The highest-leverage moves to make before you go to market." },
    { n: "03", name: "Buyer Type Matcher", body: "The buyer archetypes most likely to acquire a business like yours." },
    { n: "04", name: "Exit Readiness Score", body: "Scored across the 10 criteria buyers grade, with a fix list." },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative py-24 md:py-36 px-4 md:px-6 overflow-hidden bg-[#111E2A]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#111E2A]" />
          <div className="relative max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown" delay={0}>
              <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-6">
                The Claude Exit System
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6 max-w-3xl">
                Add value to your business{" "}
                <em className="italic font-light">before you ever talk to a buyer.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-lg md:text-xl text-[#A8A49E] max-w-2xl mb-10 leading-relaxed">
                Most owners spend months talking to buyers and walk away with far less than they expected. Not because the business is bad, but because they never fixed what buyers actually look at. Answer a few questions once, and Claude walks you through four analyses in under 5 minutes.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#start"
                  className="inline-flex items-center gap-2 bg-[#A07850] text-[#F5F0E8] font-medium px-6 py-3.5 rounded-lg hover:bg-[#8B6A3E] transition-colors text-base"
                >
                  Start my exit analysis
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <a
                  href="#calendar"
                  className="inline-flex items-center gap-2 border-2 border-[#C9A87C]/50 text-[#F5F0E8] font-medium px-6 py-3.5 rounded-lg hover:bg-[#C9A87C]/10 transition-colors text-base"
                >
                  Talk to us
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade" delay={0.3}>
              <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-x-14 gap-y-8">
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">100+ transactions</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Behind the framework</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">4 analyses</p>
                  <p className="text-sm text-[#A8A49E] mt-1">From one short form</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">&lt; 5 min</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Start to finish</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Preview of the four steps */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                Four analyses, one form.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                Answer once. Claude runs all four on the same framework we use on live engagements, then walks you through them one at a time.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {steps.map((s, i) => (
                <AnimatedSection key={s.n} variant="fadeUp" delay={i * 0.07}>
                  <div className="h-full">
                    <p className="text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#A07850]/40 mb-3 leading-none">
                      {s.n}
                    </p>
                    <h3 className="text-base font-medium text-[#1C1C1A] mb-2">{s.name}</h3>
                    <p className="text-sm text-[#6B6B65] leading-relaxed">{s.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The guided flow */}
        <section id="start" className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-3xl mx-auto">
            <ExitSystemFlow />
          </div>
        </section>

        {/* Booking */}
        <section id="calendar" className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                Book your call.
              </h2>
              <p className="text-[#6B6B65] text-lg mb-12 max-w-xl leading-relaxed">
                Now that you know what it is worth, we do the work of connecting you to a buyer. We help owners sell businesses over $200k in net income, with nothing upfront. Bring your analysis and we will pressure-test your number and start the process.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp">
              <div className="bg-white rounded-2xl border border-[#E2DDD5] overflow-hidden">
                <CalendlyEmbed url={CALENDLY_URL} />
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer linkedinUrl="https://www.linkedin.com/in/sumit-d/" />
    </>
  );
}
