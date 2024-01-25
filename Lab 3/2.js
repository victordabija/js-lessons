const number = parseInt(prompt("Introduceti un numar de la 0 la 10"));

if (isNaN(number) || number < 0 || number > 10) {
    alert("Error");
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


if (getRandomInt(0, 10) === number) {
    alert("Esti norocos!");
} else  {
    alert("Mai incearca");
}

document.write(`<table>`)

for (let i = 1; i <= 8; i++) {
    document.write(`<tr>`)
    for (let j = i; j <= 8; j++) {
        if (j % 2 === 0) {
            document.write(`<td class="alb"></td>`)
        } else {
            document.write(`<td class="negru"></td>`)
        }
    }
    document.write(`</tr>`)
}

document.write(`</table>`)
