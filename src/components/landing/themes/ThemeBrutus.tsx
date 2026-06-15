import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeBrutus() {
  return (
    <div className="bg-[#F0EDE8] text-[#0A0A0A] font-grid-body min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F0EDE8]/97 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between border-b-[3px] border-[#0A0A0A]">
          <span className="font-brutus text-2xl tracking-[0.05em] text-[#0A0A0A] uppercase">
            be<span className="text-[#E8A020]">WANTED</span>
          </span>
          <div className="flex gap-3">
            <Link
              href="/login"
              className="font-brutus text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="font-brutus text-[11px] tracking-[0.3em] uppercase bg-[#E8A020] text-black px-5 py-2 hover:bg-[#0A0A0A] hover:text-[#E8A020] transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO — raw, edge-to-edge */}
      <section className="pt-14 min-h-screen flex flex-col justify-between">
        {/* Top event label */}
        <div className="border-b-[3px] border-[#0A0A0A] px-6 py-3 flex items-center justify-between bg-[#E8A020]">
          <span className="font-brutus text-sm tracking-[0.3em] uppercase text-black">
            BEST Graz × TU Graz
          </span>
          <span className="font-brutus text-sm tracking-[0.3em] uppercase text-black">
            26 Nov 2025 · Graz
          </span>
        </div>

        {/* Massive type — no margins, edge to edge */}
        <div className="flex-1 flex flex-col justify-center px-4 py-8 overflow-hidden">
          <h1 className="font-brutus leading-[0.82] text-[#0A0A0A] uppercase">
            <span className="block text-[clamp(5rem,18vw,20rem)] tracking-[-0.03em]">BE</span>
            <div className="flex items-baseline gap-0">
              <span className="block text-[clamp(5rem,18vw,20rem)] tracking-[-0.03em] text-[#E8A020]">WANT</span>
              <span className="block text-[clamp(5rem,18vw,20rem)] tracking-[-0.03em]">ED.</span>
            </div>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start px-2">
            <p className="text-[#0A0A0A]/45 max-w-xs text-[15px] leading-relaxed border-l-[3px] border-[#E8A020] pl-4">
              Austria&apos;s most personal career event. Direct CV feedback. TU Graz.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/register/student"
                className="font-brutus text-[11px] tracking-[0.3em] uppercase bg-[#0A0A0A] text-[#F0EDE8] px-7 py-3.5 hover:bg-[#E8A020] hover:text-black transition-colors"
              >
                Students →
              </Link>
              <Link
                href="/register/company"
                className="font-brutus text-[11px] tracking-[0.3em] uppercase border-[3px] border-[#0A0A0A]/25 text-[#0A0A0A]/45 px-7 py-3.5 hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all"
              >
                Companies
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="border-t-[3px] border-[#0A0A0A] grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 px-6 border-r-[3px] last:border-r-0 border-[#0A0A0A] ${i === 1 ? "bg-[#0A0A0A]" : ""}`}
            >
              <span className={`font-brutus text-2xl block ${i === 1 ? "text-[#E8A020]" : "text-[#0A0A0A]"}`}>{stat.num}</span>
              <span className={`text-[9px] tracking-[0.3em] uppercase block mt-0.5 ${i === 1 ? "text-white/30" : "text-[#0A0A0A]/35"}`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t-[3px] border-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-16 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#0A0A0A]">
            <h2 className="font-brutus text-[clamp(3rem,7vw,7rem)] leading-[0.88] text-[#0A0A0A] uppercase mb-8">
              MORE<br />THAN A<br />FAIR.
            </h2>
            <p className="text-[#0A0A0A]/45 leading-relaxed text-[15px] max-w-sm">
              beWANTED connects TU Graz students directly with company HR for personal, actionable CV feedback. Real sessions. Real impact.
            </p>
          </div>

          <div className="p-10 md:p-16">
            <p className="text-[#0A0A0A]/45 leading-relaxed text-[15px] mb-10">
              Workshops (90 min, 15 students max) run one week before. Main event: all-day November 26 at TU Graz. Every conversation is one-on-one.
            </p>
            <div className="grid grid-cols-2 gap-[3px] bg-[#0A0A0A]">
              {STATS.map((stat, i) => (
                <div key={stat.label} className={`p-6 ${i === 2 ? "bg-[#E8A020]" : "bg-[#F0EDE8]"}`}>
                  <span className={`font-brutus text-3xl block ${i === 2 ? "text-black" : "text-[#0A0A0A]"}`}>{stat.num}</span>
                  <span className={`text-[9px] tracking-[0.3em] uppercase block mt-1 ${i === 2 ? "text-black/50" : "text-[#0A0A0A]/35"}`}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t-[3px] border-[#0A0A0A] bg-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 md:p-14 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-white/10">
            <h3 className="font-brutus text-[10px] tracking-[0.5em] uppercase text-white/20 mb-10 pb-4 border-b-[2px] border-white/8">
              For Students
            </h3>
            <div className="space-y-6">
              {STEPS_STUDENTS.map((step) => (
                <div key={step.n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-brutus text-3xl text-[#E8A020]/20 leading-none">{step.n}</span>
                  <div>
                    <h4 className="font-brutus text-base tracking-wide text-white mb-0.5">{step.title}</h4>
                    <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14">
            <h3 className="font-brutus text-[10px] tracking-[0.5em] uppercase text-white/20 mb-10 pb-4 border-b-[2px] border-white/8">
              For Companies
            </h3>
            <div className="space-y-6">
              {STEPS_COMPANIES.map((step) => (
                <div key={step.n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-brutus text-3xl text-white/10 leading-none">{step.n}</span>
                  <div>
                    <h4 className="font-brutus text-base tracking-wide text-white mb-0.5">{step.title}</h4>
                    <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="border-t-[3px] border-[#0A0A0A] p-10 md:p-14">
        <h2 className="font-brutus text-[clamp(2.5rem,6vw,6rem)] leading-none text-[#0A0A0A] uppercase mb-10">
          TIERS.
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-[3px] border-[#0A0A0A]">
            <thead>
              <tr className="border-b-[3px] border-[#0A0A0A]">
                <th className="text-left p-5 font-brutus text-[10px] tracking-[0.4em] uppercase text-[#0A0A0A]/30 font-normal border-r-[3px] border-[#0A0A0A] w-2/5">
                  Feature
                </th>
                {TIERS.map((tier) => (
                  <th key={tier.name} className={`text-center p-5 border-r-[3px] last:border-r-0 border-[#0A0A0A] ${tier.highlight ? "bg-[#E8A020]" : "bg-[#F0EDE8]"}`}>
                    <div className="font-brutus text-[9px] tracking-[0.4em] uppercase text-[#0A0A0A]/40 mb-1">{tier.name}</div>
                    <div className="font-brutus text-2xl text-[#0A0A0A] leading-none">{tier.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ALL_TIER_FEATURES.map((feature, i) => (
                <tr key={feature} className={`border-b-[2px] border-[#0A0A0A]/15 ${i % 2 === 0 ? "bg-[#F0EDE8]" : "bg-white"}`}>
                  <td className="py-3.5 px-5 text-sm text-[#0A0A0A]/55 border-r-[3px] border-[#0A0A0A]">{feature}</td>
                  {TIERS.map((tier) => (
                    <td key={tier.name} className={`text-center py-3.5 px-5 border-r-[2px] last:border-r-0 border-[#0A0A0A]/10 ${tier.highlight ? "bg-[#E8A020]/10" : ""}`}>
                      {tier.benefits.includes(feature)
                        ? <span className={`font-brutus text-lg ${tier.highlight ? "text-[#0A0A0A]" : "text-[#E8A020]"}`}>✓</span>
                        : <span className="text-[#0A0A0A]/15">—</span>
                      }
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t-[3px] border-[#0A0A0A]">
                <td className="p-4 border-r-[3px] border-[#0A0A0A]" />
                {TIERS.map((tier) => (
                  <td key={tier.name} className={`p-4 text-center border-r-[3px] last:border-r-0 border-[#0A0A0A] ${tier.highlight ? "bg-[#E8A020]" : ""}`}>
                    <Link
                      href="/register/company"
                      className={`inline-block font-brutus text-[10px] tracking-[0.4em] uppercase py-2.5 px-5 border-[3px] transition-all
                        ${tier.highlight
                          ? "border-black bg-black text-white hover:bg-white hover:text-black"
                          : "border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F0EDE8]"
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
      </section>

      {/* CTA */}
      <section className="border-t-[3px] border-[#0A0A0A] bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-brutus text-[clamp(5rem,15vw,16rem)] leading-none text-white uppercase mb-8">
            NOV<br />26.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="font-brutus text-[11px] tracking-[0.4em] uppercase bg-[#E8A020] text-black px-10 py-4 hover:bg-white transition-colors"
            >
              Student Registration
            </Link>
            <Link
              href="/register/company"
              className="font-brutus text-[11px] tracking-[0.4em] uppercase border-[3px] border-white/20 text-white/40 px-10 py-4 hover:border-[#E8A020] hover:text-[#E8A020] transition-all"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-[3px] border-[#0A0A0A] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-brutus text-2xl text-[#0A0A0A] uppercase">
            be<span className="text-[#E8A020]">WANTED</span>
          </span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 font-brutus text-[9px] tracking-[0.4em] uppercase text-[#0A0A0A]/30">
            <a href="#about" className="hover:text-[#0A0A0A] transition-colors">About</a>
            <a href="#how" className="hover:text-[#0A0A0A] transition-colors">Process</a>
            <a href="#tiers" className="hover:text-[#0A0A0A] transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-[#0A0A0A] transition-colors">Login</Link>
            <Link href="/register" className="hover:text-[#0A0A0A] transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A0A0A] transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-[#0A0A0A]/10 flex justify-between font-brutus text-[9px] tracking-widest uppercase text-[#0A0A0A]/20">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
