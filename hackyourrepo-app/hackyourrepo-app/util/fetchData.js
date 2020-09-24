'use strict';

import {
  selectElement,
  aElem,
  repoDescription,
  repoForks,
  repoUpdated,
  secondSection,
  thirdSection,
  mainBlock,
  containerContributor,
} from './domElem.js';
import { pagination } from './pagination.js';

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
              const pageData = pagination(data, 1);
              // console.log(data);
              let cardElement = '';
              pageData.forEach(contributor => {
                // console.log(contributor);
                cardElement += `<div class='card person'>
                  <img src= ${contributor.avatar_url} alt = ${contributor.login} class="contribPict"/> 
                  <a class='name'>${contributor.login}</a> 
                  <div class='badge'>${contributor.contributions}</div>
                  </div>`;
              });
              // pagination
              containerContributor.innerHTML = cardElement;
              for (let i = 1; i <= Math.ceil(data.length / 5); i++)
                console.log(`Selected page ${i}:`, pagination(data, 1));
            });
        }
      });
    })
    .catch(() => {
      selectElement.innerHTML = '';
      secondSection.style.display = 'none';
      thirdSection.style.display = 'none';
      mainBlock.style.backgroundColor = '#f8d7d9';
      mainBlock.style.padding = '1.2rem';
      mainBlock.style.marginTop = '0.2rem';
      const errorText = document.createElement('p');
      errorText.style.color = '#803438';
      errorText.innerText = 'Network request failed';
      mainBlock.appendChild(errorText);
    });
}
