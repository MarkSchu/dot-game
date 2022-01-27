import { element } from 'utils/dom';
import { Observable } from 'utils/observable';
import { start, stop, isRunning } from './game';
import './style.css';


function ControlPanel() {

  const handleClick = () => {
    isRunning() ? stop() : start();
  }

  return (
    element('div', {},
      element('button', {
        textContent: 'Start', 
        onclick: handleClick
      })
    )
  )
}

function GamePlayArea() {
  return (
    element('div', {className: 'game-play-area'},
      element('div', {textContent: 'dev data'})
    )
  )
}

function App() {

  const state = new Observable({
    running: false,
    points: 0,
    speed: 0
  });

  return (
    element('div', {},
      ControlPanel(),
      GamePlayArea(state)
    )
  )
}

document.body.appendChild(
  App()
);
