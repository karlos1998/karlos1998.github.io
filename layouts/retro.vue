<template>
  <div class="retro-wrap">
    <slot/>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@700&display=swap');

.retro-wrap {
  min-height: 100vh;
  background: #101010;
  background-image: radial-gradient(circle at 2px 2px, #212C21 1.6px, transparent 0),
  radial-gradient(circle at 2.6px 2.6px, #212C21 1.2px, transparent 0);
  background-size: 8px 8px, 14px 14px;
  color: #11FF7F;
  font-family: 'Silkscreen', 'Fira Mono', 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 28px #0ee36a38, 0 0 60px #00ff2211;
  overflow-x: hidden;
}

:deep(h1) {
  font-family: 'Silkscreen', monospace;
  font-size: clamp(2.4rem, 7vw, 3.8rem);
  margin-bottom: 1.8rem;
  color: #11FF7F;
  letter-spacing: -0.04em;
  padding: 0.1em 0.1em;
  text-shadow: 0 0 16px #00ff98cc, 0 0 2px #222;
}

:deep(h2), :deep(.retro-header) {
  font-family: 'Silkscreen', monospace;
  font-size: 2.1rem;
  color: #FFD900;
  text-shadow: 0 0 8px #ffee94cc;
}

:deep(p), :deep(li) {
  line-height: 1.7;
  color: #ccfae0;
  font-size: 1.23rem;
}

:deep(a) {
  color: #00ffff;
  text-decoration: underline;
  transition: color 0.11s;
}

:deep(a:hover) {
  color: #FFD900;
  text-shadow: 0 0 6px #ffee94;
}

.retro-btn {
  color: #111;
  background: #FFD900;
  font-family: 'Silkscreen', monospace;
  font-size: 1.19rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px #ffee99d0;
  padding: 0.65em 1.45em;
  margin: 2.2rem 0 0 0;
  display: inline-block;
  letter-spacing: 0.06em;
  font-weight: bold;
  transition: background 0.13s, color 0.13s, box-shadow 0.15s;
}

.retro-btn:hover {
  background: #11FF7F;
  color: #111;
  box-shadow: 0 0 19px #22ee7e;
}

@media (max-width: 600px) {
  :deep(h1) {
    font-size: 2.25rem;
  }

  .retro-wrap {
    padding: 0.7em;
  }

  :deep(p), :deep(li) {
    font-size: 1.02rem;
  }
}
</style>
