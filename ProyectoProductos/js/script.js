function getData() {
  const promesa = fetch("https://fakestoreapi.com/products/", {
    method: "GET",
  });
  console.log(promesa);
  promesa
    .then((response) => {
      response
        .json()
        .then((data) => {
          createCards(data);
        })
        .catch((error) => {
          console.log("Problema con el json" + error);
        });
    })
    .catch((err) => {
      console.log("Problema en la solicitud" + err);
    });
}

let cuerpoProductos = document.querySelector(".cuerpoProductos");

function createCards(products) {
  console.log(products.length);
  products.forEach((p) => {
    // console.log(p.id);

    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML += `
    <div class="card mx-auto" style="width: 18rem;">
      <img src="${
        p.image
      }"class="card-img-top p-3" alt="..." style="object-fit: contain; height: 200px;>
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description.slice(0, 100)}...</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Categoría: ${p.category}</li>
              <li class="list-group-item">Rating: ${p.rating.rate}</li>
              <li class="list-group-item">$${p.price}</li>
            </ul>
              <div class="card-body">
                <button type="button" class="btn btn-success">Comprar</button>
              </div>
        </div>
    </div>
  `;
    cuerpoProductos.appendChild(card);
  });
}

getData();
