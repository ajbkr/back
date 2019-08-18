import htmlBundle from 'rollup-plugin-html-bundle'
import nodeResolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    terser(),
    htmlBundle({
      inline: true
    }),
    serve('dist')
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
