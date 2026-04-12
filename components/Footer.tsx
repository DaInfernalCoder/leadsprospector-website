import { Linkedin } from "lucide-react";

interface FooterProps {
  linkedinUrl?: string;
}

export default function Footer({ linkedinUrl = "#" }: FooterProps) {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-gray-900 tracking-tight">Caldenmoore</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-400">
            &copy; Caldenmoore 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
