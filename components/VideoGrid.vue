<template>
  <div class="video-grid-section">
    <h2 v-if="title" class="film-section-title">{{ title }}</h2>
    <div class="yt-grid">
      <VideoCard
          v-for="(video, idx) in videos"
          :key="video.youtubeId + idx"
          :title="video.title"
          :youtubeId="video.youtubeId"
          :url="video.url"
      />
    </div>
  </div>
</template>

<script setup>
import VideoCard from './VideoCard.vue'

defineProps({
  title: String,
  videos: {type: Array, required: true},
})
</script>

<style scoped>
.video-grid-section {
  margin-bottom: 3.5rem;
}

.film-section-title {
  font-size: var(--font-2xl);
  margin-bottom: var(--space-md);
  margin-top: var(--space-2xl);
}

.yt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

@media (max-width: 600px) {
  .yt-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
</style>
