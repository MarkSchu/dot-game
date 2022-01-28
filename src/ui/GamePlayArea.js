import { element } from 'utils/dom';
import { svg } from 'utils/svg';

export function GamePlayArea(Renderer) {
  const el = svg('svg', {});
  Renderer.setRenderArea(el);
  return el;
}
