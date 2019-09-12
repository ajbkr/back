import {
  GameLoop,
  init,
  initKeys,
  keyPressed
} from 'kontra'

import {
  FINISH_TILE,
  MAP_HEIGHT,
  MAP_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  START_TILE,
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { makeDebugSprite } from './debug'
import { makeEnemySprite } from './enemy'
import { makeFontSprite } from './font'
// import { c, makePaletteSprite, palette } from './palette'
import { c, palette } from './palette'
import { makePlayerSprite } from './player'
import { makeResizeCanvas } from './resize'
import { initTileEngine } from './tile-engine'
import { collision as collisionData } from './collision'

const VirtualStick = exports.VirtualStick // XXX

const { canvas, context } = init()

canvas.width = SCREEN_WIDTH
canvas.height = SCREEN_HEIGHT

// const pal = makePaletteSprite(context)

function main () {
  initTileEngine(tileEngine => {
    const font = makeFontSprite()

    const debug = makeDebugSprite(context)

    const player = makePlayerSprite(context, tileEngine)
    player.x = TILE_WIDTH * 10 + TILE_WIDTH / 8
    player.y = TILE_HEIGHT * 9.125

    const enemies = []

    const numberOfEnemies = Math.floor(collisionData.map(tile => [1, 0][tile])
      .reduce((sum, tile) => sum + tile) / 13)

    for (let index = 0; index < numberOfEnemies; ++index) {
      const enemy = makeEnemySprite(context, tileEngine)

      let x, y

      do {
        x = Math.floor(Math.random() * MAP_WIDTH) * TILE_WIDTH + TILE_WIDTH / 8
        y = Math.floor(Math.random() * MAP_HEIGHT) * TILE_HEIGHT
      } while (tileEngine.tileAtLayer('collision', { x, y }) ||
        tileEngine.tileAtLayer('ground', { x, y }) === START_TILE + 1 ||
        tileEngine.tileAtLayer('ground', { x, y }) === FINISH_TILE + 1)

      enemy.x = x
      enemy.y = y

      enemy.dy = Math.random() < 0.5 ? -0.5 : 0.5

      enemies.push(enemy)
    }

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

        enemies.forEach(enemy => enemy.render())

        player.render()

        // font.render()

        font.outputText('BACK TO THE ISLAND')

        /*
        font.x = 4
        font.y = 6
        font.outputText('I HAD NO INTENTION, NONE WHATSOEVER, OF GOING BACK...')
        font.x = 188
        font.y = 18
        font.outputText('BACK TO THE ISLAND.')
        */
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
        for (let index = 0; index < enemies.length; ++index) {
          const enemy = enemies[index]

          const { x } = enemy
          let { dy, y } = enemy

          y += dy

          if (!tileEngine.layerCollidesWith('collision', {
            x,
            y,
            width: enemy.width,
            height: enemy.height
          })) {
            enemies[index].y = y
          } else {
            dy *= -1
            enemies[index].dy = dy
          }
        }

        if (keyPressed('left') || keyPressed('a') || keyPressed('q')) {
          player.moveWest()
        }
        if (keyPressed('right') || keyPressed('d')) {
          player.moveEast()
        }
        if (keyPressed('up') || keyPressed('w') || keyPressed('z')) {
          player.moveNorth()
        }
        if (keyPressed('down') || keyPressed('s')) {
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
