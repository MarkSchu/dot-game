import { element } from 'utils/dom';
import { Game } from 'game';
import './style.css';

export function ControlPanel() {

  const handleClick = () => {
    Game.data.running ? Game.stop() : Game.start();
  }

  return (
    element('div', {},
      element('button', {
        textContent: 'Go!', 
        onclick: handleClick
      })
    )
  )
}

export function GamePlayArea() {
  return (
    element('div', {className: 'dot-area'},

    )
  )
}

