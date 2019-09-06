import { c, palette } from './palette'

// xxx yyy rr cccc ????
//
// xxx: -4..3
// yyy: -4..3
// rr: 0.5, 1, 2, 4?
//
// cccc: 0..15
// ????: ?
const tiles = [
  {
    bkcolor: palette[c.black]
  },
  {
    bkcolor: palette[c.blue]
  },
  {
    bkcolor: palette[c.green]
  },
  {
    bkcolor: palette[c.cyan]
  },
  {
    bkcolor: palette[c.red]
  },
  {
    bkcolor: palette[c.magenta]
  },
  {
    bkcolor: palette[c.brown]
  },
  {
    bkcolor: palette[c.white]
  },
  {
    bkcolor: palette[c['dark-gray']]
  },
  {
    bkcolor: palette[c['bright-blue']]
  },
  {
    bkcolor: palette[c['bright-green']]
  },
  {
    bkcolor: palette[c['bright-cyan']]
  },
  {
    bkcolor: palette[c['bright-red']]
  },
  {
    bkcolor: palette[c['bright-magenta']]
  },
  {
    bkcolor: palette[c['bright-yellow']]
  },
  {
    bkcolor: palette[c['bright-white']]
  },
  { // sand, top-left
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -2,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -1,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 0,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 1,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 2,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 0,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, top
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -2,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -1,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 0,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 1,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 2,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, top-right
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -2,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -1,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 0,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 1,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 2,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 0,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, left
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 0,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, right
    bkcolor: palette[14],
    circles: [
      {
        x: 3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 0,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, bottom-left
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 0,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -2,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -1,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 0,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 1,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 2,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, bottom
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -2,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -1,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 0,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 1,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 2,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // sand, bottom-right
    bkcolor: palette[14],
    circles: [
      {
        x: 3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: -1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 0,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 1,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -2,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -1,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 0,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 1,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 2,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  }
]

export {
  tiles
}
