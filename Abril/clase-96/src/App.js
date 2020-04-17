import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	const [pokemon, setPokemon] = useState({});
	const [busqueda, setBusqueda] = useState("pikachu");

	const buscarPokemon = () => {
		console.log("Se ejecuta la funcion buscar pokemon");
		fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
			.then((res) => res.json())
			.then((data) => setPokemon(data));
	};

	useEffect(buscarPokemon, [busqueda]); // Funcion que recibe 2 parametros: 1 funcion y 1 array

	const handleChange = (e) => {
		setBusqueda(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	console.log(pokemon);
	return (
		<div className="main">
			<div className="card">
				{pokemon && pokemon.name && (
					<>
						<img src={pokemon.sprites.front_default} />
						<p> Nombre: {pokemon.name}</p>
						<p> Tipo {pokemon.types.map((type) => type.type.name)}</p>
					</>
				)}
			</div>
			<form onSubmit={handleSubmit}>
				<input value={busqueda} onChange={handleChange}></input>
				<input type="submit" value="Buscar Pokemon"></input>
			</form>
		</div>
	);
};

export default App;
