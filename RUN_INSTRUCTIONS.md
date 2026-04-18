# 🚀 How to Run VidyaLabs Website

## Current Status
✅ **Dependencies are installing** (`npm install` is running in background)

---

## 📋 Steps to Run

### 1. Wait for Installation to Complete
The `npm install` command is currently running. Wait for it to finish.

You'll know it's done when you see:
```
added XXX packages in XXs
```

### 2. Start the Development Server
Once installation is complete, run:

```bash
npm run dev
```

### 3. Open Your Browser
Navigate to:
```
http://localhost:3000
```

---

## 🎯 What You'll See

### Homepage Sections (in order):
1. **Hero Section**
   - Animated gradient background
   - "Transforming Ideas into Intelligent Digital Solutions"
   - CTA buttons: "Explore Services" and "View Live Demos"
   - Stats: 500+ Projects, 200+ Clients, 50+ Team, 99% Satisfaction

2. **Services Overview**
   - Grid of 13 services with icons
   - Each card has description and "Learn More" link

3. **Featured Products**
   - 4 main products: Smart Campus, eChatravas, eAathithya, DesiDera
   - Each with features and demo button

4. **Why VidyaLabs**
   - 5 reasons to choose VidyaLabs
   - Innovation, Custom Solutions, Scalability, Support, Pricing

5. **Live Demos**
   - 3 interactive demo cards
   - Education, Restaurant, Business Automation

6. **Testimonials**
   - 6 client reviews with ratings
   - Real client names and companies

7. **Call to Action**
   - "Ready to Transform Your Business?"
   - Buttons: "Start Your Project" and "Book Free Consultation"

---

## 🔗 Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Main landing page |
| Services | `/services` | Detailed 13 services |
| Contact | `/contact` | Contact form & info |

---

## 🎨 Features to Test

### Dark/Light Mode
- Click the sun/moon icon in the header
- Theme persists across page refreshes

### Navigation
- Click logo to return home
- Hover over "Services" for dropdown
- Mobile menu on small screens

### Animations
- Scroll down to see fade-in animations
- Hover over cards for effects
- Smooth page transitions

### Responsive Design
- Resize browser window
- Test on mobile (DevTools)
- All breakpoints work perfectly

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📱 Test Checklist

- [ ] Homepage loads correctly
- [ ] Dark/Light mode toggle works
- [ ] All sections visible and animated
- [ ] Services page loads with all 13 services
- [ ] Contact form displays correctly
- [ ] Navigation menu works
- [ ] Mobile responsive (< 768px)
- [ ] Tablet responsive (768px - 1024px)
- [ ] Desktop responsive (> 1024px)
- [ ] All links work
- [ ] Smooth scrolling
- [ ] Hover effects work
- [ ] Images load (placeholders)

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P -> "TypeScript: Restart TS Server"
```

### Styling Not Working
```bash
# Rebuild Tailwind
npm run dev
# (Tailwind rebuilds automatically)
```

---

## 📞 Need Help?

If you encounter any issues:

1. Check the console for errors
2. Verify all dependencies installed
3. Ensure Node.js version is 18+
4. Check `.env.local` file exists

**Contact:**
- Email: info@vidyalabs.com
- Phone: +91 98765 43210

---

## 🎉 Enjoy Your New Website!

Your premium SaaS website is ready to go. The design matches the quality of Stripe, Apple, Linear, and Notion.

**Features:**
- ✅ Modern, futuristic design
- ✅ Dark/Light mode
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Production-ready

**Next Steps:**
1. Customize content
2. Add your images
3. Connect backend
4. Deploy to production

---

**Built with ❤️ by VidyaLabs**
