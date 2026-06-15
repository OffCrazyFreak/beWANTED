export const EVENT = {
  date: "November 25, 2026",
  dateShort: "NOV 25, 2026",
  location: "TU Graz",
  locationFull: "Technische Universität Graz",
  maxCompanies: 18,
  tagline: "Das persönliche Karriere-Event",
  taglineEn: "The Personal Career Event",
}

export const partners = [
  { name: "AVL", tier: "diamond" as const },
  { name: "Anton Paar", tier: "diamond" as const },
  { name: "Dynatrace", tier: "gold" as const },
  { name: "Infineon", tier: "gold" as const },
  { name: "Magna", tier: "gold" as const },
  { name: "TTTech", tier: "silver" as const },
  { name: "Knapp AG", tier: "silver" as const },
  { name: "Frequentis", tier: "silver" as const },
  { name: "Andritz", tier: "silver" as const },
]

export const studentTestimonials = [
  {
    name: "Anna S.",
    program: "Computer Science, TU Graz",
    year: "3rd year",
    text: "beWANTED completely changed my perspective on networking. The CV-check session with AVL led directly to my internship offer. I left with three follow-up interviews lined up!",
  },
  {
    name: "Lukas M.",
    program: "Electrical Engineering, TU Graz",
    year: "Master's student",
    text: "Unlike big career fairs, beWANTED is intimate enough that you can actually have real conversations. Companies remembered me by name at the end of the day.",
  },
  {
    name: "Petra K.",
    program: "Mechatronics, TU Graz",
    year: "Final year",
    text: "The quality of companies at beWANTED is exceptional. These are exactly the employers I wanted to work for, and the format made connecting with them feel natural.",
  },
]

export const companyTestimonials = [
  {
    company: "Anton Paar GmbH",
    contact: "Head of Talent Acquisition",
    text: "The calibre of engineering students at beWANTED is genuinely impressive. The structured CV-check format means we have focused, productive conversations — not just handshakes.",
  },
  {
    company: "Dynatrace",
    contact: "University Relations Manager",
    text: "We've tried every major career fair in Austria. beWANTED delivers the highest quality matches in the most efficient format. It's our number one recruiting event.",
  },
]

export const partnershipBenefits = [
  {
    feature: "Company Booth (Standard)",
    featureDe: "Unternehmensstand (Standard)",
    silver: true,
    gold: true,
    diamond: true,
  },
  {
    feature: "Access to CV Database",
    featureDe: "Zugang zur Lebenslauf-Datenbank",
    silver: false,
    gold: true,
    diamond: true,
  },
  {
    feature: "Priority CV-Check Slots",
    featureDe: "Prioritäts-CV-Check-Slots",
    silver: false,
    gold: true,
    diamond: true,
  },
  {
    feature: "Prime Booth Location",
    featureDe: "Erstklassige Standplatzierung",
    silver: false,
    gold: false,
    diamond: true,
  },
  {
    feature: "Keynote Speaker Slot",
    featureDe: "Keynote-Speaker-Slot",
    silver: false,
    gold: false,
    diamond: true,
  },
  {
    feature: "Social Media Feature",
    featureDe: "Social Media Präsentation",
    silver: false,
    gold: false,
    diamond: true,
  },
  {
    feature: "Investment",
    featureDe: "Investition",
    silver: "€ 1,500",
    gold: "€ 2,500",
    diamond: "€ 4,000",
  },
]

export const previousEditions = [
  {
    src: "/previous-editions/past_event_1.webp",
    alt: "beWANTED 2024",
    year: "2024",
    caption: "18 partner companies · 900+ students",
  },
  {
    src: "/previous-editions/past_event_2.webp",
    alt: "beWANTED 2023",
    year: "2023",
    caption: "15 partner companies · 750+ students",
  },
  {
    src: "/previous-editions/past_event_3.webp",
    alt: "beWANTED 2022",
    year: "2022",
    caption: "12 partner companies · 600+ students",
  },
  {
    src: "/previous-editions/past_event_4.webp",
    alt: "beWANTED 2021",
    year: "2021",
    caption: "10 partner companies · 500+ students",
  },
]

export const team = [
  { name: "Rachel Hold", role: "Design Responsible", initials: "RH" },
  { name: "Max Bauer", role: "Project Lead", initials: "MB" },
  { name: "Sarah Koch", role: "Marketing", initials: "SK" },
  { name: "Tom Fischer", role: "IT & Web", initials: "TF" },
  { name: "Lisa Wagner", role: "Partnerships", initials: "LW" },
  { name: "David Müller", role: "Logistics", initials: "DM" },
]

export const socials = {
  instagram: "https://www.instagram.com/bewanted.graz/",
  linkedin: "https://www.linkedin.com/company/bestgraz/",
  email: "bewanted@best-graz.at",
  website: "https://bestgraz.org/bewanted/",
}
