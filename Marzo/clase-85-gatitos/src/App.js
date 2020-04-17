import React, { useState } from "react";
import "./App.css";
import TarjetasGatitos from "./components/TarjetasGatitos";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import gatos from "./assets/gatos";

const App = () => {
	const [gatosFiltrados, setGatosFiltrados] = useState([...gatos]);
	const [state, setState] = useState({
		color: [],
		sexo: "",
		nombre: "",
		edad: "",
	});

	const handleChange = (e) => {
		if (e.target.name === "color") {
			setState({ ...state, color: [...state.color, e.target.value] });
		} else {
			setState({ ...state, [e.target.name]: e.target.value });
		}

		if (e.target.name === "sexo") {
			setGatosFiltrados(gatos.filter((gato) => gato.sexo === e.target.value));
		}
	};

	console.log(state);

	return (
		<div>
			<NavBar />
			<form>
				<div>
					Negre
					<input
						onChange={handleChange}
						type="checkbox"
						value="negro"
						name="color"
					/>
					Blanco
					<input
						onChange={handleChange}
						type="checkbox"
						value="blanco"
						name="color"
					/>
					Naranja{" "}
					<input
						onChange={handleChange}
						type="checkbox"
						value="naranja"
						name="color"
					/>
					Tricolor{" "}
					<input
						onChange={handleChange}
						type="checkbox"
						value="tricolor"
						name="color"
					/>
					Rayade{" "}
					<input
						onChange={handleChange}
						type="checkbox"
						value="rayado"
						name="color"
					/>
				</div>
				<div>
					Masculino
					<input
						onChange={handleChange}
						type="radio"
						value="m"
						name="sexo"
					></input>
					Femenino
					<input
						onChange={handleChange}
						type="radio"
						value="f"
						name="sexo"
					></input>
					Indiferente
					<input
						onChange={handleChange}
						type="radio"
						value="indiferente"
						name="sexo"
					></input>
				</div>
				<div>
					Nombre
					<input
						onChange={handleChange}
						type="text"
						name="nombre"
						value={state.nombre}
					></input>
					Edad
					<input
						onChange={handleChange}
						type="number"
						name="edad"
						value={state.edad}
					></input>
				</div>
			</form>
			<div className="section-adoptions">
				<div className="cards-adoptions">
					{gatosFiltrados.map((gato, i) => (
						<TarjetasGatitos key={i} info={gato} />
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default App;
