# beWANTED

A full-stack web application for the **beWANTED** career event — Austria's most personal career fair, connecting TU Graz students with top companies through one-on-one CV check sessions and workshops. Organized by [BEST Graz](https://bestgraz.org).

## What is beWANTED?

beWANTED is an annual career event held at Graz University of Technology where engineering students can:
- Receive **personal, direct feedback** on their CVs from company HR representatives
- Attend **90-minute workshops** (max 15 students) one week before the main event
- **Book time slots** for one-on-one CV check sessions with their preferred companies
- Make genuine connections that go beyond a typical career fair

The event runs every **November in Graz** and **March in Vienna**.

---

## User Roles

### Students
- Register with email/password or Google
- Upload their CV to unlock company time slots
- Browse partner companies and their profiles
- Book **one time slot per company** (requires uploaded CV)
- Manage their profile and CV from a personal dashboard

### Companies
- Apply to become a partner via a registration form
- Wait for admin approval before gaining login access
- Add multiple representative accounts per company
- Create and manage time slots for student CV checks
- Access CV database (Gold & Diamond tiers)
- Manage company profile and booth details

### Admins
- Full dashboard with access to all database records
- Approve or reject company partnership applications
- Manage users, companies, time slots, and event data
- View event statistics and participant data

---

## Partnership Tiers

| Benefit | Silver | Gold | Diamond |
|---|---|---|---|
| Company Booth (Standard) | ✔ | ✔ | ✔ |
| Exhibition Space (9m²) | ✔ | ✔ | ✔ |
| Access to CV Database | — | ✔ | ✔ |
| Priority CV-Check Slots | — | ✔ | ✔ |
| Prime Booth Location | — | — | ✔ |
| Keynote Speaker Slot | — | — | ✔ |
| Social Media Feature | — | — | ✔ |
| **Investment** | **€1,500** | **€2,500** | **€4,000** |

> Startups get special discounts — contact us directly.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.x (App Router, Turbopack, React Compiler) |
| UI | React 19 + TypeScript 5 |
| Styling | Tailwind CSS v4 + shadcn/ui (radix-nova style) |
| Auth | Supabase Auth (email/password + Google OAuth) |
| Database | Supabase (PostgreSQL) |
| Forms | react-hook-form + zod + @hookform/resolvers |
| Data Fetching | @tanstack/react-query |
| i18n | next-intl (EN / DE) |
| Toasts | sonner |
| Icons | lucide-react |

---

## Getting Started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) project

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd be-wanted

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts + metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles + Tailwind config
├── components/
│   ├── landing/            # Landing page components
│   │   ├── LandingPage.tsx # Theme switcher container
│   │   ├── ThemeSwitcher.tsx
│   │   ├── data.ts         # Shared landing page content
│   │   └── themes/         # 5 visual theme variants
│   │       ├── ThemeNoir.tsx       # Dark brutalist
│   │       ├── ThemeLuxe.tsx       # Luxury/premium
│   │       ├── ThemeCyber.tsx      # Retro-futuristic
│   │       ├── ThemeEditorial.tsx  # Editorial/magazine
│   │       └── ThemeAurora.tsx     # Aurora gradient
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
└── hooks/                  # Custom React hooks
```

---

## Landing Page Themes

The landing page includes **5 distinct visual themes** with a floating switcher at the bottom of the screen:

| # | Name | Style | Fonts |
|---|---|---|---|
| 1 | **NOIR** | Dark brutalism, yellow accents | DM Serif Display + IBM Plex Mono |
| 2 | **LUXE** | European luxury, gold ornaments | Cormorant Garamond + Lato |
| 3 | **CYBER** | Retro-futuristic, cyan glow | Exo 2 + Space Mono |
| 4 | **EDGE** | Magazine editorial, crimson | Playfair Display + Libre Baskerville |
| 5 | **AURORA** | Aurora gradients, glassmorphism | Plus Jakarta Sans |

---

## Development

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# Add a shadcn component
npx shadcn@latest add <component-name>
```

---

## Organized By

**BEST Graz** (Board of European Students of Technology)
In partnership with **Graz University of Technology (TU Graz)**

- Website: [bestgraz.org](https://bestgraz.org)
- Event: [beWANTED](https://bestgraz.org/bewanted/)
- Contact: bewanted@bestgraz.org
