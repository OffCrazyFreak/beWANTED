"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Mail, Check, X as XIcon, Zap, Shield, Star } from "lucide-react";
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

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, className = "", glow = false }: { children: React.ReactNode; className?: string; glow?: boolean }) {
  return (
    <div
      className={`glass-card rounded-2xl ${glow ? "animate-bw-pulseGlow" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function ThemeFour() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div
      className="text-white overflow-x-hidden relative"
      style={{
        fontFamily: "var(--font-syne)",
        background: "linear-gradient(135deg, #020508 0%, #050d18 50%, #02080f 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Global ambient bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 40% 50% at 20% 30%, rgba(253,167,32,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 80% 70%, rgba(253,167,32,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="fixed inset-0 pointer-events-none dot-grid opacity-30" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <span
            className="text-base font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span style={{ color: "#fda720" }}>be</span>
            <span className="text-white">WANTED</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Partners", "Pricing", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-medium border border-[#fda720]/40 text-[#fda720] hover:bg-[#fda720] hover:text-black transition-all duration-300"
            style={{ fontSize: "0.8rem" }}
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Floating decorative orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(253,167,32,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(253,167,32,0.05) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#fda720]/20 text-[#fda720] text-xs mb-10 animate-bw-fadeIn opacity-0"
            style={{ fontFamily: "var(--font-syne)", animationFillMode: "forwards", background: "rgba(253,167,32,0.06)" }}
          >
            <Zap size={10} />
            {eventInfo.organizer} · {eventInfo.edition} Edition
          </div>

          <h1
            className="text-[12vw] md:text-[7.5rem] font-extrabold leading-none tracking-tight mb-6 animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.15s" }}
          >
            <span className="gradient-text-orange">be</span>
            <span className="text-white">WANTED</span>
          </h1>

          <p
            className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s", fontFamily: "var(--font-manrope)" }}
          >
            The most curated career event at TU Graz.
            Limited to 18 companies. Built for real conversations.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-zinc-500 animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s", fontFamily: "var(--font-manrope)" }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={13} style={{ color: "#fda720" }} />
              {eventInfo.date}
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <MapPin size={13} style={{ color: "#fda720" }} />
              {eventInfo.location}
            </span>
          </div>

          {/* Glass countdown */}
          <GlassCard
            className="inline-flex items-center gap-6 px-8 py-5 mb-10 animate-bw-fadeInUp opacity-0"
            glow
          >
            <style>{`
              .countdown-box { display: flex; flex-direction: column; align-items: center; }
            `}</style>
            {["Days", "Hrs", "Min", "Sec"].map((unit, i) => (
              <div key={unit}>
                <div className="countdown-box">
                  <span
                    className="text-3xl font-extrabold leading-none"
                    style={{ color: "#fda720" }}
                  >
                    --
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest" style={{ fontFamily: "var(--font-manrope)" }}>
                    {unit}
                  </span>
                </div>
                {i < 3 && <span className="text-zinc-700 text-xl font-thin mx-2">:</span>}
              </div>
            ))}
          </GlassCard>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-bw-fadeIn opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #fda720, #f2b84c)", fontFamily: "var(--font-manrope)" }}
            >
              Register as Student
            </a>
            <a
              href="#pricing"
              className="px-8 py-3.5 rounded-full font-medium text-sm border border-white/15 text-white hover:border-[#fda720]/40 hover:text-[#fda720] transition-all duration-300"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {[
            { value: "18", label: "Partner Companies", icon: Shield },
            { value: "500+", label: "Students Last Edition", icon: Star },
            { value: eventInfo.edition, label: "Successful Editions", icon: Zap },
          ].map(({ value, label, icon: Icon }, i) => (
            <FadeIn key={label} delay={i * 80}>
              <GlassCard className="p-6 text-center rounded-2xl">
                <Icon size={18} className="mx-auto mb-3 text-[#fda720]/60" />
                <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: "#fda720" }}>
                  {value}
                </div>
                <div className="text-zinc-500 text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
                  {label}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              About the Event
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Where
              <br />
              <span style={{ color: "#fda720" }}>Talent</span> Meets
              <br />
              Opportunity
            </h2>
            <p className="text-zinc-400 leading-relaxed text-base mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              beWANTED reimagines the career fair format. Instead of crowded
              exhibition halls, we create a precise, curated environment where
              every interaction is intentional.
            </p>
            <p className="text-zinc-500 leading-relaxed text-base" style={{ fontFamily: "var(--font-manrope)" }}>
              Limited to <span className="text-white">just 18 companies</span>,
              each student gets personal CV feedback, career guidance, and
              genuine face-time with decision makers. Organized by BEST Graz at
              TU Graz, Graz Austria.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative">
              <GlassCard className="p-2 rounded-2xl">
                <Image
                  src="/previous-editions/past_event_4.webp"
                  alt="beWANTED event"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-xl"
                />
              </GlassCard>
              <div
                className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 border border-[#fda720]/20"
                style={{ boxShadow: "0 0 30px rgba(253,167,32,0.15)" }}
              >
                <div className="text-2xl font-extrabold text-[#fda720]">18</div>
                <div className="text-xs text-zinc-400" style={{ fontFamily: "var(--font-manrope)" }}>Max Companies</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              This Year&apos;s Partners
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Our Partners</h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 50}>
                <GlassCard className="p-5 text-center rounded-xl hover:border-[#fda720]/30 transition-all duration-300 group cursor-default">
                  <div className="text-zinc-300 font-semibold text-sm group-hover:text-white transition-colors">
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
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">What They Say</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 70}>
                <GlassCard className="p-6 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        borderColor: t.type === "student" ? "rgba(253,167,32,0.4)" : "rgba(242,184,76,0.4)",
                        color: t.type === "student" ? "#fda720" : "#f2b84c",
                        background: t.type === "student" ? "rgba(253,167,32,0.08)" : "rgba(242,184,76,0.08)",
                      }}
                    >
                      {t.type}
                    </span>
                    {t.company && (
                      <span className="text-zinc-600 text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
                        {t.company}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-zinc-600 text-xs mt-0.5" style={{ fontFamily: "var(--font-manrope)" }}>{t.role}</div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Partnership Options
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Partner With Us</h2>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
              Strictly limited to 18 spots. Allocated first-come, first-served.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <GlassCard className="rounded-2xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow
                    className="border-white/5 hover:bg-transparent"
                    style={{ background: "rgba(253,167,32,0.08)" }}
                  >
                    <TableHead className="text-zinc-500 text-xs uppercase tracking-widest py-5 pl-6" style={{ fontFamily: "var(--font-manrope)" }}>Benefits</TableHead>
                    {partnershipTiers.map((tier) => (
                      <TableHead
                        key={tier.tier}
                        className="text-center py-5 font-bold"
                        style={{ color: tier.color }}
                      >
                        {tier.tier}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partnershipFeatureLabels.map((feature) => (
                    <TableRow key={feature.key} className="border-white/5 hover:bg-white/2">
                      <TableCell className="text-zinc-400 text-sm py-4 pl-6" style={{ fontFamily: "var(--font-manrope)" }}>
                        {feature.label}
                      </TableCell>
                      {partnershipTiers.map((tier) => (
                        <TableCell key={tier.tier} className="text-center py-4">
                          {tier.features[feature.key] ? (
                            <Check size={15} className="inline-block" style={{ color: "#fda720" }} />
                          ) : (
                            <XIcon size={13} className="inline-block text-zinc-700" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow
                    className="border-white/5"
                    style={{ background: "rgba(253,167,32,0.05)" }}
                  >
                    <TableCell className="text-zinc-400 text-sm py-5 pl-6 font-semibold" style={{ fontFamily: "var(--font-manrope)" }}>Investment</TableCell>
                    {partnershipTiers.map((tier) => (
                      <TableCell
                        key={tier.tier}
                        className="text-center py-5 font-bold text-base"
                        style={{ color: tier.color }}
                      >
                        {tier.investment}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </GlassCard>
            <p className="text-center text-zinc-600 text-xs mt-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Startup? We have a special discount —{" "}
              <a href="#contact" style={{ color: "#fda720" }} className="hover:underline">reach out</a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              Through the Years
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Previous Editions</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 60}>
                <button
                  onClick={() => openLightbox(i)}
                  className="relative group overflow-hidden aspect-[4/3] block w-full rounded-xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(253,167,32,0.3), transparent)" }}
                  />
                  <div className="absolute inset-0 border border-[#fda720]/0 group-hover:border-[#fda720]/30 rounded-xl transition-colors duration-300" />
                  <span className="absolute bottom-2 left-2 text-xs text-white/60 bg-black/50 px-2 py-0.5 rounded" style={{ fontFamily: "var(--font-manrope)" }}>
                    {img.year}
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
              The Organisers
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Our Team</h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 50}>
                <GlassCard className="p-4 text-center rounded-2xl hover:border-[#fda720]/20 transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(253,167,32,0.2), rgba(253,167,32,0.05))",
                      border: "1px solid rgba(253,167,32,0.3)",
                      color: "#fda720",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div className="text-white text-xs font-semibold leading-tight">{member.name}</div>
                  <div className="text-zinc-600 text-[10px] mt-0.5" style={{ fontFamily: "var(--font-manrope)" }}>{member.role}</div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="text-[#fda720] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Ready to
              <br />
              <span style={{ color: "#fda720" }}>Connect?</span>
            </h2>
            <p className="text-zinc-500 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Whether you&apos;re a company looking to partner or a student wanting to join,
              we&apos;d love to hear from you.
            </p>
            <GlassCard className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl mb-8">
              <a
                href="mailto:bewanted@bestgraz.org"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #fda720, #f2b84c)", fontFamily: "var(--font-manrope)" }}
              >
                <Mail size={15} />
                bewanted@bestgraz.org
              </a>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/bewanted.graz/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#fda720] transition-colors" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/company/bestgraz/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#fda720] transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>
            <span style={{ color: "#fda720" }}>be</span>WANTED
          </span>
          <p className="text-zinc-600 text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
            © {new Date().getFullYear()} beWANTED by BEST Graz. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-zinc-600" style={{ fontFamily: "var(--font-manrope)" }}>
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
