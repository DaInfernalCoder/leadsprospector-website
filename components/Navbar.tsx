export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <span className="text-base font-semibold text-gray-900 tracking-tight">
          Caldenmoore
        </span>
        <a
          href="#calendar"
          className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
