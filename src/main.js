import {
  GameLoop,
  init,
  initKeys,
  keyPressed
} from 'kontra'

import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from './config'
import { makeDebugSprite } from './debug'
// import { c, makePaletteSprite, palette } from './palette'
import { c, palette } from './palette'
import { makePlayerSprite } from './player'
import { makeResizeCanvas } from './resize'
import { playSound } from './sound'
import { initTileEngine } from './tile-engine'

const VirtualStick = exports.VirtualStick // XXX

const { canvas, context } = init()

canvas.width = SCREEN_WIDTH
canvas.height = SCREEN_HEIGHT

// const pal = makePaletteSprite(context)

let player

let tileEngine

function movePlayerWest () {
  const { height, width, y } = player
  let { x } = player

  const { sy } = tileEngine
  let { sx } = tileEngine

  if (x >= SCREEN_WIDTH / 2 - width / 2) {
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
    player.x = x
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

function movePlayerEast () {
  const { height, width, y } = player
  let { x } = player

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
    player.x = x
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

function movePlayerNorth () {
  const { height, width, x } = player
  let { y } = player

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
    player.y = y
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
}

function movePlayerSouth () {
  const { height, width, x } = player
  let { y } = player

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
    player.y = y
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
}

function main () {
  initTileEngine(tileEngine2 => {
    tileEngine = tileEngine2

    const debug = makeDebugSprite(context)

    player = makePlayerSprite(context, tileEngine)

    const resizeCanvas = makeResizeCanvas(canvas)

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    initKeys()

    const controller = new VirtualStick({
      container: document.getElementById('container')
    })

    const loop = GameLoop({
      render () {
        context.fillStyle = palette[c.black]
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        tileEngine.renderLayer('ground')

        // pal.render()

        player.render()

        debug.render()

        controller.draw()
      },

      update () {
        if (keyPressed('left')) {
          movePlayerWest()
        }
        if (keyPressed('right')) {
          movePlayerEast()
        }
        if (keyPressed('up')) {
          movePlayerNorth()
        }
        if (keyPressed('down')) {
          movePlayerSouth()
        }

        const { dx, dy } = controller.getAxis()

        if (dx < 0) {
          movePlayerWest()
        } else if (dx > 0) {
          movePlayerEast()
        }
        if (dy < 0) {
          movePlayerNorth()
        } else if (dy > 0) {
          movePlayerSouth()
        }

        debug.text = '(' + player.x + ', ' + player.y + ') (' +
          tileEngine.sx + ', ' + tileEngine.sy + ') (' +
          (player.x - tileEngine.sx) + ', ' + (player.y - tileEngine.sy) + ')'
      }
    })

    loop.start()
  })
}

main()
