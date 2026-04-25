<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <main class="game-landing-page">
    <section class="game-landing">
      <a class="back-link" :href="baseUrl">← Mava Studio</a>

      <div class="game-landing-grid">
        <div class="game-copy">
          <p class="eyebrow">Arcade Web Game</p>

          <h1>Orbit Dodge</h1>

          <p class="description">
            Switch between orbits, dodge incoming hazards, collect bonuses,
            and survive as long as you can.
          </p>

          <div class="game-tags">
            <span>Arcade</span>
            <span>Fast Sessions</span>
            <span>One Button</span>
          </div>

          <div class="actions">
            <a class="button primary" :href="`${baseUrl}projects/orbit-dodge/play/`">
              Play
            </a>
          </div>
        </div>

        <div class="game-cover">
          <img
              :src="`${baseUrl}images/orbit-dodge-cover.png`"
              alt="Orbit Dodge screenshot"
          />
        </div>
      </div>
    </section>
  </main>
</template>