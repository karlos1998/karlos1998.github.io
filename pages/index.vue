<template>
  <div class="home-page theme-yellow">
    <section class="section">
      <div class="container">
        <div class="hero">
          <!-- Small badge -->
          <div class="badge mb-lg fade-in">
            Dostępny do pracy
          </div>

          <!-- Main heading -->
          <h1 class="hero-title mb-lg fade-in-up delay-1">
            Karol Sójka
          </h1>

          <!-- Subtitle -->
          <p class="hero-subtitle mb-2xl fade-in-up delay-2">
            Back-end Developer & Automation Specialist z Długosiodła.
            <br/>
            Tworzę inteligentne rozwiązania, które działają.
          </p>

          <!-- CTA Buttons -->
          <div class="hero-actions mb-2xl fade-in-up delay-3">
            <NuxtLink to="/cv" class="btn btn-primary">
              Zobacz CV
            </NuxtLink>
            <NuxtLink to="/projekty" class="btn btn-outline">
              Projekty
            </NuxtLink>
            <a href="mailto:kontakt@letscode.it" class="btn btn-ghost">
              Kontakt
            </a>
          </div>

          <!-- Stats -->
          <div class="stats-grid fade-in-up delay-4">
            <div class="stat-item">
              <div class="stat-value">5+</div>
              <div class="stat-label">Lat doświadczenia</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">50+</div>
              <div class="stat-label">Projektów</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">6</div>
              <div class="stat-label">Technologii</div>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="contact-section fade-in-up delay-5">
          <div class="accent-line"></div>
          <div class="contact-grid">
            <a href="mailto:kontakt@letscode.it" class="contact-item">
              <span class="contact-label">Email</span>
              <span class="contact-value">kontakt@letscode.it</span>
            </a>
            <a href="https://www.google.pl/maps/place/Długosiodło" target="_blank" class="contact-item">
              <span class="contact-label">Lokalizacja</span>
              <span class="contact-value">Długosiodło, Mazowsze</span>
            </a>
            <a href="http://facebook.com/Fadeusz" target="_blank" class="contact-item">
              <span class="contact-label">Social</span>
              <span class="contact-value">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Let's Code It! - Karol Sójka",
})

onMounted(() => {
  import('gsap').then(({gsap}) => {
    gsap.from('.hero-title', {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.2
    })

    gsap.from('.hero-subtitle', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.4
    })

    gsap.from('.hero-actions', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.6
    })
  })
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero {
  max-width: 800px;
  padding: var(--space-3xl) 0;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-xl);
  padding: var(--space-xl) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item {
  text-align: left;
}

.stat-value {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Contact Section */
.contact-section {
  margin-top: var(--space-3xl);
  padding-top: var(--space-2xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
}

.contact-item:hover {
  transform: translateX(4px);
}

.contact-item:hover .contact-value {
  color: var(--color-accent);
}

.contact-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.contact-value {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  font-weight: 500;
  transition: var(--transition);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
