<template>
  <div class="page-home">
    <section class="section">
      <div class="main-content">
        <!-- Hero Content -->
        <div class="hero-content">
          <div class="hero-badge fade-in stagger-1">
            <span class="badge">👋 Cześć, witaj na moim portfolio</span>
          </div>

          <h1 class="hero-title fade-in-up stagger-2">
            Jestem
            <mark>Karol Sójka</mark>
            <br/>
            Programista
            <mark>Back-end</mark>
            <br/>
            i Informatyk
          </h1>

          <p class="hero-description fade-in-up stagger-3">
            24-letni pasjonat technologii z Długosiodła. Specjalizuję się w automatyzacji,
            tworzeniu aplikacji webowych i systemów informatycznych.
          </p>

          <!-- Info Cards -->
          <div class="info-grid fade-in-up stagger-4">
            <div class="glass-card info-card">
              <div class="icon">📍</div>
              <div class="content">
                <h4>Lokalizacja</h4>
                <p>
                  <a
                      href="https://www.google.pl/maps/place/Długosiodło/@52.7598648,21.589823,16.32z/data=!4m5!3m4!1s0x471ef84e099dfe9f:0x768449c1893d7251!8m2!3d52.7591559!4d21.5923706"
                      target="_blank"
                      class="link-inline"
                  >
                    Długosiodło, Mazowsze
                  </a>
                </p>
              </div>
            </div>

            <div class="glass-card info-card">
              <div class="icon">✉️</div>
              <div class="content">
                <h4>Email</h4>
                <p>
                  <a href="mailto:kontakt@letscode.it" class="link-inline">
                    kontakt@letscode.it
                  </a>
                </p>
              </div>
            </div>

            <div class="glass-card info-card">
              <div class="icon">💬</div>
              <div class="content">
                <h4>GG Komunikator</h4>
                <p>
                  <a href="gg:18993644" class="link-inline">
                    18993644
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-links fade-in-up stagger-5">
            <NuxtLink to="/cv" class="link" title="Zobacz moje CV">
              <span>📄 Moje CV</span>
            </NuxtLink>
            <NuxtLink to="/projekty" class="link alt" title="Zobacz projekty">
              <span>🚀 Projekty</span>
            </NuxtLink>
            <NuxtLink to="/sekret" class="link ghost" title="Wyślij wiadomość">
              <span>💌 Kontakt</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <footer class="footer fade-in stagger-5">
        <div class="social-links">
          <a
              href="http://facebook.com/Fadeusz"
              class="social-link"
              target="_blank"
              title="Facebook (@Fadeusz)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup>
// Page head
useHead({
  title: "Let's Code It! - Karol Sójka",
})

// GSAP animations
onMounted(() => {
  import('gsap').then(({gsap}) => {
    // Smooth scroll animations on elements
    gsap.from('.hero-title', {
      duration: 1.2,
      y: 60,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.2
    })

    gsap.from('.hero-description', {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.4
    })

    gsap.from('.info-card', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.6
    })

    gsap.from('.action-links .link', {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 1
    })

    // Floating animation for cards
    gsap.to('.info-card', {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true
      }
    })
  })
})
</script>

<style scoped>
.page-home {
  width: 100%;
  min-height: 100vh;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  margin-bottom: 2rem;
}

.hero-badge .badge {
  font-size: 0.9rem;
  padding: 0.625rem 1.25rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px);
  animation: pulse 3s ease-in-out infinite;
}

.hero-title {
  margin-bottom: 2rem;
  line-height: 1.15;
  text-align: center;
}

.hero-description {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.info-card {
  text-align: left;
  padding: 1.75rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-card .icon {
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 1;
}

.info-card .content {
  flex: 1;
}

.info-card h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.info-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.link-inline {
  color: var(--theme-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}

.link-inline:hover {
  color: var(--theme-accent);
  border-bottom-color: var(--theme-accent);
}

/* Action Links */
.action-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.action-links .link {
  min-width: 180px;
}

/* Footer */
.footer {
  margin-top: 6rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: var(--theme-primary);
  color: var(--theme-text);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .action-links {
    flex-direction: column;
    width: 100%;
  }

  .action-links .link {
    width: 100%;
    min-width: auto;
  }

  .hero-badge .badge {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }

  .hero-description {
    font-size: 1rem;
  }

  .info-card {
    padding: 1.25rem;
  }

  .info-card .icon {
    font-size: 1.5rem;
  }
}
</style>
