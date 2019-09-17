import cave from 'cave-automata-2d'
import ndarray from 'ndarray'
import fill from 'ndarray-fill'

import {
  DENSITY as density,
  MAP_HEIGHT,
  MAP_WIDTH
} from '../src/config'
import { random, setSeed } from '../src/random'

function makeCollision ({ seed }) {
  setSeed(seed)

  const grid = ndarray(new Array(MAP_WIDTH * MAP_HEIGHT), [MAP_WIDTH, MAP_HEIGHT])

  fill(grid, (x, y) => random() <= density || (
    x <= 1 || x >= MAP_WIDTH - 2 ||
    y <= 1 || y >= MAP_HEIGHT - 2
  ) ? 1 : 0)

  cave(grid, {
    density,
    fill: false
  })(5)

  for (let x = 0; x < MAP_WIDTH; ++x) {
    grid.set(x, 0, 1)
    grid.set(x, MAP_HEIGHT - 1, 1)
  }

  for (let y = 1; y < MAP_HEIGHT - 1; ++y) {
    grid.set(0, y, 1)
    grid.set(MAP_WIDTH - 1, y, 1)
  }

  const collisionData = []

  for (let y = 0; y < MAP_HEIGHT; ++y) {
    for (let x = 0; x < MAP_WIDTH; ++x) {
      collisionData.push(grid.get(x, y))
    }
  }

  return collisionData
}

export {
  makeCollision
}
