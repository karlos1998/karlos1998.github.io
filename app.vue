<template>
  <Html lang="pl">
  <Head>
    <Title>Let's Code It! - Karol Sójka</Title>
    <Meta name="viewport" content="width=device-width, initial-scale=1"/>
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"/>
    <Style>
      html, body {
        margin: 0;
        padding: 0;
      }
    </Style>
  </Head>
  <Body>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in'
    }"/>
  </NuxtLayout>
  </Body>
  </Html>
</template>

<script setup>
// CSS is now imported via plugin
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
