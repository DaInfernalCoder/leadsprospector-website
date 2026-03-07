"use client";

import { CreditCard, Users, RefreshCcw, Radio, Layers, Zap, ChevronDown } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import FeatureCard from "@/components/FeatureCard";
import RoutingLayerCard from "@/components/RoutingLayerCard";
import ChecklistItem from "@/components/ChecklistItem";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer from "@/components/StaggerContainer";
import StaggerItem from "@/components/StaggerItem";

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

      {/* Why LeadsProspectr Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why <span className="text-[#0d9488]">LeadsProspectr?</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <FeatureCard
                icon={
                  <CreditCard
                    className="w-24 h-24 text-gray-700"
                    strokeWidth={1}
                  />
                }
                title="Try Once"
                titleAccent="Before Committing"
                description="We build your entire outbound system and secure your first 2 meetings. All you have to do is pay for infrastructure. From there, we keep filling your calendar on either a retainer or performance basis."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard
                icon={
                  <Users className="w-24 h-24 text-gray-700" strokeWidth={1} />
                }
                title="Work With"
                titleAccent="Industry Insiders"
                description="We've worked directly in the industries we serve, staffing &amp; recruitment, marketing, SaaS, and accounting &amp; finance, so we know exactly how to reach your buyers."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard
                icon={
                  <RefreshCcw
                    className="w-24 h-24 text-gray-700"
                    strokeWidth={1}
                  />
                }
                title="Custom-Built"
                titleAccent="& Yours to Keep"
                description="We build a bespoke outbound system, targeting, copy, and infrastructure, tailored to your market. You keep it all, so you can keep booking meetings whether we run it or not."
              />
            </StaggerItem>
          </StaggerContainer>
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

      {/* What&apos;s Included Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              See What&apos;s Included For{" "}
              <span className="text-[#0d9488]">Your Campaigns</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.08}>
              <StaggerItem>
                <ChecklistItem text="Dedicated Account Manager" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Tailored Copywriting" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Pay-Per-Meeting Only" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="1-On-1 Support" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Done-For-You Managed Email Campaigns" />
              </StaggerItem>
            </StaggerContainer>
            <StaggerContainer staggerDelay={0.08}>
              <StaggerItem>
                <ChecklistItem text="Lead List Built" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Inbox Setup" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Weekly Reporting" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Monthly Check-In Call" />
              </StaggerItem>
              <StaggerItem>
                <ChecklistItem text="Hyper-personalized emails" />
              </StaggerItem>
            </StaggerContainer>
          </div>
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
