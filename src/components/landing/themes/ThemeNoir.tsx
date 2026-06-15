import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeNoir() {
  return (
    <div className="bg-[#090909] text-white font-noir-body">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#090909]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-noir-heading text-2xl tracking-tight">
            <span className="text-[#FFE600]">be</span>WANTED
          </span>
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] text-white/40">
            <a href="#about" className="hover:text-white/70 transition-colors">ABOUT</a>
            <a href="#how" className="hover:text-white/70 transition-colors">HOW IT WORKS</a>
            <a href="#tiers" className="hover:text-white/70 transition-colors">PARTNERS</a>
          </div>
          <div className="flex gap-3">
            <Link
              href="/login"
              className="text-[11px] tracking-[0.15em] text-white/40 border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white/70 transition-all"
            >
              LOG IN
            </Link>
            <Link
              href="/register"
              className="text-[11px] tracking-[0.15em] bg-[#FFE600] text-black px-4 py-2 hover:bg-white transition-colors font-medium"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Yellow diagonal accent lines */}
        <div className="absolute right-[12%] top-[15%] w-px h-[45vh] bg-[#FFE600]/40 rotate-[15deg] hidden lg:block" />
        <div className="absolute right-[15%] top-[25%] w-px h-[30vh] bg-[#FFE600]/15 rotate-[15deg] hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <span className="font-noir-body text-[#FFE600]/60 text-[11px] tracking-[0.4em] uppercase block mb-8">
            BEST Graz × TU Graz · Nov 26, 2025 · Graz, Austria
          </span>

          <h1 className="font-noir-heading leading-[0.85] tracking-tight">
            <span className="block text-white text-[clamp(4rem,12vw,13rem)]">FIND</span>
            <span className="block text-transparent [-webkit-text-stroke:2px_#FFE600] text-[clamp(4rem,12vw,13rem)]">
              YOUR
            </span>
            <span className="block text-[#FFE600] text-[clamp(4rem,12vw,13rem)]">MOVE.</span>
          </h1>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 items-start">
            <Link
              href="/register/student"
              className="group flex items-center gap-4 text-[11px] tracking-[0.2em] bg-[#FFE600] text-black px-8 py-4 hover:bg-white transition-colors font-medium"
            >
              FOR STUDENTS{" "}
              <span className="text-black/50 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/register/company"
              className="flex items-center gap-4 text-[11px] tracking-[0.2em] border border-white/15 text-white/60 px-8 py-4 hover:border-[#FFE600]/50 hover:text-white transition-all"
            >
              FOR COMPANIES <span className="text-white/30">→</span>
            </Link>
          </div>

          <p className="mt-10 max-w-sm text-white/30 text-sm leading-relaxed border-l border-[#FFE600]/20 pl-4">
            Austria's most personal career event. Get direct feedback on your CV from top
            company HR representatives at TU Graz.
          </p>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section id="about" className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FFE600]/60 text-[11px] tracking-[0.4em] uppercase block mb-4">
                WHAT IS BEWANTED
              </span>
              <h2 className="font-noir-heading text-5xl mb-6">
                More than a<br />career fair.
              </h2>
              <p className="text-white/40 leading-relaxed mb-4">
                beWANTED connects TU Graz students directly with company HR teams for
                personal CV feedback. It&apos;s not a typical career fair — it&apos;s a
                structured, intimate event with real impact.
              </p>
              <p className="text-white/40 leading-relaxed">
                Workshops (90 min, 15 students max) run one week before the main event.
                Main event runs all-day on Nov 26 at TU Graz. Every conversation counts.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/5">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[#090909] p-8">
                  <span className="font-noir-heading text-4xl text-[#FFE600] block">
                    {stat.num}
                  </span>
                  <span className="text-white/25 text-[11px] tracking-[0.2em] uppercase mt-2 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[#FFE600]/60 text-[11px] tracking-[0.4em] uppercase block mb-4">
            PROCESS
          </span>
          <h2 className="font-noir-heading text-5xl mb-16">How it works.</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-white/20 uppercase mb-8 pb-4 border-b border-white/5">
                For Students
              </h3>
              {STEPS_STUDENTS.map((step) => (
                <div key={step.n} className="flex gap-6 mb-8">
                  <span className="font-noir-heading text-3xl text-[#FFE600]/25 shrink-0 w-12">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-white/20 uppercase mb-8 pb-4 border-b border-white/5">
                For Companies
              </h3>
              {STEPS_COMPANIES.map((step) => (
                <div key={step.n} className="flex gap-6 mb-8">
                  <span className="font-noir-heading text-3xl text-[#FFE600]/25 shrink-0 w-12">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[#FFE600]/60 text-[11px] tracking-[0.4em] uppercase block mb-4">
            PARTNERSHIP
          </span>
          <h2 className="font-noir-heading text-5xl mb-16">Choose your tier.</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-4 pr-8 text-[10px] tracking-[0.3em] uppercase text-white/20 font-normal w-1/2">
                    Feature
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className="text-center py-4 px-4">
                      <div className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${tier.highlight ? "text-[#FFE600]/70" : "text-white/30"}`}>
                        {tier.name}
                      </div>
                      <div className={`font-noir-heading text-2xl ${tier.highlight ? "text-[#FFE600]" : "text-white"}`}>
                        {tier.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature) => (
                  <tr key={feature} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 pr-8 text-sm text-white/40">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className="text-center py-3.5 px-4">
                        {tier.benefits.includes(feature)
                          ? <span className={tier.highlight ? "text-[#FFE600]" : "text-white/50"}>✓</span>
                          : <span className="text-white/15">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="pt-6 pb-2" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className="pt-6 pb-2 px-4 text-center">
                      <Link
                        href="/register/company"
                        className={`inline-block text-center text-[10px] tracking-[0.2em] uppercase py-2.5 px-6 transition-all
                          ${tier.highlight
                            ? "bg-[#FFE600] text-black hover:bg-white"
                            : "border border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
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

          <p className="mt-8 text-white/20 text-xs text-center">
            Startup? Special discounts available —{" "}
            <a
              href="mailto:bewanted@bestgraz.org"
              className="text-[#FFE600]/50 hover:text-[#FFE600] transition-colors"
            >
              reach out to us
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFE600] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-noir-heading text-[clamp(4rem,10vw,9rem)] text-black leading-none mb-6">
            READY?
          </h2>
          <p className="text-black/55 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Join Austria&apos;s most personal career event. November 26, 2025 at TU Graz.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="bg-black text-[#FFE600] px-8 py-4 text-[11px] tracking-[0.2em] hover:bg-black/80 transition-colors"
            >
              STUDENT REGISTRATION
            </Link>
            <Link
              href="/register/company"
              className="border-2 border-black text-black px-8 py-4 text-[11px] tracking-[0.2em] hover:bg-black hover:text-[#FFE600] transition-all"
            >
              COMPANY PARTNERSHIP
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="font-noir-heading text-2xl">
                <span className="text-[#FFE600]">be</span>WANTED
              </span>
              <p className="text-white/25 text-xs mt-2">
                Organized by BEST Graz · A student organization
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3 text-[11px] tracking-[0.2em] text-white/25">
              <a href="#about" className="hover:text-white/50 transition-colors">ABOUT</a>
              <a href="#how" className="hover:text-white/50 transition-colors">HOW IT WORKS</a>
              <a href="#tiers" className="hover:text-white/50 transition-colors">TIERS</a>
              <Link href="/login" className="hover:text-white/50 transition-colors">LOGIN</Link>
              <Link href="/register" className="hover:text-white/50 transition-colors">REGISTER</Link>
              <a
                href="https://bestgraz.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/50 transition-colors"
              >
                BEST GRAZ ↗
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/15">
            <span>© 2025 BEST Graz · beWANTED</span>
            <span>TU Graz · Graz, Austria</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
