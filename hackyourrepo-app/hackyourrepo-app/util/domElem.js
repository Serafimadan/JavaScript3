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
// repoName.style.color = '#0900ed';

const paginationList = document.createElement('ul');
paginationList.className = 'pagination';
thirdSection.appendChild(paginationList);

const repoDescription = document.querySelector('#description');
const repoForks = document.querySelector('#forks');
const repoUpdated = document.querySelector('#updated');
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
export {
  header,
  firstSection,
  title,
  menuContainer,
  mainBlock,
  secondSection,
  informationCard,
  informationList1,
  listElem1,
  listElem2,
  informationList2,
  listElem3,
  listElem4,
  informationList3,
  listElem5,
  listElem6,
  informationList4,
  listElem7,
  listElem8,
  thirdSection,
  contribTitle,
  containerContributor,
  contributorsCard,
  photo,
  contribName,
  badge,
  repoName,
  aElem,
  paginationList,
  selectElement,
  url,
  repoForks,
  repoDescription,
  repoUpdated,
};
