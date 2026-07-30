// Fixed, always-first child so it paints behind all page content without
// needing a negative z-index (which risks slipping behind opaque ancestor
// backgrounds). Purely decorative.
const AmbientBackground = () => (
  <div
    aria-hidden
    className="fixed inset-0 overflow-hidden pointer-events-none bg-gradient-to-b from-[#0a0a0f] to-[#020203]"
  >
    {/* Tinted green — this blob sits nearest the Hero, blending with the contribution-grid backdrop */}
    <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#26a641] opacity-[0.07] blur-[80px] animate-blob-a" />
    <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-[#5E6AD2] opacity-[0.06] blur-[70px] animate-blob-b" />
    <div className="absolute bottom-0 left-1/4 h-[460px] w-[460px] rounded-full bg-[#5E6AD2] opacity-[0.07] blur-[80px] animate-blob-c" />
  </div>
);

export default AmbientBackground;
