import { Sprite } from 'kontra'

import {
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'

function makePlayerSprite (context, tileEngine) {
  return Sprite({
    width: TILE_WIDTH / 4 * 3,
    height: TILE_HEIGHT / 4 * 3,

    x: TILE_WIDTH * 7,
    y: TILE_HEIGHT / 2,

    render () {
      context.fillStyle = palette[c.red]
      context.fillRect(this.x - tileEngine.sx, this.y - tileEngine.sy, this.width,
        this.height)
    }
  })
}

export {
  makePlayerSprite
}
