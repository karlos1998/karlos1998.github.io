<template>
  <div class="retro2000">
    <div class="retro-top-bar"></div>
    <div class="retro-bbs-head">
      <span class="ascii-logo">╔════ LCI BBS 2000 ════╗</span>
    </div>
    <div class="retro-main">
      <h1 class="retro-title">RETRO <span class="highlight-2000">2000</span></h1>
      <pre class="ascii-art neon">
╔════════════════════════════════════╗
║   ███▓▒░  WELCOME TO RETRO  ░▒▓███║
╚════════════════════════════════════╝
</pre>
      <p class="retro-info">Total <b>retro fun</b>! Strona inspirowana internetem, MEM-ami i grami z okolic
        2000–2005.<br>
        <blink>Będzie tu stary czat, pixelowe gifiki, ascii art, fale, newsy Winamp i kolekcja `hacker-font`!<br>Może
          nawet... emulator spamu z Gadu-Gadu?
        </blink>
        <br>
        <span class="retro-tips">
          <marquee scrollamount="8">Zagraj w Anno 1602!&nbsp;&nbsp;&nbsp;// Oglądaj Winamp Classic Skins&nbsp;&nbsp;&nbsp;// Zapisz się do BBS Karola</marquee>
        </span>
      </p>
      <NuxtLink to="/" class="retro-home-btn">
        <span class="retro-home-ico">🏠</span> POWRÓT NA NOWOCZESNĄ STRONĘ
      </NuxtLink>
      <div class="retro-actions">
        <button class="retro-btn-blink" @click="fakeFun">WEJDŹ DALEJ</button>
        <div class="retro-hint">(Ale i tak nic tu nie działa... 🧑‍💻)</div>
      </div>
    </div>
    <div class="retro-statusbar">
      <span class="green">[ONLINE: 1] letscode.it // 00:{{ fakeTime }}</span>
      <span class="bar-divider">|</span>
      <span>Prawa zastrzeżone ©2000</span>
      <span class="bar-divider">|</span>
      <span style="color:#9ff">BBS News: Nowe ASCII art w katalogu!</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {definePageMeta} from '#imports'

const fakeFun = () => alert('Wersja demo: retro-terminal tylko do oglądania! 😃\nZa jakiś czas coś się pojawi ;)')
const fakeTime = ref('31:17')
useHead({
  title: 'RETRO 2000 – Super Oldschool Web Playground',
  meta: [{
    name: 'description',
    content: 'Retro w maksie: ascii, blink, pixel-winamp, gadu, ramka BBS, statusbar, neon. Styl jak dawniej!'
  }]
})
definePageMeta({layout: 'retro'})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&family=Silkscreen:wght@700&display=swap');
.retro2000 {
  min-height: 100vh !important;
  min-width: 100vw !important;
  background: linear-gradient(180deg, #0c0d10, #151521 94%, #16161a 100%) !important;
  z-index: 99999 !important;
  color: #00FF99;
  font-family: 'Silkscreen', 'VT323', monospace;
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-x: hidden !important;
}

.retro-top-bar {
  width: 100vw;
  height: 14px;
  background: repeating-linear-gradient(90deg, #0a0 0 14px, #000 14px 22px, #0c0 22px 36px, #101 36px 46px);
}

.retro-bbs-head {
  font-family: 'Silkscreen', monospace;
  width: 100vw;
  color: #6cffb4;
  font-size: 1.18em;
  text-align: center;
  padding: 10px 0 5px 0;
  letter-spacing: 0.08em;
  background: linear-gradient(90deg, #000 80%, #00881a99 98%);
  box-shadow: 0 0 9px #62ff8391;
  border-bottom: 2.5px dotted #1fc976;
}

.ascii-logo {
  letter-spacing: 0.05em;
  font-weight: bold;
}

.retro-title {
  font-family: 'Silkscreen', monospace;
  text-shadow: 0 0 18px #00ff9892, 0 0 2px #222;
  font-size: clamp(2.2rem, 8vw, 3.6rem);
  line-height: 1.03;
  color: #00f999;
  margin: 1.8rem 0 .42em 0;
  letter-spacing: 0.02em;
  text-align: center;
  width: 100vw;
}

.highlight-2000 {
  color: #FFD900;
  text-shadow: 0 0 6px #ffee71, 0 0 13px #FFD900;
  letter-spacing: .03em;
}
.retro-motd {
  color: #fff960;
  font-family: 'Silkscreen', 'monospace';
  background: #232c22;
  padding: 0.41em 1em 0.3em;
  margin: 0 0 1.6em 0 !important;
  border-left: 6px solid #00ff99;
  border-radius: 7px;
  font-size: 1.10em;
  text-shadow: 1px 2px 6px #ffeeaa99, 0 1px 0 #211;
  width: 100vw;
  max-width: 100vw;
  text-align: center;
}

:deep(marquee) {
  font-family: 'Silkscreen', monospace;
  color: #ffe24c;
  font-size: 1.1rem;
  text-transform: uppercase;
}
.retro-main {
  width: 100vw !important;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  background: none;
  text-align: center;
  padding: 0 0.7em;
}
.ascii-art {
  font-family: 'VT323', monospace;
  color: #00ff94;
  font-size: 1.07em;
  line-height: 1.14;
  margin-bottom: 1.0em;
  margin-top: 0.2em;
  user-select: all;
  width: 100vw;
  text-align: center;
  text-shadow: 0 3px 13px #20ffe1a7, 0 0 5px #00b89715, 0 0 7px #FFD9003a;
}

.blink {
  animation: blinkstep 0.98s steps(1) infinite;
}

@keyframes blinkstep {
  50% {
    opacity: 0.07;
  }
  100% {
    opacity: 1;
  }
}

.neon {
  text-shadow: 0 3px 13px #20ffe1a7, 0 0 5px #00b89715, 0 0 7px #FFD9003a;
}
.retro-info {
  font-size: 1.13em;
  color: #e4fae6;
  margin: 0.42em 0 1.1em 0;
  line-height: 1.65em;
  font-family: 'VT323', monospace;
  text-align: center;
}

.retro-tips {
  font-size: 1.07em;
  margin: 0.6em 0;
}

.retro-actions {
  margin-bottom: 2.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
}

.retro-cursor {
  font-family: 'VT323', monospace;
  font-size: 1.6em;
  color: #00fa90;
  margin-top: 0.7em;
}
.retro-btn-blink {
  color: #111;
  background: #FFD900;
  font-family: 'Silkscreen', monospace;
  font-size: 1.02em;
  border: 2px dotted #00ff72;
  border-radius: 7px;
  box-shadow: 0 0 17px #ffe941b0;
  padding: 0.49em 1.21em;
  letter-spacing: 0.03em;
  font-weight: bold;
  animation: btnblinker 0.66s steps(1) infinite alternate;
  margin: 0.18em 0 0 0;
  text-shadow: 0 2px 8px #FFD90072, 0 1px 3px #0f0, 0 0 2px #111;
}

@keyframes btnblinker {
  50% {
    box-shadow: 0 0 24px #FFD900ac;
  }
  100% {
    box-shadow: 0 0 10px #00ff9266;
  }
}

.retro-home-btn {
  font-family: 'Silkscreen', monospace;
  display: inline-block;
  margin: 1.2em auto 2em auto;
  font-size: 1.22em;
  text-shadow: 0 0 9px #08fc85c5;
  background: #242824;
  color: #12fa82;
  padding: .49em 1.88em;
  border: 2.2px solid #19e94c;
  border-radius: 8px;
  box-shadow: 0 0 18px #03efb910;
  transition: background 0.16s, color 0.16s, border 0.13s;
  cursor: pointer;
  letter-spacing: 0.045em;
}

.retro-home-ico {
  font-size: 1.12em;
  vertical-align: -0.08em;
  margin-right: 0.25em;;
}

.retro-home-btn:hover {
  color: #191;
  background: #d3ecbd;
  border-color: #c0ffe2;
  text-shadow: 0 2px 11px #fffb2658;
}

.retro-hint {
  font-size: 1.01em;
  color: #66ffd3;
  margin-top: 0.42em;
  opacity: 0.74;
  font-family: 'VT323', monospace;
}

.retro-footer, .retro-statusbar {
  width: 100vw;
  font-size: 0.93em;
  color: #12fa82;
  margin-top: 2.9em;
  text-align: center;
  font-family: 'Silkscreen', monospace;
  background: linear-gradient(91deg, #15171c 17%, #003e11 60%, #151713 100%);
  border-top: 2.4px solid #10e755;
  padding: 9px 0 8px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
}

.green {
  color: #00ffb0;
}

.magenta {
  color: #FFD900;
}

.bar-divider {
  color: #444;
  font-size: 1.08em;
  margin: 0 0.82em;
}
</style>
