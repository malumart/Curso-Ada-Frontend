import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	const [pais, setPais] = useState();
	const [busqueda, setBusqueda] = useState();

	const buscarPais = () => {
		fetch(`https://restcountries.eu/rest/v2/name/${busqueda}`)
			.then((res) => res.json())
			.then((data) => setPais(data));
	};

	useEffect(buscarPais, []); // Funcion que recibe 2 parametros: 1 funcion y 1 array

	const handleChange = (e) => {
		setBusqueda(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		buscarPais(busqueda);
	};

	console.log(pais);

	return (
		<div className="main">
			<div className="card">
				{pais && pais.name && (
					<>
						<img src={pais.flag} />
						<p> Nombre: {pais.name}</p>
						<p> Capital: {pais.capital}</p>
					</>
				)}
			</div>
			<form onSubmit={handleSubmit}>
				<input value={busqueda} onChange={handleChange}></input>
				<input type="submit" value="Buscar Pais"></input>
			</form>
		</div>
	);
};
export default App;
