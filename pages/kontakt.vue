<template>
  <div class="contact-page theme-green">
    <section class="section">
      <div class="container">
        <div class="contact-wrapper">
          <!-- Header -->
          <header class="page-header">
            <h1 class="gradient-text">Skontaktuj się ze mną</h1>
            <p class="lead">Odpowiadam zwykle w ciągu 24 godzin</p>
            <div class="accent-line mt-lg"></div>
          </header>

          <div class="contact-content">
            <!-- Left Column - Info -->
            <div class="contact-info">
              <div class="info-section">
                <h3>Najlepszy sposób</h3>
                <p class="info-text">
                  Preferuję kontakt przez email. Pozwala mi to na przemyślane odpowiedzi
                  i dokumentację całej komunikacji.
                </p>
              </div>

              <div class="info-section">
                <h3>Email</h3>
                <div v-if="!emailRevealed" class="email-hidden">
                  <button @click="revealEmail" class="btn btn-outline">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M3 8l7 5 7-5M3 8v7a2 2 0 002 2h10a2 2 0 002-2V8M3 8l7-5 7 5" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Pokaż adres email
                  </button>
                  <p class="info-hint">Kliknij aby zobaczyć adres email</p>
                </div>
                <div v-else class="email-revealed">
                  <a :href="`mailto:${email}`" class="email-link">
                    {{ email }}
                  </a>
                  <button @click="copyEmail" class="btn-copy" :class="{ copied: emailCopied }">
                    <svg v-if="!emailCopied" width="18" height="18" viewBox="0 0 20 20" fill="none"
                         stroke="currentColor">
                      <path
                          d="M8 2H3a2 2 0 00-2 2v10a2 2 0 002 2h5m5-14h5a2 2 0 012 2v10a2 2 0 01-2 2h-5M8 2v14m5-14v14"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg v-else width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{ emailCopied ? 'Skopiowano!' : 'Kopiuj' }}
                  </button>
                </div>
              </div>

              <div class="info-section">
                <h3>Lokalizacja</h3>
                <p class="info-text">
                  Długosiodło, Mazowsze
                  <br/>
                  <span class="text-subtle">Spotkania online lub w okolicy Warszawy</span>
                </p>
              </div>

              <div class="info-section">
                <h3>Social Media</h3>
                <div class="social-links">
                  <a href="http://facebook.com/Fadeusz" target="_blank" class="social-link">
                    <span>Facebook</span>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M10 3l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right Column - Quick Message Form -->
            <div class="contact-form-wrapper">
              <div class="form-card">
                <h3>Szybka wiadomość</h3>
                <p class="form-description">
                  Wypełnij formularz, a skontaktuję się z Tobą najszybciej jak to możliwe.
                </p>

                <form @submit.prevent="handleSubmit" class="contact-form">
                  <div class="form-group">
                    <label for="name">Imię i nazwisko *</label>
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        required
                        placeholder="Jan Kowalski"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email">Twój email *</label>
                    <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        required
                        placeholder="jan@example.com"
                    />
                  </div>

                  <div class="form-group">
                    <label for="subject">Temat</label>
                    <input
                        type="text"
                        id="subject"
                        v-model="form.subject"
                        placeholder="Projekt automatyzacji"
                    />
                  </div>

                  <div class="form-group">
                    <label for="message">Wiadomość *</label>
                    <textarea
                        id="message"
                        v-model="form.message"
                        required
                        rows="6"
                        placeholder="Opisz swoją potrzebę..."
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">Wyślij wiadomość</span>
                    <span v-else>Wysyłanie...</span>
                  </button>

                  <p v-if="submitMessage" class="submit-message" :class="submitStatus">
                    {{ submitMessage }}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const emailRevealed = ref(false)
const emailCopied = ref(false)
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

// Email obfuscated - will be decoded on client side
const email = computed(() => {
  return 'kontakt' + '@' + 'letscode.it'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

useHead({
  title: 'Kontakt - Let\'s Code It - Karol Sójka',
  meta: [
    {
      name: 'description',
      content: 'Skontaktuj się ze mną w sprawie projektu. Email, formularz kontaktowy lub social media.'
    }
  ]
})

const revealEmail = () => {
  emailRevealed.value = true
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email.value)
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  // Simulate form submission (replace with actual API call)
  try {
    // Create mailto link with form data
    const mailtoLink = `mailto:${email.value}?subject=${encodeURIComponent(form.subject || 'Wiadomość z formularza kontaktowego')}&body=${encodeURIComponent(
        `Imię: ${form.name}\nEmail: ${form.email}\n\nWiadomość:\n${form.message}`
    )}`

    window.location.href = mailtoLink

    submitMessage.value = 'Otworzono klienta email. Wyślij wiadomość aby dokończyć.'
    submitStatus.value = 'success'

    // Reset form
    setTimeout(() => {
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      submitMessage.value = ''
    }, 3000)
  } catch (error) {
    submitMessage.value = 'Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na email.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.page-header h1 {
  font-size: var(--font-5xl);
  margin-bottom: var(--space-md);
}

.lead {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
  margin: 0;
}

.accent-line {
  margin: var(--space-lg) auto 0;
}

/* Content Grid */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-3xl);
  align-items: start;
}

/* Left Column - Info */
.contact-info {
  position: sticky;
  top: 100px;
}

.info-section {
  margin-bottom: var(--space-2xl);
}

.info-section h3 {
  font-size: var(--font-xl);
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.info-text {
  font-size: var(--font-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Email Section */
.email-hidden {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.info-hint {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
  margin: 0;
}

.email-revealed {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.email-link {
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  padding: var(--space-sm) var(--space-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  transition: all 0.3s var(--ease);
}

.email-link:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent);
}

.btn-copy {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-sm);
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.3s var(--ease);
}

.btn-copy:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-text);
}

.btn-copy.copied {
  background: rgba(16, 185, 129, 0.1);
  border-color: var(--color-accent-green);
  color: var(--color-accent-green);
}

/* Social Links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-base);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.3s var(--ease);
}

.social-link:hover {
  color: var(--color-accent);
  transform: translateX(4px);
}

.social-link svg {
  transition: transform 0.3s var(--ease);
}

.social-link:hover svg {
  transform: translateX(2px);
}

/* Right Column - Form */
.form-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
}

.form-card h3 {
  font-size: var(--font-2xl);
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.form-description {
  font-size: var(--font-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-group label {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--space-md);
  font-size: var(--font-base);
  font-family: inherit;
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  transition: all 0.3s var(--ease);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-message {
  font-size: var(--font-sm);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  margin: 0;
}

.submit-message.success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--color-accent-green);
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--color-accent-red);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .contact-info {
    position: static;
  }
}

@media (max-width: 640px) {
  .page-header h1 {
    font-size: var(--font-4xl);
  }

  .form-card {
    padding: var(--space-xl);
  }

  .email-revealed {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
