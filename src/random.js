import fastRandom from 'fast-random'

import { SEED } from './config'

const generator = fastRandom(SEED)

const random = generator.nextFloat

function setSeed (value) {
  generator.seed(value)
}

export {
  random,
  setSeed
}
