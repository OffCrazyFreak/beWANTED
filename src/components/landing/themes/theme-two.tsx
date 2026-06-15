"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Mail, Check, X as XIcon, ArrowRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/landing/social-icons";
import { Lightbox } from "@/components/landing/lightbox";
import { useInView } from "@/hooks/use-in-view";
import {
  partners,
  testimonials,
  team,
  partnershipTiers,
  partnershipFeatureLabels,
  galleryImages,
  eventInfo,
} from "@/lib/landing-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ThemeTwo() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div
      className="text-zinc-900 overflow-x-hidden"
      style={{ fontFamily: "var(--font-cormorant)", background: "#faf8f4" }}
    >

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f4]/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            be<span style={{ color: "#fda720" }}>WANTED</span>
          </span>
          <div className="hidden md:flex items-center gap-10 text-sm text-zinc-500">
            {["About", "Partners", "Pricing", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-zinc-900 transition-colors tracking-wide"
                style={{ fontFamily: "var(--font-manrope)", fontSize: "0.8rem" }}
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-[#fda720] transition-colors"
            style={{ fontFamily: "var(--font-manrope)", fontSize: "0.8rem" }}
          >
            Partner with us <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center pt-20 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 pt-16 md:pt-24">
            <p
              className="text-[#fda720] text-xs tracking-[0.35em] uppercase mb-8 animate-bw-fadeIn opacity-0"
              style={{ fontFamily: "var(--font-manrope)", animationFillMode: "forwards" }}
            >
              {eventInfo.edition} Edition · {eventInfo.organizer}
            </p>

            <h1
              className="text-[13vw] md:text-[8.5rem] leading-[0.9] font-bold mb-8 animate-bw-fadeInUp opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.1s", letterSpacing: "-0.02em" }}
            >
              be
              <br />
              <span
                className="italic"
                style={{
                  WebkitTextStroke: "2px #fda720",
                  color: "transparent",
                }}
              >
                WANTED
              </span>
            </h1>

            <div
              className="flex flex-wrap gap-6 text-sm text-zinc-500 items-center animate-bw-fadeIn opacity-0"
              style={{ fontFamily: "var(--font-manrope)", animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <span className="flex items-center gap-2">
                <Calendar size={13} style={{ color: "#fda720" }} />
                {eventInfo.date}
              </span>
              <span className="w-px h-4 bg-zinc-300" />
              <span className="flex items-center gap-2">
                <MapPin size={13} style={{ color: "#fda720" }} />
                {eventInfo.location} · {eventInfo.city}
              </span>
            </div>
          </div>

          <div className="md:col-span-4 animate-bw-fadeIn opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}>
            <div className="border border-zinc-200 p-6">
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
                Countdown
              </p>
              <div className="grid grid-cols-4 gap-2 mb-6">
                {["D", "H", "M", "S"].map((unit) => (
                  <div key={unit} className="text-center">
                    <div
                      className="text-3xl font-bold text-zinc-200"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      --
                    </div>
                    <div className="text-[9px] text-zinc-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-manrope)" }}>{unit}</div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="block text-center w-full py-3 text-sm font-semibold text-white transition-colors"
                style={{ background: "#fda720", fontFamily: "var(--font-manrope)" }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="mt-20 border-l-4 pl-8 max-w-2xl animate-bw-fadeIn opacity-0"
          style={{ borderColor: "#fda720", animationFillMode: "forwards", animationDelay: "0.6s" }}
        >
          <p className="text-2xl md:text-3xl font-light italic text-zinc-600 leading-relaxed">
            &ldquo;A one-of-a-kind, personal career event where students meet companies face to face.&rdquo;
          </p>
        </div>
      </section>

      {/* THIN DIVIDER */}
      <div className="h-px bg-zinc-200 max-w-7xl mx-auto" />

      {/* ABOUT */}
      <section id="about" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <Reveal className="md:col-span-2">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              The Concept
            </p>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Personal.
              <br />
              <span className="italic font-light">Curated.</span>
              <br />
              Meaningful.
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              beWANTED is not a job fair. It&apos;s a carefully curated meeting
              between ambition and opportunity. Limited to{" "}
              <strong className="text-zinc-900">just 18 companies</strong>, the
              event ensures that every conversation matters, every CV gets read,
              and every student leaves with more than a brochure.
            </p>
          </Reveal>

          <Reveal delay={150} className="space-y-8">
            <div>
              <Image
                src="/previous-editions/past_event_2.webp"
                alt="beWANTED event"
                width={400}
                height={300}
                className="w-full object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {[
              { n: "18", label: "Partner companies" },
              { n: "500+", label: "Students last edition" },
              { n: "1:1", label: "Personal CV check format" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-4">
                <span className="text-3xl font-bold" style={{ color: "#fda720" }}>{s.n}</span>
                <span className="text-zinc-500 text-sm border-b border-zinc-200 pb-1 flex-1" style={{ fontFamily: "var(--font-manrope)" }}>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <div className="h-px bg-zinc-200 max-w-7xl mx-auto" />

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-8 max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            This Year&apos;s Partners
          </p>
          <h2 className="text-5xl font-bold">Our Partners</h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-zinc-200">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 40}>
              <div className="bg-[#faf8f4] p-8 text-center hover:bg-white transition-colors group cursor-default">
                <div className="text-zinc-700 font-semibold text-sm group-hover:text-zinc-900 transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>
                  {partner.name}
                </div>
                <div
                  className="text-[10px] mt-1 uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color:
                      partner.tier === "diamond" ? "#60B8D4" :
                      partner.tier === "gold" ? "#B8962E" : "#888",
                  }}
                >
                  {partner.tier}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-px bg-zinc-200 max-w-7xl mx-auto" />

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Voices
          </p>
          <h2 className="text-5xl font-bold">What They Say</h2>
        </Reveal>

        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className={`grid md:grid-cols-12 gap-8 items-start ${i % 2 !== 0 ? "direction-rtl" : ""}`}>
                <div className="md:col-span-1 flex justify-end">
                  <span
                    className="text-6xl leading-none"
                    style={{ color: "#fda720", fontFamily: "var(--font-cormorant)" }}
                  >
                    &ldquo;
                  </span>
                </div>
                <div className="md:col-span-9">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-700 italic mb-6">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-px h-8"
                      style={{ background: "#fda720" }}
                    />
                    <div>
                      <div className="font-semibold text-zinc-900" style={{ fontFamily: "var(--font-manrope)", fontSize: "0.9rem" }}>
                        {t.name}
                      </div>
                      <div className="text-zinc-500" style={{ fontFamily: "var(--font-manrope)", fontSize: "0.8rem" }}>
                        {t.role}{t.company ? ` · ${t.company}` : ""}
                      </div>
                    </div>
                    <span
                      className="ml-auto text-xs border px-2 py-0.5 uppercase tracking-widest"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        borderColor: t.type === "student" ? "#fda720" : "#f2b84c",
                        color: t.type === "student" ? "#fda720" : "#c49200",
                      }}
                    >
                      {t.type}
                    </span>
                  </div>
                </div>
              </div>
              {i < testimonials.length - 1 && <div className="h-px bg-zinc-200 mt-16" />}
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-px bg-zinc-200" />

      {/* PARTNERSHIP TABLE */}
      <section id="pricing" className="py-28 px-8 max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Partnership Options
          </p>
          <h2 className="text-5xl font-bold mb-4">Partner With Us</h2>
          <p className="text-zinc-500 text-lg font-light max-w-md mx-auto">
            Strictly limited to 18 companies. First-come, first-served.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-zinc-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-zinc-50 border-zinc-200">
                  <TableHead className="text-zinc-400 text-xs uppercase tracking-widest py-5 pl-6" style={{ fontFamily: "var(--font-manrope)" }}>Benefits</TableHead>
                  {partnershipTiers.map((tier) => (
                    <TableHead
                      key={tier.tier}
                      className="text-center py-5 font-bold text-base tracking-wide"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                    >
                      {tier.tier}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnershipFeatureLabels.map((feature, i) => (
                  <TableRow key={feature.key} className={`border-zinc-100 ${i % 2 === 0 ? "" : "bg-zinc-50/50"}`}>
                    <TableCell className="text-zinc-600 text-sm py-4 pl-6" style={{ fontFamily: "var(--font-manrope)" }}>{feature.label}</TableCell>
                    {partnershipTiers.map((tier) => (
                      <TableCell key={tier.tier} className="text-center py-4">
                        {tier.features[feature.key] ? (
                          <Check size={16} className="inline-block" style={{ color: "#fda720" }} />
                        ) : (
                          <XIcon size={14} className="inline-block text-zinc-300" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow className="bg-[#faf3e8] border-zinc-200">
                  <TableCell className="text-zinc-700 text-sm py-5 pl-6 font-semibold" style={{ fontFamily: "var(--font-manrope)" }}>Investment</TableCell>
                  {partnershipTiers.map((tier) => (
                    <TableCell
                      key={tier.tier}
                      className="text-center py-5 text-lg font-bold"
                      style={{ fontFamily: "var(--font-cormorant)", color: "#8B6914" }}
                    >
                      {tier.investment}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-center text-zinc-400 text-sm mt-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Startup discount available —{" "}
            <a href="#contact" style={{ color: "#fda720" }} className="hover:underline">reach out</a> for details
          </p>
        </Reveal>
      </section>

      <div className="h-px bg-zinc-200" />

      {/* GALLERY */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Through the Years
          </p>
          <h2 className="text-5xl font-bold">Previous Editions</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <button
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden block w-full aspect-[16/9]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-[#fda720]/0 group-hover:bg-[#fda720]/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-manrope)" }}>
                    Edition {img.year} →
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-px bg-zinc-200" />

      {/* TEAM */}
      <section id="team" className="py-28 px-8 max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            The Organising Team
          </p>
          <h2 className="text-5xl font-bold">Our Team</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 50}>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-lg font-bold border-2 border-[#fda720]"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#fda720" }}
                >
                  {member.initials}
                </div>
                <div className="font-semibold text-zinc-800 text-sm leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>{member.name}</div>
                <div className="text-zinc-400 text-xs mt-1" style={{ fontFamily: "var(--font-manrope)" }}>{member.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-px bg-zinc-200" />

      {/* CONTACT */}
      <section id="contact" className="py-28 px-8 max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
            Contact
          </p>
          <h2 className="text-6xl md:text-8xl font-bold mb-10">
            Let&apos;s Talk
          </h2>
          <p className="text-xl text-zinc-500 font-light mb-12 max-w-md mx-auto">
            Ready to become a partner? Have questions? Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:bewanted@bestgraz.org"
            className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: "#fda720", fontFamily: "var(--font-manrope)" }}
          >
            <Mail size={16} />
            bewanted@bestgraz.org
          </a>
          <div className="flex items-center justify-center gap-8 mt-10">
            <a href="https://www.instagram.com/bewanted.graz/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/company/bestgraz/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold italic text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            be<span style={{ color: "#fda720" }}>WANTED</span>
          </span>
          <p className="text-zinc-400 text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
            © {new Date().getFullYear()} beWANTED by BEST Graz. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-zinc-400" style={{ fontFamily: "var(--font-manrope)" }}>
            <a href="/privacy" className="hover:text-zinc-700 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-zinc-700 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

      <Lightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
