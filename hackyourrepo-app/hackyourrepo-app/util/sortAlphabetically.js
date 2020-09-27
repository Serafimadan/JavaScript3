'use strict';

export function sortAlphabetically(a, b) {
  const fistName = a.name.toLowerCase();
  const nextName = b.name.toLowerCase();
  if (fistName < nextName) return -1;
  if (fistName > nextName) return 1;
}
