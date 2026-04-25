import vue from "@vitejs/plugin-vue"
import {resolve} from "node:path";
import {defineConfig} from "vite"

export default defineConfig({
    base: "/mava-site/",
    plugins: [vue()],
    build: {
        rolldownOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                orbitDodge: resolve(__dirname, 'projects/orbit-dodge/index.html'),
                orbitDodgePlay: resolve(__dirname, 'projects/orbit-dodge/play/index.html')
            }
        }
    }
})