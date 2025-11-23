<template>
  <Transition name="loader">
    <div v-if="isLoading" class="page-loader">
      <div class="loader-content">
        <div class="loader-logo">
          <span class="logo-text gradient-text">Let's Code It</span>
        </div>
        <div class="loader-spinner">
          <div class="spinner"></div>
        </div>
        <p class="loader-text">Ładowanie...</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isLoading = ref(true)

onMounted(() => {
  // Always show loader for minimum 3 seconds for better visual experience
  const startTime = Date.now()
  const minimumLoadTime = 3000 // 3 seconds

  nextTick(() => {
    const elapsed = Date.now() - startTime
    const remainingTime = Math.max(0, minimumLoadTime - elapsed)

    setTimeout(() => {
      isLoading.value = false
    }, remainingTime)
  })
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.loader-logo {
  animation: fadeInUp 0.6s ease-out;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.loader-spinner {
  animation: fadeIn 0.6s ease-out 0.3s both;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(251, 191, 36, 0.1);
  border-top-color: #fbbf24;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loader-text {
  font-size: 0.875rem;
  color: #999;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  animation: fadeIn 0.6s ease-out 0.5s both;
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition */
.loader-enter-active {
  transition: opacity 0.3s ease;
}

.loader-leave-active {
  transition: opacity 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>
