<template>
  <div class="home-page theme-yellow">
    <section class="section">
      <div class="container">
        <div class="hero">
          <!-- Floating Badge -->
          <div class="badge mb-lg float animate-fade-in">
            ✨ Dostępny do pracy
          </div>

          <!-- Hero Title with Gradient -->
          <h1 class="hero-title mb-lg animate-fade-in-up animate-delay-1">
            <span class="gradient-text">Karol Sójka</span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-subtitle mb-2xl animate-fade-in-up animate-delay-2">
            Back-end Developer & Automation Specialist z Długosiodła.
            <br/>
            Tworzę inteligentne rozwiązania, które działają.
          </p>

          <!-- CTA Buttons with Glow -->
          <div class="hero-actions mb-2xl animate-fade-in-up animate-delay-3">
            <NuxtLink to="/cv" class="btn btn-primary glow">
              Zobacz CV
            </NuxtLink>
            <NuxtLink to="/projekty" class="btn btn-outline">
              Projekty
            </NuxtLink>
            <a href="mailto:kontakt@letscode.it" class="btn btn-ghost">
              Kontakt
            </a>
          </div>

          <!-- Stats with Gradient Accents -->
          <div class="stats-grid animate-fade-in-up animate-delay-4">
            <div class="stat-item">
              <div class="stat-value gradient-text">5+</div>
              <div class="stat-label">Lat doświadczenia</div>
            </div>
            <div class="stat-item">
              <div class="stat-value gradient-text">50+</div>
              <div class="stat-label">Projektów</div>
            </div>
            <div class="stat-item">
              <div class="stat-value gradient-text">6</div>
              <div class="stat-label">Technologii</div>
            </div>
          </div>
        </div>

        <!-- Contact Section with Cards -->
        <div class="contact-section animate-fade-in-up animate-delay-5">
          <div class="accent-line mb-xl"></div>
          <div class="contact-grid">
            <a href="mailto:kontakt@letscode.it" class="contact-card">
              <div class="contact-icon">✉️</div>
              <div class="contact-content">
                <span class="contact-label">Email</span>
                <span class="contact-value">kontakt@letscode.it</span>
              </div>
            </a>
            <a href="https://www.google.pl/maps/place/Długosiodło" target="_blank" class="contact-card">
              <div class="contact-icon">📍</div>
              <div class="contact-content">
                <span class="contact-label">Lokalizacja</span>
                <span class="contact-value">Długosiodło, Mazowsze</span>
              </div>
            </a>
            <a href="http://facebook.com/Fadeusz" target="_blank" class="contact-card">
              <div class="contact-icon">🔗</div>
              <div class="contact-content">
                <span class="contact-label">Social</span>
                <span class="contact-value">Facebook</span>
              </div>
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
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero {
  max-width: 900px;
  padding: var(--space-3xl) 0;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: var(--space-xl);
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 650px;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2xl);
  padding: var(--space-2xl) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-item {
  text-align: left;
}

.stat-value {
  font-size: var(--font-4xl);
  font-weight: 800;
  line-height: 1;
  margin-bottom: var(--space-sm);
}

.stat-label {
  font-size: var(--font-sm);
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
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.contact-card {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.3s var(--ease);
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.contact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact-label {
  font-size: var(--font-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.contact-value {
  font-size: var(--font-base);
  color: var(--color-text);
  font-weight: 500;
}

.float {
  animation: float 6s ease-in-out infinite;
}

.glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: glow 2s ease-in-out infinite;
}

.gradient-text {
  background: linear-gradient(to right, #ff69b4, #ffe000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  }
}

@media (max-width: 480px) {
  .stat-value {
    font-size: var(--font-3xl);
  }

  .stat-label {
    font-size: var(--font-xs);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
}

.animate-fade-in {
  animation: fadeIn 1s;
}

.animate-fade-in-up {
  animation: fadeInUp 1s;
}

.animate-delay-1 {
  animation-delay: 0.2s;
}

.animate-delay-2 {
  animation-delay: 0.4s;
}

.animate-delay-3 {
  animation-delay: 0.6s;
}

.animate-delay-4 {
  animation-delay: 0.8s;
}

.animate-delay-5 {
  animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
