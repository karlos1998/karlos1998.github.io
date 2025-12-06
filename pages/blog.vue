<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <h1 class="blog-title">Blog & posty LinkedIn</h1>
        <p class="blog-desc">
          Znajdziesz tu moje najnowsze publikacje — część dostępnych oryginalnie na LinkedIn. Kliknij "Zobacz na
          LinkedIn", aby przeczytać całość i wesprzeć mnie polubieniem lub komentarzem!
        </p>
      </div>
    </section>
    <section class="blog-section">
      <div class="container">
        <div class="blog-posts-grid">
          <BlogPostCard
              v-for="(post, idx) in posts"
              :key="post.title + idx"
              v-bind="post"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BlogPostCard from '~/components/BlogPostCard.vue'

const posts = [
  {
    title: 'Jak stary modem 3G może stać się nowoczesną bramką telefoniczną',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGSWQC7fReL8w/feedshare-shrink_800/B4DZiUwjcBHYAk-/0/1754842417240?e=1766620800&v=beta&t=LqLyzgWkF5pCMF1733kZzFO9rTSVszf98QMVFzetghM',
    date: '',
    linkedinUrl: '',
    content: `Zrobiłem przykładowe repozytorium, które pozwala… zadzwonić pod dowolny numer i odtworzyć w słuchawce plik .wav.<br>node run.mjs +45123456789 file.wav<br><ul><li>📞 Telefon odbiorcy dzwoni</li><li>🔊 W słuchawce leci Twój plik audio</li><li>💾 Rozmowa od razu nagrywa się na dysk</li></ul>To otwiera ogromne możliwości — od voicebotów, po automaty do komunikatów głosowych czy systemy nagrywania.<br>Repo: <a href='https://lnkd.in/dsDjkxKK' target='_blank'>https://lnkd.in/dsDjkxKK</a><br><br><em>Więcej info o modemie, unlocku softu i inspiracje w pełnym poście na LinkedIn oraz w repo. 😎</em>`
  },
  {
    title: 'Margonem 2010 – własny silnik MMORPG!',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQFKU2MwKR-r6Q/feedshare-shrink_800/feedshare-shrink_800/0/1732917785664?e=1766620800&v=beta&t=CBw6JNzz9zAKmJ5hUGtMOzBZCRZ1_2VVdjOoZu4wwWg',
    date: '',
    linkedinUrl: '',
    content: `Stworzyłem własny silnik i klienta gry przeglądarkowej w stylu Margonem 2010, z nowoczesnym stackiem oraz Canvas+Vue3+Laravel+TS.<br><strong>Technologie:</strong><ul><li>PHP 8.3 + Laravel 11 + Inertia.js + TypeScript + Vue 3</li><li>Java 23 + Spring Boot + MariaDB + MongoDB</li><li>WebSocket, GraphQL</li></ul>Całość zbiera dane przez scrap oraz API. Zobacz screenshota na obrazku!`,
  },
  {
    title: 'Zaawansowany system SMS/MMS/API automatyzacji połączeń',
    image: '',
    date: '',
    linkedinUrl: 'https://www.linkedin.com/posts/karol-sójka-17952825b_chciałbym-zaprezentować-projekt-nad-którym-activity-7258257331140878336-kwD5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_4xO0B8lITzgpWQHAN3syh-w_Wdvia-k0',
    content: `Aplikacja do obsługi SMS/MMS i zaawansowanego IVR dla firm. Integracja z numerami, automatyczne odbieranie, API, powiadomienia, voiceboty i interaktywny flow połączeń. <br><a href='https://www.linkedin.com/posts/karol-sójka-17952825b_chciałbym-zaprezentować-projekt-nad-którym-activity-7258257331140878336-kwD5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_4xO0B8lITzgpWQHAN3syh-w_Wdvia-k0' target='_blank'>Zobacz pełen opis na LinkedIn</a>`
  }
]
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
}

.blog-hero {
  padding: var(--space-3xl) 0 var(--space-xl);
  text-align: center;
}

.blog-title {
  font-size: var(--font-4xl);
  font-weight: 800;
  margin-bottom: var(--space-lg);
  letter-spacing: -0.01em;
}

.blog-desc {
  font-size: var(--font-lg);
  color: var(--color-text-secondary);
  margin: 0 auto 2.6em;
  max-width: 720px;
}

.blog-section {
  padding-bottom: var(--space-3xl);
}

.blog-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--space-xl);
}
</style>
