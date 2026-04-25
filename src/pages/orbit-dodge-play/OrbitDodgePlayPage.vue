<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <main class="play-page">
    <a class="play-back-link" :href="`${baseUrl}projects/orbit-dodge/`">
      ← Back
    </a>

    <iframe
        class="play-frame"
        :src="`${baseUrl}games/orbit-dodge/index.html`"
        allow="fullscreen"
    ></iframe>
  </main>
</template>