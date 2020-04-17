import React, { useState } from "react";
import "./App.css";
import "./components/Formulario";
import Formulario from "./components/Formulario";

const App = () => {
	const Tarea = ({ tarea, i }) => (
		<li className={tarea.completada ? "completada" : ""}>
			{tarea.nombre}
			<button onClick={() => handleEraseClick(i)}>X</button>
			<button onClick={() => handleCompleteClick(i)}>
				>Marcar como completada
			</button>
		</li>
	);

	const [tareas, setTareas] = useState([
		{ nombre: "Conectarse a la clase", completada: true },
		{ nombre: "No trabajar durante la clase", completada: true },
		{
			nombre: "Halagar los fondos creativos de la profesora",
			completada: false
		},
		{ nombre: "Ganarse el pan de cada dia", completada: false },
		{ nombre: "Ganar el bingo", completada: false },
		{ nombre: "Salvar el mundo", completada: false }
	]);

	const [nuevaTarea, setNuevaTarea] = useState("");

	const handleEraseClick = indiceABorrar => {
		setTareas(tareas.filter((tarea, i) => i !== indiceABorrar));
	};

	const handleCompleteClick = indiceTareaACompletar => {
		const tareasModificadas = tareas.map((tarea, i) => {
			tarea.completada =
				i === indiceTareaACompletar ? !tarea.completada : tarea.completada;
			return tarea;
		});
		setTareas(tareasModificadas);
	};

	const guardarTarea = param => {
		setNuevaTarea(param);
	};

	const handleSubmitApp = () => {
		const listaDeTareas = [...tareas];
		const nuevaTareaObj = {
			nombre: nuevaTarea,
			completada: false
		};
		listaDeTareas.push(nuevaTareaObj);
		console.log(listaDeTareas);
		setTareas(listaDeTareas);
	};

	return (
		<div className="App">
			<ul>
				{tareas.map((tarea, i) => (
					<Tarea tarea={tarea} key={i} i={i} />
				))}
			</ul>

			<Formulario
				functionSubmit={handleSubmitApp}
				functionGuardar={guardarTarea}
			/>
		</div>
	);
};

export default App;
