//Formularios
//Para poder interactuar con un formulario lo primero que tenemos que hacer es seleccionarlo

//Ejemplo:

const form  = document.querySelector('form'); // me devuelve el primer form

const formularios = document.querySelectorAll('form'); // me devuelve lista de todos los forms

//Si tenemos muchos formularios, podemos usar el objeto document y la propiedad forms
// La propiedad forms retorna una coleccion de todos los formularios que tiene el documento

// Ejemplo:

const primerFormulario = document.forms[1];

//Los elementos del tipo formulario tienen un atributo llamado elements
// con la colleccion (array) de elementos que tiene el formulario seleccionado

const elementos = form.elements;

//Los elementos de un formulario tienen un atributo llamado value
//que nos permite establecer y obtener el valor de un elemento

const username = form.elements[0];

username.value; // Obtenemos un string vacio
username.value ='pepe'; // Establecemos el valor del input username en pepe


