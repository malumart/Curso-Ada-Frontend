// EJERCICIOS FOR EACH = funcion por cada elemento del array, no retorna nada.
// Ejercicio 1
const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt"
];

playlist.forEach(song =>{
    console.log(song)
})

// Ejercicio 2

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];
  
let totalLibros = 0;

librosDeJS.forEach(libro =>{
    totalLibros ++;
})

  console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');
  
//Ejercicio 3

playlist.forEach((song,i) =>{
    console.log(`${i} - ${song}`)
})

// Ejercicio 4

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

numbers.forEach (numero =>{
    sum += numero;
})
console.log(sum);

// Ejercicio 5

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;
let cantNotas = 0;

notasDeTPs.forEach( nota =>{
    notaFinal += nota;
    cantNotas++;
})


console.log(notaFinal/cantNotas);


// Ejercicio 6

const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
const numerosPares = [];
const numerosImpares = [];

masNumeros.forEach(numero =>{
    if(numero % 2 ==0){
        numerosPares.push(numero)
    } else {
        numerosImpares.push(numero)
    }
})
console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]


//Ejercicio 7

const valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
const dobles = [];

valores.forEach( numero =>{
    dobles.push(numero*2)
})

console.log("valores: ", valores);
console.log("dobles: ", dobles);


// EJERCICIOS MAP -  funcion por cada elemento del array, devuelve un array con lo que retorna la funcion

//Ejercicio 1

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez = numeros.map( numero => numero+10)

console.log(numeros);
console.log(numerosMasDiez)

//Ejercicio 2
const numeros2 = [3, 7, 13, 99];

let numeros2dobles = numeros2.map(numero => numero*2)


console.log(numeros2); // [3, 7, 13, 99]
console.log(numeros2dobles); // [6, 14, 26, 198]

//Ejercicio 3 

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let frasesExclamadas = frases.map( frase => `¡${frase}!`)

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]


// Ejercicio 4 

const librosDeJavaScript = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];
  
let nuevoArrayDeLibrosJS = librosDeJavaScript.map(libro => {
    return `<li>${libro} </li>`
})

console.log(nuevoArrayDeLibrosJS);
console.log(`<ul> ${nuevoArrayDeLibrosJS} </ul>`)


// Ejercicio 5

const frases5 = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];


let longitudes = frases.map (frase => frase.length)

console.log(frases5); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]



// METODO FILTER

//Ejercicio 1

const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];



const losMasCaros = costos.filter( costo  => costo>50)

console.log(costos);
console.log(losMasCaros);


// Ejercicio 2
const masNumeros2 = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];



const numerosPares2 = masNumeros2.filter(num => num %2 == 0);
const numerosImpares2 = masNumeros2.filter(num => num %2 != 0);;

console.log("pares: ", numerosPares2);
console.log("impares: ", numerosImpares2);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 3

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
  ];
  
  let soloStrings = mix.filter(frase => typeof(frase) === `string`)
  console.log(soloStrings);
  // deberia mostrar
  // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]


  //Ejercicio 4

  const playlist2 = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
var playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

let playlistSinEscuchar = []

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]



