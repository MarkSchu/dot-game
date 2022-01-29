import { element, bindtext, bindto } from 'utils/dom';
import { Game } from '../game';

function PointDisplay() {
  return (
    element('div', {},
      bindtext(Game, 'points')
    )
  )
}

function StartButton(Loop, Game) {
  const handleClick = (e) => {
    Loop.data.running ? Loop.stop() : Loop.start();
  }

  return (
    bindto(Loop, 'running', (value) =>
      element('button', {
        textContent: value ? 'Pause' : 'Start', 
        onclick: handleClick
      })
    )
  )

  return (
    element('button', {
      textContent: 'Start', 
      onclick: handleClick
    })
  )
}

function SpeedSlider() {

  const handleChange = (e) => {
    Game.setSpeed(e.target.value);
  }
  
  return (
    element('input', {
      type: 'range',
      min: Game.minSpeed,
      max: Game.maxSpeed,
      value: Game.minSpeed,
      oninput: handleChange
    })
  )
}

export function ControlPanel(Loop, Game) {
  return (
    element('div', {className: 'control-panel'},
      element('div', {},
        PointDisplay(Game),
        StartButton(Loop, Game)
      ),
      SpeedSlider(Game),
    )
  )
}
