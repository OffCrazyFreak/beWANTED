import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeIvory() {
  return (
    <div className="bg-[#FAFAFA] text-[#0A0A0A] font-ivory-body min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAFA]/98 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between border-b border-[#0A0A0A]/6">
          <span className="font-ivory font-light text-lg tracking-[0.3em] uppercase text-[#0A0A0A]">
            beWANTED
          </span>
          <div className="hidden md:flex gap-10 text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30">
            <a href="#about" className="hover:text-[#0A0A0A] transition-colors">About</a>
            <a href="#how" className="hover:text-[#0A0A0A] transition-colors">Process</a>
            <a href="#tiers" className="hover:text-[#0A0A0A] transition-colors">Tiers</a>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30 hover:text-[#0A0A0A] transition-colors">
              Login
            </Link>
            <Link
              href="/register"
              className="text-[11px] tracking-[0.3em] uppercase border border-[#0A0A0A] text-[#0A0A0A] px-5 py-2 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 px-8 relative">
        {/* Very subtle horizontal rule top and bottom */}
        <div className="absolute top-24 left-12 right-12 h-px bg-[#0A0A0A]/6" />
        <div className="absolute bottom-12 left-12 right-12 h-px bg-[#0A0A0A]/6" />

        <div className="animate-ivory-reveal">
          <span className="font-ivory-body text-[11px] tracking-[0.8em] uppercase text-[#0A0A0A]/25 block mb-16">
            BEST Graz × TU Graz · November 26, 2025
          </span>
        </div>

        <div className="animate-ivory-reveal-2">
          <h1 className="font-ivory font-light tracking-[0.04em] text-[#0A0A0A] leading-none">
            <span className="block text-[clamp(4rem,10vw,12rem)]">beWANTED.</span>
          </h1>
          <p className="font-ivory font-light italic text-[clamp(1.5rem,3vw,3.5rem)] text-[#C8A96E] mt-4 tracking-[0.08em]">
            Where ambition meets its match.
          </p>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/register/student"
            className="font-ivory-body text-[11px] tracking-[0.4em] uppercase bg-[#0A0A0A] text-[#FAFAFA] px-10 py-4 hover:bg-[#C8A96E] transition-colors"
          >
            Students
          </Link>
          <span className="text-[#0A0A0A]/15 hidden sm:block">·</span>
          <Link
            href="/register/company"
            className="font-ivory-body text-[11px] tracking-[0.4em] uppercase text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors border-b border-transparent hover:border-[#0A0A0A] pb-0.5"
          >
            Companies
          </Link>
        </div>

        {/* Minimal stat row */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-ivory font-light text-xl text-[#0A0A0A] block">{stat.num}</span>
              <span className="font-ivory-body text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A]/25 block mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 border-t border-[#0A0A0A]/6">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="font-ivory-body text-[10px] tracking-[0.8em] uppercase text-[#0A0A0A]/25 block mb-10">
            The Event
          </span>
          <h2 className="font-ivory font-light text-[clamp(2.5rem,5vw,6rem)] leading-[1.05] text-[#0A0A0A] mb-12 tracking-[-0.01em]">
            Austria&apos;s most personal career event. Direct CV feedback from top company HR. At TU Graz. Every November.
          </h2>
          <p className="font-ivory font-light italic text-lg text-[#C8A96E] max-w-md mx-auto leading-relaxed">
            Workshops (90 min, 15 students max) one week prior. The main event: all-day, November 26.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-32 bg-[#0A0A0A] border-t border-[#0A0A0A]/6">
        <div className="max-w-7xl mx-auto px-8">
          <span className="font-ivory-body text-[10px] tracking-[0.8em] uppercase text-white/20 block mb-16 text-center">
            Process
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="font-ivory font-light text-white/30 text-[11px] tracking-[0.6em] uppercase mb-12 pb-6 border-b border-white/6">
                For Students
              </h3>
              <div className="space-y-10">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="flex gap-8">
                    <span className="font-ivory font-light text-[3rem] leading-none text-white/8 shrink-0">{step.n}</span>
                    <div className="pt-2">
                      <h4 className="font-ivory font-light text-xl text-white mb-2 tracking-wide">{step.title}</h4>
                      <p className="font-ivory-body text-white/30 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-ivory font-light text-white/30 text-[11px] tracking-[0.6em] uppercase mb-12 pb-6 border-b border-white/6">
                For Companies
              </h3>
              <div className="space-y-10">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="flex gap-8">
                    <span className="font-ivory font-light text-[3rem] leading-none text-white/8 shrink-0">{step.n}</span>
                    <div className="pt-2">
                      <h4 className="font-ivory font-light text-xl text-white mb-2 tracking-wide">{step.title}</h4>
                      <p className="font-ivory-body text-white/30 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-32 border-t border-[#0A0A0A]/6">
        <div className="max-w-7xl mx-auto px-8">
          <span className="font-ivory-body text-[10px] tracking-[0.8em] uppercase text-[#0A0A0A]/20 block mb-6 text-center">
            Partnership
          </span>
          <h2 className="font-ivory font-light text-[clamp(2rem,4vw,5rem)] leading-none text-[#0A0A0A] mb-16 text-center tracking-[-0.01em]">
            Tiers.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#0A0A0A]/8">
                  <th className="text-left py-5 pr-10 font-ivory-body text-[10px] tracking-[0.5em] uppercase text-[#0A0A0A]/20 font-normal w-2/5">
                    Benefit
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className="text-center py-5 px-6">
                      <div className="font-ivory-body text-[10px] tracking-[0.5em] uppercase text-[#0A0A0A]/25 mb-2">{tier.name}</div>
                      <div className={`font-ivory font-light text-3xl leading-none ${tier.highlight ? "text-[#C8A96E]" : "text-[#0A0A0A]"}`}>
                        {tier.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature) => (
                  <tr key={feature} className="border-b border-[#0A0A0A]/[0.04] hover:bg-[#0A0A0A]/[0.01] transition-colors">
                    <td className="py-4 pr-10 font-ivory-body text-sm text-[#0A0A0A]/40">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className="text-center py-4 px-6">
                        {tier.benefits.includes(feature)
                          ? <span className={`font-ivory font-light text-xl ${tier.highlight ? "text-[#C8A96E]" : "text-[#0A0A0A]/40"}`}>✓</span>
                          : <span className="text-[#0A0A0A]/10 font-ivory font-light">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="pt-8 pb-2" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className="pt-8 pb-2 px-6 text-center">
                      <Link
                        href="/register/company"
                        className={`inline-block font-ivory-body text-[10px] tracking-[0.5em] uppercase py-3 px-6 transition-all border
                          ${tier.highlight
                            ? "border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-white"
                            : "border-[#0A0A0A]/15 text-[#0A0A0A]/30 hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
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

          <p className="mt-8 font-ivory-body text-center text-[#0A0A0A]/20 text-xs tracking-wider">
            Startup?{" "}
            <a href="mailto:bewanted@bestgraz.org" className="text-[#C8A96E] hover:underline">
              Special rates available
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="font-ivory font-light text-[clamp(5rem,12vw,14rem)] leading-none text-white tracking-[-0.02em] mb-12">
            Nov 26.
          </h2>
          <p className="font-ivory font-light italic text-[#C8A96E] text-xl mb-14 tracking-wide">
            TU Graz, Graz, Austria.
          </p>
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <Link
              href="/register/student"
              className="font-ivory-body text-[11px] tracking-[0.5em] uppercase bg-white text-[#0A0A0A] px-10 py-4 hover:bg-[#C8A96E] transition-colors"
            >
              Student Registration
            </Link>
            <span className="text-white/15 hidden sm:block font-ivory font-light text-2xl">·</span>
            <Link
              href="/register/company"
              className="font-ivory-body text-[11px] tracking-[0.5em] uppercase text-white/30 hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#0A0A0A]/6 py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-ivory font-light text-xl tracking-[0.3em] uppercase text-[#0A0A0A]">beWANTED</span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 font-ivory-body text-[10px] tracking-[0.4em] uppercase text-[#0A0A0A]/25">
            <a href="#about" className="hover:text-[#0A0A0A] transition-colors">About</a>
            <a href="#how" className="hover:text-[#0A0A0A] transition-colors">Process</a>
            <a href="#tiers" className="hover:text-[#0A0A0A] transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-[#0A0A0A] transition-colors">Login</Link>
            <Link href="/register" className="hover:text-[#0A0A0A] transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-8 pt-6 border-t border-[#0A0A0A]/6 flex justify-between font-ivory-body text-[9px] tracking-widest uppercase text-[#0A0A0A]/15">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
