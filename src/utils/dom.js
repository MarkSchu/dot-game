function addChildren(parent, children) {
  children.forEach(child => parent.appendChild(child));
}

function removeChildren(parent, children) {
  children.forEach((child) => {
    parent.removeChild(child);
  });
}

function toListOfChildren(children) {
  return [children].flat();
}

function addAttrs(el, attrs) {
  for (const attr in attrs) {
    el[attr] = attrs[attr];
  }
}

export function element(tag, attrs) {
  const el = document.createElement(tag);
  addAttrs(el, attrs);
  const children = Array.from(arguments).slice(2).flat();
  children.forEach((child) => {
    el.appendChild(child);
  });
  return el;
}

export function bind(observableVar, callback) {
  let oldChildren = toListOfChildren(callback(observableVar.value));
  observableVar.on((value) => {
    let newChildren = toListOfChildren(callback(value));
    let parent = oldChildren[0].parentElement;
    if (parent) {
      removeChildren(parent, oldChildren);
      addChildren(parent, newChildren);
    }
    oldChildren = newChildren;
  });
  return oldChildren;
}

export function bindtext(observableVar) {
  const el = element('span', {textContent: observableVar.value});
  observableVar.on((value) => {
    el.textContent = value;
  });
  return el;
}
 
