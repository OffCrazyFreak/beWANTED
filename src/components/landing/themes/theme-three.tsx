"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Mail, Check, X as XIcon } from "lucide-react";
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

function Strike({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ThemeThree() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "var(--font-barlow)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[#fda720]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span
            className="text-2xl font-black uppercase tracking-tight text-[#fda720]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            be<span className="text-white">WANTED</span>
          </span>
          <div className="hidden md:flex items-center gap-0">
            {["About", "Partners", "Pricing", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-4 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-[#fda720] hover:bg-white/5 transition-all border-l border-white/5"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-[#fda720] text-black px-5 py-2 text-xs font-black uppercase tracking-widest hover:bg-[#f2b84c] transition-colors"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* HERO - full orange */}
      <section
        className="min-h-screen relative flex flex-col justify-center pt-14 overflow-hidden"
        style={{ background: "#fda720" }}
      >
        {/* Background diagonal stripes */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div
            className="text-black text-[16vw] md:text-[13rem] font-black uppercase leading-none tracking-tighter animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            be
          </div>
          <div className="flex items-start gap-6 md:gap-12">
            <div
              className="text-black text-[16vw] md:text-[13rem] font-black uppercase leading-none tracking-tighter animate-bw-fadeInUp opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.1s" }}
            >
              WANT
            </div>
            <div
              className="flex flex-col gap-3 pt-4 animate-bw-fadeIn opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <div className="bg-black text-[#fda720] px-4 py-2 text-sm font-black uppercase tracking-widest w-fit">
                {eventInfo.edition} Edition
              </div>
              <div className="flex items-center gap-2 text-black font-bold text-sm">
                <Calendar size={14} />
                {eventInfo.date}
              </div>
              <div className="flex items-center gap-2 text-black font-bold text-sm">
                <MapPin size={14} />
                {eventInfo.location}
              </div>
            </div>
          </div>
          <div
            className="text-black text-[16vw] md:text-[13rem] font-black uppercase leading-none tracking-tighter animate-bw-fadeInUp opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            ED
          </div>
        </div>

        {/* Diagonal cut */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: "#000",
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </section>

      {/* STATS STRIP - black */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-0 border border-[#fda720]">
          {[
            { value: "18", label: "Max Companies" },
            { value: "500+", label: "Students" },
            { value: eventInfo.edition, label: "Edition" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-8 px-4 ${i < 2 ? "border-r border-[#fda720]" : ""}`}
            >
              <div className="text-5xl md:text-6xl font-black text-[#fda720] leading-none">{stat.value}</div>
              <div className="text-white text-xs font-black uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-4 gap-2">
          {["DAYS", "HRS", "MIN", "SEC"].map((unit) => (
            <div
              key={unit}
              className="border-2 border-[#fda720] text-center py-5"
            >
              <div className="text-4xl font-black text-[#fda720] leading-none">--</div>
              <div className="text-white text-[10px] font-black uppercase tracking-widest mt-1">{unit}</div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="flex-1 text-center py-4 bg-[#fda720] text-black font-black uppercase tracking-widest text-sm hover:bg-[#f2b84c] transition-colors"
          >
            Register as Student →
          </a>
          <a
            href="#pricing"
            className="flex-1 text-center py-4 border-2 border-[#fda720] text-[#fda720] font-black uppercase tracking-widest text-sm hover:bg-[#fda720] hover:text-black transition-all"
          >
            Become a Partner →
          </a>
        </div>
      </section>

      {/* ABOUT - orange + black alternating */}
      <section id="about" className="bg-[#fda720] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
          <Strike>
            <div className="bg-black p-10 md:p-16 h-full">
              <p className="text-[#fda720] text-xs font-black uppercase tracking-widest mb-6">About</p>
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-tight mb-8">
                NOT YOUR
                <br />
                AVERAGE
                <br />
                <span className="text-[#fda720]">FAIR</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                beWANTED is strictly limited to <span className="text-white font-bold">18 companies</span>. No
                crowded halls. No mass applications. Just direct, personal conversations
                between students and HR professionals who are there for them specifically.
              </p>
            </div>
          </Strike>

          <Strike delay={100}>
            <div className="p-10 md:p-16 h-full flex flex-col justify-between">
              <Image
                src="/previous-editions/past_event_3.webp"
                alt="beWANTED event"
                width={600}
                height={400}
                className="w-full object-cover border-4 border-black mb-6"
              />
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black p-4">
                  <div className="text-3xl font-black text-[#fda720]">1:1</div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider mt-1">Personal Format</div>
                </div>
                <div className="bg-black p-4">
                  <div className="text-3xl font-black text-[#fda720]">TU</div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider mt-1">Graz Campus</div>
                </div>
              </div>
            </div>
          </Strike>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Strike className="mb-10">
            <div className="flex items-end gap-6">
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
                PARTNERS
              </h2>
              <div className="h-2 w-16 bg-[#fda720] mb-4" />
            </div>
          </Strike>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {partners.map((partner, i) => (
              <Strike key={partner.name} delay={i * 30}>
                <div className="border-2 border-[#fda720]/30 hover:border-[#fda720] transition-colors p-5 text-center group cursor-default">
                  <div className="text-white font-black text-sm uppercase group-hover:text-[#fda720] transition-colors">{partner.name}</div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mt-1"
                    style={{
                      color: partner.tier === "diamond" ? "#B9F2FF" : partner.tier === "gold" ? "#FFD700" : "#C0C0C0",
                    }}
                  >
                    {partner.tier}
                  </div>
                </div>
              </Strike>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#fda720] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Strike className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-black">
              THEY SAID IT
            </h2>
          </Strike>

          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <Strike key={t.name} delay={i * 60}>
                <div className="bg-black p-8 border-l-8 border-[#fda720]">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-[#fda720] text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
                      {t.type}
                    </span>
                    {t.company && (
                      <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider">@ {t.company}</span>
                    )}
                  </div>
                  <p className="text-white text-base leading-relaxed mb-6 font-medium">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#fda720] font-black text-sm uppercase">{t.name}</span>
                    <span className="text-zinc-600 text-xs">{t.role}</span>
                  </div>
                </div>
              </Strike>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section id="pricing" className="bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Strike className="mb-12">
            <div className="flex items-end gap-6 mb-3">
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white">PRICING</h2>
              <div className="h-2 w-16 bg-[#fda720] mb-4" />
            </div>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
              Limited to 18 spots. No exceptions. Startups — reach out for discount.
            </p>
          </Strike>

          <Strike delay={100}>
            <div className="border-2 border-[#fda720] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-0 bg-[#fda720] hover:bg-[#fda720]">
                    <TableHead className="text-black font-black uppercase tracking-widest text-xs py-4 pl-6">Benefits</TableHead>
                    {partnershipTiers.map((tier) => (
                      <TableHead
                        key={tier.tier}
                        className="text-center py-4 font-black uppercase tracking-widest text-black text-sm"
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
                      className={`border-zinc-800 hover:bg-zinc-900 ${i % 2 === 0 ? "bg-zinc-950" : "bg-black"}`}
                    >
                      <TableCell className="text-zinc-300 text-sm py-3.5 pl-6 font-bold">{feature.label}</TableCell>
                      {partnershipTiers.map((tier) => (
                        <TableCell key={tier.tier} className="text-center py-3.5">
                          {tier.features[feature.key] ? (
                            <Check size={18} className="inline-block text-[#fda720]" />
                          ) : (
                            <XIcon size={14} className="inline-block text-zinc-700" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow className="border-zinc-800 bg-[#fda720]/10 hover:bg-[#fda720]/15">
                    <TableCell className="text-[#fda720] text-sm py-5 pl-6 font-black uppercase tracking-widest">Investment</TableCell>
                    {partnershipTiers.map((tier) => (
                      <TableCell
                        key={tier.tier}
                        className="text-center py-5 font-black text-[#fda720] text-lg"
                      >
                        {tier.investment}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Strike>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#fda720] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Strike className="mb-10">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-black">
              PAST EDITIONS
            </h2>
          </Strike>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, i) => (
              <Strike key={img.src} delay={i * 50}>
                <button
                  onClick={() => openLightbox(i)}
                  className="relative group aspect-[4/3] block w-full overflow-hidden border-4 border-black"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#fda720] opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
                  <div className="absolute bottom-0 left-0 bg-black px-3 py-1">
                    <span className="text-[#fda720] text-xs font-black">{img.year}</span>
                  </div>
                </button>
              </Strike>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Strike className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
              THE TEAM
              <span className="text-[#fda720]">.</span>
            </h2>
          </Strike>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {team.map((member, i) => (
              <Strike key={member.name} delay={i * 40}>
                <div className="border-2 border-[#fda720]/30 hover:border-[#fda720] transition-colors p-4 text-center group">
                  <div
                    className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-[#fda720] text-black font-black text-lg"
                  >
                    {member.initials}
                  </div>
                  <div className="text-white font-black text-xs uppercase tracking-wide">{member.name}</div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider mt-0.5">{member.role}</div>
                </div>
              </Strike>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#fda720] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Strike className="mb-10">
            <h2 className="text-6xl md:text-9xl font-black uppercase text-black leading-none">
              LET&apos;S
              <br />
              TALK<span className="text-white">.</span>
            </h2>
          </Strike>
          <Strike delay={100}>
            <p className="text-black font-bold text-lg mb-8">
              Interested in partnering with us? Students ready to sign up?
              Drop us a line.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:bewanted@bestgraz.org"
                className="flex items-center gap-3 px-6 py-4 bg-black text-[#fda720] font-black uppercase tracking-widest text-sm hover:bg-zinc-900 transition-colors"
              >
                <Mail size={16} />
                bewanted@bestgraz.org
              </a>
              <div className="flex items-center gap-4 px-6 py-4">
                <a href="https://www.instagram.com/bewanted.graz/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors" aria-label="Instagram">
                  <InstagramIcon size={22} />
                </a>
                <a href="https://www.linkedin.com/company/bestgraz/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={22} />
                </a>
              </div>
            </div>
          </Strike>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t-4 border-[#fda720] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-[#fda720] font-black text-lg uppercase">
            beWANTED
          </span>
          <p className="text-zinc-700 text-xs font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} BEST Graz. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs font-bold uppercase tracking-wider text-zinc-700">
            <a href="/privacy" className="hover:text-[#fda720] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#fda720] transition-colors">Terms of Use</a>
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
