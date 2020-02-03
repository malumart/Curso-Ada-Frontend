
// Los elementos del formulario pueden manejar eventos por medio de los
// metodos:
// onfocus, onblur, onchange, oninput

const form = document.forms[0];

// focus: se dispara al establecer el foco de un elemento
// blur: se dispara al remover el foco sobre un elemento
// change: se dispara cuando cambia el valor de un elemento
// input: se dispara al ingresar datos a un elemento
// Ejemplo:


// const form = document.querySelector ('form');
// const username = form.elements[0]l

// username.onfocus = function() {
    ///codigo que maneja el focus del elemento
    // console.log('hicieron foco en el campo username)
//}

const inputUsername = document.querySelector("#username")

inputUsername.onfocus = () =>{
    console.log("Hicieron foco en el elemento")
}

inputUsername.onblur = () =>{
    console.log("Dejaron de hacer foco en el elemento")
}


inputUsername.onchange = (e) =>{
    console.log("Hubo un cambio en el formulario")
    console.log(e.srcElement.value)
}

inputUsername.oninput = (e) =>{
    console.log("hicieron cambio en input")
} // cualquier cambio va a ser capturado, puedo validar formulario en vivo



