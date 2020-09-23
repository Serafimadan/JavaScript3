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
              let cardElement = '';
              data.forEach(contributor => {
                cardElement += `<div class='card person'>
                  <img src= ${contributor.avatar_url} alt = ${contributor.login} class="contribPict"/> 
                  <a class='name'>${contributor.login}</a> 
                  <div class='badge'>${contributor.contributions}</div>
                  </div>`;
                // let notesOnPage = 5;
                // let countOfItems = Math.ceil(contributor.length / notesOnPage);
              });
              containerContributor.innerHTML = cardElement;
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
