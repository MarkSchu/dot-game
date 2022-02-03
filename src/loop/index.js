import { Observable } from 'utils/observable';
import { Game } from '../game';
import { Renderer } from '../renderer';
import { ObservableVar } from '../utils/observable';

export const Loop = {
  running: new ObservableVar(false),
  timeSinceLastSecond: 0,
  lastLoopTime: null
}

Loop.start = function() {
  Loop.running.set(true);
  window.requestAnimationFrame(Loop.cycle)
}

Loop.stop = function() {
  Loop.running.set(false);
}

Loop.cycle = function(loopTime) {
  // skip the first loop to avoid undefined vars
  if (!Loop.lastLoopTime) {
    Loop.lastLoopTime = loopTime;
    window.requestAnimationFrame(Loop.cycle);
    return;
  }

  const timeBetweenLoops = loopTime - Loop.lastLoopTime;
  const timeSinceLastSecond = Loop.timeSinceLastSecond + timeBetweenLoops;
  const fps = 1 / ((loopTime - Loop.lastLoopTime) / 1000);

  Game.update(timeSinceLastSecond, fps);
  Renderer.render(Game.state.dots);

  Loop.lastLoopTime = loopTime;
  Loop.timeSinceLastSecond = timeSinceLastSecond >= 1000 ? 0 : timeSinceLastSecond;

  if (Loop.running.value) {
    window.requestAnimationFrame(Loop.cycle);
  } else {
    Loop.lastLoopTime = null;
  }
}
