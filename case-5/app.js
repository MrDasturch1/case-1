'use strict'


let A = 13;
let B = 6;
let amal = 1;
let natija;

switch (amal) {
    case 1:

        natija = A + B;
        console.log(`${A} + ${B} = ${natija}`);
        break;
    case 2:

        natija = A - B;
        console.log(`${A} - ${B} = ${natija}`);
        break;
    case 3:
        natija = A * B;
        console.log(`${A} * ${B} = ${natija}`);
        break;
    default:
        console.log("Xato amal");
}