'use strict';

import { fetchData } from './util/fetchData.js';
import { selectElement, url } from './util/domElem.js';

function main() {
  fetchData(url);
  selectElement.addEventListener('change', () => {
    fetchData(url);
  });
}
window.onload = main();
