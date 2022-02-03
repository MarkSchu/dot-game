import { Observable } from 'utils/observable';
import { Renderer } from '../renderer';


export const Game = new Observable({
  points: 0
});

// constants
Game.minSpeed = 10; 
Game.maxSpeed = 100;
Game.minRadius = 5;
Game.maxRadius = 50;

// state
Game.dots = [];
Game.speed = 50; // [10, 100]

Game.setSpeed = function(value) {
  Game.speed = value;
}

Game.getRandomRadius = function() {
  return Math.floor(Game.minRadius + (Math.random() * Game.maxRadius));
}

Game.getRandomXCoord = function(radius) {
  const renderAreaWidth = Renderer.getRenderAreaWidth();
  return Math.floor(radius + (Math.random() * (renderAreaWidth - (radius * 2))));
}

Game.getPoints = function(radius) {
  const minDiameter = Game.minRadius * 2;
  const maxDiameter = Game.maxRadius * 2;
  const diameter = radius * 2;
  return (minDiameter + maxDiameter) - diameter;
}

Game.addPoints = function(points) {
  Game.set({points: Game.data.points + points});
}

Game.addDot = function() {
  const radius = Game.getRandomRadius();
  const x = Game.getRandomXCoord(radius);
  const y = -radius;
  const points = Game.getPoints(radius);
  Game.dots.push({ x, y, radius, points })
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

