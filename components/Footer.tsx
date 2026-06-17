import Link from "next/link";
import { Linkedin } from "lucide-react";

interface FooterProps {
  linkedinUrl?: string;
}

export default function Footer({ linkedinUrl = "#" }: FooterProps) {
  return (
    <footer className="py-12 border-t border-[#E2DDD5] bg-[#FAFAF6]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="text-lg font-[family-name:var(--font-cormorant)] font-medium text-[#1C1C1A] tracking-tight mb-3">
              M&amp;A Business Advisors
            </p>
            <address className="not-italic text-sm text-[#6B6B65] leading-relaxed">
              AVIS USA, LLC<br />
              5307 Metzger Court, Sugar Land, TX 77479<br />
              <a href="mailto:sunny@mabusinessadvisors.com" className="hover:text-[#A07850] transition-colors">
                sunny@mabusinessadvisors.com
              </a>
              <br />
              <a href="tel:+18327124162" className="hover:text-[#A07850] transition-colors">
                (832) 712-4162
              </a>
            </address>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A07850]/60 hover:text-[#A07850] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="flex gap-5 text-sm text-[#6B6B65]">
              <Link href="/privacy" className="hover:text-[#A07850] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#A07850] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#6B6B65] mt-8 pt-6 border-t border-[#E2DDD5]">
          &copy; M&amp;A Business Advisors 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
