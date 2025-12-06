<template>
  <div class="app-layout" :class="themeClass">
    <!-- Page Loader -->
    <PageLoader/>

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Navigation Header -->
    <header class="site-header" :class="{ 'scrolled': isScrolled, 'minimized': isMinimized }">
      <div class="container">
        <nav class="nav">
          <NuxtLink to="/" class="logo" :class="{ 'logo-compact': isScrolled || isMinimized }">
            <div class="logo-container">
              <div class="logo-icon">
                <span class="bracket">&lt;</span>
                <span class="slash">/</span>
                <span class="bracket">&gt;</span>
              </div>
              <span class="logo-text" :class="{ 'logo-text-hidden': isMinimized }">Let's Code It</span>
            </div>
          </NuxtLink>

          <!-- Mobile hamburger icon -->
          <button class="hamburger" @click="showMobileMenu = !showMobileMenu" aria-label="Menu" v-show="isMobile">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>

          <!-- Desktop nav links -->
          <div class="nav-links" :class="{ 'nav-links-minimized': isMinimized, 'nav-links-mobile-hide': isMobile }">
            <NuxtLink to="/" class="nav-link" :title="isMinimized ? 'Główna' : ''">
              <span v-if="!isMinimized" class="nav-link-text">Główna</span>
              <span v-else class="nav-link-icon">🏠</span>
              <span class="nav-link-indicator"></span>
            </NuxtLink>
            <NuxtLink to="/cv" class="nav-link" :title="isMinimized ? 'CV' : ''">
              <span v-if="!isMinimized" class="nav-link-text">CV</span>
              <span v-else class="nav-link-icon">📄</span>
              <span class="nav-link-indicator"></span>
            </NuxtLink>
            <NuxtLink to="/projekty" class="nav-link" :title="isMinimized ? 'Projekty' : ''">
              <span v-if="!isMinimized" class="nav-link-text">Projekty</span>
              <span v-else class="nav-link-icon">💼</span>
              <span class="nav-link-indicator"></span>
            </NuxtLink>
            <NuxtLink to="/firma" class="nav-link" :title="isMinimized ? 'Firma' : ''">
              <span v-if="!isMinimized" class="nav-link-text">Firma</span>
              <span v-else class="nav-link-icon">📝</span>
              <span class="nav-link-indicator"></span>
            </NuxtLink>
            <NuxtLink to="/kontakt" class="nav-link nav-link-cta" :title="isMinimized ? 'Kontakt' : ''">
              <span v-if="!isMinimized" class="nav-link-text">Kontakt</span>
              <span v-else class="nav-link-icon">✉️</span>
              <span class="nav-link-glow"></span>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <!-- Mobile fullscreen menu -->
    <transition name="mobile-menu-fade">
      <div v-if="showMobileMenu && isMobile" class="mobile-nav-overlay" @click.self="showMobileMenu = false">
        <div class="mobile-nav-inner">
          <NuxtLink to="/" class="mobile-nav-link" @click.native="showMobileMenu = false">🏠 Główna</NuxtLink>
          <NuxtLink to="/cv" class="mobile-nav-link" @click.native="showMobileMenu = false">📄 CV</NuxtLink>
          <NuxtLink to="/projekty" class="mobile-nav-link" @click.native="showMobileMenu = false">💼 Projekty</NuxtLink>
          <NuxtLink to="/firma" class="mobile-nav-link" @click.native="showMobileMenu = false">📝 Firma</NuxtLink>
          <NuxtLink to="/kontakt" class="mobile-nav-link mobile-cta" @click.native="showMobileMenu = false">✉️ Kontakt
          </NuxtLink>
        </div>
      </div>
    </transition>

    <!-- Star Background -->
    <StarBackground/>

    <!-- Main Content -->
    <main class="site-main">
      <slot/>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">
            © {{ currentYear }} Karol Sójka. Wszystkie prawa zastrzeżone.
          </p>
          <div class="footer-links">
            <a href="http://facebook.com/Fadeusz" target="_blank" class="footer-link">Facebook</a>
            <a href="mailto:kontakt@letscode.it" class="footer-link">Email</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Import components
import StarBackground from '~/components/StarBackground.vue'
import PageLoader from '~/components/PageLoader.vue'

// Footer year
const currentYear = new Date().getFullYear()

// Scroll-based navbar effects
const isScrolled = ref(false)
const isMinimized = ref(false)
const scrollProgress = ref(0)
let lastScrollY = 0
let ticking = false
let scrollTimeout: NodeJS.Timeout | null = null

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Update scroll progress (0-100%)
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (currentScrollY / windowHeight) * 100

  // Navbar becomes "scrolled" after 50px
  isScrolled.value = currentScrollY > 50

  // If we're at the top, always show full navbar
  if (currentScrollY < 100) {
    isMinimized.value = false
  }
  // Minimize navbar when scrolling down past threshold
  else if (currentScrollY > 200 && currentScrollY > lastScrollY + 50) {
    // Scrolling down significantly - minimize to floating style
    isMinimized.value = true
  }
  // Expand back when scrolling up
  else if (currentScrollY < lastScrollY - 50) {
    // Scrolling up significantly - expand back
    isMinimized.value = false
  }

  lastScrollY = currentScrollY
  ticking = false
}

const requestScrollUpdate = () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', requestScrollUpdate, {passive: true})
  handleScroll() // Initial call
})

onUnmounted(() => {
  window.removeEventListener('scroll', requestScrollUpdate)
})

// Route-based theming
const route = useRoute()
const themeClass = computed(() => {
  const path = route.path

  if (path === '/') return 'theme-yellow'
  if (path === '/cv') return 'theme-blue'
  if (path === '/projekty') return 'theme-red'
  if (path === '/firma') return 'theme-yellow'
  if (path === '/kontakt') return 'theme-green'

  return 'theme-yellow' // default
})

// Page title management
const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/': "Let's Code It! - Karol Sójka",
    '/cv': 'Moje CV - Karol Sójka',
    '/projekty': 'Projekty - Karol Sójka',
    '/firma': 'Firma - Karol Sójka',
    '/kontakt': 'Kontakt - Karol Sójka'
  }

  return titles[route.path] || "Let's Code It! - Karol Sójka"
})

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: 'Portfolio Karola Sójki - programisty i informatyka. Specjalizuję się w automatyzacji stron internetowych, tworzeniu aplikacji i systemów informatycznych.'
    },
    {
      name: 'keywords',
      content: 'Karol Sójka, programista, informatyk, automatyzacja, aplikacje, systemy informatyczne, portfolio'
    },
    {
      name: 'author',
      content: 'Karol Sójka'
    },
    // Open Graph
    {
      property: 'og:title',
      content: pageTitle
    },
    {
      property: 'og:description',
      content: 'Portfolio Karola Sójki - programisty i informatyka specjalizującego się w nowoczesnych technologiach.'
    },
    {
      property: 'og:image',
      content: '/images/selfie-with-background.png'
    },
    {
      property: 'og:url',
      content: `https://letscode.it${route.path}`
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/favicon.png'
    }
  ]
})

const showMobileMenu = ref(false)
const isMobile = ref(false)
// mobile checker (on mount + on resize)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Scroll Progress Bar */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg,
  var(--color-accent) 0%,
  #f59e0b 50%,
  #fbbf24 100%
  );
  z-index: 1000;
  transition: width 0.1s linear;
  box-shadow: 0 0 20px var(--color-accent),
  0 0 40px rgba(251, 191, 36, 0.3);
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    filter: brightness(1);
  }
  50% {
    opacity: 0.85;
    filter: brightness(1.2);
  }
}

/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
  background: rgba(10, 10, 10, 0.4);
  backdrop-filter: blur(8px) saturate(150%);
  -webkit-backdrop-filter: blur(8px) saturate(150%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.05s,
  top 0.3s cubic-bezier(0.4, 0, 0.2, 1),
  background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
  border-radius 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.05s,
  border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
  padding 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.05s;
  will-change: width, top, background, border-radius;
}

/* Scrolled state */
.site-header.scrolled {
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
  0 0 0 1px rgba(251, 191, 36, 0.1) inset;
}

/* Minimized floating state */
.site-header.minimized {
  top: 20px;
  width: auto;
  max-width: 500px;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-bottom: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 9999px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6),
  0 0 0 1px rgba(251, 191, 36, 0.15) inset,
  0 0 40px rgba(251, 191, 36, 0.1);
  padding: 0 1rem;
}

.site-header.minimized .container {
  padding: 0;
  max-width: none;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header.scrolled .nav {
  padding: 0.875rem 0;
}

.site-header.minimized .nav {
  padding: 0.625rem 0;
  gap: 1rem;
}

/* Logo */
.logo {
  text-decoration: none;
  position: relative;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  transition: gap 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header.minimized .logo-container {
  gap: 0;
}

.logo-icon {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 1.75rem;
  font-weight: 800;
  font-family: 'Courier New', monospace;
  color: var(--color-accent);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.logo-icon .bracket {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-icon .slash {
  color: #fbbf24;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Logo compact state */
.logo.logo-compact .logo-icon {
  font-size: 1.375rem;
  gap: 0.0625rem;
}

.site-header.minimized .logo-icon {
  font-size: 1.25rem;
}

.logo:hover .logo-icon .bracket:first-child {
  transform: translateX(-3px);
}

.logo:hover .logo-icon .bracket:last-child {
  transform: translateX(3px);
}

.logo:hover .logo-icon .slash {
  transform: scale(1.15) rotate(-5deg);
  color: #f59e0b;
}

.logo-text {
  font-size: 1.375rem;
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.03em;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
  width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
  margin 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
}

.logo.logo-compact .logo-text {
  font-size: 1.125rem;
}

.logo-text-hidden {
  opacity: 0;
  max-width: 0;
  margin-left: 0 !important;
}

/* Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links-minimized {
  gap: 0.25rem;
}

.nav-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  position: relative;
  padding: 0.625rem 1.125rem;
  border-radius: 0.625rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-header.minimized .nav-link {
  padding: 0.5rem 0.875rem;
  border-radius: 9999px;
  min-width: 44px;
}

.nav-link-text {
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-icon {
  font-size: 1.25rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link-indicator {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: var(--color-accent);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.site-header.minimized .nav-link-indicator {
  display: none;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.05);
}

.site-header.minimized .nav-link:hover,
.site-header.minimized .nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.08);
  transform: scale(1.05);
}

.nav-link:hover .nav-link-indicator,
.nav-link.router-link-active .nav-link-indicator {
  transform: translateX(-50%) scaleX(1);
}

/* CTA Link */
.nav-link-cta {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%);
  border: 1px solid rgba(251, 191, 36, 0.3);
  color: var(--color-accent);
  font-weight: 600;
  margin-left: 0.5rem;
  position: relative;
}

.site-header.minimized .nav-link-cta {
  margin-left: 0.25rem;
}

.nav-link-cta .nav-link-text {
  position: relative;
  z-index: 2;
}

.nav-link-glow {
  position: absolute;
  inset: 0;
  border-radius: 0.625rem;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.site-header.minimized .nav-link-glow {
  border-radius: 9999px;
}

.nav-link-cta:hover {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.25) 0%, rgba(245, 158, 11, 0.25) 100%);
  border-color: rgba(251, 191, 36, 0.5);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.2),
  0 4px 12px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

.site-header.minimized .nav-link-cta:hover {
  transform: scale(1.08);
}

.nav-link-cta:hover .nav-link-glow {
  opacity: 1;
}

.nav-link-cta.router-link-active {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.3) 100%);
  border-color: var(--color-accent);
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.3),
  0 4px 16px rgba(0, 0, 0, 0.4);
}

/* Main Content */
.site-main {
  flex: 1;
  padding-top: 80px;
  position: relative;
  z-index: 1;
}

/* Footer */
.site-footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: var(--space-xl) 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.footer-text {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: var(--space-lg);
}

.footer-link {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: all 0.2s var(--ease);
}

.footer-link:hover {
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none !important;
  }

  .hamburger {
    display: flex;
  }
  .site-header.minimized {
    top: 10px;
    max-width: calc(100% - 2rem);
    padding: 0 0.75rem;
  }

  .nav {
    padding: 1rem 0;
  }

  .site-header.scrolled .nav {
    padding: 0.75rem 0;
  }

  .site-header.minimized .nav {
    padding: 0.5rem 0;
    gap: 0.5rem;
  }

  .nav-links {
    gap: 0.125rem;
  }

  .nav-links-minimized {
    gap: 0.125rem;
  }

  .nav-link {
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem;
  }

  .site-header.minimized .nav-link {
    padding: 0.5rem 0.5rem;
    min-width: 40px;
  }

  .nav-link-icon {
    font-size: 1.125rem;
  }

  .nav-link-cta {
    margin-left: 0.125rem;
  }

  .site-header.minimized .nav-link-cta {
    margin-left: 0.125rem;
  }

  .logo-text {
    font-size: 1rem;
  }

  .logo.logo-compact .logo-text {
    font-size: 0.875rem;
  }

  .logo-icon {
    font-size: 1.375rem;
  }

  .logo.logo-compact .logo-icon {
    font-size: 1.125rem;
  }

  .site-header.minimized .logo-icon {
    font-size: 1rem;
  }

  .site-main {
    padding-top: 70px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 400px) {
  .nav-link {
    font-size: 0.6875rem;
    padding: 0.5rem 0.375rem;
  }

  .logo-text {
    font-size: 0.875rem;
  }

  .logo-icon {
    font-size: 1.25rem;
  }

  .nav-links {
    gap: 0;
  }

  .nav-link-cta {
    margin-left: 0;
  }
}

/* Extra animations for smoothness */
@media (prefers-reduced-motion: no-preference) {
  .nav-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  .nav-link:hover::before {
    width: 200%;
    height: 200%;
  }
}

/* Hamburger Icon Style */
.hamburger {
  display: none;
  background: none;
  border: none;
  padding: 0.4em;
  flex-direction: column;
  gap: 3.5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1201;
}

.hamburger-bar {
  width: 28px;
  height: 3.2px;
  background: var(--color-accent);
  border-radius: 6px;
  display: block;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
    position: relative;
  }
}

/* Fullscreen overlay mobile menu */
.mobile-nav-overlay {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1d1d1f 40%, #23232b 100%);
  border: 1px solid #35302b;
  box-shadow: 0 3px 24px #0e0e1088;
  z-index: 9999 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInOverlay .25s;
  margin: 0;
  padding: 0;
}
.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  overflow-y: auto;
  max-height: 98vh;
  padding: 1.5rem 0;
}
.mobile-nav-link {
  font-size: 1.15rem;
  font-weight: 600;
  color: #f5f5fa;
  background: transparent;
  border-radius: 0.8em;
  padding: 0.67em 0.7em;
  border: none;
  outline: none;
  transition: background 0.13s, color 0.13s;
  min-width: 136px;
  width: 92%;
  margin: 0 auto;
}
.mobile-nav-link + .mobile-nav-link {
  margin-top: 0.15rem;
}
.mobile-nav-link.mobile-cta {
  color: #f5d580;
  background: rgba(251, 191, 36, 0.14);
  font-weight: 700;
}
.mobile-nav-link:hover, .mobile-nav-link:focus {
  color: #ffd761;
  background: rgba(54, 49, 18, 0.12);
  border-bottom: 2px solid #ffd761;
}
.mobile-nav-link:active {
  opacity: 0.93;
}
.mobile-menu-fade-enter-active {
  transition: all 0.3s cubic-bezier(.4, 0, .2, 1);
}

.mobile-menu-fade-leave-active {
  transition: all 0.3s cubic-bezier(.4, 0, .2, 1);
}

.mobile-menu-fade-enter-from, .mobile-menu-fade-leave-to {
  opacity: 0;
  transform: scale(.97);
}

.mobile-menu-fade-enter-to, .mobile-menu-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
