function update(progress) {

}

function draw() {
  // Draw the state of the world
}

const fpsEl = document.querySelector('#fps');
let secondsPassed = 0;
let oldTimeStamp = 0;
let timePassed = 0;
let count = 0;
let fps;

function gameLoop(timeStamp) {
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  timePassed += secondsPassed;

  if (timePassed > 1) {
    count += 1;
    timePassed = 0;
  }

  oldTimeStamp = timeStamp;
  // Calculate fps
  fps = Math.round(1 / secondsPassed);
  fpsEl.textContent = count;
  // Perform the drawing operation
  draw();
  // The loop function has reached it's end. Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop)
