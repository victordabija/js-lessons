document.addEventListener('DOMContentLoaded', () => {
    alert(`Bine ati venit!`);

    const name = prompt(`Numele dvs.:`, 'Ionescu');

    alert(`Introdu culorile tale preferate!`);

    const color1 = prompt();
    const color2 = prompt();
    const color3= prompt();

    const paragraph = document.createElement("p");
    const favorites = document.createElement("p");
    const color1Element = document.createElement("span");
    const color2Element = document.createElement("span");
    const color3Element = document.createElement("span");
    const div = document.createElement("div");

    paragraph.innerText = (`Salut, ${name}`);
    favorites.innerText = 'Culorile tale preferate sunt: ';

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
    document.body.appendChild(favorites);
    document.body.appendChild(div);
})