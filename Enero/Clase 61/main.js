// 1. Recorrer el array de usuarios y por cada
// usuario crear una card con sus datos
// 2. manejar sistema de likes para cada usuario



const usuarios =[
    {
        nombre: "Pepita Gomez"
        descripcion: "Maquetadora"
        foto: "img/foto.jpeg"
    }
    {
        nombre: "Pepita Gomez"
        descripcion: "Maquetadora"
        foto: "img/foto.jpeg"
    }
    {
        nombre: "Pepita Gomez"
        descripcion: "Maquetadora"
        foto: "img/foto.jpeg"
    }
    {
        nombre: "Pepita Gomez"
        descripcion: "Maquetadora"
        foto: "img/foto.jpeg"
    }
]




//selectores
//por etiqueta, por clase o por id
//querySelector y querySelectorAll --> selector de css
/*
const cards = document.getElementsByTagName("article");
console.log(cards)
const card = cards[0]
console.log(card)
const imagenes = document.getElementsByClassName("imagen")
const info = document.getElementById("info")
console.log(info)

const descripcion = document.querySelector("#descripcion")

descripcion.classList.add("rojo")
console.log(descripcion)
descripcion.classList.remove("rojo")

console.log(descripcion.innerHTML)
descripcion.innerHTML = "Otra cosa distinta"

//eventos
const cards = document.getElementsByTagName("article");
const card = cards[0]
console.log(card)
card.onclick =() =>{
    console.log("hiciste click en la tarjeta")
}

card.onmouseenter = () =>{
    console.log("entraste al elemento")
}

card.onmouseleave = () =>{
    console.log("saliste del elemento")
}

window.onkeydown =() =>{
    console.log("onkeydown")
}

window.onkeyup =() =>{
    console.log("onkeyup")
}

window.onkeypress =() =>{
    console.log("onkeypres")
}

window.onload = () =>{
    console.log("se cargo la pagina")
}

window.onresize = () =>{
    console.log("hubo un cambio de tamanño")
}

card.onmouseenter = (event) =>{
    console.log(event)
}

window.onkeydown =(e) =>{
    console.log(e.key)
    console.log(e.keyCode)
}
*/
const imagen = document.querySelector(".imagen")
const corazon = document.querySelector(".fa.fa-heart")
const likes = document.querySelector("#likes")
imagen.onclick = () =>{
console.log("Hiciste click en la imagen")
corazon.classList.add("rojo")
let cantdelikes = Number(likes.textContent)
cantdelikes++
likes.textContent = cantdelikes
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

const nombre = document.querySelector ("h2")

nombre.onmouseenter = () => {
    nombre.classList.add("masgrande")
}

nombre.onmouseleave = () => {
    nombre.classList.remove("masgrande")
}

// el mouse enter y mouse leave anteriores
// es igual que hacer un hover con css

const abrirModal = document.querySelector("#abrirModal")
const modal = document.querySelector(".modal")

abrirModal.onclick = () =>{
    modal.classList.remove("nomostrar")
}

const cerrarModal = document.querySelector("#cerrarModal")

cerrarModal.onclick = () =>{
    modal.classList.add("nomostrar")
}