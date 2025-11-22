<template>
  <div class="layout" :class="themeClass">
    <!-- Star Background -->
    <StarBackground/>

    <!-- Navigation -->
    <BurgerMenu/>

    <!-- Signature Logo -->
    <SignatureLogo/>

    <!-- Main Content -->
    <main class="main-content">
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">
// Import components
import StarBackground from '~/components/StarBackground.vue'
import BurgerMenu from '~/components/BurgerMenu.vue'
import SignatureLogo from '~/components/SignatureLogo.vue'

// Route-based theming
const themeClass = computed(() => {
  const route = useRoute()
  const path = route.path

  if (path === '/' || path === '/filmy') return 'theme-yellow'
  if (path === '/cv') return 'theme-blue'
  if (path === '/projekty') return 'theme-red'
  if (path === '/sekret') return 'theme-green'

  return 'theme-yellow' // default
})

// Page title management
const route = useRoute()
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

// Update page title
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
.layout {
  min-height: 100vh;
  position: relative;
  transition: all 0.3s ease;
}

.main-content {
  position: relative;
  z-index: 1;
}

/* Ensure proper stacking */
.layout::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: var(--bg-primary);
}
</style>

<style>
/* Global styles that need to be outside scoped */
.theme-yellow {
  --theme-primary: var(--yellow-primary);
  --theme-secondary: var(--yellow-secondary);
  --theme-accent: var(--yellow-accent);
  --theme-dark: var(--yellow-dark);
  --theme-text: var(--yellow-text);
}

.theme-blue {
  --theme-primary: var(--blue-primary);
  --theme-secondary: var(--blue-secondary);
  --theme-accent: var(--blue-accent);
  --theme-dark: var(--blue-dark);
  --theme-text: var(--blue-text);
}

.theme-red {
  --theme-primary: var(--red-primary);
  --theme-secondary: var(--red-secondary);
  --theme-accent: var(--red-accent);
  --theme-dark: var(--red-dark);
  --theme-text: var(--red-text);
}

.theme-green {
  --theme-primary: var(--green-primary);
  --theme-secondary: var(--green-secondary);
  --theme-accent: var(--green-accent);
  --theme-dark: var(--green-dark);
  --theme-text: var(--green-text);
}

.theme-gray {
  --theme-primary: var(--gray-primary);
  --theme-secondary: var(--gray-secondary);
  --theme-accent: var(--gray-accent);
  --theme-dark: var(--gray-dark);
  --theme-text: var(--gray-text);
}
</style>
