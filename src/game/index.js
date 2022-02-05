import { Renderer } from '../renderer';
import { ObservableVar } from '../utils/observable';

export const Game = {
  constants: {
    minSpeed: 10,
    maxSpeed: 100,
    minRadius: 5,
    maxRadius: 50,
  },
  state: {
    dots: [],
    speed: 55,  // between 10 and 100
    points: new ObservableVar(0)
  }
};

Game.getRandomRadius = function() {
  return Math.floor(
    Game.constants.minRadius + (Math.random() * (Game.constants.maxRadius - Game.constants.minRadius))
  );
}

Game.getRandomXCoord = function(radius) {
  const renderAreaWidth = Renderer.getRenderAreaWidth();
  return Math.floor(radius + (Math.random() * (renderAreaWidth - (radius * 2))));
}

// the smallest dots are worth 10 points, and the largest dots worth 1 point.
Game.getPoints = function(radius) {
  const diameter = radius * 2;
  return  Math.floor(10 - (diameter / 10 - 1));
}

Game.addPoints = function(points) {
  Game.state.points.set(Game.state.points.value + points);
}

Game.addDot = function() {
  const radius = Game.getRandomRadius();
  const x = Game.getRandomXCoord(radius);
  const y = -radius;
  const points = Game.getPoints(radius);
  Game.state.dots.push({ x, y, radius, points })
}

Game.removeDot = function(dot) {
  Game.state.dots = Game.state.dots.filter(testDot => testDot !== dot);
}

Game.update = function(timeSinceLastSecond, fps) {
  // add a dot every second and reset seconds
  if (timeSinceLastSecond >= 1000) {
    Game.addDot();
  }
  // update each dot position 
  Game.state.dots.forEach((dot) => {
    dot.y += (Game.state.speed / fps);
  });
}

