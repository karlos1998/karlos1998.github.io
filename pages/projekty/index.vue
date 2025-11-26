<template>
  <div class="projects-page theme-red">
    <section class="section">
      <div class="container">
        <div class="page-wrapper">
          <!-- Header -->
          <header class="page-header">
            <h1>Projekty</h1>
            <p class="lead">
              Wybrane prace i open-source contributions
            </p>
            <div class="accent-line mt-lg"></div>
          </header>

          <!-- Projects Grid -->
          <div class="projects-grid">
            <article
                v-for="project in projects"
                :key="project.id"
                class="project-card"
            >
              <div class="project-header">
                <time class="project-date">{{ formatDate(project.date) }}</time>
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>

              <div class="project-body">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>

              <div class="project-footer">
                <div class="project-links">
                  <NuxtLink :to="`/projekty/${project.id}`" class="project-link primary">
                    Zobacz szczegóły →
                  </NuxtLink>
                  <a
                      v-if="project.link.url !== '#'"
                      :href="project.link.url"
                      target="_blank"
                      rel="noopener"
                      class="project-link secondary"
                  >
                    {{ project.link.label }} →
                  </a>
                </div>
              </div>
            </article>
          </div>

          <!-- Footer Note -->
          <footer class="page-footer">
            <p class="text-muted">
              Większość projektów komercyjnych objęta NDA. Powyższe to jedynie wybrane, publiczne prace.
            </p>
          </footer>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import projectsData from '~/data/projects.json'

const projects = ref(projectsData)

useHead({
  title: 'Projekty - Karol Sójka',
})

const formatDate = (dateStr) => {
  const [year, month] = dateStr.split('-')
  const months = {
    '01': 'Styczeń', '02': 'Luty', '03': 'Marzec', '04': 'Kwiecień',
    '05': 'Maj', '06': 'Czerwiec', '07': 'Lipiec', '08': 'Sierpień',
    '09': 'Wrzesień', '10': 'Październik', '11': 'Listopad', '12': 'Grudzień',
  }
  return `${months[month]} ${year}`
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
}

.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Header */
.page-header {
  margin-bottom: var(--space-3xl);
}

.page-header h1 {
  margin-bottom: var(--space-md);
}

.lead {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
  font-weight: 400;
  margin: 0;
}

/* Projects Grid */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s var(--ease);
}

.project-card:last-child {
  border-bottom: none;
}

.project-card:hover {
  transform: translateX(4px);
}

/* Project Header */
.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
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

/* Project Body */
.project-body h3 {
  font-size: var(--font-2xl);
  margin-bottom: var(--space-sm);
  color: var(--color-text);
}

.project-body p {
  font-size: var(--font-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Project Footer */
.project-footer {
  margin-top: var(--space-sm);
}

.project-links {
  display: flex;
  gap: var(--space-sm);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  transition: all 0.2s var(--ease);
}

.project-link.primary {
  color: var(--color-accent);
}

.project-link.secondary {
  color: var(--color-text-secondary);
}

.project-link:hover {
  color: var(--color-text);
  transform: translateX(4px);
}

/* Page Footer */
.page-footer {
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.page-footer p {
  font-size: var(--font-sm);
  margin: 0;
}

/* Responsive */
@media (max-width: 640px) {
  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
