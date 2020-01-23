// Este es un array de imagenes que contiene las mismas que se usaron
// para la seccion "Our clients" del TP1. 
// Que pueden ver aqui: https://newbiz-master-uqgespkghu.now.sh/

// La idea es reproducir la seccion, pero esta vez agregar cada tarjeta 
// de cliente dinamicamente con javascript. 

// Recorrer el array con un for, y asi crear el innerHTML
// que luego sera insertado en la seccion. 

// No es necesario hacer el HTML o el CSS desde cero: sientanse libres
// de reutilizar lo que tienen en el TP1. (Pero es una buena oportunidad
// para repasar maquetado!)
// Lo unico que no deben agregar al HTML es las tarjetas con cada logo, 
// ya que esas se insertaran desde javascript. 

// Tampoco es necesario hacerlo responsive, ni usar SASS, 
// ni agregar las animaciones en el hover de cada imagen. 

const imagenes = [
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-1.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-2.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-3.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-4.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-5.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-6.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-7.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-8.png",
]

const section8container = document.querySelector(".section-8-our-clients-container-box")
console.log(section8container)
let section8cards =''

for (let i=0; i<imagenes.length; i++){
    section8cards = section8cards + `
    <div class="imagen">
      <img src="${imagenes[i]}">
    </div>
    `
}

section8container.innerHTML = section8cards;

