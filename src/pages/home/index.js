import { element } from 'utils/dom';
import { Menu } from 'pages/shared/menu';

const options = [
  {
    name: 'about',
    href: '/about'
  },
  {
    name: 'contact',
    href: '/contact'
  },
  {
    name: 'experiments',
    href: '/experiments'
  },
  {
    name: 'github',
    href: 'https://github.com/markschu'
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/mark-schumaker-5980a0a2'
  },
  {
    name: 'resume',
    href: 'resume.pdf'
  },
];

export default function HomePage() {
  return (
    element('div', {},
      element('div', {},
        element('h1', {textContent: 'Mark Schumaker'}),
        element('p', {textContent: "I'm a front-end developer living in Austin, TX. 🌮"}),
        Menu(options)
      )
    )
  )
}
