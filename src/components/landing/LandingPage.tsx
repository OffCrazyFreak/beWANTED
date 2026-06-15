"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import ThemeSwitcher from "@/components/landing/ThemeSwitcher";
import ThemeNoir from "@/components/landing/themes/ThemeNoir";
import ThemeOverture from "@/components/landing/themes/ThemeOverture";
import ThemeGrid from "@/components/landing/themes/ThemeGrid";
import ThemeTape from "@/components/landing/themes/ThemeTape";
import ThemeBlueprint from "@/components/landing/themes/ThemeBlueprint";
import ThemeHarvest from "@/components/landing/themes/ThemeHarvest";
import ThemeVolt from "@/components/landing/themes/ThemeVolt";
import ThemeIvory from "@/components/landing/themes/ThemeIvory";
import ThemeBrutus from "@/components/landing/themes/ThemeBrutus";
import ThemePop from "@/components/landing/themes/ThemePop";

export interface ThemeConfig {
  id: number;
  name: string;
  accent: string;
}

const THEMES: Array<ThemeConfig & { Component: ComponentType }> = [
  { id: 1,  name: "NOIR",    accent: "#FFE600", Component: ThemeNoir },
  { id: 2,  name: "OVTURE",  accent: "#E8A020", Component: ThemeOverture },
  { id: 3,  name: "GRID",    accent: "#E8A020", Component: ThemeGrid },
  { id: 4,  name: "TAPE",    accent: "#E8A020", Component: ThemeTape },
  { id: 5,  name: "BPRINT",  accent: "#E8A020", Component: ThemeBlueprint },
  { id: 6,  name: "HARVEST", accent: "#C14D2A", Component: ThemeHarvest },
  { id: 7,  name: "VOLT",    accent: "#CCFF00", Component: ThemeVolt },
  { id: 8,  name: "IVORY",   accent: "#C8A96E", Component: ThemeIvory },
  { id: 9,  name: "BRUTUS",  accent: "#E8A020", Component: ThemeBrutus },
  { id: 10, name: "POP",     accent: "#E8A020", Component: ThemePop },
];

export default function LandingPage() {
  const [activeTheme, setActiveTheme] = useState(1);

  const activeEntry = THEMES.find((t) => t.id === activeTheme)!;
  const { Component: ActiveComponent } = activeEntry;

  return (
    <>
      <div key={activeTheme} className="animate-theme-enter">
        <ActiveComponent />
      </div>
      <ThemeSwitcher
        themes={THEMES.map(({ id, name, accent }) => ({ id, name, accent }))}
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />
    </>
  );
}
