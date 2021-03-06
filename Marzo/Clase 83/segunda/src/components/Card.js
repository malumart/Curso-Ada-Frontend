import React from "react";
import "./Card.css";
import camionFreeShipping from "../img/truck.svg";

const Card = props => {
	return (
		<div className="card">
			<div className="top">
				<img src={props.info.thumbnail}></img>
			</div>
			<div className="bottom">
				<div className="details">
					<h5>{props.info.title}</h5>
					<p>$ {props.info.price}</p>
				</div>
				<div className="shipping">
					{props.info.free_shipping == true && (
						<img src={camionFreeShipping}></img>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;

//CONDITIONAL RENDERING
// CON OPERADOR &&
// O CON OPERADOR TERNARIO PARA REEMPLAZAR IF ELSE
//SERIA ASI
// {props.info.free_shipping == true &&
// ? <img src={camionFreeShipping}></img>
// : '(OTRA CONDICION QUE SE CUMPLE SI ES FALSE)'}
//CON IF/ELSE SIEMPRE AFUERA DEL RETURN
