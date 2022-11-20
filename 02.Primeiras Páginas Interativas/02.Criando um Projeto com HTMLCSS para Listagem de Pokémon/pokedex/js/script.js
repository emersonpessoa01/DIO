const pokemonList = document.getElementById("pokemonList");

pokeApi
  .getPokemons()
  .then((pokemons = []) => {
    /* array method: map, filter, some, every, reduce, */
    const newList = pokemons.map(convertPokemonToLi).join(" ");
    // console.log(newList);
    pokemonList.innerHTML += newList;
  })
  .catch((error) => console.error(error));

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name"> ${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg " alt=${pokemon.name}>
    </div>
  </li>
  `;
}
