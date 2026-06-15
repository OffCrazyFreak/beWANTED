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
const BG = "#f2ede6"
const INK = "#111111"

function BauhausCircle({ size, top, left, opacity = 1, delay = "0s" }: {
  size: number; top: string; left: string; opacity?: number; delay?: string
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, top, left,
        border: `${size * 0.06}px solid ${O}`,
        opacity,
        animation: `spin-slow ${20 + size / 10}s linear infinite`,
        animationDelay: delay,
      }}
    />
  )
}

function BauhausRect({ width, height, top, left, filled = false, rotate = "0deg", delay = "0s" }: {
  width: number; height: number; top: string; left: string; filled?: boolean; rotate?: string; delay?: string
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width, height, top, left,
        backgroundColor: filled ? O : "transparent",
        border: filled ? "none" : `3px solid ${O}`,
        transform: `rotate(${rotate})`,
        animation: `spin-slow-reverse 30s linear infinite`,
        animationDelay: delay,
        opacity: 0.7,
      }}
    />
  )
}

function MarqueeBand({ text, dark = false }: { text: string; dark?: boolean }) {
  const repeated = Array(12).fill(text)
  return (
    <div
      className="overflow-hidden py-3 border-y"
      style={{
        backgroundColor: dark ? INK : O,
        borderColor: dark ? O : INK,
      }}
    >
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "marquee-scroll 18s linear infinite" }}
      >
        {[...repeated, ...repeated].map((t, i) => (
          <span
            key={i}
            className="text-sm font-bold uppercase tracking-[0.25em] flex-shrink-0"
            style={{ fontFamily: "var(--font-barlow)", color: dark ? O : INK }}
          >
            {t} <span className="opacity-40 mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Theme3() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: BG, color: INK, fontFamily: "var(--font-barlow), sans-serif" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ backgroundColor: BG, borderBottom: `3px solid ${INK}` }}
      >
        <div style={{ fontFamily: "var(--font-barlow)" }} className="text-2xl font-black uppercase tracking-tight leading-none">
          <span style={{ color: O }}>be</span>
          <span>WANTED</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          <a href="#about" className="hover:text-[#fda720] transition-colors">About</a>
          <a href="#partners" className="hover:text-[#fda720] transition-colors">Partners</a>
          <a href="#team" className="hover:text-[#fda720] transition-colors">Team</a>
          <a href="#contact" className="hover:text-[#fda720] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-black/30 hidden sm:block">EN / DE</span>
          <a
            href="#partnership"
            className="text-xs font-black tracking-widest px-4 py-2.5 uppercase text-white"
            style={{ backgroundColor: INK }}
          >
            PARTNER UP
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background geometry */}
        <BauhausCircle size={500} top="-10%" left="-8%" opacity={0.12} />
        <BauhausCircle size={300} top="60%" left="70%" opacity={0.15} delay="-5s" />
        <BauhausCircle size={180} top="20%" left="75%" opacity={0.2} delay="-10s" />
        <BauhausRect width={80} height={80} top="15%" left="55%" rotate="15deg" delay="-3s" />
        <BauhausRect width={120} height={40} top="70%" left="20%" filled rotate="-8deg" delay="-7s" />
        <BauhausRect width={50} height={50} top="35%" left="88%" rotate="30deg" delay="-12s" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div>
              <div
                className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-3 py-1.5 mb-8 border-2"
                style={{ borderColor: INK, animation: "fade-up 0.6s ease both" }}
              >
                BEST Graz × TU Graz · {EVENT.date}
              </div>

              <div style={{ fontFamily: "var(--font-barlow)" }}>
                <div
                  className="font-black uppercase leading-none"
                  style={{
                    fontSize: "clamp(1.2rem, 4vw, 2rem)",
                    color: O,
                    animation: "slide-from-left 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both",
                  }}
                >
                  be
                </div>
                <div
                  className="font-black uppercase leading-[0.85]"
                  style={{
                    fontSize: "clamp(5rem, 14vw, 10rem)",
                    color: INK,
                    animation: "slide-from-left 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both",
                  }}
                >
                  WAN
                  <br />
                  TED
                </div>
              </div>

              <p
                className="text-base font-medium text-black/50 mt-6 max-w-sm leading-relaxed"
                style={{ animation: "fade-up 0.7s ease 0.5s both" }}
              >
                {EVENT.taglineEn}. The most personal engineering career event in Graz.
              </p>

              <div
                className="flex gap-4 mt-8"
                style={{ animation: "fade-up 0.7s ease 0.7s both" }}
              >
                <a
                  href="#partnership"
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white hover:translate-x-1 transition-transform"
                  style={{ backgroundColor: O }}
                >
                  Become Partner <ArrowRight className="size-4" />
                </a>
                <a
                  href="#about"
                  className="flex items-center px-6 py-3.5 text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right column: countdown in Bauhaus grid */}
            <div
              className="relative"
              style={{ animation: "slide-from-right 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
            >
              <div
                className="absolute -inset-4 rounded-none"
                style={{ backgroundColor: O, opacity: 0.08 }}
              />
              <div className="relative grid grid-cols-2 gap-1 border-2 border-black p-1">
                {[
                  { val: "00", label: "Days" },
                  { val: "00", label: "Hours" },
                  { val: "00", label: "Minutes" },
                  { val: "00", label: "Seconds" },
                ].map(({ val, label }, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center py-10 border"
                    style={{
                      borderColor: INK,
                      backgroundColor: i % 2 === 0 ? "white" : BG,
                    }}
                  >
                    <span
                      className="font-black leading-none"
                      style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 8vw, 5rem)", color: i === 0 ? O : INK }}
                    >
                      {val}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mt-2">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-4 px-2 text-xs font-bold text-black/40 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" style={{ color: O }} /> {EVENT.dateShort}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" style={{ color: O }} /> {EVENT.locationFull}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: INK }} />
      </section>

      <MarqueeBand text="beWANTED 2026 — Das persönliche Karriere-Event" />

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 relative overflow-hidden">
        <BauhausCircle size={400} top="-20%" left="80%" opacity={0.08} delay="-8s" />
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-2 h-16 mt-1 flex-shrink-0" style={{ backgroundColor: O }} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 mb-1">What is beWANTED?</p>
              <h2
                className="font-black uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)", color: INK }}
              >
                Not just a<br /><span style={{ color: O }}>career fair</span>
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-black/60 text-base leading-relaxed space-y-4">
              <p>
                beWANTED is Graz's most curated engineering career event — capped at just {EVENT.maxCompanies} companies to guarantee every student gets genuine, focused conversations with people who can actually hire them.
              </p>
              <p>
                No booths. No badge-scanners. Real conversations between TU Graz's finest engineering students and the companies that are genuinely looking for talent.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { stat: `${EVENT.maxCompanies}`, label: "Max Companies" },
                { stat: "900+", label: "Students" },
                { stat: "5th", label: "Edition" },
                { stat: "100%", label: "TU Graz" },
              ].map(({ stat, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-6 border-2"
                  style={{ borderColor: i === 0 ? O : INK, backgroundColor: i === 0 ? O : "transparent" }}
                >
                  <span
                    className="font-black text-4xl leading-none"
                    style={{ fontFamily: "var(--font-barlow)", color: i === 0 ? INK : O }}
                  >
                    {stat}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-black/40 mt-1.5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MarqueeBand text="Limited to 18 companies — First come, first served" dark />

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <h2
              className="font-black uppercase leading-none"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              This Year's<br /><span style={{ color: O }}>Partners</span>
            </h2>
            <div className="border-2 border-black px-5 py-3 text-right">
              <p className="text-xs font-bold uppercase tracking-widest text-black/40">Spots</p>
              <p className="font-black text-3xl" style={{ fontFamily: "var(--font-barlow)", color: O }}>
                {partners.length}<span className="text-black/30">/{EVENT.maxCompanies}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 border-t-2 border-l-2 border-black">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center py-8 px-4 border-b-2 border-r-2 border-black text-center group hover:bg-[#fda720] transition-colors"
              >
                <span
                  className="font-black uppercase text-sm tracking-wide group-hover:text-black transition-colors"
                  style={{ fontFamily: "var(--font-barlow)", color: p.tier === "diamond" ? O : INK }}
                >
                  {p.name}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/25 mt-1">{p.tier}</span>
              </div>
            ))}
            {Array.from({ length: EVENT.maxCompanies - partners.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center py-8 border-b-2 border-r-2 border-dashed border-black/20"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/20">Open</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12 text-white"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            They <span style={{ color: O }}>Said It</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-1">
            {studentTestimonials.slice(0, 2).map((t, i) => (
              <div
                key={t.name}
                className="p-8 border"
                style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: i === 0 ? O : "transparent" }}
              >
                <p
                  className="text-lg font-medium leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-barlow)", color: i === 0 ? INK : "rgba(255,255,255,0.7)" }}
                >
                  "{t.text}"
                </p>
                <p className="font-black text-sm uppercase tracking-wide" style={{ color: i === 0 ? INK : O }}>
                  {t.name}
                </p>
                <p className="text-xs font-medium text-black/40 mt-0.5" style={{ color: i === 0 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3)" }}>
                  {t.program}
                </p>
              </div>
            ))}
            {companyTestimonials.map((t, i) => (
              <div
                key={t.company}
                className="p-8 border"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-lg font-medium leading-relaxed text-white/70 mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
                  "{t.text}"
                </p>
                <p className="font-black text-sm uppercase tracking-wide" style={{ color: O }}>
                  {t.company}
                </p>
                <p className="text-xs text-white/30 mt-0.5">{t.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Previous <span style={{ color: O }}>Editions</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-2 border-t-0 border-black">
            {previousEditions.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden border-t-2 border-black aspect-square"
              >
                <Image
                  src={img.src} alt={img.alt} fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-0 transition-opacity"
                  style={{ backgroundColor: BG, mixBlendMode: "multiply" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3" style={{ backgroundColor: "rgba(17,17,17,0.7)" }}>
                  <span className="font-black text-white text-xl uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
                    {img.year}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TABLE */}
      <section id="partnership" className="py-24 px-6 md:px-16 relative overflow-hidden" style={{ backgroundColor: O }}>
        <BauhausCircle size={600} top="-30%" left="60%" opacity={0.08} delay="-15s" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className="font-black uppercase leading-none mb-12"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)", color: INK }}
          >
            Partnership<br />Packages
          </h2>
          <div className="border-2 border-black overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: INK }}>
                  <th className="text-left py-4 px-5 text-[#fda720] text-xs font-black uppercase tracking-widest border-r border-white/10" style={{ fontFamily: "var(--font-barlow)" }}>
                    Benefits
                  </th>
                  {["Silver", "Gold", "Diamond"].map((tier) => (
                    <th
                      key={tier}
                      className="py-4 px-5 text-center font-black uppercase tracking-wider border-r border-white/10 last:border-r-0"
                      style={{ fontFamily: "var(--font-barlow)", fontSize: "1.1rem", color: tier === "Diamond" ? O : "rgba(255,255,255,0.6)" }}
                    >
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {partnershipBenefits.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className="border-t-2 border-black"
                    style={{ backgroundColor: idx % 2 === 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}
                  >
                    <td className={`py-4 px-5 text-sm font-bold uppercase tracking-wide border-r-2 border-black ${row.feature === "Investment" ? "text-black" : "text-black/60"}`} style={{ fontFamily: "var(--font-barlow)" }}>
                      {row.feature}
                    </td>
                    {(["silver", "gold", "diamond"] as const).map((tier) => {
                      const val = row[tier]
                      return (
                        <td key={tier} className="py-4 px-5 text-center border-r-2 border-black last:border-r-0">
                          {typeof val === "boolean" ? (
                            val ? <Check className="size-5 mx-auto" style={{ color: INK, strokeWidth: 3 }} />
                              : <span className="text-black/20 font-black">—</span>
                          ) : (
                            <span className="font-black text-sm" style={{ fontFamily: "var(--font-barlow)", fontSize: "1rem" }}>{val}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4">
            <p className="text-xs font-bold text-black/50 uppercase tracking-wider">
              * Startups — reach out for special pricing
            </p>
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center gap-2 px-8 py-4 font-black uppercase tracking-wider text-white hover:-translate-y-0.5 transition-transform"
              style={{ backgroundColor: INK, fontFamily: "var(--font-barlow)" }}
            >
              Claim Your Spot <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            The <span style={{ color: O }}>Team</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <div key={member.name} className="group text-center">
                <div
                  className="size-20 mx-auto mb-3 flex items-center justify-center font-black text-lg border-2 border-black group-hover:bg-[#fda720] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)", color: i === 0 ? O : INK }}
                >
                  {member.initials}
                </div>
                <p className="text-xs font-black uppercase tracking-wide">{member.name}</p>
                <p className="text-[10px] font-bold text-black/40 mt-0.5 uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-0.5 w-8" style={{ backgroundColor: O }} />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-black/40">Organised by BEST Graz</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-16" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-black uppercase leading-none mb-12 text-white"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Get in <span style={{ color: O }}>Touch</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-1">
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
                className="group flex items-center gap-4 p-6 border border-white/10 hover:bg-[#fda720] hover:border-[#fda720] transition-all"
              >
                <div className="size-10 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-black/20 transition-colors" style={{ color: O }}>
                  <span className="group-hover:text-black transition-colors">{icon}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-black/40 transition-colors">{label}</p>
                  <p className="text-sm font-bold text-white group-hover:text-black transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-[#fda720] px-6 md:px-16 py-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xl font-black uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
            <span style={{ color: O }}>be</span><span className="text-white">WANTED</span>
          </div>
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">© 2026 BEST Graz</p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-white/30">
            <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <Lightbox images={previousEditions} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  )
}
