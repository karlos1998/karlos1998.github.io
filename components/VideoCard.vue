<template>
  <div class="yt-card">
    <iframe :src="`https://www.youtube.com/embed/${youtubeId}`" :title="title" frameborder="0" allowfullscreen></iframe>
    <div class="yt-desc">
      {{ title }}
      <a class="yt-link" :href="url" target="_blank" rel="noopener">Otwórz na YouTube</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Video} from '~/types/interfaces'

const {title, youtubeId, url} = defineProps<Video>()
</script>

<style scoped>
.yt-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(251, 191, 36, 0.09);
  border-radius: var(--radius-xl);
  padding: var(--space-md);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 380px;
}

.yt-card iframe {
  border-radius: 20px;
  width: 100%;
  min-height: 202px;
  max-width: 420px;
}

.yt-desc {
  margin-top: var(--space-lg);
  text-align: center;
  font-size: var(--font-base);
  color: var(--color-text-secondary);
  font-weight: 600;
}

.yt-link {
  display: block;
  margin: 0.3em auto 0;
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: underline;
}
</style>
