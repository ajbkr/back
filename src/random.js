import fastRandom from 'fast-random'

import { SEED } from './config'

const random = fastRandom(SEED).nextFloat

export {
  random
}
