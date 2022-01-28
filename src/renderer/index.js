import { svg } from 'utils/svg';
import { Game } from '../game';

export const Renderer = {}


Renderer.createDotSvg = function(dot) {

  const el = (
    svg('circle', {
      cx: dot.x,
      cy: dot.y,
      r: dot.radius,
      fill: '#5cceee'
    })
  )

  el.onclick = (e) => {
    Game.removeDot(dot);
    el.parentElement.removeChild(el);
  }

  return el;
}

Renderer.setRenderArea = function(el) {
  this.renderArea = el;
}

Renderer.getRenderAreaWidth = function() {
  return this.renderArea.clientWidth;
}

Renderer.render = function(dots) {
  dots.forEach((dot) => {
    if (!dot.representative) {
      let dotEl = Renderer.createDotSvg(dot);
      dot.representative = dotEl;
      this.renderArea.appendChild(dotEl);
    }
    dot.representative.setAttribute('cy', dot.y);
  });
}