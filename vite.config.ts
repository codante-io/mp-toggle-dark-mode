import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      plugins: [
        {
          name: 'copy-favicon',
          generateBundle() {
            fs.copyFileSync('./public/favicon.ico', './dist/favicon.ico')
          },
        },
      ],
    },
  },
  server: {
    port: 3000,
  },
})
