// lista de valores que se convierten a false

// undefined
// null
// ""
// 0
// NaN 


// 1. Los undefined convertidos a booleano dan false, los numeros distintos a 0 dan true
// 2. En una comparacion, Javascript evalua el primer valor como Booleano. 

usuarioNoPagoSusImpuestos = false  
usuarioNoPagoSusImpuestos && alert("Ud no pago sus impuestos")
// prueben cambiando el valor a true 

// Reglas del operador && ("y") 
true && true // true
true && false // false
false && true // false
false && false // false 
// Si la primera expresion puede ser evaluada como verdadera, devolvemos la segunda
// Si la primera expresion  puede ser evaluada como falsa, devolvemos la primera expresion. 


// Reglas del operador || ("o")
true || true // true
true || false //true
false || true //true
false || false //false 

// Si la primera expresion puede ser evaluada como verdadera, devolvemos la primera. 
// Si puede ser evaluada como falsa, devolvemos la segunda. 








// console.log(productoSeleccionado && "El precio del producto es:" + precioDelProducto);





let monitor = "monitor";
let mouse = "mouse"
let precioMonitor = 60;
let precioMouse = 10;

const producto = prompt("Indica si queres comprar un monitor o un mouse");

producto === mouse && alert(`tenes que pagar ${precioMouse}`);
producto === monitor && alert(`tenes que pagar ${precioMonitor}`);

(producto !== monitor && producto !== mouse) 
  && alert("No elegiste ningun producto")