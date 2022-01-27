let running = false;
let speed = 0;  // [10px per second, 100px per second]
let timeSinceLastLoop = 0;
let timeSinceLastDot = 0;
let previousTime;
let dots = [{y: 0}];

function addDot() {
  dots.push({y: 0})
}
let cyclesToSecond = 0;
function update(timeSinceLastLoop) {
  cyclesToSecond += 1;
  timeSinceLastDot += timeSinceLastLoop;
  if (timeSinceLastDot >= 1000) {
    // dots[0].y += 10;
    console.log(dots[0].y);
    // addDot();
    timeSinceLastDot = 0;
  }
  dots[0].y += (10 / 60);  // devide cycles per second
}

// time = ms that have passed since the document's time origin
// time origin = the beginning of the document's lifetme
function gameLoop(currentTime) {
  if (previousTime) {
    timeSinceLastLoop = currentTime - previousTime;
  }
  update(timeSinceLastLoop);
  // render();
  previousTime = currentTime
  if (running)
    window.requestAnimationFrame(gameLoop);
}

export function isRunning() {
  return running;
}

export function start() {
  running = true;
  window.requestAnimationFrame(gameLoop);
}

export function stop() {
  running = false;
}