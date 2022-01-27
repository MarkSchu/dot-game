import { Observable } from 'utils/observable';
import { render } from '../render';

export const Game = new Observable({
  running: false,
  runningTime: 0
});

Game.lastLoopTime;
Game.timeSinceLastSecond = 0;
Game.dots = [];

Game.start = function() {
  Game.set({running: true});
  window.requestAnimationFrame(Game.loop)
}

Game.stop = function() {
  Game.set({running: false});
  // TODO: window.cancelAnimationFrame???
}

Game.addDot = function() {
  Game.dots.push({
    x: 100,
    y: 0,
    speed: 10
  })
}

Game.update = function(loopTime) {

  // skip the first loop to avoid undefined vars
  if (!Game.lastLoopTime) {
    Game.lastLoopTime = loopTime;
    return;
  }

  // pre update
  const timeBetweenLoops = loopTime - Game.lastLoopTime;
  const timeSinceLastSecond = Game.timeSinceLastSecond + timeBetweenLoops;
  const fps = 1 / ((loopTime - Game.lastLoopTime) / 1000);

  // update running time
  const runningTime = Game.data.runningTime + timeBetweenLoops;

  // add a dot every second and reset seconds
  if (timeSinceLastSecond >= 1000) {
    Game.addDot();
  }

  // update each dot position 
  Game.dots.forEach((dot) => {
    dot.y += (dot.speed / fps);
  });

  // post update
  Game.lastLoopTime = loopTime;
  Game.timeSinceLastSecond = timeSinceLastSecond >= 1000 ? 0 : timeSinceLastSecond;
}

Game.loop = function(loopTime) {
  Game.update(loopTime);
  render(Game.dots);
  if (Game.data.running)
    window.requestAnimationFrame(Game.loop);
  else 
    Game.lastLoopTime = null;
}

