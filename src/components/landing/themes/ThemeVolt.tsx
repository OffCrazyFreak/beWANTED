import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeVolt() {
  return (
    <div className="bg-[#000000] text-white font-tape-body min-h-screen overflow-x-hidden animate-volt-flash">

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div
          className="animate-volt-scan absolute left-0 right-0 h-px bg-[#CCFF00]/10"
          style={{ top: 0 }}
        />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[#CCFF00]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-volt text-2xl tracking-[0.1em] text-[#CCFF00]">
            beWANTED
          </span>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="font-volt text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-[#CCFF00] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="font-volt text-[10px] tracking-[0.3em] uppercase border border-[#CCFF00] text-[#CCFF00] px-5 py-2 hover:bg-[#CCFF00] hover:text-black transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO — full page stacked words */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#CCFF00]/4 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#E8A020]/4 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Event label */}
          <div className="font-tape-body text-[#CCFF00]/40 text-[10px] tracking-[0.8em] uppercase mb-8">
            BEST Graz × TU Graz · 26 NOV 2025 · GRAZ ·
          </div>

          {/* Giant stacked headline */}
          <h1 className="font-volt leading-[0.85]">
            <span className="block text-[clamp(6rem,18vw,20rem)] text-white">BE</span>
            <span className="block text-[clamp(6rem,18vw,20rem)] text-[#CCFF00] [text-shadow:0_0_60px_rgba(204,255,0,0.4)]">
              WANT
            </span>
            <span className="block text-[clamp(6rem,18vw,20rem)] text-transparent [-webkit-text-stroke:2px_#E8A020]">
              ED.
            </span>
          </h1>

          <div className="mt-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <p className="text-white/30 max-w-xs leading-relaxed text-sm">
              Austria&apos;s most personal career event. Direct CV feedback from top HR at TU Graz.
            </p>
            <div className="flex gap-3">
              <Link
                href="/register/student"
                className="font-volt text-[11px] tracking-[0.3em] uppercase bg-[#CCFF00] text-black px-8 py-4 hover:bg-white transition-colors"
              >
                Students ↗
              </Link>
              <Link
                href="/register/company"
                className="font-volt text-[11px] tracking-[0.3em] uppercase border border-white/20 text-white/40 px-8 py-4 hover:border-[#E8A020]/60 hover:text-[#E8A020] transition-all"
              >
                Companies
              </Link>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="w-full mt-20 border-t border-[#CCFF00]/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#CCFF00]/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-5 px-6 first:pl-0">
                <span className="font-volt text-2xl text-[#CCFF00] block">{stat.num}</span>
                <span className="font-tape-body text-white/25 text-[9px] tracking-[0.3em] uppercase block mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-[#CCFF00]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-tape-body text-[#CCFF00]/40 text-[10px] tracking-[0.6em] uppercase block mb-6">
                WHAT IS BEWANTED
              </span>
              <h2 className="font-volt text-[clamp(3rem,7vw,7rem)] leading-none text-white mb-6">
                MORE THAN<br />A CAREER<br />FAIR.
              </h2>
              <p className="text-white/35 leading-relaxed text-[15px]">
                beWANTED connects TU Graz students directly with company HR teams for personal, actionable CV feedback. Structured, intimate, real impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#CCFF00]/10">
              {STATS.map((stat, i) => (
                <div key={stat.label} className={`p-8 ${i === 1 ? "bg-[#CCFF00]" : "bg-[#000]"}`}>
                  <span className={`font-volt text-3xl block ${i === 1 ? "text-black" : "text-[#CCFF00]"}`}>{stat.num}</span>
                  <span className={`font-tape-body text-[9px] tracking-[0.3em] uppercase block mt-1 ${i === 1 ? "text-black/50" : "text-white/20"}`}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 border-t border-[#CCFF00]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-volt text-[clamp(2.5rem,6vw,6rem)] leading-none text-white mb-14">
            HOW IT<br />WORKS.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#CCFF00]/10">
            <div className="bg-black p-10">
              <h3 className="font-tape-body text-[9px] tracking-[0.5em] uppercase text-[#CCFF00]/30 mb-10 pb-4 border-b border-[#CCFF00]/10">
                For Students
              </h3>
              <div className="space-y-7">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <span className="font-volt text-3xl text-[#CCFF00]/15 shrink-0 w-14">{step.n}</span>
                    <div>
                      <h4 className="font-volt text-lg text-white mb-0.5">{step.title}</h4>
                      <p className="font-tape-body text-white/30 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black p-10">
              <h3 className="font-tape-body text-[9px] tracking-[0.5em] uppercase text-[#E8A020]/30 mb-10 pb-4 border-b border-[#E8A020]/10">
                For Companies
              </h3>
              <div className="space-y-7">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <span className="font-volt text-3xl text-[#E8A020]/15 shrink-0 w-14">{step.n}</span>
                    <div>
                      <h4 className="font-volt text-lg text-white mb-0.5">{step.title}</h4>
                      <p className="font-tape-body text-white/30 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-24 border-t border-[#CCFF00]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-volt text-[clamp(2.5rem,6vw,6rem)] leading-none text-white mb-12">
            TIERS.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#CCFF00]/15">
              <thead>
                <tr className="border-b border-[#CCFF00]/15">
                  <th className="text-left p-5 font-tape-body text-[9px] tracking-[0.5em] uppercase text-white/20 font-normal w-2/5">
                    Feature
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className={`text-center p-5 border-l border-[#CCFF00]/10 ${tier.highlight ? "bg-[#CCFF00]/8" : ""}`}>
                      <div className={`font-tape-body text-[9px] tracking-[0.5em] uppercase mb-1 ${tier.highlight ? "text-[#CCFF00]/60" : "text-white/20"}`}>
                        {tier.name}
                      </div>
                      <div className={`font-volt text-2xl ${tier.highlight ? "text-[#CCFF00] [text-shadow:0_0_20px_rgba(204,255,0,0.5)]" : "text-white"}`}>
                        {tier.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature) => (
                  <tr key={feature} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-5 text-sm font-tape-body text-white/35">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className={`text-center py-3.5 px-5 border-l border-white/[0.04] ${tier.highlight ? "bg-[#CCFF00]/[0.04]" : ""}`}>
                        {tier.benefits.includes(feature)
                          ? <span className={`font-volt ${tier.highlight ? "text-[#CCFF00]" : "text-white/50"}`}>✓</span>
                          : <span className="text-white/12">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-[#CCFF00]/15">
                  <td className="p-5" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className={`p-5 text-center border-l border-[#CCFF00]/10 ${tier.highlight ? "bg-[#CCFF00]/[0.04]" : ""}`}>
                      <Link
                        href="/register/company"
                        className={`inline-block font-volt text-[9px] tracking-[0.4em] uppercase py-2.5 px-5 border transition-all
                          ${tier.highlight
                            ? "border-[#CCFF00] bg-[#CCFF00] text-black hover:bg-transparent hover:text-[#CCFF00]"
                            : "border-white/15 text-white/30 hover:border-white/40 hover:text-white/70"
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
          <p className="mt-6 font-tape-body text-white/20 text-xs text-center">
            Startup?{" "}
            <a href="mailto:bewanted@bestgraz.org" className="text-[#CCFF00]/50 hover:text-[#CCFF00] transition-colors">
              Special rates available
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CCFF00] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-volt text-[clamp(5rem,14vw,14rem)] leading-none text-black mb-6">
            NOV 26.<br />TU GRAZ.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="font-volt text-[11px] tracking-[0.3em] uppercase bg-black text-[#CCFF00] px-10 py-4 hover:bg-[#1E0D06] transition-colors"
            >
              Student Registration
            </Link>
            <Link
              href="/register/company"
              className="font-volt text-[11px] tracking-[0.3em] uppercase border-2 border-black text-black px-10 py-4 hover:bg-black hover:text-[#CCFF00] transition-all"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#CCFF00]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-volt text-2xl text-[#CCFF00]">beWANTED</span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 font-tape-body text-[9px] tracking-[0.4em] uppercase text-white/20">
            <a href="#about" className="hover:text-white/50 transition-colors">About</a>
            <a href="#how" className="hover:text-white/50 transition-colors">Process</a>
            <a href="#tiers" className="hover:text-white/50 transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-white/50 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-white/50 transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-white/5 flex justify-between font-tape-body text-[9px] tracking-widest text-white/10 uppercase">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
