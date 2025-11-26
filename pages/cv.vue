<template>
  <div class="cv-page theme-blue">
    <section class="section">
      <div class="container">
        <!-- Header -->
        <div class="cv-header mb-2xl">
          <h1 class="mb-md">Karol Sójka</h1>
          <p class="lead mb-lg">Back-end Developer & Automation Specialist</p>
          <div class="accent-line"></div>
        </div>

        <!-- Two Column Layout -->
        <div class="cv-grid">
          <!-- Main Column -->
          <div class="cv-main">
            <!-- Skills -->
            <section class="cv-section">
              <h3 class="section-title mb-md">Tech Stack</h3>

              <div class="skill-list">
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">Java & Spring Boot</span>
                    <span class="skill-level">Intermediate</span>
                  </div>
                  <p class="skill-desc">Backend development, REST APIs, web scraping, microservices, Selenium
                    automation</p>
                </div>

                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">Laravel (PHP)</span>
                    <span class="skill-level">Advanced</span>
                  </div>
                  <p class="skill-desc">Full-stack web applications, API development, Inertia.js, Livewire, Eloquent
                    ORM</p>
                </div>

                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">JavaScript / Node.js</span>
                    <span class="skill-level">Advanced</span>
                  </div>
                  <p class="skill-desc">Full-stack development, automation, web scraping, Express.js, Vue.js
                    integration</p>
                </div>

                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">SQL & Databases</span>
                    <span class="skill-level">Advanced</span>
                  </div>
                  <p class="skill-desc">MySQL, PostgreSQL, MongoDB, Redis, complex queries, performance optimization</p>
                </div>

                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">Vue.js & Frontend</span>
                    <span class="skill-level">Advanced</span>
                  </div>
                  <p class="skill-desc">Modern web interfaces, SPA development, PrimeVue, Inertia.js integration</p>
                </div>

                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">DevOps & Tools</span>
                    <span class="skill-level">Intermediate</span>
                  </div>
                  <p class="skill-desc">Docker, Git, Linux, Nginx, CI/CD, cloud deployment, server management</p>
                </div>
              </div>
            </section>

            <div class="divider"></div>

            <!-- Experience -->
            <section class="cv-section">
              <h3 class="section-title mb-md">Specjalizacja</h3>

              <div class="experience-list">
                <div class="experience-item">
                  <h4>Web Automation & Bot Development</h4>
                  <p>Tworzenie systemów automatyzujących interakcje z serwisami webowymi - generowanie ruchu,
                    automatyczne wypełnianie formularzy, web scraping. Specjalizacja w obchodzeniu zabezpieczeń
                    anty-botowych.</p>
                  <div class="tags mt-sm">
                    <span class="tag">Selenium</span>
                    <span class="tag">Puppeteer</span>
                    <span class="tag">Web Scraping</span>
                  </div>
                </div>

                <div class="experience-item">
                  <h4>Messenger Bots & Chat Automation</h4>
                  <p>Rozwój botów dla Facebook Messenger - obsługa klienta, wysyłka ofert, automatyczne odpowiedzi.
                    Integracja z CRM i systemami sprzedażowymi.</p>
                  <div class="tags mt-sm">
                    <span class="tag">Facebook API</span>
                    <span class="tag">ChatBot</span>
                    <span class="tag">NLP</span>
                  </div>
                </div>

                <div class="experience-item">
                  <h4>SMS Gateway & IoT</h4>
                  <p>Budowa bramki SMS na Raspberry Pi - powiadomienia dla banków, systemy alertów dla szkół. Integracja
                    z modemami GSM.</p>
                  <div class="tags mt-sm">
                    <span class="tag">Raspberry Pi</span>
                    <span class="tag">Python</span>
                    <span class="tag">SMS API</span>
                  </div>
                </div>

                <div class="experience-item">
                  <h4>E-commerce Automation</h4>
                  <p>System integrujący multiple platformy sprzedażowe - Allegro, OLX, własne sklepy. Automatyczna
                    synchronizacja stanów magazynowych, cen i opisów.</p>
                  <div class="tags mt-sm">
                    <span class="tag">REST API</span>
                    <span class="tag">Webhooks</span>
                    <span class="tag">Multi-platform</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="cv-sidebar">
            <!-- Systems -->
            <section class="sidebar-section">
              <h4 class="sidebar-title mb-sm">Systemy</h4>
              <ul class="simple-list">
                <li>macOS (primary)</li>
                <li>Linux / Debian</li>
                <li>Windows 10</li>
              </ul>
            </section>

            <!-- Additional Skills -->
            <section class="sidebar-section">
              <h4 class="sidebar-title mb-sm">Dodatkowe</h4>
              <ul class="simple-list">
                <li>Instalacje elektryczne</li>
                <li>Montaż sieci LAN/WiFi</li>
                <li>Systemy monitoringu</li>
                <li>Telewizja satelitarna</li>
              </ul>
            </section>

            <!-- Education -->
            <section class="sidebar-section">
              <h4 class="sidebar-title mb-sm">Wykształcenie</h4>
              <div class="edu-item mb-md">
                <strong>Technikum Elektryczne</strong>
                <p class="text-subtle">Kwalifikacje: E7, E8, E24</p>
              </div>
              <div class="edu-item">
                <strong>Uprawnienia SEP</strong>
                <p class="text-subtle">Sieci średniego napięcia</p>
              </div>
            </section>

            <!-- Languages -->
            <section class="sidebar-section">
              <h4 class="sidebar-title mb-sm">Języki</h4>
              <ul class="simple-list">
                <li>Polski (native)</li>
                <li>Angielski (technical)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'CV - Karol Sójka',
})
</script>

<style scoped>
.cv-page {
  min-height: 100vh;
}

.cv-header {
  max-width: 700px;
}

.lead {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
  font-weight: 400;
}

/* Grid Layout */
.cv-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-3xl);
  margin-top: var(--space-2xl);
}

/* Main Column */
.cv-main {
  max-width: 700px;
}

.cv-section {
  margin-bottom: var(--space-3xl);
}

.section-title {
  font-size: var(--font-2xl);
  margin-bottom: var(--space-lg);
}

/* Skills */
.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.skill-item {
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xs);
}

.skill-name {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--color-text);
}

.skill-level {
  font-size: var(--font-sm);
  color: var(--color-accent);
  font-weight: 500;
}

.skill-desc {
  font-size: var(--font-base);
  color: var(--color-text-secondary);
  margin: 0;
}

/* Experience */
.experience-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.experience-item h4 {
  font-size: var(--font-xl);
  margin-bottom: var(--space-sm);
  color: var(--color-text);
}

.experience-item p {
  font-size: var(--font-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Sidebar */
.cv-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.sidebar-section {
  margin-bottom: var(--space-2xl);
}

.sidebar-title {
  font-size: var(--font-lg);
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.simple-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.simple-list li {
  font-size: var(--font-base);
  color: var(--color-text-secondary);
  padding: var(--space-xs) 0;
  position: relative;
  padding-left: var(--space-md);
}

.simple-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.edu-item strong {
  display: block;
  font-size: var(--font-base);
  margin-bottom: var(--space-xs);
  color: var(--color-text);
}

.edu-item p {
  font-size: var(--font-sm);
  margin: 0;
}

/* Responsive */
@media (max-width: 968px) {
  .cv-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .cv-sidebar {
    position: static;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
  }
}

@media (max-width: 640px) {
  .cv-sidebar {
    grid-template-columns: 1fr;
  }

  .skill-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
}
</style>
