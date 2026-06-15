"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, ChevronDown, Mail, Check, X as XIcon, ExternalLink } from "lucide-react";
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

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-zinc-400 hover:text-[#fda720] text-sm tracking-widest uppercase transition-colors duration-200"
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      {children}
    </a>
  );
}

export function ThemeOne() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div className="bg-black text-white overflow-x-hidden" style={{ fontFamily: "var(--font-manrope)" }}>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="text-lg font-black tracking-tight"
            style={{ fontFamily: "var(--font-anton)", color: "#fda720", letterSpacing: "0.05em" }}
          >
            be<span className="text-white">WANTED</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#partners">Partners</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 text-xs tracking-widest uppercase font-semibold border border-[#fda720] text-[#fda720] hover:bg-[#fda720] hover:text-black transition-all duration-300"
          >
            Partner Up
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(253,167,32,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Decorative rotating ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/3 animate-bw-spin-slow"
          style={{ borderStyle: "dashed" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/2 animate-bw-spin-slow"
          style={{ borderStyle: "dashed", animationDirection: "reverse", animationDuration: "30s" }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p
            className="text-[#fda720] text-xs tracking-[0.4em] uppercase mb-8 animate-bw-fadeIn opacity-0"
            style={{ fontFamily: "var(--font-manrope)", animationFillMode: "forwards" }}
          >
            {eventInfo.organizer} presents
          </p>

          <h1
            className="text-[11vw] md:text-[9rem] leading-none tracking-tight mb-6 animate-bw-fadeInUp opacity-0"
            style={{ fontFamily: "var(--font-anton)", animationFillMode: "forwards", animationDelay: "0.1s" }}
          >
            <span className="text-white">be</span>
            <span
              style={{
                color: "#fda720",
                textShadow: "0 0 60px rgba(253,167,32,0.5), 0 0 120px rgba(253,167,32,0.2)",
              }}
            >
              WANTED
            </span>
          </h1>

          <p
            className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.25s" }}
          >
            The most personal career event in Graz. One-on-one CV feedback,
            direct company access, real conversations.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14 text-sm text-zinc-500 animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-[#fda720]" />
              {eventInfo.date}
            </span>
            <span className="hidden sm:block text-zinc-700">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#fda720]" />
              {eventInfo.location}, {eventInfo.city}
            </span>
          </div>

          {/* Countdown Placeholder */}
          <div
            className="flex items-center justify-center gap-3 md:gap-5 mb-12 animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            {["Days", "Hours", "Min", "Sec"].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 border border-[#fda720]/30 flex items-center justify-center animate-bw-pulseGlow"
                  style={{ fontFamily: "var(--font-anton)", fontSize: "2rem" }}
                >
                  <span className="text-[#fda720] opacity-40 animate-bw-blink">--</span>
                </div>
                <span className="text-[10px] text-zinc-600 mt-1 tracking-widest uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.65s" }}
          >
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[#fda720] text-black text-sm font-bold tracking-widest uppercase hover:bg-[#f2b84c] transition-colors duration-200"
            >
              Register as Student
            </a>
            <a
              href="#pricing"
              className="px-8 py-3.5 border border-white/20 text-white text-sm font-medium tracking-widest uppercase hover:border-[#fda720] hover:text-[#fda720] transition-all duration-200"
            >
              Become a Partner
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/5 py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8">
          {[
            { value: "18", label: "Partner Companies", sub: "Maximum spots" },
            { value: "500+", label: "Students Attended", sub: "Last edition" },
            { value: eventInfo.edition, label: "Edition", sub: `Since ${2020}` },
          ].map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 100} className="text-center">
              <div
                className="text-4xl md:text-5xl mb-1"
                style={{ fontFamily: "var(--font-anton)", color: "#fda720" }}
              >
                {stat.value}
              </div>
              <div className="text-white text-sm font-medium">{stat.label}</div>
              <div className="text-zinc-600 text-xs mt-0.5">{stat.sub}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p
              className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              About the Event
            </p>
            <h2
              className="text-4xl md:text-6xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              WHERE CAREERS
              <br />
              <span style={{ color: "#fda720" }}>BEGIN</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-base">
              beWANTED is unlike any other career event. No crowded halls, no mass
              brochure exchange. Instead, each of the <span className="text-white font-semibold">strictly limited 18 companies</span> meets
              students in a personal, one-on-one format designed for real dialogue.
            </p>
            <p className="text-zinc-500 leading-relaxed text-base">
              Students receive direct feedback on their CVs and motivation letters
              from HR professionals who remember their faces. Companies find the
              talent they actually need. Organized by BEST Graz at TU Graz.
            </p>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-[#fda720]/20"
                style={{ transform: "rotate(-1deg)" }}
              />
              <Image
                src="/previous-editions/past_event_1.webp"
                alt="beWANTED event"
                width={600}
                height={400}
                className="w-full object-cover relative z-10"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              This Year's Partners
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-anton)" }}>
              OUR PARTNERS
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((partner, i) => (
              <FadeUp key={partner.name} delay={i * 50}>
                <div className="border border-white/8 hover:border-[#fda720]/50 transition-all duration-300 p-6 flex items-center justify-center group cursor-default">
                  <div className="text-center">
                    <span className="text-zinc-300 font-semibold text-sm group-hover:text-white transition-colors">
                      {partner.name}
                    </span>
                    <div
                      className="text-[10px] tracking-widest uppercase mt-1"
                      style={{
                        color:
                          partner.tier === "diamond"
                            ? "#B9F2FF"
                            : partner.tier === "gold"
                            ? "#FFD700"
                            : "#C0C0C0",
                      }}
                    >
                      {partner.tier}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              What They Say
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-anton)" }}>
              TESTIMONIALS
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 80}>
                <div className="p-6 border-l-2 border-[#fda720] bg-white/2 hover:bg-white/4 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] px-2 py-0.5 border tracking-widest uppercase"
                      style={{
                        borderColor: t.type === "student" ? "#fda720" : "#f2b84c",
                        color: t.type === "student" ? "#fda720" : "#f2b84c",
                      }}
                    >
                      {t.type}
                    </span>
                    {t.company && (
                      <span className="text-[10px] text-zinc-600 tracking-widest uppercase">
                        @ {t.company}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-sm mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <span className="text-white font-semibold text-sm">{t.name}</span>
                    <span className="text-zinc-600 text-xs ml-2">— {t.role}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TABLE */}
      <section id="pricing" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Partnership Options
            </p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-anton)" }}>
              PARTNER WITH US
            </h2>
            <p className="text-zinc-500 max-w-md mx-auto text-sm">
              Limited to 18 companies. Spots allocated first-come, first-served.
              Startups receive a special discount — reach out to learn more.
            </p>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="border border-white/10 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-zinc-500 text-xs uppercase tracking-widest py-4 pl-6">Benefits</TableHead>
                    {partnershipTiers.map((tier) => (
                      <TableHead
                        key={tier.tier}
                        className="text-center py-4 text-sm font-bold uppercase tracking-widest"
                        style={{ color: tier.color }}
                      >
                        {tier.tier}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partnershipFeatureLabels.map((feature, i) => (
                    <TableRow key={feature.key} className={`border-white/5 hover:bg-white/2 ${i % 2 === 0 ? "bg-white/1" : ""}`}>
                      <TableCell className="text-zinc-400 text-sm py-3.5 pl-6">{feature.label}</TableCell>
                      {partnershipTiers.map((tier) => (
                        <TableCell key={tier.tier} className="text-center py-3.5">
                          {tier.features[feature.key] ? (
                            <Check size={16} className="inline-block text-[#fda720]" />
                          ) : (
                            <XIcon size={14} className="inline-block text-zinc-700" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow className="border-white/10 bg-white/3">
                    <TableCell className="text-zinc-400 text-sm py-4 pl-6 font-semibold">Investment</TableCell>
                    {partnershipTiers.map((tier) => (
                      <TableCell
                        key={tier.tier}
                        className="text-center py-4 font-bold text-base"
                        style={{ color: tier.color }}
                      >
                        {tier.investment}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="text-center text-zinc-600 text-xs mt-4">
              Startup discount available — <a href="#contact" className="text-[#fda720] hover:underline">contact us</a> for details
            </p>
          </FadeUp>
        </div>
      </section>

      {/* PREVIOUS EDITIONS GALLERY */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Through the Years
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-anton)" }}>
              PREVIOUS EDITIONS
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, i) => (
              <FadeUp key={img.src} delay={i * 60}>
                <button
                  onClick={() => openLightbox(i)}
                  className="relative group overflow-hidden aspect-[4/3] block w-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink size={20} className="text-[#fda720]" />
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-[10px] text-white/70 bg-black/60 px-2 py-0.5">{img.year}</span>
                  </div>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Behind the Event
            </p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-anton)" }}>
              OUR TEAM
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 60}>
                <div className="text-center group">
                  <div
                    className="w-16 h-16 mx-auto mb-3 flex items-center justify-center border border-white/10 group-hover:border-[#fda720]/50 transition-colors duration-300 text-lg font-bold"
                    style={{ fontFamily: "var(--font-anton)", color: "#fda720" }}
                  >
                    {member.initials}
                  </div>
                  <div className="text-white text-xs font-semibold leading-tight">{member.name}</div>
                  <div className="text-zinc-600 text-[10px] mt-0.5">{member.role}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: "var(--font-anton)" }}>
              LET&apos;S CONNECT
            </h2>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              Interested in partnering with us? Want to learn more about the event?
              We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:bewanted@bestgraz.org"
                className="flex items-center gap-2 px-6 py-3 bg-[#fda720] text-black text-sm font-bold hover:bg-[#f2b84c] transition-colors"
              >
                <Mail size={16} />
                bewanted@bestgraz.org
              </a>
            </div>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/bewanted.graz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-[#fda720] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/bestgraz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-[#fda720] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#fda720]/20 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-sm font-black"
            style={{ fontFamily: "var(--font-anton)", color: "#fda720", letterSpacing: "0.05em" }}
          >
            be<span className="text-zinc-600">WANTED</span>
          </span>
          <p className="text-zinc-700 text-xs text-center">
            © {new Date().getFullYear()} beWANTED by BEST Graz. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-zinc-700">
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
