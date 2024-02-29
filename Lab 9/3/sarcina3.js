alert(`Bine ati venit!`);

const name = prompt(`Numele dvs.:`);

alert(`Introdu culorile tale preferate!`);

const color1 = prompt();
const color2 = prompt();
const color3= prompt();

const paragraph = document.createElement("p");
const color1Element = document.createElement("span");
const color2Element = document.createElement("span");
const color3Element = document.createElement("span");
const div = document.createElement("div");

addEventListener('DOMContentLoaded', () => {
    paragraph.innerText = (`Salut, ${name}`);

    color1Element.style.color = color1;
    color2Element.style.color = color2;
    color3Element.style.color = color3;

    color1Element.innerText = color1;
    color2Element.innerText = color2;
    color3Element.innerText = color3;

    div.appendChild(color1Element);
    div.appendChild(color2Element);
    div.appendChild(color3Element);

    document.body.appendChild(paragraph);
    document.body.appendChild(div);
})