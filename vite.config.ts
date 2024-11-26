import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      shared: '/src/shared',
      widgets: '/src/widgets',
      app: '/src/app',
    }
  }
})
