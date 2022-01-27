import { element } from 'utils/dom';

export function render(dots) {
  let el = document.querySelector('.dot-area');
  // add representatives
  // console.log(dots)
  dots.forEach((dot) => {
    if (!dot.representative) {
      let dotEl = element('div', {className: 'dot'});
      dot.representative = dotEl;
      el.appendChild(dotEl);
    }
    dot.representative.style.top = dot.y + 'px';
    dot.representative.style.left = dot.x + 'px';
  });
}