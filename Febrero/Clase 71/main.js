// METODO REDUCE - retorna UN elemento
// se le aplica a un array
// tiene como parametro una funcion
// esa funcion tiene 2 parametros : una acumuladora y el elemento

// Ejercicio 1

const numbers = [6, 1, 34, 94, 3, 17];

const suma = numbers.reduce((acumuladora, valorActual) =>{

    return acumuladora + valorActual
})
console.log(suma)
// deberia mostrar 155


// Ejercicio 2

const numbers2 = [6, 1, 34, 94, 3, 17];

const multiplicacion = numbers2.reduce((acc,vA)=>{
return acc*vA
})
console.log(multiplicacion)
// deberia mostrar 977976

// Ejercicio 3


const notasDeTPs = [4, 7, 8, 5, 10];

const promedio = notasDeTPs.reduce((acc,vA)=>{
    return (acc+vA)
})


console.log(promedio/notasDeTPs.length)
    
// deberia mostrar 6.8

//Ejercicio 4
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
  
const libros = librosDeJS.reduce( (ac, va) =>{
    return `${ac} <li> ${va} </li>`
},"")
  
console.log(libros)
  // el resultado final debería ser
  // <li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>
  

  // Ejercicio 5
  const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
  ];

const personasEdadSuma = personas.reduce((ac,va)=>{
    return ac + va.edad
}, 0)

console.log(personasEdadSuma);
// deberia mostrar 59

/*
integrador de todos los metodos
Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
Queremos eliminar todos los números negativos
Con los números restantes, obtener el doble de cada uno
Finalmente, obtener la suma de todos los números que obtuvimos
*/
const datos = [2, -4, 6, 0, 5, -1];

const positivos = datos.filter( num =>{
 return num >= 0;
})

console.log(positivos);

const dobles = positivos.map( num => 
num*2)
console.log(dobles);

const suma2 = dobles.reduce( (ac, va) =>{
  return ac +va
})

let suma3 =0;
dobles.forEach ( num =>{
  suma3 += num} )
console.log(suma2);
console.log(suma3);
// codear acá la solución del ejercicio


