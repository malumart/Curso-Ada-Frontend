//Elementos SELECT



// Para poder obtener el valor de un elemento select podemos utilizar la propiedad selectedIndex
// Retorna el indice numerico de la opcion seleccionada
// Otra de las propiedades que tiene el objeto select es options que retorna la coleccion de 
// elementos options. Combinando estos 2 atributos podemos obtener el valor del option seleccionado
// Al igual que el resto de los elementos HTML del formulario, el objeto option tiene un atributo
// value que nos da el valor del mismo.


// Ejemplo:
//console.log(select.options); 
//select.options[0];
//console.log(select.options[0].value) 

// Ejercicio 

// Hacer un formulario 


const formularios = document.forms;
const formPaises = formularios[0];
console.log(formPaises);

formPaises.onsubmit = e => {
    e.preventDefault()
    const selectPaises = document.querySelector("select");
    const indicePaisElegido = selectPaises.selectedIndex
    const info = document.querySelector("#informacion")
    //info.innerHTML = paises[indicePaisElegido].value;

    const paises = selectPaises.options;
    console.log(paises)
    info.innerHTML = paises[indicePaisElegido].textContent;

}



const formMascotas = document.forms[1];
console.log(formMascotas)
formMascotas.onsubmit = e =>{

    e.preventDefault();

    const checkboxes = document.querySelectorAll("input[type='checkbox']")


    for (let i =0; i< checkboxes.length ; i++){

        if (checkboxes[i].checked){
        console.log(checkboxes[i].value)
        }
    }
}

