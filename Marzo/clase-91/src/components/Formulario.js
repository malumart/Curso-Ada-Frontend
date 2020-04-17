import React from "react";

const Formulario = ({ functionSubmit, functionGuardar }) => {
	const handleChange = e => {
		functionGuardar(e.target.value); //IMPORTANTE
	};

	const handleSubmit = e => {
		e.preventDefault();
		functionSubmit();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Agregar una tarea.."
				onChange={handleChange}
			></input>
			<input type="submit" value="Agregar" />
		</form>
	);
};

export default Formulario;
