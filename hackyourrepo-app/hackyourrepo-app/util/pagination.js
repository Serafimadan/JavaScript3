'use strict';

import { paginationList } from './domElem.js';

const curPage = 1;

function showContributors(items, page, container, rowsPerPage) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const range = items.slice(start, end);
  for (let i = 0; i < range.length; i++) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `<div class='card person'>
                  <img src= ${range[i].avatar_url} alt = ${range[i].login} class="contribPict"/> 
                  <a class='name'>${range[i].login}</a> 
                  <div class='badge'>${range[i].contributions}</div>
                  </div>`;

    container.appendChild(itemElement);
  }
}
// create a button and change class with click
function createPageButton(page, items, container, rowsPerPage) {
  const button = document.createElement('button');
  button.innerText = page;

  if (curPage === page) button.classList.add('active');

  button.addEventListener('click', () => {
    container.innerHTML = '';
    showContributors(items, page, container, rowsPerPage);
    const currentBtn = document.querySelector('.pagination  button.active');
    currentBtn.classList.remove('active');
    button.classList.add('active');
  });

  return button;
}
// create a pagination
function setupPagination(items, containerContributor, rowsPerPage) {
  const pageCount = Math.ceil(items.length / rowsPerPage);
  if (pageCount > 1) {
    for (let i = 1; i < pageCount + 1; i++) {
      const btn = createPageButton(i, items, containerContributor, rowsPerPage);
      paginationList.appendChild(btn);
    }
  }
}

export { showContributors, setupPagination };
