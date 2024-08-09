`use strict`;

let cartaturi = 2;
let cartaraqam = 10;

switch (cartaturi) {
  case 1:
    console.log(cartaturi = `Gisht`);
    break;

  case 2:
    console.log((cartaturi = `Olma`));
    break;

  case 3:
    console.log((cartaturi = `Chillak`));
    break;

  case 4:
    console.log((cartaturi = `Qarga`));
    break;

  default:
    console.log(`Bunday karta turi yuq`);
}
switch (cartaraqam) {
  case 6:
    console.log((cartaraqam = `Olti`));

    break;
  case 7:
    console.log((cartaraqam = `Yetti`));
    break;
  case 8:
    console.log((cartaraqam = `Sakkiz`));

    break;
  case 9:
    console.log((cartaraqam = `Tuqqiz`));

    break;
  case 10:
    console.log((cartaraqam = `O'n`));

    break;
  case 11:
    console.log((cartaraqam = `Valet`));

    break;
  case 12:
    console.log((cartaraqam = `Dama`));

    break;
  case 13:
    console.log((cartaraqam = `Qizol`));

    break;
  case 14:
    console.log((cartaraqam = `Tuz`));

    break;
  default:
    // cartaraqam = 'Bunday karta soni yuq'
    console.log(`Xatolik`);
}

console.log(cartaturi + " " + cartaraqam);
