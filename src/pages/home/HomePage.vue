<script setup lang="ts">
import {games} from "../../lib/games";

const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
  <main class="home-page">
    <section class="hero">
      <img
          class="logo"
          :src="`${baseUrl}images/logo.png`"
          alt="Mava Studio"
      />

      <p class="eyebrow">Independent Game Studio</p>

      <h1>Mava Studio</h1>

      <p class="description">
        We create small, polished web games with simple rules, fast sessions,
        and playful visual style.
      </p>

      <div class="games">
        <a
            v-for="game in games"
            :key="game.id"
            class="game-card"
            :href="`${baseUrl}projects/${game.id}/`"
        >
          <h2>{{ game.title }}</h2>
          <p>{{ game.descriptionShort }}</p>
        </a>
      </div>
    </section>
  </main>
</template>