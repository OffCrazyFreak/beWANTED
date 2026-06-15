import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeOverture() {
  return (
    <div className="bg-[#0C0A08] text-white font-overture-body min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="font-overture text-2xl tracking-[0.15em] text-white uppercase">
            be<span className="text-[#E8A020]">WANTED</span>
          </span>
          <div className="flex gap-6 items-center">
            <Link
              href="/login"
              className="text-[11px] tracking-[0.3em] text-white/50 uppercase hover:text-white transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="text-[11px] tracking-[0.3em] uppercase border border-[#E8A020] text-[#E8A020] px-5 py-2 hover:bg-[#E8A020] hover:text-black transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
        {/* Ambient spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[70vh] rounded-full bg-[#E8A020] opacity-[0.06] blur-[140px] pointer-events-none animate-spotlight" />

        {/* Event metadata strip */}
        <div className="absolute top-28 left-8 md:left-12 animate-fade-up-1">
          <span className="text-[#E8A020]/50 text-[10px] tracking-[0.5em] uppercase block">
            BEST Graz × TU Graz
          </span>
          <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase block mt-1">
            26 Nov 2025 · Graz, Austria
          </span>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-28 right-8 md:right-12 flex flex-col items-end gap-1 animate-fade-up-1 hidden md:flex">
          <div className="w-12 h-px bg-[#E8A020]/30" />
          <div className="w-6 h-px bg-[#E8A020]/15" />
        </div>

        {/* Main title — staggered reveal */}
        <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="overflow-hidden mb-0">
            <h1 className="font-overture leading-[0.82] tracking-[0.01em] text-[clamp(5rem,14vw,15rem)]">
              <span className="block overflow-hidden">
                <span className="block animate-letter-a text-white">WHERE</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-letter-b text-white">TALENT</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-letter-c [-webkit-text-stroke:2px_#E8A020] text-transparent">MEETS</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-letter-d text-[#E8A020]">ITS MATCH.</span>
              </span>
            </h1>
          </div>

          {/* Amber rule */}
          <div className="my-8 h-px bg-[#E8A020] animate-line-grow" />

          <div className="flex flex-col sm:flex-row gap-8 items-start justify-between animate-fade-up-2">
            <p className="text-white/35 text-sm leading-relaxed max-w-xs font-overture-body">
              Austria&apos;s most personal career event. One-on-one CV sessions with top company HR at TU Graz.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/register/student"
                className="text-[11px] tracking-[0.25em] uppercase bg-[#E8A020] text-black px-7 py-3.5 hover:bg-white transition-colors font-overture"
              >
                Students ↗
              </Link>
              <Link
                href="/register/company"
                className="text-[11px] tracking-[0.25em] uppercase border border-white/15 text-white/50 px-7 py-3.5 hover:border-[#E8A020]/40 hover:text-white/80 transition-all font-overture"
              >
                Companies
              </Link>
            </div>
          </div>
        </div>

        {/* Stat bar along bottom */}
        <div className="w-full border-t border-white/5 mt-16 animate-fade-up-3">
          <div className="max-w-7xl mx-auto px-8 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
              {STATS.map((stat) => (
                <div key={stat.label} className="py-5 px-6 first:pl-0">
                  <span className="font-overture text-2xl text-[#E8A020] block">{stat.num}</span>
                  <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase block mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[#E8A020]/50 text-[10px] tracking-[0.5em] uppercase block mb-6">
                What is beWANTED
              </span>
              <h2 className="font-overture text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-white mb-0">
                MORE THAN<br />A CAREER<br />FAIR.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-16">
              <p className="text-white/40 leading-relaxed mb-5 text-[15px]">
                beWANTED connects TU Graz students directly with company HR teams for personal, actionable CV feedback. Structured, intimate, with real impact.
              </p>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Workshops (90 min, max 15 students) run one week before. Main event runs all-day on Nov 26. Every conversation is a genuine opportunity.
              </p>
              <div className="mt-10 pt-8 border-t border-white/5 flex gap-10">
                <div>
                  <span className="font-overture text-3xl text-[#E8A020] block">500+</span>
                  <span className="text-white/25 text-[10px] tracking-widest uppercase">Students</span>
                </div>
                <div>
                  <span className="font-overture text-3xl text-[#E8A020] block">30+</span>
                  <span className="text-white/25 text-[10px] tracking-widest uppercase">Companies</span>
                </div>
                <div>
                  <span className="font-overture text-3xl text-[#E8A020] block">2×</span>
                  <span className="text-white/25 text-[10px] tracking-widest uppercase">Per Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-overture text-[clamp(2.5rem,5vw,5rem)] leading-none text-white">
              HOW IT<br />WORKS.
            </h2>
            <span className="text-[#E8A020]/40 text-[10px] tracking-[0.5em] uppercase hidden md:block">
              Process
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            <div className="bg-[#0C0A08] p-10">
              <h3 className="text-[10px] tracking-[0.4em] text-white/20 uppercase mb-10 pb-6 border-b border-white/5">
                For Students
              </h3>
              <div className="space-y-8">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="flex gap-6">
                    <span className="font-overture text-[2.5rem] leading-none text-[#E8A020]/15 shrink-0 w-14">
                      {step.n}
                    </span>
                    <div className="pt-1">
                      <h4 className="font-overture text-lg tracking-wide text-white mb-1">{step.title}</h4>
                      <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0C0A08] p-10">
              <h3 className="text-[10px] tracking-[0.4em] text-white/20 uppercase mb-10 pb-6 border-b border-white/5">
                For Companies
              </h3>
              <div className="space-y-8">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="flex gap-6">
                    <span className="font-overture text-[2.5rem] leading-none text-[#E8A020]/15 shrink-0 w-14">
                      {step.n}
                    </span>
                    <div className="pt-1">
                      <h4 className="font-overture text-lg tracking-wide text-white mb-1">{step.title}</h4>
                      <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="font-overture text-[clamp(2.5rem,5vw,5rem)] leading-none text-white mb-16">
            PARTNERSHIP<br />TIERS.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-5 pr-8 text-[10px] tracking-[0.4em] uppercase text-white/20 font-normal w-2/5">
                    Feature
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className="text-center py-5 px-5">
                      <div className={`text-[10px] tracking-[0.4em] uppercase mb-2 ${tier.highlight ? "text-[#E8A020]/70" : "text-white/25"}`}>
                        {tier.name}
                      </div>
                      <div className={`font-overture text-3xl leading-none ${tier.highlight ? "text-[#E8A020]" : "text-white"}`}>
                        {tier.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature) => (
                  <tr key={feature} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-8 text-sm text-white/40 font-overture-body">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className="text-center py-4 px-5">
                        {tier.benefits.includes(feature)
                          ? <span className={`font-overture ${tier.highlight ? "text-[#E8A020]" : "text-white/50"}`}>✓</span>
                          : <span className="text-white/12">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="pt-8" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className="pt-8 px-5 text-center">
                      <Link
                        href="/register/company"
                        className={`inline-block text-[10px] tracking-[0.25em] uppercase py-3 px-5 transition-all font-overture
                          ${tier.highlight
                            ? "bg-[#E8A020] text-black hover:bg-white"
                            : "border border-white/10 text-white/30 hover:border-white/25 hover:text-white/60"
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

          <p className="mt-8 text-center text-white/20 text-xs">
            Startup?{" "}
            <a href="mailto:bewanted@bestgraz.org" className="text-[#E8A020]/50 hover:text-[#E8A020] transition-colors">
              Special rates available
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[#E8A020]/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#E8A020]/5 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 text-center">
          <span className="text-[#E8A020]/40 text-[10px] tracking-[0.6em] uppercase block mb-6">The Event</span>
          <h2 className="font-overture text-[clamp(4rem,12vw,12rem)] leading-none text-white mb-8">
            NOV 26.<br />TU GRAZ.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="font-overture text-[11px] tracking-[0.3em] uppercase bg-[#E8A020] text-black px-10 py-4 hover:bg-white transition-colors"
            >
              Student Registration
            </Link>
            <Link
              href="/register/company"
              className="font-overture text-[11px] tracking-[0.3em] uppercase border border-white/15 text-white/50 px-10 py-4 hover:border-[#E8A020]/40 hover:text-white/80 transition-all"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="font-overture text-2xl tracking-[0.1em] text-white uppercase">
              be<span className="text-[#E8A020]">WANTED</span>
            </span>
            <p className="text-white/20 text-xs mt-2">Organized by BEST Graz</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[10px] tracking-[0.3em] text-white/20 uppercase">
            <a href="#about" className="hover:text-white/50 transition-colors">About</a>
            <a href="#how" className="hover:text-white/50 transition-colors">How It Works</a>
            <a href="#tiers" className="hover:text-white/50 transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-white/50 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-white/50 transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              BEST Graz ↗
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 mt-10 pt-8 border-t border-white/5 flex justify-between text-[10px] text-white/10 tracking-widest uppercase">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
