import vue from "@vitejs/plugin-vue";
import {defineConfig} from "vite";
import {createViteInputs} from "./scripts/create-vite-inputs.mjs";

export default defineConfig({
    base: "/mava-site/",
    plugins: [vue()],
    build: {
        rolldownOptions: {
            input: createViteInputs(__dirname)
        }
    }
})