/**
 * idee este ca faci doua array-uri cu nume si prenume si prin random primesti cate un element din ea si formezi o persoana
 * cu numarul de telefon doar folosind random primesc cifre si creez numarul de telefon
 */


const table = document.getElementById('table-body');
const button = document.getElementById('btn');
const nrPersoane = document.getElementById('nr-persoane')

// am scris si Popova, dar daca nimereste cu prenume de baiat ap takoe
const nume = ["Popovici", "Dabija", "Poberejnii", "Eminescu", "Cepraga"];
const prenume = ["Valerica", "Ion", "Vasile", "Carolina", "Dmitrii", "Andrei"];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', () => {
    // curatim tabelul, ca sa nu fie sa se adauga persoane, dar mereu sa fie noi daca apasam pe buton
    table.innerHTML = "";

    for (let i = 0; i < parseInt(nrPersoane.value); i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');

        cell1.innerText = nume[getRandom(0, nume.length - 1)];
        cell2.innerText = prenume[getRandom(0, prenume.length - 1)];
        cell3.innerText = `+373-${getRandom(10, 99)}-${getRandom(100, 999)}-${getRandom(100, 999)}`;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    }
});