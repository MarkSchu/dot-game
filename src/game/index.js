export const Game = new Observable();

Game.dots = [];
Game.speed = 10;

Game.addDot = function() {
  Game.dots.push({
    x: 100,
    y: 0
  })
}

Game.update = function(timeSinceLastSecond, fps) {
  // add a dot every second and reset seconds
  if (timeSinceLastSecond >= 1000) {
    Game.addDot();
  }
  // update each dot position 
  Game.dots.forEach((dot) => {
    dot.y += (Game.speed / fps);
  });
}

