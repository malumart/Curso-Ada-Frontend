//DOM = Document Object Model

/// Selectores 

/// Seleccionar un elemento por ID getElementById("id")

const principal = document.getElementById("principal")

// Seleccionar un elemento por su clase getElementByClassName("class")

console.log(document.getElementsByClassName("rojo"))

//Seleccionar elementos por su etiqueta getElementByTagName

console.log(document.getElementsByTagName("p"))

//seleccionar UN elemento por su selector de CSS  QuerySelector

console.log(document.querySelector("p"))

//Seleccionar todos los elementos por su selector de CSS 
console.log(document.querySelectorAll("#principal"))

const parrafo = document.querySelector(".rojo.fondorosa")
console.log(parrafo)
//la propiedad classList tiene metodos que nos permiten interactuar con las
// clases de un elemento del DOM
// add -remove- toggle

//add
parrafo.classList.add("borde")

//remove
const otroParrafo = document.getElementsByTagName("p")[3]
console.log(otroParrafo)
otroParrafo.classList.remove("azul")

//toggle

primerParrafoRojo = document.getElementsByClassName("rojo")[0]
segundoParrafoRojo = document.getElementsByClassName("rojo")[1]

primerParrafoRojo.classList.toggle("fondorosa") //le quita el fondo rosa
segundoParrafoRojo.classList.toggle("fondorosa") // le agrega el fondo rosa

//propiedades que nos permiten modificar contenidos de elementos
//textContent

primerParrafoRojo.textContent ="un texto que acabo de inventar"

//modificar HTML de un elemento

primerParrafoRojo.innerHTML = `
<ul> <li> malu</li>
    <li> martin</li>
</ul>`