'use strict';

// Create a new div to change the innerHTML of.
const content = document.createElement('div');
document.body.appendChild(content);

const html = `
  <header>
    <section class="header-elements">
      <div class="title">HYF Repositories</div>
      <div class="header-menu">
        <select id="menu"></select>
      </div>
    </section>
  </header>

  <div class="main-container">
    <section class="repo-container">
      <div class="card">
        <ul class="repository-elem">
          <li class="repository-elem">Repository:</li>
          <li class="repository-elem" id="repository"></li>
        </ul>
        <ul class="repository-elem">
          <li class="repository-elem">Description:</li>
          <li class="repository-elem" id="description"></li>
        </ul>
        <ul class="repository-elem">
          <li class="repository-elem">Forks:</li>
          <li class="repository-elem" id="forks"></li>
        </ul>
        <ul class="repository-elem">
          <li class="repository-elem">Updated:</li>
          <li class="repository-elem" id="updated"></li>
        </ul>
      </div>
    </section>
    <section class="contributors-container">
      <div class="card contributor-title">Contributors</div>
      <div class = "container"></div>
    </section>
  </div>
`;
// add html before the rest of the body
document.body.innerHTML = html + document.body.innerHTML;

const mainBlock = document.querySelector('.main-container');
const selectElement = document.querySelector('#menu');
const containerContributor = document.querySelector('.container');
const repoName = document.querySelector('#repository');
const aElem = document.createElement('a');
repoName.appendChild(aElem);

const repoDescription = document.querySelector('#description');
const repoForks = document.querySelector('#forks');
const repoUpdated = document.querySelector('#updated');

// create fetchData function
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function main() {
  function fetchData() {
    fetch(url)
      .then(res => res.json())
      .then(repositoriesList => {
        // console.log(repositoriesList);
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
                  cardElement += `<div class='card person'><img src= ${contributor.avatar_url} alt = ${contributor.login} class="contribPict"/> <a class='name'>${contributor.login}</a> <div class='badge'>${contributor.contributions}</div></div>`;
                });
                containerContributor.innerHTML = cardElement;
              });
          }
        });
      })
      .catch(() => {
        mainBlock.innerHTML = `<div class="error-message">Network request failed</div>`;
      });
  }

  fetchData(url);
  selectElement.addEventListener('change', () => {
    fetchData('https://api.github.com/orgs/HackYourFuture/repos?per_page=100');
  });
}
window.onload = main();
