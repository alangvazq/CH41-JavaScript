//   console.log("Hola desde el script");
console.log("Hola desde el script");
//   Mensajes de error, advertencia e información
console.error("Esto es un error");
console.warn("Esto es una advertencia");
console.info("Esto es un mensaje de información");

//   Grupo de mensajes
console.group("Grupo 1");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();

// Alertas
//   alert("Esto es una alerta");

function saludar() {
  alert("Hola desde la función");
}

// Ejercicios
// A
// Utilizar la funcion de alerta JavaScript para mostrar mensajes
// alert("Mensaje de alerta");

// B
// Utilizar la funcion JS console.log para registrar mensajes
console.log("Mensaje de consola");

// C
// Invocar funciones definidas JS mediante la propiedad onclick de las etiquetas HTML
function mensaje() {
  alert("Mensaje de función");
}

// Jerarquia
// Paréntesis: ()
// Exponenciación: **
// Multiplicación: *, División: /, Módulo: %
// Suma: +, Resta: -
// Operadores relacionales: <, <=, >, >=
// Igualdad: ==, ===, !=, !==
// Operadores lógicos: &&, ||
// Operador ternario: ? :
// Asignación: =, +=, -=, *=, /=, %=, **=, etc

let cadena= "42";
let numero= parseInt(cadena);

console.log(numero);

typeof cadena
typeof numero
