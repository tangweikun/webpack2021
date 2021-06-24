import { cube } from './math.js';
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  console.log(_.join(['Another', 'module', 'loaded!'], ' '));

  element.innerHTML = cube(5);

  return element;
}

document.body.appendChild(component());
