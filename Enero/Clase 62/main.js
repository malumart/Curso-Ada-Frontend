// 1. Recorrer el array de usuarios y por cada
// usuario crear una card con sus datos
// 2. manejar sistema de likes para cada usuario



const usuarios =[
    {
        nombre: "Pepita Gomez",
        descripcion: "Maquetadora",
        foto: "foto.jpeg"
    },
    {
        nombre: "Brad Pitt",
        descripcion: "King of the Universe",
        foto: "foto.jpeg"
    },
    {
        nombre: "Chimuela Lila",
        descripcion: "Cutest Cat Ever",
        foto: "foto.jpeg"
    },
    {
        nombre: "Mariquena Del Prado",
        descripcion: "Actriz",
        foto: "foto.jpeg"
    }
]

const main = document.getElementById("main")
let nombre =''

for (let i=0; i<usuarios.length; i++){
    nombre = nombre + `
    <article class="card">
    <div>

    <div class="imagen">
      <img src="${usuarios[i].foto}">
    </div>

    <div class="informacion">
      <h2>${usuarios[i].nombre}</h2>
      <p id="descripcion">${usuarios[i].descripcion}</p>
      <p><i class="fa fa-heart"></i> <span id="likes"> 0</span> likes</p>
    </div>

  </article>
    `
}

main.innerHTML = nombre;

const imagenes = document.getElementsByClassName("imagen")
const corazones = document.querySelectorAll(".fa.fa-heart")
const likes = document.querySelectorAll("#likes")

//ARRAY DE ELEMENTOS
for (let i=0; i<imagenes.length; i++){
    imagenes[i].onclick = () =>{
        corazones[i].classList.add("rojo")
        let cantdelikes = Number(likes[i].textContent)
        cantdelikes++
        likes[i].textContent = cantdelikes
        }
}



corazon.onclick = () => {
     if (likes.textContent > "0") {
     let cantidadDeLikes = Number(likes.textContent)
     cantidadDeLikes--
     likes.textContent = cantidadDeLikes
    }
    console.log(likes.textContent)
    if (likes.textContent === "0") {
    corazon.classList.remove("rojo")
    }
    else {
    corazon.classList.add("rojo")
    }
}


