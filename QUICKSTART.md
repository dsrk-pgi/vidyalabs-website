# VidyaLabs Website - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies (Already Running)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

---

## 📋 What's Included

### ✅ Pages Created
- **Homepage** - Hero, Services, Products, Why VidyaLabs, Live Demos, Testimonials, CTA
- **Services** - Detailed 13 services with use cases, technologies, and benefits
- **Contact** - Contact form with business information
- **More pages ready to be added**: Products, About, Support, Blog, Auth, Admin

### ✅ Components Built
- **Layout**: Header with navigation, Footer with links
- **Homepage Sections**: 
  - Hero with animated gradients
  - Services grid (13 services)
  - Featured Products (4 products)
  - Why VidyaLabs (5 reasons)
  - Live Demos (3 demos)
  - Testimonials (6 reviews)
  - Call to Action

### ✅ Features Implemented
- 🎨 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Glassmorphism effects
- 🚀 SEO optimized
- ⚡ Fast performance
- 🔤 Premium typography (Inter/Poppins)

---

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Secondary**: Purple (#a855f7)
- **Accent**: Pink
- **Gradients**: Blue → Purple → Pink

### Typography
- **Headings**: Poppins (Display font)
- **Body**: Inter (Sans-serif)

### Components
- **Buttons**: `btn-primary`, `btn-secondary`
- **Cards**: `glass-card` (glassmorphism effect)
- **Text**: `gradient-text` (gradient text effect)
- **Layout**: `section-padding`, `container-custom`

---

## 📁 Project Structure

```
J:/VidyaLabs1/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & utilities
│   ├── services/page.tsx   # Services page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── ThemeProvider.tsx   # Dark/Light mode provider
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── home/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── FeaturedProducts.tsx
│       ├── WhyVidyaLabs.tsx
│       ├── LiveDemos.tsx
│       ├── Testimonials.tsx
│       └── CallToAction.tsx
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── .env.local              # Environment variables
```

---

## 🛠️ Next Steps

### To Add More Pages:
1. Create folder in `app/` directory (e.g., `app/products/`)
2. Add `page.tsx` file
3. Build your page using existing components

### To Customize:
1. **Colors**: Edit `tailwind.config.ts`
2. **Fonts**: Update in `app/layout.tsx`
3. **Content**: Modify component files
4. **Styles**: Add to `app/globals.css`

### To Deploy:
```bash
npm run build
npm start
```

Or deploy to Vercel:
1. Push to GitHub
2. Import in Vercel
3. Deploy!

---

## 📞 Support

For questions or issues:
- Email: info@vidyalabs.com
- Phone: +91 98765 43210

---

## 🎯 Services Offered

1. **Software Development** - Custom solutions
2. **Cloud Services** - AWS, Azure, GCP
3. **Industry Solutions** - Education, Healthcare, Retail
4. **Niche Ecosystems** - Hostel, Restaurant management
5. **Security** - Blockchain, Cybersecurity
6. **AI & Data Science** - ML, Analytics
7. **Networking** - Infrastructure, Security
8. **Automation** - RPA, Workflows
9. **Finance** - Bookkeeping, Accounting
10. **E-Learning** - LMS, Online courses
11. **Websites** - Modern, SEO-optimized
12. **Mobile Apps** - iOS, Android
13. **Mentorship** - Training, Skill development

---

## 🏆 Featured Products

- **Smart Campus System** - Complete campus management
- **eChatravas** - Hostel management
- **eAathithya** - Restaurant POS
- **DesiDera** - E-commerce platform

---

**Built with ❤️ by VidyaLabs**
