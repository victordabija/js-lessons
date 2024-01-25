const productNumber = parseInt(prompt("Introduceti numarul produsului: "));
const cantitateaProdusului = parseInt(prompt("Introduceti cantitatea: "));

const products = {
    1: 2.98,
    2: 4.5,
    3: 9.98,
    4: 4.49,
    5: 6.87
}

if (productNumber in products && cantitateaProdusului >= 1) {
    alert(`Suma: ${cantitateaProdusului * products[productNumber]} $`);
} else {
    alert("Error");
}

