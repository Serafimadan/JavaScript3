'use strict';

// get DOM elements
const header = document.createElement('header');
document.body.appendChild(header);
// header block
const firstSection = document.createElement('section');
firstSection.className = 'header-elements';
header.appendChild(firstSection);
const title = document.createElement('div');
title.className = 'title';
title.textContent = 'HYF Repositories';
firstSection.appendChild(title);
const menuContainer = document.createElement('div');
menuContainer.className = 'header-menu';
firstSection.appendChild(menuContainer);
const selectElement = document.createElement('select');
selectElement.setAttribute('id', 'menu');
menuContainer.appendChild(selectElement);
// main block
const mainBlock = document.createElement('div');
mainBlock.className = 'main-container';
document.body.appendChild(mainBlock);
const secondSection = document.createElement('section');
secondSection.className = 'repo-container';
mainBlock.appendChild(secondSection);
const informationCard = document.createElement('div');
informationCard.className = 'card';
secondSection.appendChild(informationCard);
// lists
const informationList1 = document.createElement('ul');
informationList1.className = 'repository-elem';
informationCard.appendChild(informationList1);
const listElem1 = document.createElement('li');
listElem1.className = 'repository-elem';
listElem1.textContent = 'Repository:';
informationList1.appendChild(listElem1);
const listElem2 = document.createElement('li');
listElem2.className = 'repository-elem';
listElem2.setAttribute('id', 'repository');
informationList1.appendChild(listElem2);
//
const informationList2 = document.createElement('ul');
informationList2.className = 'repository-elem';
informationCard.appendChild(informationList2);
const listElem3 = document.createElement('li');
listElem3.className = 'repository-elem';
listElem3.textContent = 'Description:';
informationList2.appendChild(listElem3);
const listElem4 = document.createElement('li');
listElem4.className = 'repository-elem';
listElem4.setAttribute('id', 'description');
informationList2.appendChild(listElem4);
//
const informationList3 = document.createElement('ul');
informationList3.className = 'repository-elem';
informationCard.appendChild(informationList3);
const listElem5 = document.createElement('li');
listElem5.className = 'repository-elem';
listElem5.textContent = 'Forks:';
informationList3.appendChild(listElem5);
const listElem6 = document.createElement('li');
listElem6.className = 'repository-elem';
listElem6.setAttribute('id', 'forks');
informationList3.appendChild(listElem6);
//
const informationList4 = document.createElement('ul');
informationList4.className = 'repository-elem';
informationCard.appendChild(informationList4);
const listElem7 = document.createElement('li');
listElem7.className = 'repository-elem';
listElem7.textContent = 'Updated:';
informationList4.appendChild(listElem7);
const listElem8 = document.createElement('li');
listElem8.className = 'repository-elem';
listElem8.setAttribute('id', 'updated');
informationList4.appendChild(listElem8);
// third section
const thirdSection = document.createElement('section');
thirdSection.className = 'contributors-container';
mainBlock.appendChild(thirdSection);
const contribTitle = document.createElement('div');
contribTitle.textContent = 'Contributors';
contribTitle.classList = 'card contributor-title';
thirdSection.appendChild(contribTitle);
const containerContributor = document.createElement('div');
containerContributor.className = 'container';
thirdSection.appendChild(containerContributor);
const contributorsCard = document.createElement('div');
contributorsCard.classList = 'card contributors';
containerContributor.appendChild(contributorsCard);
const photo = document.createElement('img');
photo.className = 'contribPict';
// photo.setAttribute('alt', 'pic');
contributorsCard.appendChild(photo);
const contribName = document.createElement('a');
contribName.className = 'name';
// contribName.textContent = 'Name';
contribName.style.color = '#0900ed';
contributorsCard.appendChild(contribName);
const badge = document.createElement('div');
badge.className = 'badge';
contributorsCard.appendChild(badge);
// style to name repository
const repoName = document.querySelector('#repository');
const aElem = document.createElement('a');
repoName.appendChild(aElem);
repoName.style.color = '#0900ed';

const repoDescription = document.querySelector('#description');
const repoForks = document.querySelector('#forks');
const repoUpdated = document.querySelector('#updated');

// create fetchData function
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function main() {
  const getContribInfo = (contributors) => {
photo.src = contributors.avatar_url;
contribName.innerText = contributors.login;
badge.innerText = contributors.contributions;
console.log(contributors.login);
  }
  function fetchData() {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(repositoriesList => {
        console.log(repositoriesList);
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
                //console.log(data);
                let cardElement = '';
                data.forEach(contributor => {
                  getContribInfo(contributor);
                  cardElement += `<div class='card person'><img src= ${contributor.avatar_url} alt = ${contributor.login} class="contribPict"/> <a class='name'>${contributor.login}</a> <div class='badge'>${contributor.contributions}</div></div>`;
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

  fetchData(url);
  selectElement.addEventListener('change', () => {
    fetchData('https://api.github.com/orgs/HackYourFuture/repos?per_page=100');
  });
}
window.onload = main();
