import htmlBundle from 'rollup-plugin-html-bundle'
import nodeResolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'

const fs = require('fs')
const path = require('path')

const production = !process.env.ROLLUP_WATCH

export default {
  external: [
    'VirtualStick'
  ],
  input: 'src/main.js',
  output: {
    banner: 'exports={};' + fs.readFileSync(path.join(__dirname,
      'node_modules/virtual-stick/dist/bundle.js'), 'utf-8'),
    file: 'dist/bundle.js',
    format: 'iife',
    globals: {
      VirtualStick: 'VirtualStick'
    }
  },
  plugins: [
    nodeResolve(),
    production && terser(),
    htmlBundle({
      inline: true
    }),
    !production && serve('dist')
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
