import { ArrowRight } from "lucide-react";
import CalComEmbed from "@/components/CalComEmbed";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import ICPSignalFinder from "@/components/ICPSignalFinder";

export default function Home() {
  const CAL_URL = "https://cal.com/michaelvcaldenmoore/partnerqualification?overlayCalendar=true";

  const caseStudies = [
    {
      niche: "Industrial Automation",
      result: "$85K",
      qualifier: "revenue added",
      timeframe: "in under 60 days",
      description: "Identified and introduced key decision-makers at target accounts, resulting in signed contracts ahead of forecast.",
    },
    {
      niche: "Recruitment",
      result: "$105K",
      qualifier: "revenue added",
      timeframe: "in a single quarter",
      description: "Built a qualified pipeline of hiring managers and HR leaders, converting introductions to retained searches.",
    },
    {
      niche: "Recruitment",
      result: "$100K",
      qualifier: "revenue added",
      timeframe: "in 6 months",
      description: "Systematic prospecting into mid-market companies expanding headcount produced consistent placement volume.",
    },
    {
      niche: "E-Sports",
      result: "€70K",
      qualifier: "new revenue",
      timeframe: "in 3 months",
      description: "Connected a European operator with brand partnership and sponsorship decision-makers across the sector.",
    },
    {
      niche: "Recruitment",
      result: "20 placements",
      qualifier: "closed",
      timeframe: "in 55 days",
      description: "High-velocity introduction campaign to HR directors at scaling technology companies.",
    },
    {
      niche: "Healthcare IT",
      result: "4 dream clients",
      qualifier: "secured",
      timeframe: "in under 90 days",
      description: "Navigated complex enterprise buying committees to land introductions with qualified healthcare system decision-makers.",
    },
    {
      niche: "Healthcare",
      result: "2 new partners",
      qualifier: "added",
      timeframe: "in 60 days",
      description: "Identified and introduced strategic partnership candidates to accelerate market expansion.",
    },
    {
      niche: "SaaS",
      result: "5 new clients",
      qualifier: "closed",
      timeframe: "in 48 days",
      description: "Targeted outreach to ideal customer profile companies produced high-quality pipeline that closed quickly.",
    },
    {
      niche: "Wealth Management",
      result: "6 introductions",
      qualifier: "delivered",
      timeframe: "in 46 days",
      description: "Pre-vetted individuals matched to advisor profile, delivered via warm email introduction with full context.",
    },
    {
      niche: "Contractor",
      result: "15 jobs",
      qualifier: "booked",
      timeframe: "in 5 days",
      description: "Performance-based engagement on a split-commission model. Qualified homeowner jobs delivered fast, with payment tied to closed work.",
    },
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
                Advisory &amp; Research Firm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6 max-w-3xl">
                Qualified introductions to{" "}
                <em className="italic font-light">your ideal clients.</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <p className="text-lg md:text-xl text-[#A8A49E] max-w-2xl mb-10 leading-relaxed">
                Caldenmoore is an advisory and research firm that identifies, vets, and introduces qualified prospects to B2B companies across industries. We handle the research and outreach. You receive warm introductions to clients ready to engage.
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
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">$85K – $105K</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Typical new revenue per engagement</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">9 industries</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Active verticals, 2023–2025</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]">&lt; 60 days</p>
                  <p className="text-sm text-[#A8A49E] mt-1">Average time to first results</p>
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
                  title: "Define your ideal client",
                  body: "We learn the profile of clients you serve best — industry, company size, geography, and the specific situations where you add the most value.",
                },
                {
                  step: "02",
                  title: "We identify and vet matches",
                  body: "When a company or individual fits your profile, we verify intent, fit, and readiness before any introduction is made.",
                },
                {
                  step: "03",
                  title: "Receive warm introductions",
                  body: "You meet qualified prospects with full context already in hand through a warm introduction made by us over email. No wasted conversations trying to figure out who&apos;s ready to buy.",
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

        {/* ICP Signal Finder */}
        <section id="signal-finder" className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Your Signal Strategy
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                See exactly how we would find your clients.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-10 leading-relaxed">
                Tell us who you serve and we will show you which signals we monitor, how we pre-vet, and what a client profile we have worked with that matches your business.
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
                How we find the right prospects.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                We monitor a network of public and proprietary signals that surface qualified buyers at genuine inflection points — before they have found a vendor.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  label: "Hiring Intent",
                  body: "Job postings for VP Sales, Head of Revenue, and RevOps roles at 50–500 person companies correlate with active vendor evaluation within 60 days of the first listing.",
                  tag: "SaaS, technology, services",
                },
                {
                  label: "Funding & Growth Events",
                  body: "Series A/B announcements signal a 30–90 day expansion sprint. PE platform acquisitions signal immediate add-on sourcing and vendor onboarding across portfolio companies.",
                  tag: "Venture-backed & PE-owned companies",
                },
                {
                  label: "Staffing Firm Triggers",
                  body: "ATS purchases, job board spend increases, and LinkedIn Recruiter license expansions signal a recruiting firm entering a growth phase with new placement targets.",
                  tag: "Staffing, recruitment, RPO",
                },
                {
                  label: "Healthcare Procurement Cycles",
                  body: "EHR migration announcements, CMS compliance deadlines, and GPO contract renewals open 60–120 day evaluation windows for healthcare IT and services vendors.",
                  tag: "Healthcare IT, medtech, clinical services",
                },
                {
                  label: "Leadership Transitions",
                  body: "C-suite and VP-level departures trigger vendor reviews within 30–90 days as incoming leaders audit existing relationships and establish new supplier preferences.",
                  tag: "Cross-industry",
                },
                {
                  label: "Entity & Expansion Filings",
                  body: "New subsidiary registrations, state business license filings, and geographic expansion announcements surface companies entering new markets with immediate advisory and vendor needs.",
                  tag: "Multi-market operators",
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
                B2B companies that compete on relationships.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                We work best with businesses where a single qualified introduction can materially change the quarter. Across verticals, the pattern is the same: the right conversation at the right time.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-px bg-[#E2DDD5] rounded-2xl overflow-hidden border border-[#E2DDD5]">
              {[
                {
                  title: "Staffing & Recruitment",
                  body: "Firms growing placement volume that need consistent access to HR directors and hiring managers at scaling companies — not job boards, but real conversations.",
                },
                {
                  title: "SaaS & Technology",
                  body: "Software companies targeting defined buyer personas in competitive markets where pipeline quality matters more than pipeline volume.",
                },
                {
                  title: "Healthcare & Life Sciences",
                  body: "Medical technology, health IT, and clinical services businesses navigating complex procurement cycles and multi-stakeholder buying committees.",
                },
                {
                  title: "Financial & Advisory Services",
                  body: "Wealth management, fintech, and professional services firms requiring pre-vetted introductions to qualified individuals and organizations.",
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
                Built for businesses that value their time.
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Pre-vetted, not prospected",
                  body: "Every introduction has been verified for fit, intent, and readiness. You receive qualified conversations, not a contact list.",
                },
                {
                  title: "Context-rich handoffs",
                  body: "Before you speak with anyone, we brief you. You know the situation, the opportunity, and what the prospect is looking for.",
                },
                {
                  title: "Engagements that move the needle",
                  body: "We focus on introductions that can materially change a quarter — not volume for the sake of activity metrics.",
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

        {/* Old Way vs New Way */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                The Difference
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 max-w-xl leading-tight">
                How most businesses grow, and how our partners do.
              </h2>
              <p className="text-[#6B6B65] text-lg max-w-2xl mb-16 leading-relaxed">
                The traditional path to acquiring qualified clients is slow, expensive, and unpredictable. There is a better model.
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
                      "Build a referral network over years",
                      "Run expensive marketing campaigns",
                      "Hire business development staff",
                      "Attend conferences and events",
                      "Chase introductions that may not close",
                      "Manage pipeline with uncertain quality",
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
                      "Define your ideal client profile once",
                      "Receive introductions as they become available",
                      "No overhead, no campaigns, no headcount",
                      "Pre-qualified before the first conversation",
                      "Full context delivered with every introduction",
                      "Pipeline that reflects real intent and fit",
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

        {/* Case Studies */}
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#111E2A]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <p className="text-xs uppercase tracking-widest text-[#C9A87C] font-medium mb-4">
                Results
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] mb-4 max-w-xl leading-tight">
                What our partners have built.
              </h2>
              <p className="text-[#A8A49E] text-lg max-w-2xl mb-16 leading-relaxed">
                Across nine industries. Client names withheld under NDA.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {caseStudies.map((cs, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.06}>
                  <div className="bg-[#1C2B3A] border border-white/8 rounded-2xl p-7 h-full flex flex-col">
                    <p className="text-xs font-medium text-[#C9A87C] uppercase tracking-widest mb-5">
                      {cs.niche}
                    </p>
                    <p className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#F5F0E8] leading-none mb-1">
                      {cs.result}
                    </p>
                    <p className="text-sm text-[#A07850] font-medium mb-1">{cs.qualifier}</p>
                    <p className="text-sm text-[#A8A49E] mb-5">{cs.timeframe}</p>
                    <p className="text-sm text-[#A8A49E]/70 leading-relaxed mt-auto">
                      {cs.description}
                    </p>
                    <p className="text-xs text-[#A8A49E]/40 mt-5 italic">
                      Client name withheld under NDA
                    </p>
                  </div>
                </AnimatedSection>
              ))}
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
