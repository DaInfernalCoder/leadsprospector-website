export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#111E2A]/95 backdrop-blur-sm border-b border-white/8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <span className="text-xl font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8] tracking-tight">
          Caldenmoore
        </span>
        <a
          href="#calendar"
          className="bg-[#A07850] text-[#F5F0E8] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#8B6A3E] transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
