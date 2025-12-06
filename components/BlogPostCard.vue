<template>
  <div class="blog-post-card">
    <img v-if="image" :src="image" :alt="title" class="blog-card-img"/>
    <div class="blog-card-body">
      <h3 class="blog-card-title">{{ title }}</h3>
      <p class="blog-card-date" v-if="date">{{ date }}</p>
      <div class="blog-card-content" v-html="content"></div>
      <a v-if="linkedinUrl" :href="linkedinUrl" class="blog-linkedin-btn" target="_blank" rel="noopener">Zobacz na
        LinkedIn</a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {type: String, required: true},
  image: {type: String, default: ''},
  content: {type: String, required: true},
  linkedinUrl: {type: String, default: ''},
  date: {type: String, default: ''},
})
</script>
<style scoped>
.blog-post-card {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(251, 191, 36, 0.10);
  border-radius: var(--radius-xl);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  margin-bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
}

.blog-card-img {
  width: 100%;
  max-height: 230px;
  object-fit: contain;
  background: linear-gradient(90deg, #0f0f13 30%, #23232b 100%);
  border-top-left-radius: var(--radius-xl);
  border-top-right-radius: var(--radius-xl);
  padding: 12px 20px 12px 20px;
  box-shadow: 0 4px 22px #0003;
  display: block;
}

.blog-card-body {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.blog-card-title {
  font-size: var(--font-xl);
  font-weight: 800;
  margin: 0 0 var(--space-xs) 0;
  color: var(--color-accent);
}

.blog-card-date {
  font-size: var(--font-sm);
  color: var(--color-text-tertiary);
}

.blog-card-content {
  color: var(--color-text);
  font-size: var(--font-base);
}

.blog-linkedin-btn {
  margin-top: var(--space-lg);
  background: linear-gradient(90deg, #1983cc, #24a8ef 70%);
  color: #fff;
  padding: 0.72em 1.4em;
  text-decoration: none;
  border-radius: 19px;
  font-weight: 700;
  letter-spacing: 0.03em;
  display: inline-block;
  align-self: flex-start;
  transition: background 0.18s, filter 0.17s;
  box-shadow: 0 2px 8px #003b608c;
  font-size: var(--font-lg);
}

.blog-linkedin-btn:hover, .blog-linkedin-btn:focus {
  background: #2262a1;
  filter: brightness(1.08);
}
</style>
