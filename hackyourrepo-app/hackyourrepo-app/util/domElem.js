'use strict';

export {
  selectElement,
  aElem,
  repoDescription,
  repoForks,
  repoUpdated,
  mainBlock,
  containerContributor,
  paginationList,
  url
};

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
const thirdSection = document.querySelector('.contributors-container');

const repoDescription = document.querySelector('#description');
const repoForks = document.querySelector('#forks');
const repoUpdated = document.querySelector('#updated');

const paginationList = document.createElement('div');
paginationList.className = 'pagination';
thirdSection.appendChild(paginationList);

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
