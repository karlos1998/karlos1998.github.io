<template>
  <div class="home-page theme-yellow">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-inner">
          <!-- Company Brand -->
          <div class="company-brand mb-xl fade-in">
            <div class="company-logo">
              Let's Code It
            </div>
            <div class="company-tagline">
              Software Development & Automation
            </div>
          </div>

          <!-- Main Hero Content with Photo -->
          <div class="hero-content-wrapper">
            <div class="hero-content">
              <h1 class="hero-title fade-in-up">
                <span class="hero-greeting">Cześć, jestem</span>
                <span class="hero-name gradient-text">Karol Sójka</span>
              </h1>

              <p class="hero-description fade-in-up">
                Back-end Developer specjalizujący się w automatyzacji procesów biznesowych
                i tworzeniu inteligentnych systemów. Pomagam firmom oszczędzać czas poprzez
                technologię.
              </p>

              <!-- CTA Section -->
              <div class="cta-section fade-in-up">
                <NuxtLink
                  to="/cv"
                  class="btn btn-primary glow"
                >
                  <span>
                    Zobacz moje doświadczenie
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 10h10M10 5l5 5-5 5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </NuxtLink>
                <NuxtLink
                  to="/projekty"
                  class="btn btn-outline"
                >
                  Projekty
                </NuxtLink>
              </div>
            </div>

            <!-- Profile Photo -->
            <div class="hero-photo fade-in">
              <div class="photo-container">
                <img
                  src="/images/selfie.png"
                  alt="Karol Sójka"
                  class="profile-image"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-wrapper fade-in">
          <div class="stat-card">
            <div class="stat-number gradient-text">
              5+
            </div>
            <div class="stat-label">
              Lat doświadczenia
            </div>
            <div class="stat-description">
              w programowaniu i automatyzacji
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-number gradient-text">
              50+
            </div>
            <div class="stat-label">
              Projektów
            </div>
            <div class="stat-description">
              dla firm i klientów indywidualnych
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-number gradient-text">
              100%
            </div>
            <div class="stat-label">
              Satysfakcja
            </div>
            <div class="stat-description">
              długoterminowa współpraca
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services/Specialization Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">
            Specjalizacja
          </h2>
          <p class="section-subtitle fade-in">
            Technologie, w których czuję się najlepiej
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card fade-in-up">
            <div class="service-icon">
              🤖
            </div>
            <h3>Automatyzacja Procesów</h3>
            <p>Web scraping, boty, automatyczne przetwarzanie danych. Eliminacja powtarzalnych zadań.</p>
          </div>

          <div class="service-card fade-in-up">
            <div class="service-icon">
              💬
            </div>
            <h3>Chatboty & API</h3>
            <p>Integracje z Facebook Messenger, Telegram. Systemy komunikacji z klientem.</p>
          </div>

          <div class="service-card fade-in-up">
            <div class="service-icon">
              🔌
            </div>
            <h3>Integracje Systemów</h3>
            <p>Łączenie różnych platform, synchronizacja danych, REST API, webhooks.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-header">
            <h2 class="section-title fade-in">
              Porozmawiajmy o projekcie
            </h2>
            <p class="section-subtitle fade-in">
              Skontaktuj się ze mną w dogodny dla Ciebie sposób
            </p>
          </div>

          <div class="contact-cards">
            <NuxtLink
              to="/kontakt"
              class="contact-card fade-in-up"
            >
              <div class="contact-card-icon">✉️</div>
              <div class="contact-card-content">
                <div class="contact-card-label">Email</div>
                <div class="contact-card-value">Wyślij wiadomość</div>
              </div>
              <div class="contact-card-arrow">→</div>
            </NuxtLink>

            <a
              href="https://www.google.pl/maps/place/Długosiodło"
              target="_blank"
              class="contact-card fade-in-up"
            >
              <div class="contact-card-icon">📍</div>
              <div class="contact-card-content">
                <div class="contact-card-label">Lokalizacja</div>
                <div class="contact-card-value">Długosiodło, Mazowsze</div>
              </div>
              <div class="contact-card-arrow">→</div>
            </a>

            <a
              href="https://www.linkedin.com/in/karol-sójka-17952825b/"
              target="_blank"
              class="contact-card fade-in-up"
            >
              <div class="contact-card-icon">💼</div>
              <div class="contact-card-content">
                <div class="contact-card-label">Professional</div>
                <div class="contact-card-value">LinkedIn</div>
              </div>
              <div class="contact-card-arrow">→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Let\'s Code It! - Karol Sójka - Automatyzacja & Development',
  meta: [
    {
      name: 'description',
      content: 'Let\'s Code It - Karol Sójka. Specjalista od automatyzacji procesów, back-end development i integracji systemów. 5+ lat doświadczenia.',
    },
  ],
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--space-3xl) 0;
}

.hero-inner {
  max-width: 1100px;
  width: 100%;
}

/* Company Brand */
.company-brand {
  margin-bottom: var(--space-2xl);
}

.company-logo {
  font-size: var(--font-2xl);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.company-tagline {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Hero Content */
.hero-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3xl);
  margin-top: var(--space-2xl);
}

.hero-content {
  flex: 1;
  min-width: 0;
}

.hero-title {
  margin-bottom: var(--space-xl);
}

.hero-greeting {
  display: block;
  font-size: var(--font-xl);
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  letter-spacing: -0.01em;
}

.hero-name {
  display: block;
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.05em;
}

.hero-description {
  font-size: var(--font-xl);
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 680px;
  margin-bottom: var(--space-2xl);
}

/* Hero Photo */
.hero-photo {
  flex: 0 0 auto;
  width: 350px;
  max-width: 40%;
  position: relative;
}

.photo-container {
  position: relative;
  width: 100%;
  aspect-ratio: 453 / 603;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: all 0.4s var(--ease);
}

.profile-image:hover {
  transform: translateY(-2px);
}

.photo-glow {
  display: none;
}

@keyframes photo-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

/* CTA Section */
.cta-section {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.cta-section .btn {
  font-size: var(--font-lg);
}

.btn svg {
  transition: transform 0.3s var(--ease);
}

.btn:hover svg {
  transform: translateX(4px);
}

/* Stats Section */
.stats-section {
  padding: var(--space-3xl) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.stats-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2xl);
}

.stat-card {
  text-align: center;
  padding: var(--space-xl);
}

.stat-number {
  font-size: var(--font-5xl);
  font-weight: 900;
  line-height: 1;
  margin-bottom: var(--space-md);
}

.stat-label {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
}

.stat-description {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
}

/* Services Section */
.services-section {
  padding: var(--space-3xl) 0;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-3xl);
}

.section-title {
  font-size: var(--font-4xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
}

.section-subtitle {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
  margin: 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  padding: var(--space-2xl);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  transition: all 0.3s var(--ease);
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: var(--space-lg);
}

.service-card h3 {
  font-size: var(--font-xl);
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.service-card p {
  font-size: var(--font-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Contact Section */
.contact-section {
  padding: var(--space-3xl) 0 var(--space-3xl);
}

.contact-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  text-decoration: none;
  transition: all 0.3s var(--ease);
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateX(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.contact-card-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-card-content {
  flex: 1;
}

.contact-card-label {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-xs);
}

.contact-card-value {
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--color-text);
}

.contact-card-arrow {
  font-size: var(--font-2xl);
  color: var(--color-accent);
  transition: transform 0.3s var(--ease);
}

.contact-card:hover .contact-card-arrow {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 968px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .stats-wrapper {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .hero-content-wrapper {
    gap: var(--space-2xl);
  }

  .hero-photo {
    width: 350px;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: var(--space-2xl) 0;
  }

  .hero-content-wrapper {
    flex-direction: column-reverse;
    gap: var(--space-2xl);
  }

  .hero-photo {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }

  .hero-greeting {
    font-size: var(--font-lg);
  }

  .hero-name {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }

  .hero-description {
    font-size: var(--font-lg);
  }

  .cta-section {
    flex-direction: column;
  }

  .cta-section .btn {
    width: 100%;
    justify-content: center;
  }

  .contact-card {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
  }

  .contact-card-arrow {
    display: none;
  }
}
</style>
