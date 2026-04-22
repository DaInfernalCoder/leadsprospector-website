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
                Founder Exit Network
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6 max-w-3xl">
                Introduced to the right buyers,{" "}
                <em className="italic font-light">before the process begins.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-lg md:text-xl text-[#A8A49E] max-w-2xl mb-10 leading-relaxed">
                Caldenmoore connects founders approaching an exit with strategic acquirers, private equity firms, and family offices actively deploying capital — before investment bankers get involved and leverage shifts.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#calendar"
                  className="inline-flex items-center gap-2 bg-[#A07850] text-[#F5F0E8] font-medium px-6 py-3.5 rounded-lg hover:bg-[#8B6A3E] transition-colors text-base"
                >
                  Schedule a Conversation
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <a
                  href="#signal-finder"
                  className="inline-flex items-center gap-2 border-2 border-[#C9A87C]/50 text-[#F5F0E8] font-medium px-6 py-3.5 rounded-lg hover:bg-[#C9A87C]/10 transition-colors text-base"
                >
                  Which buyers would we find for you?
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade" delay={0.3}>
              <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-x-14 gap-y-8">
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">$5M – $500M</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Transaction range we work within</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">12–36 months</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Before the formal process begins</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">Strategic, PE & FO</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Buyer types actively deploying capital</p>
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
                  title: "Define your business profile",
                  body: "We learn your sector, revenue profile, deal structure preferences, and timeline. This shapes the buyer mandate criteria we match against.",
                },
                {
                  step: "02",
                  title: "We identify and vet buyers",
                  body: "When an acquirer fits your profile — right sector, right check size, active deployment mandate — we verify intent and capital availability before any introduction is made.",
                },
                {
                  step: "03",
                  title: "Receive warm introductions",
                  body: "You meet serious buyers with full context already in hand, through a private introduction made by us. No banker overhead. No broad process. Just the right conversation at the right time.",
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

        {/* Buyer Signal Finder */}
        <section id="signal-finder" className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Your Buyer Match Strategy
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                See exactly which buyers we would find for you.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-10 leading-relaxed">
                Tell us about your business and we will show you which buyer types we monitor, how we verify mandate fit, and what a typical introduction looks like for your situation.
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
                How we find buyers who are actively looking.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                We monitor a network of public and proprietary signals that surface acquirers at the moment their mandate is active and capital is deployed — before they are visible to a broad market process.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  label: "PE Fund Close Activity",
                  body: "New fund closes and capital deployment deadlines create predictable acquisition windows. We track fund vintage dates and deployment timelines to surface sponsors under active pressure to put capital to work.",
                  tag: "Private equity sponsors",
                },
                {
                  label: "Platform Deal Completions",
                  body: "After a PE firm closes a platform acquisition, add-on activity typically accelerates within 12–24 months. We track 8-K and PitchBook announcements to identify sponsors in active bolt-on mode.",
                  tag: "Add-on acquisition mandates",
                },
                {
                  label: "Strategic M&A Patterns",
                  body: "Public company 8-K and proxy filings, combined with advisor engagement signals, surface strategic acquirers with board-approved inorganic growth mandates in specific sectors.",
                  tag: "Corporate acquirers",
                },
                {
                  label: "Family Office Mandates",
                  body: "Delaware and Wyoming entity formations, SBA loan activity, and registered investment activity flag family offices that have shifted from financial assets to direct acquisitions.",
                  tag: "Family office buyers",
                },
                {
                  label: "Sector Consolidation Signals",
                  body: "Roll-up activity in a sector — multiple acquisitions of similar businesses within 18 months — identifies consolidators actively building scale in your market before they advertise it.",
                  tag: "Roll-up acquirers",
                },
                {
                  label: "Independent Sponsor Activity",
                  body: "Independent sponsors without committed capital move faster and with more flexibility than institutional PE. We track deal closings and lender relationships to identify sponsors actively sourcing in your size range.",
                  tag: "Independent sponsors",
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

        {/* Who We Connect Founders With */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                The Buyers We Work With
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                Buyers with an active mandate and available capital.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                Every introduction comes from a verified mandate. Not a cold buyer list. Not a broker network. Acquirers who are actively looking for businesses in your sector, at your size, on a structure that works for you.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-px bg-[#E2DDD5] rounded-2xl overflow-hidden border border-[#E2DDD5]">
              {[
                {
                  title: "Strategic acquirers",
                  body: "Corporate buyers with board-approved M&A mandates in your sector. Often the highest-valuation buyers for businesses with customer relationships, IP, or talent they cannot build organically.",
                },
                {
                  title: "Private equity firms",
                  body: "Sponsors with fresh capital and deployment timelines. We focus on firms whose existing portfolio creates a genuine strategic fit — not generalist funds chasing yield.",
                },
                {
                  title: "Family offices",
                  body: "Single and multi-family offices that have shifted toward direct acquisitions. Longer hold periods, less process friction, and often more flexibility on deal structure and founder transition terms.",
                },
                {
                  title: "Independent sponsors",
                  body: "Deal-by-deal sponsors who move faster and negotiate differently than institutional PE. Well suited for founders who want a cleaner, more direct process without a full banker-run auction.",
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
                Built for founders who have not started a process yet.
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Buyers who fit your deal",
                  body: "Every buyer we introduce has been verified for sector focus, check size, deal structure flexibility, and active capital deployment. You meet acquirers who can actually close — not a list of names.",
                },
                {
                  title: "Context-rich handoffs",
                  body: "Before any introduction, we brief both sides. The buyer understands your business. You understand their mandate. The first conversation is substantive, not exploratory.",
                },
                {
                  title: "Your size, your terms",
                  body: "We work exclusively in the $5M–$500M transaction range with buyers whose mandates match. No mismatched check sizes. No buyers who need to raise capital after meeting you.",
                },
                {
                  title: "No banker overhead — yet",
                  body: "Bankers are valuable in the right moment. That moment is not now. Early buyer relationships created without an engagement letter give you optionality and negotiating position when the time comes.",
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
                How most founders exit, and how our founders do.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                The traditional path to an exit hands leverage to advisors and buyers who know the market better than you do. There is a better starting position.
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
                      "Hire an investment banker when ready to sell",
                      "Run a broad process with dozens of buyers",
                      "Pay 3–5% to an advisor who controls the information flow",
                      "Negotiate from the middle of a competitive auction",
                      "Meet buyers for the first time under LOI pressure",
                      "Accept the deal the process produces",
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
                      "Build buyer relationships 1–3 years before a formal process",
                      "Meet acquirers who specifically fit your sector and deal size",
                      "Control the narrative before advisors get involved",
                      "Negotiate from a position of existing buyer interest",
                      "Enter any formal process with known counterparties",
                      "Create optionality — sell when it makes sense, not when you have to",
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
                Ready to know which buyers are looking for a business like yours?
              </h2>
              <p className="text-[#6B6B65] text-lg mb-12 max-w-xl leading-relaxed">
                Schedule a short call to discuss your business, your timeline, and whether we are a fit.
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
