'use strict';

import {
  selectElement,
  aElem,
  repoDescription,
  repoForks,
  repoUpdated,
  containerContributor,
  paginationList,
} from './domElem.js';
import { setupPagination } from './pagination/pagination.js';
import { showContributors } from './pagination/showContributors.js';

export function renderRepository(repository) {
  const curPage = 1;
  const rows = 5;
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
}
