/* global Image */
import { TileEngine } from 'kontra'

import {
  MAP_HEIGHT,
  MAP_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH
} from './config'
import { c, palette } from './palette'
import { makeTileSprite } from './tile'

function initTileEngine (cb) {
  const canvas = document.createElement('canvas')

  canvas.width = TILE_WIDTH * 4
  canvas.height = TILE_HEIGHT * 4

  const context = canvas.getContext('2d')

  context.fillStyle = palette[c.black]
  context.fillRect(0, 0, canvas.width, canvas.height)

  const tile = makeTileSprite({ context })

  for (let y = 0; y < 4; ++y) {
    for (let x = 0; x < 4; ++x) {
      tile.color = palette[y * 4 + x]

      if (tile.color === palette[c.blue]) {
        tile.bkcolor = palette[c['bright-blue']]
      } else if (tile.color === palette[c['bright-blue']]) {
        tile.bkcolor = palette[c.blue]
      } else if (tile.color === palette[c['bright-green']]) {
        tile.bkcolor = palette[c.green]
      } else if (tile.color === palette[c['bright-yellow']]) {
        tile.bkcolor = palette[c.brown]
      } else {
        tile.bkcolor = palette[c.black]
      }

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
      cb(tileEngine)
    }
  }

  image.src = canvas.toDataURL()
}

export {
  initTileEngine
}
