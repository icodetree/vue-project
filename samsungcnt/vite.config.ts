import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { 
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "types": fileURLToPath(new URL("./src/@types", import.meta.url)), 
    },
  },
})
