// Decorative, GitHub-contribution-graph-inspired backdrop for the Hero name.
// Entirely client-side (seeded, deterministic — no network, no GitHub data).
// Layout/colors are computed once at module load; the only motion is a
// pure-CSS opacity pulse per cell, gated behind prefers-reduced-motion.

const COLS = 32;
const ROWS = 12;
const CELL = 12; // px
const GAP = 4; // px
const GREEN_PALETTE = ["#0e4429", "#006d32", "#26a641", "#39d353"];

// Tiny seeded PRNG (mulberry32) so the pattern is stable across renders/reloads.
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Cell {
  color: string | null;
  opacity: number;
  duration: number;
  delay: number;
}

function buildGrid(): Cell[] {
  const rand = mulberry32(42);
  const cells: Cell[] = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    if (rand() < 0.3) {
      cells.push({ color: null, opacity: 0.04, duration: 0, delay: 0 });
      continue;
    }
    cells.push({
      color: GREEN_PALETTE[Math.floor(rand() * GREEN_PALETTE.length)],
      opacity: 0.15 + rand() * 0.2,
      duration: 4 + rand() * 5,
      delay: -rand() * 8,
    });
  }
  return cells;
}

const GRID = buildGrid();

const ContributionGrid = () => (
  <div
    aria-hidden
    className="absolute inset-0 flex items-center justify-center pointer-events-none [mask-image:radial-gradient(ellipse_60%_55%_at_center,black_0%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_60%_55%_at_center,black_0%,transparent_75%)]"
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
        gridAutoRows: `${CELL}px`,
        gap: `${GAP}px`,
      }}
    >
      {GRID.map((cell, i) => (
        <div
          key={i}
          className={`rounded-[2px]${cell.color ? " is-live" : ""}`}
          style={
            {
              backgroundColor: cell.color ?? "rgba(255,255,255,0.5)",
              opacity: cell.opacity,
              "--cell-opacity": cell.opacity,
              "--cell-duration": `${cell.duration}s`,
              "--cell-delay": `${cell.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  </div>
);

export default ContributionGrid;
