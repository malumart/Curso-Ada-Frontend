/*
Hacer un codigo que determine si un password es valido o no.

Hacer una funcion que reciba un string como parametro. La funcion debe retornar true si el parametro:

Tiene seis caracteres o mas
Tiene al menos un numero
Tiene al menos una letra
Y false en caso contrario.

El archivo 51.js tiene ya fragmentos de codigo que pueden servirles para hacer las funciones.

*/

let password = "lili12"


const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const checkPasswordLength = pwd => pwd.length >= 6

const checkPasswordHasNumbers = pwd =>{
let hasNumbers = false
    for (let i = 0; i < pwd.length; i++) {
        if (numeros.indexOf(pwd[i]) != -1) {
        hasNumbers = true
        }
    }
return hasNumbers
}

const checkPasswordHasLetters = pwd =>{
let hasLetters = false
    for (let i = 0; i < pwd.length; i++) {
        if (letras.indexOf(pwd[i]) != -1) {
            hasLetters = true
        }
    }
return 
}

const checkPasswordIsValid = pwd =>{
    if (checkPasswordLength(pwd) === true
    && checkPasswordHasLetters(pwd) === true 
    && checkPasswordHasNumbers(pwd) === true){

    } 
}