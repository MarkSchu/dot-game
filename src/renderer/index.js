import { svg } from 'utils/svg';

export const Renderer = {}


Renderer.createDotSvg = function(dot) {
  return (
    svg('circle', {
      cx: dot.x,
      cy: dot.y,
      r: dot.radius,
      fill: '#5cceee'
    })
  )
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