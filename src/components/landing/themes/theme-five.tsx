"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Mail, Check, X as XIcon, ArrowUpRight } from "lucide-react";
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

function Emerge({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-900 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function PartnerTicker() {
  const doubled = [...partners, ...partners];
  return (
    <div className="overflow-hidden py-6 border-y border-white/5">
      <div className="flex animate-bw-ticker whitespace-nowrap">
        {doubled.map((p, i) => (
          <span
            key={`${p.name}-${i}`}
            className="inline-flex items-center gap-4 mx-8 text-sm font-semibold tracking-wider"
            style={{ fontFamily: "var(--font-unbounded)", color: i % 3 === 0 ? "#fda720" : "#3f3f3f" }}
          >
            {p.name}
            <span style={{ color: "#fda720", opacity: 0.3 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ThemeFive() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div
      className="bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-unbounded)" }}
    >

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <span
            className="text-sm font-bold tracking-tight"
            style={{ fontFamily: "var(--font-unbounded)" }}
          >
            <span className="gradient-text-orange">be</span>
            <span>WANTED</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Partners", "Pricing", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-500 hover:text-white text-xs tracking-wider transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs text-[#fda720] hover:text-white transition-colors tracking-wider group"
          >
            Partner
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(253,167,32,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div
            className="text-[#fda720] text-[10px] tracking-[0.5em] uppercase mb-10 animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", fontFamily: "var(--font-manrope)" }}
          >
            {eventInfo.organizer} · {eventInfo.edition} Edition · {eventInfo.date}
          </div>

          {/* Giant headline letter by letter feel */}
          <h1
            className="font-extrabold leading-none mb-8 animate-bw-fadeInUp opacity-0"
            style={{
              animationFillMode: "forwards",
              animationDelay: "0.1s",
              fontSize: "clamp(3.5rem, 15vw, 11rem)",
              letterSpacing: "-0.04em",
            }}
          >
            <span className="gradient-text-orange animate-bw-gradientShift" style={{ backgroundSize: "200% auto" }}>be</span>
            <span className="text-white">WANTED</span>
          </h1>

          <p
            className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto mb-12 leading-loose animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s", fontFamily: "var(--font-manrope)" }}
          >
            A one-of-a-kind personal career event at TU Graz.
            18 companies. Unlimited potential.
          </p>

          {/* Countdown — cinematic style */}
          <div
            className="flex items-center justify-center gap-2 md:gap-4 mb-12 animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
              <div key={unit} className="flex items-center">
                <div className="text-center px-3 md:px-5 py-3 md:py-5 border border-white/8 hover:border-[#fda720]/30 transition-colors">
                  <div
                    className="text-2xl md:text-4xl font-extrabold gradient-text-orange leading-none"
                    style={{ minWidth: "2ch" }}
                  >
                    --
                  </div>
                  <div
                    className="text-[9px] text-zinc-600 mt-1 tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {unit}
                  </div>
                </div>
                {i < 3 && <span className="text-zinc-800 mx-1">:</span>}
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.55s" }}
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-[#fda720] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300"
            >
              Register as Student
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>

        {/* Location strip */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 text-xs text-zinc-700" style={{ fontFamily: "var(--font-manrope)" }}>
          <span className="flex items-center gap-1.5"><Calendar size={11} /> {eventInfo.date}</span>
          <span className="w-px h-3 bg-white/10" />
          <span className="flex items-center gap-1.5"><MapPin size={11} /> {eventInfo.location}</span>
        </div>
      </section>

      {/* PARTNER TICKER */}
      <PartnerTicker />

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <Emerge>
            <span
              className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-8"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              The Concept
            </span>
            <h2
              className="font-extrabold leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Not a fair.
              <br />
              A{" "}
              <span className="gradient-text-orange">conversation.</span>
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              beWANTED is strictly limited to{" "}
              <span className="text-white">18 companies</span>. No mass
              applications, no crowded halls. Just direct, personal CV
              feedback from HR professionals who are invested in you.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Organized by BEST Graz, the event takes place annually
              at TU Graz in November. Students leave with feedback,
              companies leave with candidates worth remembering.
            </p>
          </Emerge>

          <Emerge delay={150}>
            <div className="relative">
              <div
                className="absolute -inset-4 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(253,167,32,0.08) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <Image
                src="/previous-editions/past_event_1.webp"
                alt="beWANTED event"
                width={600}
                height={400}
                className="relative w-full object-cover"
                style={{ filter: "brightness(0.85) contrast(1.05)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
              />
            </div>
          </Emerge>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-around gap-12">
          {[
            { value: "18", label: "Max Partner Companies" },
            { value: "500+", label: "Students per Edition" },
            { value: "1:1", label: "Personal CV Check Format" },
          ].map((s, i) => (
            <Emerge key={s.label} delay={i * 80} className="text-center">
              <div
                className="gradient-text-orange font-extrabold mb-1"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
              >
                {s.value}
              </div>
              <div className="text-zinc-600 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
                {s.label}
              </div>
            </Emerge>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-28 px-8 max-w-7xl mx-auto">
        <Emerge className="mb-14">
          <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            This Year&apos;s Partners
          </span>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Our Partners
          </h2>
        </Emerge>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/5">
          {partners.map((partner, i) => (
            <Emerge key={partner.name} delay={i * 40}>
              <div className="bg-black p-7 text-center hover:bg-zinc-950 transition-colors group cursor-default">
                <div className="text-zinc-400 font-bold text-sm group-hover:text-white transition-colors">
                  {partner.name}
                </div>
                <div
                  className="text-[10px] mt-1 tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color:
                      partner.tier === "diamond" ? "#B9F2FF" :
                      partner.tier === "gold" ? "#FFD700" : "#C0C0C0",
                  }}
                >
                  {partner.tier}
                </div>
              </div>
            </Emerge>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <Emerge className="mb-14">
            <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Testimonials
            </span>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Heard From The<br />
              <span className="gradient-text-orange">People</span>
            </h2>
          </Emerge>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Emerge key={t.name} delay={i * 60}>
                <div
                  className="p-8 relative group"
                  style={{
                    background: "linear-gradient(135deg, rgba(253,167,32,0.04), transparent)",
                    border: "1px solid rgba(253,167,32,0.12)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                      style={{ background: "rgba(253,167,32,0.15)", color: "#fda720" }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold">{t.name}</div>
                      <div className="text-zinc-600 text-[10px]" style={{ fontFamily: "var(--font-manrope)" }}>{t.role}{t.company ? ` · ${t.company}` : ""}</div>
                    </div>
                    <span
                      className="ml-auto text-[10px] px-2 py-0.5 tracking-widest uppercase"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        border: `1px solid ${t.type === "student" ? "rgba(253,167,32,0.3)" : "rgba(242,184,76,0.3)"}`,
                        color: t.type === "student" ? "#fda720" : "#f2b84c",
                      }}
                    >
                      {t.type}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-8 max-w-5xl mx-auto">
        <Emerge className="text-center mb-14">
          <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Partnership
          </span>
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Partner <span className="gradient-text-orange">With Us</span>
          </h2>
          <p className="text-zinc-600 text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
            Limited to 18 spots. First-come, first-served.
          </p>
        </Emerge>
        <Emerge delay={100}>
          <div
            className="overflow-hidden"
            style={{ border: "1px solid rgba(253,167,32,0.15)" }}
          >
            <Table>
              <TableHeader>
                <TableRow
                  className="border-0 hover:bg-transparent"
                  style={{ background: "linear-gradient(90deg, rgba(253,167,32,0.08), rgba(253,167,32,0.04))" }}
                >
                  <TableHead className="text-zinc-600 text-[10px] uppercase tracking-widest py-5 pl-6" style={{ fontFamily: "var(--font-manrope)" }}>Benefits</TableHead>
                  {partnershipTiers.map((tier) => (
                    <TableHead
                      key={tier.tier}
                      className="text-center py-5 font-bold text-sm tracking-wider"
                      style={{ color: tier.color }}
                    >
                      {tier.tier}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnershipFeatureLabels.map((feature, i) => (
                  <TableRow
                    key={feature.key}
                    className="border-0 hover:bg-white/2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <TableCell className="text-zinc-500 text-xs py-4 pl-6" style={{ fontFamily: "var(--font-manrope)" }}>
                      {feature.label}
                    </TableCell>
                    {partnershipTiers.map((tier) => (
                      <TableCell key={tier.tier} className="text-center py-4">
                        {tier.features[feature.key] ? (
                          <Check size={14} className="inline-block" style={{ color: "#fda720" }} />
                        ) : (
                          <XIcon size={12} className="inline-block text-zinc-800" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow
                  className="border-0 hover:bg-transparent"
                  style={{ background: "linear-gradient(90deg, rgba(253,167,32,0.06), transparent)" }}
                >
                  <TableCell className="text-zinc-400 text-xs py-6 pl-6 font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
                    Investment
                  </TableCell>
                  {partnershipTiers.map((tier) => (
                    <TableCell
                      key={tier.tier}
                      className="text-center py-6 font-bold text-base"
                      style={{ fontFamily: "var(--font-unbounded)", color: tier.color }}
                    >
                      {tier.investment}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="text-center mt-4">
            <span className="text-zinc-700 text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
              Startup discount available —{" "}
              <a href="#contact" className="hover:text-[#fda720] transition-colors" style={{ color: "#fda720" }}>contact us</a>
            </span>
          </div>
        </Emerge>
      </section>

      {/* GALLERY */}
      <section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <Emerge className="mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Through The Years
            </span>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Previous <br />
              <span className="gradient-text-orange">Editions</span>
            </h2>
          </Emerge>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {galleryImages.map((img, i) => (
              <Emerge key={img.src} delay={i * 60}>
                <button
                  onClick={() => openLightbox(i)}
                  className="relative group overflow-hidden block w-full aspect-[4/3]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    style={{ filter: "brightness(0.7) saturate(0.8)" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(253,167,32,0.25), transparent 60%)" }}
                  />
                  <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span
                      className="text-xs font-bold text-white tracking-widest"
                      style={{ fontFamily: "var(--font-unbounded)" }}
                    >
                      {img.year}
                    </span>
                  </div>
                </button>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <Emerge className="mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              The Organisers
            </span>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              The Team
            </h2>
          </Emerge>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <Emerge key={member.name} delay={i * 50}>
                <div className="group">
                  <div
                    className="w-14 h-14 mb-4 flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:border-[#fda720]/50"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#fda720",
                      fontFamily: "var(--font-unbounded)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div className="text-white text-xs font-bold leading-tight">{member.name}</div>
                  <div className="text-zinc-700 text-[10px] mt-1" style={{ fontFamily: "var(--font-manrope)" }}>{member.role}</div>
                </div>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Emerge>
            <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 block mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact
            </span>
            <h2
              className="font-extrabold mb-4"
              style={{ fontSize: "clamp(3rem, 10vw, 8rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
            >
              Let&apos;s
              <br />
              <span className="gradient-text-orange">Build</span>
              <br />
              Together
            </h2>
            <p className="text-zinc-600 mt-8 mb-12 text-sm leading-relaxed max-w-sm mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Whether you want to partner with us or join as a student,
              reach out and we&apos;ll make it happen.
            </p>
            <a
              href="mailto:bewanted@bestgraz.org"
              className="inline-flex items-center gap-3 px-8 py-4 text-black text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90 group"
              style={{ background: "linear-gradient(135deg, #fda720, #f2b84c)", fontFamily: "var(--font-unbounded)" }}
            >
              <Mail size={15} />
              Get In Touch
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center justify-center gap-6 mt-10">
              <a href="https://www.instagram.com/bewanted.graz/" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-[#fda720] transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/company/bestgraz/" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-[#fda720] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </Emerge>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-sm font-bold"
            style={{ fontFamily: "var(--font-unbounded)" }}
          >
            <span className="gradient-text-orange">be</span>WANTED
          </span>
          <p className="text-zinc-700 text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
            © {new Date().getFullYear()} beWANTED by BEST Graz. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-zinc-700" style={{ fontFamily: "var(--font-manrope)" }}>
            <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Use</a>
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
