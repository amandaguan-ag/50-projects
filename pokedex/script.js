const poke_container = document.getElementById('poke_container');
const pokemon_count = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}
const main_types = Object.keys(colors)

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  createPokemonCard(data);
}
fetchPokemons()
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = main_types.find(type => pokeTypes.indexOf(type) > -1)
  const color = colors[type];
  pokemonEl.style.backgroundColor = color;

  // Create image container
  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  const img = document.createElement('img');
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  img.alt = name;
  imgContainer.appendChild(img);

  // Create info container
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';

  const numberSpan = document.createElement('span');
  numberSpan.className = 'number';
  numberSpan.textContent = `#${id}`;

  const nameH3 = document.createElement('h3');
  nameH3.className = 'name';
  nameH3.textContent = name;

  const typeSmall = document.createElement('small');
  typeSmall.className = 'type';
  typeSmall.textContent = 'Type:';
  const typeSpan = document.createElement('span');
  typeSpan.textContent = type;
  typeSmall.appendChild(typeSpan);

  // Append all elements
  infoDiv.appendChild(numberSpan);
  infoDiv.appendChild(nameH3);
  infoDiv.appendChild(typeSmall);

  pokemonEl.appendChild(imgContainer);
  pokemonEl.appendChild(infoDiv);
  
  poke_container.appendChild(pokemonEl);
}