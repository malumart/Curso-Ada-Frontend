//ejercicio 34

let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;

/// Objetivos: 800 pesos o más de ingresos, menos de 400 pesos de impuestos, bono si se ganan 600 pesos de ganancias justo

console.log(`Objetivo de ingresos:`, ingresos >= 800);
console.log(`Objetivo de impuestos:`, impuestos < 400);
console.log(`Bono:`, ganancias == 600);


//ejercicio 36

let numero1 = 10;
let numero2 = 20;
console.log(`La variable numero1 y numero2 tienen el mismo valor:`, numero1 == numero2);
console.log(`La variables numero1 y numero2 son distintas:`, numero1 != numero2);


//ejercicio 37

let promedioParaAprobar = 6;
let promedioDelAlumno = 4;

let puntos = promedioParaAprobar - promedioDelAlumno;

console.log(`El alumno tiene un promedio mayor o igual que el requerido:`, promedioDelAlumno >= promedioParaAprobar);
console.log(`Al alumno le faltaron ${puntos} para aprobar`);