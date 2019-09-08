/* global Image */
import { TileEngine } from 'kontra'

import { collision as collisionData } from './collision'
import {
  MAP_HEIGHT,
  MAP_WIDTH,
  TILE_HEIGHT,
  TILE_SHEET_HEIGHT,
  TILE_SHEET_WIDTH,
  TILE_WIDTH
} from './config'
import { ground as groundData } from './ground'
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
      if (y * TILE_SHEET_WIDTH + x >= tiles.length) {
        break
      }

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

      width: MAP_WIDTH,
      height: MAP_HEIGHT,

      tilesets: [{
        firstgid: 1,
        image
      }],

      layers: [{
        data: groundData.map(tile => tile + 1),
        name: 'ground'
      }, {
        data: collisionData,
        name: 'collision'
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
