const name = document.getElementById("name");

const prod1 = document.getElementById("prod1");
const price1 = document.getElementById("pret1");
const cant1 = document.getElementById("cant1");

const prod2 = document.getElementById("prod2");
const price2 = document.getElementById("pret2");
const cant2 = document.getElementById("cant2");

const btn = document.getElementById("btn");
const results = document.getElementById("result");
const clientName = document.getElementById("client-name");
const formContainer = document.querySelector('.form-container');

function getValue(price, quantity) {
    return price.value * quantity.value;
}

btn.addEventListener('click', (e) => {

    // facem ca sa dispara formularul si sa apara tabelul
    formContainer.style.display = 'none';
    results.style.display = 'flex';

    clientName.innerText = (`Client: ${name.value}`);
    const table = document.createElement("table");

    const tableCaption = document.createElement("caption");

    tableCaption.innerText = "Produse achizitionate";

    const row1 = document.createElement("tr");
    const cellHeaderProd = document.createElement("th");
    const cellHeaderPrice = document.createElement("th");
    const cellHeaderCant = document.createElement("th");
    const cellHeaderValue = document.createElement("th");

    cellHeaderProd.innerText = "Produs";
    cellHeaderPrice.innerText = "Pret";
    cellHeaderCant.innerText = "Cantitate";
    cellHeaderValue.innerText = "Valoare";

    row1.appendChild(cellHeaderProd);
    row1.appendChild(cellHeaderPrice);
    row1.appendChild(cellHeaderCant);
    row1.appendChild(cellHeaderValue);

    const row2 = document.createElement("tr");
    const cellProd1 = document.createElement("th");
    const cellPrice1 = document.createElement("td");
    const cellCant1 = document.createElement("td");
    const cellValue1 = document.createElement("td");

    cellProd1.innerText = prod1.value;
    cellPrice1.innerText = price1.value;
    cellCant1.innerText = cant1.value;
    cellValue1.innerText = getValue(price1, cant1);

    row2.appendChild(cellProd1);
    row2.appendChild(cellPrice1);
    row2.appendChild(cellCant1);
    row2.appendChild(cellValue1);

    const row3 = document.createElement("tr");
    const cellProd2 = document.createElement("th");
    const cellPrice2 = document.createElement("td");
    const cellCant2 = document.createElement("td");
    const cellValue2 = document.createElement("td");

    cellProd2.innerText = prod2.value;
    cellPrice2.innerText = price2.value;
    cellCant2.innerText = cant2.value;
    cellValue2.innerText = getValue(price2, cant2);

    row3.appendChild(cellProd2);
    row3.appendChild(cellPrice2);
    row3.appendChild(cellCant2);
    row3.appendChild(cellValue2);

    table.appendChild(tableCaption);
    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    const sum = getValue(price1, cant1) + getValue(price2, cant2);

    const totals = document.createElement("h3");
    totals.innerText = `Suma totala achitata: ${sum}`;

    results.appendChild(table);
    results.appendChild(totals);
})