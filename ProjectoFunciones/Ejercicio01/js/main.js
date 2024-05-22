console.log(suma(1, 2));
console.log(multiplicar(5, 2));

function suma(a, b) {
  let c = a + b;
  return c;
}

function multiplicar(a, b) {
  let c = a * b;
  return c;
}

//   Función tipo expesión
const resta = function (a, b) {
  return a - b;
};

console.log(resta(40, 60));

const dividir = (a, b) => a + b;

let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());

//* Exercise #1
// Maria has to calculate the cost of her payments for the month.
// For every transation there is a $3 fee and a 0.1% (0.01) interest fee.
// Can you help her calculate her costs?

// Return the value of what she should be paying.

// let cantidadTransacciones = parseInt(prompt("Cantidad de transacciones: "));
// let montoTransacciones = parseFloat(
//   prompt("Monto total de las transacciones: ")
// );

let cantidadTransacciones = 41;
let montoTransacciones = 15460.5;
let tarifa = 3;
let interes = 0.01;

function calcularCosto(cantidadTransacciones, montoTransacciones) {
  let costoTarifa = tarifa * cantidadTransacciones;
  let costoInteres = montoTransacciones * interes;
  let costoTotal = costoTarifa + costoInteres;
  return costoTotal;
}

console.log(calcularCosto(cantidadTransacciones, montoTransacciones));

//* Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends.
// The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}.
// Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

function birth(
  nombre01,
  nacimiento01,
  nombre02,
  nacimiento02,
  nombre03,
  nacimiento03
) {
  let hoy = new Date();
  let anio = hoy.getFullYear();
  let edad = anio - nacimiento01;
  let edad02 = anio - nacimiento02;
  let edad03 = anio - nacimiento03;
  return `Welcome ${nombre01}, you are ${edad}. Welcome ${nombre02}, you are ${edad02}. Welcome ${nombre03}, you are ${edad03}`;
}

console.log(birth("Hugo", 1990, "Paco", 1980, "Luis", 1995));

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

function mesajeAprobado(studentScore) {
  if (studentScore >= 5 && studentScore <= 8) {
    return false;
  } else if (studentScore > 8 && studentScore < 11) {
    return console.log("Excellent");
  } else if (studentScore == 11) {
    return console.log("Perfect");
  }
}

console.log(mesajeAprobado(11));
