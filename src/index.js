import { element } from 'utils/dom';
import { ControlPanel, GamePlayArea } from 'ui';

function App() {
  return (
    element('div', {},
      ControlPanel(),
      GamePlayArea()
    )
  )
}

document.body.appendChild(
  App()
);
