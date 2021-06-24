import { cube } from './math.js';

function component() {
  var element = document.createElement('div');

  element.innerHTML = cube(5);

  return element;
}

document.body.appendChild(component());
