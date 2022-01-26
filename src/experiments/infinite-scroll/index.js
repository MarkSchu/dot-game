import { element } from 'utils/dom';
import './style.css';

function apiGet(startIndex, endIndex) {
  return new Promise((resolve) => {
    const list = [];
    for (var i=0; i<20; i++) {
      list.push({
        number: Math.random()
      })
    }
    setTimeout(() => {
      resolve(list)
    }, 1000)
  });
}

/*
  Two problems:
  (1) loading 20 entries at a time
  (2) renderings 20 entries at a time (i.e don't rerender)

  render
  get(1, 20)
  show loader
  render(0, 20)
  scroll to bottom
  ge(21, 40)
  show loader
  render(21, 40)

*/

function InfiniteScrollEl() {

  const state = new Observable({
    list: []
  })

  const startIndex = 0;
  const numberOfEntries = 20;

  const onscroll = (e) => {
    if (e.target.offsetHeight === e.target.scrollTop) {
      //load more
    }
  }

  return (
    element('div', {className: 'list-container', onscroll},

    )
  )
}

function InfiniteScrollPage() {
  return (
    element('div', {},
      InfiniteScrollEl()
    )
  )
}

export default function InfiniteScroll() {
  return (
    element('div', {})
  )
}
