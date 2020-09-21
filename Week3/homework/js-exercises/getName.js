'use strict';

// Exercise A
// function getData(url) {
//    fetch(url)
//      .then(response => response.json)
//      .then(json => console.log(json))
//      .catch(error => console.log(error));
//  }

// getData('https://randomfox.ca/floof/');

async function getData() {
  let fetchedData;
  try {
    fetchedData = await fetch('https://randomfox.ca/floof/');
  } catch (err) {
    console.log('Oops, something went wrong!', err);
  }
  return fetchedData.json;
}
getData();

// const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

// const makeAllCaps = array => {
//   return new Promise((resolve, reject) => {
//     const capsArray = array.map(word => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       }
//       reject('Error: Not all items in the array are strings!');
//     });
//     resolve(capsArray);
//   });
// };

// makeAllCaps(arrayOfWords)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
async function makeAllCaps(arr) {
  let capsArray;
  try {
    capsArray = await arr.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      }
    });
  } catch (err) {
    console.log('Oops, something went wrong!', err);
  }
  return capsArray;
}
makeAllCaps(arrayOfWords);
