import validarEmail from "./validaciones.js";
import { validarCURP, validarCP } from "./validaciones.js";

// const vEmail = require("./validaciones.js");

// let email = "jperezhotmail.com";
// console.log(validarEmail(email) ? "Correo válido" : "Correo incorrecto");

let txtEmail = document.getElementById("txtEmail");
let txtCurp = document.getElementById("txtCurp");
let datosForm = document.getElementById("datosForm");
// let alert = document.getElementById("alert");

txtEmail.addEventListener("blur", (e) => {
  e.preventDefault();
  //   alert.style.display = "none";
  if (!validarEmail(txtEmail.value)) {
    // alert.innerHTML = "Favor de corregir el correo electrónico";
    datosForm.insertAdjacentHTML(
      "beforeend",
      `<div class="alert alert-danger" role="alert" id="alert">
    Email
  </div>`
    );
    txtEmail.style.border = "red medium solid";
    // alert.style.display = "block";
  }
});

txtCurp.addEventListener("blur", (e) => {
  e.preventDefault();
  //   alert.style.display = "none";
  if (!validarCURP(txtCurp.value)) {
    // alert.innerHTML += "Favor de corregir el CURP";
    datosForm.insertAdjacentHTML(
      "beforeend",
      `<div class="alert alert-danger" role="alert" id="alert">
      CURP
    </div>`
    );
    txtCurp.style.border = "red medium solid";
    // alert.style.display = "block";
  }
});
