'use strict';

// https://pokeapi.co/api/v2/pokemon/{id or name}

function main() {
  const buttonGetList = document.createElement('button');
  buttonGetList.innerText = 'Get Pokemon!';
  document.body.appendChild(buttonGetList);
  const selectElem = document.createElement('select');
  document.body.appendChild(selectElem);

  function fetchData(url, callback) {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return callback(data);
      })
      .catch(error => {
        return new Error(error);
      });
  }
  function getPokemonName(arrayPokemons) {
    // console.log(array);
    arrayPokemons.results.forEach(pokemon => {
      const pokemonName = document.createElement('option');
      pokemonName.textContent = pokemon.name;
      // console.log(pokemon.name);
      selectElem.appendChild(pokemonName);
    });
  }
  function addPokemonToDOM(pokemonsImg, e) {
    //  console.log(pokemonsImg);
    const img = document.createElement('img');
    img.style.display = 'block';
    img.src = pokemonsImg.sprites.front_default;
    document.body.appendChild(img);
  }

  buttonGetList.addEventListener('click', () => {
    fetchData('https://pokeapi.co/api/v2/pokemon/?limit=151', getPokemonName);
  });
  selectElem.addEventListener('change', event => {
    fetchData(
      `https://pokeapi.co/api/v2/pokemon/${event.target.value}`,
      addPokemonToDOM,
    );
  });
}

window.onload = main;
