import { svg } from 'utils/svg';

export function GamePlayArea(Renderer) {
  const el = svg('svg', {class: 'game-play-area'});
  Renderer.setRenderArea(el);
  return el;
}
