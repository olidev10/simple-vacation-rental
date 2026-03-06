# Botelho Beach House (Place To Be)

Landing page for a seasonal beach-house rental in Itanhaem (Sao Paulo coast), built with Next.js App Router.

## What This Project Includes

- Responsive marketing site with dedicated sections (hero, photos, amenities, nearby places, reservation, reviews)
- Reservation flow that builds a pre-filled WhatsApp message
- Google Reviews integration via Places API
- Internationalization (`fr` and `en`) with `i18next`
- SEO setup (metadata, Open Graph, `sitemap`, `robots`)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- TanStack React Query
- i18next + react-i18next
- Radix UI + Lucide icons

## Requirements

- Node.js 20+
- One package manager: `pnpm` (recommended), `npm`, or `yarn`

## Getting Started

```bash
git clone <your-repo-url>
cd botelho-beach-house
pnpm install
pnpm dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` in the project root:

```env
# Public canonical URL used by metadata/sitemap/robots
NEXT_PUBLIC_SITE_URL=https://botelhobeachhouse.com

# Google Places API key (used by /api/google-reviews)
GOOGLE_PLACES_API_KEY=your_google_api_key

# WhatsApp number for reservation CTA (numbers only, country code included)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Notes:
- `GOOGLE_PLACES_API_KEY` is required for live Google reviews.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` is required for the reservation form CTA.

## Available Scripts

```bash
pnpm dev    # start dev server
pnpm build  # production build
pnpm start  # run production server
pnpm lint   # lint with Next.js ESLint config
```

## API Routes

- `GET /api/google-reviews`
  - Fetches Google Place details + reviews for the configured location.
  - Returns `{ rating, totalReviews, reviews[] }`.

## Project Structure

```text
src/
  app/
    api/
      google-reviews/
    components/
    providers/
    sections/
    layout.tsx
    page.tsx
  hooks/
  i18n/
  lib/
  data/
```

## Build and Run (Production)

```bash
pnpm build
pnpm start
```

## License

Private project (update this section if you intend to publish with an OSS license).
