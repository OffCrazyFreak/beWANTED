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
const INK = "#0f0f0f"

function Divider() {
  return <div className="w-12 h-px my-6" style={{ backgroundColor: ORANGE }} />
}

export function Theme5() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div
      className="min-h-screen bg-white text-[#0f0f0f]"
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-white/95 backdrop-blur-sm" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl font-bold italic tracking-tight">
          <span style={{ color: "rgba(0,0,0,0.3)" }}>be</span>
          <span style={{ color: INK }}>Wanted</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase text-black/40 font-medium">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#partners" className="hover:text-black transition-colors">Partners</a>
          <a href="#team" className="hover:text-black transition-colors">Team</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-black/30 hidden sm:block font-medium">EN / DE</span>
          <a
            href="#partnership"
            className="text-xs font-semibold tracking-wider px-5 py-2.5 text-white"
            style={{ backgroundColor: ORANGE }}
          >
            Partner with us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase text-black/30 font-medium mb-8"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          BEST Graz × TU Graz
        </p>

        <h1
          className="leading-[0.9] font-bold mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4.5rem, 18vw, 14rem)",
            color: INK,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "rgba(0,0,0,0.15)" }}>be</span>
          <br />
          <span style={{ color: ORANGE }}>Wanted</span>
        </h1>

        <p
          className="text-xl sm:text-2xl font-light text-black/40 mb-12 tracking-wide"
          style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
        >
          Das persönliche Karriere-Event
        </p>

        <div className="flex items-center gap-6 sm:gap-10 mb-12">
          {[
            { val: "00", label: "Days" },
            { val: "00", label: "Hours" },
            { val: "00", label: "Minutes" },
            { val: "00", label: "Seconds" },
          ].map(({ val, label }, i) => (
            <div key={label} className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <span
                  className="font-bold leading-none"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: INK }}
                >
                  {val}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-black/30 mt-2">{label}</span>
              </div>
              {i < 3 && <span className="text-3xl sm:text-5xl text-black/10 -mt-5" style={{ fontFamily: "var(--font-cormorant)" }}>·</span>}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-black/40">
          <span className="flex items-center gap-2">
            <Calendar className="size-4" style={{ color: ORANGE }} />
            {EVENT.date}
          </span>
          <span className="size-1 rounded-full bg-black/20" />
          <span className="flex items-center gap-2">
            <MapPin className="size-4" style={{ color: ORANGE }} />
            {EVENT.locationFull}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#partnership"
            className="group flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white"
            style={{ backgroundColor: ORANGE }}
          >
            Become a Partner
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 text-sm font-medium border border-black/15 text-black/50 hover:text-black hover:border-black/30 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">About the Event</p>
          <Divider />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="leading-tight mb-8 font-bold"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: INK,
                }}
              >
                Where the right<br />talent meets the<br />
                <em style={{ color: ORANGE }}>right company.</em>
              </h2>
            </div>
            <div>
              <div className="space-y-4 text-black/55 leading-relaxed mb-10">
                <p>
                  beWANTED is Graz's most curated engineering career event, created by BEST Graz in partnership with TU Graz. We believe meaningful professional connections require time, space, and intention.
                </p>
                <p>
                  By strictly limiting our event to {EVENT.maxCompanies} companies, we guarantee real conversations — not crowd-surfing through a trade show floor.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { stat: `${EVENT.maxCompanies}`, label: "Partner Companies" },
                  { stat: "900+", label: "Students Attended" },
                  { stat: "5th", label: "Annual Edition" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <div
                      className="text-4xl font-bold leading-none"
                      style={{ fontFamily: "var(--font-cormorant)", color: ORANGE }}
                    >
                      {stat}
                    </div>
                    <div className="text-xs text-black/40 mt-2 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">2026 Edition</p>
          <Divider />
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
            <h2
              className="flex-1 leading-tight font-bold"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK }}
            >
              This Year's<br />
              <em style={{ color: ORANGE }}>Partners</em>
            </h2>
            <div className="flex-1 max-w-xs">
              <div className="flex justify-between text-xs text-black/40 mb-2">
                <span>Spots filled</span>
                <span>{partners.length} of {EVENT.maxCompanies}</span>
              </div>
              <div className="h-1 bg-black/08 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ backgroundColor: ORANGE, width: `${(partners.length / EVENT.maxCompanies) * 100}%` }}
                />
              </div>
              <p className="text-xs text-black/30 mt-2">Allocated first-come, first-served</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center py-8 px-4 text-center hover:bg-[#fafafa] transition-colors border border-black/06"
                style={{
                  borderTopWidth: "2px",
                  borderTopColor: p.tier === "diamond" ? ORANGE : p.tier === "gold" ? "#f2b84c" : "rgba(0,0,0,0.06)",
                }}
              >
                <span
                  className="font-semibold text-sm text-black/70"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
                >
                  {p.name}
                </span>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase mt-1.5"
                  style={{ color: p.tier === "diamond" ? ORANGE : p.tier === "gold" ? "#d4a017" : "rgba(0,0,0,0.25)" }}
                >
                  {p.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-16 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">Voices</p>
          <Divider />
          <h2
            className="leading-tight font-bold mb-12"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK }}
          >
            What they say
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-black/30 mb-6">From students</p>
              <div className="space-y-8">
                {studentTestimonials.slice(0, 2).map((t) => (
                  <div key={t.name}>
                    <p
                      className="text-lg leading-relaxed text-black/60 mb-4"
                      style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                    >
                      "{t.text}"
                    </p>
                    <p className="font-semibold text-sm text-black">{t.name}</p>
                    <p className="text-xs text-black/40">{t.program}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-black/30 mb-6">From partner companies</p>
              <div className="space-y-8">
                {companyTestimonials.map((t) => (
                  <div key={t.company}>
                    <p
                      className="text-lg leading-relaxed text-black/60 mb-4"
                      style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                    >
                      "{t.text}"
                    </p>
                    <p className="font-semibold text-sm" style={{ color: ORANGE }}>{t.company}</p>
                    <p className="text-xs text-black/40">{t.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">Our History</p>
          <Divider />
          <h2
            className="leading-tight font-bold mb-12"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK }}
          >
            Previous Editions
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {previousEditions.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden bg-[#fafafa]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: `${ORANGE}10` }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left">
                  <p
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {img.year}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TABLE */}
      <section id="partnership" className="py-24 px-6 md:px-16" style={{ backgroundColor: INK }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: `${ORANGE}80` }}>For Companies</p>
          <Divider />
          <h2
            className="leading-tight font-bold mb-12 text-white"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Partnership<br />
            <em style={{ color: ORANGE }}>Options</em>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th className="text-left py-4 px-4 text-white/25 text-xs tracking-[0.2em] font-normal uppercase">Benefits</th>
                  {["Silver", "Gold", "Diamond"].map((tier) => (
                    <th
                      key={tier}
                      className="py-4 px-4 text-center font-bold italic"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.2rem",
                        color: tier === "Diamond" ? ORANGE : tier === "Gold" ? "#f2b84c" : "rgba(255,255,255,0.4)",
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
                    <td className={`py-4 px-4 text-sm ${row.feature === "Investment" ? "font-semibold text-white" : "text-white/40"}`}>
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
                              className="font-semibold"
                              style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.1rem",
                                color: tier === "diamond" ? ORANGE : tier === "gold" ? "#f2b84c" : "rgba(255,255,255,0.35)",
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
          <p className="text-xs text-white/25 mt-6 italic" style={{ fontFamily: "var(--font-cormorant)" }}>
            * Startups are welcome — reach out to discuss a special rate.
          </p>
          <a
            href={`mailto:${socials.email}`}
            className="group inline-flex items-center gap-3 mt-8 px-8 py-4 font-semibold text-white"
            style={{ backgroundColor: ORANGE }}
          >
            Secure Your Spot
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 md:px-16 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">Organising Committee</p>
          <Divider />
          <h2
            className="leading-tight font-bold mb-12"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK }}
          >
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div
                  className="size-20 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: ORANGE, fontFamily: "var(--font-cormorant)" }}
                >
                  {member.initials}
                </div>
                <p
                  className="font-semibold text-sm text-black"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {member.name}
                </p>
                <p className="text-xs text-black/40 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-black/06 text-center">
            <p className="text-xs text-black/30 tracking-[0.3em] uppercase">Organised by</p>
            <p
              className="text-2xl font-bold mt-1 italic"
              style={{ fontFamily: "var(--font-cormorant)", color: INK }}
            >
              BEST Graz
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">Get in Touch</p>
          <Divider />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="leading-tight font-bold mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK }}
              >
                Let's talk<br />
                <em style={{ color: ORANGE }}>partnership.</em>
              </h2>
              <p className="text-black/50 leading-relaxed">
                Whether you're an established company or an ambitious startup, we'd love to welcome you to beWANTED 2026. Reach out, and let's find the right partnership for you.
              </p>
            </div>
            <div className="flex flex-col gap-6">
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
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="size-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${ORANGE}15` }}
                  >
                    <span style={{ color: ORANGE }}>{icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-black/30 uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-black group-hover:text-[#fda720] transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="pt-2 border-t border-black/06">
                <p className="text-xs text-black/30 mb-1">Location</p>
                <p className="font-medium text-sm text-black">{EVENT.locationFull}</p>
                <p className="text-xs text-black/40">{EVENT.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-8 border-t border-black/06">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className="text-xl font-bold italic"
            style={{ fontFamily: "var(--font-cormorant)", color: INK }}
          >
            <span style={{ color: "rgba(0,0,0,0.3)" }}>be</span>Wanted
          </div>
          <p className="text-black/25 text-xs">© 2026 BEST Graz. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-black/30">
            <a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-black transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <Lightbox images={previousEditions} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  )
}
