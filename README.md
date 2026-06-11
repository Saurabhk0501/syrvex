# Syrvex — Official Website

**"Build beyond limits."**

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- React 18

---

## Quick Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your WhatsApp number
Search for `+919529085991` in these files and replace with your actual number (country code + number, no spaces or +):
- `components/Navbar.js`
- `components/Hero.js`
- `components/Portfolio.js`
- `components/Contact.js`
- `components/Footer.js`
- `components/WhatsAppFloat.js`

Example: If your number is +91 98765 43210, use `919876543210`

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Deploy on Vercel (Free)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial Syrvex website"
git remote add origin https://github.com/YOUR_USERNAME/syrvex.git
git push -u origin main
```

### Step 2: Deploy
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "New Project" → Import your `syrvex` repo
3. Click "Deploy" — done in ~2 minutes!

### Step 3: Connect your domain
1. Buy `syrvex.com` on Namecheap
2. In Vercel: Project Settings → Domains → Add `syrvex.com`
3. In Namecheap: Update DNS to Vercel's nameservers
4. SSL is automatic and free ✅

---

## Customization Checklist

- [ ] Replace WhatsApp number everywhere
- [ ] Update email in `Footer.js` (hello@syrvex.co.in → your email)
- [ ] Add real portfolio projects in `Portfolio.js`
- [ ] Update stats in `Hero.js` (projects, years, etc.)
- [ ] Add real project screenshots/thumbnails
- [ ] Update meta tags in `app/layout.js`

---

## Project Structure

```
syrvex/
├── app/
│   ├── layout.js        # Root layout + SEO meta
│   ├── page.js          # Main page (combines all sections)
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.js        # Sticky nav with mobile menu
│   ├── Hero.js          # Hero section with rotating text
│   ├── Services.js      # 6 service cards
│   ├── Portfolio.js     # Filterable portfolio grid
│   ├── Process.js       # 4-step process
│   ├── Contact.js       # Contact form + WhatsApp CTA
│   ├── Footer.js        # Footer with links
│   └── WhatsAppFloat.js # Floating WhatsApp button
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Brand Colors (Syrvex)

| Name | Hex |
|------|-----|
| Syrvex Purple | `#534AB7` |
| Purple Light | `#7F77DD` |
| Purple Pale | `#AFA9EC` |
| Deep Space | `#0D0D1A` |
| Teal | `#1D9E75` |

---

Built with ❤️ by Saurabh — Syrvex
