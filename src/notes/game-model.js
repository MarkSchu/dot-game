// create every 1s
function createDot() {
  return {
    diameter: Number,   // [10px 100px]
    speed: Number,      // [10px per second, 100px per second]
    x: Number,
    y: Number,
    points: Math
  }
}


const dots = [];

function update(progress) {

}

function draw() {
  // Draw the state of the world
}

function loop(timestamp) {
  var progress = timestamp - lastRender
  update(progress)
  draw()
  lastRender = timestamp
  window.requestAnimationFrame(loop)
}

var lastRender = 0
// window.requestAnimationFrame(loop)
