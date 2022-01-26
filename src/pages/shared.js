import { element, repeat } from 'utils/dom';

function Option(item) {
  return (
    element('div', {className: 'option'},
      element('a', {
        textContent: `-- ${item.name}`,
        href: item.href
      })
    )
  )
}

export function Menu(options) {
  return (
    element('div', {},
      repeat(options, Option)
    )
  )
}

export function HeaderMenu() {
  return (
    element('div', {},
      element('span', {textContent: '&gt;'}),
      element('span', {textContent: '👋'}),
      element('span', {textContent: '🧪'})
    )
  )
}
