import React, { useState } from "react";
import "./App.css";
import Alumna from "./components/Alumna";

const App = () => {
	const [alumnas, setAlumnas] = useState(["Sabri", "Lili", "Noe", "Maria"]);
	const [alumnaNueva, setAlumnaNueva] = useState("");

	const handleChange = e => {
		setAlumnaNueva(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const alumnascopia = [...alumnas];
		alumnascopia.push(alumnaNueva);
		//el push a la copia tambien modifica el array original, por lo que tengo que
		//usar un spread operator para copiar los valores del array
		setAlumnas(alumnascopia);
	};

	return (
		<div className="App">
			{alumnas.map(alumna => (
				<Alumna nombreDeLaAlumna={alumna} />
			))}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Agregar alumna"
					onChange={handleChange}
				></input>
			</form>
		</div>
	);
};

export default App;
