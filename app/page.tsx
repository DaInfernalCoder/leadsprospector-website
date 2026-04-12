import { ArrowRight } from "lucide-react";
import CalComEmbed from "@/components/CalComEmbed";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import ICPSignalFinder from "@/components/ICPSignalFinder";

export default function Home() {
  const CAL_URL = "https://cal.com/sumitdatta/partner-call";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="py-24 md:py-36 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown" delay={0}>
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-6">
                Wealth Introduction Service
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.08] tracking-tight mb-6 max-w-3xl">
                Qualified introductions to high-net-worth families.
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
                Caldenmoore connects RIAs and family offices with pre-vetted individuals and families following exits, inheritance, or concentrated equity events. Typical engagements: $1M to $10M+, with family office mandates to $100M.
              </p>
              <a
                href="#calendar"
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-medium px-6 py-3.5 rounded-lg hover:bg-gray-700 transition-colors text-base"
              >
                Schedule a Partner Call
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </AnimatedSection>

            <AnimatedSection variant="fade" delay={0.3}>
              <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap gap-x-14 gap-y-8">
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-900">$1B+</p>
                  <p className="text-sm text-gray-500 mt-1">Wealth transitions facilitated, 2023–2025</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-900">$1M – $100M</p>
                  <p className="text-sm text-gray-500 mt-1">Introduceable asset range per engagement</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-gray-900">Post-liquidity</p>
                  <p className="text-sm text-gray-500 mt-1">Exits, inheritance, concentrated equity</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F6F3]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16 max-w-xl leading-tight">
                Simple by design.
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                {
                  step: "01",
                  title: "Define your ideal client",
                  body: "We learn the profile of families you serve best — asset size, complexity, geography, and the specific situations where you add the most value.",
                },
                {
                  step: "02",
                  title: "We identify and vet matches",
                  body: "When an individual or family fits your profile, we verify intent, asset size, and readiness before any introduction is made.",
                },
                {
                  step: "03",
                  title: "Receive warm introductions",
                  body: "You meet qualified prospects with full context already in hand. No cold outreach. No wasted conversations.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.step} variant="fadeUp" delay={i * 0.1}>
                  <div>
                    <p className="text-xs font-semibold text-teal-700 mb-4 tracking-widest">
                      {item.step}
                    </p>
                    <h3 className="text-base font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Signal Intelligence */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                Signal Intelligence
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 max-w-xl leading-tight">
                How we find the right families.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
                We monitor a network of public and proprietary signals that surface HNWIs at genuine inflection points — before they have found an advisor.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  label: "Regulatory Filings",
                  body: "SEC Form ADV, Form 4, and 13D/13G filings flag advisory relationship changes, insider equity dispositions, and significant ownership shifts in public companies.",
                  tag: "Post-exit founders, executives",
                },
                {
                  label: "M&A Activity",
                  body: "Business broker listings, LOI registrations, SBA loan payoffs, and deal announcements identify owners who have completed or are nearing a sale.",
                  tag: "Business owners after exit",
                },
                {
                  label: "Real Estate Records",
                  body: "County deed transfers and title changes on properties valued $1M+ surface individuals deploying or repositioning capital after a wealth event.",
                  tag: "Liquidity event indicators",
                },
                {
                  label: "Probate & Estate Filings",
                  body: "Public estate inventories and new trust formations flag inheritance recipients who are navigating a material change in their financial picture.",
                  tag: "Inheritance recipients",
                },
                {
                  label: "Corporate Events",
                  body: "IPO and SPAC S-1/S-4 registrations, RSU vesting schedules, and executive departure filings identify individuals ahead of or immediately following a liquidity event.",
                  tag: "Concentrated equity holders",
                },
                {
                  label: "Entity Formations",
                  body: "Delaware and Wyoming LLC and LP filings, family office formations, and multi-jurisdictional trust restructurings signal first-time or transitional wealth management needs.",
                  tag: "Families mid-transition",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.label} variant="fadeUp" delay={i * 0.07}>
                  <div className="h-full">
                    <div className="w-6 h-px bg-teal-600 mb-5" />
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.body}</p>
                    <p className="text-xs text-teal-700 font-medium">{item.tag}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Introduce */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                The Families We Work With
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 max-w-xl leading-tight">
                Individuals at a genuine inflection point.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
                Every introduction comes from a real transition. A liquidity event, an inheritance, a material change in a family&apos;s financial picture. These are not lists. These are conversations.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
              {[
                {
                  title: "Business owners after exit",
                  body: "Founders and owners navigating significant liquidity following a sale, merger, or recapitalization. Often their first time managing wealth at this scale.",
                },
                {
                  title: "Inheritance recipients",
                  body: "Individuals and families receiving substantial transfers who need trusted guidance on preservation, tax efficiency, and long-term deployment.",
                },
                {
                  title: "Concentrated equity holders",
                  body: "Executives with significant RSUs, options, or private company shares who require specialized wealth planning before or after a liquidity event.",
                },
                {
                  title: "Families mid-transition",
                  body: "Multi-generational families restructuring or consolidating wealth across entities, often across multiple advisors and jurisdictions.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.05} className="h-full">
                  <div className="bg-white p-8 md:p-10 h-full">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Caldenmoore */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F6F3]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                Why Caldenmoore
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16 max-w-xl leading-tight">
                Built for advisors who value their time.
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Pre-vetted, not prospected",
                  body: "Every individual we introduce has been verified for asset size, intent, and readiness. You receive qualified conversations, not a contact list.",
                },
                {
                  title: "Context-rich handoffs",
                  body: "Before you speak with anyone, we brief you. You know the situation, the assets in question, and what the individual is looking for.",
                },
                {
                  title: "Ticket sizes that matter",
                  body: "We work exclusively in the $1M–$100M range. No sub-threshold introductions, no time wasted on accounts that won&apos;t move the needle.",
                },
                {
                  title: "No prospecting overhead",
                  body: "No marketing budget. No SDR team. No cold calls. The only overhead is taking the introduction.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.1}>
                  <div>
                    <div className="w-6 h-px bg-teal-600 mb-5" />
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Old Way vs New Way */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                The Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 max-w-xl leading-tight">
                How most advisors grow, and how our partners do.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mb-16 leading-relaxed">
                The traditional path to acquiring high-net-worth clients is slow, expensive, and unpredictable. There is a better model.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <div className="rounded-2xl border border-gray-200 p-8 md:p-10 h-full">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Traditional Approach
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Build a referral network over years",
                      "Run expensive marketing campaigns",
                      "Hire business development staff",
                      "Attend conferences and events",
                      "Chase introductions that may not close",
                      "Manage pipeline with uncertain quality",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                        <span className="w-4 h-4 rounded-full border border-gray-300 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.2}>
                <div className="rounded-2xl border border-teal-200 bg-teal-50/40 p-8 md:p-10 h-full">
                  <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-8">
                    With Caldenmoore
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Define your ideal client profile once",
                      "Receive introductions as they become available",
                      "No overhead, no campaigns, no headcount",
                      "Pre-qualified before the first conversation",
                      "Full context delivered with every introduction",
                      "Pipeline that reflects real intent and asset size",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-800">
                        <span className="w-4 h-4 rounded-full bg-teal-600 mt-0.5 shrink-0 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                            <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ICP Signal Finder */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F6F3]">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                Your Signal Strategy
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                See exactly how we would find your clients.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mb-10 leading-relaxed">
                Tell us who you serve and we will show you which signals we monitor, how we pre-vet, and what a typical introduction looks like for your practice.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <ICPSignalFinder />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA + Calendar */}
        <section id="calendar" className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F6F3]">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                Ready to meet your next client?
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-xl leading-relaxed">
                Schedule a short call to discuss your ideal client profile and whether we are a fit.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <CalComEmbed url={CAL_URL} />
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer linkedinUrl="https://www.linkedin.com/in/sumit-d/" />
    </>
  );
}
