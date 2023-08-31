import { join } from 'path'

import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

import electron from "vite-plugin-electron"

export default defineConfig({
  plugins: [
    mkcert(),
    electron({
      main: {
        entry: 'electron/main.cjs'
      }
    }),
  ],
  server: {
    https: true
  },
  build: {
    emptyOutDir: false
  }
})
