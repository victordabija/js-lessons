const a = +prompt("A: ");
const b = +prompt("B: ");
const c = +prompt("C: ");

const exista = (a + b > c && a + c > b && c + b > a);

const perimetru = a + b + c;
const semiperimetru = perimetru / 2;
const aria = Math.sqrt(semiperimetru * (perimetru - a) * (perimetru - b) * (perimetru - c));

const isoscel = (a === b || b === c || a === c);
const echilateral = (a === b && a === c);

const ipotenuza = Math.max(a, b, c);
const cateta1 = ipotenuza === a ? b : (ipotenuza === b ? a : a);
const cateta2 = ipotenuza === a ? c : (ipotenuza === b ? c : b);

const dreptunghic = (ipotenuza ** 2 === (cateta2 ** 2 + cateta1 ** 2));

const triunghi = (exista) ?
    (echilateral ? "Este un triunghi echilateral" :
        (isoscel ? "Este un triunghi isoscel" :
            (dreptunghic ? "Este un triunghi dreptunghic" : "Este un triunghi scalen")))
    : false;

const text = triunghi ? `Aria: ${aria.toFixed(2)} <br> Perimetrul: ${perimetru}` : '';

document.write(triunghi ? triunghi + "<br>" : "Așa triunghi nu există");
document.write(text)
