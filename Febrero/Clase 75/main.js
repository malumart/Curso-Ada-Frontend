// Ejercicio 1
// Mediante el metodo GET, obtener la lista de usuarios y mostrarla en consola.
// Usando el metodo POST, agregar sus datos a la lista de usuarios.
// Usando el metodo PUT, modificar alguno de los datos en su propio usuario.
// Usando el metodo POST, agregar un usuario con un nombre falso.
// Usando el metodo DELETE, borrar ese usuario.
// Cuidado! Sus compañeras van a estar editando los datos al mismo tiempo
// que ustedes. Chequeen bien antes de borrar o editar.

fetch("https://meli-nnaykhkakj.now.sh/user/list")
	.then(data => data.json())
	.then(result => console.log(result));

const usuarioNuevo = {
	name: "Malu",
	lastname: "Martin",
	phone: "2235424688",
	email: "malu.martin92@hotmail.com"
};

fetch(`https://meli-nnaykhkakj.now.sh/user`, {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(usuarioNuevo)
})
	.then(data => data.json())
	.then(result => console.log(result));

// fetch(`https://meli-fnsefibufx.now.sh/user/edit`, {
// 	method: "PUT",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify(usuarioNuevo)
// })
// 	.then(data => data.json())
// 	.then(result => console.log(result));

// fetch(`https://meli-fnsefibufx.now.sh/user`, {
// 	method: "POST",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify(usuarioModificado)
// })
// 	.then(data => data.json())
// 	.then(result => console.log(result));
