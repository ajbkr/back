import { Sprite } from 'kontra'

import { c, palette } from './palette'

function makeEnemySprite (context, tileEngine) {
  const { tileheight, tilewidth } = tileEngine

  return Sprite({
    width: tilewidth / 4 * 3,
    height: tileheight / 4 * 3,

    x: 0,
    y: 0,

    render () {
      const { height, width } = this

      const x = Math.floor(this.x)
      const y = Math.floor(this.y)

      context.fillStyle = palette[c.black]
      context.fillRect(x - tileEngine.sx, y - tileEngine.sy, width, height - 3)

      // eyes
      context.fillStyle = palette[c['bright-red']]
      context.fillRect(x - tileEngine.sx + width / 8 * 1, y + 4, 6, 4)
      context.fillRect(x - tileEngine.sx + width / 8 * 5, y + 4, 6, 4)
      context.fillStyle = palette[c.black]
      context.fillRect(x - tileEngine.sx + width / 8 * 1 + 2, y + 4 + 2, 2, 2)
      context.fillRect(x - tileEngine.sx + width / 8 * 5 + 2, y + 4 + 2, 2, 2)

      context.fillStyle = 'rgba(0,0,0,.35)'
      context.fillRect(x - tileEngine.sx + 1, y - tileEngine.sy + height - 2,
        width - 2, 2)
    }
  })
}

export {
  makeEnemySprite
}
