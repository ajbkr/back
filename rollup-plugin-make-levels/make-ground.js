import autotile from 'autotile'

import {
  BASE_TILE,
  MAP_HEIGHT,
  MAP_WIDTH
} from '../src/config'

function makeGround ({ collisionData }) {
  const data = []

  for (let y = 0; y < MAP_HEIGHT; ++y) {
    const row = []

    for (let x = 0; x < MAP_WIDTH; ++x) {
      row.push(collisionData[y * MAP_WIDTH + x])
    }

    data.push(row)
  }

  const tiles = autotile(
    data.map(
      row => row.map(value => [1, 0][value])
    )
  ).reduce((tiles, row) => [...tiles, ...row], [])

  return tiles.map(tile => BASE_TILE + tile)
}

export {
  makeGround
}
