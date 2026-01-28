"use client";

import { CreditCard, Users, RefreshCcw } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import FeatureCard from "@/components/FeatureCard";
import ProcessStep from "@/components/ProcessStep";
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
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection variant="fadeDown" delay={0}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Get the exact system installed in your business that we{" "}
              <br className="hidden md:block" />
              used to book 400+ calls in 2025.
            </h1>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <p className="text-xl md:text-2xl text-[#0d9488] font-bold mb-12">
              We&apos;ll build &amp; run it for you for 90 days, land you 15 high-
              <br className="hidden md:block" />
              ticket meetings and you own the entire system forever.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 px-4">
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
                description="We build your entire outbound system and secure your first 3 meetings. All you have to do is pay for infrastructure. From there, we keep filling your calendar on either a retainer or performance basis."
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

      {/* How We Work Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              How We <span className="text-[#0d9488]">Work</span>
            </h2>
          </AnimatedSection>
          <ProcessStep
            number={1}
            title="Fill out our onboarding form"
            description="After signing our proposal, we'll have you fill out an onboarding form so we can understand more about you and your business."
          />
          <ProcessStep
            number={2}
            title="Schedule a kickoff call"
            description="Our account managers will go over your onboarding form on a call with you to formulate an initial campaign strategy."
          />
          <ProcessStep
            number={3}
            title="Onboarding Setup"
            description="We'll take all the information from the kickoff call to set up your inboxes, build your lead list, and write your campaign cadence."
          />
          <ProcessStep
            number={4}
            title="Campaign Launch"
            description="After the campaign cadence and lead list has been approved, our team will launch your campaign."
          />
          <ProcessStep
            number={5}
            title="Meetings Delivered"
            description="Once we've confirmed a meeting-ready-lead, we'll book them into your calendar and brief you on everything you need to know."
          />
          <ProcessStep
            number={6}
            title="Campaign Adjustments"
            description="Aside from the weekly reports, our Customer Success Managers will do a monthly check-in call to go over campaign performance and make any necessary adjustments."
          />
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
