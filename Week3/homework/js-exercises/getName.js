'use strict';

// Exercise A

async function getData() {
  try {
    const fetchedData = await fetch('https://randomfox.ca/floof/');
    const json = await fetchedData.json();
    console.log(json);
  } catch (err) {
    console.log('Oops, something went wrong!', err);
  }
}
getData();

// Exercise B

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(arr) {
  const capsArray = await arr.map(word => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    }
    throw new Error('Not all items in the array are strings!');
  });
  return capsArray;
}
async function makeCapsPromise() {
  try {
    const result = await makeAllCaps(arrayOfWords);
    console.log(result);
  } catch (err) {
    console.log('Oops, something went wrong!', err);
  }
}
makeCapsPromise();
