// //SPREAD OPERATOR
// //...
// // copiar arrays, concatenar, agregar propiedades

// const numeros = [1, 2, 3, 4];

// const masNumeros = [...numeros, 5, 6, 7];

// console.log(numeros);
// console.log(masNumeros);

// // Desctructuring

// const alumna = {
// 	nombre: "Malu",
// 	calificaciones: {
// 		matematica: 9,
// 		lengua: 10,
// 		gimnasia: 2
// 	}
// };

// /*
// <div class="card">
// 	<p>Nombre: $(alumna.nombre)</p>
// 	<p>Calificaciones</p>
// 	<p>Matematica: ${alumna.calificaciones.matematica}</p>
// </div>;

// const nombre = alumna.nombre;
// const edad = alumna.edad;
// */
// // esto es igual a escribirlo de la siguiente manera:
// const {
// 	nombre: firstname,
// 	edad: age = "No disponible",
// 	calificaciones: { matematica, lengua, gimnasia }
// } = alumna;

// console.log(firstname);
// console.log(age);

// const buscarPokemon = () => {
// 	fetch("https://pokeapi.co/api/v2/pokemon/charmander")
// 		.then(data => data.json())
// 		.then(charmander => console.log(charmander));
// };
//async await se usa siempre en funciones
// la funcion queda definida como una funcion asincrona con async
// y lo que devuelve como una promesa con await

// const buscarPokemon = async () => {
// 	const data = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
// 	const charmander = await data.json();
// 	console.log(charmander);
// };
// buscarPokemon();

// fetch("https://pokeapi.co/api/v2/pokemon/charmander")
// 	.then(data => data.json())
// 	.then(result => {
// 		const pokemon = {
// 			name: result.name,
// 			id: result.id,
// 			image: result.sprites.front_default,
// 			type: result.types.map(type => type.type.name).join(", ")
// 		};
// 		displayPokemon(pokemon);
// 	});

// const displayPokemon = pokemon => {
// 	const pokedex = document.getElementById("pokedex");
// 	pokedex.innerHTML = `
//   <li class="card">
//       <img class="card-image" src="${pokemon.image}"/>
//       <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
//       <p class="card-subtitle">Type: ${pokemon.type}</p>
//   </li>
//   `;
// };

// Tarea
// 1. Convertir el fetch en un async / await
// 2. Recibir el input del usuario y mostrar el pokemon correspondiente
// 3. PUNTOS EXTRA asignar las variables con destructuring

const form = document.forms[0];

form.onsubmit = e => {
	e.preventDefault();

	const pokemonABuscar = form.elements[0].value;
	buscarPokemon(pokemonABuscar);
};

const buscarPokemon = async pokemonBuscado => {
	const data = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`
	);
	const result = await data.json();

	const {
		name,
		id,
		sprites: { front_default },
		types: [typeName]
	} = result;

	const pokemon = {
		name: name,
		id: id,
		image: front_default,
		type: typeName.type.name //hicimos trampa, si tiene mas de un tipo no va a funcionar.
	};
	displayPokemon(pokemon);
};

const displayPokemon = pokemon => {
	const pokedex = document.getElementById("pokedex");
	pokedex.innerHTML = `
  <li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      <p class="card-subtitle">Type: ${pokemon.type}</p>
  </li>
  `;
};
