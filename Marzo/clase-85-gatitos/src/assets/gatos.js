import rodolfo from "../img/gatanegroyblanco.jpg";
import muzzarella from "../img/gatagris.jpg";
import artilugia from "../img/gatonaranja.jpg";
import wosito from "../img/gatoatigrado.jpg";
import calamardo from "../img/gatatricolor.jpg";

const gatos = [
	{
		name: "Rodolfo",
		shortDesc:
			"Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: rodolfo,
		color: ["negro", "blanco"],
		sexo: "m",
		disponible: false,
	},

	{
		name: "Muzzarella",
		shortDesc:
			"Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: muzzarella,
		color: ["gris"],
		sexo: "f",
		disponible: true,
	},

	{
		name: "Artilugia",
		shortDesc:
			"Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: artilugia,
		color: ["naranja"],
		sexo: "f",
		disponible: true,
	},

	{
		name: "Wosito",
		shortDesc:
			"Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: wosito,
		color: ["atigrado"],
		sexo: "m",
		disponible: true,
	},

	{
		name: "Calamardo",
		shortDesc:
			"Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
		img: calamardo,
		color: ["naranja", "blanco", "negro"],
		sexo: "m",
		disponible: true,
	},
];

export default gatos;
