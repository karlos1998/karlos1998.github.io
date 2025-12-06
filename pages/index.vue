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
                Programista full-stack z ponad 5-letnim doświadczeniem w automatyzacji procesów oraz integracjach
                systemów IT. Pomagam firmom i osobom prywatnym wdrażać nowoczesne rozwiązania technologiczne, zawsze
                stawiając na solidność i partnerskie podejście.<br/>
                <br/>
                Programowanie to dla mnie nie tylko praca, ale i pasja – w wolnych chwilach śledzę trendy IT, doradzam
                młodszym kolegom po fachu oraz oddaję się swoim pasjom, w tym motoryzacji (uwielbiam japońskie auta,
                prywatnie Toyota Supra MK4
                <NuxtLink to="/samochody" class="about-link">[więcej]</NuxtLink>
                ).<br/>
                <br/>
                Zainteresowany współpracą lub chcesz porozmawiać o projekcie? Zajrzyj do zakładki kontakt!
              </p>
              <!-- CTA Section (bez Social Proof) -->
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
                  Moje Projekty
                </NuxtLink>
              </div>
            </div>
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
              w programowaniu, automatyzacji oraz rozwoju pasji motoryzacyjnej
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number gradient-text">
              100%
            </div>
            <div class="stat-label">
              Satysfakcja Klientów
            </div>
            <div class="stat-description">
              długoterminowa współpraca i indywidualne podejście
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number gradient-text">
              10+
            </div>
            <div class="stat-label">
              Duże projekty
            </div>
            <div class="stat-description">
              CRM, Integracje API, Automation, systemy dla firm. Portfolio na stronie.
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Nowa sekcja Zainteresowania & Technologie -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <InterestCard :items="[
            { icon: '🚗', text: 'Motoryzacja (szczególnie japońskie auta, m.in. Toyota Supra MK4)', link: '', linkText: '' },
            { icon: '💡', text: 'Nowoczesne technologie' },
            { icon: '🤝', text: 'Mentoring i współpraca zespołowa' },
            { icon: '🎯', text: 'Strzelectwo sportowe & kolekcjonerska broń palna (Beretta 92x Performance)' }
          ]"/>
          <TechCard :items="[
            'PHP (Laravel), JavaScript, TypeScript, Vue.js, Node.js, NestJS',
            'Java (+SpringBoot), MySQL, MongoDB, Docker, Git, BitBucket',
            'CI/CD, code review, Jira, Scrum, Proxmox, VMWare',
          ]"/>
        </div>
      </div>
    </section>
    <!-- Wzmocniona sekcja Services / Specjalizacja -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title fade-in">
            Co mogę dla Ciebie zaprogramować?
          </h2>
          <p class="section-subtitle fade-in">
            Automatyzacje, integracje, API, chatboty – efektywne rozwiązania od pasjonata programowania i motoryzacji!
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

    <!-- Blog/News Section -->
    <section class="blog-section">
      <div class="container">
        <h2 class="section-title">
          Blog
          <br/>
          Aktualności
        </h2>
        <article class="blog-entry" itemscope itemtype="https://schema.org/BlogPosting">
          <header>
            <h3 itemprop="headline">
              Od programowania do pasji:
              <br/>
              Supra MK4, automatyzacja i kod
            </h3>
            <meta itemprop="datePublished" content="2025-06-06"/>
          </header>
          <div itemprop="articleBody">
            <p>
              Jako programista i miłośnik motoryzacji łączę światy, które z pozoru nie mają ze sobą nic wspólnego.
              Pracuję nad projektem <b>Toyoty Supra MK4</b> wykorzystując do tego wiedzę z automatyzacji, programowania
              oraz elektroniki i nowych technologii. Każdy problem traktuję jak wyzwanie, które można rozwiązać tak jak
              bug w kodzie – testy, iteracje, optymalizacja. Więcej o mojej drodze przeczytasz na
              <NuxtLink to="/projekty">stronie projektów</NuxtLink>
              .
            </p>
          </div>
          <footer>
            <span>By <span itemprop="author">Karol Sójka</span> | <a
                href="https://www.linkedin.com/in/karol-sójka-17952825b/" rel="author"
                target="_blank">LinkedIn</a></span>
          </footer>
        </article>
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
    <!-- Social media section na dole, z GitHub -->
    <section class="footer-socials">
      <div class="container">
        <a href="https://www.linkedin.com/in/karol-sójka-17952825b/" target="_blank" rel="noopener"
           aria-label="LinkedIn" class="footer-icon">LinkedIn</a>
        <a href="https://github.com/karlos1998" target="_blank" rel="noopener" aria-label="GitHub" class="footer-icon">GitHub</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import InterestCard from '~/components/InterestCard.vue'
import TechCard from '~/components/TechCard.vue'
useHead({
  title: 'Let\'s Code It! – Karol Sójka | Programista, Motoryzacja, Automatyzacja',
  meta: [
    {
      name: 'description',
      content: 'Oficjalna strona Karola Sójki – programista full-stack, pasjonat motoryzacji i właściciel Toyoty Supra MK4. Zajmuję się automatyzacją, integracjami systemów i rozwojem oprogramowania. Sprawdź portfolio, projekty i poznaj unikalne połączenie kodu i pasji!',
    },
    {
      name: 'keywords',
      content: 'Karol Sójka, Let\'s Code It, programista, automatyzacja, motoryzacja, Toyota Supra, Supra MK4, backend developer, portfolio, chatboty, integracje, API, technologie: PHP, Laravel, TypeScript, Node.js, Vue, MySQL, Docker',
    },
    {
      property: 'og:title',
      content: 'Let\'s Code It! – Karol Sójka | Programista, Motoryzacja, Automatyzacja',
    },
    {
      property: 'og:description',
      content: 'Portfolio i projekty Karola Sójki – doświadczonego programisty i właściciela Toyoty Supra. Łączę kod z pasją!',
    },
    {
      property: 'og:image',
      content: '/images/selfie-with-background.png',
    },
    {
      property: 'og:url',
      content: 'https://letscode.it',
    },
    // Twitter meta
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Let\'s Code It! – Karol Sójka | Programista, Motoryzacja, Automatyzacja',
    },
    {
      name: 'twitter:description',
      content: 'Oficjalna strona Karola Sójki – programista, motoryzacja, automatyzacja, Toyota Supra MK4. Zobacz projekty i portfolio!',
    },
    {
      name: 'twitter:image',
      content: '/images/selfie-with-background.png',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: `{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Karol Sójka",
        "url": "https://letscode.it",
        "image": "https://letscode.it/images/selfie-with-background.png",
        "alumniOf": {
          "@type": "Organization",
          "name": "ONX Center, TrueCode.tech, Kristonet"
        },
        "jobTitle": "Programista Full-stack",
        "sameAs": [
          "https://www.linkedin.com/in/karol-sójka-17952825b/",
          "https://github.com/karlos1998"
        ]
      }`,
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

/* Blog Section */
.blog-section {
  padding: var(--space-3xl) 0;
}

.blog-entry {
  margin-bottom: var(--space-2xl);
}

.blog-entry header {
  margin-bottom: var(--space-lg);
}

.blog-entry h3 {
  font-size: var(--font-2xl);
  margin-bottom: var(--space-md);
}

.blog-entry footer {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
}

/* Update Info */
.update-info {
  padding: var(--space-2xl) 0;
  text-align: center;
}

.update-label {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
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

/* About Section - nowy styl */
.about-section {
  padding: var(--space-3xl) 0;
}

.about-grid {
  display: flex;
  gap: var(--space-2xl);
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}

.about-card {
  flex: 1 1 340px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(251, 191, 36, 0.10);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
  margin-bottom: var(--space-xl);
}

.interests-card h2, .tech-card h2 {
  font-size: var(--font-2xl);
  font-weight: 700;
  margin-bottom: var(--space-lg);
}

.about-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.about-card ul li {
  font-size: var(--font-lg);
  color: var(--color-text-secondary);
  padding: var(--space-sm) 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
}

@media (max-width: 900px) {
  .about-grid {
    flex-direction: column;
    gap: var(--space-xl);
  }
}

.about-link {
  font-size: 0.92em;
  color: var(--color-accent);
  margin-left: 0.3em;
  text-decoration: underline dotted;
  opacity: .82;
}

.about-link:hover {
  opacity: 1;
  color: #ffcf35;
  text-decoration-style: solid;
}
</style>
