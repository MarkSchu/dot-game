import { element } from 'utils/dom';
import { ControlPanel, GamePlayArea } from 'ui';
import { Loop } from './loop';
import { render } from './renderer';

function App() {
  return (
    element('div', {},
      ControlPanel(Game, Loop),
      GamePlayArea(Renderer)
    )
  )
}

document.body.appendChild(
  App()
);
