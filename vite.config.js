import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ this forces relative paths
  plugins: [react()]
})
