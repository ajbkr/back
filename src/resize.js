import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from './config'

function makeResizeCanvas (canvas) {
  return function () {
    const { innerWidth, innerHeight } = window
    const windowRatio = innerWidth / innerHeight
    const canvasRatio = SCREEN_WIDTH / SCREEN_HEIGHT

    if (windowRatio < canvasRatio) {
      canvas.style.width = innerWidth + 'px'
      canvas.style.height = (innerWidth / canvasRatio) + 'px'
    } else {
      canvas.style.width = (innerHeight * canvasRatio) + 'px'
      canvas.style.height = innerHeight + 'px'
    }
  }
}

export {
  makeResizeCanvas
}
