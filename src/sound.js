/* global zzfx */
const intervalIDs = {}

// Sound effects courtesy of Frank Force's Zuper Zmall Zeeded Zound Zynth...
// ZzFX
//
// http://www.3d2k.com/js/zzfx/
const sounds = {
  collision: [1, 0.1, 726, 0.2, 0.1, 0, 1, 0, 0.37], // ZzFX 8269
  'old-collision': [1, 0.1, 28, 0.4, 0.66, 0.8, 0.1, 0.3, 0.57] // ZzFX 10114
}

function playSound (name) {
  if (!intervalIDs[name]) {
    zzfx.apply(null, sounds[name])

    intervalIDs[name] = window.setInterval(function () {
      window.clearInterval(intervalIDs[name])
      intervalIDs[name] = null
    }, sounds[name][3] * 1000)
  }
}

export {
  playSound
}
