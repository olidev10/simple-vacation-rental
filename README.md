Header

“Site de locação por temporada em Itanhaém, litoral paulista”

➡️ Seasonal rental website in Itanhaém, São Paulo coast

🏖️ Place To Be

Modern landing page for vacation rentals in Itanhaém – São Paulo

Optimized for conversion, performance, and SEO.

🔗 Visit the website:
https://www.botelhobeachouse.com.br

🎬 Demo

The GIF shows how the website works and how the user interacts with it.

📌 Overview

Place To Be is an institutional landing page created to promote an exclusive beach house in Itanhaém, located on the coast of São Paulo.

The project was built focusing on:

⚡ High performance using App Router

🌍 Internationalization (Portuguese / English)

📱 Fully responsive design

🔎 Advanced SEO

💬 Conversion through WhatsApp

🎨 Modern UI with smooth animations

🧠 Tech Stack
Category	Technologies
Framework	Next.js 16
UI Library	React 19
Styling	TailwindCSS v4
Typing	TypeScript 5.9
Components	Radix UI, Lucide React, Tabler Icons
Animations	Motion
Data Fetching	TanStack React Query
Internationalization	i18next + react-i18next
Dates	date-fns + react-day-picker
Images	Cloudinary
WebGL	OGL
Code Quality	ESLint + Prettier
✨ Features
🏝 Hero Section

Full-screen banner

Integrated booking widget

Direct CTA to WhatsApp

🖼 Responsive Gallery

Adaptive layout

Automatic image optimization

Integrated with Cloudinary

🏡 Amenities

Swimming pool

Barbecue grill

Wi-Fi

Garage

Fully equipped kitchen

📍 Tourist Attractions

Nearby places include:

Cama de Anchieta

Local beaches

Downtown area

📅 Reservation System

Date selection

Guest control

Automatic message sent to WhatsApp

Integration with Airbnb calendar (iCal)

⭐ Reviews

Google Reviews (via Google API)

Airbnb reviews (static)

Rating filters

🌍 Internationalization

Supported languages:

Portuguese 🇧🇷

English 🇺🇸

🔎 SEO

Dynamic metadata

Open Graph

Twitter Cards

sitemap.xml

robots.txt

🏗 Architecture

The project contains:

API routes → used to fetch Google Reviews

Reusable UI components

Sections → Hero, photos, amenities, places, etc.

Hooks → like useGoogleReviews

i18n config → translations

Utilities → Airbnb calendar integration

Project structure:

src/
  app/
    api/          -> API routes (Google Reviews)
    components/   -> app components
    providers/    -> global providers
    sections/     -> Hero, Photos, Amenities
🚀 How to Run the Project
Requirements

Node.js 18+

pnpm (recommended)

Install
git clone https://github.com/seu-usuario/botelho-beach-house.git
cd botelho-beach-house
pnpm install
Run development server
pnpm dev

Open:

http://localhost:3000
Production
pnpm build
pnpm start
🔐 Environment Variables

Create a file called:

.env.local

Add:

NEXT_PUBLIC_SITE_URL=https://botelhobeachhouse.com
GOOGLE_PLACES_API_KEY=your_google_api_key_here

Without the API key, Google reviews won't load, but the rest of the site will still work.