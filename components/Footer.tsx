import { Youtube, Linkedin } from "lucide-react";

interface FooterProps {
  youtubeUrl?: string;
  linkedinUrl?: string;
}

export default function Footer({
  youtubeUrl = "#",
  linkedinUrl = "#",
}: FooterProps) {
  return (
    <footer className="py-16 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="YouTube"
          >
            <Youtube className="w-8 h-8" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
        <p className="text-center text-white/60">
          &copy; LeadsProspectr 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
