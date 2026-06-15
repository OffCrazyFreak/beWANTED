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

const O = "#fda720"
const BG = "#080808"
const CREAM = "#f5f0e8"

function TickerStrip({ items, speed = 20, dir = 1 }: {
  items: string[]
  speed?: number
  dir?: 1 | -1
}) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-3 border-y border-white/10">
      <div
        className="flex gap-6 whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: dir === -1 ? "reverse" : "normal",
        }}
      >
        {[...doubled, ...doubled].map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 font-black uppercase tracking-[0.1em] text-sm"
            style={{
              fontFamily: "var(--font-big-shoulders)",
              color: i % 4 === 0 ? O : "rgba(255,255,255,0.3)",
              fontSize: "1rem",
            }}
          >
            {item}
            <span style={{ color: O }} className="mx-4">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function DiagonalSection({ children, flip = false }: {
  children: React.ReactNode
  flip?: boolean
}) {
  return (
    <div className="relative">
      <div
        className="absolute left-0 right-0 h-12 z-10"
        style={{
          top: flip ? "auto" : 0,
          bottom: flip ? 0 : "auto",
          background: flip
            ? `linear-gradient(to bottom right, ${BG} 50%, transparent 50%)`
            : `linear-gradient(to top left, ${BG} 50%, transparent 50%)`,
        }}
      />
      {children}
    </div>
  )
}

export function Theme4() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: BG, fontFamily: "var(--font-lora), serif" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ backgroundColor: "rgba(8,8,8,0.96)", borderBottom: `1px solid rgba(253,167,32,0.15)`, backdropFilter: "blur(8px)" }}
      >
        <div style={{ fontFamily: "var(--font-big-shoulders)" }} className="text-2xl font-black uppercase tracking-wide leading-none">
          <span className="text-white/30">be</span>
          <span style={{ color: O }}>WANTED</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-white/30 font-bold" style={{ fontFamily: "var(--font-big-shoulders)" }}>
          <a href="#about" className="hover:text-[#fda720] transition-colors">About</a>
          <a href="#partners" className="hover:text-[#fda720] transition-colors">Partners</a>
          <a href="#team" className="hover:text-[#fda720] transition-colors">Team</a>
          <a href="#contact" className="hover:text-[#fda720] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/20 hidden sm:block">EN / DE</span>
          <a
            href="#partnership"
            className="text-xs font-black uppercase tracking-[0.15em] px-5 py-2.5 text-black"
            style={{ backgroundColor: O, fontFamily: "var(--font-big-shoulders)" }}
          >
            PARTNER UP
          </a>
        </div>
      </nav>

      {/* HERO — kinetic typography */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Ambient noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl w-full">
          <p
            className="text-xs font-bold uppercase tracking-[0.5em] mb-8 text-white/30"
            style={{ fontFamily: "var(--font-big-shoulders)", animation: "fade-up 0.5s ease 0.1s both" }}
          >
            BEST Graz × TU Graz · {EVENT.dateShort}
          </p>

          <div style={{ fontFamily: "var(--font-big-shoulders)", lineHeight: 0.8 }}>
            <div
              className="font-black uppercase select-none"
              style={{
                fontSize: "clamp(3rem, 10vw, 7rem)",
                color: "rgba(255,255,255,0.12)",
                letterSpacing: "0.3em",
                animation: "slide-from-top 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both",
              }}
            >
              ─── be ───
            </div>

            <div
              className="font-black uppercase"
              style={{
                fontSize: "clamp(5.5rem, 22vw, 17rem)",
                color: O,
                letterSpacing: "-0.02em",
                animation: "slide-from-bottom 1s cubic-bezier(0.16,1,0.3,1) 0.4s both",
                textShadow: `0 0 60px rgba(253,167,32,0.2)`,
              }}
            >
              WANT
            </div>

            <div
              className="font-black uppercase"
              style={{
                fontSize: "clamp(5.5rem, 22vw, 17rem)",
                color: "white",
                letterSpacing: "-0.02em",
                animation: "slide-from-bottom 1s cubic-bezier(0.16,1,0.3,1) 0.55s both",
              }}
            >
              ED
            </div>
          </div>

          <p
            className="italic text-white/40 text-xl mt-6 mb-12"
            style={{ animation: "fade-up 0.7s ease 0.9s both" }}
          >
            {EVENT.taglineEn}
          </p>

          {/* Countdown */}
          <div
            className="flex items-end justify-center gap-2 sm:gap-4"
            style={{ animation: "fade-up 0.7s ease 1.1s both" }}
          >
            {[
              { val: "00", label: "Days" },
              { val: "00", label: "Hours" },
              { val: "00", label: "Min" },
              { val: "00", label: "Sec" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-end gap-2 sm:gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className="font-black leading-none tabular-nums"
                    style={{
                      fontFamily: "var(--font-big-shoulders)",
                      fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                      color: i === 0 ? O : "white",
                    }}
                  >
                    {val}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-1">
                    {label}
                  </span>
                </div>
                {i < 3 && (
                  <span
                    className="font-black pb-7 sm:pb-9 text-white/20"
                    style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(2rem, 6vw, 4rem)" }}
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            style={{ animation: "fade-up 0.7s ease 1.3s both" }}
          >
            <a
              href="#partnership"
              className="group flex items-center gap-3 px-10 py-4 font-black uppercase tracking-widest text-black hover:scale-105 transition-transform"
              style={{ backgroundColor: O, fontFamily: "var(--font-big-shoulders)", fontSize: "1.1rem" }}
            >
              BECOME A PARTNER <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-10 py-4 font-black uppercase tracking-widest text-white/40 border border-white/10 hover:border-white/40 hover:text-white transition-all"
              style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "1.1rem" }}
            >
              EXPLORE
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2" style={{ animation: "bounce-subtle 2s ease-in-out 2s infinite" }}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      <TickerStrip items={["beWANTED", "TU Graz", "November 25", "Das persönliche Karriere-Event", "18 companies"]} speed={25} />

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 md:px-16" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.4em] mb-6 italic"
              style={{ color: O, fontFamily: "var(--font-big-shoulders)" }}
            >
              — What is beWANTED?
            </p>
            <h2
              className="font-black uppercase leading-none mb-8 text-white"
              style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              WHERE THE<br />RIGHT TALENT<br />FINDS THE<br /><span style={{ color: O }}>RIGHT STAGE</span>
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-white/50 leading-relaxed mb-10">
              <p>
                beWANTED is the most personal engineering career event in Austria — strictly capped at {EVENT.maxCompanies} companies so every student gets genuine, unhurried conversations with decision-makers.
              </p>
              <p>
                No crowds. No badge scanners. Real connections between TU Graz engineering talent and the companies actively looking for them.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: `${EVENT.maxCompanies}`, label: "Max Companies" },
                { stat: "900+", label: "Students" },
                { stat: "5th", label: "Edition" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <span
                    className="font-black leading-none text-4xl sm:text-5xl"
                    style={{ fontFamily: "var(--font-big-shoulders)", color: O }}
                  >
                    {stat}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TickerStrip items={["Silver", "Gold", "Diamond", "First come, first served", "Limited spots"]} speed={30} dir={-1} />

      {/* PARTNERS */}
      <section id="partners" className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <h2
              className="font-black uppercase leading-none text-white"
              style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              THIS YEAR'S<br /><span style={{ color: O }}>PARTNERS</span>
            </h2>
            <div className="text-right">
              <span
                className="font-black text-4xl leading-none"
                style={{ fontFamily: "var(--font-big-shoulders)", color: O }}
              >
                {partners.length}
              </span>
              <span className="text-white/20 font-black text-4xl" style={{ fontFamily: "var(--font-big-shoulders)" }}>
                /{EVENT.maxCompanies}
              </span>
              <p className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Spots filled</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center py-8 px-3 text-center bg-[#080808] hover:bg-[#fda720]/10 transition-colors group cursor-default"
              >
                <span
                  className="font-black text-sm uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-big-shoulders)",
                    color: p.tier === "diamond" ? O : "rgba(255,255,255,0.5)",
                    fontSize: "1rem",
                  }}
                >
                  {p.name}
                </span>
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest mt-1">{p.tier}</span>
              </div>
            ))}
            {Array.from({ length: EVENT.maxCompanies - partners.length }).map((_, i) => (
              <div
                key={`e-${i}`}
                className="flex items-center justify-center py-8 bg-[#080808]"
                style={{ border: "1px dashed rgba(255,255,255,0.05)" }}
              >
                <span className="text-white/10 text-[10px] font-bold uppercase tracking-widest">open</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-16" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12"
            style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)", color: BG }}
          >
            REAL <span style={{ color: O }}>WORDS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-6" style={{ fontFamily: "var(--font-big-shoulders)" }}>
                Students
              </p>
              <div className="space-y-6">
                {studentTestimonials.slice(0, 2).map((t) => (
                  <div key={t.name} className="group border-l-4 pl-5 py-1 hover:border-[#fda720] transition-colors" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                    <p className="italic text-black/70 leading-relaxed text-base mb-3">
                      "{t.text}"
                    </p>
                    <p className="font-black text-sm uppercase tracking-wide text-black" style={{ fontFamily: "var(--font-big-shoulders)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-black/40">{t.program}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-6" style={{ fontFamily: "var(--font-big-shoulders)" }}>
                Companies
              </p>
              <div className="space-y-6">
                {companyTestimonials.map((t) => (
                  <div key={t.company} className="group border-l-4 pl-5 py-1 hover:border-[#fda720] transition-colors" style={{ borderColor: O }}>
                    <p className="italic text-black/70 leading-relaxed text-base mb-3">
                      "{t.text}"
                    </p>
                    <p className="font-black text-sm uppercase tracking-wide" style={{ fontFamily: "var(--font-big-shoulders)", color: O }}>
                      {t.company}
                    </p>
                    <p className="text-xs text-black/40">{t.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12 text-white"
            style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            PREVIOUS<br /><span style={{ color: O }}>EDITIONS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {previousEditions.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(to top, rgba(253,167,32,0.4) 0%, transparent 60%)` }}
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span
                    className="font-black text-white text-3xl leading-none"
                    style={{ fontFamily: "var(--font-big-shoulders)" }}
                  >
                    {img.year}
                  </span>
                  <p className="text-white/50 text-xs mt-0.5">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <TickerStrip items={["€ 1,500", "Silver", "€ 2,500", "Gold", "€ 4,000", "Diamond", "Become a Partner"]} speed={20} />

      {/* PARTNERSHIP TABLE */}
      <section id="partnership" className="py-28 px-6 md:px-16" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12 text-white"
            style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            PARTNER<br /><span style={{ color: O }}>PACKAGES</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-white/20 text-xs font-black uppercase tracking-widest border-b border-white/10" style={{ fontFamily: "var(--font-big-shoulders)" }}>
                    Benefits
                  </th>
                  {["Silver", "Gold", "Diamond"].map((tier) => (
                    <th
                      key={tier}
                      className="py-4 px-4 text-center font-black uppercase tracking-wider border-b border-white/10"
                      style={{
                        fontFamily: "var(--font-big-shoulders)",
                        fontSize: "1.3rem",
                        color: tier === "Diamond" ? O : tier === "Gold" ? "#f2b84c" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {partnershipBenefits.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className={`py-4 px-4 italic ${row.feature === "Investment" ? "font-bold text-white not-italic" : "text-white/40"}`}>
                      {row.feature}
                    </td>
                    {(["silver", "gold", "diamond"] as const).map((tier) => {
                      const val = row[tier]
                      return (
                        <td key={tier} className="py-4 px-4 text-center">
                          {typeof val === "boolean" ? (
                            val ? <Check className="size-4 mx-auto" style={{ color: O }} />
                              : <span className="text-white/10 font-bold">—</span>
                          ) : (
                            <span
                              className="font-black text-lg"
                              style={{
                                fontFamily: "var(--font-big-shoulders)",
                                color: tier === "diamond" ? O : tier === "gold" ? "#f2b84c" : "rgba(255,255,255,0.3)",
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
          <p className="italic text-white/25 text-sm mt-6">* Startups — reach out, we have special rates for you.</p>
          <a
            href={`mailto:${socials.email}`}
            className="group inline-flex items-center gap-3 mt-8 px-10 py-5 font-black uppercase tracking-widest text-black hover:scale-105 transition-transform"
            style={{ backgroundColor: O, fontFamily: "var(--font-big-shoulders)", fontSize: "1.1rem" }}
          >
            CLAIM YOUR SPOT <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12 text-white"
            style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            THE <span style={{ color: O }}>CREW</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="group text-center">
                <div
                  className="size-20 mx-auto mb-3 flex items-center justify-center font-black text-xl border group-hover:border-[#fda720] group-hover:bg-[#fda720]/10 transition-all"
                  style={{
                    fontFamily: "var(--font-big-shoulders)",
                    borderColor: i === 0 ? O : "rgba(255,255,255,0.15)",
                    color: i === 0 ? O : "rgba(255,255,255,0.5)",
                  }}
                >
                  {member.initials}
                </div>
                <p className="text-xs font-black uppercase tracking-wide text-white">{member.name}</p>
                <p className="text-[10px] text-white/30 mt-0.5 italic">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-3">
            <div className="w-6 h-0.5" style={{ backgroundColor: O }} />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/30" style={{ fontFamily: "var(--font-big-shoulders)" }}>
              Organised by BEST Graz
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 md:px-16" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12 text-white"
            style={{ fontFamily: "var(--font-big-shoulders)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            LET'S<br /><span style={{ color: O }}>CONNECT</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <Mail className="size-6" />, label: "Email Us", value: socials.email, href: `mailto:${socials.email}` },
              { icon: <InstagramIcon className="size-6" />, label: "Instagram", value: "@bewanted.graz", href: socials.instagram },
              { icon: <LinkedinIcon className="size-6" />, label: "LinkedIn", value: "BEST Graz", href: socials.linkedin },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-start p-7 border hover:border-[#fda720] hover:-translate-y-1 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div style={{ color: O }} className="mb-4">{icon}</div>
                <p className="text-xs font-black uppercase tracking-widest text-white/25 mb-1" style={{ fontFamily: "var(--font-big-shoulders)" }}>
                  {label}
                </p>
                <p className="font-medium italic text-white group-hover:text-[#fda720] transition-colors">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-6" style={{ borderTop: `2px solid ${O}` }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className="text-xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-big-shoulders)" }}
          >
            <span className="text-white/20">be</span>
            <span style={{ color: O }}>WANTED</span>
          </div>
          <p className="text-white/15 text-xs">© 2026 BEST Graz. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/20 italic">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <Lightbox images={previousEditions} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  )
}
