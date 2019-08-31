import { Sprite } from 'kontra'

import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'
import { playSound } from './sound'

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
    },

    moveEast () {
      const { height, width, y } = this
      let { x } = this

      const { sy, tilewidth } = tileEngine
      let { sx } = tileEngine

      if (x < SCREEN_WIDTH / 2 - width / 2) {
        ++x
      } else if (sx < tilewidth * tileEngine.width - SCREEN_WIDTH - 1) {
        ++sx
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
      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - sx,
        y: y - sy
      })) {
        tileEngine.sx = sx
      }
    },

    moveNorth () {
      const { height, width, x } = this
      let { y } = this

      const { sx } = tileEngine
      let { sy } = tileEngine

      if (y >= SCREEN_HEIGHT / 2 - height / 2) {
        --y
      } else if (sy > 0) {
        --sy
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
      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - sx,
        y: y - sy
      })) {
        tileEngine.sy = sy
      }
    },

    moveSouth () {
      const { height, width, x } = this
      let { y } = this

      const { sx, tileheight } = tileEngine
      let { sy } = tileEngine

      if (y < SCREEN_HEIGHT / 2 - height / 2) {
        ++y
      } else if (sy < tileheight * tileEngine.height - SCREEN_HEIGHT - 1) {
        ++sy
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
      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - sx,
        y: y - sy
      })) {
        tileEngine.sy = sy
      }
    },

    moveWest () {
      const { height, width, y } = this
      let { x } = this

      const { sy } = tileEngine
      let { sx } = tileEngine

      if (x >= SCREEN_WIDTH / 2 - width / 2) { // XXX scrolling on world coords?!
        --x
      } else if (sx > 0) {
        --sx
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
      if (!tileEngine.layerCollidesWith('collision', {
        height,
        width,
        x: x - sx,
        y: y - sy
      })) {
        tileEngine.sx = sx
      }
    }
  })
}

export {
  makePlayerSprite
}
