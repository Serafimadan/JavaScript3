'use strict';

const rows = 5;

function pagination(data, page) {
  const start = (page - 1) * rows;
  const end = start + rows;
  const range = data.slice(start, end);
  return range;
}


export { pagination };
