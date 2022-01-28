import { Observable } from 'utils/observable';
import { Renderer } from '../renderer';


export const Game = new Observable();

Game.dots = [];
Game.speed = 10;

Game.getRandomRadius = function() {
  return Math.floor(5 + (Math.random() * 50));
}

Game.getRandomXCoord = function(radius) {
  const renderAreaWidth = Renderer.getRenderAreaWidth();
  return Math.floor(radius + (Math.random() * (renderAreaWidth - (2 * radius))));
}

Game.addDot = function() {
  const radius = Game.getRandomRadius();
  const x = Game.getRandomXCoord(radius);
  const y = -radius;
  Game.dots.push({ x, y, radius })
}

Game.removeDot = function(dot) {
  Game.dots = Game.dots.filter(testdot => testdot !== dot);
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

