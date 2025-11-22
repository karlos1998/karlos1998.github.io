<template>
  <div class="page-cv">
    <section class="section">
      <div class="main-content">
        <!-- Header -->
        <div class="page-header fade-in-up">
          <h1>
            <mark>Doświadczenie</mark>
            i<br/>
            Umiejętności
          </h1>
          <p class="subtitle">
            Moja droga w świecie programowania i technologii
          </p>
        </div>

        <!-- Skills Section -->
        <div class="content-section">
          <div class="section-header fade-in-up stagger-1">
            <h2>💻 Technologie</h2>
            <p>Języki programowania i narzędzia, w których się specjalizuję</p>
          </div>

          <div class="skills-grid fade-in-up stagger-2">
            <div class="glass-card skill-card">
              <div class="skill-icon">⚙️</div>
              <h4>C#</h4>
              <p>Aplikacje i dodatki systemu Windows</p>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>

            <div class="glass-card skill-card">
              <div class="skill-icon">🌐</div>
              <h4>HTML & CSS</h4>
              <p>Tworzenie i stylowanie stron WWW</p>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>

            <div class="glass-card skill-card">
              <div class="skill-icon">⚡</div>
              <h4>JavaScript</h4>
              <p>Interaktywne aplikacje webowe</p>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>

            <div class="glass-card skill-card">
              <div class="skill-icon">🐘</div>
              <h4>PHP</h4>
              <p>Backend i logika serwer</p>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%"></div>
              </div>
            </div>

            <div class="glass-card skill-card">
              <div class="skill-icon">🗄️</div>
              <h4>SQL</h4>
              <p>Zarządzanie bazami danych</p>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>

            <div class="glass-card skill-card">
              <div class="skill-icon">🎨</div>
              <h4>Vue & Nuxt</h4>
              <p>Nowoczesne aplikacje webowe</p>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 70%"></div>
              </div>
            </div>
          </div>

          <!-- Experience Timeline -->
          <div class="section-header fade-in-up stagger-3">
            <h2>🎯 Specjalizacja</h2>
            <p>Obszary, w których działam najlepiej</p>
          </div>

          <div class="experience-grid fade-in-up stagger-4">
            <div class="glass-card experience-card">
              <div class="card-header">
                <div class="experience-icon">🤖</div>
                <h3>Automatyzacja</h3>
              </div>
              <p>
                Specjalizuję się w automatyzacji pracy stron internetowych - tworzę
                oprogramowanie odpowiedzialne za generowanie odwiedzin, zwiększanie
                zaangażowania i optymalizację procesów online.
              </p>
              <div class="tags">
                <span class="badge">Web Automation</span>
                <span class="badge">Bot Development</span>
                <span class="badge">Scraping</span>
              </div>
            </div>

            <div class="glass-card experience-card">
              <div class="card-header">
                <div class="experience-icon">💬</div>
                <h3>Messenger Bots</h3>
              </div>
              <p>
                Projektuję aplikacje powiązane z komunikatorem Messenger - systemy
                odpowiadające na pytania klientów, wysyłające oferty i informacje
                o usługach w sposób zautomatyzowany.
              </p>
              <div class="tags">
                <span class="badge">Facebook API</span>
                <span class="badge">ChatBots</span>
                <span class="badge">Automation</span>
              </div>
            </div>

            <div class="glass-card experience-card">
              <div class="card-header">
                <div class="experience-icon">📱</div>
                <h3>Bramka SMS</h3>
              </div>
              <p>
                Stworzyłem bramę SMS odpowiedzialną za wysyłanie uczniom informacji
                o ocenach oraz powiadomienia dla klientów banku o nowych przelewach
                i operacjach bankowych.
              </p>
              <div class="tags">
                <span class="badge">SMS Gateway</span>
                <span class="badge">Raspberry PI</span>
                <span class="badge">IoT</span>
              </div>
            </div>

            <div class="glass-card experience-card">
              <div class="card-header">
                <div class="experience-icon">🛒</div>
                <h3>E-commerce</h3>
              </div>
              <p>
                Rozwijam oprogramowanie łączące portale handlowe i automatyzujące
                zarządzanie aukcjami. System integruje wiele platform sprzedażowych
                w jeden, spójny panel.
              </p>
              <div class="tags">
                <span class="badge">API Integration</span>
                <span class="badge">Multi-platform</span>
                <span class="badge">Automation</span>
              </div>
            </div>

            <div class="glass-card experience-card">
              <div class="card-header">
                <div class="experience-icon">🎮</div>
                <h3>Game Development</h3>
              </div>
              <p>
                Stworzyłem własną grę przeglądarkową wykorzystującą technologię Canvas
                HTML5, działającą na silniku napisanym w C#. Projekt łączy frontend
                i backend w spójne doświadczenie.
              </p>
              <div class="tags">
                <span class="badge">Canvas</span>
                <span class="badge">C# Engine</span>
                <span class="badge">WebSockets</span>
              </div>
            </div>
          </div>

          <!-- Operating Systems -->
          <div class="section-header fade-in-up stagger-5">
            <h2>🖥️ Systemy Operacyjne</h2>
            <p>Platformy, na których pracuję codziennie</p>
          </div>

          <div class="os-grid fade-in-up stagger-5">
            <div class="glass-card os-card">
              <div class="os-icon">🍎</div>
              <h4>macOS</h4>
              <p>Główne środowisko pracy</p>
            </div>

            <div class="glass-card os-card">
              <div class="os-icon">🐧</div>
              <h4>Linux Debian</h4>
              <p>Serwery i development</p>
            </div>

            <div class="glass-card os-card">
              <div class="os-icon">🪟</div>
              <h4>Windows 10</h4>
              <p>Aplikacje desktopowe</p>
            </div>
          </div>

          <!-- Additional Skills -->
          <div class="section-header fade-in-up stagger-5">
            <h2>🔧 Dodatkowe Umiejętności</h2>
            <p>Poza programowaniem</p>
          </div>

          <div class="additional-grid fade-in-up stagger-5">
            <div class="glass-card additional-card">
              <div class="additional-icon">📡</div>
              <h4>Telewizja</h4>
              <p>Montaż anten telewizji satelitarnej</p>
            </div>

            <div class="glass-card additional-card">
              <div class="additional-icon">🌐</div>
              <h4>Internet</h4>
              <p>Konfiguracja routerów i anten</p>
            </div>

            <div class="glass-card additional-card">
              <div class="additional-icon">📹</div>
              <h4>Monitoring</h4>
              <p>Montaż kamer i rejestratorów</p>
            </div>

            <div class="glass-card additional-card">
              <div class="additional-icon">⚡</div>
              <h4>Elektryka</h4>
              <p>Instalacje elektryczne</p>
            </div>
          </div>

          <!-- Education -->
          <div class="section-header fade-in-up stagger-5">
            <h2>🎓 Wykształcenie i Uprawnienia</h2>
            <p>Certyfikaty i kwalifikacje</p>
          </div>

          <div class="education-grid fade-in-up stagger-5">
            <div class="glass-card education-card">
              <div class="education-icon">🏫</div>
              <h4>Technikum Elektryczne</h4>
              <p>Szkoła średnia - kierunek techniczny</p>
            </div>

            <div class="glass-card education-card">
              <div class="education-icon">📜</div>
              <h4>Kwalifikacje E7, E8, E24</h4>
              <p>Elektryczne Kwalifikacje Zawodowe</p>
            </div>

            <div class="glass-card education-card">
              <div class="education-icon">⚡</div>
              <h4>Uprawnienia SEP</h4>
              <p>Praca z sieciami średniego napięcia</p>
            </div>

            <div class="glass-card education-card">
              <div class="education-icon">🚜</div>
              <h4>Uprawnienia II WJO</h4>
              <p>Prowadzenie wózków widłowych</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="footer fade-in stagger-5">
        <div class="links">
          <NuxtLink to="/" class="link ghost">
            <span>← Strona główna</span>
          </NuxtLink>
          <NuxtLink to="/projekty" class="link">
            <span>Zobacz projekty →</span>
          </NuxtLink>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup>
// Page head
useHead({
  title: 'Moje CV - Karol Sójka',
})

// GSAP animations
onMounted(() => {
  import('gsap').then(({gsap}) => {
    // Animate header
    gsap.from('.page-header', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    })

    // Animate skill cards
    gsap.from('.skill-card', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3
    })

    // Animate experience cards
    gsap.from('.experience-card', {
      duration: 0.8,
      x: -40,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.6
    })

    // Animate skill bars
    gsap.from('.skill-progress', {
      duration: 1.2,
      width: 0,
      ease: 'power2.out',
      delay: 0.8,
      stagger: 0.1
    })
  })
})
</script>

<style scoped>
.page-cv {
  width: 100%;
  min-height: 100vh;
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: 5rem;
}

.page-header h1 {
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Content Section */
.content-section {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin: 5rem 0 3rem;
}

.section-header h2 {
  margin-bottom: 0.75rem;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 0;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.skill-card {
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.skill-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--theme-primary);
}

.skill-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

/* Skill Bar */
.skill-bar {
  width: 100%;
  height: 6px;
  background: var(--glass-border);
  border-radius: 50px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--theme-primary), var(--theme-accent));
  border-radius: 50px;
  transition: width 1s ease;
}

/* Experience Grid */
.experience-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.experience-card {
  padding: 2.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.experience-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.experience-card h3 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--theme-primary);
}

.experience-card p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags .badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--glass-border);
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

/* OS Grid */
.os-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.os-card {
  text-align: center;
  padding: 2rem;
}

.os-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: block;
}

.os-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--theme-primary);
}

.os-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Additional Skills Grid */
.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.additional-card {
  text-align: center;
  padding: 2rem;
}

.additional-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.additional-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--theme-primary);
}

.additional-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Education Grid */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.education-card {
  padding: 2rem;
  text-align: center;
}

.education-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.education-card h4 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: var(--theme-primary);
}

.education-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Footer */
.footer {
  margin-top: 5rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .page-header {
    margin-bottom: 3rem;
  }

  .section-header {
    margin: 3rem 0 2rem;
  }

  .skills-grid,
  .os-grid,
  .additional-grid,
  .education-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .experience-card {
    padding: 1.75rem;
  }

  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .tags {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .skill-icon,
  .os-icon,
  .additional-icon,
  .education-icon {
    font-size: 2.5rem;
  }

  .experience-icon {
    font-size: 2rem;
  }
}
</style>
