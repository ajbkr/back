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
  { // autotile 0: sea
    bkcolor: palette[c.blue]
  },
  { // autotile 1: wet sand, cul-de-sac bottom
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
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
        x: 3,
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
        x: 3,
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
        x: 3,
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
        x: 3,
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
        x: 3,
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
        x: 3,
        y: 2,
        radius: 2,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: 3,
        radius: 0,
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
        radius: 0,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 2: wet sand, cul-de-sac right
    bkcolor: palette[c['bright-yellow']],
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
        radius: 0,
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
        radius: 0,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 3
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 4: sand, bottom-right
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
        radius: 0,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 5: wet sand, cul-de-sac left
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 0,
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
        radius: 0,
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
  { // autotile 6
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 7: sand, bottom-left
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
        radius: 0,
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
  { // autotile 8
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 9
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 10
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 11
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 12: sand, bottom
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
  { // autotile 13: wet sand, cul-de-sac top
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 0,
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
        radius: 0,
        color: palette[c.brown]
      },
      {
        x: -4,
        y: -3,
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
        x: -4,
        y: -2,
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
        x: -4,
        y: -1,
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
        x: -4,
        y: 0,
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
        x: -4,
        y: 1,
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
        x: -4,
        y: 2,
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
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 14
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 15
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 16
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 17: sand, right
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
  { // autotile 18
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 19
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 20
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 21: wet sand, bar top, dots bottom-left and bottom-right
    bkcolor: palette[c['bright-yellow']],
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
  { // autotile 22
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 23
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 24: wet sand, corners top-left, bottom-left, bottom-right
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
        y: -4,
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
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 25: wet sand, dots bottom-left and bottom-right
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
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
  { // autotile 26: sand, top-right
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
        radius: 0,
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
  { // autotile 27
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 28: sand, right
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
  { // autotile 29
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 30
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 31
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 32
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 33: wet sand, bottom-right
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: 3,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 34: sand, top-left
    bkcolor: palette[14],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 0,
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
  { // autotile 35
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 36: sand, left
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
  { // autotile 37
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 38
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 39
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 40
    bkcolor: palette[c['bright-red']]
  },
  { // autotile 41: wet sand, bottom-left
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
        y: 3,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 42: sand, top
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
  { // autotile 43: wet sand, dots top-left and top-right
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
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
  { // autotile 44: wet sand, top-right
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: 3,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 45: wet sand, top-left
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: -4,
        y: -4,
        radius: 2,
        color: palette[c.brown]
      }
    ]
  },
  { // autotile 46: sand
    bkcolor: palette[c['bright-yellow']],
    circles: [
      {
        x: 0,
        y: 0,
        radius: 1,
        color: palette[c.green]
      }
    ]
  },
  { // autotile 47
    bkcolor: palette[c['bright-red']]
  },
  { // start
    bkcolor: palette[c['light-gray']]
  },
  { // finish
    bkcolor: palette[c.black],
    circles: [
      {
        x: -3,
        y: -4,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -1,
        y: -4,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 1,
        y: -4,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 3,
        y: -4,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -4,
        y: -3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -2,
        y: -3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 0,
        y: -3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 2,
        y: -3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -3,
        y: -2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -1,
        y: -2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 1,
        y: -2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 3,
        y: -2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -4,
        y: -1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -2,
        y: -1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 0,
        y: -1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 2,
        y: -1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -3,
        y: 0,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -1,
        y: 0,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 1,
        y: 0,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 3,
        y: 0,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -4,
        y: 1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -2,
        y: 1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 0,
        y: 1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 2,
        y: 1,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -3,
        y: 2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -1,
        y: 2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 1,
        y: 2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 3,
        y: 2,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -4,
        y: 3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: -2,
        y: 3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 0,
        y: 3,
        radius: 1,
        color: palette[c['bright-white']]
      },
      {
        x: 2,
        y: 3,
        radius: 1,
        color: palette[c['bright-white']]
      }
    ]
  }
]

export {
  tiles
}
