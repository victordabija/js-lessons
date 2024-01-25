const productNumber = parseInt(prompt("Introduceti numarul produsului: "));
const cantitateaProdusului = parseInt(prompt("Introduceti cantitatea: "));

let suma;

switch (productNumber) {
    case 1:
        suma = cantitateaProdusului * 2.98;
        break;
    case 2:
        suma = cantitateaProdusului * 4.5;
        break;
    case 3:
        suma = cantitateaProdusului * 9.98;
        break;
    case 4:
        suma = cantitateaProdusului * 4.49;
        break;
    case 5:
        suma = cantitateaProdusului * 6.87;
        break;
}

if (suma) {
    alert(`Suma: ${suma} $`);
} else {
    alert("Error");
}

