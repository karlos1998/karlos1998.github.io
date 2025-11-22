<template>
  <div class="app-layout" :class="themeClass">
    <!-- Navigation Header -->
    <header class="site-header">
      <div class="container">
        <nav class="nav">
          <NuxtLink to="/" class="logo">
            KS
          </NuxtLink>

          <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Główna</NuxtLink>
            <NuxtLink to="/cv" class="nav-link">CV</NuxtLink>
            <NuxtLink to="/projekty" class="nav-link">Projekty</NuxtLink>
            <a href="mailto:kontakt@letscode.it" class="nav-link">Kontakt</a>
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
            {{ new Date().getFullYear() }} Karol Sójka. Wszystkie prawa zastrzeżone.
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

// Route-based theming
const route = useRoute()
const themeClass = computed(() => {
  const path = route.path

  if (path === '/' || path === '/filmy') return 'theme-yellow'
  if (path === '/cv') return 'theme-blue'
  if (path === '/projekty') return 'theme-red'
  if (path === '/sekret') return 'theme-green'

  return 'theme-yellow' // default
})

// Page title management
const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/': "Let's Code It! - Karol Sójka",
    '/cv': 'Moje CV - Karol Sójka',
    '/projekty': 'Projekty - Karol Sójka',
    '/filmy': 'Filmy - Karol Sójka',
    '/sekret': 'Sekret - Karol Sójka'
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
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg) 0;
}

.logo {
  font-size: var(--font-size-xl);
  font-weight: 800;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: var(--transition-fast);
}

.logo:hover {
  color: var(--color-accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-accent);
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
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: var(--space-lg);
}

.footer-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    padding: var(--space-md) 0;
  }

  .nav-links {
    gap: var(--space-md);
  }

  .nav-link {
    font-size: var(--font-size-xs);
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
