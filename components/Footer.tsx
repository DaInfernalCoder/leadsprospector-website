import { Linkedin } from "lucide-react";

interface FooterProps {
  linkedinUrl?: string;
}

export default function Footer({ linkedinUrl = "#" }: FooterProps) {
  return (
    <footer className="py-12 border-t border-[#E2DDD5] bg-[#FAFAF6]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-[family-name:var(--font-cormorant)] font-medium text-[#1C1C1A] tracking-tight">
            Caldenmoore
          </p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A07850]/60 hover:text-[#A07850] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <p className="text-sm text-[#6B6B65]">
            &copy; Caldenmoore 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
