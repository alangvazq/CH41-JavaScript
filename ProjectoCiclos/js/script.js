//* Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan.
// Create an array that has these three names in order.

let names = ["Sofia", "David", "Juan"];

// Part 2
// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller. What does the queue look like?

names.shift();
names.push("Sara", "Augustin");

// Part 3
// It turns out David was saving a spot for his friend Renata.
// She shows up and goes behind him in the line.
// One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

names.splice(2, 0, "Renata");
names.push("Elena");

console.log(names);

//* Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// let aste = "*";
// let cadenaVacia = "";

// for (let index = 0; index < 5; index++) {
//   for (let index = 0; index < 1; index++) {
//     cadenaVacia += aste;
//     console.log(cadenaVacia);
//   }
// }

let asterisco;
const c = "*";
const max = 5;

for (let ren = 1; ren <= max; ren++) {
  asterisco = "";
  for (let col = 1; col <= ren; col++) {
    asterisco += c;
  }
  console.log(asterisco);
}

//* Exercise #3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

let xValue = 5;

do {
  console.log(xValue);
  xValue -= 0.5;
} while (xValue > 0);

// - Print all the odd numbers between 1 - 100.

for (let index = 0; index < 100; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]

let n = 6;
let inicio = 1;

do {
  console.log(`[${inicio}]`);
  inicio++;
} while (inicio <= n);

// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

let n2 = 19;
let start = 1;
let cont = 0;

while (start <= n2) {
  cont += start;
  start++;
}

console.log(cont);
