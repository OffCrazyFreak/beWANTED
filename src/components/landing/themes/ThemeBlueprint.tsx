import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeBlueprint() {
  return (
    <div
      className="bg-[#0B1220] text-[#A8C5E0] font-blueprint min-h-screen overflow-x-hidden animate-bp-flicker"
      style={{
        backgroundImage:
          "linear-gradient(rgba(168,197,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,197,224,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0B1220]/90 backdrop-blur-sm border-b border-[#A8C5E0]/10">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          {/* Drawing sheet corner marks */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-1.5 items-center">
              <div className="w-2 h-2 border-l border-t border-[#E8A020]/60" />
              <div className="w-2 h-2 border-r border-t border-[#E8A020]/60" />
            </div>
            <span className="font-blueprint font-bold text-base tracking-[0.15em] text-[#E8A020] uppercase">
              beWANTED
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.3em] text-[#A8C5E0]/40">
            <a href="#about" className="hover:text-[#E8A020] transition-colors uppercase">Spec</a>
            <a href="#how" className="hover:text-[#E8A020] transition-colors uppercase">Process</a>
            <a href="#tiers" className="hover:text-[#E8A020] transition-colors uppercase">Config</a>
          </div>

          <div className="flex gap-3 items-center">
            <Link href="/login" className="text-[10px] tracking-[0.3em] uppercase text-[#A8C5E0]/30 hover:text-[#A8C5E0]/70 transition-colors">
              Login
            </Link>
            <Link
              href="/register"
              className="text-[10px] tracking-[0.3em] uppercase border border-[#E8A020]/60 text-[#E8A020] px-5 py-2 hover:bg-[#E8A020] hover:text-black transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden">

        {/* Corner registration marks */}
        <div className="absolute top-24 left-6 w-8 h-8 border-l-2 border-t-2 border-[#E8A020]/30 pointer-events-none" />
        <div className="absolute top-24 right-6 w-8 h-8 border-r-2 border-t-2 border-[#E8A020]/30 pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-[#E8A020]/30 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-[#E8A020]/30 pointer-events-none" />

        {/* Drawing title block (bottom right, like a real blueprint) */}
        <div className="absolute bottom-12 right-6 md:right-12 border border-[#A8C5E0]/15 hidden md:grid grid-cols-2 text-[8px] tracking-[0.3em] uppercase text-[#A8C5E0]/30">
          <div className="border-r border-b border-[#A8C5E0]/15 px-3 py-1.5">Project</div>
          <div className="border-b border-[#A8C5E0]/15 px-3 py-1.5">beWANTED 2025</div>
          <div className="border-r border-b border-[#A8C5E0]/15 px-3 py-1.5">Org.</div>
          <div className="border-b border-[#A8C5E0]/15 px-3 py-1.5">BEST Graz</div>
          <div className="border-r border-[#A8C5E0]/15 px-3 py-1.5">Date</div>
          <div className="px-3 py-1.5">26.11.2025</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 bg-[#E8A020]" />
            <span className="font-noir-body text-[#E8A020] text-[10px] tracking-[0.6em] uppercase">
              CAREER EVENT · SPECIFICATION SHEET
            </span>
          </div>

          {/* Main title — rendered like a technical drawing label */}
          <div className="relative mb-2">
            <h1 className="font-blueprint font-bold leading-[0.88] text-[#D0E4F4]">
              <span className="block text-[clamp(5rem,13vw,14rem)] tracking-[-0.01em]">be</span>
              <span
                className="block text-[clamp(5rem,13vw,14rem)] tracking-[-0.01em]"
                style={{ WebkitTextStroke: "1.5px #E8A020", color: "transparent" }}
              >
                WANT
              </span>
              <span className="block text-[clamp(5rem,13vw,14rem)] tracking-[-0.01em] text-[#E8A020]">
                ED.
              </span>
            </h1>

            {/* Dimension arrows on the side */}
            <div className="absolute right-4 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center gap-0">
              <div className="flex-1 w-px bg-[#A8C5E0]/15" />
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#A8C5E0]/30 shrink-0">
                <path d="M12 2L12 22M12 2L8 6M12 2L16 6M12 22L8 18M12 22L16 18" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              <div className="flex-1 w-px bg-[#A8C5E0]/15" />
            </div>
          </div>

          {/* Spec row */}
          <div className="mt-10 mb-10 border-t border-b border-[#A8C5E0]/10 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 border border-[#E8A020]/60 rotate-45 shrink-0" />
                <div>
                  <span className="font-blueprint font-bold text-lg text-[#E8A020] block leading-none">{stat.num}</span>
                  <span className="font-noir-body text-[#A8C5E0]/30 text-[9px] tracking-[0.3em] uppercase">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/register/student"
              className="font-blueprint font-semibold text-[11px] tracking-[0.3em] uppercase bg-[#E8A020] text-black px-8 py-3.5 hover:bg-white transition-colors"
            >
              Student Access ↗
            </Link>
            <Link
              href="/register/company"
              className="font-blueprint font-semibold text-[11px] tracking-[0.3em] uppercase border border-[#A8C5E0]/20 text-[#A8C5E0]/50 px-8 py-3.5 hover:border-[#E8A020]/50 hover:text-[#A8C5E0]/80 transition-all"
            >
              Company Config
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT — Technical specification layout */}
      <section id="about" className="py-20 border-t border-[#A8C5E0]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Section heading with draw style */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-noir-body text-[#E8A020]/60 text-[9px] tracking-[0.6em] uppercase">SPEC §01</span>
            <div className="flex-1 h-px bg-[#A8C5E0]/10" />
            <span className="font-noir-body text-[#A8C5E0]/20 text-[9px] tracking-[0.4em] uppercase">System Overview</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-blueprint font-bold text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] text-[#D0E4F4] mb-6">
                MORE<br />THAN<br />A FAIR.
              </h2>
              <p className="font-blueprint text-[#A8C5E0]/50 leading-relaxed text-[15px]">
                beWANTED connects TU Graz students directly with company HR for personal, actionable CV feedback.
              </p>
            </div>

            {/* Annotated diagram */}
            <div className="lg:col-span-7">
              <div className="relative border border-[#A8C5E0]/10 p-8">
                {/* Corner marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-[#A8C5E0]/20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-[#A8C5E0]/20" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-[#A8C5E0]/20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-[#A8C5E0]/20" />

                <p className="font-blueprint text-[#A8C5E0]/45 leading-relaxed mb-6 text-[14px]">
                  Workshops (90 min, max 15 students) run one week prior. Main event: all-day November 26 at TU Graz. Every session is one-on-one, structured, focused.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="border border-[#A8C5E0]/8 p-4 relative">
                      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border border-[#E8A020]/30 rotate-45" />
                      <span className="font-blueprint font-bold text-2xl text-[#E8A020] block">{stat.num}</span>
                      <span className="font-noir-body text-[#A8C5E0]/25 text-[9px] tracking-[0.3em] uppercase block mt-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 border-t border-[#A8C5E0]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-noir-body text-[#E8A020]/60 text-[9px] tracking-[0.6em] uppercase">SPEC §02</span>
            <div className="flex-1 h-px bg-[#A8C5E0]/10" />
            <span className="font-noir-body text-[#A8C5E0]/20 text-[9px] tracking-[0.4em] uppercase">Process Flow</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#A8C5E0]/8">
            <div className="bg-[#0B1220] p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-[#E8A020]" />
                <h3 className="font-noir-body text-[9px] tracking-[0.5em] uppercase text-[#A8C5E0]/30">
                  User Type: STUDENT
                </h3>
              </div>
              <div className="space-y-6">
                {STEPS_STUDENTS.map((step, i) => (
                  <div key={step.n} className="relative pl-8">
                    {i < STEPS_STUDENTS.length - 1 && (
                      <div className="absolute left-[11px] top-5 bottom-[-1.5rem] w-px border-l border-dashed border-[#A8C5E0]/10" />
                    )}
                    <div className="absolute left-0 top-0.5 w-5 h-5 border border-[#E8A020]/40 flex items-center justify-center">
                      <span className="font-noir-body text-[7px] text-[#E8A020]/60">{step.n}</span>
                    </div>
                    <h4 className="font-blueprint font-semibold text-sm text-[#D0E4F4] mb-0.5">{step.title}</h4>
                    <p className="font-blueprint text-[#A8C5E0]/35 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0B1220] p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 border border-[#A8C5E0]/40 rotate-45" />
                <h3 className="font-noir-body text-[9px] tracking-[0.5em] uppercase text-[#A8C5E0]/30">
                  User Type: COMPANY
                </h3>
              </div>
              <div className="space-y-6">
                {STEPS_COMPANIES.map((step, i) => (
                  <div key={step.n} className="relative pl-8">
                    {i < STEPS_COMPANIES.length - 1 && (
                      <div className="absolute left-[11px] top-5 bottom-[-1.5rem] w-px border-l border-dashed border-[#A8C5E0]/10" />
                    )}
                    <div className="absolute left-0 top-0.5 w-5 h-5 border border-[#A8C5E0]/20 flex items-center justify-center">
                      <span className="font-noir-body text-[7px] text-[#A8C5E0]/30">{step.n}</span>
                    </div>
                    <h4 className="font-blueprint font-semibold text-sm text-[#D0E4F4] mb-0.5">{step.title}</h4>
                    <p className="font-blueprint text-[#A8C5E0]/35 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-20 border-t border-[#A8C5E0]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-noir-body text-[#E8A020]/60 text-[9px] tracking-[0.6em] uppercase">SPEC §03</span>
            <div className="flex-1 h-px bg-[#A8C5E0]/10" />
            <span className="font-noir-body text-[#A8C5E0]/20 text-[9px] tracking-[0.4em] uppercase">Partnership Configuration</span>
          </div>

          <div className="overflow-x-auto border border-[#A8C5E0]/10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#A8C5E0]/10">
                  <th className="text-left p-4 font-noir-body text-[8px] tracking-[0.5em] uppercase text-[#A8C5E0]/20 font-normal w-2/5">
                    // feature
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className={`text-center p-4 border-l border-[#A8C5E0]/8 ${tier.highlight ? "border-t-2 border-t-[#E8A020]" : ""}`}>
                      <div className={`font-noir-body text-[8px] tracking-[0.5em] uppercase mb-1 ${tier.highlight ? "text-[#E8A020]/60" : "text-[#A8C5E0]/20"}`}>
                        cfg:{tier.name.toLowerCase()}
                      </div>
                      <div className={`font-blueprint font-bold text-2xl leading-none ${tier.highlight ? "text-[#E8A020]" : "text-[#D0E4F4]"}`}>
                        {tier.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature) => (
                  <tr key={feature} className="border-b border-[#A8C5E0]/[0.05] hover:bg-[#A8C5E0]/[0.02] transition-colors">
                    <td className="py-3 px-4 text-sm font-blueprint text-[#A8C5E0]/40">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className={`text-center py-3 px-4 border-l border-[#A8C5E0]/8 ${tier.highlight ? "bg-[#E8A020]/[0.04]" : ""}`}>
                        {tier.benefits.includes(feature)
                          ? <span className={tier.highlight ? "text-[#E8A020] font-blueprint font-bold" : "text-[#A8C5E0]/50 font-blueprint"}>true</span>
                          : <span className="font-noir-body text-[#A8C5E0]/15 text-xs">null</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-[#A8C5E0]/10">
                  <td className="p-4 font-noir-body text-[8px] tracking-[0.3em] text-[#A8C5E0]/15">// init()</td>
                  {TIERS.map((tier) => (
                    <td key={tier.name} className={`p-4 text-center border-l border-[#A8C5E0]/8 ${tier.highlight ? "bg-[#E8A020]/[0.04]" : ""}`}>
                      <Link
                        href="/register/company"
                        className={`inline-block font-blueprint font-semibold text-[9px] tracking-[0.3em] uppercase py-2 px-4 border transition-all
                          ${tier.highlight
                            ? "border-[#E8A020] bg-[#E8A020] text-black hover:bg-transparent hover:text-[#E8A020]"
                            : "border-[#A8C5E0]/15 text-[#A8C5E0]/30 hover:border-[#A8C5E0]/40 hover:text-[#A8C5E0]/60"
                          }`}
                      >
                        Init →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center font-noir-body text-[#A8C5E0]/20 text-[10px] tracking-[0.2em]">
            // startup_discount: contact{" "}
            <a href="mailto:bewanted@bestgraz.org" className="text-[#E8A020]/60 hover:text-[#E8A020] transition-colors">
              bewanted@bestgraz.org
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#A8C5E0]/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #E8A020 0, #E8A020 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-noir-body text-[#E8A020]/60 text-[9px] tracking-[0.6em] uppercase">SPEC §04</span>
            <div className="flex-1 h-px bg-[#A8C5E0]/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h2 className="font-blueprint font-bold text-[clamp(4rem,10vw,10rem)] leading-none text-[#D0E4F4]">
              26<br />NOV<br /><span className="text-[#E8A020]">2025.</span>
            </h2>
            <div>
              <p className="font-blueprint text-[#A8C5E0]/40 leading-relaxed text-[15px] mb-8">
                TU Graz, Graz, Austria. Register now to secure your slot at Austria&apos;s most personal career event.
              </p>
              <div className="space-y-3">
                <Link
                  href="/register/student"
                  className="font-blueprint font-semibold text-[11px] tracking-[0.3em] uppercase bg-[#E8A020] text-black px-8 py-4 hover:bg-white transition-colors block text-center"
                >
                  Student Registration ↗
                </Link>
                <Link
                  href="/register/company"
                  className="font-blueprint font-semibold text-[11px] tracking-[0.3em] uppercase border border-[#A8C5E0]/15 text-[#A8C5E0]/40 px-8 py-4 hover:border-[#E8A020]/50 hover:text-[#A8C5E0]/80 transition-all block text-center"
                >
                  Company Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — Blueprint title block style */}
      <footer className="border-t border-[#A8C5E0]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="font-blueprint font-bold text-xl tracking-[0.15em] text-[#E8A020] uppercase block">
              beWANTED
            </span>
            <span className="font-noir-body text-[#A8C5E0]/20 text-[9px] tracking-[0.4em] uppercase block mt-1">
              Organized by BEST Graz
            </span>
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 font-noir-body text-[9px] tracking-[0.3em] uppercase text-[#A8C5E0]/20">
            <a href="#about" className="hover:text-[#A8C5E0]/60 transition-colors">Spec</a>
            <a href="#how" className="hover:text-[#A8C5E0]/60 transition-colors">Process</a>
            <a href="#tiers" className="hover:text-[#A8C5E0]/60 transition-colors">Config</a>
            <Link href="/login" className="hover:text-[#A8C5E0]/60 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-[#A8C5E0]/60 transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#A8C5E0]/60 transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="border-t border-[#A8C5E0]/8 px-6 md:px-12 py-4 flex justify-between font-noir-body text-[8px] tracking-[0.4em] uppercase text-[#A8C5E0]/12">
          <span>© 2025 BEST GRAZ · beWANTED</span>
          <span>DWG NO: BW-2025-001 · REV: A</span>
        </div>
      </footer>
    </div>
  );
}
