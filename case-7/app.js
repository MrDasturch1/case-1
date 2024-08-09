"use strict";

let a = 2,
  x = 100;

switch (a) {
  case 1:
    console.log(`${x} kilogramm = ${x} kilogramm`);

    break;
  case 2:
    console.log(`${x} milligram = ${x * (1 / 100000)} kilogramm`);

    break;
  case 3:
    console.log(`${x} gram = ${x * (1 / 1000)} kilogramm`);

    break;
  case 4:
    console.log(`${x} tonna = ${x * 1000} kilogramm`);

    break;
  case 5:
    console.log(`${x * 100} kilogramm`);

    break;
  default:
    console.log(`Malumot xato`);
    break;
}
