const m = require("./validaciones.js");

test("Sumar dos números 3+2=5", () => {
  expect(m.suma(3, 2)).toBe(5);
});

test("Sumar dos números 5+7=12", () => {
  expect(m.suma(5, 7)).toBe(12);
});

test("Multiplicar dos números 9*9=81", () => {
  expect(m.multiplica(9, 9)).toBe(81);
});

test("Multiplicar dos números 9*9=81", () => {
  expect(m.multiplica(9, 9)).toBe(81);
});

test("Validar correo electrónico correcto jperez@hotmail.com",
  () => {
    expect(m.validarEmail("jperez@hotmail.com")).toBeTruthy();
  });

test("Validar correo electrónico erróneo jperez@hotmail.com",
  () => {
    expect(m.validarEmail("jperezhotmail.com")).toBeFalsy();
  });
