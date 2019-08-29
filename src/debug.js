import { Sprite } from 'kontra'

import {
  SCREEN_WIDTH,
  TILE_HEIGHT
} from './config'
import { c, palette } from './palette'

function makeDebugSprite (context) {
  return Sprite({
    width: SCREEN_WIDTH,
    height: TILE_HEIGHT,

    x: 0,
    y: 0,

    text: '',

    render () {
      context.fillStyle = 'rgba(0, 0, 0, 0.5)'
      context.fillRect(this.x, this.y, this.width, this.height)

      context.font = TILE_HEIGHT + 'px serif'

      context.fillStyle = palette[c.white]
      context.fillText(this.text, this.x, this.y + TILE_HEIGHT / 4 * 3, SCREEN_WIDTH)
    }
  })
}

export {
  makeDebugSprite
}
