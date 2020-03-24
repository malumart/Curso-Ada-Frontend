import React from "react";

const TarjetasGatitos = props => {
	let disponible = props.info.disponible ? "" : "cardDisabled";
	return (
		<div className={`card ${disponible}`}>
			<div className="cardimg">
				<img alt="foto de gatito" src={props.info.img} />
			</div>
			<div className="carddesc">
				<h3>{props.info.name}</h3>
				<p>{props.info.shortDesc}</p>
				<button>{props.info.disponible ? "Ver mas" : "No disponible"} </button>
			</div>
		</div>
	);
};

export default TarjetasGatitos;
