import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://<user>.github.io/revision-system/ on GitHub Pages.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/revision-system/' : '/',
  define: {
    __BUILD_SHA__: JSON.stringify((process.env.GITHUB_SHA ?? 'local').slice(0, 7)),
  },
}))
