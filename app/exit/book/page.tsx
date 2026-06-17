import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";

const title = "Book your call | The Claude Exit System";
const description =
  "Book a call with M&A Business Advisors to pressure-test your valuation and start the process of connecting with a buyer.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function BookCall() {
  const CALENDLY_URL = "https://calendly.com/sunnymabusinessadvisors/new-meeting";

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F0EDE6]">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeDown">
              <Link
                href="/exit"
                className="inline-flex items-center gap-2 text-sm text-[#A07850] hover:text-[#8B6A3E] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                Back to your exit analysis
              </Link>
              <p className="text-xs uppercase tracking-widest text-[#A07850] font-medium mb-4">
                Get Started
              </p>
              <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1C1C1A] mb-4 leading-tight">
                Book your call.
              </h1>
              <p className="text-[#6B6B65] text-lg mb-12 max-w-xl leading-relaxed">
                Now that you know what it is worth, we do the work of connecting you to a buyer. We help owners sell businesses over $200k in net income, with nothing upfront. Bring your analysis and we will pressure-test your number and start the process.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp">
              <div className="bg-white rounded-2xl border border-[#E2DDD5] overflow-hidden">
                <CalendlyEmbed url={CALENDLY_URL} />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer linkedinUrl="https://www.linkedin.com/in/sumit-d/" />
    </>
  );
}
