export const eventInfo = {
  date: "November 25, 2026",
  location: "TU Graz",
  city: "Graz, Austria",
  maxCompanies: 18,
  organizer: "BEST Graz",
  edition: "7th",
};

export type PartnerTier = "diamond" | "gold" | "silver";

export interface Partner {
  name: string;
  tier: PartnerTier;
}

export const partners: Partner[] = [
  { name: "AVL", tier: "diamond" },
  { name: "Anton Paar", tier: "diamond" },
  { name: "Magna", tier: "gold" },
  { name: "Infineon", tier: "gold" },
  { name: "Andritz", tier: "gold" },
  { name: "Knapp", tier: "silver" },
  { name: "Spar", tier: "silver" },
  { name: "Mondi", tier: "silver" },
  { name: "Kapsch", tier: "silver" },
  { name: "Siemens", tier: "silver" },
];

export interface Testimonial {
  type: "student" | "company";
  name: string;
  role: string;
  company?: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    type: "student",
    name: "Maria K.",
    role: "MSc Computer Science",
    text: "beWANTED gave me something no online platform could — a genuine conversation. I left with not just feedback on my CV, but a real sense of what AVL was looking for. Two weeks later I had an interview.",
  },
  {
    type: "student",
    name: "Lukas M.",
    role: "BSc Mechanical Engineering",
    text: "The personal format is what makes beWANTED unique. No mass applications, no ghosting — just real people talking to real people. I found my thesis partner here.",
  },
  {
    type: "student",
    name: "Jana P.",
    role: "MSc Electrical Engineering",
    text: "I was nervous to approach companies directly, but the relaxed atmosphere made it easy. The CV feedback I got was more valuable than any workshop I attended.",
  },
  {
    type: "company",
    name: "Sandra W.",
    role: "HR Manager",
    company: "AVL",
    text: "We discover exceptional talent at beWANTED every year. The curated format means we speak with motivated, prepared candidates — quality over quantity, and that makes all the difference.",
  },
  {
    type: "company",
    name: "Thomas B.",
    role: "Head of Talent Acquisition",
    company: "Anton Paar",
    text: "beWANTED has become a cornerstone of our recruiting strategy. The genuine connections formed here lead to hires who fit our culture from day one.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const team: TeamMember[] = [
  { name: "Anna Müller", role: "Project Lead", initials: "AM" },
  { name: "Felix Weber", role: "Company Relations", initials: "FW" },
  { name: "Sophie Chen", role: "Marketing", initials: "SC" },
  { name: "David Kovač", role: "Logistics & Operations", initials: "DK" },
  { name: "Laura Fischer", role: "Student Outreach", initials: "LF" },
  { name: "Markus Bauer", role: "IT & Web", initials: "MB" },
];

export interface PartnershipTier {
  tier: string;
  investment: string;
  color: string;
  features: {
    booth: boolean;
    cvDatabase: boolean;
    cvCheckSlots: boolean;
    primeLocation: boolean;
    keynoteSpeaker: boolean;
    socialMedia: boolean;
  };
}

export const partnershipTiers: PartnershipTier[] = [
  {
    tier: "Silver",
    investment: "€ 1,500",
    color: "#C0C0C0",
    features: {
      booth: true,
      cvDatabase: false,
      cvCheckSlots: false,
      primeLocation: false,
      keynoteSpeaker: false,
      socialMedia: false,
    },
  },
  {
    tier: "Gold",
    investment: "€ 2,500",
    color: "#FFD700",
    features: {
      booth: true,
      cvDatabase: true,
      cvCheckSlots: true,
      primeLocation: false,
      keynoteSpeaker: false,
      socialMedia: false,
    },
  },
  {
    tier: "Diamond",
    investment: "€ 4,000",
    color: "#B9F2FF",
    features: {
      booth: true,
      cvDatabase: true,
      cvCheckSlots: true,
      primeLocation: true,
      keynoteSpeaker: true,
      socialMedia: true,
    },
  },
];

export const partnershipFeatureLabels = [
  { key: "booth", label: "Company Booth (Standard)" },
  { key: "cvDatabase", label: "Access to CV Database" },
  { key: "cvCheckSlots", label: "Priority CV-Check Slots" },
  { key: "primeLocation", label: "Prime Booth Location" },
  { key: "keynoteSpeaker", label: "Keynote Speaker Slot" },
  { key: "socialMedia", label: "Social Media Feature" },
] as const;

export interface GalleryImage {
  src: string;
  alt: string;
  year: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/previous-editions/past_event_1.webp",
    alt: "Students receiving CV feedback from company representatives",
    year: 2024,
  },
  {
    src: "/previous-editions/past_event_2.webp",
    alt: "CV-check session at a company booth",
    year: 2024,
  },
  {
    src: "/previous-editions/past_event_3.webp",
    alt: "Company booths set up at TU Graz",
    year: 2023,
  },
  {
    src: "/previous-editions/past_event_4.webp",
    alt: "Students networking with industry professionals",
    year: 2023,
  },
];
