# IDMC — Site vitrine corporate

> International Development Management Construction

Site web corporate premium développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# 3. Build de production
npm run build
# → génère le dossier /out (export statique)
```

---

## 📁 Structure du projet

```
src/
├── lib/
│   └── constants.ts          ← ⭐ TOUTES les données modifiables
├── app/
│   ├── layout.tsx            ← Layout global + SEO
│   ├── page.tsx              ← Page d'accueil
│   ├── a-propos/page.tsx
│   ├── services/page.tsx
│   ├── realisations/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts            ← Sitemap automatique
│   └── not-found.tsx         ← Page 404
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── sections/
    │   ├── HeroSection.tsx
    │   ├── AboutStrip.tsx
    │   ├── ServicesGrid.tsx
    │   ├── WhyIDMC.tsx
    │   ├── StatsSection.tsx
    │   ├── ProjectsPreview.tsx
    │   └── CTASection.tsx
    └── ui/
        ├── SectionTitle.tsx
        ├── ServiceCard.tsx
        ├── FeatureCard.tsx
        ├── ProjectCard.tsx
        ├── ContactForm.tsx
        ├── WhatsAppButton.tsx
        └── PageHero.tsx
```

---

## ✏️ Personnalisation

### Tout modifier dans `src/lib/constants.ts`

| Ce que vous voulez changer | Variable à modifier |
|---|---|
| Numéro WhatsApp | `COMPANY.whatsappNumber` |
| Email de contact | `COMPANY.email` |
| Téléphone | `COMPANY.phone` |
| Adresse | `COMPANY.address` |
| Message WhatsApp pré-rempli | `COMPANY.whatsappMessage` |
| Services (titres, descriptions, points) | `SERVICES[]` |
| Projets / réalisations | `PROJECTS[]` |
| Arguments "Pourquoi IDMC" | `WHY_IDMC[]` |
| Chiffres clés | `STATS[]` |

### Couleurs — `tailwind.config.ts` + `globals.css`

```css
/* Dans globals.css */
--gold-500: #c49a2e;   /* Couleur accent or */

/* Couleur navy principale : #102a43 */
/* Utilisée directement en style inline */
```

### SEO par page

Chaque `page.tsx` contient son propre bloc :
```ts
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
```

---

## ☁️ Déploiement Cloudflare Pages

1. Pousser le code sur GitHub / GitLab
2. Cloudflare Pages → **Create a project** → connecter le repo
3. Paramètres de build :
   - **Framework preset** : Next.js (Static HTML Export)
   - **Build command** : `npm run build`
   - **Build output directory** : `out`
   - **Node.js version** : `18`
4. Cliquer **Save and Deploy**

### Déploiement Netlify

Même principe :
- **Build command** : `npm run build`
- **Publish directory** : `out`

---

## 🔗 Connecter le formulaire à un backend

Dans `src/components/ui/ContactForm.tsx`, remplacez la simulation (ligne ~38) par votre appel API :

```ts
// Option 1 — API Route Next.js
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
})

// Option 2 — Formspree
const res = await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
})

// Option 3 — Resend / EmailJS / etc.
```

---

## 📱 WhatsApp Business

Numéro à modifier dans `src/lib/constants.ts` :
```ts
whatsappNumber: '22500000000', // Sans +, espaces ni tirets
```

Le bouton flottant apparaît sur toutes les pages et s'anime au survol.
