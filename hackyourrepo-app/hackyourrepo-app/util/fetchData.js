'use strict';

import {
  selectElement,
  aElem,
  repoDescription,
  repoForks,
  repoUpdated,
  mainBlock,
  containerContributor,
  paginationList,
} from './domElem.js';
import { showContributors, setupPagination } from './pagination.js';

const curPage = 1;
const rows = 5;

// eslint-disable-next-line import/prefer-default-export
export function fetchData() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
    .then(res => res.json())
    .then(repositoriesList => {
      // sort array names in select by alphabet
      repositoriesList.sort((a, b) => {
        const fistName = a.name.toLowerCase();
        const nextName = b.name.toLowerCase();
        if (fistName < nextName) return -1;
        if (fistName > nextName) return 1;
      });
      repositoriesList.forEach(repository => {
        // getting names for options in the select
        const option = document.createElement('option');
        option.innerText = repository.name;
        selectElement.appendChild(option);
        // getting information about repository
        if (selectElement.value === repository.name) {
          aElem.textContent = repository.name;
          repoDescription.textContent = repository.description;
          repoForks.textContent = repository.forks;
          repoUpdated.textContent = repository.updated_at;
          // get information about contributors
          const contributionUrl = repository.contributors_url;
          fetch(contributionUrl)
            .then(res => {
              return res.json();
            })
            .then(data => {
              containerContributor.innerHTML = '';
              paginationList.innerHTML = '';
              showContributors(data, curPage, containerContributor, rows);
              setupPagination(data, containerContributor, rows);
            });
        }
      });
    })
    .catch(() => {
      mainBlock.innerHTML = `<div class="error-message">Network request failed</div>`;
    });
}
