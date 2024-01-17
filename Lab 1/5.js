const height = Number(prompt('Inaltimea cilindrului: '));
const diameter = Number(prompt('Diametrul cilindrului: '));

const v = Math.PI * (diameter / 2) ** 2 * height;

alert(`Volumul cilindrului: ${v.toFixed(2)}`);