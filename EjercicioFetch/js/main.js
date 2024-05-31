const itemsContainer = document.querySelector("#list-items");
function addItem(item) {
  const itemHTML =
    '<div class="card" style="width: 18rem;">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">' +
    item.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    item.pantone_value +
    "</p>\n" +
    '        <div style="background:' +
    item.color +
    ';">' +
    item.color +
    "</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br/>";

  itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
} //addItem

// after fetching the colors, call addItem with each color
function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")
  //* El primer then maneja la respuesta de la solicitud HTTP
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("COLORS", JSON.stringify(data.data));
      console.log(data.data);
      data.data.forEach((element) => {
        addItem(element);
      });
    })
    .catch((error) => {
      console.log("Problema con fetch", error);
    });
} //fetchColorsList

fetchColorsList();

function loadColorsFromStorage() {
  const datos = JSON.parse(localStorage.getItem("COLORS"));

  datos.forEach((element) => {
    addItem(element);
  });
  console.log(datos);
} //loadColorsFromStorage

loadColorsFromStorage();

itemsContainer.insertAdjacentHTML(
  "afterbegin",
  "<button id='btnClear'>Limpiar</button>"
);

const btnClear = document.getElementById("btnClear");

btnClear.addEventListener("click", () => {
  localStorage.clear();
});

itemsContainer.insertAdjacentHTML(
  "afterbegin",
  "<button id='btnLoad'>Cargar</button>"
);

const btnLoad = document.getElementById("btnLoad");

btnLoad.addEventListener("click", () => {
  fetchColorsList();
});