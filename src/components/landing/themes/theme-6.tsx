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
const BG = "#060810"

function Orb({ size, color, top, left, animation, delay }: {
  size: number
  color: string
  top: string
  left: string
  animation: string
  delay: string
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size,
        top, left,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(40px)",
        animation: `${animation} ease-in-out infinite`,
        animationDelay: delay,
        opacity: 0.7,
      }}
    />
  )
}

function Glass({
  children,
  className = "",
  tint = false,
  style = {},
}: {
  children: React.ReactNode
  className?: string
  tint?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div
      className={className}
      style={{
        background: tint
          ? "rgba(253,167,32,0.06)"
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: "0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function Theme6() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: BG, fontFamily: "var(--font-josefin), sans-serif" }}
    >
      {/* AMBIENT ORBS — fixed so they follow scrolling */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Orb size={600} color="rgba(253,167,32,0.35)" top="0%" left="20%" animation="float-orb-1 18s" delay="0s" />
        <Orb size={500} color="rgba(242,184,76,0.25)" top="50%" left="65%" animation="float-orb-2 22s" delay="-7s" />
        <Orb size={400} color="rgba(253,167,32,0.2)" top="75%" left="5%" animation="float-orb-3 15s" delay="-3s" />
        <Orb size={350} color="rgba(253,200,80,0.15)" top="20%" left="75%" animation="float-orb-1 25s" delay="-12s" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4">
        <Glass
          className="flex items-center justify-between px-6 py-3 rounded-2xl"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div style={{ fontFamily: "var(--font-raleway)" }} className="text-xl font-black tracking-tight leading-none">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>be</span>
            <span style={{ color: O }}>WANTED</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-white/40">
            <a href="#about" className="hover:text-[#fda720] transition-colors">About</a>
            <a href="#partners" className="hover:text-[#fda720] transition-colors">Partners</a>
            <a href="#team" className="hover:text-[#fda720] transition-colors">Team</a>
            <a href="#contact" className="hover:text-[#fda720] transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/20 hidden sm:block">EN / DE</span>
            <a
              href="#partnership"
              className="text-xs font-semibold tracking-wider px-4 py-2 rounded-lg text-black"
              style={{ backgroundColor: O }}
            >
              Partner With Us
            </a>
          </div>
        </Glass>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(253,167,32,0.12)",
              border: "1px solid rgba(253,167,32,0.25)",
              color: O,
              animation: "fade-up 0.6s ease both",
            }}
          >
            <span className="size-1.5 rounded-full animate-pulse" style={{ backgroundColor: O }} />
            BEST Graz × TU Graz · {EVENT.dateShort}
          </div>

          <h1
            className="font-black leading-tight mb-6"
            style={{
              fontFamily: "var(--font-raleway)",
              fontSize: "clamp(4rem, 16vw, 12rem)",
              letterSpacing: "-0.03em",
              background: `linear-gradient(135deg, white 0%, rgba(255,255,255,0.7) 40%, ${O} 70%, #f2b84c 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fade-up 0.8s ease 0.2s both",
            }}
          >
            be<br />WANTED
          </h1>

          <p
            className="text-xl text-white/40 font-light mb-12 tracking-wider"
            style={{ fontFamily: "var(--font-josefin)", animation: "fade-up 0.7s ease 0.5s both" }}
          >
            {EVENT.taglineEn}
          </p>

          {/* Countdown */}
          <Glass
            className="inline-flex items-center gap-2 px-6 py-5 rounded-2xl mb-10"
            style={{ animation: "fade-up 0.7s ease 0.7s both" } as React.CSSProperties}
          >
            {[
              { val: "00", label: "Days" },
              { val: "00", label: "Hours" },
              { val: "00", label: "Min" },
              { val: "00", label: "Sec" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
                  <span
                    className="font-black leading-none tabular-nums text-white"
                    style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
                  >
                    {val}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 mt-1">{label}</span>
                </div>
                {i < 3 && <span className="text-white/20 font-light text-3xl -mt-5">:</span>}
              </div>
            ))}
          </Glass>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: "fade-up 0.7s ease 0.9s both" }}
          >
            <a
              href="#partnership"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-black tracking-wide hover:scale-105 transition-transform"
              style={{
                backgroundColor: O,
                boxShadow: `0 0 30px rgba(253,167,32,0.35), 0 4px 16px rgba(253,167,32,0.2)`,
              }}
            >
              Become a Partner <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Glass className="px-8 py-4 rounded-xl font-medium text-white/70 hover:text-white transition-colors cursor-pointer">
              <a href="#about">Learn More</a>
            </Glass>
          </div>

          <div className="flex items-center justify-center gap-8 mt-10 text-xs text-white/30">
            <span className="flex items-center gap-2">
              <Calendar className="size-3.5" style={{ color: O }} />
              {EVENT.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5" style={{ color: O }} />
              {EVENT.locationFull}
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: O }}>
            About beWANTED
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <h2
              className="font-black leading-tight"
              style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
            >
              The most personal<br />
              career event<br />
              <span style={{ color: O }}>in Graz.</span>
            </h2>
            <div className="flex flex-col justify-center gap-4 text-white/50 leading-relaxed">
              <p>
                beWANTED is strictly capped at {EVENT.maxCompanies} companies — so every student walks away with real conversations, not just business cards.
              </p>
              <p>
                Organised by BEST Graz × TU Graz. In its 5th edition, bigger and better than ever.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: `${EVENT.maxCompanies}`, label: "Partner Companies", glow: true },
              { stat: "900+", label: "Students", glow: false },
              { stat: "5th", label: "Annual Edition", glow: false },
              { stat: "100%", label: "TU Graz", glow: false },
            ].map(({ stat, label, glow }) => (
              <Glass key={label} className="flex flex-col items-center justify-center py-8 px-4 rounded-2xl text-center" tint={glow}>
                <span
                  className="font-black text-4xl leading-none"
                  style={{
                    fontFamily: "var(--font-raleway)",
                    color: glow ? O : "white",
                    textShadow: glow ? `0 0 20px rgba(253,167,32,0.6)` : "none",
                  }}
                >
                  {stat}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/30 mt-2">{label}</span>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <h2
              className="font-black leading-tight"
              style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
            >
              This Year's<br /><span style={{ color: O }}>Partners</span>
            </h2>
            <Glass className="px-5 py-4 rounded-xl">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Capacity</p>
              <p
                className="font-black text-2xl mt-0.5"
                style={{ fontFamily: "var(--font-raleway)", color: O }}
              >
                {partners.length}<span className="text-white/20">/{EVENT.maxCompanies}</span>
              </p>
            </Glass>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((p) => (
              <Glass
                key={p.name}
                className="flex flex-col items-center justify-center py-7 px-3 rounded-xl text-center hover:scale-[1.02] transition-transform cursor-default"
                tint={p.tier === "diamond"}
              >
                <span
                  className="font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-raleway)",
                    color: p.tier === "diamond" ? O : "rgba(255,255,255,0.6)",
                    textShadow: p.tier === "diamond" ? `0 0 12px rgba(253,167,32,0.5)` : "none",
                  }}
                >
                  {p.name}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-widest text-white/20 mt-1.5">{p.tier}</span>
              </Glass>
            ))}
            {Array.from({ length: EVENT.maxCompanies - partners.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center py-7 rounded-xl border border-dashed text-white/10 text-[10px] font-semibold uppercase tracking-widest"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                Open
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
          >
            What people<br /><span style={{ color: O }}>are saying</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 mb-4">Students</p>
              <div className="flex flex-col gap-4">
                {studentTestimonials.slice(0, 2).map((t) => (
                  <Glass key={t.name} className="p-6 rounded-2xl" tint>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">"{t.text}"</p>
                    <p className="font-semibold text-xs" style={{ fontFamily: "var(--font-raleway)", color: O }}>{t.name}</p>
                    <p className="text-white/30 text-xs mt-0.5">{t.program}</p>
                  </Glass>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 mb-4">Partner Companies</p>
              <div className="flex flex-col gap-4">
                {companyTestimonials.map((t) => (
                  <Glass key={t.company} className="p-6 rounded-2xl">
                    <p className="text-white/70 text-sm leading-relaxed mb-4">"{t.text}"</p>
                    <p className="font-semibold text-xs text-white" style={{ fontFamily: "var(--font-raleway)" }}>{t.company}</p>
                    <p className="text-white/30 text-xs mt-0.5">{t.contact}</p>
                  </Glass>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      <section className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
          >
            Previous<br /><span style={{ color: O }}>Editions</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previousEditions.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to top, rgba(253,167,32,0.5) 0%, transparent 60%)` }}
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-left">
                  <p className="font-black text-3xl text-white leading-none" style={{ fontFamily: "var(--font-raleway)" }}>
                    {img.year}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TABLE */}
      <section id="partnership" className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] mb-4" style={{ color: O }}>For Companies</p>
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
          >
            Partnership<br /><span style={{ color: O }}>Options</span>
          </h2>
          <Glass className="overflow-hidden rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <th className="text-left py-5 px-6 text-white/25 text-xs font-semibold uppercase tracking-widest">Benefits</th>
                    {["Silver", "Gold", "Diamond"].map((tier) => (
                      <th
                        key={tier}
                        className="py-5 px-6 text-center font-black text-base"
                        style={{
                          fontFamily: "var(--font-raleway)",
                          color: tier === "Diamond" ? O : tier === "Gold" ? "#f2b84c" : "rgba(255,255,255,0.35)",
                          textShadow: tier === "Diamond" ? `0 0 12px rgba(253,167,32,0.5)` : "none",
                        }}
                      >
                        {tier}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {partnershipBenefits.map((row) => (
                    <tr
                      key={row.feature}
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <td className={`py-4 px-6 text-sm ${row.feature === "Investment" ? "font-semibold text-white" : "text-white/40"}`}>
                        {row.feature}
                      </td>
                      {(["silver", "gold", "diamond"] as const).map((tier) => {
                        const val = row[tier]
                        return (
                          <td key={tier} className="py-4 px-6 text-center">
                            {typeof val === "boolean" ? (
                              val ? <Check className="size-4 mx-auto" style={{ color: O }} />
                                : <span className="text-white/15">—</span>
                            ) : (
                              <span
                                className="font-bold"
                                style={{
                                  fontFamily: "var(--font-raleway)",
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
          </Glass>
          <p className="text-xs text-white/25 mt-5">* Startups receive special pricing — reach out to learn more.</p>
          <a
            href={`mailto:${socials.email}`}
            className="group inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-xl font-semibold text-black hover:scale-105 transition-transform"
            style={{
              backgroundColor: O,
              boxShadow: `0 0 30px rgba(253,167,32,0.3), 0 4px 16px rgba(253,167,32,0.2)`,
            }}
          >
            Secure Your Spot <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
          >
            Meet the<br /><span style={{ color: O }}>Team</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <Glass key={member.name} className="flex flex-col items-center py-6 px-3 rounded-2xl text-center" tint={i === 0}>
                <div
                  className="size-14 rounded-full flex items-center justify-center font-black text-base mb-3"
                  style={{
                    fontFamily: "var(--font-raleway)",
                    background: i === 0 ? O : "rgba(255,255,255,0.08)",
                    color: i === 0 ? BG : O,
                    boxShadow: i === 0 ? `0 0 20px rgba(253,167,32,0.4)` : "none",
                  }}
                >
                  {member.initials}
                </div>
                <p className="font-semibold text-xs text-white leading-tight" style={{ fontFamily: "var(--font-raleway)" }}>
                  {member.name}
                </p>
                <p className="text-[10px] text-white/30 mt-0.5">{member.role}</p>
              </Glass>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/20">Organised by BEST Graz × TU Graz</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
              >
                Let's talk<br /><span style={{ color: O }}>partnership.</span>
              </h2>
              <p className="text-white/40 leading-relaxed">
                Whether you're a large corporation or an ambitious startup, we'd love to welcome you to beWANTED 2026.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail className="size-5" />, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
                { icon: <InstagramIcon className="size-5" />, label: "Instagram", value: "@bewanted.graz", href: socials.instagram },
                { icon: <LinkedinIcon className="size-5" />, label: "LinkedIn", value: "BEST Graz", href: socials.linkedin },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <Glass className="flex items-center gap-4 px-5 py-4 rounded-xl hover:scale-[1.02] transition-transform" tint>
                    <div
                      className="size-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(253,167,32,0.2)", color: O }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">{label}</p>
                      <p className="text-sm font-medium text-white group-hover:text-[#fda720] transition-colors">{value}</p>
                    </div>
                  </Glass>
                </a>
              ))}
              <Glass className="px-5 py-4 rounded-xl mt-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">Location</p>
                <p className="text-sm font-medium text-white">{EVENT.locationFull}</p>
                <p className="text-xs text-white/30 mt-0.5">{EVENT.date}</p>
              </Glass>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 md:px-16 py-8">
        <Glass className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl">
          <div
            className="font-black text-xl"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            <span style={{ color: "rgba(255,255,255,0.3)" }}>be</span>
            <span style={{ color: O }}>WANTED</span>
          </div>
          <p className="text-white/20 text-xs">© 2026 BEST Graz. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/25">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
        </Glass>
      </footer>

      <Lightbox images={previousEditions} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  )
}
