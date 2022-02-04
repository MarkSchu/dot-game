import { element, repeatfor } from 'utils/dom';
import { ControlPanel } from './ui/ControlPanel';
import { Loop } from './loop';
import { Game } from './game';
import { Renderer } from './renderer';
import './style.css';

function App() {
  return (
    element('div', {className: 'app'},
      ControlPanel(Loop, Game),
      Renderer.renderArea
    )
  )
}

document.body.appendChild(
  App()
);
