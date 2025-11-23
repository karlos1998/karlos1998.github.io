<template>
  <div class="projects-page theme-red">
    <section class="section">
      <div class="container">
        <!-- Header -->
        <div class="projects-header mb-2xl">
          <h1 class="mb-md">Projekty</h1>
          <p class="lead mb-lg">Wybrane prace i open-source contributions</p>
          <div class="accent-line"></div>
        </div>

        <!-- Projects List -->
        <div class="projects-list">
          <article class="project-item">
            <div class="project-meta">
              <time class="project-date">Październik 2020</time>
              <div class="project-tags">
                <span class="tag">Python</span>
                <span class="tag">Raspberry Pi</span>
                <span class="tag">IoT</span>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">SIM Gateway na Raspberry Pi</h3>
              <p class="project-description">
                Bramka SMS wykorzystująca modem GSM i Raspberry Pi. System obsługuje wysyłkę masowych powiadomień,
                kolejkowanie wiadomości i monitoring statusu dostarczenia. Wykorzystywana w bankach do alertów
                transakcyjnych.
              </p>
              <a href="https://github.com/Fadeusz/SIM-engine" target="_blank" class="project-link">
                Zobacz na GitHub →
              </a>
            </div>
          </article>

          <article class="project-item">
            <div class="project-meta">
              <time class="project-date">Wrzesień 2020</time>
              <div class="project-tags">
                <span class="tag">C#</span>
                <span class="tag">WinForms</span>
                <span class="tag">Monitoring</span>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Hardware Monitor</h3>
              <p class="project-description">
                Aplikacja desktopowa monitorująca wydajność komputera w czasie rzeczywistym. Wyświetla temperaturę
                CPU/GPU,
                wykorzystanie pamięci RAM, obciążenie dysku. Niski overhead, działa w systemie tray.
              </p>
              <a href="https://github.com/Fadeusz/HardwareMonitor" target="_blank" class="project-link">
                Zobacz na GitHub →
              </a>
            </div>
          </article>

          <article class="project-item">
            <div class="project-meta">
              <time class="project-date">Sierpień 2020</time>
              <div class="project-tags">
                <span class="tag">PHP</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Banking</span>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">PBS - Banking SMS Bot</h3>
              <p class="project-description">
                System powiadomień SMS dla grupy banków spółdzielczych. Automatyczne alerty o transakcjach,
                logowaniach do systemu, zmianach sald. Integracja z core banking systems poprzez REST API.
              </p>
              <a href="https://pbs.letscode.it" target="_blank" class="project-link">
                Zobacz projekt →
              </a>
            </div>
          </article>

          <article class="project-item">
            <div class="project-meta">
              <time class="project-date">Lipiec 2020</time>
              <div class="project-tags">
                <span class="tag">Video</span>
                <span class="tag">Production</span>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Film promocyjny - Długosiodło</h3>
              <p class="project-description">
                Profesjonalny film promocyjny miejscowości Długosiodło. Montaż, korekcja kolorów,
                sound design. Wykorzystany do promocji turystyki lokalnej.
              </p>
              <a href="https://www.youtube.com/watch?v=fu2swf9R-Mg" target="_blank" class="project-link">
                Zobacz na YouTube →
              </a>
            </div>
          </article>
        </div>

        <!-- Archive Notice -->
        <div class="archive-notice mt-2xl">
          <p class="text-muted">
            Większość projektów komercyjnych objęta NDA. Powyższe to jedynie wybrane, publiczne prace.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Projekty - Karol Sójka',
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
}

.projects-header {
  max-width: 700px;
}

.lead {
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
  font-weight: 400;
}

/* Projects List */
.projects-list {
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  margin-top: var(--space-2xl);
}

.project-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.project-item:last-child {
  border-bottom: none;
}

/* Meta Column */
.project-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.project-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-tags {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

/* Content Column */
.project-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.project-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.project-description {
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  margin-top: var(--space-xs);
  transition: var(--transition-fast);
}

.project-link:hover {
  color: var(--color-text);
  transform: translateX(4px);
}

/* Archive Notice */
.archive-notice {
  max-width: 900px;
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.archive-notice p {
  font-size: var(--font-size-sm);
  text-align: center;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .project-item {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .project-meta {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .project-tags {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
