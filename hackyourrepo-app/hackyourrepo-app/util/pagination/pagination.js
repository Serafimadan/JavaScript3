'use strict';

import { paginationList } from '../domElem.js';
import { createPageButton } from './createButton.js';

// create a pagination
export function setupPagination(items, containerContributor, rowsPerPage) {
  const pageCount = Math.ceil(items.length / rowsPerPage);
  if (pageCount > 1) {
    for (let i = 1; i < pageCount + 1; i++) {
      const btn = createPageButton(i, items, containerContributor, rowsPerPage);
      paginationList.appendChild(btn);
    }
  }
}
