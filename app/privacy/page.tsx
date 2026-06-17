import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const title = "Privacy Policy | M&A Business Advisors";
const description =
  "Privacy Policy for M&A Business Advisors (AVIS USA, LLC), including how we handle SMS opt-in and personal information.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF6]">
        <section className="py-20 md:py-28 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-3 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#6B6B65] mb-12">Last updated June 17, 2026</p>

            <div className="space-y-8 text-[#3A3A35] leading-relaxed">
              <p>
                This Privacy Policy explains how M&amp;A Business Advisors, operated by AVIS USA, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and protects information you provide through this website.
              </p>

              <Section title="1. Information We Collect">
                <p>
                  We collect information you voluntarily provide, such as your name, phone number, email address, and details about your business when you use our tools, fill out a form, or book a call. We may also collect basic usage data through standard web analytics.
                </p>
              </Section>

              <Section title="2. How We Use Your Information">
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Respond to your inquiries and provide the services you request.</li>
                  <li>Schedule and manage appointments.</li>
                  <li>Send informational, transactional, and promotional messages you have consented to.</li>
                  <li>Improve our website and services.</li>
                </ul>
              </Section>

              <Section title="3. SMS / Text Messaging">
                <p>
                  When you opt in to receive text messages, your phone number and consent are used solely to send messages from M&amp;A Business Advisors (AVIS USA, LLC) related to your inquiry and our services. Message frequency varies, and message and data rates may apply. You can reply <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for assistance at any time.
                </p>
                <p className="mt-3 font-medium text-[#1C1C1A]">
                  We do not sell, rent, or share your mobile opt-in information or phone number with any third parties or affiliates for their own marketing or promotional purposes. SMS consent and mobile information are never shared with third parties for marketing.
                </p>
              </Section>

              <Section title="4. Sharing of Information">
                <p>
                  We may share information with service providers who help us operate our website and communications (such as scheduling and messaging platforms) strictly to perform those services on our behalf. We do not sell your personal information. We may disclose information if required by law.
                </p>
              </Section>

              <Section title="5. Data Security">
                <p>
                  We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>
              </Section>

              <Section title="6. Your Choices">
                <p>
                  You may opt out of text messages by replying STOP. You may request access to or deletion of your personal information by contacting us using the details below.
                </p>
              </Section>

              <Section title="7. Contact">
                <p>
                  AVIS USA, LLC (M&amp;A Business Advisors)<br />
                  5307 Metzger Court, Sugar Land, TX 77479<br />
                  Email: <a className="text-[#A07850] hover:underline" href="mailto:sunny@mabusinessadvisors.com">sunny@mabusinessadvisors.com</a><br />
                  Phone: <a className="text-[#A07850] hover:underline" href="tel:+18327124162">(832) 712-4162</a>
                </p>
              </Section>
            </div>
          </div>
        </section>
      </main>
      <Footer linkedinUrl="https://www.linkedin.com/in/sumit-d/" />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-medium text-[#1C1C1A] mb-3">{title}</h2>
      {children}
    </div>
  );
}
