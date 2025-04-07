import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: "/vite/",
  plugins: [
      createSvgSpritePlugin({
          svgFolder: resolve(__dirname, './assets/images/svg'),
      }),
      ViteImageOptimizer({
          jpg: {
              quality: 75
          },
          png: {
              quality: 75
          },
          jpeg: {
              quality: 75
          }
      })
  ],
  build: {
      minify: true,
      cssMinify: 'lightningcss',
      sourcemap: true,
      rollupOptions: {
          input: {
              index: resolve(__dirname, 'index.html'),
              catalog: resolve(__dirname, 'pages/about/index.html'),
              about: resolve(__dirname, 'pages/contacts/index.html'),
          }
      },
  }
})