"use client";

import { useState } from "react";
import { ThemeSwitcher } from "@/components/landing/theme-switcher";
import { ThemeOne } from "@/components/landing/themes/theme-one";
import { ThemeTwo } from "@/components/landing/themes/theme-two";
import { ThemeThree } from "@/components/landing/themes/theme-three";
import { ThemeFour } from "@/components/landing/themes/theme-four";
import { ThemeFive } from "@/components/landing/themes/theme-five";

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(1);

  return (
    <>
      {activeTheme === 1 && <ThemeOne />}
      {activeTheme === 2 && <ThemeTwo />}
      {activeTheme === 3 && <ThemeThree />}
      {activeTheme === 4 && <ThemeFour />}
      {activeTheme === 5 && <ThemeFive />}

      <ThemeSwitcher
        active={activeTheme}
        onChange={(id) => {
          setActiveTheme(id);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </>
  );
}
