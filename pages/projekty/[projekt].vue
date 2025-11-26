<template>
  <div class="project-detail-page" :class="`theme-${projectTheme}`">
    <section class="section">
      <div class="container">
        <div class="page-wrapper">
          <!-- Breadcrumb -->
          <nav class="breadcrumb">
            <NuxtLink to="/projekty" class="breadcrumb-link">Projekty</NuxtLink>
            <span class="breadcrumb-separator">→</span>
            <span class="breadcrumb-current">{{ project.title }}</span>
          </nav>

          <!-- Header -->
          <header class="project-header">
            <div class="project-meta">
              <time class="project-date">{{ formatDate(project.date) }}</time>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <h1 class="project-title">
              {{ project.title }}
            </h1>
            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="project-actions">
              <a
                  v-if="project.link.url !== '#'"
                  :href="project.link.url"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-primary"
              >
                {{ project.link.label }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </header>

          <!-- Project Details -->
          <div class="project-content">
            <!-- Detailed Description -->
            <div class="project-section">
              <h2>O projekcie</h2>
              <div class="project-details" v-html="projectDetails"></div>
            </div>

            <!-- Technologies -->
            <div class="project-section">
              <h2>Technologie</h2>
              <div class="tech-stack">
                <div v-for="tech in project.tags" :key="tech" class="tech-item">
                  <span class="tech-name">{{ tech }}</span>
                </div>
              </div>
            </div>

            <!-- Links -->
            <div v-if="hasAdditionalLinks" class="project-section">
              <h2>Powiązane linki</h2>
              <div class="project-links">
                <a
                    v-for="link in additionalLinks"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener"
                    class="project-link-item"
                >
                  <span class="link-label">{{ link.label }}</span>
                  <span class="link-url">{{ link.url }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Back to Projects -->
          <footer class="project-footer">
            <NuxtLink to="/projekty" class="back-link">
              ← Powrót do wszystkich projektów
            </NuxtLink>
          </footer>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import projectsData from '~/data/projects.json'

const route = useRoute()

const projectId = route.params.projekt
const project = projectsData.find(p => p.id === projectId)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projekt nie został znaleziony'
  })
}

// Project theme mapping
const themeMap = {
  'simply-connect': 'blue',
  'waste-wise': 'green',
  'scraper-gsm-arena': 'blue',
  'pzpn-scraper': 'blue',
  'paliwa-plynne': 'yellow',
  'events': 'yellow',
  'itms': 'blue',
  'sim-app': 'blue',
  'virtigia': 'yellow',
}
const projectTheme = computed(() => themeMap[project.id] || 'red')

// Extended project details
const projectDetails = computed(() => {
  const details = {
    'simply-connect': `
      <p><strong>Użyj API do wysyłania SMS z Twojego telefonu</strong></p>
      <p>Celem projektu było umożliwienie klientom wysyłanie i odczytywanie SMS z panelu webowego lub integracja go jako API z istniejącymi już projektami. Zasada działania jest bardzo prosta:</p>
      <ol>
        <li>Zakładamy konto w portalu Simply Connect</li>
        <li>Pobieramy plik .apk na nieużywany telefon z kartą sim</li>
        <li>Łączymy aplikację z naszym kontem i gotowe!</li>
      </ol>
      <p>System został zbudowany z myślą o skalowalności i łatwej integracji z istniejącymi systemami.</p>
    `,
    'waste-wise': `
      <p><strong>Poważny System CRM w oparciu o platformę BDO</strong></p>
      <p>Jego zadaniem jest umożliwienie klientom prostego wystawiania kart odpadów, tworzenia faktur, tworzenia tras dla kierowców, czy choćby masowej zmiany statusów kart odpadów. System codziennie synchronizuje tysiące kart.</p>
      <p><em>Kod źródłowy nie jest publiczny.</em></p>
    `,
    'sim-app': `
      <p><strong>Aplikacja do wysyłania SMS (komendy AT)</strong></p>
      <p>System umożliwia wysyłanie wiadomości SMS przy użyciu modemów GSM i komend AT. Wykorzystuje protokoły komunikacyjne do bezpośredniego łączenia się z urządzeniami GSM.</p>
    `,
    'itms': `
      <p><strong>Komercyjny system do zarządzania słupkami ruchomymi</strong></p>
      <p>W skład aplikacji wchodzi odbieranie telefonicznych połączeń przychodzących i otwieranie przejazdu w celu wjazdu na osiedle przez mieszkańca. System integruje komunikację VoIP z automatyką bramową.</p>
    `,
    'events': `
      <p><strong>Backend aplikacji mobilnej</strong></p>
      <p>Mająca na celu wyszukiwanie wydarzeń w okolicy zależnie od preferencji użytkownika. Wydarzenia synchronizowane są z tymi z Facebooka i podobnymi platformami. Aplikację można znaleźć w AppStore i Google Play.</p>
    `,
    'virtigia': `
      <p><strong>Hobbystyczny projekt gry webowej</strong></p>
      <p>Projekt stworzony dla zabawy i eksperymentów z technologiami webowymi. Implementuje podstawowe mechaniki gier w przeglądarce.</p>
    `,
    'scraper-gsm-arena': `
      <p><strong>Scrapowanie strony z listą telefonów</strong></p>
      <p>Celem scrapera jest stworzenie prostego REST Api, w którym po podaniu modelu telefonu w linku otrzymujemy jego zdjęcie. System automatycznie pobiera i indeksuje dane z zewnętrznych źródeł.</p>
    `,
    'pzpn-scraper': `
      <p><strong>Scrapowanie strony PZPN z listą klubów sportowych</strong></p>
      <p>Celem scrapera jest stworzenie API przez które można pobrać szczegóły rozgrywek interesującego nas klubu sportowego. Api zostało stworzone w GraphQL i użyte w aplikacji mobilnej.</p>
    `,
    'paliwa-plynne': `
      <p><strong>Aplikacja typu CRM dla firmy zajmującej się analizą cen paliw płynnych</strong></p>
      <p>Jako również organizowaniem targów. System umożliwia kompleksowe zarządzanie danymi rynkowymi i organizację wydarzeń branżowych.</p>
    `,
  }
  return details[project.id] || `<p>${project.description}</p>`
})

// Additional links for specific projects
const additionalLinks = computed(() => {
  const links = {
    'simply-connect': [
      {label: 'Aplikacja Android', url: 'https://github.com/karlos1998/SimAppDeviceJava'},
    ],
    'sim-app': [
      {label: 'Panel zarządzania', url: 'https://panel.sim-app.ovh'},
    ],
  }
  return links[project.id] || []
})

const hasAdditionalLinks = computed(() => additionalLinks.value.length > 0)

useHead({
  title: `${project.title} - Karol Sójka`,
  meta: [
    {
      name: 'description',
      content: project.description
    },
  ],
})

const formatDate = (dateStr) => {
  const [year, month] = dateStr.split('-')
  const months = {
    '01': 'Styczeń',
    '02': 'Luty',
    '03': 'Marzec',
    '04': 'Kwiecień',
    '05': 'Maj',
    '06': 'Czerwiec',
    '07': 'Lipiec',
    '08': 'Sierpień',
    '09': 'Wrzesień',
    '10': 'Październik',
    '11': 'Listopad',
    '12': 'Grudzień',
  }
  return `${months[month]} ${year}`
}
</script>

<style scoped>
.project-detail-page {
  min-height: 100vh;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Breadcrumb */
.breadcrumb {
  margin-bottom: var(--space-2xl);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-sm);
}

.breadcrumb-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s var(--ease);
}

.breadcrumb-link:hover {
  color: var(--color-accent);
}

.breadcrumb-separator {
  color: var(--color-text-tertiary);
}

.breadcrumb-current {
  color: var(--color-text);
  font-weight: 500;
}

/* Project Header */
.project-header {
  margin-bottom: var(--space-3xl);
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
}

.project-date {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-tags {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.project-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--space-lg);
  line-height: 1.1;
}

.project-description {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-2xl);
}

.project-actions {
  margin-top: var(--space-xl);
}

/* Project Content */
.project-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
}

.project-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.project-section h2 {
  font-size: var(--font-2xl);
  font-weight: 700;
  margin: 0;
}

.project-details {
  font-size: var(--font-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.project-details p {
  margin-bottom: var(--space-lg);
}

.project-details ol {
  padding-left: var(--space-xl);
  margin-bottom: var(--space-lg);
}

.project-details li {
  margin-bottom: var(--space-sm);
}

.project-details strong {
  color: var(--color-text);
  font-weight: 600;
}

.project-details em {
  font-style: italic;
  color: var(--color-text-tertiary);
}

/* Tech Stack */
.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-md);
}

.tech-item {
  display: flex;
  align-items: center;
  padding: var(--space-md);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  transition: all 0.3s var(--ease);
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateY(-2px);
}

.tech-name {
  font-size: var(--font-base);
  font-weight: 500;
  color: var(--color-text);
}

/* Project Links */
.project-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.project-link-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.3s var(--ease);
}

.project-link-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateX(8px);
}

.link-label {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--color-text);
  flex: 1;
}

.link-url {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  flex: 2;
}

/* Project Footer */
.project-footer {
  margin-top: var(--space-3xl);
  padding-top: var(--space-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  transition: all 0.2s var(--ease);
}

.back-link:hover {
  color: var(--color-text);
  transform: translateX(-4px);
}

/* Responsive */
@media (max-width: 768px) {
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .tech-stack {
    grid-template-columns: 1fr;
  }

  .project-link-item {
    flex-direction: column;
    text-align: center;
    gap: var(--space-sm);
  }

  .link-url {
    flex: none;
  }
}
</style>
