import {
  GameLoop,
  init,
  initKeys,
  keyPressed,
  TileEngine
} from 'kontra'

import { makeCoinSprite } from './coin'
import { collisions } from './collisions'
import {
  FINISH_TILE,
  MAP_HEIGHT,
  MAP_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  START_TILE,
  TILE_HEIGHT,
  TILE_WIDTH,
  VERSION
} from './config'
import { makeDebugSprite } from './debug'
import { makeEnemySprite } from './enemy'
import { makeFontSprite } from './font'
import { grounds } from './grounds'
// import { c, makePaletteSprite, palette } from './palette'
import { c, palette } from './palette'
import { makePlayerSprite } from './player'
import { makeResizeCanvas } from './resize'
import { playSound } from './sound'
import {
  calcFinishTile,
  calcStartTile,
  initTileEngine
} from './tile-engine'

const VirtualStick = exports.VirtualStick // XXX

const { canvas, context } = init()

canvas.width = SCREEN_WIDTH
canvas.height = SCREEN_HEIGHT

// const pal = makePaletteSprite(context)

const loseCondition = ({ enemies, player }) => !!enemies.filter(enemy =>
  Math.abs(enemy.x - player.x) < player.width &&
  Math.abs(enemy.y - player.y) < player.height
).length

const winCondition = ({ coins, finishTile, player }) =>
  Math.floor((player.x + player.width / 2) / TILE_WIDTH) === finishTile.x &&
  // Math.floor((player.y + player.height / 2) / TILE_HEIGHT) === finishTile.y &&
  // coins.length === 0
  Math.floor((player.y + player.height / 2) / TILE_HEIGHT) === finishTile.y

function resetCoins ({ coins, finishTile, level, startTile, tileEngine }) {
  coins.length = 0

  const numberOfCoins = 1 + Math.floor(level * (level / 13))

  for (let index = 0; index < numberOfCoins; ++index) {
    const coin = makeCoinSprite(context, tileEngine)

    let x, y

    do {
      x = Math.floor(Math.random() * MAP_WIDTH) * TILE_WIDTH + TILE_WIDTH / 8
      y = Math.floor(Math.random() * MAP_HEIGHT) * TILE_HEIGHT
    } while ((tileEngine.tileAtLayer('collision', { x, y }) ||
      Math.floor(x / TILE_WIDTH) === startTile.x) ||
      (tileEngine.tileAtLayer('collision', { x, y }) ||
      Math.floor(x / TILE_WIDTH) === finishTile.x) ||
      tileEngine.tileAtLayer('ground', { x, y }) === START_TILE + 1 ||
      tileEngine.tileAtLayer('ground', { x, y }) === FINISH_TILE + 1)

    coin.x = x
    coin.y = y

    coins.push(coin)
  }
}

function resetEnemies ({ enemies, finishTile, level, startTile, tileEngine }) {
  enemies.length = 0

  const numberOfEnemies = Math.floor(collisions[level % collisions.length]
    .map(tile => [1, 0][tile])
    .reduce((sum, tile) => sum + tile) / 13)

  for (let index = 0; index < numberOfEnemies; ++index) {
    const enemy = makeEnemySprite(context, tileEngine)

    let x, y

    do {
      x = Math.floor(Math.random() * MAP_WIDTH) * TILE_WIDTH + TILE_WIDTH / 8
      y = Math.floor(Math.random() * MAP_HEIGHT) * TILE_HEIGHT
    } while ((tileEngine.tileAtLayer('collision', { x, y }) ||
      Math.floor(x / TILE_WIDTH) === startTile.x) ||
      (tileEngine.tileAtLayer('collision', { x, y }) ||
      Math.floor(x / TILE_WIDTH) === finishTile.x) ||
      tileEngine.tileAtLayer('ground', { x, y }) === START_TILE + 1 ||
      tileEngine.tileAtLayer('ground', { x, y }) === FINISH_TILE + 1)

    enemy.x = x
    enemy.y = y

    enemy.dy = Math.random() < 0.5 ? -0.5 : 0.5
    enemy.dy *= ((level + 1) / 3)

    enemies.push(enemy)
  }
}

function resetPlayer ({ player, startTile, tileEngine }) {
  player.tileEngine = tileEngine

  player.x = TILE_WIDTH * startTile.x + TILE_WIDTH / 8
  player.y = TILE_HEIGHT * (startTile.y + 0.125)
}

function resetTileEngine ({ image, level, tileEngine }) {
  let startTile = 0
  let finishTile = 0

  return TileEngine({
    tileheight: TILE_HEIGHT,
    tilewidth: TILE_WIDTH,

    width: MAP_WIDTH,
    height: MAP_HEIGHT,

    tilesets: [{
      firstgid: 1,
      image
    }],

    layers: [{
      data: grounds[level % grounds.length]
        .map(tile => !startTile && tile === 62 ? (startTile = 64) : tile)
        .reverse()
        .map(tile => !finishTile && tile === 62 ? (finishTile = 65) : tile)
        .reverse()
        .map(tile => tile + 1),
      name: 'ground'
    }, {
      data: collisions[level % collisions.length],
      name: 'collision'
    }]
  })
}

function main () {
  let state

  let level = 0
  let totalCoins = 0

  initTileEngine((tileEngine, image) => {
    const font = makeFontSprite()

    const debug = makeDebugSprite(context)

    let startTile = calcStartTile({ tileEngine })
    let finishTile = calcFinishTile({ tileEngine })

    const player = makePlayerSprite(context, tileEngine)
    resetPlayer({ player, startTile, tileEngine })

    const enemies = []
    resetEnemies({ enemies, finishTile, level, startTile, tileEngine })

    let coins = []
    resetCoins({ coins, finishTile, level, startTile, tileEngine })

    const resizeCanvas = makeResizeCanvas(canvas)

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    initKeys()

    const controller = new VirtualStick({
      container: document.getElementById('container')
    })

    playSound('start')

    state = 'play'

    let loseFrameCount = 0
    let winFrameCount = 0

    const loop = GameLoop({
      render () {
        switch (state) {
          case 'lose': {
            context.fillStyle = palette[c.red]
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)

            break
          }
          case 'play': {
            context.fillStyle = palette[c.black]
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)

            tileEngine.renderLayer('ground')

            // pal.render()

            coins.forEach(coin => coin.render())

            player.render()

            enemies.forEach(enemy => enemy.render())

            // font.render()

            font.x = 4
            font.y = 6
            font.outputText('BACK TO THE ISLAND')

            font.y = 18
            font.outputText('LEVEL: ' + (level + 1))

            font.x = SCREEN_WIDTH - VERSION.length * 4 - 4
            font.y = 6
            font.outputText(VERSION)

            font.x = 4
            font.y = 24
            font.outputText('SCORE: ' + totalCoins)

            // debug.render()

            controller.draw()

            break
          }
          case 'win': {
            context.fillStyle = palette[c.green]
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)
          }
        }
      },

      update () {
        switch (state) {
          case 'lose': {
            if (loseFrameCount < 60) {
              ++loseFrameCount
            } else {
              loseFrameCount = 0

              resetPlayer({
                player,
                startTile,
                tileEngine
              })

              playSound('start')

              state = 'play'
            }

            break
          }
          case 'play': {
            if (winCondition({ coins, finishTile, player })) {
              playSound('win')
              state = 'win'
            } else if (loseCondition({ enemies, player })) {
              playSound('lose')
              state = 'lose'
            }

            const newCoins = []
            for (let index = 0; index < coins.length; ++index) {
              const coin = coins[index]

              if (!(Math.abs(coin.x - player.x) < player.width &&
                Math.abs(coin.y - player.y) < player.height)) {
                newCoins.push(coin)
              } else {
                ++totalCoins
                playSound('collect')
              }
            }
            coins = newCoins

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

            break
          }
          case 'win': {
            if (winFrameCount < 90) {
              ++winFrameCount
            } else {
              winFrameCount = 0

              ++level

              tileEngine = resetTileEngine({
                image,
                level,
                tileEngine
              })

              startTile = calcStartTile({ tileEngine })
              finishTile = calcFinishTile({ tileEngine })

              resetPlayer({ player, startTile, tileEngine })
              resetCoins({ coins, finishTile, level, startTile, tileEngine })
              resetEnemies({ level, tileEngine, startTile, finishTile, enemies })

              playSound('start')

              state = 'play'
            }
          }
        }
      }
    })

    loop.start()
  })
}

main()
