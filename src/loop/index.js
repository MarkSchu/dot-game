import { Observable } from 'utils/observable';
import { Game } from '../game';
import { render } from '../renderer';

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
    return;
  }
  // pre update
  const timeBetweenLoops = loopTime - Loop.lastLoopTime;
  const timeSinceLastSecond = Loop.timeSinceLastSecond + timeBetweenLoops;
  const fps = 1 / ((loopTime - Loop.lastLoopTime) / 1000);

  update(timeSinceLastSecond, fps);
  render(Game.dots);

  Loop.lastLoopTime = loopTime;
  Loop.timeSinceLastSecond = timeSinceLastSecond >= 1000 ? 0 : timeSinceLastSecond;
  if (Loop.data.running)
    window.requestAnimationFrame(Loop.loop);
  else 
    Loop.lastLoopTime = null;
}
