import { element } from 'utils/dom';
import './style.css';

export function GamePlayArea(Renderer) {
  const el = element('div', {className: 'dot-area'});
  Renderer.setRenderArea(el);
  return el;
}
