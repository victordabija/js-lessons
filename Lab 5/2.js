const a = Number(prompt("Introduceti primul numar"));
const b = Number(prompt("Introduceti al doilea numar"));
const c = Number(prompt("Introduceti al treilea numar"));

const produsul = function (x, y, z) {
    return x * y * z;
}

const average = function (x, y, z) {
    return (x + y + z) / 3;
}

const maximum = function (x, y, z) {
    return Math.max(z, y, z)
}

console.log(`Produsul: ${produsul(a, b, c)}`);
console.log(`Media: ${average(a, b, c)}`);
console.log(`Maximum: ${maximum(a, b, c)}`);
