export function SectionDivider({ from = "white", to = "cream", flip = false }: { from?: string; to?: string; flip?: boolean }) {
  const colorMap: Record<string, string> = {
    white: "#FFFFFF",
    cream: "#F5F0E8",
    night: "#1A2A2F",
  };
  const fill = colorMap[to] ?? to;
  const bg = colorMap[from] ?? from;
  return (
    <div style={{ background: bg }} className="relative leading-none">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block w-full h-[70px] md:h-[90px] ${flip ? "rotate-180" : ""}`}
        aria-hidden
      >
        <path fill={fill} d="M0,90 C360,0 1080,0 1440,90 L1440,90 L0,90 Z" />
      </svg>
    </div>
  );
}
