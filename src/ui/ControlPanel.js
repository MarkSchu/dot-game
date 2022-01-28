import { element } from 'utils/dom';

function PointDisplay() {
  return (
    element('div', {textContent: 0})
  )
}

function StartButton(Loop, Game) {
  const handleClick = () => {
    Loop.data.running ? Loop.stop() : Loop.start();
  }
  return (
    element('button', {
      textContent: 'Go!', 
      onclick: handleClick
    })
  )
}

function SpeedSlider() {
  return (
    element('input', {
      type: 'range',
      min: '10',
      max: '100',
      value: '10'
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
