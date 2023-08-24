import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index.mjs'],
  output: {
    format: 'esm',
    file: 'dist/index.mjs'
  },
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: 'node18',
      minify: true
    }
  },
  alias: {
    prompts: 'prompts/lib/index.js',
  }
})
