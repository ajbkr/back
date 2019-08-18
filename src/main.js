import { GameLoop, init, Sprite } from 'kontra'

/*
640x480 screen
32x32 tilesize
20x15 tiles
*/

const W = 640
const H = 480

const { canvas, context } = init()

canvas.width = W
canvas.height = H

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

// ...

const sprite = Sprite({
  height: 32,
  width: 32,
  x: 0,
  y: 0,

  render () {
    for (let y = 0; y < 2; ++y) {
      for (let x = 0; x < 8; ++x) {
        context.fillStyle = palette[y * 8 + x]
        context.fillRect(this.x + x * this.width, this.y + y * this.height, this.width, this.height)
      }
    }
  }
})

const loop = GameLoop({
  render () {
    context.fillStyle = palette[c['black']]
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    sprite.render()

    // ...
  },

  update () {
    // ...
  }
})

loop.start()
