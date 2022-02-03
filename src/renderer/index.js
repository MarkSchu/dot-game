import { svg } from 'utils/svg';
import { Game } from '../game';
import { Loop } from '../loop';
import './style.css';

export const Renderer = {}

Renderer.renderArea = svg('svg', {class: 'game-play-area'});


Renderer.DotBorder = function(dot) {
  const r = dot.radius + 10;
  const p = 2 * Math.PI * r;
  const lineP = (p * 0.3) / 3;
  const gapP = (p * 0.7) / 3;
  const lineP2 = (p * 0.99) / 3;
  const gapP2 = (p * 0.01) / 3;
  return (
    svg('circle', {
      class: 'dot-border',
      cx: 0, 
      cy: 0, 
      r,
      fill: 'transparent',
      'stroke': 'aqua',
      'stroke-width': 2,
      'stroke-dasharray': `${lineP} ${gapP}`,
      opacity: 0.25
    },
      svg('animateTransform', {
        attributeName: 'transform',
        attributeType: 'XML',
        type: 'rotate',
        from: "0",
        to: "-360",
        dur: '3s',
        begin: '0s',
        repeatCount: "indefinite"
      }),
      svg('animate', {
          attributeName: 'stroke-dasharray',
          values: `${lineP} ${gapP}; ${lineP2} ${gapP2}; ${lineP} ${gapP}`,
          dur: '0.4s',
          begin: 'indefinite',
          fill: 'freeze'
        }),
      svg('animate', {
        attributeName: 'opacity',
        values: '0.25; 1.0; 0',
        begin: 'indefinite',
        dur: '0.4s',
        fill: 'freeze'
      })
    )
  )
}

Renderer.DotGlow = function(dot) {
  return (
    svg('circle', {
      class: 'dot-glow',
      cx: 0, 
      cy: 0, 
      r: dot.radius,
      fill: 'white',
    })
  )
}

Renderer.Dot = function (dot) {

  const el = (
    svg('g', {
      transform: `translate(${dot.x}, ${dot.y})`
    },
      Renderer.DotGlow(dot),
      Renderer.DotBorder(dot),
    )
  );

  el.onclick = () => {
    if (Loop.data.running) {
      el.onclick = null;
      const dotBorder = el.children[1];
      dotBorder.children[1].beginElement();
      dotBorder.children[2].beginElement();
      setTimeout(() => {
          
        Game.addPoints(dot.points)
        Game.removeDot(dot);
        Renderer.removeDotSvg(el);
      }, 400)
    }
  }

  return el;
}

Renderer.removeDotSvg = function(el) {
  el.parentElement.removeChild(el);
}

Renderer.getRenderAreaWidth = function() {
  return this.renderArea.clientWidth;
}

Renderer.render = function(dots) {
  dots.forEach((dot) => {
    if (!dot.representative) {
      let dotEl = Renderer.Dot(dot);
      dot.representative = dotEl;
      this.renderArea.appendChild(dotEl);
    }
    dot.representative.setAttribute('transform', `translate(${dot.x}, ${dot.y})`);
  });
}

