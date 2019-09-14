import { Sprite } from 'kontra'

import {
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'

function makeCoinSprite (context, tileEngine) {
  return Sprite({
    width: TILE_WIDTH / 2,
    height: TILE_HEIGHT / 2,

    x: 0,
    y: 0,

    render () {
      const { height, width } = this

      const x = Math.floor(this.x)
      const y = Math.floor(this.y)

      context.fillStyle = palette[c['bright-magenta']]
      context.fillRect(x - tileEngine.sx + width / 4 + 2, y - tileEngine.sy + height / 4, width - 4, height)
      context.fillRect(x - tileEngine.sx + width / 4, y - tileEngine.sy + height / 4 + 2, width, height - 4)
      context.fillStyle = palette[c.magenta]
      context.fillRect(x - tileEngine.sx + width / 4 + 2, y - tileEngine.sy + height / 4 + 2, width - 4, height - 4)

      context.fillStyle = 'rgba(0,0,0,.35)'
      context.fillRect(x - tileEngine.sx + width / 4 + 1, y - tileEngine.sy + height / 4 + height + 1,
        width - 2, 1)
    }
  })
}

export {
  makeCoinSprite
}
