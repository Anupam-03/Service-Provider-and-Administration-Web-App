import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Specify the output directory for the build artifacts
    minify: 'esbuild', // Use esbuild for faster minification
    sourcemap: true, // Enable source maps for easier debugging
    rollupOptions: {
      input: '/index.html', // Specify the entry point for your app
    },
  },
})
