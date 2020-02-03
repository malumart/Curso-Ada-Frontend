
// Ejercicio 
// Hacer un form con input text para nombre, password y email
// mostrar en consola el valor de los campos de texto cuando el usuario hace foco (onfocus)
// mostrar en consola el valor de los campos de texto cuando el usuario saca el foco  (onblur)
// mostrar en consola el valor de los campos de texto cuando el usuario cambia el valor de cada uno (onchange) / (oninput)


const form = document.forms[0];
const nombre = form.elements[0];
const email = form.elements[1];
const password = form.elements[2];


nombre.onfocus = (e) =>{
    console.log("focus", e.srcElement.value)
}

password.onfocus = () =>{
    console.log(password.value)
}

email.onfocus = () =>{
    console.log(email.value)
}

nombre.onblur = () =>{
    console.log("blur", nombre.value)
}

nombre.oninput = () =>{
    console.log("input", nombre.value)
}



// Ejercicio 2

// Validar que el campo username y pass no esten vacios al submittear el formulario
// Si estan vacios
// 1. Mostrar un mensaje rojo debajo del input: Los campos estan vacios
// 2. Colorear el borde del input en rojo
// 3. Si esta todo bien mostrar un mensaje verde que diga: Bienvenido

const mensajeErrorNombre = document.getElementById("mensajeError");
const mensajeErrorEmail= document.getElementById("mensajeErrorEmail");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    

form.onsubmit = (e) =>{

    e.preventDefault();

    
    if (!nombre.value){
        mensajeErrorNombre.classList.add("rojo")
        mensajeErrorNombre.innerHTML = `<p> El campo esta vacio</p>`
    } else{
        mensajeErrorNombre.classList.remove("rojo")
        mensajeErrorNombre.innerHTML = ``
    }

    if (!email.value) {
            mensajeErrorEmail.innerHTML = `<p> El campo esta vacio</p>`
            mensajeErrorEmail.classList.add("rojo")
    } else{
        mensajeErrorEmail.classList.remove("rojo")
        mensajeErrorEmail.innerHTML = ``
    }
    
    if (nombre.value && email.value && password.value){
        mensajeErrorEmail.innerHTML = ``
        mensajeErrorNombre.innerHTML = ``
        mensajeBienvenida.innerHTML = `<p> Bienvenido</p>`
        mensajeBienvenida.classList.add("verde")
    }
    
}

//Ejercicio 3

// Agregar un campo password y un email (que se repitan)
// Al momento de hacer blur en el repetido, validar que los mails sean iguales
// al igual que las passwords
// si no es asi, mostrar en rojo mensaje que diga ";os campos no coinciden"

const segundoEmail = document.getElementById("segundoEmail");

segundoEmail.onblur =() =>{
    if (segundoEmail.value != email.value){
        mensajeErrorEmail.innerHTML = `Los campos no coinciden`
    } else{
        mensajeErrorEmail.innerHTML = ``
    }
}


const alumnas = ["Lili", "Ivi", "Maria", "Nil"]
/*
for (let i = 0; i<alumnas.length; i++){
    console.log(alumnas[i].toUpperCase())
}
Se puede hacer con forEach en vez de usar la estructura de for simple
*/ 

alumnas.forEach( alumna =>{
    console.log(alumna.toUpperCase())
})



const alumnasObjeto =[
{
    nombre:"Malu",
    estado:"Mi alumna favorita",
    companerasFavoritas: ["Pieri", "Nil"]
},
{
    nombre:"Gabu",
    estado:"Mi otra alumna favorita",
    companerasFavoritas: ["Noe", "Lili"]
},
]

//el forEach recibe UN parametro obligatorio que tenga el nombre que tenga
// identifica el elemento que estamos recorriendo
// segundo parametro opcional : identifica el indice del elemento que estamos recorriendo

alumnasObjeto.forEach((alumna,i) =>{
console.log(i)
})

console.log(alumnasObjeto)

const nombre ="Lili"

const primeraLetra = nombre.charAt(0);

// con forEach el array original no se modifica

