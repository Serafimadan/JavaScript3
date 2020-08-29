'use strict';
/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

// get DOM elements
const selectElement = document.querySelector('#menu');
const repoName = document.querySelector('#repository');
const aElem = document.createElement('a');
repoName.appendChild(aElem);
repoName.style.color = '#0900ed';
const repoDescription = document.querySelector('#description');
const repoForks = document.querySelector('#forks');
const repoUpdated = document.querySelector('#updated');
const contributors = document.querySelector('.contributors');
const eachContributor = document.createElement('div');
eachContributor.className = 'person';
contributors.appendChild = eachContributor;

// get name options for use it in select teg
function getNameOptions() {
  placeholderRepos.forEach(repo => {
    // create option tags and put there name value name from every object from array
    const option = document.createElement('option');
    option.textContent = repo.name;
    selectElement.appendChild(option);
  });
}
getNameOptions(placeholderRepos);
// put info to repo-container block
function showRepositoryInfo() {
  placeholderRepos.forEach(el => {
    if (selectElement.value === el.name) {
      aElem.textContent = el.name;
      repoDescription.textContent = el.description;
      repoForks.textContent = el.forks;
      repoUpdated.textContent = el.updated;
    }
  });
  console.log(repoName);
}
showRepositoryInfo();
selectElement.addEventListener('change', showRepositoryInfo);
