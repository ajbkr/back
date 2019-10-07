/* global Image */
import { TileEngine } from 'kontra'

import {
  FINISH_TILE,
  MAP_HEIGHT,
  MAP_WIDTH,
  START_TILE,
  TILE_HEIGHT,
  TILE_SHEET_HEIGHT,
  TILE_SHEET_WIDTH,
  TILE_WIDTH
} from './config'
import { levels } from './levels'
import { c, palette } from './palette'
import { makeTileSprite } from './tile'
import { tiles } from './tiles'

function calcFinishTile ({ tileEngine }) {
  for (let y = 0; y < MAP_HEIGHT; ++y) {
    for (let x = 0; x < MAP_WIDTH; ++x) {
      if (tileEngine.tileAtLayer('ground', {
        x: x * TILE_WIDTH,
        y: y * TILE_HEIGHT
      }) === FINISH_TILE + 1) {
        return { x, y }
      }
    }
  }
}

function calcStartTile ({ tileEngine }) {
  for (let y = 0; y < MAP_HEIGHT; ++y) {
    for (let x = 0; x < MAP_WIDTH; ++x) {
      if (tileEngine.tileAtLayer('ground', {
        x: x * TILE_WIDTH,
        y: y * TILE_HEIGHT
      }) === START_TILE + 1) {
        return { x, y }
      }
    }
  }
}

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
    let startTile = 0
    let finishTile = 0

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
        data: levels[0].ground
          .map(tile => !startTile && tile === 62 ? (startTile = 64) : tile)
          .reverse()
          .map(tile => !finishTile && tile === 62 ? (finishTile = 65) : tile)
          .reverse()
          .map(tile => tile + 1),
        name: 'ground'
      }, {
        data: levels[0].collision,
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
  calcFinishTile,
  calcStartTile,
  initTileEngine
}
