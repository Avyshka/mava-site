import {resolve} from "node:path";
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
  base: "/mava-site/",
  plugins: [vue()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        orbitDodge: resolve(__dirname, 'projects/orbit-dodge/index.html'),
      },
    },
  }
})
