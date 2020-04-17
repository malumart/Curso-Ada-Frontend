import React, { useState } from "react";
import "./App.css";

const App = () => {
	//declaracion dela variable, setVariable, ejecucion de la funcion useState
	//con el valor de variable como parametro
	const [numeroDeClicks, setNumeroDeClicks] = useState(0);
	const handleClick = () => {
		setNumeroDeClicks(numeroDeClicks + 1);
	};
	return (
		<div>
			<h1>Clicks</h1>
			<p>{numeroDeClicks}</p>
			<button onClick={handleClick}> Agregar click</button>
		</div>
	);
};

export default App;
