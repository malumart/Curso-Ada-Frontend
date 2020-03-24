import React from "react";
import "./styles/App.css";
import Tarjeta from "./components/Tarjeta";

import mesa from "./assets/mesa.jpg";
import sillones from "./assets/imagen.jpg";

const App = () => {
	return (
		<div className="main">
			<Tarjeta nombre="Sillones" precio="$2300" imagen={sillones} />
			<Tarjeta nombre="Cortinas" precio="$1200" imagen={mesa} />
			<Tarjeta nombre="Sillas" precio="$300" imagen={sillones} />
			<Tarjeta nombre="Mesa" precio="$2600" imagen={mesa} />
		</div>
	);
};

export default App;
