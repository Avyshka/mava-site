<script setup lang="ts">
import {computed} from "vue";
import {getGameById} from "../../lib/games";
import {getGameIdFromPath} from "../../lib/path";

const baseUrl = import.meta.env.BASE_URL;

const gameId = getGameIdFromPath();

const game = computed(() => {
  if (!gameId) {
    return undefined
  }

  return getGameById(gameId)
});
</script>

<template>
  <main v-if="game" class="play-page">
    <a class="play-back-link" :href="`${baseUrl}projects/${game.id}/`">
      ← Back
    </a>

    <iframe
        class="play-frame"
        :src="`${baseUrl}${game.buildPath}`"
        allow="fullscreen"
    ></iframe>
  </main>

  <main v-else class="game-page">
    <section class="game-hero">
      <a class="back-link" :href="baseUrl">← Mava Studio</a>

      <p class="eyebrow">Game Not Found</p>

      <h1>Unknown Game</h1>

      <p class="description">
        This game does not exist or has not been added to the site yet.
      </p>
    </section>
  </main>
</template>