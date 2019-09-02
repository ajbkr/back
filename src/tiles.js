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
    bkcolor: palette[0]
  },
  {
    bkcolor: palette[1],
    circles: [
      {
        x: -4,
        y: -1,
        radius: 1,
        color: palette[c.white]
      },
      {
        x: -3,
        y: 0,
        radius: 1,
        color: palette[c.white]
      },
      {
        x: -2,
        y: -1,
        radius: 1,
        color: palette[c.white]
      },
      {
        x: -1,
        y: 0,
        radius: 1,
        color: palette[c.white]
      },
      {
        x: 0,
        y: -1,
        radius: 1,
        color: palette[c.white]
      },
      {
        x: 1,
        y: 0,
        radius: 1,
        color: palette[c.white]
      },
      {
        x: 2,
        y: -1,
        radius: 1,
        color: palette[c.white]
      }
    ]
  },
  {
    bkcolor: palette[2]
  },
  {
    bkcolor: palette[3]
  },
  {
    bkcolor: palette[4]
  },
  {
    bkcolor: palette[5]
  },
  {
    bkcolor: palette[6]
  },
  {
    bkcolor: palette[7]
  },
  {
    bkcolor: palette[8]
  },
  {
    bkcolor: palette[9]
  },
  {
    bkcolor: palette[10]
  },
  {
    bkcolor: palette[11]
  },
  {
    bkcolor: palette[12]
  },
  {
    bkcolor: palette[13]
  },
  {
    bkcolor: palette[14]
  },
  {
    bkcolor: palette[15]
  }
]

export {
  tiles
}
