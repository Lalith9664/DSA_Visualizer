import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      'safeness-barmaid-stricken.ngrok-free.dev'
    ]
  },
  build: {
    // Raise warning limit since the generator files are intentionally lazy-loaded
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Rolldown (Vite 8) requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('node_modules/firebase')) return 'vendor-firebase';
          if (id.includes('node_modules/framer-motion')) return 'vendor-framer';
          if (id.includes('node_modules/lucide-react')) return 'vendor-icons';
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/react/')
          ) return 'vendor-react';
        },
      },
    },
  },
})
