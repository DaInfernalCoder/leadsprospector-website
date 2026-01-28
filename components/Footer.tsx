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
    <footer className="py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="YouTube"
          >
            <Youtube className="w-8 h-8 text-gray-700" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8 text-gray-700" />
          </a>
        </div>
        <p className="text-center text-gray-400">
          &copy; LeadsProspectr 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
