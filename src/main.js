/* global Image */
import {
  GameLoop,
  init,
  initKeys,
  keyPressed,
  Sprite,
  TileEngine
} from 'kontra'

const VirtualStick = exports.VirtualStick // XXX

const SCREEN_WIDTH = 640
const SCREEN_HEIGHT = 480

const TILE_WIDTH = 32
const TILE_HEIGHT = 32

const MAP_WIDTH = SCREEN_WIDTH / TILE_WIDTH
const MAP_HEIGHT = SCREEN_HEIGHT / TILE_HEIGHT

const { canvas, context } = init()

canvas.width = SCREEN_WIDTH
canvas.height = SCREEN_HEIGHT

const palette = [
  '#000', // 0
  '#00a', // 1
  '#0a0', // 2
  '#0aa', // 3
  '#a00', // 4
  '#a0a', // 5
  '#a50', // 6
  '#aaa', // 7
  '#555', // 8
  '#55f', // 9
  '#5f5', // 10
  '#5ff', // 11
  '#f55', // 12
  '#f5f', // 13
  '#ff5', // 14
  // eslint-disable-next-line no-multi-spaces
  '#fff'  // 15
]

const c = {
  black: 0,
  blue: 1,
  green: 2,
  cyan: 3,
  red: 4,
  magenta: 5,
  brown: 6,
  white: 7,
  'light-gray': 7,
  'dark-gray': 8,
  'bright-black': 8,
  'bright-blue': 9,
  'bright-green': 10,
  'bright-cyan': 11,
  'bright-red': 12,
  'bright-magenta': 13,
  'bright-yellow': 14,
  'bright-white': 15
}

/*
const pal = Sprite({
  width: TILE_WIDTH,
  height: TILE_HEIGHT,

  x: 0,
  y: 0,

  render () {
    for (let y = 0; y < 2; ++y) {
      for (let x = 0; x < 8; ++x) {
        context.fillStyle = palette[y * 8 + x]
        context.fillRect(this.x + x * this.width, this.y + y * this.height,
          this.width, this.height)
      }
    }
  }
})
*/

const player = Sprite({
  width: TILE_WIDTH / 4 * 3,
  height: TILE_HEIGHT / 4 * 3,

  x: TILE_WIDTH * 7,
  y: TILE_HEIGHT / 2,

  /*
  anchor: {
    x: 0.5,
    y: 0.5
  },
  */

  render () {
    context.fillStyle = palette[c['red']]
    context.fillRect(this.x - this.anchor.x * this.width,
      this.y - this.anchor.y * this.height, this.width, this.height)
  }
})

let tileEngine

(() => {
  const canvas2 = document.createElement('canvas')

  canvas2.width = TILE_WIDTH * 4
  canvas2.height = TILE_HEIGHT * 4

  const context2 = canvas2.getContext('2d')

  context2.fillStyle = palette[c['black']]
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
           2,  2,  2,  2,  2,  2, 11, 11, 11, 11, 11, 11,  2,  2, 15, 15,  2,  2,  2,  2,  2, 2,
           2, 11, 11, 11, 11,  2, 11, 11, 11, 11, 11, 11, 11,  2, 11, 15, 11,  2,  2,  2,  2, 2,
          11, 11, 11, 11, 15, 15, 15, 11,  2,  2,  2,  2,  2,  2,  2, 11,  2,  2,  2,  2,  2, 2,
          15,  2,  2, 11, 11, 15, 11, 11, 11,  2,  2, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2, 11, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2, 15,  2,  2,  2, 11, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  9,  9, 11, 11, 11, 11, 11, 11, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 11, 11, 11, 11, 11,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 15, 11,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 10, 10,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 15,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 15,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2
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
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
      }]
    })

    main()
  }

  image.src = canvas2.toDataURL()
})()

initKeys()

const controller = new VirtualStick({
  container: document.getElementById('container')
})

function movePlayerWest () {
  const { height, width, y } = player
  let { x } = player

  if (x + width / 2 >= SCREEN_WIDTH / 2) {
    --x
  /*
  } else if (tileEngine.sx > 0) {
    --tileEngine.sx
  */
  } else if (x > 0) {
    --x
  }

  if (!tileEngine.layerCollidesWith('collision', { height, width, x, y })) {
    player.x = x
  }
}

function movePlayerEast () {
  const { height, width, y } = player
  let { x } = player

  if (x + width / 2 < SCREEN_WIDTH / 2) {
    ++x
  /*
  } else if (tileEngine.sx <
    tileEngine.tilewidth * tileEngine.width - SCREEN_WIDTH) {
    ++tileEngine.sx
  */
  } else if (x <= SCREEN_WIDTH - 1 - width) {
    ++x
  }

  if (!tileEngine.layerCollidesWith('collision', { height, width, x, y })) {
    player.x = x
  }
}

function movePlayerNorth () {
  const { height, width, x } = player
  let { y } = player

  if (y + height / 2 >= SCREEN_HEIGHT / 2) {
    --y
  /*
  } else if (tileEngine.sy > 0) {
    --tileEngine.sy
  */
  } else if (y > 0) {
    --y
  }

  if (!tileEngine.layerCollidesWith('collision', { height, width, x, y })) {
    player.y = y
  }
}

function movePlayerSouth () {
  const { height, width, x } = player
  let { y } = player

  if (y + height / 2 < SCREEN_HEIGHT / 2) {
    ++y
  /*
  } else if (tileEngine.sy <
    tileEngine.tileheight * tileEngine.height - SCREEN_HEIGHT) {
    ++tileEngine.sy
  */
  } else if (y <= SCREEN_HEIGHT - 1 - height) {
    ++y
  }

  if (!tileEngine.layerCollidesWith('collision', { height, width, x, y })) {
    player.y = y
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
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const loop = GameLoop({
    render () {
      context.fillStyle = palette[c['black']]
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)

      tileEngine.renderLayer('ground')

      // pal.render()

      player.render()

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
    }
  })

  loop.start()
}
