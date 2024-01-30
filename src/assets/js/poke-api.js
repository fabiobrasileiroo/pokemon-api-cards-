const pokeApi = {};

function pokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon ()
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.id;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [ type ] = types
    pokemon.type = type
    pokemon.types = types

    pokemon.photo = pokeDetail.sprites.versions["generation-v"]["black-white"].animated.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(pokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 2) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error))

}
// const pokeApi = {}

// function convertPokeApiDetailToPokemon(pokeDetail) {
//   const pokemon = new Pokemon()
//   pokemon.number = pokeDetail.id
//   pokemon.name = pokeDetail.name

//   const types =  pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
//   const [type] = types

//   pokemon.types = types
//   pokemon.type = type

//   pokemon.photo= pokeDetail.sprites.other.dream_world.front_default
//   return pokemon
// }

// pokeApi.getPokemonDetail = (pokemon) => {
//   return fetch(pokemon.url)
//     .then(((response)=> response.json()))
//     .then(convertPokeApiDetailToPokemon)
// }

// pokeApi.getPokemons = function (offset = 0, limit = 20) {
//   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
//   return fetch(url)
//   .then((response)=> response.json())// converter o body para json
//   .then((jsonBody) => jsonBody.results)// entrar no result da promise da api
//   .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//mapiando numa lista de requisicoes do detalhes dos pokemons
//   .then((detailRequests)=> Promise.all(detailRequests))
//   .then((pokemonsDetails)=> pokemonsDetails)
// }
