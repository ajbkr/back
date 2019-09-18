import commonjs from 'rollup-plugin-commonjs'
import htmlBundle from 'rollup-plugin-html-bundle'
import livereload from 'rollup-plugin-livereload'
import nodeResolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'

import { makeLevels } from './rollup-plugin-make-levels/index'

const fs = require('fs')
const path = require('path')

const production = !process.env.ROLLUP_WATCH

export default {
  external: [
    'VirtualStick',
    'zzfx'
  ],
  input: 'src/main.js',
  output: {
    banner:
      'if (!window.AudioContext && window.webkitAudioContext) {' +
      '  window.AudioContext = window.webkitAudioContext' +
      '}' +
      'exports={};' + fs.readFileSync(path.join(
        __dirname,
        'node_modules/virtual-stick/dist/bundle.js'
      ), 'utf-8') +
      ';' + fs.readFileSync(path.join(
        __dirname,
        'node_modules/zzfx/ZzFX.micro.js'
      ), 'utf-8'),
    file: 'dist/bundle.js',
    format: 'iife',
    globals: {
      VirtualStick: 'VirtualStick',
      zzfx: 'zzfx'
    }
  },
  plugins: [
    makeLevels(),
    nodeResolve(),
    commonjs(),
    production && terser(),
    htmlBundle({
      inline: true
    }),
    !production && serve('dist'),
    !production && livereload()
  ],
  watch: {
    exclude: [
      'node_modules/**',
      'src/levels.js'
    ]
  }
}
