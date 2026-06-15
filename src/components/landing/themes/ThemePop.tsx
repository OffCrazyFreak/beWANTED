import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemePop() {
  return (
    <div className="bg-[#E8A020] text-[#0A0A0A] font-grid-body min-h-screen overflow-x-hidden">

      {/* Ben-Day dot overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #0A0A0A 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#E8A020]/97 backdrop-blur-sm border-b-4 border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-pop text-2xl tracking-tight text-[#0A0A0A]">
            beWANTED
          </span>
          <div className="flex gap-3">
            <Link
              href="/login"
              className="font-grid text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A]/45 hover:text-[#0A0A0A] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="font-grid text-[10px] tracking-[0.3em] uppercase bg-[#0A0A0A] text-[#E8A020] px-5 py-2 hover:bg-white hover:text-black transition-all border-2 border-[#0A0A0A]"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO — pop art poster style */}
      <section className="relative z-10 pt-14 min-h-screen flex flex-col">
        {/* Upper event band */}
        <div className="border-b-4 border-[#0A0A0A] px-6 py-3 flex items-center justify-between">
          <span className="font-grid text-[10px] tracking-[0.5em] uppercase text-[#0A0A0A]/50">
            BEST Graz × TU Graz
          </span>
          <span className="font-grid text-[10px] tracking-[0.5em] uppercase text-[#0A0A0A]/50">
            26 NOV 2025
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-10 max-w-7xl mx-auto w-full">
          {/* Giant pop art headline */}
          <div className="animate-pop-in">
            <h1 className="font-pop leading-[0.88] text-[#0A0A0A]">
              <span className="block text-[clamp(5rem,16vw,18rem)]">be</span>
              <span
                className="block text-[clamp(5rem,16vw,18rem)]"
                style={{ WebkitTextStroke: "4px #0A0A0A", color: "transparent" }}
              >
                WANT
              </span>
              <span className="block text-[clamp(5rem,16vw,18rem)] text-white [-webkit-text-stroke:4px_#0A0A0A]">ED.</span>
            </h1>
          </div>

          <div className="animate-pop-in-2 mt-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            {/* Comic panel style callout */}
            <div className="bg-white border-4 border-[#0A0A0A] px-6 py-4 max-w-xs rotate-[-1deg] [box-shadow:5px_5px_0_#0A0A0A]">
              <p className="font-pop text-[#0A0A0A] text-base leading-snug">
                Austria&apos;s MOST<br />personal career event!
              </p>
              <p className="font-grid text-[#0A0A0A]/50 text-xs mt-1">Direct CV feedback · TU Graz</p>
            </div>

            <div className="animate-pop-in-3 flex gap-3">
              <Link
                href="/register/student"
                className="font-pop text-base bg-[#0A0A0A] text-[#E8A020] px-7 py-3.5 border-4 border-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] transition-all [box-shadow:4px_4px_0_rgba(0,0,0,0.3)] hover:[box-shadow:2px_2px_0_rgba(0,0,0,0.3)]"
              >
                For Students ↗
              </Link>
              <Link
                href="/register/company"
                className="font-pop text-base bg-white text-[#0A0A0A] px-7 py-3.5 border-4 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#E8A020] transition-all [box-shadow:4px_4px_0_rgba(0,0,0,0.3)] hover:[box-shadow:2px_2px_0_rgba(0,0,0,0.3)]"
              >
                Companies
              </Link>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="border-t-4 border-[#0A0A0A] grid grid-cols-2 md:grid-cols-4 bg-[#0A0A0A]">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 px-6 border-r-4 last:border-r-0 border-[#E8A020]/20 ${i % 2 === 0 ? "bg-[#0A0A0A]" : "bg-[#E8A020]"}`}
            >
              <span className={`font-pop text-2xl block ${i % 2 === 0 ? "text-[#E8A020]" : "text-[#0A0A0A]"}`}>{stat.num}</span>
              <span className={`font-grid text-[9px] tracking-[0.3em] uppercase block mt-0.5 ${i % 2 === 0 ? "text-white/30" : "text-[#0A0A0A]/45"}`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 bg-white border-y-4 border-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-pop text-[clamp(3rem,7vw,7rem)] leading-[0.9] text-[#0A0A0A] mb-6">
                More than<br />a career<br />fair!
              </h2>
              <p className="text-[#0A0A0A]/50 leading-relaxed text-[15px] max-w-sm">
                beWANTED connects TU Graz students directly with company HR for personal, actionable CV feedback. Real people. Real conversations.
              </p>
            </div>
            <div
              className="bg-[#E8A020] border-4 border-[#0A0A0A] p-8 rotate-[1deg] [box-shadow:8px_8px_0_#0A0A0A]"
              style={{ backgroundImage: "radial-gradient(circle, #0A0A0A 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
            >
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-[#E8A020] border-2 border-[#0A0A0A] p-4 text-center [box-shadow:3px_3px_0_#0A0A0A]">
                    <span className="font-pop text-3xl text-[#0A0A0A] block">{stat.num}</span>
                    <span className="font-grid text-[8px] tracking-[0.3em] uppercase text-[#0A0A0A]/50 block mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-pop text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] text-[#0A0A0A] mb-12">
            How it works.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-[#0A0A0A] p-8 [box-shadow:6px_6px_0_#0A0A0A]">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#0A0A0A]/10">
                <div className="w-4 h-4 rounded-full bg-[#E8A020] border-2 border-[#0A0A0A]" />
                <h3 className="font-grid text-[10px] tracking-[0.5em] uppercase text-[#0A0A0A]/40">For Students</h3>
              </div>
              <div className="space-y-5">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="font-pop text-2xl text-[#E8A020] border-2 border-[#E8A020] w-8 h-8 flex items-center justify-center text-sm shrink-0 leading-none">
                      {step.n.replace("0", "")}
                    </span>
                    <div>
                      <h4 className="font-pop text-base text-[#0A0A0A] mb-0.5">{step.title}</h4>
                      <p className="font-grid text-[#0A0A0A]/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-[#0A0A0A] p-8 [box-shadow:6px_6px_0_#0A0A0A]">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#0A0A0A]/10">
                <div className="w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#0A0A0A]" />
                <h3 className="font-grid text-[10px] tracking-[0.5em] uppercase text-[#0A0A0A]/40">For Companies</h3>
              </div>
              <div className="space-y-5">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="font-pop text-2xl text-[#0A0A0A] border-2 border-[#0A0A0A] w-8 h-8 flex items-center justify-center text-sm shrink-0 leading-none">
                      {step.n.replace("0", "")}
                    </span>
                    <div>
                      <h4 className="font-pop text-base text-[#0A0A0A] mb-0.5">{step.title}</h4>
                      <p className="font-grid text-[#0A0A0A]/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="relative z-10 bg-white border-t-4 border-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-pop text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] text-[#0A0A0A] mb-12">
            Partnership tiers.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-4 border-[#0A0A0A]">
              <thead>
                <tr className="border-b-4 border-[#0A0A0A]">
                  <th className="text-left p-5 font-grid text-[9px] tracking-[0.4em] uppercase text-[#0A0A0A]/30 font-normal border-r-4 border-[#0A0A0A] w-2/5 bg-[#E8A020]"
                    style={{ backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)", backgroundSize: "10px 10px", backgroundBlendMode: "multiply" }}
                  >
                    Benefit
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className={`text-center p-5 border-r-4 last:border-r-0 border-[#0A0A0A] ${tier.highlight ? "bg-[#0A0A0A]" : "bg-white"}`}>
                      <div className={`font-grid text-[9px] tracking-[0.4em] uppercase mb-1 ${tier.highlight ? "text-white/40" : "text-[#0A0A0A]/35"}`}>{tier.name}</div>
                      <div className={`font-pop text-2xl leading-none ${tier.highlight ? "text-[#E8A020]" : "text-[#0A0A0A]"}`}>{tier.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature, i) => (
                  <tr key={feature} className={`border-b-2 border-[#0A0A0A]/15 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}>
                    <td className="py-3.5 px-5 text-sm text-[#0A0A0A]/55 border-r-4 border-[#0A0A0A]">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className={`text-center py-3.5 px-5 border-r-2 last:border-r-0 border-[#0A0A0A]/8 ${tier.highlight ? "bg-[#0A0A0A]/3" : ""}`}>
                        {tier.benefits.includes(feature)
                          ? <span className={`font-pop text-xl ${tier.highlight ? "text-[#E8A020]" : "text-[#E8A020]"}`}>✓</span>
                          : <span className="text-[#0A0A0A]/12 font-grid">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-4 border-[#0A0A0A]">
                  <td className="p-5 border-r-4 border-[#0A0A0A]" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className={`p-5 text-center border-r-4 last:border-r-0 border-[#0A0A0A] ${tier.highlight ? "bg-[#0A0A0A]" : ""}`}>
                      <Link
                        href="/register/company"
                        className={`inline-block font-pop text-base py-2 px-6 border-4 transition-all [box-shadow:3px_3px_0_#0A0A0A] hover:[box-shadow:1px_1px_0_#0A0A0A]
                          ${tier.highlight
                            ? "border-[#E8A020] bg-[#E8A020] text-black hover:bg-white"
                            : "border-[#0A0A0A] bg-[#E8A020] text-black hover:bg-white"
                          }`}
                      >
                        Apply!
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 inline-block bg-white border-2 border-[#0A0A0A] px-4 py-2 rotate-[-0.5deg] [box-shadow:3px_3px_0_#0A0A0A]">
            <p className="font-pop text-sm text-[#0A0A0A]">
              Startup? <a href="mailto:bewanted@bestgraz.org" className="text-[#E8A020] underline">Special rates!</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-[#0A0A0A] border-t-4 border-[#0A0A0A] py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #E8A020 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-pop text-[clamp(5rem,14vw,14rem)] leading-none text-[#E8A020] mb-8">
            Nov 26!<br />TU Graz!
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="font-pop text-base bg-[#E8A020] text-black px-10 py-4 border-4 border-[#E8A020] hover:bg-white transition-all [box-shadow:5px_5px_0_rgba(232,160,32,0.4)] hover:[box-shadow:2px_2px_0_rgba(232,160,32,0.4)]"
            >
              Student Registration ↗
            </Link>
            <Link
              href="/register/company"
              className="font-pop text-base bg-white text-[#0A0A0A] px-10 py-4 border-4 border-white hover:bg-[#E8A020] hover:border-[#E8A020] transition-all [box-shadow:5px_5px_0_rgba(255,255,255,0.15)] hover:[box-shadow:2px_2px_0_rgba(255,255,255,0.15)]"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t-4 border-[#0A0A0A] bg-[#E8A020] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-pop text-2xl text-[#0A0A0A]">beWANTED</span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 font-grid text-[9px] tracking-[0.4em] uppercase text-[#0A0A0A]/40">
            <a href="#about" className="hover:text-[#0A0A0A] transition-colors">About</a>
            <a href="#how" className="hover:text-[#0A0A0A] transition-colors">Process</a>
            <a href="#tiers" className="hover:text-[#0A0A0A] transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-[#0A0A0A] transition-colors">Login</Link>
            <Link href="/register" className="hover:text-[#0A0A0A] transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t-2 border-[#0A0A0A]/15 flex justify-between font-grid text-[9px] tracking-widest uppercase text-[#0A0A0A]/30">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
