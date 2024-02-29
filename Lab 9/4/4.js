const table = document.getElementById('table-body');
const button = document.getElementById('btn');
const name = document.getElementById('name');
const nota1 = document.getElementById('nota-1');
const nota2 = document.getElementById('nota-2');

function media(a, b) {
    return (a + b) / 2;
}

button.addEventListener('click', () => {
    // facem ca tabelul sa apara pe ecran, in style el are by default display: none
    document.querySelector('.table').style.display = 'block';

    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    const notaMedie = media( +nota1.value, +nota2.value);

    cell1.innerText = name.value;
    cell2.innerText = notaMedie;
    cell3.innerText = notaMedie >= 5 ? "Da" : "Nu";

    name.value = "";
    nota1.value = "";
    nota2.value = "";

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    table.appendChild(row);
});