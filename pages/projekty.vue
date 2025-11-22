<template>
  <div class="page-projects">
    <section class="section">
      <div class="main-content">
        <!-- Header -->
        <div class="page-header fade-in-up">
          <h1>
            <span>Ostatnie projekty</span>
          </h1>
        </div>

        <!-- Intro Text -->
        <div class="intro-text">
          <p class="small">
            <span>Było ich znacznie więcej, serio</span>
            <span>Ale nie wszystkimi chcę lub powinienem się chwalić :)</span>
          </p>
        </div>

        <!-- Projects List -->
        <div class="projects-section">
          <ul class="list blocks">
            <li class="list-item project-item">
              <h4>Październik, 2020</h4>
              <p>Bramka SIM na Raspberry PI</p>
              <a
                  href="https://github.com/Fadeusz/SIM-engine"
                  class="link small"
                  target="_blank"
                  title="Zobacz na GitHub"
              >
                GitHub ↗
              </a>
            </li>
            <li class="list-item project-item">
              <h4>Wrzesień, 2020</h4>
              <p>Monitor wydajności PC</p>
              <a
                  href="https://github.com/Fadeusz/HardwareMonitor"
                  class="link small"
                  target="_blank"
                  title="Zobacz na GitHub"
              >
                GitHub ↗
              </a>
            </li>
            <li class="list-item project-item">
              <h4>Sierpień, 2020</h4>
              <p>Bot SMS do grupy banków Spółdzielczych</p>
              <a
                  href="https://pbs.letscode.it"
                  class="link small"
                  target="_blank"
                  title="Zobacz projekt"
              >
                Zobacz ↗
              </a>
            </li>
            <li class="list-item project-item">
              <h4>Lipiec, 2020</h4>
              <p>Film o Długosiodle</p>
              <a
                  href="https://www.youtube.com/watch?v=fu2swf9R-Mg"
                  class="link small"
                  target="_blank"
                  title="Zobacz na YouTube"
              >
                YouTube ↗
              </a>
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
  title: 'Projekty - Karol Sójka',
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
      stagger: 0.2,
      ease: Power3.easeOut,
      delay: 0.3
    })

    // Animate projects
    gsap.from('.projects-section .project-item', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: Power3.easeOut,
      delay: 0.8
    })

    // Animate back link
    gsap.from('.back-link', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 1.5
    })
  })
})
</script>

<style scoped>
.page-projects {
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
}

.intro-text p {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.projects-section {
  margin: 3rem 0;
}

.project-item {
  position: relative;
  transition: all 0.3s ease;
}

.project-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.project-item h4 {
  color: var(--theme-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.project-item p {
  margin-bottom: 1rem;
  font-weight: 500;
}

.project-item .link {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}

.back-link {
  text-align: center;
  margin-top: 3rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .projects-section .list.blocks {
    grid-template-columns: 1fr;
  }

  .project-item .link {
    position: static;
    margin-top: 1rem;
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

  .projects-section {
    margin: 2rem 0;
  }
}
</style>
