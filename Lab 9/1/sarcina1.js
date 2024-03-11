const zileleSaptamanii = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
const element = document.createElement('h1');

document.body.appendChild(element);

document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    element.innerText = `${zileleSaptamanii[date.getDay()]}, ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
})