<template>
  <div class="page-films">
    <section class="section">
      <div class="main-content">
        <!-- Header -->
        <div class="page-header fade-in-up">
          <h1>
            <span>Spis Filmów</span>
          </h1>
        </div>

        <!-- Intro Text -->
        <div class="intro-text">
          <p class="small">
            <span>Czy własna strona to dobre miejsce</span>
            <span>na pokazanie obejrzanych filmów?</span>
            <span>Zwłaszcza jeśli</span>
            <span>praktycznie nic się nie ogląda.</span>
            <span>A więc proszę :)</span>
          </p>
        </div>

        <!-- Films List -->
        <div class="films-section">
          <ul class="list blocks">
            <!-- Current Recommendation -->
            <li class="list-item film-item current">
              <h4>A może by tak...</h4>
              <p>obejrzać film?</p>
              <span class="current-label">Aktualna propozycja</span>
              <br>
              <strong>Więzień Labiryntu</strong>
              <div class="film-actions">
                <NuxtLink
                    to="/filmy/all"
                    class="link small"
                    title="Pełna lista filmów"
                >
                  Zobacz pełną listę
                </NuxtLink>
              </div>
            </li>

            <!-- Watched Films -->
            <li class="list-item film-item archived">
              <h4>Obejrzany</h4>
              <p>Niepamięć</p>
            </li>
            <li class="list-item film-item archived">
              <h4>Obejrzany</h4>
              <p>Jestem matką</p>
            </li>
            <li class="list-item film-item archived">
              <h4>Obejrzany</h4>
              <p>Pamięć Absolutna</p>
            </li>
            <li class="list-item film-item archived">
              <h4>Obejrzany</h4>
              <p>8 Mila</p>
            </li>

            <!-- To Watch -->
            <li class="list-item film-item pending">
              <h4>Film</h4>
              <p>Tenet</p>
            </li>
            <li class="list-item film-item pending">
              <h4>Wszystkie Części</h4>
              <p>Gwiezdne Wojny</p>
            </li>

            <!-- Series -->
            <li class="list-item film-item archived">
              <h4>Obejrzany, Serial</h4>
              <p>Mr. Robot</p>
            </li>
          </ul>
        </div>

        <!-- Back Link -->
        <div class="back-link">
          <NuxtLink to="/" class="link router" title="Strona główna">
            Strona główna
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page head
useHead({
  title: 'Filmy - Karol Sójka',
})

// GSAP animations
onMounted(() => {
  import('gsap').then(({gsap, Power3}) => {
    // Animate header
    gsap.from('.page-header h1 span', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: Power3.easeOut
    })

    // Animate intro text
    gsap.from('.intro-text p span', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: Power3.easeOut,
      delay: 0.3
    })

    // Animate films
    gsap.from('.films-section .film-item', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.1,
      ease: Power3.easeOut,
      delay: 0.8
    })

    // Animate back link
    gsap.from('.back-link', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 1.8
    })
  })
})
</script>

<style scoped>
.page-films {
  width: 100%;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 2rem;
  text-align: center;
}

.intro-text {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.intro-text p {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
}

.films-section {
  margin: 3rem 0;
}

.film-item {
  position: relative;
  transition: all 0.3s ease;
}

.film-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.film-item.current {
  border-left-color: var(--yellow-primary);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 255, 255, 0.05));
}

.film-item.current .current-label {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--yellow-primary);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.film-item h4 {
  color: var(--theme-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.film-item p {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.film-item strong {
  display: block;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: var(--theme-dark);
}

.film-actions {
  margin-top: 1rem;
}

.back-link {
  text-align: center;
  margin-top: 3rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .films-section .list.blocks {
    grid-template-columns: 1fr;
  }

  .film-item .current-label {
    position: static;
    margin-bottom: 1rem;
    align-self: flex-start;
  }

  .film-item .link {
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .page-header {
    margin-bottom: 1.5rem;
  }

  .intro-text {
    margin-bottom: 2rem;
  }

  .intro-text p {
    font-size: 0.95rem;
  }

  .films-section {
    margin: 2rem 0;
  }

  .film-item strong {
    font-size: 1.1rem;
  }
}
</style>
