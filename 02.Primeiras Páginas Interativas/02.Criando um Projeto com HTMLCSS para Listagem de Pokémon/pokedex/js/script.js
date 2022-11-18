// https://pokeapi.co/api/v2/pokemon/ditto;

const offeset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offeset=${0}&limit=${limit}`;

fetch(url)
  .then((response) =>
    //return console.log(response)
    response.json()
  )
  //promessa de um json dentro body
  //requisição com promessa de uma resposta convertida em json

  .then((jsonBody) => console.log(jsonBody))
  //json body convertido
  //imprimir o json

  .catch((error) => console.error(error))
  .finally(() => console.log("Requisição concluída!"));
