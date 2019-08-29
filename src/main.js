/* global Image */
import {
  GameLoop,
  init,
  initKeys,
  keyPressed,
  Sprite,
  TileEngine
} from 'kontra'

import {
  MAP_HEIGHT,
  MAP_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { makeDebugSprite } from './debug'
// import { c, makePaletteSprite, palette } from './palette'
import { c, palette } from './palette'
import { playSound } from './play-sound'

const VirtualStick = exports.VirtualStick // XXX

const { canvas, context } = init()

canvas.width = SCREEN_WIDTH
canvas.height = SCREEN_HEIGHT

// const pal = makePaletteSprite(context)

const debug = makeDebugSprite(context)

const player = Sprite({
  width: TILE_WIDTH / 4 * 3,
  height: TILE_HEIGHT / 4 * 3,

  x: TILE_WIDTH * 7,
  y: TILE_HEIGHT / 2,

  render () {
    context.fillStyle = palette[c.red]
    context.fillRect(this.x - tileEngine.sx, this.y - tileEngine.sy, this.width,
      this.height)
  }
})

let tileEngine

function initTileEngine (cb) {
  const canvas2 = document.createElement('canvas')

  canvas2.width = TILE_WIDTH * 4
  canvas2.height = TILE_HEIGHT * 4

  const context2 = canvas2.getContext('2d')

  context2.fillStyle = palette[c.black]
  context2.fillRect(0, 0, canvas2.width, canvas2.height)

  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      context2.fillStyle = palette[y * 4 + x]
      context2.fillRect(x * TILE_WIDTH, y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT)
    }
  }

  const image = new Image()

  image.onload = function () {
    tileEngine = TileEngine({
      tileheight: TILE_HEIGHT,
      tilewidth: TILE_WIDTH,

      width: MAP_WIDTH + 2,
      height: MAP_HEIGHT + 2,

      tilesets: [{
        firstgid: 1,
        image
      }],

      layers: [{
        name: 'ground',
        data: [
          /* eslint-disable indent, no-multi-spaces */
           2,  2,  2,  2,  2,  2, 11, 11, 11, 11, 11, 11,  2,  2, 15, 15,  2,  2,  2,  2,  2,  2,
           2, 11, 11, 11, 11,  2, 11, 11, 11, 11, 11, 11, 11,  2, 11, 15, 11,  2,  2,  2,  2,  2,
          11, 11, 11, 11, 15, 15, 15, 11,  2,  2,  2,  2,  2,  2,  2, 11,  2,  2,  2,  2,  2,  2,
          15,  2,  2, 11, 11, 15, 11, 11, 11,  2,  2, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2, 11, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2, 15,  2,  2,  2, 11, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  9,  9, 11, 11, 11, 11, 11, 11, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 11, 11, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 15, 11,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 10, 10,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 15,  2,  2,  2,  2,  2,  2,  2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 15, 10, 10, 10, 10, 10, 10, 10,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 10,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 10,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 10,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 10
          /* eslint-enable indent, no-multi-spaces */
        ]
      }, {
        name: 'collision',
        data: [
          1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
          1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1,
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
          0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0
        ]
      }]
    })

    if (typeof cb === 'function') {
      cb()
    }
  }

  image.src = canvas2.toDataURL()
}

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

function resizeCanvas () {
  const { innerWidth, innerHeight } = window
  const windowRatio = innerWidth / innerHeight
  const canvasRatio = SCREEN_WIDTH / SCREEN_HEIGHT

  if (windowRatio < canvasRatio) {
    canvas.style.width = innerWidth + 'px'
    canvas.style.height = (innerWidth / canvasRatio) + 'px'
  } else {
    canvas.style.width = (innerHeight * canvasRatio) + 'px'
    canvas.style.height = innerHeight + 'px'
  }
}

function main () {
  initTileEngine(() => {
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
