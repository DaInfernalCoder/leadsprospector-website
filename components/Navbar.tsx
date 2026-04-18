export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FAFAF6]/95 backdrop-blur-sm border-b border-[#E2DDD5]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <span className="text-xl font-[family-name:var(--font-cormorant)] font-medium text-[#1C1C1A] tracking-tight">
          Caldenmoore
        </span>
        <a
          href="#calendar"
          className="bg-[#1C2B3A] text-[#F5F0E8] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2C3F52] transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
