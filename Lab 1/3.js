const a6 = 5 % 3; // restul împărțirii
const a7 = 3 % 5; // restul împărțirii
const a8 = 5 + "3"; // concatenare
const a9 = "5" - 3; // la scădere se face conversie în number
const a10 = 75 + "px"; // concatenare

const show = (arg) => {
    alert(`Value: ${arg} Type: ${typeof arg}`);
}

show(a6);
show(a7);
show(a8);
show(a9);
show(a10);