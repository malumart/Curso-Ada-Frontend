//Ejercicio

// Hacer un formulario que tenga un checkbox

// Cuando el usuario haga submit del formulario mostrar una alerta

//Si el usuario no selecciona ninguna opcion mostrar: Por favor seleccione al menos una opcion
// Si el usuario selecciona solo una opcion mostrar: la opcion elegida
// es = valor de la opcion que elige
// Si el usuario selecciona varias opciones mostrar: las opciones elegidas son ..


const formulario = document.forms[0];
console.log(formulario);

formulario.onsubmit = e => {
    e.preventDefault()

   const checkboxes = document.querySelectorAll("input[type='checkbox']")
    let opcionesElegidas = [];
   for(let i =0; i< checkboxes.length; i++){
       if(checkboxes[i].checked){
           opcionesElegidas.push(checkboxes[i].value)
       }
   }

if (!opcionesElegidas.length){
    alert ("Por favor seleccione al menos una opcion")
}else{
    if (opcionesElegidas.length == 1){
        alert (`Elegiste la opcion ${opcionesElegidas[0]}`)
    }
    else{
        alert (`Elegiste las opciones ${opcionesElegidas.join(", ")}`)
    }
}
}
