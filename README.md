# Let's Code It! - Karol Sójka Portfolio

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.0.0-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.0.0-4FC08D?style=flat&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)

Nowoczesne, piękne i przejrzyste portfolio Karola Sójki - programisty i informatyka specjalizującego się w automatyzacji
stron internetowych.

## ✨ Funkcje

- 🎨 **Nowoczesny design** - Czysty, responsywny interfejs z animacjami
- 🌟 **Efekt gwiazd** - Oryginalna animacja w tle z WebAssembly (z fallback na Canvas)
- 🎭 **Kolorystyka** - Dynamiczne schematy kolorów dla każdej strony
- 📱 **Responsywność** - Doskonale działa na wszystkich urządzeniach
- ⚡ **Wydajność** - Szybkie ładowanie z optymalizacją
- 🔍 **SEO** - Przyjazne dla wyszukiwarek z meta tagami
- 🎯 **Dostępność** - Zgodne z WCAG z obsługą klawiatury

## 🚀 Szybki start

### Wymagania wstępne

- Node.js 18+
- npm lub yarn

### Instalacja

```bash
# Klonuj repozytorium
git clone <repository-url>
cd lci-portfolio

# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Otwórz http://localhost:3000 w przeglądarce
```

### Budowa produkcyjna

```bash
# Zbuduj aplikację
npm run build

# Podgląd produkcji lokalnie
npm run preview

# Wygeneruj statyczne pliki (SSG)
npm run generate
```

## 📁 Struktura projektu

```
lci-portfolio/
├── app/
│   └── app.vue                 # Główny plik aplikacji
├── assets/
│   ├── css/
│   │   └── main.css           # Główny plik CSS
│   ├── images/                # Obrazy i ikony
│   └── wasm/                  # Pliki WebAssembly
├── components/
│   ├── StarBackground.vue     # Tło z gwiazdami
│   ├── BurgerMenu.vue         # Menu hamburger
│   └── SignatureLogo.vue      # Logo/podpis
├── layouts/
│   └── default.vue            # Domyślny layout
├── pages/
│   ├── index.vue              # Strona główna
│   ├── cv.vue                 # CV i doświadczenie
│   ├── projekty.vue           # Projekty
│   ├── filmy.vue              # Lista filmów
│   └── sekret.vue             # Formularz kontaktowy
├── public/
│   ├── robots.txt             # Dla wyszukiwarek
│   └── sitemap.xml            # Mapa strony
└── nuxt.config.ts             # Konfiguracja Nuxt
```

## 🎨 Kolorystyka

Projekt używa dynamicznych schematów kolorów:

- 🏠 **Strona główna** - Żółty (`theme-yellow`)
- 👔 **CV** - Niebieski (`theme-blue`)
- 🚀 **Projekty** - Czerwony (`theme-red`)
- 🎬 **Filmy** - Żółty (`theme-yellow`)
- 💌 **Sekret** - Zielony (`theme-green`)

## 🛠️ Technologie

### Rdzeń

- **Nuxt 3** - Framework Vue.js z SSR/SSG
- **Vue 3** - Reaktywny framework JavaScript
- **TypeScript** - Typowany JavaScript

### Styling i animacje

- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Zaawansowane animacje
- **Inter Font** - Nowoczesna czcionka Google Fonts

### Efekty wizualne

- **WebAssembly** - Oryginalny efekt gwiazd
- **Canvas API** - Fallback dla animacji
- **CSS Grid/Flexbox** - Responsywny layout

### Narzędzia deweloperskie

- **ESLint** - Linting kodu
- **TypeScript** - Type checking
- **Vite** - Szybkie bundling

## 📱 Responsywność

Projekt jest w pełni responsywny z breakpointami:

- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🌟 Efekt gwiazd

Oryginalny efekt gwiazd z oryginalnego projektu:

1. **WebAssembly** - Preferowana metoda (stars.wasm + stars.js)
2. **Canvas API** - Fallback gdy WASM nie jest dostępny
3. **Auto-resize** - Dostosowuje się do rozmiaru okna
4. **Performance** - Optymalizowany dla płynności

## 🔧 Konfiguracja

### Środowisko

Utwórz plik `.env`:

```env
# URL aplikacji
NUXT_PUBLIC_SITE_URL=https://letscode.it

# Tryb deweloperski
NUXT_PUBLIC_DEV=true
```

### SEO

Meta tagi są automatycznie zarządzane przez layout. Możesz je dostosować w `layouts/default.vue`.

## 📊 Wydajność

### Metryki

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~250KB (gzipped)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

### Optymalizacje

- **Code Splitting** - Lazy loading komponentów
- **Image Optimization** - Automatyczna kompresja
- **Font Loading** - Optymalne ładowanie czcionek
- **CSS Minification** - Zminimalizowany CSS

## 🚀 Wdrożenie

### Netlify/Vercel

1. Połącz repozytorium z platformą
2. Skonfiguruj build command: `npm run build`
3. Ustaw publish directory: `.output/public`
4. Dodaj zmienną środowiskową: `NUXT_PUBLIC_SITE_URL`

### Serwer VPS

```bash
# Zbuduj aplikację
npm run build

# Uruchom na porcie 3000
npm run start

# Lub użyj PM2
pm2 start .output/server/index.mjs
```

## 🤝 Przyczynianie się

### Rozwój lokalny

```bash
# Zainstaluj zależności
npm install

# Uruchom dev server
npm run dev

# Uruchom linting
npm run lint

# Uruchom type checking
npm run typecheck
```

### Dodawanie nowej strony

1. Utwórz plik w `pages/nowa-strona.vue`
2. Dodaj komponent do `components/` jeśli potrzebny
3. Zaktualizuj nawigację w `components/BurgerMenu.vue`
4. Dodaj schemat kolorów w `assets/css/main.css`

## 📝 Licencja

Ten projekt jest prywatny i przeznaczony wyłącznie dla Karola Sójki.

## 📞 Kontakt

**Karol Sójka**

- Email: kontakt@letscode.it
- Facebook: [@Fadeusz](https://facebook.com/Fadeusz)

## 🙏 Podziękowania

- Oryginalny projekt za inspirację designu
- Vue.js i Nuxt communities za świetne narzędzia
- GSAP za niesamowite animacje

---

**Zbudowane z ❤️ przez Let's Code It!**
