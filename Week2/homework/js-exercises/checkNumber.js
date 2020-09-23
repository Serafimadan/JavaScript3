'use strict';

const checkDoubleDigits = number => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(`The ${number} is bigger than 10!`);
    } else {
      reject(new Error(`Error! The ${number} is smaller than 10...`));
    }
  });
};
checkDoubleDigits(15);
// checkDoubleDigits(11);
// checkDoubleDigits(4);
