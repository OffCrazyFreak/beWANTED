"use client";

interface Theme {
  id: number;
  name: string;
  subtitle: string;
  bg: string;
  dot: string;
  active: string;
}

const THEMES: Theme[] = [
  { id: 1, name: "Noir Electric", subtitle: "Dark · Cinematic", bg: "#000", dot: "#fda720", active: "#fda720" },
  { id: 2, name: "Editorial Cream", subtitle: "Elegant · Magazine", bg: "#faf8f4", dot: "#fda720", active: "#fda720" },
  { id: 3, name: "Brutal Orange", subtitle: "Bold · Raw", bg: "#fda720", dot: "#000", active: "#000" },
  { id: 4, name: "Glass Tech", subtitle: "Dark · Futuristic", bg: "#050d18", dot: "#fda720", active: "#fda720" },
  { id: 5, name: "Cinematic", subtitle: "Black · Gradient", bg: "#000", dot: "#f2b84c", active: "#f2b84c" },
];

interface ThemeSwitcherProps {
  active: number;
  onChange: (id: number) => void;
}

export function ThemeSwitcher({ active, onChange }: ThemeSwitcherProps) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 px-3 py-2 rounded-full shadow-2xl"
      style={{
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {THEMES.map((theme) => {
        const isActive = active === theme.id;
        return (
          <button
            key={theme.id}
            onClick={() => onChange(theme.id)}
            title={`${theme.name} — ${theme.subtitle}`}
            aria-label={`Switch to ${theme.name} theme`}
            className="relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300"
            style={{
              background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
              minWidth: isActive ? "auto" : "auto",
            }}
          >
            {/* Color dot */}
            <span
              className="block rounded-full flex-shrink-0 transition-all duration-300"
              style={{
                width: isActive ? "10px" : "8px",
                height: isActive ? "10px" : "8px",
                background: theme.dot,
                boxShadow: isActive ? `0 0 8px ${theme.dot}80` : "none",
                outline: isActive ? `2px solid ${theme.dot}30` : "none",
                outlineOffset: "2px",
                border: theme.bg === "#000" || theme.bg === "#050d18"
                  ? "1.5px solid rgba(255,255,255,0.2)"
                  : "1.5px solid rgba(0,0,0,0.15)",
              }}
            />
            {/* Label - only when active */}
            {isActive && (
              <span
                className="text-[11px] font-medium whitespace-nowrap"
                style={{ color: theme.active, fontFamily: "var(--font-manrope)" }}
              >
                {theme.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
