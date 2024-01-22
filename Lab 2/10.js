const a = +prompt("A: ");
const b = +prompt("B: ");

let primulDivizibil = a % 3 === 0 ? a : a + (3 - a % 3);
let ultimulDivizibil = b - b % 3;

let numarDivizibile = (ultimulDivizibil / 3) - (primulDivizibil / 3) + 1;

console.log(numarDivizibile);