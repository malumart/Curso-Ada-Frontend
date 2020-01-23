
// Ejercicio
// Seleccionar el elemento form
// Crear una variable para cada valor de los inputs que tiene el formulario y guardar su valor
// agregar el atributo value al elemento username con el valor ada
// agregar el atributo value al elemento pass con el valor 12345
// mostrar en el body una lista con todos los nombres y valores de los atributos

const form = document.querySelector('form');
console.log(form);

const elementos = form.elements;
console.log(elementos)

const username = form.elements[0];
const password = form.elements[1];

username.value = "ada";
password.value = "12345";

form.onsubmit = e =>{
    e.preventDefault();
    if (password.value.length <12){
        const label = document.querySelector("label")
        label.innerHTML = ` <p> Tu password es muy corto </p>`
        password.classList.add("error")
    }
}


/*
// Web de gatitos// Agregar antes de las tarjetas de gatitos 
un formulario (cualquier estilo)// con los siguientes 
elementos:// Checkbox negro blanco gris naranja amarillo 
rayado// Radio sexo femenino, masculino, indiferente// 
Text: su nombre// Text: su telefono// submit// 
El form no se debe enviar en el submit
*/