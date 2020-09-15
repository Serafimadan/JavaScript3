'use strict';

const checkDoubleDigits = number => {
  const promise = new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(`The ${number} is bigger than 10!`);
    } else {
      reject(new Error(`Error! The ${number} is smaller than 10...`));
    }
  });

  const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
  };
  const handleFailure = rejectionReason => {
    console.log(rejectionReason);
  };
  promise.then(handleSuccess, handleFailure);
};
checkDoubleDigits(15);
checkDoubleDigits(11);
checkDoubleDigits(4);
