// fetch("https://reqres.in/api/users?page=2")
// 	.then(res => res.json())
// 	.then(info => {
// 		let acc = "";
// 		let contenedor = document.getElementById("contenedor");
// 		info.data.forEach(persona => {
// 			const firstName = persona.first_name;
// 			const lasName = persona.last_name;
// 			const img = persona.avatar;
// 			const email = persona.email;

// 			acc += `
//                 <div>
//                  <p> ${firstName} ${lasName}</p>
//                  <img src= "${img}">
//                 <p>${email}</p>
//                 </div>
//                 `;
// 		});
// 		contenedor.innerHTML = acc;
// 	});

fetch(
	"https://api.openweathermap.org/data/2.5/weather?q=Mendoza&appid=309c57a87d887bb3630589700f0c454c"
)
	.then(res => res.json())
	.then(info => {
		console.log(info);
	});
