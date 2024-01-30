const a = Number(prompt("Introduceti primul numar"));
const b = Number(prompt("Introduceti al doilea numar"));
const c = Number(prompt("Introduceti al treilea numar"));

function suma(x, y, z) {
    return x + +y + z;
}

function media(x, y, z) {
    return (x + y + z) / 3;
}

function min(x, y, z) {
    return Math.min(x, y, z);
}

console.log(`Suma: ${suma(a, b, c)}`);
console.log(`Media: ${media(a, b, c)}`);
console.log(`Minimum: ${min(a, b, c)}`);
