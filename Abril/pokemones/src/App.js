import React, { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
// import charmander from "./img/charmander.jpg";
// import pikachu from "./img/pikachu.jpg";
// import squirtle from "./img/squirtle.jpg";
// import bulbasaur from "./img/bulbasaur.png";

const App = () => {
	const [pokemonElegido, setPokemonElegido] = useState("charmander");
	const [pokemon, setPokemon] = useState("charmander");

	const handleClick = (e) => {
		setPokemonElegido(e.target.id);
	};

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonElegido}`)
			.then((res) => res.json())
			.then((data) => setPokemon(data));
	}, [pokemonElegido]);

	return (
		<div className="App">
			<h1> Pokemon </h1>
			<Pokemon
				nombrePokemon={pokemon.name}
				pesoPokemon={pokemon.weight}
				alturaPokemon={pokemon.height}
				foto={pokemon.sprites && pokemon.sprites.front_default}
			/>
			<div>
				<button id="charmander" onClick={handleClick}>
					Charmander
				</button>
				<button id="squirtle" onClick={handleClick}>
					Squirtle
				</button>
				<button id="bulbasaur" onClick={handleClick}>
					Bulbasaur
				</button>
				<button id="pikachu" onClick={handleClick}>
					Pikachu
				</button>
			</div>
		</div>
	);
};

export default App;
