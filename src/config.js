const VERSION = '0.0.2 (WORK-IN-PROGRESS)'

const SCREEN_WIDTH = 640
const SCREEN_HEIGHT = 480

const TILE_WIDTH = 32
const TILE_HEIGHT = 32

const MAP_WIDTH = SCREEN_WIDTH / TILE_WIDTH
const MAP_HEIGHT = SCREEN_HEIGHT / TILE_HEIGHT

const TILE_SHEET_WIDTH = 8
const TILE_SHEET_HEIGHT = 9

const BASE_TILE = 16

const START_TILE = 64
const FINISH_TILE = 65

const SEED = 12

const DENSITY = 0.4

export {
  BASE_TILE,
  DENSITY,
  FINISH_TILE,
  MAP_HEIGHT,
  MAP_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SEED,
  START_TILE,
  TILE_HEIGHT,
  TILE_SHEET_HEIGHT,
  TILE_SHEET_WIDTH,
  TILE_WIDTH,
  VERSION
}
