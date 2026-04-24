<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <main class="home-page">
    <section class="hero">
      <p class="eyebrow">Independent Game Studio</p>

      <h1>Mava Studio</h1>

      <p class="description">
        We create small, polished web games with simple rules, fast sessions,
        and playful visual style.
      </p>

      <div class="games">
        <a class="game-card" :href="`${baseUrl}projects/orbit-dodge/`">
          <h2>Orbit Dodge</h2>
          <p>Arcade survival about switching orbits</p>
        </a>
      </div>
    </section>
  </main>
</template>