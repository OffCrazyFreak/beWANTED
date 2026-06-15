import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeTape() {
  return (
    <div className="bg-[#F0EBE1] text-[#1A1410] font-tape-body min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F0EBE1]/95 backdrop-blur-sm border-b border-[#1A1410]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-tape text-xl font-bold tracking-tight">
            be<span className="text-[#E8A020]">WANTED</span>
          </span>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-[11px] text-[#1A1410]/40 hover:text-[#1A1410] transition-colors tracking-wider">
              Log in
            </Link>
            <Link
              href="/register"
              className="text-[11px] tracking-wider bg-[#E8A020] text-white px-5 py-2 font-tape font-bold hover:bg-[#1A1410] transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 px-6 md:px-12 relative min-h-screen flex flex-col justify-center">

        {/* Paper texture overlays */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, #1A1410 0px, transparent 1px, transparent 24px)" }} />

        {/* Tape strip — amber diagonal across top */}
        <div className="absolute top-[80px] left-[-20px] right-[-20px] h-10 bg-[#E8A020]/70 rotate-[-1.2deg] pointer-events-none z-10 flex items-center px-10 overflow-hidden">
          <span className="text-black/40 text-[9px] tracking-[0.8em] uppercase font-tape-body whitespace-nowrap">
            BEST GRAZ × TU GRAZ · AUSTRIA · 2025 · BEST GRAZ × TU GRAZ · AUSTRIA · 2025 · BEST GRAZ · AUSTRIA · 2025 ·
          </span>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-8">

          {/* Date label — typewriter style */}
          <div className="font-tape-body text-[#1A1410]/35 text-[11px] tracking-[0.4em] uppercase mb-8 flex items-center gap-3">
            <span>26 NOV 2025</span>
            <span className="w-8 h-px bg-[#1A1410]/20 inline-block" />
            <span>TU GRAZ, GRAZ</span>
          </div>

          {/* Massive headline with tape-held visual */}
          <div className="relative">
            {/* Tape snippet on the headline */}
            <div className="absolute -top-4 left-[15%] w-20 h-6 bg-[#E8A020]/50 rotate-[-3deg] z-30 pointer-events-none" />

            <h1 className="font-tape font-extrabold leading-[0.85] text-[#1A1410]">
              <span className="block text-[clamp(5rem,15vw,16rem)] tracking-[-0.02em]">be</span>
              <span className="block text-[clamp(5rem,15vw,16rem)] tracking-[-0.02em] text-[#E8A020] relative">
                WANT
                {/* Second tape piece */}
                <span className="absolute top-4 right-[10%] w-24 h-7 bg-[#E8A020]/30 rotate-[2deg] pointer-events-none" />
              </span>
              <span className="block text-[clamp(5rem,15vw,16rem)] tracking-[-0.02em]">ED.</span>
            </h1>
          </div>

          {/* Subtitle card — slightly rotated sticky note */}
          <div className="mt-8 relative inline-block">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#E8A020]/60 rotate-1 z-10" />
            <div className="bg-white border border-[#1A1410]/10 p-6 rotate-[-0.5deg] [box-shadow:3px_3px_0px_rgba(26,20,16,0.08)] relative z-20 max-w-sm">
              <p className="font-tape-body text-[#1A1410]/60 text-sm leading-relaxed">
                Austria&apos;s most personal career event. Direct CV feedback from top company HR — one-on-one, at TU Graz.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/register/student"
              className="font-tape font-bold text-[11px] tracking-[0.3em] uppercase bg-[#1A1410] text-[#F0EBE1] px-8 py-4 hover:bg-[#E8A020] hover:text-white transition-colors"
            >
              I&apos;m a Student →
            </Link>
            <Link
              href="/register/company"
              className="font-tape font-bold text-[11px] tracking-[0.3em] uppercase border-2 border-[#1A1410]/30 text-[#1A1410]/50 px-8 py-4 hover:border-[#E8A020] hover:text-[#E8A020] transition-all"
            >
              Company Partner
            </Link>
          </div>

          {/* Stat row — typewriter label style */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white/60 p-5 border border-[#1A1410]/8">
                <span className="font-tape font-extrabold text-2xl text-[#E8A020] block">{stat.num}</span>
                <span className="font-tape-body text-[#1A1410]/40 text-[9px] tracking-[0.3em] uppercase block mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-[#1A1410]/10 relative">
        {/* Vertical tape strip on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#E8A020]/15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              {/* Label stamp */}
              <div className="inline-block bg-[#1A1410] text-[#F0EBE1] text-[9px] tracking-[0.5em] uppercase px-3 py-1.5 mb-6 rotate-[-0.5deg]">
                WHAT IS BEWANTED
              </div>
              <h2 className="font-tape font-extrabold text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-[#1A1410] mb-6">
                More than<br />a career fair.
              </h2>
              <p className="font-tape-body text-[#1A1410]/50 leading-relaxed mb-4">
                beWANTED connects TU Graz students directly with company HR teams for personal, actionable CV feedback. Structured. Intimate. Real impact.
              </p>
              <p className="font-tape-body text-[#1A1410]/50 leading-relaxed">
                Workshops (90 min, 15 students max) run one week before the main event. Main event: all-day Nov 26 at TU Graz.
              </p>
            </div>

            {/* Pinned note cards */}
            <div className="relative grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-white p-6 border border-[#1A1410]/8 [box-shadow:2px_2px_0_rgba(26,20,16,0.06)] relative
                    ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[0.8deg]"}`}
                >
                  {/* Tape pin at top */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#E8A020]/50 rotate-1" />
                  <span className="font-tape font-extrabold text-3xl text-[#E8A020] block">{stat.num}</span>
                  <span className="font-tape-body text-[#1A1410]/40 text-[9px] tracking-[0.2em] uppercase block mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 border-t border-[#1A1410]/10 bg-[#E8E3D8]">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          {/* Section header with tape */}
          <div className="relative mb-14">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-12 bg-[#E8A020]/60" />
            <h2 className="font-tape font-extrabold text-[clamp(2rem,4vw,4rem)] text-[#1A1410] pl-4">
              How it works.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-[#1A1410]/8 rotate-[-0.3deg] [box-shadow:3px_3px_0_rgba(26,20,16,0.06)]">
              {/* Tape header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-4 w-10 bg-[#E8A020]/60 rotate-[-1deg]" />
                <h3 className="font-tape font-bold text-[10px] tracking-[0.5em] uppercase text-[#1A1410]/40">
                  For Students
                </h3>
              </div>
              <div className="space-y-6">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="font-tape-body text-[#E8A020] text-xs tracking-widest shrink-0 pt-0.5">{step.n}</span>
                    <div>
                      <h4 className="font-tape font-bold text-sm text-[#1A1410] mb-0.5">{step.title}</h4>
                      <p className="font-tape-body text-[#1A1410]/45 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 border border-[#1A1410]/8 rotate-[0.3deg] [box-shadow:3px_3px_0_rgba(26,20,16,0.06)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-4 w-10 bg-[#1A1410]/20 rotate-[1deg]" />
                <h3 className="font-tape font-bold text-[10px] tracking-[0.5em] uppercase text-[#1A1410]/40">
                  For Companies
                </h3>
              </div>
              <div className="space-y-6">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="font-tape-body text-[#1A1410]/25 text-xs tracking-widest shrink-0 pt-0.5">{step.n}</span>
                    <div>
                      <h4 className="font-tape font-bold text-sm text-[#1A1410] mb-0.5">{step.title}</h4>
                      <p className="font-tape-body text-[#1A1410]/45 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-20 border-t border-[#1A1410]/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="relative mb-14">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-12 bg-[#1A1410]/30" />
            <h2 className="font-tape font-extrabold text-[clamp(2rem,4vw,4rem)] text-[#1A1410] pl-4">
              Partnership tiers.
            </h2>
          </div>

          {/* Table — slightly rotated, paper feel */}
          <div className="bg-white border border-[#1A1410]/10 [box-shadow:3px_3px_0_rgba(26,20,16,0.06)] rotate-[-0.2deg] overflow-x-auto">
            {/* Tape strip across top */}
            <div className="h-6 bg-[#E8A020]/40 border-b border-[#1A1410]/8 flex items-center px-4">
              <span className="font-tape-body text-[8px] tracking-[0.6em] uppercase text-black/30">PARTNERSHIP TABLE</span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#1A1410]/10">
                  <th className="text-left p-4 font-tape text-[9px] tracking-[0.4em] uppercase text-[#1A1410]/30 font-normal w-2/5">
                    Feature
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className={`text-center p-4 ${tier.highlight ? "bg-[#E8A020]/15" : ""}`}>
                      <div className="font-tape font-bold text-[9px] tracking-[0.4em] uppercase text-[#1A1410]/40 mb-1">{tier.name}</div>
                      <div className="font-tape font-extrabold text-xl text-[#1A1410]">{tier.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature, i) => (
                  <tr key={feature} className={`border-b border-[#1A1410]/6 ${i % 2 === 0 ? "" : "bg-[#1A1410]/[0.015]"}`}>
                    <td className="py-3 px-4 text-sm font-tape-body text-[#1A1410]/50">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className={`text-center py-3 px-4 ${tier.highlight ? "bg-[#E8A020]/8" : ""}`}>
                        {tier.benefits.includes(feature)
                          ? <span className={`font-tape font-bold ${tier.highlight ? "text-[#E8A020]" : "text-[#1A1410]/60"}`}>✓</span>
                          : <span className="font-tape-body text-[#1A1410]/15">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className={`p-4 text-center ${tier.highlight ? "bg-[#E8A020]/8" : ""}`}>
                      <Link
                        href="/register/company"
                        className={`inline-block font-tape font-bold text-[9px] tracking-[0.3em] uppercase py-2.5 px-5 border-2 transition-all
                          ${tier.highlight
                            ? "border-[#E8A020] bg-[#E8A020] text-black hover:bg-[#1A1410] hover:border-[#1A1410] hover:text-white"
                            : "border-[#1A1410]/20 text-[#1A1410]/50 hover:border-[#1A1410] hover:text-[#1A1410]"
                          }`}
                      >
                        Apply
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-[#1A1410]/30 text-xs text-center font-tape-body italic">
            Startup? Special rates available —{" "}
            <a href="mailto:bewanted@bestgraz.org" className="text-[#E8A020] not-italic hover:underline">
              reach out
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1A1410] relative overflow-hidden">
        {/* Amber tape band */}
        <div className="absolute top-8 left-[-40px] right-[-40px] h-12 bg-[#E8A020]/20 rotate-[-0.8deg] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-8 md:px-12 text-center">
          <div className="inline-block bg-[#E8A020] text-black text-[9px] tracking-[0.5em] uppercase px-3 py-1.5 mb-6 font-tape font-bold rotate-[-0.5deg]">
            The Event
          </div>
          <h2 className="font-tape font-extrabold text-[clamp(3.5rem,10vw,10rem)] leading-none text-[#F0EBE1] mb-8">
            Nov 26.<br />TU Graz.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="font-tape font-bold text-[11px] tracking-[0.3em] uppercase bg-[#E8A020] text-black px-10 py-4 hover:bg-[#F0EBE1] hover:text-[#1A1410] transition-colors"
            >
              Student Registration
            </Link>
            <Link
              href="/register/company"
              className="font-tape font-bold text-[11px] tracking-[0.3em] uppercase border-2 border-[#F0EBE1]/20 text-[#F0EBE1]/50 px-10 py-4 hover:border-[#E8A020]/60 hover:text-[#E8A020] transition-all"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1A1410]/10 py-12 bg-[#F0EBE1]">
        <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-tape font-extrabold text-2xl text-[#1A1410]">
            be<span className="text-[#E8A020]">WANTED</span>
          </span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 text-[10px] tracking-[0.3em] uppercase text-[#1A1410]/30 font-tape-body">
            <a href="#about" className="hover:text-[#1A1410] transition-colors">About</a>
            <a href="#how" className="hover:text-[#1A1410] transition-colors">Process</a>
            <a href="#tiers" className="hover:text-[#1A1410] transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-[#1A1410] transition-colors">Login</Link>
            <Link href="/register" className="hover:text-[#1A1410] transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1410] transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 mt-8 pt-6 border-t border-[#1A1410]/8 flex justify-between text-[9px] tracking-widest text-[#1A1410]/20 uppercase font-tape-body">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
