"use client"

import { useState } from "react"
import { ThemeSwitcher, type ThemeId } from "@/components/landing/theme-switcher"
import { Theme1 } from "@/components/landing/themes/theme-1"
import { Theme2 } from "@/components/landing/themes/theme-2"
import { Theme3 } from "@/components/landing/themes/theme-3"
import { Theme4 } from "@/components/landing/themes/theme-4"
import { Theme5 } from "@/components/landing/themes/theme-5"
import { Theme6 } from "@/components/landing/themes/theme-6"

const themes: Record<ThemeId, React.ComponentType> = {
  1: Theme1,
  2: Theme2,
  3: Theme3,
  4: Theme4,
  5: Theme5,
  6: Theme6,
}

export default function Home() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>(1)
  const ActiveTheme = themes[activeTheme]

  return (
    <>
      <ActiveTheme />
      <ThemeSwitcher activeTheme={activeTheme} onThemeChange={setActiveTheme} />
    </>
  )
}
