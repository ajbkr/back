/* global zzfx */
const intervalIDs = {}

// Sound effects courtesy of Frank Force's Zuper Zmall Zeeded Zound Zynth...
// ZzFX
//
// http://www.3d2k.com/js/zzfx/
const sounds = {
  collect: [1, 0.1, 16, 0.5, 0.27, 0.6, 0, 6.6, 0.48], // ZzFX 80972
  collision: [1, 0.1, 726, 0.2, 0.1, 0, 1, 0, 0.37], // ZzFX 8269
  lose: [1, 0.1, 952, 0.4, 0.09, 1.3, 0, 0, 0.88], // ZzFX 18220
  'old-collision': [1, 0.1, 28, 0.4, 0.66, 0.8, 0.1, 0.3, 0.57], // ZzFX 10114
  sea: [1, 0.1, 15, 0.9, 0.44, 0, 3.6, 0.2, 0.89], // ZzFX 8720
  start: [1, 0.1, 968, 0.4, 0.56, 3.3, 0, 15.2, 0.32], // ZzFX 23427
  win: [1, 0.1, 652, 1.1, 0.94, 0, 3.5, 4.5, 0.15] // ZzFX 62086
}

const playSound = name => zzfx.apply(null, sounds[name])

function playSoundUnique (name) {
  if (!intervalIDs[name]) {
    zzfx.apply(null, sounds[name])

    intervalIDs[name] = window.setInterval(function () {
      window.clearInterval(intervalIDs[name])
      intervalIDs[name] = null
    }, sounds[name][3] * 1000)
  }
}

export {
  playSound,
  playSoundUnique
}
