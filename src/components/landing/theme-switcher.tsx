"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export type ThemeId = 1 | 2 | 3 | 4 | 5 | 6

interface ThemeMeta {
  id: ThemeId
  name: string
  bg: string
  accent: string
  label: string
}

const themes: ThemeMeta[] = [
  { id: 1, name: "BRUTAL", bg: "#0a0a0a", accent: "#fda720", label: "Dark Brutalist" },
  { id: 2, name: "EDITORIAL", bg: "#faf8f4", accent: "#fda720", label: "Golden Editorial" },
  { id: 3, name: "BAUHAUS", bg: "#f2ede6", accent: "#111111", label: "Bauhaus Impact" },
  { id: 4, name: "KINETIC", bg: "#080808", accent: "#fda720", label: "Kinetic Typeface" },
  { id: 5, name: "ALPINE", bg: "#ffffff", accent: "#fda720", label: "Alpine Minimal" },
  { id: 6, name: "AURORA", bg: "#060810", accent: "#fda720", label: "Aurora Glass" },
]

interface ThemeSwitcherProps {
  activeTheme: ThemeId
  onThemeChange: (id: ThemeId) => void
}

export function ThemeSwitcher({ activeTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      <div
        className={`flex flex-col gap-1.5 transition-all duration-300 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            title={theme.label}
            className={`group flex items-center gap-2.5 rounded-full px-3 py-2 transition-all duration-200 shadow-lg ${
              activeTheme === theme.id
                ? "ring-2 ring-white ring-offset-1 ring-offset-black/20 scale-105"
                : "hover:scale-105 opacity-80 hover:opacity-100"
            }`}
            style={{ backgroundColor: theme.bg, border: `2px solid ${theme.accent}` }}
          >
            <span
              className="size-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: theme.accent }}
            />
            <span
              className="text-xs font-bold tracking-wider"
              style={{ color: theme.accent }}
            >
              {theme.name}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center gap-2 rounded-full px-4 py-2.5 bg-[#fda720] text-black font-bold text-xs tracking-wider shadow-xl hover:bg-[#f2b84c] transition-colors"
      >
        {isExpanded ? <ChevronDown className="size-3.5" /> : <ChevronUp className="size-3.5" />}
        THEMES
      </button>
    </div>
  )
}
