import { element, bindtext, bindto } from 'utils/dom';

function PointDisplay(Game) {
  return (
    element('div', {className: 'point-display'},
      bindtext(Game, 'points')
    )
  )
}

function StartButton(Loop) {

  const handleClick = (e) => {
    Loop.data.running ? Loop.stop() : Loop.start();
  }

  return (
    bindto(Loop, 'running', (value) =>
      element('button', {
        className: 'start-button',
        textContent: value ? 'Pause' : 'Start', 
        onclick: handleClick
      })
    )
  )
}

function SpeedSlider(Game) {

  const handleChange = (e) => {
    Game.setSpeed(e.target.value);
  }
  
  return (
    element('input', {
      className: 'speed-slider',
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
      element('div', {},
        SpeedSlider(Game),
        element('div', {textContent: 'Speed'})
      )
    )
  )
}
