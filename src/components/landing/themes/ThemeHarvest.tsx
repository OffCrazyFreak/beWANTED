import Link from "next/link";
import { STATS, STEPS_STUDENTS, STEPS_COMPANIES, TIERS, ALL_TIER_FEATURES } from "@/components/landing/data";

export default function ThemeHarvest() {
  return (
    <div className="bg-[#FBF5EA] text-[#1E0D06] font-harvest-body min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FBF5EA]/96 backdrop-blur-sm border-b border-[#1E0D06]/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-harvest font-bold text-xl tracking-tight text-[#1E0D06]">
            be<span className="text-[#C14D2A]">WANTED</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm text-[#1E0D06]/40">
            <a href="#about" className="hover:text-[#C14D2A] transition-colors">About</a>
            <a href="#how" className="hover:text-[#C14D2A] transition-colors">How It Works</a>
            <a href="#tiers" className="hover:text-[#C14D2A] transition-colors">Partners</a>
          </div>
          <div className="flex gap-3 items-center">
            <Link href="/login" className="text-sm text-[#1E0D06]/40 hover:text-[#1E0D06] transition-colors">
              Log in
            </Link>
            <Link
              href="/register"
              className="text-sm bg-[#C14D2A] text-white px-5 py-2 rounded-full hover:bg-[#1E0D06] transition-colors font-harvest font-semibold"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 relative overflow-hidden min-h-screen flex flex-col">
        {/* Warm background rings */}
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#C14D2A]/8 pointer-events-none" />
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#E8A020]/6 pointer-events-none" />

        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
          <div className="animate-warm-rise">
            <div className="inline-flex items-center gap-3 bg-[#C14D2A]/10 rounded-full px-4 py-2 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C14D2A]" />
              <span className="text-[#C14D2A] text-xs font-harvest font-semibold tracking-wider uppercase">
                BEST Graz × TU Graz · Nov 26, 2025
              </span>
            </div>
          </div>

          <div className="animate-warm-rise-2">
            <h1 className="font-harvest font-black leading-[0.88] tracking-tight text-[#1E0D06]">
              <span className="block text-[clamp(4rem,11vw,11rem)]">Where</span>
              <span className="block text-[clamp(4rem,11vw,11rem)] italic text-[#C14D2A]">ambition</span>
              <span className="block text-[clamp(4rem,11vw,11rem)]">meets</span>
              <span className="block text-[clamp(4rem,11vw,11rem)] italic">its match.</span>
            </h1>
          </div>

          <div className="animate-warm-rise-3 mt-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <p className="text-[#1E0D06]/45 max-w-sm leading-relaxed text-[15px]">
              Austria&apos;s most personal career event. Direct CV feedback from top company HR at TU Graz.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/register/student"
                className="font-harvest font-bold text-sm bg-[#1E0D06] text-[#FBF5EA] px-7 py-3.5 rounded-full hover:bg-[#C14D2A] transition-colors"
              >
                For Students
              </Link>
              <Link
                href="/register/company"
                className="font-harvest font-bold text-sm border-2 border-[#1E0D06]/20 text-[#1E0D06]/50 px-7 py-3.5 rounded-full hover:border-[#C14D2A] hover:text-[#C14D2A] transition-all"
              >
                For Companies
              </Link>
            </div>
          </div>
        </div>

        {/* Warm wave divider */}
        <div className="relative h-32">
          <svg viewBox="0 0 1440 128" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 C240,100 480,20 720,64 C960,108 1200,28 1440,64 L1440,128 L0,128 Z" fill="#C14D2A" />
          </svg>
        </div>
      </section>

      {/* STATS — terracotta background */}
      <section className="bg-[#C14D2A] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className="font-harvest font-black text-5xl text-white block leading-none">{stat.num}</span>
                <span className="text-white/60 text-xs tracking-wider uppercase block mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#FBF5EA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C14D2A] text-xs tracking-[0.4em] uppercase font-harvest font-bold block mb-4">
                About the Event
              </span>
              <h2 className="font-harvest font-black text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-[#1E0D06] mb-6">
                More than<br />a career fair.
              </h2>
              <p className="text-[#1E0D06]/50 leading-relaxed mb-4 text-[15px]">
                beWANTED connects TU Graz students directly with company HR teams for personal, actionable CV feedback. Structured, intimate, with real impact.
              </p>
              <p className="text-[#1E0D06]/50 leading-relaxed text-[15px]">
                Workshops (90 min, max 15 students) run one week before. Main event: all-day November 26 at TU Graz. Every conversation is genuinely one-on-one.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "30+", l: "Partner Companies", bg: "bg-[#1E0D06]", text: "text-[#E8A020]", sub: "text-white/40" },
                { n: "500+", l: "Student Participants", bg: "bg-[#E8A020]", text: "text-[#1E0D06]", sub: "text-[#1E0D06]/50" },
                { n: "9m²", l: "Exhibition Space", bg: "bg-[#C14D2A]/15", text: "text-[#C14D2A]", sub: "text-[#1E0D06]/40" },
                { n: "2×", l: "Cities per Year", bg: "bg-[#FBF0E0] border border-[#1E0D06]/8", text: "text-[#1E0D06]", sub: "text-[#1E0D06]/40" },
              ].map((item) => (
                <div key={item.l} className={`${item.bg} rounded-2xl p-6`}>
                  <span className={`font-harvest font-black text-3xl ${item.text} block leading-none`}>{item.n}</span>
                  <span className={`${item.sub} text-xs tracking-wider uppercase block mt-2`}>{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-[#1E0D06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[#C14D2A] text-xs tracking-[0.4em] uppercase font-harvest font-bold block mb-4">
            Process
          </span>
          <h2 className="font-harvest font-black text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-white mb-14">
            How it works.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/8 p-8">
              <h3 className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-8 pb-4 border-b border-white/8">
                For Students
              </h3>
              <div className="space-y-6">
                {STEPS_STUDENTS.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C14D2A]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#C14D2A] text-xs font-harvest font-bold">{step.n}</span>
                    </div>
                    <div>
                      <h4 className="font-harvest font-bold text-white text-sm mb-0.5">{step.title}</h4>
                      <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 p-8">
              <h3 className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-8 pb-4 border-b border-white/8">
                For Companies
              </h3>
              <div className="space-y-6">
                {STEPS_COMPANIES.map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E8A020]/15 flex items-center justify-center shrink-0">
                      <span className="text-[#E8A020] text-xs font-harvest font-bold">{step.n}</span>
                    </div>
                    <div>
                      <h4 className="font-harvest font-bold text-white text-sm mb-0.5">{step.title}</h4>
                      <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-24 bg-[#FBF5EA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[#C14D2A] text-xs tracking-[0.4em] uppercase font-harvest font-bold block mb-4">
            Partnership
          </span>
          <h2 className="font-harvest font-black text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-[#1E0D06] mb-12">
            Choose your tier.
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#1E0D06]/10 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1E0D06]">
                  <th className="text-left p-5 font-harvest text-xs tracking-wider uppercase text-white/30 font-normal w-2/5">
                    Benefit
                  </th>
                  {TIERS.map((tier) => (
                    <th key={tier.name} className={`text-center p-5 ${tier.highlight ? "bg-[#C14D2A]" : ""}`}>
                      <div className="font-harvest font-bold text-xs tracking-[0.3em] uppercase text-white/50 mb-1">{tier.name}</div>
                      <div className="font-harvest font-black text-2xl text-white">{tier.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ALL_TIER_FEATURES.map((feature, i) => (
                  <tr key={feature} className={`border-b border-[#1E0D06]/6 ${i % 2 === 0 ? "bg-white" : "bg-[#FBF5EA]"}`}>
                    <td className="py-3.5 px-5 text-sm text-[#1E0D06]/55">{feature}</td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className={`text-center py-3.5 px-5 ${tier.highlight ? "bg-[#C14D2A]/5" : ""}`}>
                        {tier.benefits.includes(feature)
                          ? <span className={`font-harvest font-bold text-base ${tier.highlight ? "text-[#C14D2A]" : "text-[#E8A020]"}`}>✓</span>
                          : <span className="text-[#1E0D06]/15">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white border-t border-[#1E0D06]/10">
                  <td className="p-5" />
                  {TIERS.map((tier) => (
                    <td key={tier.name} className={`p-5 text-center ${tier.highlight ? "bg-[#C14D2A]/5" : ""}`}>
                      <Link
                        href="/register/company"
                        className={`inline-block font-harvest font-bold text-xs tracking-wider uppercase py-2.5 px-6 rounded-full transition-all
                          ${tier.highlight
                            ? "bg-[#C14D2A] text-white hover:bg-[#1E0D06]"
                            : "border-2 border-[#1E0D06]/15 text-[#1E0D06]/45 hover:border-[#C14D2A] hover:text-[#C14D2A]"
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

          <p className="mt-6 text-center text-[#1E0D06]/30 text-sm">
            Startup?{" "}
            <a href="mailto:bewanted@bestgraz.org" className="text-[#C14D2A] hover:underline">
              Special rates available
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E8A020] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E0D06]/10" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #1E0D06 2px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-harvest font-black text-[clamp(4rem,10vw,10rem)] leading-none text-[#1E0D06] mb-6">
            Nov 26.<br />TU Graz.
          </h2>
          <p className="text-[#1E0D06]/55 mb-10 max-w-md mx-auto leading-relaxed">
            Join Austria&apos;s most personal career event and take the next step in your journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register/student"
              className="font-harvest font-bold text-sm bg-[#1E0D06] text-[#E8A020] px-10 py-4 rounded-full hover:bg-white hover:text-[#1E0D06] transition-colors"
            >
              Student Registration ↗
            </Link>
            <Link
              href="/register/company"
              className="font-harvest font-bold text-sm border-2 border-[#1E0D06]/30 text-[#1E0D06] px-10 py-4 rounded-full hover:bg-[#1E0D06] hover:text-[#E8A020] transition-all"
            >
              Company Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E0D06] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <span className="font-harvest font-black text-2xl text-white">
            be<span className="text-[#C14D2A]">WANTED</span>
          </span>
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 text-xs text-white/25 tracking-wider uppercase">
            <a href="#about" className="hover:text-white/60 transition-colors">About</a>
            <a href="#how" className="hover:text-white/60 transition-colors">How It Works</a>
            <a href="#tiers" className="hover:text-white/60 transition-colors">Tiers</a>
            <Link href="/login" className="hover:text-white/60 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-white/60 transition-colors">Register</Link>
            <a href="https://bestgraz.org" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">BEST Graz ↗</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] text-white/15 tracking-widest uppercase">
          <span>© 2025 BEST Graz · beWANTED</span>
          <span>TU Graz · Austria</span>
        </div>
      </footer>
    </div>
  );
}
