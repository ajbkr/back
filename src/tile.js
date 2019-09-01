import { Sprite } from 'kontra'

import {
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'

function fillCircle (x, y, radius, color) {
  const { context } = this

  context.fillStyle = color
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI)
  context.fill()
}

function makeTileSprite (options) {
  const N = 8

  return Sprite({
    width: TILE_WIDTH,
    height: TILE_HEIGHT,

    x: 0,
    y: 0,

    bkcolor: palette[c.black],
    color: palette[c['bright-white']],

    render () {
      const { bkcolor, color, context, height, width } = this

      context.fillStyle = bkcolor
      context.fillRect(this.x, this.y, width, height)

      const offset = width / N / 2

      const radius = width / N / 2

      for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
          fillCircle.call(this, offset + this.x + x * (width / N),
            offset + this.y + y * (height / N), radius, color)
        }
      }
    },

    ...options
  })
}

export {
  makeTileSprite
}
