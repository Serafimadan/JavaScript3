'use strict';

import { mainBlock } from './domElem.js';
import { renderRepository } from './renderRepository.js';
import { sortAlphabetically } from './sortAlphabetically.js';

export async function fetchData() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  try {
    const result = await fetch(url);
    const json = await result.json();
    json.sort(sortAlphabetically);
    json.forEach(repository => {
      renderRepository(repository);
    });
    console.log(json);
  }
  catch (err) {
    mainBlock.innerHTML = `<div class="error-message">Network request failed</div>`;
  }
}
