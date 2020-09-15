'use strict';

const getAnonName = firstName => {
  return new Promise((resolve, reject) => {
    const fullName = `${firstName} Doe`;
    setTimeout(() => {
      if (!firstName) {
        reject(console.log(new Error("You didn't pass in a first name!")));
      } else {
        resolve(console.log(fullName));
      }
    }, 2000);
  });
};
getAnonName('John');
