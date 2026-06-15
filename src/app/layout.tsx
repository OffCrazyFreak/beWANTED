import type { Metadata } from "next";
import {
  DM_Serif_Display,
  IBM_Plex_Mono,
  Big_Shoulders,
  Instrument_Serif,
  Bebas_Neue,
  Barlow,
  Syne,
  Courier_Prime,
  Rajdhani,
  Fraunces,
  Nunito,
  Black_Ops_One,
  Cormorant_Garamond,
  DM_Sans,
  Oswald,
  Abril_Fatface,
} from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noir-heading",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noir-body",
});

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-overture",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-overture-body",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-grid",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-grid-body",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-tape",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-tape-body",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-blueprint",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-harvest",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-harvest-body",
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-volt",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ivory",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ivory-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brutus",
});

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pop",
});

export const metadata: Metadata = {
  title: "beWANTED – Where Talent Meets Opportunity",
  description:
    "beWANTED is a premier career event at TU Graz connecting students with top companies through CV checks, workshops, and networking. Organized by BEST Graz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [
    dmSerifDisplay.variable,
    ibmPlexMono.variable,
    bigShoulders.variable,
    instrumentSerif.variable,
    bebasNeue.variable,
    barlow.variable,
    syne.variable,
    courierPrime.variable,
    rajdhani.variable,
    fraunces.variable,
    nunito.variable,
    blackOpsOne.variable,
    cormorantGaramond.variable,
    dmSans.variable,
    oswald.variable,
    abrilFatface.variable,
  ].join(" ");

  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
