import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure this is correct for your deployment
  build: {
    outDir: '../backend/public',  // Directly output to backend's public folder
    emptyOutDir: true,
  },server: {
    port: 3000,
    historyApiFallback: true, // Add this line
  },
  
})
