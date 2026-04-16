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

        {/* Hero — dark */}
        <section className="relative py-24 md:py-36 px-4 md:px-6 overflow-hidden bg-[#111E2A]">
          {/* Background image — subtle texture */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          {/* Bottom fade to match next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#111E2A]" />
          <div className="relative max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown" delay={0}>
              <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-6">
                Signal-Based Introduction Service
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6 max-w-3xl">
                Qualified introductions to{" "}
                <em className="italic font-light">decision-makers</em> ready to buy.
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-lg md:text-xl text-[#A8A49E] max-w-2xl mb-10 leading-relaxed">
                Caldenmoore connects B2B companies with pre-vetted prospects at genuine buying triggers, including funding events, leadership changes, technology migrations, and expansion signals, before your competitors are in the conversation.
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
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">$0</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Prospecting overhead for our partners</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">100% warm</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Every introduction pre-vetted and confirmed</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">Signal-triggered</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Funding, leadership change, tech migration, and more</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works — light */}
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
                  title: "Define your ideal customer",
                  body: "We learn the profile of companies you serve best: size, industry, buying trigger, geography, and the specific situations where you create the most value.",
                },
                {
                  step: "02",
                  title: "We identify and vet matches",
                  body: "When a company fits your profile and hits a buying trigger, we verify intent, fit, and readiness before any introduction is made.",
                },
                {
                  step: "03",
                  title: "Receive warm introductions",
                  body: "You meet qualified prospects with full context already in hand through a warm introduction made by us over email. No wasted conversations trying to figure out who is ready to buy.",
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

        {/* ICP Signal Finder — dark */}
        <section id="signal-finder" className="py-20 md:py-28 px-4 md:px-6 bg-[#1C2B3A]">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-4">
                Your Signal Strategy
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] mb-4 leading-tight">
                See exactly how we would find your customers.
              </h2>
              <p className="text-[#A8A49E] text-lg max-w-2xl mb-10 leading-relaxed">
                Tell us who you sell to and we will show you which signals we monitor, how we pre-vet, and what a typical introduction looks like for your company.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <ICPSignalFinder />
            </AnimatedSection>
          </div>
        </section>

        {/* Signal Intelligence — light */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Signal Intelligence
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                How we find the right prospects.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                We monitor a network of public and proprietary signals that surface decision-makers at genuine buying moments, before they have already chosen a vendor.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  label: "Funding Events",
                  body: "Crunchbase and PitchBook Series A/B/C announcements, SEC Reg D filings, and SBA loan originations flag companies with newly unlocked budget actively evaluating vendors.",
                  tag: "Post-funding companies",
                },
                {
                  label: "Leadership Changes",
                  body: "LinkedIn new-role announcements and SEC 8-K officer departure filings identify incoming executives who replace 60%+ of inherited vendor relationships within 90 days.",
                  tag: "New C-suite and VP hires",
                },
                {
                  label: "Hiring Signals",
                  body: "Job posting volume and role types on LinkedIn, Indeed, and Greenhouse reveal technology gaps, growth priorities, and active procurement cycles before any RFP is issued.",
                  tag: "Headcount and capability growth",
                },
                {
                  label: "Technology Migrations",
                  body: "BuiltWith stack-change feeds, G2 review patterns, and GitHub public activity identify companies actively evaluating or switching platforms, an open window for new vendors.",
                  tag: "Active vendor evaluation",
                },
                {
                  label: "Company Expansion",
                  body: "State SOS new-office registrations, UCC-1 equipment filings, and job postings in new geographies signal market entry and the procurement needs that come with it.",
                  tag: "New markets and geographies",
                },
                {
                  label: "Regulatory & Compliance Events",
                  body: "Federal Register rule publications, new license-type filings, and SOC2/HIPAA certification registrations create hard deadlines that force immediate vendor and partner decisions.",
                  tag: "Compliance-driven procurement",
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

        {/* Who We Introduce — dark */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#1C2B3A]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-4">
                The Companies We Work With
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] mb-4 max-w-xl leading-tight">
                Prospects at a genuine inflection point.
              </h2>
              <p className="text-[#A8A49E] text-lg max-w-2xl mb-16 leading-relaxed">
                Every introduction comes from a real trigger. A funding round, a leadership change, a technology migration. These are not lists. These are conversations.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {[
                {
                  title: "Post-funding companies",
                  body: "Startups and growth-stage companies with fresh capital actively evaluating and deploying new tools, services, and partners. Budget is available and decisions are being made now.",
                },
                {
                  title: "Companies with new leadership",
                  body: "Organizations where a new executive hire signals an imminent vendor re-evaluation. New leaders bring new priorities and rarely keep all of the previous team's vendors.",
                },
                {
                  title: "Businesses entering new markets",
                  body: "Companies expanding into new geographies, verticals, or product lines with active procurement needs and a compressed timeline to get the right partners in place.",
                },
                {
                  title: "Organizations mid-transformation",
                  body: "Companies undergoing digital transformation, compliance shifts, or operational restructuring who need specialized partners to execute within a defined window.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.05} className="h-full">
                  <div className="bg-[#243548] p-8 md:p-10 h-full">
                    <h3 className="text-base font-medium text-[#F5F0E8] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#A8A49E] leading-relaxed">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Caldenmoore — light */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Why Caldenmoore
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-16 max-w-xl leading-tight">
                Built for professionals who value their time.
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Pre-vetted, not prospected",
                  body: "Every prospect we introduce has been verified for fit, intent, and buying readiness. You receive qualified conversations, not a contact list.",
                },
                {
                  title: "Context-rich handoffs",
                  body: "Before you speak with anyone, we brief you. You know the situation, the assets in question, and what the individual is looking for.",
                },
                {
                  title: "Fit confirmed before the call",
                  body: "Every prospect has been screened for company size, budget signals, and buying intent before the introduction is made. You receive qualified conversations, not guesses.",
                },
                {
                  title: "No prospecting overhead",
                  body: "No marketing budget. No SDR team. No cold calls. The only overhead is taking the introduction.",
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

        {/* Old Way vs New Way — dark */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#1C2B3A]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-4">
                The Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] mb-4 max-w-xl leading-tight">
                How most professionals grow, and how our partners do.
              </h2>
              <p className="text-[#A8A49E] text-lg max-w-2xl mb-16 leading-relaxed">
                Most professionals are still grinding for introductions the same way they did twenty years ago. Our partners aren't.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.1}>
              <div className="border-t border-white/12">
                {/* Column headers */}
                <div className="grid grid-cols-2 py-4 mb-2">
                  <p className="text-xs uppercase tracking-widest text-white/30 font-medium">The old way</p>
                  <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium">With Caldenmoore</p>
                </div>
                {/* Rows */}
                {[
                  ["Spend years building a referral network, hoping it pays off", "Define who you actually want to work with"],
                  ["Pay for ads and content that rarely convert", "Get introduced when a prospect is actively buying"],
                  ["Hire and manage BDRs with high turnover", "No campaigns, no staff, no ongoing overhead"],
                  ["Fly to conferences for lukewarm conversations", "Every introduction arrives pre-qualified"],
                  ["Chase warm introductions that go cold anyway", "You know the backstory before the first call"],
                  ["Fill a CRM with names that rarely become clients", "A pipeline built on real intent, not optimism"],
                ].map(([old, newWay], i) => (
                  <div key={i} className="grid grid-cols-2 border-t border-white/8 py-5 gap-8">
                    <p className="text-sm text-white/30 leading-relaxed">{old}</p>
                    <p className="text-sm text-[#F5F0E8] leading-relaxed font-medium">{newWay}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA + Calendar — light */}
        <section id="calendar" className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                Ready to meet your next client?
              </h2>
              <p className="text-[#6B6B65] text-lg mb-12 max-w-xl leading-relaxed">
                Schedule a short call to discuss your ideal client profile and whether we are a fit.
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
