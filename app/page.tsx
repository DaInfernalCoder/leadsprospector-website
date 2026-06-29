import { ArrowRight } from "lucide-react";
import CalComEmbed from "@/components/CalComEmbed";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import ICPSignalFinder from "@/components/ICPSignalFinder";

export default function Home() {
  const CAL_URL = "https://cal.com/sumitdatta/15min?overlayCalendar=true";

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
                Research &amp; Advisory Firm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6 max-w-3xl">
                Deal flow for{" "}
                <em className="italic font-light">lower middle market M&amp;A advisors.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-lg md:text-xl text-[#A8A49E] max-w-2xl mb-10 leading-relaxed">
                Caldenmoore is a research and advisory firm that identifies, vets, and introduces off-market sellers to M&amp;A advisory firms and business brokers focused on the lower middle market. $250K–$5M EBITDA, off-market only.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#calendar"
                  className="inline-flex items-center gap-2 bg-[#A07850] text-[#F5F0E8] font-medium px-6 py-3.5 rounded-lg hover:bg-[#8B6A3E] transition-colors text-base"
                >
                  Schedule a Partner Call
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <a
                  href="#signal-finder"
                  className="inline-flex items-center gap-2 border-2 border-[#C9A87C]/50 text-[#F5F0E8] font-medium px-6 py-3.5 rounded-lg hover:bg-[#C9A87C]/10 transition-colors text-base"
                >
                  How would this work for me?
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade" delay={0.3}>
              <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-x-14 gap-y-8">
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">$250K–$5M EBITDA</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Target seller profile</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">&lt; 5 days</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Average time to first introduction</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-16 max-w-xl leading-tight">
                Simple by design.
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                {
                  step: "01",
                  title: "Define your deal mandate",
                  body: "We learn your deal criteria — industry focus, geography, revenue or EBITDA range, ownership situation, and the deal types where you add the most value.",
                },
                {
                  step: "02",
                  title: "We identify and vet targets",
                  body: "When a business fits your criteria and signals readiness, we confirm owner intent before any contact is made on your behalf.",
                },
                {
                  step: "03",
                  title: "Receive warm introductions",
                  body: "You meet business owners who are genuinely open to a conversation, with full context on the business and motivation already in hand.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.step} variant="fadeUp" delay={i * 0.1}>
                  <div>
                    <p className="text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#A07850]/40 mb-3 leading-none">
                      {item.step}
                    </p>
                    <h3 className="text-base font-medium text-[#1C1C1A] mb-3">{item.title}</h3>
                    <p className="text-[#6B6B65] leading-relaxed text-sm md:text-base">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Deal Flow Signal Finder */}
        <section id="signal-finder" className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Your Deal Flow Strategy
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                See exactly how we would source your deal flow.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-10 leading-relaxed">
                Tell us your deal mandate and we will show you which signals we monitor, how we pre-vet targets, and what a qualified deal profile looks like for your thesis.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <ICPSignalFinder />
            </AnimatedSection>
          </div>
        </section>

        {/* Signal Intelligence */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Signal Intelligence
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                How we surface proprietary deal flow.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                We monitor a network of public and proprietary signals that surface motivated sellers and acquisition targets before they reach broker networks or public listings.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  label: "Succession Planning Signals",
                  body: "Owner age and tenure data combined with estate planning activity and industry succession benchmarks surface businesses approaching a transition before any listing appears.",
                  tag: "Manufacturing, distribution, professional services",
                },
                {
                  label: "PE Add-on Sourcing",
                  body: "PE platform acquisitions in fragmented industries trigger active add-on searches within 30–90 days. We identify geographic and product-line adjacencies before the mandate is public.",
                  tag: "PE-backed roll-up strategies",
                },
                {
                  label: "Leadership Transition Events",
                  body: "Founder and CEO departures at privately held companies signal readiness for a sale process, often before the owner has engaged an advisor.",
                  tag: "Cross-industry",
                },
                {
                  label: "Revenue & EBITDA Milestones",
                  body: "Companies crossing acquisition thresholds are monitored via SBA filings, state revenue disclosures, and credit facility activity — surfacing deal-ready businesses at the right size.",
                  tag: "Lower middle market",
                },
                {
                  label: "Business Broker Registrations",
                  body: "New CIM filings and business-for-sale registrations reveal motivated sellers. We surface these before they reach broad buyer pools or auction processes.",
                  tag: "All verticals",
                },
                {
                  label: "Strategic Acquirer Intent",
                  body: "Corporate development hires, M&A-specific job postings, and executive team expansions signal active buy-side mandates before any deal is announced.",
                  tag: "Corporate buyers",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.label} variant="fadeUp" delay={i * 0.07}>
                  <div className="h-full">
                    <div className="w-6 h-px bg-[#A07850] mb-5" />
                    <h3 className="text-base font-medium text-[#1C1C1A] mb-2">{item.label}</h3>
                    <p className="text-sm text-[#6B6B65] leading-relaxed mb-3">{item.body}</p>
                    <p className="text-xs text-[#A07850] font-medium">{item.tag}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Who We Work With
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                M&amp;A professionals who compete on deal flow.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                We work best with advisors where a single qualified introduction to a motivated seller can materially change the year. The pattern is the same across mandates: the right deal at the right time.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-px bg-[#E2DDD5] rounded-2xl overflow-hidden border border-[#E2DDD5]">
              {[
                {
                  title: "M&A Advisory Firms",
                  body: "Boutique and lower middle market advisory firms running sell-side or buy-side mandates that need proprietary off-market deal flow ahead of formal broker processes.",
                },
                {
                  title: "Business Brokers",
                  body: "Professionals representing business owners who need qualified financial and strategic buyers introduced with confirmed acquisition mandates and capital availability.",
                },
                {
                  title: "Private Equity",
                  body: "PE firms and family offices sourcing platform investments and add-on acquisitions in fragmented industries, where off-market access matters most.",
                },
                {
                  title: "Corporate Development",
                  body: "In-house M&A teams at strategic acquirers building proprietary pipelines before deals reach broker networks or competitive auction processes.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.05} className="h-full">
                  <div className="bg-[#FAFAF6] p-8 md:p-10 h-full">
                    <h3 className="text-base font-medium text-[#1C1C1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B6B65] leading-relaxed">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Caldenmoore */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Why Caldenmoore
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-16 max-w-xl leading-tight">
                Built for advisors who close on relationships.
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Owner intent confirmed, not assumed",
                  body: "Every introduction has verified the business owner is open to a conversation. You receive qualified meetings, not a contact list.",
                },
                {
                  title: "Deal context included",
                  body: "Before the first call, you know the business, the ownership situation, and the seller's motivation. No blind introductions.",
                },
                {
                  title: "Off-market by design",
                  body: "Targets are identified before they reach broker networks or public listings. You access deals before they are competitive.",
                },
                {
                  title: "No cold outreach overhead",
                  body: "No marketing budget. No BD staff. No blast campaigns. The only overhead is taking the introduction.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.1}>
                  <div>
                    <div className="w-6 h-px bg-[#A07850] mb-5" />
                    <h3 className="text-base font-medium text-[#1C1C1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B6B65] leading-relaxed">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Old Way vs New Way */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                The Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                How most advisors source deals, and how our partners do.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                The traditional path to proprietary deal flow is slow, network-dependent, and unpredictable. There is a better model.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <div className="rounded-2xl border border-[#E2DDD5] p-8 md:p-10 h-full bg-[#F5F2EC]">
                  <p className="text-xs font-medium text-[#6B6B65]/70 uppercase tracking-widest mb-8">
                    Traditional Approach
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Build a referral network over years through conferences",
                      "Rely on inbound listings from broker networks",
                      "Cold outreach to business owners with no intent signal",
                      "Spend months qualifying deals that miss criteria",
                      "Pay for database subscriptions with stale contact data",
                      "Miss off-market opportunities before they reach listing",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#6B6B65]">
                        <span className="w-4 h-4 rounded-full border border-[#C5BEB4] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.2}>
                <div className="rounded-2xl bg-[#1C2B3A] p-8 md:p-10 h-full">
                  <p className="text-xs font-medium text-[#A07850] uppercase tracking-widest mb-8">
                    With Caldenmoore
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Define your deal mandate once",
                      "Receive introductions to owners with confirmed interest",
                      "No wasted conversations on unqualified parties",
                      "Off-market access before deals reach broker processes",
                      "Full context on situation, motivation, and business profile",
                      "Deal flow that reflects real intent and fit",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#E8E4DC]">
                        <span className="w-4 h-4 rounded-full bg-[#A07850] mt-0.5 shrink-0 flex items-center justify-center">
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

        {/* CTA + Calendar */}
        <section id="calendar" className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                Ready to source off-market deal flow?
              </h2>
              <p className="text-[#6B6B65] text-lg mb-12 max-w-xl leading-relaxed">
                Schedule a short call to discuss your lower middle market mandate and whether we are a fit.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp">
              <div className="bg-white rounded-2xl border border-[#E2DDD5] overflow-hidden">
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
