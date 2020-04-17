import React from "react";

const Pokemon = ({ nombrePokemon, pesoPokemon, alturaPokemon, foto }) => {
	return (
		<>
			<h2>{nombrePokemon}</h2>
			<img src={foto} alt="foto del pokemon" />
			<p>
				El pokemon se llama {nombrePokemon}, mide {alturaPokemon * 10} Cm. y
				pesa {pesoPokemon / 10} Kgr.
			</p>
		</>
	);
};

export default Pokemon;
