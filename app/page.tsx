import { CreditCard, Users, RefreshCcw } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import FeatureCard from "@/components/FeatureCard";
import ProcessStep from "@/components/ProcessStep";
import ChecklistItem from "@/components/ChecklistItem";
import Footer from "@/components/Footer";

export default function Home() {
  const CALENDLY_URL =
    "https://calendly.com/sumit-leadsprospectr/leadsprospectr";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Get the exact system installed in your business that we
            <br className="hidden md:block" />
            used to book 400+ calls in 2025.
          </h1>
          <p className="text-xl md:text-2xl text-[#1d4ed8] font-bold mb-12">
            We&apos;ll build &amp; run it for you for 90 days, land you 15 high-
            <br className="hidden md:block" />
            ticket meetings and you own the entire system forever.
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <CalendlyEmbed url={CALENDLY_URL} />
        </div>
      </section>

      {/* Why LeadsProspectr Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-[#1d4ed8]">LeadsProspectr?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <CreditCard
                  className="w-24 h-24 text-gray-700"
                  strokeWidth={1}
                />
              }
              title="Try Once"
              titleAccent="Before Committing"
              description="A one-time payment builds your entire outbound system and secures your first 5 meetings. From there, we keep filling your calendar on either a retainer or performance basis."
            />
            <FeatureCard
              icon={
                <Users className="w-24 h-24 text-gray-700" strokeWidth={1} />
              }
              title="Work With"
              titleAccent="Industry Insiders"
              description="We've worked directly in the industries we serve — staffing &amp; recruitment, marketing, SaaS, and accounting &amp; finance — so we know exactly how to reach your buyers."
            />
            <FeatureCard
              icon={
                <RefreshCcw
                  className="w-24 h-24 text-gray-700"
                  strokeWidth={1}
                />
              }
              title="Custom-Built"
              titleAccent="& Yours to Keep"
              description="We build a bespoke outbound system — targeting, copy, and infrastructure — tailored to your market. You keep it all, so you can keep booking meetings whether we run it or not."
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            How We <span className="text-[#1d4ed8]">Work</span>
          </h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See What&apos;s Included For{" "}
            <span className="text-[#1d4ed8]">Your Campaigns</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-3xl mx-auto">
            <div>
              <ChecklistItem text="Dedicated Account Manager" />
              <ChecklistItem text="Tailored Copywriting" />
              <ChecklistItem text="Pay-Per-Meeting Only" />
              <ChecklistItem text="1-On-1 Support" />
              <ChecklistItem text="Done-For-You Managed Email Campaigns" />
            </div>
            <div>
              <ChecklistItem text="Lead List Built" />
              <ChecklistItem text="Inbox Setup" />
              <ChecklistItem text="Weekly Reporting" />
              <ChecklistItem text="Monthly Check-In Call" />
              <ChecklistItem text="Hyper-personalized emails" />
            </div>
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
