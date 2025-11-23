<template>
  <div class="app-layout" :class="themeClass">
    <!-- Page Loader -->
    <PageLoader/>

    <!-- Navigation Header -->
    <header class="site-header">
      <div class="container">
        <nav class="nav">
          <NuxtLink to="/" class="logo">
            <span class="logo-text">Let's Code It</span>
          </NuxtLink>

          <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Główna</NuxtLink>
            <NuxtLink to="/cv" class="nav-link">CV</NuxtLink>
            <NuxtLink to="/projekty" class="nav-link">Projekty</NuxtLink>
            <NuxtLink to="/kontakt" class="nav-link">Kontakt</NuxtLink>
          </div>
        </nav>
      </div>
    </header>

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

// Route-based theming
const route = useRoute()
const themeClass = computed(() => {
  const path = route.path

  if (path === '/') return 'theme-yellow'
  if (path === '/cv') return 'theme-blue'
  if (path === '/projekty') return 'theme-red'
  if (path === '/kontakt') return 'theme-green'

  return 'theme-yellow' // default
})

// Page title management
const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/': "Let's Code It! - Karol Sójka",
    '/cv': 'Moje CV - Karol Sójka',
    '/projekty': 'Projekty - Karol Sójka',
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
      content: '/images/opengraph.png'
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
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
}

.logo {
  font-size: var(--font-lg);
  font-weight: 800;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.03em;
  transition: all 0.2s var(--ease);
  position: relative;
}

.logo-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.3s var(--ease);
}

.logo:hover {
  color: var(--color-accent);
}

.logo:hover::after {
  width: 100%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s var(--ease);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.2s var(--ease);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
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
  .nav {
    padding: 1rem 0;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: var(--font-xs);
  }

  .site-main {
    padding-top: 70px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
