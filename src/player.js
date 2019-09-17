import { Sprite } from 'kontra'

import { c, palette } from './palette'
import { playSoundUnique } from './sound'

function makePlayerSprite (context, tileEngine) {
  const { tileheight, tilewidth } = tileEngine

  return Sprite({
    width: tilewidth / 4 * 3,
    height: tileheight / 4 * 3,

    x: 0,
    y: 0,

    tileEngine,

    render () {
      const { tileEngine } = this

      context.fillStyle = palette[c.red]
      context.fillRect(this.x - tileEngine.sx, this.y - tileEngine.sy, this.width,
        this.height - 3)

      // eyes
      context.fillStyle = palette[c['bright-white']]
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
      const { height, tileEngine, width, y } = this
      let { x } = this

      if (x < tilewidth * tileEngine.width - 1 - width) {
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
        playSoundUnique('sea')
      }
    },

    moveNorth () {
      const { height, tileEngine, width, x } = this
      let { y } = this

      if (y > 0) {
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
        playSoundUnique('sea')
      }
    },

    moveSouth () {
      const { tileEngine } = this

      const { height, width, x } = this
      let { y } = this

      if (y < tileheight * tileEngine.height - 1 - height) {
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
        playSoundUnique('sea')
      }
    },

    moveWest () {
      const { tileEngine } = this

      const { height, width, y } = this
      let { x } = this

      if (x > 0) {
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
        playSoundUnique('sea')
      }
    }
  })
}

export {
  makePlayerSprite
}
