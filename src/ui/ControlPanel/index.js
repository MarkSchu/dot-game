import { element, bindtext, bindto } from 'utils/dom';
import './style.css';

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
      value: Game.speed,
      oninput: handleChange
    })
  )
}

function openControlPanel() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.control-panel').classList.remove('closed');
    }, 500)
  });
}

export function ControlPanel(Loop, Game) {

  openControlPanel();

  return (
    element('div', {className: 'control-panel-container'},
      element('div', {className: 'control-panel closed'},
        element('div', {className: 'border-top-right'}),
        element('div', {className: 'border-bottom-left'}),
        element('div', {className: 'top-row'},
          PointDisplay(Game),
          StartButton(Loop, Game)
        ),
        element('div', {className: 'bottom-row'},
          SpeedSlider(Game),
          element('div', {
            textContent: 'speed',
            className: 'speed-label'
          })
        )
      )
    )
  )
}
