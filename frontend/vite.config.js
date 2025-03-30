import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure proper resolution of dependencies
    },
  },
  optimizeDeps: {
    include: ['@cloudinary/react'],
  },
});