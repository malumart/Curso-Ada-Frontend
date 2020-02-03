/*
Clase 64
Maquetado y funcionalidad
Hoy haremos una web de adopciones a partir de un diseño basico y 
un array de objetos que representan mascotas en adopcion.

El diseño puede ser el siguiente, o pueden hacer uno propio siempre y cuando la informacion 
sea la misma.

secciones 1 y 2 secciones 3 y 4

Las cards con gatos para adoptar deben tener la informacion de los objetos en main.js: 
name, shortDesc e img

Al hacer clic en la card debe abrirse un modal que contenga la imagen mas grande, el 
nombre y longDesc

Al hacer hover sobre una card la imagen del gato debe agrandarse y los colores deben c
ambiar (la primera card en la imagen muestra el hover). No debe ocurrir de golpe sino con un transition.

No es necesaria ninguna accion al momento de cliquear en el icono de menu.

Los iconos deben ser de font awesome.

No esta permitido usar bootstrap.

los colores usados son 1a75bc y fed201, la imagen es
 https://www.flickr.com/photos/38203831@N00/168638725



*/

const gatos = [
    {
      name: "Rodolfo",
      shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/gatanegroyblanco.jpg",
      color : ["negro", "blanco"],
      sexo : "h"
    },
  
    {
      name: "Muzzarella",
      shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/gatagris.jpg",
      color : ["gris"],
      sexo : "h"
    },
  
    {
      name: "Artilugia",
      shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/gatonaranja.jpg",
      color : ["naranja"],
      sexo : "m"
    },
  
    {
      name: "Wosito",
      shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/gatoatigrado.jpg",
      color : ["atigrado"],
      sexo : "m"
    },
  
    {
      name: "Calamardo",
      shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "img/gatatricolor.jpg",
      color : ["naranja","blanco","negro"],
      sexo : "h"
    },
    
  ]

  let cards = "";

  for (let i = 0; i < gatos.length; i++) {
    cards += `<div class="card">
    <div class="cardimg"> <img src="${gatos[i].img}"> </div>
    <div class="carddesc">
    <h3>${gatos[i].name}</h3>
    <p>${gatos[i].shortDesc}</p>
    <button> Ver mas </button>
    </div>
    </div>`;
  }

  const seccioncards = document.getElementById("cards-adoptions")
  seccioncards.innerHTML = cards;





    const listaDeCards = document.getElementsByClassName("card")
    const contenedorModal = document.getElementById("contenedorModal")

  for(let i=0; i < listaDeCards.length; i++){
      listaDeCards[i].onclick = () => {
          contenedorModal.innerHTML  = 
          ` <div id="myModal" class="modal nomostrar">
            <div class="modalcontent">
                  <img src="${gatos[i].img}">
                  <div><button id="cerrarModal">Cerrar Modal</button></div>
            </div>
          </div>
          </div>`

          const modal = document.getElementById("myModal")
          modal.classList.remove("nomostrar")

          const botonDeCerrar = document.getElementById("cerrarModal")
          botonDeCerrar.onclick = ()  => {
              modal.classList.add("nomostrar")
          }
      }
  }

// Tarea
// Como vamos a filtrar nuestros gatos por color y sexo
// necesitamos agregar esos campos a los objetos
// 1. A cada objeto gatuno agregarlo un array de colores y el sexo
// Mostrar en consola la eleccion del usuario al hacer click en filtrar
// Nombre, telefono, colores de los gatitos y sexo elegido

const form = document.forms[0];

form.onsubmit = e =>{
  e.preventDefault();

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const radios = document.querySelectorAll("input[type='radio']");

  let sexo = "";
  let busquedaGato = "";

  for (let i=0; i < checkboxes.length ; i++){
    if (checkboxes[i].checked){
      console.log(checkboxes[i].value);
    }
  }

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        sexo = radios[i].value;
    }
} 

  for (let i =0; i<gatos.length ; i++){
    if (sexo == gatos[i].sexo) {
      busquedaGato +=  `<div class="card">
      <div class="cardimg"> <img src="${gatos[i].img}"> </div>
      <div class="carddesc">
      <h3>${gatos[i].name}</h3>
      <p>${gatos[i].shortDesc}</p>
      <button> Ver mas </button>
      </div>
      </div>`;
    } else{
      if (sexo == "i"){
        busquedaGato +=  `<div class="card">
      <div class="cardimg"> <img src="${gatos[i].img}"> </div>
      <div class="carddesc">
      <h3>${gatos[i].name}</h3>
      <p>${gatos[i].shortDesc}</p>
      <button> Ver mas </button>
      </div>
      </div>`;

      }

    }  
  }

  seccioncards.innerHTML = busquedaGato;


  }
  




