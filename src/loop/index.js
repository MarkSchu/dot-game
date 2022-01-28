import { Observable } from 'utils/observable';
import { Game } from '../game';
import { Renderer } from '../renderer';

export const Loop = new Observable({
  running: false,
  runningTime: 0
});

Loop.lastLoopTime;
Loop.timeSinceLastSecond = 0;

Loop.start = function() {
  Loop.set({running: true});
  window.requestAnimationFrame(Loop.cycle)
}

Loop.stop = function() {
  Loop.set({running: false});
}

Loop.cycle = function(loopTime) {
  // skip the first loop to avoid undefined vars
  if (!Loop.lastLoopTime) {
    Loop.lastLoopTime = loopTime;
    window.requestAnimationFrame(Loop.cycle);
    return;
  }
  // pre update
  const timeBetweenLoops = loopTime - Loop.lastLoopTime;
  const timeSinceLastSecond = Loop.timeSinceLastSecond + timeBetweenLoops;
  const fps = 1 / ((loopTime - Loop.lastLoopTime) / 1000);

  Game.update(timeSinceLastSecond, fps);
  Renderer.render(Game.dots);

  Loop.lastLoopTime = loopTime;
  Loop.timeSinceLastSecond = timeSinceLastSecond >= 1000 ? 0 : timeSinceLastSecond;

  if (Loop.data.running)
    window.requestAnimationFrame(Loop.cycle);
  else 
    Loop.lastLoopTime = null;
}
