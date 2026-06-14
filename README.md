# exevolv.io - Portfolio Website

A beautiful, professional, and SEO-friendly portfolio website for **exevolv.io**, a tech company specializing in innovative browser extensions and mobile applications.

![exevolv.io](https://exevolv.io/og-image.png)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: System-aware dark mode with manual toggle
- **SEO Optimized**: Complete meta tags, Open Graph, Schema.org markup, sitemap, and robots.txt
- **Fast Performance**: Static site generation for optimal loading speeds
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Cookie Consent**: GDPR-compliant cookie consent banner

## 📁 Project Structure

```
exevolv.io/
├── public/
│   ├── manifest.json
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── cookie-policy/
│   │   ├── docs/
│   │   ├── faqs/
│   │   ├── privacy-policy/
│   │   ├── products/
│   │   │   ├── [slug]/
│   │   │   │   ├── documentation/
│   │   │   │   ├── faqs/
│   │   │   │   ├── privacy-policy/
│   │   │   │   └── terms-of-service/
│   │   │   └── page.tsx
│   │   ├── refund-policy/
│   │   ├── terms-of-service/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── CookieConsent.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── ui/
│   │       ├── Breadcrumbs.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── ProductCard.tsx
│   │       ├── StatCard.tsx
│   │       ├── StoreButtons.tsx
│   │       └── TestimonialCard.tsx
│   └── lib/
│       ├── products.ts
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Poppins (Google Fonts)

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#00C853` | Primary buttons, links, accents |
| Primary Light | `#4CAF50` | Hover states, secondary elements |
| Primary Pale | `#81C784` | Backgrounds, subtle accents |
| Dark | `#212121` | Text, dark backgrounds |
| White | `#FFFFFF` | Backgrounds, light text |

## 📦 Products

This website showcases three innovative products:

1. **ProxyConnector Pro** - Chrome extension for filtering IP addresses with advanced rules
2. **QuizMaster AI** - AI-powered quiz generator for educators
3. **TaleemSpot Notes** - Student notes and learning materials platform

## 🏃 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/exevolv/exevolv.io.git
cd exevolv.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

### Static Export

To generate a static site:

```bash
npm run build
```

The static files will be in the `out` directory.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site URL (update for production)
NEXT_PUBLIC_SITE_URL=https://exevolv.io

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact form endpoint (optional)
NEXT_PUBLIC_CONTACT_API=https://api.exevolv.io/contact
```

### Customization

- **Products**: Edit `src/lib/products.ts` to add or modify products
- **Theme**: Customize colors in `tailwind.config.ts`
- **Content**: Update page content in respective page files
- **SEO**: Modify metadata in `src/app/layout.tsx`

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, stats, products |
| Products | `/products` | All products listing |
| Product Detail | `/products/[slug]` | Individual product page |
| About | `/about` | Company information |
| Blog | `/blog` | Blog posts and updates |
| Documentation | `/docs` | Developer documentation |
| FAQs | `/faqs` | Frequently asked questions |
| Contact | `/contact` | Contact form |
| Privacy Policy | `/privacy-policy` | Privacy policy |
| Terms of Service | `/terms-of-service` | Terms and conditions |
| Cookie Policy | `/cookie-policy` | Cookie usage policy |
| Refund Policy | `/refund-policy` | Refund and cancellation |

## 🔍 SEO Features

- ✅ Meta tags and Open Graph
- ✅ Twitter Cards
- ✅ Schema.org structured data
- ✅ Dynamic sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML
- ✅ Accessible images with alt text

## 🌙 Dark Mode

The website supports automatic dark mode based on system preferences and includes a manual toggle in the navigation bar. Dark mode preferences are persisted in localStorage.

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

- **Website**: [exevolv.io](https://exevolv.io)
- **Email**: hello@exevolv.io
- **Twitter**: [@exevolv](https://twitter.com/exevolv)
- **GitHub**: [github.com/exevolv](https://github.com/exevolv)

---

Built with ❤️ by the exevolv.io team
