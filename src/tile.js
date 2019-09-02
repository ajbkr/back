import { Sprite } from 'kontra'

import {
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'

const radiuses = [0.5, 1, 2, 4]

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

    circles: [],

    render () {
      const { bkcolor, context, height, width } = this

      context.fillStyle = bkcolor
      context.fillRect(this.x, this.y, width, height)

      const offset = width / N / 2

      /*
      const radius = width / N / 2

      for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
          fillCircle.call(this, offset + this.x + x * (width / N),
            offset + this.y + y * (height / N), radius, color)
        }
      }
      */
      this.circles.forEach(circle => {
        const radius = offset * radiuses[circle.radius]

        const cx = (circle.x + N / 2) * (width / N)
        const cy = (circle.y + N / 2) * (height / N)

        fillCircle.call(this, offset + this.x + cx, offset + this.y + cy,
          radius, circle.color)
      })
    },

    ...options
  })
}

export {
  makeTileSprite
}
