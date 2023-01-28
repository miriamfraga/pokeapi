"use strict";
const myOl$$ = document.querySelector("#pokedex");

const obtenerPokemon = async () => {
  let pokemons = [];
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const res = await response.json();
    pokemons.push({
      name: res.name,
      image: res.sprites["front_default"],
    //   image2: res.sprites["back_default"],
      type: res.types.map((type) => type.type.name).join(' '),
      ability: res.abilities.map((ability) => ability.ability.name).join("/ "),
      id: res.id,
    });
  }
  return pokemons;
};
// console.log(obtenerPokemon());
const drawPokemons = (pokemons) => {
  myOl$$.innerHTML = " ";
  for (const pokemon of pokemons) {
    const pokeBall = document.createElement("div");
    pokeBall.className = "card";

    let pokemonId = document.createElement("p");
    pokemonId.setAttribute("class", "pokemon-id");
    pokemonId.textContent = `#${pokemon.id}`;

    let pokeName = document.createElement("h2");
    pokeName.setAttribute("class", "poke-name");
    pokeName.textContent = `${pokemon.name}`;

    let pokeImage = document.createElement("img");
    pokeImage.setAttribute("src", pokemon.image);
    pokeImage.setAttribute("alt", pokemon.name);
    pokeImage.setAttribute("class", "pokemon-image");

    // let pokeImage1 = document.createElement("img");
    // pokeImage1.setAttribute("src", pokemon.image2);
    // pokeImage1.setAttribute("alt", pokemon.name);
    // pokeImage1.setAttribute("class", "pokemon-image1");
    
    let pokemonAbilities = document.createElement("p");
    pokemonAbilities.setAttribute("class", "pokemon-ability");
    pokemonAbilities.textContent = `${pokemon.ability}`;

    let pokemonType = document.createElement("p"); 
    pokemonType.setAttribute("class", "pokemon-type");
    pokemonType.textContent = pokemon.type;

    switch (pokemonType.textContent) {
      case "fire": pokemonType.style.color = "#cd4848";
          break;
      case "water": pokemonType.style.color = "#5e8ec0";
          break;
      case "bug": pokemonType.style.color = "#54b040";
          break;
      case "grass": pokemonType.style.color = "#2be39c";
          break;
      case "normal": pokemonType.style.color = "#bfbb9c";
          break;
      case "ice": pokemonType.style.color = "#aee1e9";
          break; 
      case "fairy": pokemonType.style.color = "#ea69ca";
          break;
      case "psychic": pokemonType.style.color = "#835cdf";
          break;
      case "rock": pokemonType.style.color = "#55515e";
          break;
      case "electric": pokemonType.style.color = "#e5d62d";
          break;
      case "ghost": pokemonType.style.color = "#585b5c";
          break;
      case "poison": pokemonType.style.color = "#403559";
          break;
      case "fighting": pokemonType.style.color = "#d23f53";
          break;
      case "ground": pokemonType.style.color = "#c1971a";
          break;
      case "dragon": pokemonType.style.color = "#ec8a40";
          break;
          default:
    }
// ESTA FUNCIÓN CAMBIA LA CLASE A LA IMAGEN PARA QUE NO SE VEA EL POKEMON CUANDO HACES CLICK
    pokeBall.addEventListener("click", showReverse);
    function showReverse () { 
      pokeImage.classList.toggle("pokemon-image");
      pokeImage.classList.toggle("contents");
      pokeBall.classList.toggle("card");
      pokeBall.classList.toggle("pokeBola");

     }
     pokeBall.append(pokemonId);
     pokeBall.append(pokeName);
     pokeBall.append(pokeImage);
     pokeBall.append(pokemonType);
     pokeBall.append(pokemonAbilities);
     myOl$$.append(pokeBall);
    
    }
      
     }
const wrapper = document.querySelector('.wrapper');
const searcher$$ = document.createElement('input');
const button$$ = document.createElement('button');
const nightShift =document.createElement('button');
nightShift.setAttribute("id", "dream");
nightShift.innerText = "go dream!";
button$$.setAttribute("id", "push-me");
button$$.innerText = "push me!";
searcher$$.setAttribute("placeholder", "search pokemon...");
searcher$$.setAttribute("class", "searcher");
   
// AQUÍ LE TENGO QUE DECIR AL BOTÓN DE GODREAM QUE CUANDO ESCUCHE EL CLICK ACTIVE EL MODO GOODNIGHT
//Y TENGO QUE CREAR LA CLASE CORRESPONDIENTE. CON UN FONDO DE IMAGEN CON ESTRELLAS O CON LA LUNA O ALGO ASÍ
// const goDream = () =>{
    // nightShift.addEventListener("click", () =>
    // goodNight())
// };
const divContainer = document.querySelector(".container");
// console.log(divContainer);
nightShift.addEventListener("click", goodNight);
 function goodNight () {
    //  divContainer.classList.remove("container");
     divContainer.classList.toggle("night");
    //  pokeBall.classList.toggle("night");

}
  // ESTA FUNCIÓN REDIRIGE A LA PAG DE INICIO
function refresh (){
    window.location.href = window.location.href;
}
// ESTA FUNCIÓN BUSCA EL POKEMON QUE LE PASES
const rastreatorInput = (pokemons) => {
   button$$.addEventListener("click", () =>
   rastreator(searcher$$.value, pokemons));
}

const rastreator = (filtro, array) => {
    let filtradoPokemon = array.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase()));
    drawPokemons(filtradoPokemon);
    //not found añadir
};

wrapper.append(searcher$$);
wrapper.append(button$$);
wrapper.append(nightShift);

const init = async () => {
  const pokemons = await obtenerPokemon();
  const pokemonsPintados = drawPokemons(pokemons);
  rastreatorInput(pokemons);
  // rastreator(pokemons);
};
init();
