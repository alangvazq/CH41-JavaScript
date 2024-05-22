function calificaciones(num) {
  num = Math.floor(num);

  switch (num) {
    case 10:
      console.log("MB");
      break;
    case 9:
    case 8:
      console.log("B");
      break;
    case 7:
    case 6:
      console.log("S");
      break;
    default:
      console.log("NA");
      break;
  }
}

console.log(calificaciones(7));
