import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../mgpc-stream',
    emptyOutDir: true
  },
  base: '/mgpc-stream/'
})
