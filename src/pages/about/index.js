import { element } from 'utils/dom';
import { Menu } from 'pages/shared/menu';

const options = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'Node',
    href: 'https://nodejs.org/en/'
  },
  {
    name: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name: 'React',
    href: 'https://reactjs.org/'
  },
  {
    name: 'Redux',
    href: 'https://redux.js.org/'
  },
  {
    name: 'Sass',
    href: 'https://sass-lang.com/'
  },
  {
    name: 'Webpack',
    href: 'https://webpack.js.org/'
  },
  {
    name: 'ESLint',
    href: 'https://eslint.org/'
  },
  {
    name: 'Electron',
    href: 'https://www.electronjs.org/'
  },
  {
    name: 'SQL',
    href: 'https://en.wikipedia.org/wiki/SQL'
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/'
  },
  {
    name: 'Python',
    href: 'https://www.python.org/'
  },
  {
    name: 'GraphQL',
    href: 'https://graphql.org/'
  },
  {
    name: 'npm',
    href: 'https://www.npmjs.com/'
  },
  {
    name: 'git',
    href: 'https://git-scm.com/'
  },
  {
    name: 'Design Patterns',
    href: 'https://en.wikipedia.org/wiki/Software_design_pattern'
  },
  {
    name: 'Agile',
    href: 'https://en.wikipedia.org/wiki/Agile_software_development'
  },
];

export default function AboutPage() {
  return (
    element('div', {},
      element('div', {},
        element('h1', {textContent: 'About'}),
        element('p', {textContent: 'Hey, my name is Mark Schumaker. 👋'}),
        element('p', {textContent: 'I currently work at Zello in Austin, TX. Here are some of the tools that I use:'}),
        Menu(options)
      )
    )
  )
}
