import { svg } from 'utils/svg';
import { Game } from '../game';
import { Loop } from '../loop';
import './style.css';

export const Renderer = {}

Renderer.renderArea = svg('svg', {class: 'game-play-area'});

Renderer.DotBorder = function(dot) {
  const r = dot.radius + 10;
  const p = 2 * Math.PI * r;  
  const lineCount = 3;
  const linePortion = 0.3;
  const line1 = (p *linePortion) / lineCount;
  const gap1 = (p * (1 - linePortion)) / lineCount;
  const line2 = p / lineCount;
  const gap2 = 0;
  return (
    svg('circle', {
      class: 'dot-border',
      cx: 0, 
      cy: 0, 
      r,
      fill: 'transparent',
      'stroke': 'aqua',
      'stroke-width': 2,
      'stroke-dasharray': `${line1} ${gap1}`,
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
          values: `${line1} ${gap1}; ${line2} ${gap2}; ${line1} ${gap1}`,
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

Renderer.GlowArea = function(dot) {

  const handleClick = (e) => {
    const el = e.target;
    if (Loop.data.running) {
      const dotBorder = el.parentElement.children[0];
      dotBorder.children[1].beginElement();
      dotBorder.children[2].beginElement();
      setTimeout(() => {
        Game.addPoints(dot.points)
        Game.removeDot(dot);
        Renderer.removeDotSvg(el);
      }, 400)
    }
  }

  return (
    svg('circle', {
      onclick: handleClick,
      cx: 0, 
      cy: 0, 
      r: dot.radius,
      fill: 'white',
    })
  )
}

Renderer.Dot = function (dot) {
  return (
    svg('g', { transform: `translate(${dot.x}, ${dot.y})` },
      Renderer.DotBorder(dot),
      Renderer.GlowArea(dot)
    )
  );
}

Renderer.getRenderAreaWidth = function() {
  return this.renderArea.clientWidth;
}

Renderer.removeDotSvg = function(el) {
  el.parentElement.removeChild(el);
}

Renderer.addDotSvg = function(dot) {
  const dotSvg = Renderer.Dot(dot);
  dot.svg = dotSvg;
  this.renderArea.appendChild(dotSvg);
}

Renderer.renderDot = function(dot) {
  if (!dot.svg) {
    Renderer.addDotSvg(dot);
  }
  dot.svg.setAttribute('transform', `translate(${dot.x}, ${dot.y})`);
}

Renderer.render = function(dots) {
  dots.forEach(Renderer.renderDot);
}

