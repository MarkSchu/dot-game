import { element, repeatfor } from 'utils/dom';
import { ControlPanel } from './ui/ControlPanel';
import { Loop } from './loop';
import { Game } from './game';
import { Renderer } from './renderer';
import './style.css';

function Grid() {
  return (
    element('div', {className: 'grid'},
      repeatfor(10, (i) => {
        const line = element('div', {
          className: 'horizontal-grid-line'
        });
        line.style.top = `${i * 10}%`
        return line;
      }),
      repeatfor(10, (i) => {
        const line = element('div', {
          className: 'vertical-grid-line'
        });
        line.style.left = `${i * 10}%`
        return line;
      }),
      element('div', {className: 'box-shadow'})
    )
  )
}

function App() {
  return (
    element('div', {className: 'app'},
      Grid(),
      ControlPanel(Loop, Game),
      Renderer.renderArea
    )
  )
}

document.body.appendChild(
  App()
);
