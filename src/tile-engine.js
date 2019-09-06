/* global Image */
import { TileEngine } from 'kontra'

import {
  MAP_HEIGHT,
  MAP_WIDTH,
  TILE_HEIGHT,
  TILE_SHEET_HEIGHT,
  TILE_SHEET_WIDTH,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'
import { makeTileSprite } from './tile'
import { tiles } from './tiles'

function initTileEngine (cb) {
  const canvas = document.createElement('canvas')

  canvas.width = TILE_WIDTH * TILE_SHEET_WIDTH
  canvas.height = TILE_HEIGHT * TILE_SHEET_HEIGHT

  const context = canvas.getContext('2d')

  context.fillStyle = palette[c.black]
  context.fillRect(0, 0, canvas.width, canvas.height)

  const tile = makeTileSprite({ context })

  for (let y = 0; y < TILE_SHEET_HEIGHT; ++y) {
    for (let x = 0; x < TILE_SHEET_WIDTH; ++x) {
      tile.bkcolor = tiles[y * TILE_SHEET_WIDTH + x].bkcolor

      tile.circles = typeof tiles[y * TILE_SHEET_WIDTH + x].circles !== 'undefined'
        ? tiles[y * TILE_SHEET_WIDTH + x].circles : []

      tile.x = x * TILE_WIDTH
      tile.y = y * TILE_HEIGHT

      tile.render()
    }
  }

  const image = new Image()

  image.onload = function () {
    const tileEngine = TileEngine({
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
           1,  2,  3,  4,  5,  6,  7,  8, 11, 11, 11, 11,  2,  2, 15, 15,  2,  2,  2,  2,  2,  2,
           9, 10, 11, 12, 13, 14, 15, 16, 11, 11, 11, 11, 11,  2, 11, 15, 11,  2,  2,  2,  2,  2,
          17, 18, 19, 11, 15, 15, 15, 11,  2,  2,  2,  2,  2,  2,  2, 11,  2,  2,  2,  2,  2,  2,
          20, 15, 21, 11, 11, 15, 11, 11, 11,  2,  2, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
          22, 23, 24,  2,  2,  2,  2, 11, 11, 11,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
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
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1,
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
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
      cb(tileEngine)
    }
  }

  image.src = canvas.toDataURL()
}

export {
  initTileEngine
}
