const data = {
  id: 9,
  title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  price: 64,
  description:
    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  category: "electronics",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  rating: { rate: 3.3, count: 203 },
};

function getData() {
  /* Se crea la promesa con el constructor Promise
   Se recibe una función con dos parámetros, resolve y reject
   resolve: se ejecuta cuando la promesa se resuelve correctamente
   reject: se ejecuta cuando la promesa no se resuelve correctamente */
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error("Data is null"));
    } //* if
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
} //* getData

/* // * Se llama a la función getData
getData()
//* Se encadenan los métodos then y catch
//* then: se ejecuta cuando la promesa se resuelve correctamente
  .then((response) => console.log("Promesa cumplida", response))
  //* catch: se ejecuta cuando la promesa no se resuelve correctamente
  .catch((err) => console.log("Promesa rechazada", err.message)); */

//* Se crea una función asíncrona
//* Se llama a la función getData
//* Se espera a que la promesa se resuelva
async function fetchData() {
  const response = await getData();
  console.log("Promesa cumplida", response);
}

fetchData();
