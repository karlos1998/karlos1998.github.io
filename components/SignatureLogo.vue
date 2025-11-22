<template>
  <div class="signature" @click="goHome">
    <img
        :src="signatureUrl"
        alt="Let's Code It! - Karol Sójka"
        @error="handleImageError"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useRouter} from 'vue-router'

// Router instance
const router = useRouter()

// Computed
const signatureUrl = computed(() => '/images/signature.png')

// Methods
const goHome = () => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/')
  } else {
    // If already on home, scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn('Signature image failed to load, trying alternative...')

  // Try alternative signature image
  img.src = '/images/signature-tmp.png'
}
</script>

<style scoped>
.signature {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}

.signature:hover {
  transform: scale(1.05) rotate(-1deg);
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.2));
}

.signature img {
  height: 60px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.signature:active img {
  transform: scale(0.98);
}

/* Pulse animation for logo */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.signature:hover img {
  animation: pulse 2s infinite;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .signature {
    top: 1rem;
    left: 1rem;
  }

  .signature img {
    height: 50px;
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .signature img {
    height: 40px;
    max-width: 120px;
  }
}
</style>
