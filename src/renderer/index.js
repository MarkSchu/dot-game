import { element } from 'utils/dom';

export const Renderer = {}

Renderer.setRenderArea = function(el) {
  this.renderArea = el;
}

Renderer.render = function(dots) {
  dots.forEach((dot) => {
    if (!dot.representative) {
      let dotEl = element('div', {className: 'dot'});
      dot.representative = dotEl;
      this.renderArea.appendChild(dotEl);
    }
    dot.representative.style.top = dot.y + 'px';
    dot.representative.style.left = dot.x + 'px';
  });
}