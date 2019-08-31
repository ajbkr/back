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
import { makeFontSprite } from './font'
// import { c, makePaletteSprite, palette } from './palette'
import { c, palette } from './palette'
import { makePlayerSprite } from './player'
import { makeResizeCanvas } from './resize'
import { initTileEngine } from './tile-engine'

const VirtualStick = exports.VirtualStick // XXX

const { canvas, context } = init()

canvas.width = SCREEN_WIDTH
canvas.height = SCREEN_HEIGHT

// const pal = makePaletteSprite(context)

let player

let tileEngine

function main () {
  initTileEngine(tileEngine2 => {
    tileEngine = tileEngine2

    const font = makeFontSprite()

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

        // font.render()
        font.outputTextXY(0, 0, 'BACK TO THE ISLAND')
        font.outputTextXY(0, 6, 'BY ANDREW J. BAKER')

        // debug.render()

        controller.draw()
      },

      update () {
        if (keyPressed('left')) {
          player.moveWest()
        }
        if (keyPressed('right')) {
          player.moveEast()
        }
        if (keyPressed('up')) {
          player.moveNorth()
        }
        if (keyPressed('down')) {
          player.moveSouth()
        }

        const { dx, dy } = controller.getAxis()

        if (dx < 0) {
          player.moveWest()
        } else if (dx > 0) {
          player.moveEast()
        }
        if (dy < 0) {
          player.moveNorth()
        } else if (dy > 0) {
          player.moveSouth()
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
