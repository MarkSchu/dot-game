import { element, repeat } from 'utils/dom';

function Option(item) {
  return (
    element('div', {},
      element('a', {
        textContent: item.name,
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
