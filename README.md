# VidyaLabs - Premium SaaS Website

A modern, futuristic, and premium SaaS-style website for VidyaLabs Software Solutions. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, futuristic UI with glassmorphism effects
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Built-in SEO best practices and meta tags
- **Performance**: Optimized for speed and Lighthouse scores 90+
- **Type-Safe**: Full TypeScript support

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Backend**: Node.js with Express (API routes)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **Email**: Nodemailer

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- MongoDB (local or Atlas)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vidyalabs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy `.env.local` and update with your values:
   ```env
   MONGODB_URI=mongodb://localhost:27017/vidyalabs
   JWT_SECRET=your-secret-key-change-in-production
   NEXT_PUBLIC_API_URL=http://localhost:3000
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   WHATSAPP_API_KEY=your-whatsapp-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vidyalabs-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── services/          # Services page
│   ├── products/          # Products page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── support/           # Support system
│   ├── blog/              # Blog pages
│   ├── auth/              # Authentication pages
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── home/             # Homepage sections
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── types/                # TypeScript types
```

## 🎨 Key Pages

- **Homepage** (`/`): Hero, Services, Products, Testimonials, CTA
- **Services** (`/services`): Detailed service listings with use cases
- **Products** (`/products`): Product showcase with demos
- **About** (`/about`): Company story, team, achievements
- **Team** (`/team`): Meet our team with contact info and vCard download
- **Contact** (`/contact`): Contact form with info
- **Support** (`/support`): Ticket system and FAQ
- **Blog** (`/blog`): Articles and insights
- **Auth** (`/auth/login`, `/auth/signup`): Authentication pages
- **Admin** (`/admin`): Admin dashboard

## 🌟 Features Implemented

### Design
- ✅ Glassmorphism effects
- ✅ Smooth gradients (blue, purple, neon accents)
- ✅ Dark/Light mode toggle
- ✅ Micro-interactions & animations
- ✅ Premium typography (Inter/Poppins)
- ✅ Responsive design

### Functionality
- ✅ Contact/Enquiry form
- ✅ Service showcase
- ✅ Product demos
- ✅ Testimonials
- ✅ Blog structure
- ✅ Support system UI
- ✅ Authentication UI
- ✅ Admin dashboard UI

### Performance
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Image optimization
- ✅ Code splitting

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret for JWT tokens | Yes |
| `NEXT_PUBLIC_API_URL` | Public API URL | Yes |
| `EMAIL_HOST` | SMTP host | No |
| `EMAIL_PORT` | SMTP port | No |
| `EMAIL_USER` | Email username | No |
| `EMAIL_PASSWORD` | Email password | No |
| `WHATSAPP_API_KEY` | WhatsApp API key | No |

## 🎯 Services Offered

1. Software Development
2. Cloud Services
3. Industry-Specific Solutions
4. Niche Software Ecosystems
5. Advanced Tech & Security
6. Data Science & AI
7. Networking Solutions
8. Automation
9. Finance & Bookkeeping
10. E-Learning
11. Websites
12. Custom Apps
13. Mentorship

## 🏆 Products

- **Smart Campus System**: Complete campus management
- **eChatravas**: Hostel management system
- **eAathithya**: Restaurant POS and management
- **DesiDera**: E-commerce platform

## 📧 Contact

- **Email**: info@vidyalabs.com
- **Phone**: +91 98765 43210
- **Location**: Bangalore, India
- **Website**: [vidyalabs.com](https://vidyalabs.com)

## 📄 License

Copyright © 2024 VidyaLabs. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For inquiries, contact info@vidyalabs.com.

---

**Built with ❤️ by VidyaLabs**
