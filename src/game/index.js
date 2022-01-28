import { Observable } from 'utils/observable';
import { Renderer } from '../renderer';

export const Game = new Observable();

Game.dots = [];
Game.speed = 10;

Game.getRandomRadius = function() {
  // TODO move 10 and 100 into constants
  return Math.floor(5 + (Math.random() * 50));
}

Game.getRandomXCoord = function(radius) {
  const renderAreaWidth = Renderer.getRenderAreaWidth();
  return Math.floor(radius + (Math.random() * (renderAreaWidth - radius)));
}

Game.addDot = function() {
  const radius = Game.getRandomRadius();
  const x = Game.getRandomXCoord(radius);
  const y = -radius;
  Game.dots.push({ x, y, radius })
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

