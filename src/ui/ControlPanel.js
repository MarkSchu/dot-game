import { element } from 'utils/dom';
import { Loop } from 'loop';
import './style.css';

export function ControlPanel() {

  const handleClick = () => {
    Loop.data.running ? Loop.stop() : Loop.start();
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
