import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/ppt-cow-low-code/' : './',
    plugins: [svgLoader()],
  }
})
