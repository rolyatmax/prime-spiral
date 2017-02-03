import isPrime from 'quick-is-prime'
import InfoBox from './lib/info-box'
// import colorPalettes from './lib/color-palettes.json'

const info = new InfoBox(document.querySelector('.info'))
setTimeout(() => info.show(), 5000)

const settings = {
  cellSize: 4, // make it even, make it nice
  maxNumber: 50000,
  padding: 1,
  colors: ['rgb(109, 151, 136)'] // colorPalettes[Math.random() * colorPalettes.length | 0]
}

const canvas = document.querySelector('.main')
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
canvas.style.width = `${width}px`
canvas.style.height = `${height}px`
const ctx = canvas.getContext('2d')

const center = [width / 2 | 0, height / 2 | 0]

// realizing that you can spiral with this method:
// draw a square, then choose any direction
// move 1 square, turn left, move 1 more square, turn left
// move 2 squares, turn left, move 2 more squares, turn left
// move 3 squares, turn left, move 3 more squares, turn left
// and so on...

// these directions functions will, given a coord, give the next coord in that
// direction.
// Indices map 0 -> north, 1 -> west, 2 -> south, 3 -> east
// so that "turning left" is simply moving to the next index
const directions = [
  ([x, y], size) => [x, y - size],
  ([x, y], size) => [x - size, y],
  ([x, y], size) => [x, y + size],
  ([x, y], size) => [x + size, y]
]

// this is supposed to prime the sieve no pun intended?
isPrime(settings.maxNumber)

drawSpiral()

function drawSpiral () {
  let steps = 0
  let direction = 0
  let curCoord = center
  let i = 1
  const radius = settings.cellSize / 2
  const color = settings.colors[Math.random() * settings.colors.length | 0]
  while (true) {
    let j = 2
    while (j--) {
      const move = directions[direction]
      let k = steps
      while (k--) {
        const [x, y] = curCoord
        if (isPrime(i)) {
          setTimeout(() => {
            drawCircle(ctx, x + radius, y + radius, radius, color)
          }, i * 0.1 | 0)
        }
        curCoord = move(curCoord, settings.cellSize + settings.padding)
        i += 1
        if (i >= settings.maxNumber) return
      }
      direction = (direction + 1) % directions.length
    }
    steps += 1
  }
}

function drawCircle (ctx, x, y, r, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
}
