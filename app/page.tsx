"use client";

import { Radio, Layers, Zap, ChevronDown, Network, Activity, RefreshCcw, TrendingUp } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import RoutingLayerCard from "@/components/RoutingLayerCard";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const CALENDLY_URL =
    "https://calendly.com/sumit-leadsprospectr/leadsprospectr";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-[#0f172a] text-white">
        <div className="max-w-5xl mx-auto text-left">
          <AnimatedSection variant="fadeDown" delay={0}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Banks route capital.
              <br />
              <span className="text-[#0d9488]">We route access.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <p className="inline-block text-sm uppercase tracking-wide text-white border border-[#0d9488] rounded-md px-4 py-2 mb-6">
              INFRASTRUCTURE • NOT A SERVICE
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Trusted in over $1B of routed B2B transactions (2023-2025).
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <CalendlyEmbed url={CALENDLY_URL} />
          </AnimatedSection>
        </div>
      </section>

      {/* Infrastructure Performance Section */}
      <section className="py-16 px-4 bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeDown">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] text-center mb-4">
              NETWORK METRICS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Infrastructure Performance
            </h2>
            <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
              Real-time visibility into routing operations. Scale measured in
              throughput, not transactions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            <AnimatedSection variant="fadeUp" delay={0.05}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                <Zap className="w-8 h-8 text-[#0d9488] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  ROUTES PROCESSED
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  847k <span className="text-sm font-normal text-white/70">total</span>
                </p>
                <p className="flex items-center gap-1 mt-2 text-sm text-[#0d9488] font-medium">
                  <TrendingUp className="w-4 h-4" /> +23%
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                <Activity className="w-8 h-8 text-[#0d9488] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  ROUTING VELOCITY
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  2.4k <span className="text-sm font-normal text-white/70">/day</span>
                </p>
                <p className="flex items-center gap-1 mt-2 text-sm text-[#0d9488] font-medium">
                  <TrendingUp className="w-4 h-4" /> +18%
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                <Network className="w-8 h-8 text-[#0d9488] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  QUALIFICATION RATE
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">87%</p>
                <p className="flex items-center gap-1 mt-2 text-sm text-[#0d9488] font-medium">
                  <TrendingUp className="w-4 h-4" /> +5%
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                <RefreshCcw className="w-8 h-8 text-[#0d9488] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  CONNECTION DENSITY
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">94%</p>
                <p className="flex items-center gap-1 mt-2 text-sm text-[#0d9488] font-medium">
                  <TrendingUp className="w-4 h-4" /> +12%
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <AnimatedSection variant="fadeUp" delay={0.25}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                <Zap className="w-8 h-8 text-[#0d9488] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  NETWORK UPTIME
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">99.97%</p>
                <p className="text-sm text-white/70 mb-3">Last 30 days</p>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-[#0d9488] to-emerald-500"
                    style={{ width: "99.97%" }}
                  />
                </div>
                <p className="text-sm text-[#0d9488] font-medium mt-2 text-right">
                  Operational
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.3}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
                <Zap className="w-8 h-8 text-[#0d9488] mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  AVG RESPONSE TIME
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  &lt;120ms
                </p>
                <p className="text-sm text-white/70 mb-3">P95 latency</p>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-[#0d9488] to-emerald-500"
                    style={{ width: "65%" }}
                  />
                </div>
                <p className="text-sm text-white mt-2 text-right">185ms</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] text-center mb-3">
              INFRASTRUCTURE SCOPE
            </p>
            <p className="text-base md:text-lg text-white/90 text-center">
              $1.2B+ in total routed transaction value • 450+ active network
              nodes • 12 enterprise sectors
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Routing Layer Section */}
      <section className="py-16 px-4 bg-[#0f172a] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection variant="fadeDown">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] mb-4">
              THE ROUTING LAYER
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Connect with Your Ideal Clients
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              B2B executives and business owners partner with myoProcess to get
              connected directly with their ideal client profile through our
              intelligent routing infrastructure.
            </p>
          </AnimatedSection>
          <div className="space-y-4">
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <RoutingLayerCard
                stepNumber={1}
                title="Signal Layer"
                description="Incoming buyer signals, intent data, and qualification triggers"
                icon={<Radio className="w-8 h-8 md:w-9 md:h-9" strokeWidth={1.5} />}
              />
            </AnimatedSection>
            <div className="flex justify-center text-[#0d9488]">
              <ChevronDown className="w-8 h-8" strokeWidth={2} />
            </div>
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <RoutingLayerCard
                stepNumber={2}
                title="Routing Layer"
                description="Real-time matching, qualification filtering, and pathway control"
                icon={<Layers className="w-8 h-8 md:w-9 md:h-9" strokeWidth={1.5} />}
                youAreHere
              />
            </AnimatedSection>
            <div className="flex justify-center text-[#0d9488]">
              <ChevronDown className="w-8 h-8" strokeWidth={2} />
            </div>
            <AnimatedSection variant="fadeUp" delay={0.3}>
              <RoutingLayerCard
                stepNumber={3}
                title="Connection Layer"
                description="Executed routes, completed handoffs, and transaction flow"
                icon={<Zap className="w-8 h-8 md:w-9 md:h-9" strokeWidth={1.5} />}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Old Way vs. New Way (What&apos;s Included) */}
      <section className="py-16 px-4 bg-[#0f172a] text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection variant="fadeDown">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] text-center mb-4">
              TRADITIONAL METHODS VS. ROUTING INFRASTRUCTURE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Old Way vs. New Way
            </h2>
            <p className="text-lg text-white/80 text-center mb-12">
              Traditional methods make you search. Infrastructure brings them to
              you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Traditional Methods
                </h3>
                <p className="text-sm text-[#0d9488] mb-6">
                  Manual outreach and searching
                </p>
                <ul className="space-y-3 text-white/90 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Search for prospects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Run campaigns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Hire teams to prospect
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Pay per contact
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Chase conversations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Hope to be discovered
                  </li>
                </ul>
                <p className="mt-auto text-sm font-medium text-[#0d9488] uppercase tracking-wide">
                  Operating Level: Individual
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="rounded-xl border border-[#0d9488]/40 bg-teal-950/30 p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <Network
                    className="w-8 h-8 md:w-9 md:h-9 text-[#0d9488] shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    myoProcess
                  </h3>
                </div>
                <p className="text-sm text-[#0d9488] mb-6">
                  Routing infrastructure
                </p>
                <ul className="space-y-3 text-white/90 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Prospects route to you
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Introductions flow automatically
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Infrastructure handles routing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Pay for infrastructure access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    Conversations come to you
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1.5 shrink-0">•</span>
                    ICP routes through you
                  </li>
                </ul>
                <p className="mt-auto text-sm font-medium text-[#0d9488] uppercase tracking-wide">
                  Operating Level: Systems
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] text-center mb-4">
              THE FUNDAMENTAL SHIFT
            </p>
            <p className="text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
              Banks don&apos;t facilitate transactions—they route capital.
              Telecoms don&apos;t connect calls—they route data. B2B companies
              don&apos;t search for their ICP—their ICP routes through them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer
        youtubeUrl="https://www.youtube.com/@dainfernalsumit"
        linkedinUrl="https://www.linkedin.com/in/sumit-d/"
      />
    </main>
  );
}
