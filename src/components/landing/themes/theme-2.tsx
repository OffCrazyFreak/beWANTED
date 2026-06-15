"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Check, ArrowRight, MapPin, Calendar, Quote } from "lucide-react"
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
const CREAM = "#faf8f4"
const INK = "#1a1206"

function BeWantedLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div style={{ fontFamily: "var(--font-playfair)" }} className="text-2xl italic font-bold leading-none">
      <span style={{ color: dark ? "rgba(255,255,255,0.5)" : "rgba(26,18,6,0.4)" }}>be</span>
      <span style={{ color: dark ? "#ffffff" : INK }}>Wanted</span>
    </div>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1 bg-black/10" />
      <span
        className="text-xs tracking-[0.25em] uppercase text-black/40"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {children}
      </span>
      <div className="h-px flex-1 bg-black/10" />
    </div>
  )
}

export function Theme2() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: CREAM,
        color: INK,
        fontFamily: "var(--font-dm-sans), sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4"
        style={{ backgroundColor: CREAM, borderBottom: "1px solid rgba(26,18,6,0.08)" }}
      >
        <BeWantedLogo />
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-black/40">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#partners" className="hover:text-black transition-colors">Partners</a>
          <a href="#team" className="hover:text-black transition-colors">Team</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-black/30 hidden sm:block">EN / DE</span>
          <a
            href="#partnership"
            className="text-xs px-5 py-2.5 font-medium tracking-wider"
            style={{ backgroundColor: ORANGE, color: "white" }}
          >
            Partner with Us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: ORANGE, fontFamily: "var(--font-dm-sans)" }}
              >
                BEST Graz × TU Graz · Est. 2019
              </p>
              <h1
                className="leading-none mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(3.5rem, 9vw, 7rem)",
                  color: INK,
                }}
              >
                The Career<br />Event That<br />
                <em style={{ color: ORANGE }}>Matters.</em>
              </h1>
              <p className="text-lg text-black/50 mb-10 leading-relaxed max-w-md" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Intimate. Personal. Meaningful. beWANTED brings Graz's finest engineering students face-to-face with the companies that want them.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="flex items-center gap-2 text-sm text-black/50">
                  <Calendar className="size-4" style={{ color: ORANGE }} />
                  {EVENT.date}
                </div>
                <div className="h-4 w-px bg-black/15" />
                <div className="flex items-center gap-2 text-sm text-black/50">
                  <MapPin className="size-4" style={{ color: ORANGE }} />
                  {EVENT.locationFull}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#partnership"
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white tracking-wide"
                  style={{ backgroundColor: ORANGE }}
                >
                  Become a Partner <ArrowRight className="size-4" />
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium border text-black/60 hover:text-black transition-colors"
                  style={{ borderColor: "rgba(26,18,6,0.2)" }}
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-square rounded-full absolute -right-12 -top-12 opacity-[0.07]"
                style={{ backgroundColor: ORANGE, width: "120%", height: "120%" }}
              />
              <div className="relative grid grid-cols-2 gap-6">
                {[
                  { val: "00", label: "Days" },
                  { val: "00", label: "Hours" },
                  { val: "00", label: "Minutes" },
                  { val: "00", label: "Seconds" },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center py-8 px-4"
                    style={{ backgroundColor: "white", boxShadow: "0 2px 24px rgba(253,167,32,0.08)" }}
                  >
                    <span
                      className="text-5xl font-bold"
                      style={{ fontFamily: "var(--font-playfair)", color: ORANGE }}
                    >
                      {val}
                    </span>
                    <span className="text-xs tracking-widest uppercase text-black/30 mt-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 px-6 md:px-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>This Year's Partners</SectionLabel>
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight flex-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Companies<br /><em style={{ color: ORANGE }}>Joining Us</em>
            </h2>
            <div className="flex-1 max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-2 rounded-full flex-1 bg-black/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ backgroundColor: ORANGE, width: `${(partners.length / EVENT.maxCompanies) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-black/60">{partners.length}/{EVENT.maxCompanies}</span>
              </div>
              <p className="text-xs text-black/40">Spots filled — limited to {EVENT.maxCompanies} companies total</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center py-8 px-4 border text-center group hover:border-[#fda720]/50 transition-all"
                style={{
                  borderColor: "rgba(26,18,6,0.08)",
                  borderTopWidth: p.tier === "diamond" ? "2px" : "1px",
                  borderTopColor: p.tier === "diamond" ? ORANGE : p.tier === "gold" ? "#f2b84c" : "rgba(26,18,6,0.08)",
                }}
              >
                <span
                  className="font-semibold text-sm text-black/70 group-hover:text-black transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.name}
                </span>
                <span
                  className="text-[10px] tracking-widest uppercase mt-1"
                  style={{
                    color:
                      p.tier === "diamond" ? ORANGE : p.tier === "gold" ? "#d4a017" : "rgba(26,18,6,0.3)",
                  }}
                >
                  {p.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>About beWANTED</SectionLabel>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Where engineering<br />talent meets<br /><em style={{ color: ORANGE }}>real opportunity.</em>
              </h2>
              <div className="space-y-4 text-black/60 leading-relaxed">
                <p>
                  beWANTED is Graz's premier engineering career event, created by BEST Graz in partnership with Technische Universität Graz. We believe the best professional connections happen through real conversations, not elevator pitches.
                </p>
                <p>
                  By strictly limiting participation to {EVENT.maxCompanies} companies, we ensure that every student gets quality time with the partners they care about — and every company leaves with candidates they genuinely want to hire.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { stat: `≤${EVENT.maxCompanies}`, label: "Partner Companies", desc: "Strictly limited for quality" },
                { stat: "900+", label: "Students Attended", desc: "TU Graz engineering students" },
                { stat: "5th", label: "Annual Edition", desc: "Growing stronger each year" },
              ].map(({ stat, label, desc }) => (
                <div key={label} className="border-l-4 pl-5" style={{ borderColor: ORANGE }}>
                  <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: ORANGE }}>
                    {stat}
                  </div>
                  <div className="font-semibold text-sm text-black">{label}</div>
                  <div className="text-xs text-black/40 mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What they say
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs tracking-widest uppercase text-black/30 mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                From Students
              </h3>
              <div className="flex flex-col gap-6">
                {studentTestimonials.slice(0, 2).map((t) => (
                  <div key={t.name} className="relative p-6" style={{ backgroundColor: CREAM }}>
                    <Quote className="absolute top-4 right-4 size-8 opacity-10" style={{ color: ORANGE }} />
                    <p className="text-black/70 leading-relaxed text-sm mb-4 italic" style={{ fontFamily: "var(--font-playfair)" }}>
                      "{t.text}"
                    </p>
                    <p className="font-semibold text-sm text-black">{t.name}</p>
                    <p className="text-xs text-black/40">{t.program}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-black/30 mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                From Partners
              </h3>
              <div className="flex flex-col gap-6">
                {companyTestimonials.map((t) => (
                  <div key={t.company} className="relative p-6 border" style={{ borderColor: "rgba(26,18,6,0.08)" }}>
                    <Quote className="absolute top-4 right-4 size-8 opacity-10" style={{ color: ORANGE }} />
                    <p className="text-black/70 leading-relaxed text-sm mb-4 italic" style={{ fontFamily: "var(--font-playfair)" }}>
                      "{t.text}"
                    </p>
                    <p className="font-bold text-sm" style={{ color: ORANGE }}>{t.company}</p>
                    <p className="text-xs text-black/40">{t.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Our History</SectionLabel>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Previous Editions
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {previousEditions.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left">
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {img.year}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TABLE */}
      <section id="partnership" className="py-20 px-6 md:px-16" style={{ backgroundColor: INK }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>For Companies</SectionLabel>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-12 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Partnership<br />
            <em style={{ color: ORANGE }}>Options</em>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-4 px-4 text-white/30 text-xs tracking-widest font-normal uppercase">Benefits</th>
                  {["Silver", "Gold", "Diamond"].map((tier) => (
                    <th
                      key={tier}
                      className="py-4 px-4 text-center font-bold text-base"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: tier === "Diamond" ? ORANGE : tier === "Gold" ? "#f2b84c" : "rgba(255,255,255,0.5)",
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
                    className="transition-colors"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <td className={`py-4 px-4 text-sm ${row.feature === "Investment" ? "font-bold text-white" : "text-white/50"}`}>
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
                              className="font-bold text-base"
                              style={{
                                fontFamily: "var(--font-playfair)",
                                color: tier === "diamond" ? ORANGE : tier === "gold" ? "#f2b84c" : "rgba(255,255,255,0.4)",
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
          <p className="text-xs text-white/30 mt-6 italic" style={{ fontFamily: "var(--font-playfair)" }}>
            * Startups receive special discounted rates — reach out to discuss your situation.
          </p>
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 font-semibold text-white tracking-wide hover:opacity-90 transition-opacity"
            style={{ backgroundColor: ORANGE, fontFamily: "var(--font-dm-sans)" }}
          >
            Secure Your Spot <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>The Organising Committee</SectionLabel>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div
                  className="size-20 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: ORANGE, fontFamily: "var(--font-playfair)" }}
                >
                  {member.initials}
                </div>
                <p className="font-semibold text-sm text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {member.name}
                </p>
                <p className="text-xs text-black/40 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: "rgba(26,18,6,0.08)" }}>
            <p className="text-xs text-black/30 tracking-widest uppercase">Organised by</p>
            <p className="text-2xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
              BEST Graz
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Get in Touch</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Let's talk<br /><em style={{ color: ORANGE }}>partnership.</em>
              </h2>
              <p className="text-black/50 leading-relaxed">
                Whether you're a large corporation or an ambitious startup, we'd love to have you at beWANTED 2026. Reach out and let's find the right package for you.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <a href={`mailto:${socials.email}`} className="flex items-center gap-4 group">
                <div className="size-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ORANGE}20` }}>
                  <Mail className="size-5" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-xs text-black/30 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-medium text-black group-hover:underline">{socials.email}</p>
                </div>
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="size-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ORANGE}20` }}>
                  <InstagramIcon className="size-5" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-xs text-black/30 uppercase tracking-widest">Instagram</p>
                  <p className="text-sm font-medium text-black group-hover:underline">@bewanted.graz</p>
                </div>
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="size-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ORANGE}20` }}>
                  <LinkedinIcon className="size-5" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-xs text-black/30 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-sm font-medium text-black group-hover:underline">BEST Graz</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-8" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <BeWantedLogo dark />
          <p className="text-white/20 text-xs">© 2026 BEST Graz. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <Lightbox images={previousEditions} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  )
}
