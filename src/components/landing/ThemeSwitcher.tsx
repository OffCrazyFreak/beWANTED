"use client";

import type { ThemeConfig } from "@/components/landing/LandingPage";

interface ThemeSwitcherProps {
  themes: ThemeConfig[];
  activeTheme: number;
  onThemeChange: (id: number) => void;
}

export default function ThemeSwitcher({ themes, activeTheme, onThemeChange }: ThemeSwitcherProps) {
  const rows = [themes.slice(0, 5), themes.slice(5)];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100]">
      <div className="flex flex-col gap-1 bg-black/88 backdrop-blur-md border border-white/12 rounded-2xl px-2.5 py-2 [box-shadow:0_8px_40px_rgba(0,0,0,0.5)]">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-center gap-0.5">
            {rowIdx === 0 && (
              <span className="text-white/15 text-[8px] tracking-widest px-1.5 hidden sm:block select-none">I</span>
            )}
            {rowIdx === 1 && (
              <span className="text-white/15 text-[8px] tracking-widest px-1.5 hidden sm:block select-none">II</span>
            )}
            {row.map((theme) => (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                title={`Theme: ${theme.name}`}
                className={`
                  px-3 py-1.5 rounded-xl text-[10px] font-medium tracking-widest transition-all duration-300
                  ${activeTheme === theme.id ? "text-black scale-105" : "text-white/35 hover:text-white/65"}
                `}
                style={{
                  backgroundColor: activeTheme === theme.id ? theme.accent : "transparent",
                }}
              >
                {theme.name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
