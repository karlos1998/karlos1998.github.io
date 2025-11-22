<template>
  <div class="page-secret">
    <section class="section">
      <div class="main-content">
        <!-- Header -->
        <div class="page-header fade-in-up">
          <h1>
            <span>Zdradź mi swój sekret</span>
          </h1>
        </div>

        <!-- Form -->
        <div class="form-container">
          <form @submit.prevent="submitForm" class="form">
            <div class="field">
              <label for="secret-message">Mój sekret to...</label>
              <textarea
                  id="secret-message"
                  v-model="message"
                  placeholder="Wpisz swoją wiadomość..."
                  :disabled="isSubmitting"
                  required
              ></textarea>
            </div>

            <button
                type="submit"
                class="submit"
                :disabled="isSubmitting || !message.trim()"
            >
              {{ submitButtonText }}
            </button>

            <!-- Status Messages -->
            <div class="status" :class="statusClass" v-if="statusMessage">
              <span>{{ statusMessage }}</span>
            </div>
          </form>
        </div>

        <!-- Footer Links -->
        <footer class="footer">
          <div class="links">
            <NuxtLink to="/cv" class="link small alt" title="Zobacz moje CV">
              Zobacz moje CV!
            </NuxtLink>
            <NuxtLink to="/" class="link small alt" title="Strona główna">
              Strona główna
            </NuxtLink>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script setup>
// Reactive data
const message = ref('')
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusClass = ref('')

// Computed
const submitButtonText = computed(() => {
  if (isSubmitting.value) return 'Wysyłanie...'
  return 'Submit'
})

// Methods
const submitForm = async () => {
  if (!message.value.trim()) return

  isSubmitting.value = true
  statusMessage.value = 'Zaczekaj chwilkę... Wysyłam to prosto do siebie.'
  statusClass.value = 'waiting'

  try {
    // Simulate API call - in real implementation, this would send to a backend
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Success
    statusMessage.value = 'Okej, wiadomość doleciała prosto do mnie. Żadnych świadków.'
    statusClass.value = 'success'
    message.value = ''

    // Reset after 5 seconds
    setTimeout(() => {
      statusMessage.value = ''
      statusClass.value = ''
    }, 5000)

  } catch (error) {
    // Error
    statusMessage.value = 'Coś poszło nie tak... Spróbuj proszę innym razem.'
    statusClass.value = 'error'

    // Reset after 5 seconds
    setTimeout(() => {
      statusMessage.value = ''
      statusClass.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

// Page head
useHead({
  title: 'Sekret - Karol Sójka',
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

    // Animate form
    gsap.from('.form-container', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.3
    })

    // Animate footer
    gsap.from('.footer .links', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      stagger: 0.2,
      ease: Power3.easeOut,
      delay: 0.8
    })
  })
})
</script>

<style scoped>
.page-secret {
  width: 100%;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 3rem;
  text-align: center;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.field label {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}

.field textarea {
  width: 100%;
  min-height: 150px;
  padding: 1.5rem;
  border: 3px solid var(--theme-secondary);
  border-radius: 16px;
  font-family: inherit;
  font-size: 1.1rem;
  line-height: 1.6;
  resize: vertical;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.field textarea:focus {
  outline: none;
  border-color: var(--theme-primary);
  box-shadow: 0 0 0 4px rgba(39, 174, 96, 0.1);
  transform: translateY(-2px);
}

.field textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit {
  align-self: center;
  min-width: 200px;
}

.status {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.footer {
  margin-top: auto;
  text-align: center;
  padding: 2rem 0;
}

.footer .links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .page-header {
    margin-bottom: 2rem;
  }

  .form-container {
    padding: 0 1rem;
  }

  .field textarea {
    font-size: 1rem;
    padding: 1.2rem;
  }

  .footer .links {
    gap: 1rem;
  }

  .footer .link {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .field label {
    font-size: 1.1rem;
  }

  .field textarea {
    min-height: 120px;
    padding: 1rem;
  }

  .submit {
    min-width: 180px;
    padding: 0.8rem 1.5rem;
  }
}
</style>
