import { svg } from 'utils/svg';
import { repeatfor } from 'utils/dom';
import { Game } from '../game';
import { Loop } from '../loop';
import './style.css';

export const Renderer = {
  renderArea: null,
  clickAnimationDuration: 400
}

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
          dur: `${Renderer.clickAnimationDuration}ms`,
          begin: 'indefinite',
          fill: 'freeze'
        }),
      svg('animate', {
        attributeName: 'opacity',
        values: '0.25; 1.0; 0',
        begin: 'indefinite',
        dur: `${Renderer.clickAnimationDuration}ms`,
        fill: 'freeze'
      })
    )
  )
}

Renderer.DotGlowingArea = function(dot) {

  const handleClick = (e) => {
    if (Loop.running.value) {
      const dotGlowingArea = e.target;
      dotGlowingArea.onclick = null;  // prevent further clicks
      const dotSvg = dotGlowingArea.parentElement;
      const dotBorder = dotSvg.children[0];
      dotBorder.children[1].beginElement(); // closer border
      dotBorder.children[2].beginElement(); // increase border opacity
      setTimeout(() => {
        
        Game.addPoints(dot.points)
        Game.removeDot(dot);
        Renderer.removeDotSvg(dotSvg);
      }, Renderer.clickAnimationDuration)
    }
  }

  return (
    svg('circle', {
      class: 'dot-glowing-area',
      onclick: handleClick,
      cx: 0, 
      cy: 0, 
      r: dot.radius
    })
  )
}

Renderer.Dot = function (dot) {
  return (
    svg('g', { transform: `translate(${dot.x}, ${dot.y})` },
      Renderer.DotBorder(dot),
      Renderer.DotGlowingArea(dot)
    )
  );
}

Renderer.getRenderAreaWidth = function() {
  return Renderer.renderArea.clientWidth;
}

Renderer.removeDotSvg = function(dotSvg) {
  Renderer.renderArea.removeChild(dotSvg);
}

Renderer.addDotSvg = function(dot) {
  const dotSvg = Renderer.Dot(dot);
  dot.svg = dotSvg;
  Renderer.renderArea.appendChild(dotSvg);
}

Renderer.renderDot = function(dot) {
  if (!dot.svg) {
    Renderer.addDotSvg(dot);
  }
  dot.svg.setAttribute('transform', `translate(${dot.x}, ${dot.y})`);
  
  if (dot.y - dot.radius > Renderer.renderArea.clientHeight) {
    Game.removeDot(dot);
    Renderer.removeDotSvg(dot.svg);
  }
}

Renderer.render = function(dots) {
  dots.forEach(Renderer.renderDot);
}

