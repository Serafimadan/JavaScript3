'use strict';

import { showContributors } from './showContributors.js';

export function createPageButton(page, items, container, rowsPerPage) {
  const curPage = 1;
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
