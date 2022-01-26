import { element } from 'utils/dom';
import { Menu } from 'pages/shared';

export default function ContactPage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        element('h1', {textContent: 'Contact'}),
        element('p', {textContent: 'Feel free to reach me at '},
          element('b', {textContent: 'm.schumaker235@gmail.com'})
        ),
      )
    )
  )
}
