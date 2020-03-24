import React from "react";

const TarjetasGatitos = ({ name, shortDesc, img, isAvailable }) => {
	let disponible = isAvailable ? "" : "cardDisabled";
	return (
		<div className={`card ${disponible}`}>
			<div className="cardimg">
				<img alt="foto de gatito" src={img} />
			</div>
			<div className="carddesc">
				<h3>{name}</h3>
				<p>{shortDesc}</p>
				<button>{disponible ? "Ver mas" : "No disponible"} </button>
			</div>
		</div>
	);
};

export default TarjetasGatitos;
