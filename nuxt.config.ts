// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

    // Dev server configuration
    devServer: {
        port: 3300
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
    devtools: {enabled: true},
    compatibilityDate: '2025-07-15',
    devServer: {
        port: 3300,
  },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            htmlAttrs: {lang: 'pl'},
            title: "Let's Code It! – Karol Sójka | Full-stack developer, automatyzacja, motoryzacja, Toyota Supra MK4",
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Karol Sójka – full-stack developer, pasjonat motoryzacji (Toyota Supra MK4) i automatyzacji procesów dla firm. Projekty IT, portfolio, chatboty, integracje, backend, Proxmox, Scrum, mentorship. Poznaj unikalne połączenie technologii i pasji! LinkedIn: Karol Sójka, GitHub: karlos1998.',
                },
                {
                    name: 'keywords',
                    content: "Karol Sójka, Let's Code It, programista, backend, automatyzacja, motoryzacja, Toyota Supra MK4, programista Warszawa, chatboty, integracje API, portfolio, code review, mentorship, LinkedIn, GitHub, Proxmox, Scrum, Vue, TypeScript, PHP, Docker, web scraping, development, Supra MK4, Japanese cars, car enthusiast",
                },
                {name: 'author', content: 'Karol Sójka'},
                {
                    property: 'og:title',
                    content: "Let's Code It! – Karol Sójka | Backend, Automatyzacja, Toyota Supra MK4"
                },
                {
                    property: 'og:description',
                    content: 'Oficjalny web Karola Sójki – backend developer, automatyzacja, właściciel Toyoty Supra MK4, portfolio, kontakt, GitHub, LinkedIn.',
                },
                {property: 'og:image', content: '/images/selfie-with-background.png'},
                {property: 'og:url', content: 'https://letscode.it'},
                {property: 'og:type', content: 'website'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {
                    name: 'twitter:title',
                    content: "Let's Code It! – Karol Sójka | Backend, Automatyzacja, Toyota Supra MK4"
                },
                {
                    name: 'twitter:description',
                    content: 'Portfolio, backend, automatyzacja, projekty, Supra MK4, GitHub: karlos1998, LinkedIn: Karol Sójka.',
                },
                {name: 'twitter:image', content: '/images/selfie-with-background.png'},
                {name: 'robots', content: 'index, follow'},
                {name: 'revisit-after', content: '3 days'},
                {name: 'google-site-verification', content: 'wklej swój kod weryfikacji Google tutaj jeśli masz'},
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/images/favicon.png'},
                {rel: 'apple-touch-icon', href: '/images/favicon.png'},
                {rel: 'canonical', href: 'https://letscode.it'},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
                },
            ],
    },
  },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/robots.txt', '/', '/cv', '/projekty', '/kontakt'],
    },
  },
    image: {
        domains: ['github.com', 'youtube.com', 'pbs.letscode.it'],
    },
    content: {},
    eslint: {
        config: {stylistic: true},
    },
})
