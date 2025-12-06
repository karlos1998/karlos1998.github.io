<template>
  <div class="car-passion-page">
    <section class="car-hero">
      <div class="container">
        <h1 class="car-title">Pasja samochodowa – Toyota Supra MK4 & JDM Events</h1>
        <p class="car-intro">
          Poniżej znajdziesz playlistę unikalnych filmów z polskich (i nie tylko) spotów motoryzacyjnych – Supra MK4
          Team Poland oraz klimatycznych japońskich eventów typu Kanjo Nights na YouTube.<br>
          <strong>Uwaga</strong>: Nie jestem autorem poniższych filmów. Zachęcam do odwiedzenia i subskrybowania kanałów
          ich twórców oraz wspierania ich działań w social mediach!
        </p>
      </div>
    </section>
    <section class="car-films-section">
      <div class="container">
        <VideoGrid
            title="Supra MK4 Team Poland – Eventy & Zloty"
            :videos="supraVideos"
        />
        <VideoGrid
            title="Spoty JDM / Kanjo Night Warsaw"
            :videos="kanjoVideos"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoGrid from '~/components/VideoGrid.vue'
import type {Video} from '~/types/interfaces'

const supraVideos: Video[] = [
  {
    title: 'Supra MKIV Team Poland meet - Bieszczady 2021',
    youtubeId: 'h9wBMa4WEEE',
    url: 'https://www.youtube.com/watch?v=h9wBMa4WEEE',
  },
  {
    title: 'Supra MKIV Team Poland meet - Kotlina Kłodzka 2022',
    youtubeId: 'VvPg7Vcg2ns',
    url: 'https://www.youtube.com/watch?v=VvPg7Vcg2ns',
  },
  {
    title: 'Najlepszy wyjazd Suprą ever! | Oficjalny Zlot Toyota Supra MK4 Polska',
    youtubeId: 'l6s6Idko5qk',
    url: 'https://www.youtube.com/watch?v=l6s6Idko5qk',
  },
  {
    title: 'Supra MKIV Team Poland meet - Bukowina Tatrzańska 2023',
    youtubeId: 'k-6KNEyB6iI',
    url: 'https://www.youtube.com/watch?v=k-6KNEyB6iI',
  },
]

const kanjoVideos: Video[] = [
  {
    title: 'Kanjo Night Warsaw 16/X/22',
    youtubeId: 'Fb0sWwoerPo',
    url: 'https://www.youtube.com/watch?v=Fb0sWwoerPo',
  },
  {
    title: 'Kanjo Nights Warsaw - otwarcie sezonu 2023',
    youtubeId: 'cSPpVV0DnFk',
    url: 'https://www.youtube.com/watch?v=cSPpVV0DnFk',
  },
  {
    title: 'LET JDM\'s COOK | Kanjo Night Warsaw | FURIDE',
    youtubeId: 'yj8sciUk7ok',
    url: 'https://www.youtube.com/watch?v=yj8sciUk7ok',
  },
  {
    title: 'KANJO NIGHT WARSAW 2023 VHS TAPES',
    youtubeId: '_ZrgZyA-ja4',
    url: 'https://www.youtube.com/watch?v=_ZrgZyA-ja4',
  },
  {
    title: '[ Kanjo Nights 2025] [ Warszawa ] [ 30.08.2025 ]',
    youtubeId: 'knADnGPPuSQ',
    url: 'https://www.youtube.com/watch?v=knADnGPPuSQ',
  },
  {
    title: 'Kanjo Night Warsaw 03.08.2022 | 4K',
    youtubeId: 'Wju7Eirjwik',
    url: 'https://www.youtube.com/watch?v=Wju7Eirjwik',
  },
]

useHead({
  title: 'Pasja samochodowa – Supra MK4, JDM, Kanjo Nights, polska motoryzacja | Karol Sójka',
  meta: [
    {
      name: 'description',
      content: 'Bogata kolekcja filmów z wyjazdów Supra MK4 Team Poland i japońskich spotów JDM Kanjo Nights – Supra MK4, Supra Team Poland, Toyota, polskie i japońskie eventy samochodowe, spoty Supra Poland. Zobacz najlepsze video team Poland, samochody japońskie, polska motoryzacja, inspiracje JDM, motopasja.'
    },
    {
      name: 'keywords',
      content: 'Toyota Supra MK4, Supra Team Poland, Supra Polska, Supra zlot, Supra filmy, Kanjo Night Warsaw, JDM, spoty samochodowe, wydarzenia motoryzacyjne, pasja samochodowa, Supra video, YouTube motoryzacja, team Poland event, Supra zloty Polska, japońska motoryzacja, Supra Bieszczady, Supra Bukowina, motopasja, Supra filmy wyjazdowe'
    },
    {
      property: 'og:title',
      content: 'Pasja samochodowa – Supra MK4, Kanjo, JDM | Karol Sójka'
    },
    {
      property: 'og:description',
      content: 'Najlepsze filmy Supra MK4 Team Poland, spoty Kanjo Night Warsaw, motoryzacja JDM. Fani Supra MK4 i JDM znajdą tu świetne polskie i japońskie filmy – subskrybuj autorów na YouTube!'
    },
    {
      property: 'og:type', content: 'video.other'
    },
    {
      property: 'og:url', content: 'https://letscode.it/samochody'
    },
    {
      property: 'og:image', content: '/images/selfie-with-background.png'
    },
    {
      name: 'twitter:card', content: 'summary_large_image'
    },
    {
      name: 'twitter:title', content: 'Pasja samochodowa – Supra, JDM, spoty | Karol Sójka'
    },
    {
      name: 'twitter:description',
      content: 'Polska Supra MK4, team Poland, Kanjo Nights, JDM spoty – kolekcja najlepszych motofilmów, playlisty, inspiracje. Autorzy na YouTube.'
    },
    {
      name: 'twitter:image', content: '/images/selfie-with-background.png'
    },
    {
      rel: 'canonical', href: 'https://letscode.it/samochody'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: `{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Pasja samochodowa – Supra MK4, JDM, Kanjo Nights",
        "description": "Wyjątkowa kolekcja filmów Supra MK4 Team Poland, spotów Kanjo Night Warsaw, JDM, eventów motoryzacyjnych – Supra MK4, Supra Polska, japonia, inspiracje.",
        "author": { "@type": "Person", "name": "Karol Sójka" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://letscode.it/samochody" },
        "image": "https://letscode.it/images/selfie-with-background.png",
        "video": [
          {"@type": "VideoObject", "name": "Supra MKIV Team Poland meet - Bieszczady 2021", "url": "https://www.youtube.com/watch?v=h9wBMa4WEEE"},
          {"@type": "VideoObject", "name": "Supra MKIV Team Poland meet - Kotlina Kłodzka 2022", "url": "https://www.youtube.com/watch?v=VvPg7Vcg2ns"},
          {"@type": "VideoObject", "name": "Najlepszy wyjazd Suprą ever! | Oficjalny Zlot Toyota Supra MK4 Polska", "url": "https://www.youtube.com/watch?v=l6s6Idko5qk"},
          {"@type": "VideoObject", "name": "Supra MKIV Team Poland meet - Bukowina Tatrzańska 2023", "url": "https://www.youtube.com/watch?v=k-6KNEyB6iI"},
          {"@type": "VideoObject", "name": "Kanjo Night Warsaw 16/X/22", "url": "https://www.youtube.com/watch?v=Fb0sWwoerPo"},
          {"@type": "VideoObject", "name": "Kanjo Nights Warsaw - otwarcie sezonu 2023", "url": "https://www.youtube.com/watch?v=cSPpVV0DnFk"},
          {"@type": "VideoObject", "name": "LET JDM's COOK | Kanjo Night Warsaw | FURIDE", "url": "https://www.youtube.com/watch?v=yj8sciUk7ok"},
          {"@type": "VideoObject", "name": "KANJO NIGHT WARSAW 2023 VHS TAPES", "url": "https://www.youtube.com/watch?v=_ZrgZyA-ja4"},
          {"@type": "VideoObject", "name": "[ Kanjo Nights 2025] [ Warszawa ] [ 30.08.2025 ]", "url": "https://www.youtube.com/watch?v=knADnGPPuSQ"},
          {"@type": "VideoObject", "name": "Kanjo Night Warsaw 03.08.2022 | 4K", "url": "https://www.youtube.com/watch?v=Wju7Eirjwik"}
        ]
      }`
    }
  ]
})
</script>

<style scoped>
.car-passion-page {
  min-height: 100vh;
}

.car-hero {
  padding: var(--space-3xl) 0 var(--space-xl);
  text-align: center;
}

.car-title {
  font-size: var(--font-4xl);
  font-weight: 800;
  margin-bottom: var(--space-lg);
}

.car-intro {
  font-size: var(--font-xl);
  color: var(--color-text-secondary);
}

.car-films-section {
  padding: var(--space-xl) 0 var(--space-3xl);
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

@media (max-width: 600px) {
  .yt-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .yt-card iframe {
    min-height: 160px;
  }
}
</style>
