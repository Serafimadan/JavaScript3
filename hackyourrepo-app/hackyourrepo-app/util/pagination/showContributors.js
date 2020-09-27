'use strict';

export function showContributors(items, page, container, rowsPerPage) {
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
