# COIMMA Website - Complete Pages Guide

## 🌐 All 5 Pages Overview

---

## 1️⃣ HOME PAGE
**URL/Route:** `home` (default)
**File:** `src/components/pages/HomePage/HomePage.jsx`
**Config:** `src/config/content.config.js`

### What It Shows:
- Cinematic hero with "LÍDER ABSOLUTA NA AMÉRICA LATINA"
- 70/30 market split visualization
- Awards and statistics
- Legacy story preview
- Product showcase (3 featured products)
- Contact form section

### Navigation:
Click LOGO to return here

---

## 2️⃣ PRODUCTS PAGE (A Máquina)
**URL/Route:** `products`
**File:** `src/components/pages/ProductsPage/ProductsPage.jsx`
**Config:** `src/config/products.config.js`

### What It Shows:
**Toggle Switcher at Top:**
- **Pecuária (70%)** - 30+ products in 6 categories
- **Industrial (30%)** - 6+ products in 2 categories

### Pecuária Products:
1. **Balanças Eletrônicas** (4 products)
2. **Troncos de Contenção** (4 products)
3. **Balanças Mecânicas** (2 products)
4. **Pequenos Animais** (1 product)
5. **Equipamentos Especializados** (1 product)

### Industrial Products:
1. **Balanças Rodoviárias** (3 products)
2. **Balanças de Fluxo** (2 products)

### Each Product Shows:
- Image (grayscale, color on hover)
- Category badge
- Price tag
- Name and tagline
- Description
- Features list (expandable)
- Technical specs (expandable)
- "Solicitar Orçamento" button

### Navigation:
Click "A Máquina" in nav bar

---

## 3️⃣ LEGACY PAGE (O Legado)
**URL/Route:** `legacy`
**File:** `src/components/pages/LegacyPage/LegacyPage.jsx`
**Config:** `src/config/pages.config.js` → `legacy`

### What It Shows:
1. **Hero:** "De Uma Oficina de Carroças À Liderança Continental"
2. **Origin Story:** 1951 founding with vintage photos
3. **Timeline:** 6 major milestones (1951-2025)
4. **Infrastructure:** 45.000m² factory, 20+ trucks, stats
5. **Values:** 4 company pillars with icons

### Navigation:
Click "O Legado" in nav bar

---

## 4️⃣ SERVICES PAGE (Suporte Tático)
**URL/Route:** `services`
**File:** `src/components/pages/ServicesPage/ServicesPage.jsx`
**Config:** `src/config/pages.config.js` → `services` + `products.config.js` → `services`

### What It Shows:
1. **Hero:** "Sua Operação Não Pode Parar"
2. **Commitment Stats:** 48h response, 95% resolution, 24/7, 100% original
3. **Services Grid:** 4 service cards
   - Calibração (from R$ 800)
   - Manutenção (from R$ 1.200/year)
   - Assistência (from R$ 350)
   - Treinamento (R$ 2.500)
4. **Certifications:** INMETRO, ISO 9001, etc.
5. **Support Channels:** 4 contact methods
6. **CTA:** "Precisa de Atendimento Imediato?"

### Navigation:
Click "Suporte" in nav bar

---

## 5️⃣ CONTACT PAGE (Linha Direta)
**URL/Route:** `contact`
**File:** `src/components/pages/ContactPage/ContactPage.jsx`
**Config:** `src/config/pages.config.js` → `contact`

### What It Shows:
1. **Hero:** "Linha Direta - Inicie Seu Projeto"
2. **Units Grid:** 3 locations
   - Dracena, SP (Matriz)
   - Marabá, PA (Filial)
   - Cuiabá, MT (Filial)
3. **Urgent Contacts:** 4 departments
   - Vendas
   - Assistência
   - Financeiro
   - Diretoria
4. **Quote Form:**
   - Personal info (5 fields)
   - Segment selection (4 options)
   - Product dropdown (8 options)
   - Message textarea
   - Submit button
5. **Map Placeholder:** Ready for Google Maps

### Navigation:
Click "Contato" in nav bar OR click "Menu" button (CTA)

---

## 🧭 Navigation System

### How It Works:
- **State-based routing** (no page reloads)
- **Active page** highlighted in red
- **Logo click** → Home
- **Nav items** → Their respective pages
- **Menu/CTA button** → Contact page

### Navigation Bar Structure:
```
[🏠 LOGO]  |  A Máquina  |  O Legado  |  Suporte  |  Contato  |  [MENU]
   ↓              ↓            ↓           ↓           ↓          ↓
  Home       Products      Legacy      Services    Contact    Contact
```

---

## 📝 How to Navigate (User Guide)

1. **Start:** Site opens on Home page
2. **Browse Products:** Click "A Máquina" → Toggle Pecuária/Industrial
3. **Learn History:** Click "O Legado" → See timeline
4. **Check Services:** Click "Suporte" → See support options
5. **Contact:** Click "Contato" or "Menu" → Fill form

---

## 🎯 Key CTAs by Page

### Home:
- "Explorar Linha 2025"
- "Filme Institucional"
- "Ver Soluções Bovinas"
- "Explorar Indústria"

### Products:
- "Solicitar Orçamento Técnico" (each product)
- "Falar com Especialista"

### Legacy:
- (Informational, no primary CTA)

### Services:
- "Falar com Suporte"
- "Solicitar Serviço" (each service)
- "Ligar Agora: 0800 11 2555"
- "WhatsApp Plantão"

### Contact:
- "Enviar Solicitação" (form submit)

---

## 🔄 Page Flow Recommendations

### For New Visitors:
1. **Home** → Understand authority and scale
2. **Products** → See what's available
3. **Contact** → Request quote

### For Existing Customers:
1. **Services** → Check support options
2. **Contact** → Get assistance

### For Researchers:
1. **Legacy** → Understand company history
2. **Products** → Compare specifications
3. **Contact** → Ask technical questions

---

## 📊 Content Stats by Page

| Page     | Sections | Products | Forms | CTAs | Images |
|----------|----------|----------|-------|------|--------|
| Home     | 6        | 3        | 1     | 4    | 5+     |
| Products | 2        | 30+      | 0     | 30+  | 30+    |
| Legacy   | 4        | 0        | 0     | 0    | 5+     |
| Services | 4        | 4        | 0     | 8    | 4      |
| Contact  | 4        | 0        | 1     | 1    | 3      |

---

## 🎨 Visual Hierarchy

### Dark Premium Theme Across All Pages:
1. **Black backgrounds** (#050505, #0a0a0a)
2. **Gold accents** (#D4AF37) - Legacy, awards
3. **Red accents** (#D90000) - Power, CTAs
4. **Grayscale images** - Premium feel
5. **Industrial typography** - Anton font
6. **Legacy typography** - Playfair Display

---

## 💡 Pro Tips

### For Content Updates:
- **Change product info** → `products.config.js`
- **Change page content** → `pages.config.js`
- **Change home content** → `content.config.js`
- **Change theme** → `theme.config.js`

### For Navigation Updates:
- **Add page** → Update `App.jsx` pages object
- **Change nav items** → Update `App.jsx` navItems array
- **Change CTA text** → Update `content.config.js` → `navigation.cta`

---

## 🚀 Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**All 5 pages are fully functional, atomic, and zero-hardcoded!** 🎉
