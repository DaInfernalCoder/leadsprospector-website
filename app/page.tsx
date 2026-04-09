"use client";

import { Radio, Layers, Zap, ChevronDown, Network, Activity, RefreshCcw, TrendingUp, Users, Building2, ArrowRight, CircleAlert } from "lucide-react";
import CalComEmbed from "@/components/CalComEmbed";
import RoutingLayerCard from "@/components/RoutingLayerCard";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const CAL_URL = "https://cal.com/sumitdatta/partner-call";

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-black text-white">
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
      <section id="calendar" className="pt-16 pb-8 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <CalComEmbed url={CAL_URL} />
          </AnimatedSection>
        </div>
      </section>

      {/* The Routing Layer Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection variant="fadeDown">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] mb-4">
              THE ROUTING LAYER
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Connect with Your Ideal Clients
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              B2B executives and business owners partner with Caldenmoore to get
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
      <section className="py-16 px-4 bg-black text-white">
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
                    Caldenmoore
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
              Banks don&apos;t facilitate transactions, they route capital.
              Telecoms don&apos;t connect calls, they route data. B2B companies
              don&apos;t search for their ICP, their ICP routes through them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two-Sided Routing Network Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeDown">
            <p className="text-sm uppercase tracking-wide text-[#0d9488] text-center mb-4">
              NETWORK ARCHITECTURE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Two-Sided Routing Network
            </h2>
            <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
              Compatible nodes connect through the routing layer. Incompatible
              signals are filtered at the edge.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-start mb-12">
            {/* Buyer Nodes */}
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-white">Buyer Nodes</h3>
                </div>
                <p className="text-sm text-white/70 mb-6">Inbound signal sources</p>
                <ul className="space-y-3">
                  {[
                    { title: "Enterprise Buyers", desc: "Active RFP", routable: true },
                    { title: "Growth Stage", desc: "Budget Approved", routable: true },
                    { title: "Strategic Partners", desc: "Qualified Intent", routable: true },
                    { title: "Early Stage", desc: "Exploratory", routable: false },
                  ].map((node) => (
                    <li
                      key={node.title}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <div>
                        <p className="font-medium text-white">{node.title}</p>
                        <p className="text-sm text-white/70">{node.desc}</p>
                      </div>
                      {node.routable ? (
                        <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-white border border-[#0d9488] rounded px-2 py-1">
                          ROUTABLE
                        </span>
                      ) : (
                        <CircleAlert className="w-5 h-5 shrink-0 text-red-400" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Routing Layer (center) */}
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="flex flex-col items-center justify-center py-8 md:py-0">
                <div className="rounded-xl border-2 border-[#0d9488] bg-[#0d9488]/10 px-6 py-8 text-center min-w-[200px]">
                  <p className="text-sm font-bold uppercase tracking-wide text-white mb-2">
                    ROUTING LAYER
                  </p>
                  <p className="text-white/90 text-sm mb-1">Match • Filter • Route</p>
                  <p className="text-xs text-white/70 mb-4">
                    87% of signals qualify for routing
                  </p>
                  <ArrowRight className="w-8 h-8 mx-auto text-[#0d9488]" strokeWidth={2} />
                </div>
              </div>
            </AnimatedSection>

            {/* Seller Nodes */}
            <AnimatedSection variant="fadeUp" delay={0.3}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-6 h-6 text-[#0d9488]" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-white">Seller Nodes</h3>
                </div>
                <p className="text-sm text-white/70 mb-6">Destination endpoints</p>
                <ul className="space-y-3">
                  {[
                    { title: "Solution Providers", desc: "High Volume", active: true },
                    { title: "Service Partners", desc: "Mid-Market Focus", active: true },
                    { title: "Enterprise Vendors", desc: "Strategic Only", active: true },
                    { title: "Early Vendors", desc: "Unverified", active: false },
                  ].map((node) => (
                    <li
                      key={node.title}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <div>
                        <p className="font-medium text-white">{node.title}</p>
                        <p className="text-sm text-white/70">{node.desc}</p>
                      </div>
                      {node.active ? (
                        <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-white bg-[#0d9488] rounded px-2 py-1">
                          ACTIVE
                        </span>
                      ) : (
                        <CircleAlert className="w-5 h-5 shrink-0 text-red-400" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp">
            <p className="text-sm md:text-base text-white/70 text-center max-w-3xl mx-auto leading-relaxed">
              Network effects compound as node density increases. Each compatible
              connection strengthens the routing layer. Incompatible signals are
              rejected before consuming system resources.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Infrastructure Performance Section */}
      <section className="py-16 px-4 bg-black text-white">
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

      {/* CTA: Access the Routing Layer */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection variant="fadeDown">
            <p className="inline-block text-sm uppercase tracking-wide text-white border border-[#0d9488] rounded-md px-4 py-2 mb-4">
              JOIN THE NETWORK
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Access the Routing Layer
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Network capacity is controlled to maintain signal quality and
              routing velocity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <div className="rounded-xl border border-[#0d9488]/40 bg-white/5 p-5 md:p-6 text-center">
                <Zap className="w-8 h-8 text-[#0d9488] mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  ACTIVE ROUTES
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">2.4k/day</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <div className="rounded-xl border border-[#0d9488]/40 bg-white/5 p-5 md:p-6 text-center">
                <Zap className="w-8 h-8 text-[#0d9488] mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  NETWORK CAPACITY
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">87%</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="rounded-xl border border-[#0d9488]/40 bg-white/5 p-5 md:p-6 text-center">
                <Network className="w-8 h-8 text-[#0d9488] mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                  CURRENT NODES
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">450+</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeUp">
            <div className="rounded-xl border border-[#0d9488]/40 bg-white/5 p-6 md:p-8 mb-10 text-left max-w-3xl mx-auto">
              <p className="font-semibold text-white mb-3">Network access is controlled.</p>
              <p className="text-white/80 mb-3">
                We maintain strict qualification standards to protect routing
                integrity. Both buyer and seller nodes must meet network
                compatibility requirements.
              </p>
              <p className="text-white/80">
                If your signals are high-quality and your intent is clear,
                request access to join the routing layer.
              </p>
            </div>

            <a
              href="#calendar"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-[#0d9488] to-emerald-500 hover:opacity-90 transition-opacity"
            >
              Request Network Access
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer linkedinUrl="https://www.linkedin.com/in/sumit-d/" />
    </main>
  );
}
