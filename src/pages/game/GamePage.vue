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
})
</script>

<template>
  <main
      v-if="game"
      class="game-landing-page"
      :style="{ '--game-accent': game.accentColor }"
  >
    <section class="game-landing">
      <a class="back-link" :href="baseUrl">← Mava Studio</a>

      <div class="game-landing-grid">
        <div class="game-copy">
          <p class="eyebrow">{{ game.subtitle }}</p>

          <h1>{{ game.title }}</h1>

          <p class="description">
            {{ game.description }}
          </p>

          <div class="game-tags">
            <span v-for="tag in game.tags" :key="tag">
              {{ tag }}
            </span>
          </div>

          <div class="actions">
            <a class="button primary" :href="`${baseUrl}projects/${game.id}/play/`">
              Play Now
            </a>
          </div>
        </div>

        <div class="game-cover game-cover-featured">
          <img
              :src="`${baseUrl}${game.heroImage}`"
              :alt="`${game.title} screenshot`"
          />
        </div>
      </div>

      <div class="game-info-grid">
        <section class="info-panel">
          <h2>How to play</h2>

          <ul>
            <li v-for="item in game.controls" :key="item">
              {{ item }}
            </li>
          </ul>
        </section>

        <section class="info-panel">
          <h2>Features</h2>

          <ul>
            <li v-for="item in game.features" :key="item">
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
    </section>
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