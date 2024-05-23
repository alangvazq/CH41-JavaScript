const marcas = ["HP", "Dell", "Lenovo", "Toshiba", "Acer", "Asus"];

// marcas[6] = "VAIO";
marcas[3] = "Gateway";

//* Método para agregar elemento al final
marcas.push("VAIO");
marcas.push("MSI");

//* Quita el último elemento
// console.log(marcas.pop());

//* Agregar al principio
marcas.unshift("Toshiba");

console.log(marcas);

console.log(marcas[3]);
console.log(marcas[6]);

console.log(marcas.length);

//* Unir y convertir a cadena
let strMarcas = marcas.join(", ");
console.log(strMarcas);

//* Separar string y convertir a array
let newMarcas = strMarcas.split(", ");
console.log(newMarcas);

//* Ordenar números
let numeros = [100, 5, 7, 631, 315, 7, 8];

console.log(numeros.sort((a, b) => a - b));
console.log(marcas.sort((a, b) => a.length - b.length));

//* Regresa como cadena la posición indicada
//* console.log(typeof(newMarcas.at(0)));

//* Bucle for
// for (let cont = 0; cont < newMarcas.length; cont++) {
//   console.log(`${cont}. ${newMarcas[cont]}`);
// }

// for (let marca of marcas) {
//     console.log(marca);
// }

//* Bucle While

// let cont = 0;
// while (cont < newMarcas.length) {
//   console.log(`${cont}. ${newMarcas[cont]}`);
//   cont++;
// }

// cont = 0;
// while (cont < 100) {
//   console.log(cont);
//   cont += 5;
// }

let cont = 0;
do {
  console.log(`${cont}. ${newMarcas[cont]}`);
  cont++;
} while (cont < newMarcas.length);

cont = 0;
do {
  console.log(cont);
  cont += 5;
} while (cont < 100);

//* For each

newMarcas.forEach((marca, index) => {
    console.log(`${index}. ${marca}`);
});