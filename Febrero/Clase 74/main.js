// CRUD
// CREATE UPDATE DELETE
// ABM ALTA BAJA MODIFICACION

// HTTP --> Protocolo para mandar datos en la web
// Metodos para mandar informacion:
// GET buscar informacion
// POST crear/enviar informacion
// PUT actualiza informacion
// DELETE borra informacion

// El método fetch recibe como parámetro obligatorio la ruta de una API.
// Si no agregamos ningún otro parámetro, fetch utiliza por defecto el método GET
// para leer la información de la ruta especificada.
// Luego de utilizar el método json() para obtener la data transmitida,
// podemos utilizarla en nuestra web o simplemente mostrarla en la consola.

const form = document.forms[0];
const submit = form.elements[0];
form.onsubmit = e => {
	e.preventDefault();
	buscarCiudad(submit.value);
};

const buscarCiudad = ciudad => {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=309c57a87d887bb3630589700f0c454c`
	)
		.then(res => res.json())
		.then(info => {
			console.log(info);
			const contenedor = document.getElementById("contenedor");
			const card = `
			<div class="card">
				<div class="arriba">
					<div class="ciudad">${info.name}</div>
					<div class="descripcion_clima">${info.weather[0].description}</div>
				</div>
				<div class="abajo">
					<div class="clima">
						<img src="http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" />
						<p>
							${info.main.temp} <span>C</span>
						</p>
					</div>
					<div class="detalles">
						<p>Precipitacion</p>
						<p>Humedad</p>
						<p>Viento</p>
					</div>
				</div>
			</div>`;

			contenedor.innerHTML = card;
		});
};
