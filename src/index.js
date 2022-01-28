import { element } from 'utils/dom';
import { ControlPanel } from './ui/ControlPanel';
import { GamePlayArea } from './ui/GamePlayArea';
import { Loop } from './loop';
import { Game } from './game';
import { Renderer } from './renderer';
import './style.css';

function App() {
  return (
    element('div', {className: 'app'},
      ControlPanel(Loop, Game),
      GamePlayArea(Renderer)
    )
  )
}

document.body.appendChild(
  App()
);
