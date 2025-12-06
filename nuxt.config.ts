// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

    // Dev server configuration
    devServer: {
        port: 3300,
    },

    // Global CSS
    css: ['~/assets/css/main.css'],

    // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
      '@nuxt/ui',
  ],

    // App configuration
    app: {
        head: {
            htmlAttrs: {
                lang: 'pl',
            },
            title: "Let's Code It! - Karol Sójka",
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Portfolio Karola Sójki - programisty i informatyka. Specjalizuję się w automatyzacji stron internetowych, tworzeniu aplikacji i systemów informatycznych.',
                },
                {
                    name: 'keywords',
                    content: 'Karol Sójka, programista, informatyk, automatyzacja, aplikacje, systemy informatyczne, portfolio',
                },
                {name: 'author', content: 'Karol Sójka'},
                // Open Graph
                {property: 'og:title', content: "Let's Code It! - Karol Sójka"},
                {
                    property: 'og:description',
                    content: 'Portfolio Karola Sójki - programisty i informatyka specjalizującego się w nowoczesnych technologiach.',
                },
                {property: 'og:image', content: '/images/selfie-with-background.png'},
                {property: 'og:url', content: 'https://letscode.it'},
                {property: 'og:type', content: 'website'},
                // Twitter
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: "Let's Code It! - Karol Sójka"},
                {
                    name: 'twitter:description',
                    content: 'Portfolio Karola Sójki - programisty i informatyka specjalizującego się w nowoczesnych technologiach.',
                },
                {name: 'twitter:image', content: '/images/selfie-with-background.png'},
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/images/favicon.png'},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
                },
            ],
    },
  },

    // Build configuration
    nitro: {
        // Remove prerender for API compatibility - use SSR instead
        // prerender: {
        //   routes: ['/sitemap.xml', '/robots.txt', '/', '/cv', '/projekty', '/kontakt'],
        // },
    },

    // Image configuration
    image: {
        domains: ['github.com', 'youtube.com', 'pbs.letscode.it'],
    },

    // Content configuration
    content: {
        // Content module configuration
    },

    // ESLint configuration
    eslint: {
        config: {
            stylistic: true,
        },
    },
})
