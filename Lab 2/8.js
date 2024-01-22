const n = (+prompt("Introduceti un numar negativ: ")) * -1;
const sum = (n / 2) * (-1 + (-n)) + n;
const average = (sum / (n - 1));

alert(n < 0 ? "Introduceti un numar negativ" : average);
