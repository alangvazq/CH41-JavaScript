// let today = new Date();

// if (today.getHours() >= 19) {
//   console.log("Buenos Noches");
// } else if (today.getHours() >= 12) {
//   console.log("Buenas Tardes");
// } else if (today.getHours() < 12) {
//   console.log("Buenas Días");
// }

//* Ejercicio 01 
// Estaciones del Año

let hoy = new Date();
let primaveraInicio = new Date('2024-3-20');
let primaveraFin = new Date('2024-6-21');

// Verano: inicia el 21 de junio y finaliza el 23 de septiembre.
let veranoInicio = new Date('2024-6-21');
let veranoFin = new Date('2024-9-23')

// Otoño: inicia el 23 de septiembre y finaliza el 21 de diciembre.

// Invierno: inicia el 21 de diciembre y finaliza el 20 de marzo.

if (hoy >= primaveraInicio && hoy <= primaveraFin){
  console.log("Primavera");
} else if (hoy )