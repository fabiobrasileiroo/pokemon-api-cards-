const pokemonList = document.getElementById('pokemonList');
const loadMore = document.getElementById('loadMore');
const limit = 12;
let offset = 0;

function pokemonToLi(pokemon) {
    return `
    <a onclick="getPokemon(${pokemon.number})" href="#">
        <li class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    </a>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        const newHtml = pokemons.map(pokemonToLi).join("");
        pokemonList.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
})
// const pokemonList = document.getElementById("pokemonList");
// const loadMoreButton = document.getElementById("loadMoreButton");
// const loadingSpinner = document.getElementById("loadingSpinner");

// const maxRecords = 151
// const limit = 5;
// let offset = 0;


// function showLoadingSpinner() {
//   loadingSpinner.classList.remove("hidden");
// }

// function hideLoadingSpinner() {
//   loadingSpinner.classList.add("hidden");
// }


// // src="${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}"
// // src="${pokemon.sprites.other.showdown.front_default}"

// function loadPokemonItens(offset, limit) {
//   showLoadingSpinner()
//   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//      hideLoadingSpinner();

//     const newHtml = pokemons
//       .map(
//         (pokemon) => `
//       <li class="pokemon ${pokemon.type}">
//           <span class="number">#${pokemon.number}</span>
//           <span class="name">${pokemon.name}</span>
//           <div class="detail">
//             <ol class="types">
//               ${pokemon.types
//                 .map((type) => `<li class="type ${type}">${type}</li>`)
//                 .join("")}
//             </ol>
//             <picture class="sprites">
//               <img 
//               src="${pokemon.photo}"
//               alt="${pokemon.name}">
//             </picture>
//           </div>
//       </li>
//       `
//       )
//       .join("");
//     pokemonList.innerHTML += newHtml;
//   });
// }

// loadPokemonItens(offset, limit);

// loadMoreButton.addEventListener("click", () => {
//   offset += limit
//   const qtdRecordNextPage = offset + limit
//   if(qtdRecordNextPage >= maxRecords) {
//     const newLimit = maxRecords - offset
//     loadPokemonItens(offset, newLimit)
//     loadMoreButton.parentElement.removeChild(loadMoreButton)
//   } else {
//     loadPokemonItens(offset,limit);
//   }
// });
