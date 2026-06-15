"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Check, ArrowRight, MapPin, Calendar } from "lucide-react"
import { InstagramIcon, LinkedinIcon } from "@/components/icons/social-icons"
import { Lightbox } from "@/components/landing/lightbox"
import {
  EVENT,
  partners,
  studentTestimonials,
  companyTestimonials,
  partnershipBenefits,
  previousEditions,
  team,
  socials,
} from "@/lib/landing-data"

const ORANGE = "#fda720"

function BeWantedLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-xl", md: "text-3xl", lg: "text-5xl" }
  return (
    <div className={`font-bold leading-none tracking-tight ${sizes[size]}`} style={{ fontFamily: "var(--font-bebas-neue)" }}>
      <span className="text-white/60">be</span>
      <span style={{ color: ORANGE }}>WANTED</span>
    </div>
  )
}

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-4xl sm:text-6xl font-bold leading-none px-4 py-3 min-w-[80px] text-center border-2"
        style={{
          fontFamily: "var(--font-bebas-neue)",
          color: ORANGE,
          borderColor: ORANGE,
          background: "rgba(253,167,32,0.05)",
        }}
      >
        {value}
      </div>
      <span className="text-white/40 text-xs tracking-[0.2em] uppercase mt-2" style={{ fontFamily: "var(--font-space-mono)" }}>
        {label}
      </span>
    </div>
  )
}

export function Theme1() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#0a0a0a",
        fontFamily: "var(--font-space-mono), monospace",
      }}
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/10 backdrop-blur-sm" style={{ backgroundColor: "rgba(10,10,10,0.95)" }}>
        <BeWantedLogo size="sm" />
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-white/50">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#partners" className="hover:text-white transition-colors">Partners</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/30 hidden sm:block">EN / DE</span>
          <a
            href="#partnership"
            className="text-xs font-bold tracking-widest px-4 py-2 border border-[#fda720] text-[#fda720] hover:bg-[#fda720] hover:text-black transition-all"
          >
            PARTNER UP
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #fda720 40px, #fda720 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #fda720 40px, #fda720 41px)" }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase mb-6" style={{ fontFamily: "var(--font-space-mono)" }}>
            BEST Graz × TU Graz · {EVENT.date}
          </p>

          <div style={{ fontFamily: "var(--font-bebas-neue)" }}>
            <div className="text-[clamp(5rem,20vw,16rem)] leading-none font-normal text-white/10 select-none">
              be
            </div>
            <div
              className="text-[clamp(6rem,25vw,20rem)] leading-none font-normal -mt-8 md:-mt-16"
              style={{ color: ORANGE, textShadow: `0 0 80px rgba(253,167,32,0.3)` }}
            >
              WANTED
            </div>
          </div>

          <p className="text-base sm:text-xl text-white/50 mt-4 tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-space-mono)" }}>
            {EVENT.taglineEn}
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-12">
            <CountdownBox value="00" label="Days" />
            <span style={{ color: ORANGE, fontFamily: "var(--font-bebas-neue)" }} className="text-4xl -mt-6">:</span>
            <CountdownBox value="00" label="Hours" />
            <span style={{ color: ORANGE, fontFamily: "var(--font-bebas-neue)" }} className="text-4xl -mt-6">:</span>
            <CountdownBox value="00" label="Min" />
            <span style={{ color: ORANGE, fontFamily: "var(--font-bebas-neue)" }} className="text-4xl -mt-6">:</span>
            <CountdownBox value="00" label="Sec" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="size-4" style={{ color: ORANGE }} />
              {EVENT.dateShort}
            </span>
            <span className="hidden sm:block text-white/20">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" style={{ color: ORANGE }} />
              {EVENT.locationFull}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#partnership"
              className="group flex items-center gap-3 px-8 py-4 font-bold text-black tracking-widest text-sm hover:scale-105 transition-transform"
              style={{ backgroundColor: ORANGE, fontFamily: "var(--font-bebas-neue)", fontSize: "1.1rem", letterSpacing: "0.15em" }}
            >
              BECOME A PARTNER
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 font-bold text-white/60 tracking-widest border border-white/10 hover:border-white/40 hover:text-white transition-all text-sm"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.1rem", letterSpacing: "0.15em" }}
            >
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20" />
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <h2
              className="text-5xl sm:text-7xl font-normal"
              style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE }}
            >
              THIS YEAR'S<br />PARTNERS
            </h2>
            <div className="border border-white/10 px-5 py-3">
              <p className="text-xs text-white/40 uppercase tracking-widest">Spots filled</p>
              <p className="text-3xl font-bold mt-1" style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE }}>
                {partners.length}/{EVENT.maxCompanies}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center py-8 px-4 bg-[#0a0a0a] hover:bg-white/5 transition-colors group"
              >
                <div
                  className="w-full h-12 flex items-center justify-center font-bold text-center text-sm tracking-wider"
                  style={{
                    color: p.tier === "diamond" ? ORANGE : p.tier === "gold" ? "#f2b84c" : "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.name}
                </div>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase mt-1"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {p.tier}
                </span>
              </div>
            ))}
            {Array.from({ length: EVENT.maxCompanies - partners.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center py-8 px-4 bg-[#0a0a0a]"
              >
                <span className="text-white/10 text-xs tracking-widest">OPEN</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/30 mt-6 tracking-wider">
            ⚠ Limited to {EVENT.maxCompanies} companies. Spots allocated first-come, first-served.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">About the Event</p>
            <h2
              className="text-5xl sm:text-7xl leading-none mb-8"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              THE MOST<br />
              <span style={{ color: ORANGE }}>PERSONAL</span><br />
              CAREER EVENT
            </h2>
            <div className="space-y-4 text-white/50 text-sm leading-relaxed">
              <p>
                beWANTED is Graz's premier engineering career event, created by BEST Graz in partnership with TU Graz. Unlike massive job fairs, we strictly limit participation to ensure real, meaningful connections.
              </p>
              <p>
                Students meet company representatives face-to-face for dedicated CV-checks and conversations — not just booth visits. Companies leave with qualified candidates. Students leave with genuine opportunities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "18", label: "Max Companies" },
              { stat: "900+", label: "Students" },
              { stat: "5th", label: "Edition" },
              { stat: "100%", label: "TU Graz" },
            ].map(({ stat, label }) => (
              <div key={label} className="border border-white/10 p-6 hover:border-[#fda720]/30 transition-colors">
                <div className="text-4xl sm:text-5xl font-normal" style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE }}>
                  {stat}
                </div>
                <div className="text-xs text-white/40 tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 border-t border-white/10" style={{ backgroundColor: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl sm:text-7xl font-normal mb-12"
            style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE }}
          >
            THEY SAID IT
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-4">Students</p>
              <div className="flex flex-col gap-4">
                {studentTestimonials.slice(0, 2).map((t) => (
                  <div key={t.name} className="border-l-2 border-[#fda720] pl-5 py-2">
                    <p className="text-white/70 text-sm leading-relaxed mb-3">"{t.text}"</p>
                    <p className="text-xs" style={{ color: ORANGE }}>{t.name}</p>
                    <p className="text-white/30 text-xs">{t.program}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-4">Companies</p>
              <div className="flex flex-col gap-4">
                {companyTestimonials.map((t) => (
                  <div key={t.company} className="border-l-2 border-white/10 pl-5 py-2">
                    <p className="text-white/70 text-sm leading-relaxed mb-3">"{t.text}"</p>
                    <p className="text-white text-xs font-bold">{t.company}</p>
                    <p className="text-white/30 text-xs">{t.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl sm:text-7xl font-normal mb-12"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            PREVIOUS<br /><span style={{ color: ORANGE }}>EDITIONS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {previousEditions.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="relative group aspect-square overflow-hidden bg-[#0a0a0a]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-2xl font-normal text-white" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                    {img.year}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TABLE */}
      <section id="partnership" className="py-24 px-6 border-t border-white/10" style={{ backgroundColor: "#111" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">For Companies</p>
          <h2
            className="text-5xl sm:text-7xl font-normal mb-12"
            style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE }}
          >
            PARTNERSHIP<br />OPTIONS
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-white/30 text-xs tracking-widest font-normal uppercase border-b border-white/10">
                    Benefits
                  </th>
                  {["Silver", "Gold", "Diamond"].map((tier) => (
                    <th
                      key={tier}
                      className="py-4 px-4 text-center text-sm font-bold uppercase tracking-wider border-b border-white/10"
                      style={{
                        fontFamily: "var(--font-bebas-neue)",
                        fontSize: "1.2rem",
                        color: tier === "Diamond" ? ORANGE : tier === "Gold" ? "#f2b84c" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {partnershipBenefits.map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-white/5 hover:bg-white/3 transition-colors"
                  >
                    <td className={`py-4 px-4 text-xs uppercase tracking-wider ${row.feature === "Investment" ? "font-bold text-white" : "text-white/50"}`}>
                      {row.feature}
                    </td>
                    {(["silver", "gold", "diamond"] as const).map((tier) => {
                      const val = row[tier]
                      return (
                        <td key={tier} className="py-4 px-4 text-center">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="size-4 mx-auto" style={{ color: ORANGE }} />
                            ) : (
                              <span className="text-white/15">—</span>
                            )
                          ) : (
                            <span
                              className="font-bold"
                              style={{
                                color: tier === "diamond" ? ORANGE : tier === "gold" ? "#f2b84c" : "rgba(255,255,255,0.5)",
                              }}
                            >
                              {val}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/30 mt-6">
            * Startups receive special pricing. Contact us to learn more.
          </p>
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-3 mt-6 px-8 py-4 font-bold tracking-widest text-black hover:scale-105 transition-transform"
            style={{ backgroundColor: ORANGE, fontFamily: "var(--font-bebas-neue)", fontSize: "1.1rem" }}
          >
            SECURE YOUR SPOT <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl sm:text-7xl font-normal mb-12"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            THE <span style={{ color: ORANGE }}>TEAM</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div
                  className="size-20 mx-auto mb-3 flex items-center justify-center border-2 border-white/10 group-hover:border-[#fda720] transition-colors"
                  style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE, fontSize: "1.4rem" }}
                >
                  {member.initials}
                </div>
                <p className="text-xs font-bold text-white tracking-wide">{member.name}</p>
                <p className="text-xs text-white/30 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-3">
            <span className="text-white/20 text-xs tracking-widest">ORGANISED BY</span>
            <span
              className="text-white text-xl"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              BEST GRAZ
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10" style={{ backgroundColor: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl sm:text-7xl font-normal mb-12"
            style={{ fontFamily: "var(--font-bebas-neue)", color: ORANGE }}
          >
            GET IN<br />TOUCH
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-4 text-white/60 hover:text-white group transition-colors"
              >
                <Mail className="size-5 flex-shrink-0" style={{ color: ORANGE }} />
                <span className="text-sm">{socials.email}</span>
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white group transition-colors"
              >
                <InstagramIcon className="size-5 flex-shrink-0" style={{ color: ORANGE }} />
                <span className="text-sm">@bewanted.graz</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white group transition-colors"
              >
                <LinkedinIcon className="size-5 flex-shrink-0" style={{ color: ORANGE }} />
                <span className="text-sm">BEST Graz on LinkedIn</span>
              </a>
            </div>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Event Location</p>
                <p className="text-white font-bold" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.4rem" }}>
                  {EVENT.locationFull}
                </p>
                <p className="text-white/40 text-sm mt-1">Graz, Austria · {EVENT.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <BeWantedLogo size="sm" />
          <p className="text-white/20 text-xs">
            © 2026 BEST Graz. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <Lightbox
        images={previousEditions}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  )
}
