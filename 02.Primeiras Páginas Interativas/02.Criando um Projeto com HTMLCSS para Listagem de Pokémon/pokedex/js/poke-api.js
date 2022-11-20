const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offeset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemon) => response.map((pokemon)=>fetch(pokemon.url).json()))
};

Promise.all([
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  fetch("https://pokeapi.co/api/v2/pokemon/2"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
  fetch("https://pokeapi.co/api/v2/pokemon/4"),
]).then((results) => {
 return console.log(results)
});


