// obtinem absolut toate variabtele de raspuns dupa clasa
const raspunsuri = document.querySelectorAll('.answer');
const btn = document.getElementById('btn');

let punctaj = 0;

btn.addEventListener('click', () => {

    // traversam fiecare raspuns
    raspunsuri.forEach((raspuns) => {

        // verificam daca raspunsul este adevarat
        // in html este pus value = 1 pentru raspunsurile corecte
        // noi doar trebuie sa verificam daca value este 1 si daca a fost selectata anume aceasta optiune
        if (raspuns.value === "1" && raspuns.checked === true) {
            punctaj += 10;
        }
    })

    alert(`Ati obtinut ${punctaj} puncte`);
});