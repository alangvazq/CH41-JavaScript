let titulo = document.getElementById("titutlo");
let txtName = document.getElementById("txtText");
let txtName02 = document.getElementById("txtText02");
let txtName03 = document.getElementById("txtText03");

let lista = document.getElementsByTagName("ul");
const listaAgrupada = document.getElementsByClassName("list-group-item");

const elemento = document.querySelector("ul > li");
console.log(elemento);

const elementos = document.querySelectorAll("ul > li");
console.log(elementos);

const elementos02 = document.querySelectorAll("ul > li:last-child");
console.log(elementos02);

for (let index = 0; index < listaAgrupada.length; index++) {
  console.log(listaAgrupada.item(index));
  if (index % 2 == 0) {
    listaAgrupada.item(index).innerHTML = index + ".";
  }
}

// console.log(lista.length);

// console.log(titulo);

console.log("listaAgrupada" + " " + listaAgrupada.length);

console.log(lista);
console.log(lista[0]);
console.log(lista.item(0));

console.log();

// Modificar el contenido en formato texto de la etiqueta
// titulo.innerText = "Generation";
// Leer contenido de formato texto de la etiqueta
// console.log(titulo.innerText);

txtName.addEventListener("blur", quitarEspacios);
txtName02.addEventListener("blur", quitarEspacios);
txtName03.addEventListener("blur", quitarEspacios);

function quitarEspacios(event) {
  event.preventDefault();
  const campo = event.target;

  console.log(`${campo.value}`);
  campo.value = campo.value.trim();

  if (campo.value.length < 3) {
    console.log("El campo no puede quedar vacío");
    campo.focus();
  }
  //   console.log(`${txtName.value}`);
}

titulo.innerHTML = "<strong> alangvazq </strong>";
// console.log();

let btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", mostrar, { once: true });

function mostrar(event) {
  event.preventDefault();
  let item = document.createElement("li");
  item.classList.add("list-group-item", "list-group-item-info");
  item.innerText = "Elemento de lista append";

  let item02 = item.cloneNode(true);
  item02.innerText = "Elemento de lista prepend";
  // let item02 = document.createElement("li");
  // item02.classList.add("list-group-item", "list-group-item-info");
  // item02.innerText = "A simple list02";

  //* before y after para agregar antes y despues
  lista[0].prepend(item02);
  lista[0].append(item);

  //lista[0].append(item);
  // console.log("btnMostrar click");
  //   lista[0].prepend(item);

  let listElement = item.cloneNode(true);
  listElement.innerText = "Primer Elemento de lista afterbegin";
  lista[1].insertAdjacentElement("afterbegin", listElement);

  let listElement02 = item.cloneNode(true);
  listElement02.innerText = "Ultimo Elemento de lista beforeend";
  lista[1].insertAdjacentElement("beforeend", listElement02);

  let listElement03 = item.cloneNode(true);
  listElement03.innerText = "Elemento previo de lista beforebegin";
  lista[1].insertAdjacentElement("beforebegin", listElement03);

  let listElement04 = item.cloneNode(true);
  listElement04.innerText = "Elemento posterior de lista afterend";
  lista[1].insertAdjacentElement("afterend", listElement04);

  let row = `<li class="list-group-item"> afterbegin y template string </li>`;
  lista[1].insertAdjacentHTML("afterbegin", row);
}

// btnMostrar.addEventListener("mouseover", function () {
//   console.log("Cursor por encima");
// });

window.addEventListener("load", function () {
  console.log("Página cargada");
});
