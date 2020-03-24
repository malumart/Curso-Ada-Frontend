import React from "react";

const nombre = "Coombes";
const precio = "2300";

const Tarjeta = props => {
	console.log(props);
	return (
		<div className="card">
			<div className="imagen">
				<img src={props.imagen} />
			</div>
			<div id="descripcion">
				<p className="titulo">{props.nombre}</p>
				<p className="precio">{props.precio}</p>
			</div>
		</div>
	);
};

export default Tarjeta;
