const imagesAsObjects = [
    {
      title: "Forest",
      img: "https://www.w3schools.com/css/img_forest.jpg"
    },
    {
      title: "5 terre",
      img: "https://www.w3schools.com/css/img_5terre.jpg"
    },
    {
      title: "Northern lights",
      img: "https://www.w3schools.com/css/img_lights.jpg"
    },
    {
      title: "Mountains",
      img: "https://www.w3schools.com/css/img_mountains.jpg"
    }
  ]
  
  let tarjetas = "";
  
  for (let i = 0; i < imagesAsObjects.length; i++) {
    tarjetas += `<div class="card">
    <img src=${imagesAsObjects[i].img} alt=${imagesAsObjects[i].title}>
  <div class="desc">${imagesAsObjects[i].title}</div>
  </div>`;
  }

  const containerHtml = document.getElementById("container");
  
  containerHtml.innerHTML = tarjetas;

  const listaDeTarjetas = document.getElementsByClassName("card")
  const contenedorModal = document.getElementById("contenedorModal")

  for(let i=0; i < listaDeTarjetas.length; i++){
      listaDeTarjetas[i].onclick = () => {
          contenedorModal.innerHTML  = 
          ` <div id="myModal" class="modal nomostrar">
            <div class="modalcontent">
                  <p>${imagesAsObjects[i].title}</p>
                  <img src="${imagesAsObjects[i].img}">
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

    
/*
const modal = document.getElementById("myModal");
const botonAbrirModal = document.getElementById("mostrarModal")
const botonCerrarModal = document.getElementById("cerrarModal")

botonAbrirModal.onclick = () =>{
    modal.classList.remove("nomostrar")
}

botonCerrarModal.onclick = () => {
    modal.classList.add("nomostrar")
}

*/
