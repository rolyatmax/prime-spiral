// import InfoBox from './lib/info-box'
// import colorPalettes from './lib/color-palettes.json'

// const info = new InfoBox(document.querySelector('.info'))
// setTimeout(() => info.show(), 5000)

const settings = {}

const canvas = document.querySelector('.main')
const ctx = canvas.getContext('2d')


function drawCircle (ctx, x, y, r, color) {
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.stroke()
}
