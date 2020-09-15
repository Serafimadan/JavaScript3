'use strict';

function main() {
  const buttonGetList = document.createElement('button');
  buttonGetList.innerText = 'Get Pokemon!';
  document.body.appendChild(buttonGetList);
  const selectElem = document.createElement('select');
  document.body.appendChild(selectElem);
  const img = document.createElement('img');
  img.textContent = '';
  img.style.display = 'block';
  document.body.appendChild(img);

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
    arrayPokemons.results.forEach(pokemon => {
      const pokemonName = document.createElement('option');
      pokemonName.textContent = pokemon.name;
      selectElem.appendChild(pokemonName);
    });
  }
  function addPokemonToDOM(pokemonsImg) {
    img.src = pokemonsImg.sprites.front_default;
  }
  // event for pokemons names list
  buttonGetList.addEventListener('click', () => {
    fetchData('https://pokeapi.co/api/v2/pokemon/?limit=151', getPokemonName);
  });
  // event for pokemon image
  selectElem.addEventListener('change', event => {
    fetchData(
      `https://pokeapi.co/api/v2/pokemon/${event.target.value}`,
      addPokemonToDOM,
    );
  });
}

window.onload = main;
