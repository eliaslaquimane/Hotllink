import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path for deployment (root for Vercel)
  base: '/',

  // Optimize dependencies
  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  // Build configuration for production
  build: {
    // Output directory
    outDir: 'dist',

    // Generate source maps for debugging (set to false for smaller bundle)
    sourcemap: false,

    // Optimize bundle size with esbuild (faster than terser)
    minify: 'esbuild',

    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,

    // Rollup options for code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunk for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split UI libraries
          ui: ['lucide-react'],
        },
      },
    },
  },

  // Server configuration for development
  server: {
    port: 5173,
    open: true,
  },

  // Preview server configuration
  preview: {
    port: 4173,
  },
});
