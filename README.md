# DevNestStudio

A production-ready, full-stack freelance software agency website built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN UI, and Supabase.

## Features

- **10+ Marketing Pages**: Home, Services, Portfolio, Case Studies, Pricing, Blog, Contact, Free Consultation, Cost Calculator, Post Requirement, About
- **7 Service Pages**: Website Dev, E-commerce, AI Agents, Automation, Mobile Apps, Dashboards, APIs
- **Authentication**: Email/Password + Google OAuth via Supabase Auth
- **Client Dashboard**: Projects, Messages, Invoices, Documents
- **Admin Dashboard**: Leads, Projects, Blog, Testimonials, Services, Requirements management
- **SEO Optimized**: Dynamic metadata, Open Graph, Twitter Cards, Sitemap, Robots, Structured Data (JSON-LD)
- **Dark/Light Mode**: Full theme support with next-themes
- **Responsive**: Mobile-first design with premium UI/UX
- **Database**: Complete Supabase schema with Row Level Security (RLS)

## Tech Stack

- Next.js 15 (App Router, Server Components)
- React 19
- TypeScript
- Tailwind CSS 3.4
- ShadCN UI / Radix UI
- Supabase (Auth, Database, Storage)
- Framer Motion (Animations)
- Zod (Validation)
- React Hook Form

## Setup

### 1. Clone & Install

```bash
git clone <repo-url>
cd freelance-agency
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Run `supabase/migrations/001_initial_schema.sql`
4. Run `supabase/migrations/002_seed_data.sql`
5. Enable Google OAuth in Authentication > Providers

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
app/
  (auth)/          # Login, Register, OAuth Callback
  (marketing)/     # Public pages
  (dashboard)/     # Client & Admin dashboards
  api/             # API routes
  layout.tsx       # Root layout
  page.tsx         # Home page
  sitemap.ts       # Dynamic sitemap
  robots.ts        # Robots.txt
components/
  ui/              # ShadCN UI components
  sections/        # Home page sections
  layout/          # Navbar, Footer, Layouts
  forms/           # Form components
  seo/             # Structured data
  dashboard/       # Dashboard components
lib/
  supabase/        # Supabase clients
  validations/     # Zod schemas
  utils.ts         # Utilities
types/             # TypeScript types
supabase/
  migrations/      # Database schema & seed
public/
  images/          # Static images
```

## Database Schema

- **users**: Extended auth users with roles
- **leads**: Contact form submissions
- **projects**: Client projects with status tracking
- **project_files**: File uploads per project
- **messages**: Client communication
- **testimonials**: Client reviews
- **services**: Service offerings
- **blog_posts**: Blog articles
- **categories**: Blog categories
- **portfolio_items**: Portfolio projects
- **case_studies**: Case study content
- **requirements**: Posted requirements
- **invoices**: Client invoices
- **pricing_packages**: Service packages

## Security

- Row Level Security (RLS) on all tables
- Form validation with Zod
- Secure API routes
- Auth middleware for protected routes
- XSS protection headers

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

Add environment variables in Vercel dashboard.

## License

MIT
