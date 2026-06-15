import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeGrid() {
  return (
    <div className="bg-white text-[#0A0A0A] font-grid-body min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b-2 border-[#0A0A0A]">
        <div className="flex items-stretch h-14">
          <div className="flex items-center px-6 border-r-2 border-[#0A0A0A] shrink-0">
            <span className="font-grid text-xl tracking-[0.1em]">
              be<span className="text-[#E8A020]">WANTED</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-0 flex-1">
            {["ABOUT", "PROCESS", "PARTNERS"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="h-full flex items-center px-6 text-[10px] tracking-[0.3em] border-r border-[#0A0A0A]/10 hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-stretch ml-auto">
            <Link
              href="/login"
              className="flex items-center px-6 text-[10px] tracking-[0.2em] border-l-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              LOGIN
            </Link>
            <Link
              href="/register"
              className="flex items-center px-6 text-[10px] tracking-[0.2em] bg-[#E8A020] text-white hover:bg-[#0A0A0A] transition-colors font-semibold"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO — full bleed grid layout */}
      <section className="pt-14 min-h-screen grid grid-rows-[1fr_auto]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* Left: Massive type */}
          <div className="flex flex-col justify-end p-8 md:p-12 border-b-2 border-[#0A0A0A] lg:border-r-2 bg-white">
            <div className="mb-4">
              <span className="text-[10px] tracking-[0.5em] text-[#E8A020] uppercase font-grid-body">
                BEST Graz × TU Graz · 26 Nov 2025
              </span>
            </div>
            <h1 className="font-grid leading-[0.88] text-[#0A0A0A]">
              <span className="block text-[clamp(5rem,13vw,14rem)]">BE</span>
              <span className="block text-[clamp(5rem,13vw,14rem)] text-[#E8A020]">WANT</span>
              <span className="block text-[clamp(5rem,13vw,14rem)]">ED.</span>
            </h1>
          </div>

          {/* Right: Amber block with info */}
          <div className="bg-[#E8A020] flex flex-col justify-between p-8 md:p-12 border-b-2 border-[#0A0A0A] min-h-[50vh] lg:min-h-0">
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-[0.4em] text-black/40 uppercase font-grid-body">№ 01</span>
              <span className="text-[10px] tracking-[0.4em] text-black/40 uppercase font-grid-body">GRAZ, AUSTRIA</span>
            </div>

            <div>
              <p className="font-grid-body text-black/70 text-lg leading-relaxed mb-8 max-w-xs">
                Austria&apos;s most personal career event. Direct CV feedback from top company HR at TU Graz.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/register/student"
                  className="text-[11px] tracking-[0.2em] bg-[#0A0A0A] text-white px-6 py-3 hover:bg-white hover:text-black transition-colors font-grid"
                >
                  FOR STUDENTS
                </Link>
                <Link
                  href="/register/company"
                  className="text-[11px] tracking-[0.2em] border-2 border-[#0A0A0A] text-[#0A0A0A] px-6 py-3 hover:bg-[#0A0A0A] hover:text-white transition-colors font-grid"
                >
                  FOR COMPANIES
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-[#0A0A0A]">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 border-r-2 border-[#0A0A0A] last:border-r-0 ${i === 2 ? "bg-[#0A0A0A] text-white" : "bg-white"}`}
            >
              <span className={`font-grid text-3xl block ${i === 2 ? "text-[#E8A020]" : "text-[#0A0A0A]"}`}>
                {stat.num}
              </span>
              <span className={`text-[9px] tracking-[0.3em] uppercase block mt-1 ${i === 2 ? "text-white/40" : "text-[#0A0A0A]/35"}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t-2 border-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          {/* Label column */}
          <div className="bg-[#0A0A0A] text-white lg:w-24 flex lg:flex-col items-center justify-center p-6 lg:p-0">
            <span className="font-grid text-[#E8A020] text-[10px] tracking-[0.5em] uppercase lg:[writing-mode:vertical-rl] lg:rotate-180">
              ABOUT
            </span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-l-2 border-[#0A0A0A]">
            <div className="p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A]">
              <h2 className="font-grid text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] text-[#0A0A0A] mb-8">
                MORE<br />THAN A<br />FAIR.
              </h2>
              <p className="text-[#0A0A0A]/50 leading-relaxed text-[15px]">
                beWANTED connects TU Graz students directly with company HR teams for personal, actionable CV feedback. Structured, intimate, real impact.
              </p>
            </div>

            <div className="p-10 md:p-16">
              <p className="text-[#0A0A0A]/50 leading-relaxed text-[15px] mb-8">
                Workshops (90 min, max 15 students) run one week before the main event. The main event runs all-day on Nov 26 at TU Graz.
              </p>
              <div className="grid grid-cols-2 gap-px bg-[#0A0A0A]/10 mt-auto">
                <div className="bg-white p-6">
                  <span className="font-grid text-3xl text-[#E8A020] block">30+</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A]/35 block mt-1">Companies</span>
                </div>
                <div className="bg-white p-6">
                  <span className="font-grid text-3xl text-[#0A0A0A] block">500+</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#0A0A0A]/35 block mt-1">Students</span>
                </div>
                <div className="bg-[#E8A020] p-6">
                  <span className="font-grid text-3xl text-black block">9m²</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-black/40 block mt-1">Exhibition Space</span>
                </div>
                <div className="bg-[#0A0A0A] p-6">
                  <span className="font-grid text-3xl text-[#E8A020] block">2×</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 block mt-1">Cities / Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="border-t-2 border-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] border-[#0A0A0A]">
          <div className="bg-[#E8A020] lg:w-24 flex lg:flex-col items-center justify-center p-6 lg:p-0">
            <span className="font-grid text-black text-[10px] tracking-[0.5em] uppercase lg:[writing-mode:vertical-rl] lg:rotate-180">
              PROCESS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-l-2 border-[#0A0A0A]">
            <div className="p-10 md:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A]">
              <h3 className="font-grid text-[10px] tracking-[0.4em] text-[#0A0A0A]/30 uppercase mb-10">
                For Students
              </h3>
              <div className="space-y-8">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-grid text-[2rem] leading-none text-[#E8A020] opacity-60">{step.n}</span>
                    <div>
                      <h4 className="font-grid text-lg text-[#0A0A0A] mb-1">{step.title}</h4>
                      <p className="text-[#0A0A0A]/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-14">
              <h3 className="font-grid text-[10px] tracking-[0.4em] text-[#0A0A0A]/30 uppercase mb-10">
                For Companies
              </h3>
              <div className="space-y-8">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-grid text-[2rem] leading-none text-[#0A0A0A] opacity-20">{step.n}</span>
                    <div>
                      <h4 className="font-grid text-lg text-[#0A0A0A] mb-1">{step.title}</h4>
                      <p className="text-[#0A0A0A]/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="partners" className="border-t-2 border-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A] lg:w-24 flex lg:flex-col items-center justify-center p-6 lg:p-0">
            <span className="font-grid text-[#0A0A0A] text-[10px] tracking-[0.5em] uppercase lg:[writing-mode:vertical-rl] lg:rotate-180">
              TIERS
            </span>
          </div>

          <div className="p-10 md:p-14">
            <h2 className="font-grid text-[clamp(2.5rem,5vw,5rem)] leading-none text-[#0A0A0A] mb-10">
              PARTNERSHIP TIERS.
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-[#0A0A0A]">
                <thead>
                  <tr className="border-b-2 border-[#0A0A0A]">
                    <th className="text-left p-4 font-grid text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A]/30 font-normal border-r-2 border-[#0A0A0A] bg-white w-2/5">
                      Feature
                    </th>
                    {TIERS.map((tier) => (
                      <th key={tier.name} className={`text-center p-4 border-r-2 last:border-r-0 border-[#0A0A0A] ${tier.highlight ? "bg-[#E8A020]" : "bg-white"}`}>
                        <div className={`font-grid text-[10px] tracking-[0.3em] uppercase mb-1 ${tier.highlight ? "text-black/50" : "text-[#0A0A0A]/30"}`}>
                          {tier.name}
                        </div>
                        <div className={`font-grid text-2xl leading-none ${tier.highlight ? "text-black" : "text-[#0A0A0A]"}`}>
                          {tier.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ALL_TIER_FEATURES.map((feature, i) => (
                    <tr key={feature} className={`border-b border-[#0A0A0A]/10 ${i % 2 === 0 ? "bg-white" : "bg-[#0A0A0A]/[0.02]"}`}>
                      <td className="py-3 px-4 text-sm text-[#0A0A0A]/55 border-r-2 border-[#0A0A0A]">{feature}</td>
                      {TIERS.map((tier) => (
                        <td key={tier.name} className={`text-center py-3 px-4 border-r last:border-r-0 border-[#0A0A0A]/10 ${tier.highlight ? "bg-[#E8A020]/8" : ""}`}>
                          {tier.benefits.includes(feature)
                            ? <span className={`font-grid text-base ${tier.highlight ? "text-[#0A0A0A]" : "text-[#E8A020]"}`}>✓</span>
                            : <span className="text-[#0A0A0A]/15">—</span>
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#0A0A0A]">
                    <td className="p-4 border-r-2 border-[#0A0A0A]" />
                    {TIERS.map((tier) => (
                      <td key={tier.name} className={`p-4 text-center border-r-2 last:border-r-0 border-[#0A0A0A] ${tier.highlight ? "bg-[#E8A020]" : ""}`}>
                        <Link
                          href="/register/company"
                          className={`inline-block text-[10px] tracking-[0.3em] uppercase py-2.5 px-5 border-2 font-grid transition-all
                            ${tier.highlight
                              ? "border-black bg-black text-white hover:bg-white hover:text-black"
                              : "border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
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

            <p className="mt-6 text-[#0A0A0A]/30 text-xs">
              Startup?{" "}
              <a href="mailto:bewanted@bestgraz.org" className="text-[#E8A020] hover:underline">
                Special rates available
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-[#0A0A0A] bg-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          <div className="flex flex-col justify-center p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-white/10">
            <h2 className="font-grid text-[clamp(4rem,10vw,10rem)] leading-none text-white">
              READY<br />TO<br />BEGIN?
            </h2>
          </div>
          <div className="bg-[#E8A020] flex flex-col justify-center p-10 md:p-16">
            <p className="font-grid-body text-black/70 text-lg leading-relaxed mb-10">
              Join Austria&apos;s most personal career event. November 26, 2025 at TU Graz. Register now.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/register/student"
                className="font-grid text-[11px] tracking-[0.3em] uppercase bg-black text-[#E8A020] px-8 py-4 hover:bg-white hover:text-black transition-colors text-center"
              >
                Student Registration
              </Link>
              <Link
                href="/register/company"
                className="font-grid text-[11px] tracking-[0.3em] uppercase border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors text-center"
              >
                Company Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-[#0A0A0A] py-10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-grid text-2xl tracking-[0.1em] text-[#0A0A0A]">
            be<span className="text-[#E8A020]">WANTED</span>
          </span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A]/30">
            <a href="#about" className="hover:text-[#0A0A0A] transition-colors">About</a>
            <a href="#process" className="hover:text-[#0A0A0A] transition-colors">Process</a>
            <a href="#partners" className="hover:text-[#0A0A0A] transition-colors">Partners</a>
            <Link href="/login" className="hover:text-[#0A0A0A] transition-colors">Login</Link>
            <Link href="/register" className="hover:text-[#0A0A0A] transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 mt-8 pt-6 border-t border-[#0A0A0A]/10 flex justify-between text-[9px] tracking-widest text-[#0A0A0A]/20 uppercase">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
