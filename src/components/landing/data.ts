export interface Stat {
  num: string;
  label: string;
}

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export interface Tier {
  name: string;
  price: string;
  benefits: string[];
  locked: string[];
  highlight: boolean;
}

export const STATS: Stat[] = [
  { num: "30+", label: "Partner Companies" },
  { num: "500+", label: "Student Participants" },
  { num: "9m²", label: "Exhibition Space" },
  { num: "2×", label: "Cities per Year" },
];

export const STEPS_STUDENTS: Step[] = [
  {
    n: "01",
    title: "Upload Your CV",
    desc: "Create your profile and upload your CV to unlock access to company time slots.",
  },
  {
    n: "02",
    title: "Browse Companies",
    desc: "Explore partner companies and their profiles before the event day.",
  },
  {
    n: "03",
    title: "Book Time Slots",
    desc: "Reserve one-on-one CV check sessions with your preferred companies.",
  },
  {
    n: "04",
    title: "Meet & Learn",
    desc: "Get real feedback, make connections, and take the next step in your career.",
  },
];

export const STEPS_COMPANIES: Step[] = [
  {
    n: "01",
    title: "Apply to Partner",
    desc: "Submit your company application and select your partnership tier.",
  },
  {
    n: "02",
    title: "Get Approved",
    desc: "Our team reviews and confirms your partnership within 5 business days.",
  },
  {
    n: "03",
    title: "Set Up Time Slots",
    desc: "Configure your schedule, define booth details, and access the CV database.",
  },
  {
    n: "04",
    title: "Connect with Talent",
    desc: "Meet pre-selected candidates genuinely interested in your company.",
  },
];

export const ALL_TIER_FEATURES: string[] = [
  "Company Booth (Standard)",
  "Exhibition Space (9m²)",
  "CV Database Access",
  "Priority CV-Check Slots",
  "Prime Booth Location",
  "Keynote Speaker Slot",
  "Social Media Feature",
];

export const TIERS: Tier[] = [
  {
    name: "SILVER",
    price: "€1,500",
    benefits: ["Company Booth (Standard)", "Exhibition Space (9m²)"],
    locked: [
      "CV Database Access",
      "Priority CV-Check Slots",
      "Prime Booth Location",
      "Keynote Speaker Slot",
      "Social Media Feature",
    ],
    highlight: false,
  },
  {
    name: "GOLD",
    price: "€2,500",
    benefits: [
      "Company Booth (Standard)",
      "Exhibition Space (9m²)",
      "CV Database Access",
      "Priority CV-Check Slots",
    ],
    locked: ["Prime Booth Location", "Keynote Speaker Slot", "Social Media Feature"],
    highlight: true,
  },
  {
    name: "DIAMOND",
    price: "€4,000",
    benefits: [
      "Company Booth (Standard)",
      "Exhibition Space (9m²)",
      "CV Database Access",
      "Priority CV-Check Slots",
      "Prime Booth Location",
      "Keynote Speaker Slot",
      "Social Media Feature",
    ],
    locked: [],
    highlight: false,
  },
];
