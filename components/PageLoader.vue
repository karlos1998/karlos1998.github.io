<template>
  <Transition name="loader">
    <div v-if="isLoading" class="page-loader">
      <!-- Subtle animated stars -->
      <div class="stars">
        <div v-for="i in 50" :key="i" class="star" :style="getStarStyle(i)"></div>
      </div>

      <!-- Main loader content -->
      <div class="loader-content">
        <!-- Elegant animated dots -->
        <div class="spinner-wrapper">
          <div class="dots-spinner">
            <div class="spinner-dot" v-for="i in 8" :key="i" :style="{ '--delay': `${i * 0.1}s`, '--i': i }"></div>
          </div>
        </div>

        <!-- Logo with reveal animation -->
        <div class="loader-logo">
          <div class="logo-wrapper">
            <span class="logo-text">
              <span v-for="(char, index) in logoText" :key="index" class="char"
                    :style="{ animationDelay: `${index * 0.05}s` }">
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
            </span>
          </div>
          <div class="logo-underline"></div>
        </div>

        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <p class="progress-text">{{ progress }}%</p>
        </div>

        <!-- Loading text -->
        <p class="loader-text">
          Przygotowywanie<span class="dots">
            <span class="dot">.</span>
            <span class="dot">.</span>
            <span class="dot">.</span>
          </span>
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isLoading = ref(true)
const progress = ref(0)
const logoText = "Let's Code It".split('')

const getStarStyle = (index) => {
  const size = Math.random() * 2 + 1
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${2 + Math.random() * 3}s`
  }
}

onMounted(() => {
  // Animate progress bar
  const startTime = Date.now()
  const minimumLoadTime = 3000

  const progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime
    const newProgress = Math.min(Math.floor((elapsed / minimumLoadTime) * 100), 100)
    progress.value = newProgress

    if (newProgress >= 100) {
      clearInterval(progressInterval)
    }
  }, 30)

  nextTick(() => {
    const elapsed = Date.now() - startTime
    const remainingTime = Math.max(0, minimumLoadTime - elapsed)

    setTimeout(() => {
      isLoading.value = false
      clearInterval(progressInterval)
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
  overflow: hidden;
}

/* Subtle stars */
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.star {
  position: absolute;
  background: #fbbf24;
  border-radius: 50%;
  opacity: 0;
  animation: starTwinkle ease-in-out infinite;
}

@keyframes starTwinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.6;
    transform: scale(1);
  }
}

/* Main content */
.loader-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 2;
}

/* Spinner */
.spinner-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
}

.dots-spinner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
  animation: dotPulse 1.6s ease-in-out infinite;
  animation-delay: var(--delay);

  /* Position dots in circle */
  --angle: calc(360deg / 8 * (var(--i)));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(calc(45deg * (var(--i) - 1))) translateY(-35px);
}

.spinner-dot:nth-child(1) {
  --i: 1;
}

.spinner-dot:nth-child(2) {
  --i: 2;
}

.spinner-dot:nth-child(3) {
  --i: 3;
}

.spinner-dot:nth-child(4) {
  --i: 4;
}

.spinner-dot:nth-child(5) {
  --i: 5;
}

.spinner-dot:nth-child(6) {
  --i: 6;
}

.spinner-dot:nth-child(7) {
  --i: 7;
}

.spinner-dot:nth-child(8) {
  --i: 8;
}

@keyframes dotPulse {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(calc(45deg * (var(--i) - 1))) translateY(-35px) scale(0.5);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) rotate(calc(45deg * (var(--i) - 1))) translateY(-35px) scale(1.2);
    opacity: 1;
  }
}

/* Logo */
.loader-logo {
  margin-bottom: 1rem;
}

.logo-wrapper {
  overflow: hidden;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  display: flex;
}

.char {
  display: inline-block;
  animation: charReveal 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #fbbf24;
}

@keyframes charReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-underline {
  height: 2px;
  background: linear-gradient(90deg, transparent, #fbbf24, transparent);
  margin-top: 0.75rem;
  animation: underlineGrow 1s ease-out 0.3s forwards;
  transform: scaleX(0);
  border-radius: 1px;
}

@keyframes underlineGrow {
  to {
    transform: scaleX(1);
  }
}

/* Progress bar */
.progress-container {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fadeIn 0.4s ease-out 0.8s both;
}

.progress-bar {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
  border-radius: 1px;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.4);
}

.progress-text {
  text-align: center;
  font-size: 0.7rem;
  color: #666;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.1em;
}

/* Loading text */
.loader-text {
  font-size: 0.75rem;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  animation: fadeIn 0.4s ease-out 1s both;
}

.dots {
  display: inline-flex;
  gap: 2px;
}

.dot {
  animation: dotBounce 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dotBounce {
  0%, 60%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    opacity: 0.3;
    transform: translateY(-4px);
  }
}

/* General animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Transition */
.loader-enter-active {
  transition: opacity 0.3s ease;
}

.loader-leave-active {
  transition: all 0.6s ease;
}

.loader-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 640px) {
  .logo-text {
    font-size: 2rem;
  }

  .progress-container {
    width: 240px;
  }

  .spinner-wrapper {
    width: 100px;
    height: 100px;
  }
}
</style>
