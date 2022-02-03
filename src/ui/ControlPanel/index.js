import { element, bindtext, bind } from 'utils/dom';
import './style.css';

function PointDisplay(Game) {
  return (
    element('div', {className: 'point-display'},
      bindtext(Game.state.points)
    )
  )
}

function StartButton(Loop) {

  const handleClick = (e) => {
    Loop.running.value ? Loop.stop() : Loop.start();
  }

  return (
    bind(Loop.running, (value) =>
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
    Game.state.speed = e.target.value;
  }
  
  return (
    element('input', {
      className: 'speed-slider',
      type: 'range',
      min: Game.constants.minSpeed,
      max: Game.constants.maxSpeed,
      value: Game.state.speed,
      oninput: handleChange
    })
  )
}

function openControlPanelAfterDelay(delay) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.control-panel').classList.remove('closed');
    }, delay)
  });
}

export function ControlPanel(Loop, Game) {

  const delay = 400;
  openControlPanelAfterDelay(delay);

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
