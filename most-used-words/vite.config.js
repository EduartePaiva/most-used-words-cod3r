import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


//base: path.resolve(__dirname, './dist'),
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(
    defineConfig({
      title: 'teste'
    })
  )],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: 'assets'
  },
  title: 'teste'
})
