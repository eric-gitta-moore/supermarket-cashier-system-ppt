import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig(({ command }) => {
  return {
    // base: command === 'build' ? '/supermarket-cashier-system-ppt/' : './',
    plugins: [svgLoader()],
  }
})
