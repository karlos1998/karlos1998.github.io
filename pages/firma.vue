<template>
  <div class="company-page">
    <section class="company-hero">
      <div class="container">
        <h1 class="company-title">O firmie Let's Code IT – Karol Sójka</h1>
        <p class="company-subtitle">Oficjalne dane rejestrowe oraz profil działalności – pełna transparentność.
          Profesjonalizm, bezpieczeństwo, zaufanie.</p>
      </div>
    </section>
    <section class="company-info">
      <div class="container">
        <div class="company-grid">
          <div class="company-card">
            <h2>Dane kontaktowe</h2>
            <p>
              Królowej Jadwigi 18<br>
              07-210 Długosiodło
            </p>
            <p>NIP: <b>7622021352</b><br>
              REGON: <b>528447821</b></p>
          </div>
          <div class="company-card">
            <h2>Dane firmowe</h2>
            <p>Nazwa pełna:<br><b>Let's Code IT - Karol Sójka</b></p>
            <p>Adres rejestrowy:<br>
              ul. Królowej Jadwigi 18<br>
              07-210 Długosiodło
            </p>
            <p>NIP: <b>7622021352</b><br>
              REGON: <b>528447821</b></p>
            <p>Forma prawna: <b>Indywidualna działalność gospodarcza</b></p>
            <p>Data rozpoczęcia działalności: <b>02.05.2024</b></p>
          </div>
          <div class="company-card">
            <h2>Profil działalności</h2>
            <p>Działalność usługowa w zakresie telekomunikacji, programowania komputerowego, doradztwa, infrastruktury
              obliczeniowej oraz pozostała działalność usługowa w zakresie informacji.</p>
            <p>Kod PKD: <b>62.01.Z</b> – Działalność związana z oprogramowaniem</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Let's Code IT – Karol Sójka | Oficjalne dane firmy, NIP, rejestr, działalność",
  meta: [
    {
      name: 'description',
      content: 'Pełne dane rejestrowe firmy: NIP, REGON, adres, forma prawna, profil działalności. Twoje bezpieczeństwo i zaufanie – sprawdź profesjonalną firmę Karol Sójka – Let\'s Code IT.'
    }
  ]
})
</script>

<style scoped>
/*.company-page {
  min-height: 100vh;
  background: var(--color-bg);
}*/

.company-hero {
  padding: var(--space-3xl) 0 var(--space-xl);
  text-align: center;
}

.company-title {
  font-size: var(--font-4xl);
  font-weight: 800;
  margin-bottom: var(--space-lg);
}

.company-subtitle {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3xl);
}

.company-info {
  padding: var(--space-2xl) 0 var(--space-3xl);
}

.company-grid {
  display: flex;
  gap: var(--space-2xl);
  flex-wrap: wrap;
  justify-content: center;
}

.company-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(251, 191, 36, 0.10);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl) var(--space-xl);
  min-width: 290px;
  max-width: 390px;
  margin-bottom: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.company-card h2 {
  font-size: var(--font-xl);
  margin-bottom: var(--space-md);
  color: var(--color-accent);
  font-weight: 700;
}

.company-card b {
  color: var(--color-accent);
  letter-spacing: 0.5px;
}

@media (max-width: 900px) {
  .company-grid {
    flex-direction: column;
    align-items: center;
  }

  .company-card {
    width: 100%;
    max-width: 600px;
  }
}
</style>
