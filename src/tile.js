import { Sprite } from 'kontra'

import {
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'

const radiuses = [0.5, 1, 2, 4]

function fillCircle (context, x, y, radius, color) {
  context.fillStyle = color
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI)
  context.fill()
}

function makeTileSprite (options) {
  const N = 8

  const canvas2 = document.createElement('canvas')

  canvas2.width = TILE_WIDTH
  canvas2.height = TILE_HEIGHT

  const context2 = canvas2.getContext('2d')

  return Object.assign(
    Sprite({
      width: TILE_WIDTH,
      height: TILE_HEIGHT,

      x: 0,
      y: 0,

      bkcolor: palette[c.black],

      circles: [],

      render () {
        const { bkcolor, context, height, width } = this

        context2.fillStyle = bkcolor
        context2.fillRect(0, 0, width, height)

        const offset = width / N / 2

        this.circles.forEach(circle => {
          const radius = offset * radiuses[circle.radius]

          const cx = (circle.x + N / 2) * (width / N)
          const cy = (circle.y + N / 2) * (height / N)

          fillCircle(context2, offset + cx, offset + cy, radius, circle.color)
        })

        context.drawImage(canvas2, this.x, this.y)
      }
    }),
    options
  )
}

export {
  makeTileSprite
}
