/* global Image */
import {
  GameLoop,
  init,
  initKeys,
  keyPressed,
  Sprite,
  TileEngine
} from 'kontra'

/*
640x480 screen
32x32 tilesize
20x15 tiles
*/

const SCREEN_WIDTH = 640
const SCREEN_HEIGHT = 480

const TILE_WIDTH = 32
const TILE_HEIGHT = 32

const MAP_WIDTH = 20
const MAP_HEIGHT = 15

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
const sprite = Sprite({
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
  width: TILE_WIDTH,
  height: TILE_HEIGHT,

  x: SCREEN_WIDTH / 2,
  y: SCREEN_HEIGHT / 2,

  anchor: {
    x: 0.5,
    y: 0.5
  },

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
          11, 11, 11, 11, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2, 11,  2,  2,  2,  2,  2, 2,
          15,  2,  2, 11, 11, 15, 11, 11,  2,  2,  2, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2, 15,  2,  2,  2,  2, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2, 11, 11, 11, 11, 11, 11, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 11, 11, 11, 11, 11,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 15, 11,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 15,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 11, 15,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2,
           2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 2
          /* eslint-enable indent, no-multi-spaces */
        ]
      }]
    })

    main()
  }

  image.src = canvas2.toDataURL()
})()

initKeys()

function main () {
  const loop = GameLoop({
    render () {
      context.fillStyle = palette[c['black']]
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)

      tileEngine.render()

      // sprite.render()

      player.render()
    },

    update () {
      if (keyPressed('left')) {
        if (player.x >= SCREEN_WIDTH / 2) {
          --player.x
        } else if (tileEngine.sx > 0) {
          --tileEngine.sx
        } else if (player.x > TILE_WIDTH / 2) {
          --player.x
        }
      }
      if (keyPressed('right')) {
        if (player.x < SCREEN_WIDTH / 2) {
          ++player.x
        } else if (tileEngine.sx <
          tileEngine.tilewidth * tileEngine.width - SCREEN_WIDTH) {
          ++tileEngine.sx
        } else if (player.x <= SCREEN_WIDTH - 1 - TILE_WIDTH / 2) {
          ++player.x
        }
      }

      if (keyPressed('up')) {
        if (player.y >= SCREEN_HEIGHT / 2) {
          --player.y
        } else if (tileEngine.sy > 0) {
          --tileEngine.sy
        } else if (player.y > TILE_HEIGHT / 2) {
          --player.y
        }
      }
      if (keyPressed('down')) {
        if (player.y < SCREEN_HEIGHT / 2) {
          ++player.y
        } else if (tileEngine.sy <
          tileEngine.tileheight * tileEngine.height - SCREEN_HEIGHT) {
          ++tileEngine.sy
        } else if (player.y <= SCREEN_HEIGHT - 1 - TILE_HEIGHT / 2) {
          ++player.y
        }
      }
    }
  })

  loop.start()
}
