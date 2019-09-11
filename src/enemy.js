import { Sprite } from 'kontra'

import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'
import { playSound } from './sound'

function makeEnemySprite (context, tileEngine) {
  return Sprite({
    width: TILE_WIDTH / 4 * 3,
    height: TILE_HEIGHT / 4 * 3,

    x: 0,
    y: 0,

    render () {
      context.fillStyle = palette[c.black]
      context.fillRect(this.x - tileEngine.sx, this.y - tileEngine.sy, this.width,
        this.height - 3)

      // eyes
      context.fillStyle = palette[c['bright-red']]
      context.fillRect(this.x - tileEngine.sx + this.width / 8 * 1, this.y + 4, 6, 4)
      context.fillRect(this.x - tileEngine.sx + this.width / 8 * 5, this.y + 4, 6, 4)
      context.fillStyle = palette[c.black]
      context.fillRect(this.x - tileEngine.sx + this.width / 8 * 1 + 2, this.y + 4 + 2, 2, 2)
      context.fillRect(this.x - tileEngine.sx + this.width / 8 * 5 + 2, this.y + 4 + 2, 2, 2)

      context.fillStyle = 'rgba(0,0,0,.35)'
      context.fillRect(this.x - tileEngine.sx + 1, this.y - tileEngine.sy + this.height - 2,
        this.width - 2, 2)
    },

    moveEast () {
      const { height, width, y } = this
      let { x } = this

      const { tilewidth } = tileEngine

      if (x < SCREEN_WIDTH / 2 - width / 2) {
        ++x
      } else if (x < tilewidth * tileEngine.width - 1 - width) {
        ++x
      }

      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - tileEngine.sx,
        y: y - tileEngine.sy
      })) {
        this.x = x
      } else {
        playSound('collision')
      }
    },

    moveNorth () {
      const { height, width, x } = this
      let { y } = this

      if (y >= SCREEN_HEIGHT / 2 - height / 2) {
        --y
      } else if (y > 0) {
        --y
      }

      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - tileEngine.sx,
        y: y - tileEngine.sy
      })) {
        this.y = y
      } else {
        playSound('collision')
      }
    },

    moveSouth () {
      const { height, width, x } = this
      let { y } = this

      const { tileheight } = tileEngine

      if (y < SCREEN_HEIGHT / 2 - height / 2) {
        ++y
      } else if (y < tileheight * tileEngine.height - 1 - height) {
        ++y
      }

      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - tileEngine.sx,
        y: y - tileEngine.sy
      })) {
        this.y = y
      } else {
        playSound('collision')
      }
    },

    moveWest () {
      const { height, width, y } = this
      let { x } = this

      if (x >= SCREEN_WIDTH / 2 - width / 2) { // XXX scrolling on world coords?!
        --x
      } else if (x > 0) {
        --x
      }

      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - tileEngine.sx,
        y: y - tileEngine.sy
      })) {
        this.x = x
      } else {
        playSound('collision')
      }
    }
  })
}

export {
  makeEnemySprite
}
