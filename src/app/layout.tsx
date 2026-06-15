import type { Metadata } from "next"
import {
  bebasNeue,
  spaceMono,
  playfairDisplay,
  dmSans,
  anton,
  outfit,
  syne,
  jetBrainsMono,
  cormorantGaramond,
  barlowCondensed,
  bigShoulders,
  lora,
  raleway,
  josefinSans,
} from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "beWANTED 2026 — Das persönliche Karriere-Event",
  description:
    "beWANTED is Graz's most personal engineering career event. November 25, 2026 at TU Graz. Limited to 18 partner companies.",
}

const fontVariables = [
  bebasNeue.variable,
  spaceMono.variable,
  playfairDisplay.variable,
  dmSans.variable,
  anton.variable,
  outfit.variable,
  syne.variable,
  jetBrainsMono.variable,
  cormorantGaramond.variable,
  barlowCondensed.variable,
  bigShoulders.variable,
  lora.variable,
  raleway.variable,
  josefinSans.variable,
].join(" ")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
