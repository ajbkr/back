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

        //font.render()
        /* font.x = font.y = 0
        font.outputText('BACK TO THE ISLAND')
        font.y = 6
        font.outputText('BY ANDREW J. BAKER') */
        font.x = 4
        font.y = 6
        font.outputText('I HAD NO INTENTION, NONE WHATSOEVER, OF GOING BACK...')
        font.x = 188
        font.y = 18
        font.outputText('BACK TO THE ISLAND.')
        /*
        font.y = 18
        font.outputText('AND YET HERE I FIND MYSELF AS I STEP FROM THE GANGPLANK')
        font.y = 24
        font.outputText('OF A CALMAC FERRY, BEFORE PICKING MY WAY DEFTLY THROUGH THE')
        font.y = 30
        font.outputText('CROWDS OF ARRIVING TOURISTS. I AM REVISITING THAT LARGEST AND MOST')
        font.y = 36
        font.outputText('NORTHERLY MEMBER OF THE HEBRIDEAN ARCHIPELAGO,')
        font.y = 42
        font.outputText('THE ISLE OF LEWIS.')

        font.y = 54
        font.outputText('MY NAME IS MEL KNOX. I AM WELL-VERSED IN THE ARCANE ARTS.')
        font.y = 60
        font.outputText('I AM A SENTINEL')
        font.y = 66
        font.outputText('AND I AM HERE TO RELUCTANTLY RESUME MY INVESTIGATION')
        font.y = 72
        font.outputText('INTO THE DOINGS AND SHADOWY DEALINGS OF "THE ESOTERIC ORDER OF DAGON".')

        font.y = 84
        font.outputText('I CAUTIOUSLY EXIT THE FERRY PORT AT STORNOWAY HARBOUR AND HEAD DIRECTLY')
        font.y = 90
        font.outputText('FOR THE TAXI RANK.')
        */

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
