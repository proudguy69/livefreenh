import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'nhprimary',
          secondary: 'nhsecondary',
          success: 'nhsuccess'
        }
      },
      theme: {
        colors: ['primary', 'secondary', 'neutral', 'success', 'info', 'warning', 'error']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    allowedHosts: ['nhdiscord.com'],
    proxy: {
      "/discord": {
        target: "https://cdn.discordapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/discord/, ""),
      },
    },
  }
})
