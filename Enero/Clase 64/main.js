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
      img: "http://www.placekitten.com/400"
    },
  
    {
      name: "Muzzarella",
      shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/500"
    },
  
    {
      name: "Artilugia",
      shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/600"
    },
  
    {
      name: "Wosito",
      shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/700"
    },
  
    {
      name: "Calamardo",
      shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/700"
    },
    
  ]
