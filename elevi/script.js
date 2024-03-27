const students = {
    w2132: [
        {prenume: 'Dorina', nume: 'Bercaru', patronimic: 'Mihail'},
        {prenume: 'Constantin', nume: 'Bulai', patronimic: 'Petru'},
        {prenume: 'Sabrina', nume: 'Caraghiaur', patronimic: 'Serghei'},
        {prenume: 'Amina', nume: 'Carauș', patronimic: 'Sergiu'},
        {prenume: 'Cătălin', nume: 'Chistol', patronimic: 'Eduard'},
        {prenume: 'Ștefan', nume: 'Copăceanu', patronimic: 'Ștefan'},
        {prenume: 'Victor', nume: 'Dabija', patronimic: 'Leontie'},
        {prenume: 'Dmitrii', nume: 'Dzîc', patronimic: 'Oleg'},
        {prenume: 'Ștefan', nume: 'Frunză', patronimic: 'Mihail'},
        {prenume: 'Gheorghe-Cezar', nume: 'Galea', patronimic: 'Gheorghe'},
        {prenume: 'Gabriela', nume: 'Gîrlea', patronimic: 'Ghenadi'},
        {prenume: 'Andrei', nume: 'Ignatov', patronimic: 'Alexandru'},
        {prenume: 'Ian', nume: 'Iovița', patronimic: 'Vadim'},
        {prenume: 'Alex', nume: 'Ivasenco', patronimic: 'Veaceslav'},
        {prenume: 'Alexandru', nume: 'Lari', patronimic: 'Iulian'},
        {prenume: 'Ionela', nume: 'Lungu', patronimic: 'Ion'},
        {prenume: 'Valentin', nume: 'Medvețchi', patronimic: 'Octavian'},
        {prenume: 'Ion', nume: 'Mîrza', patronimic: 'Grigore'},
        {prenume: 'Vica', nume: 'Morari', patronimic: 'Ion'},
        {prenume: 'Elena', nume: 'Munteanu', patronimic: ''},
        {prenume: 'Gabriela', nume: 'Oloeri', patronimic: 'Veaceslav'},
        {prenume: 'Ioan', nume: 'Plămădeală', patronimic: 'Iacob'},
        {prenume: 'Victor', nume: 'Ponicarcic', patronimic: 'Vasile'},
        {prenume: 'Valeria', nume: 'Popova', patronimic: 'Mihail'},
        {prenume: 'Vasile', nume: 'Popovici', patronimic: 'Ion'},
        {prenume: 'Vlad', nume: 'Prangati', patronimic: 'Victor'},
        {prenume: 'Ionuț', nume: 'Rusnac', patronimic: 'Aureliu'},
        {prenume: 'Nicolae', nume: 'Sîrbu', patronimic: 'Nicolae'},
        {prenume: 'Nicolae', nume: 'Sîrghi', patronimic: 'Nicolae'},
        {prenume: 'Bogdan', nume: 'Sorocovici', patronimic: 'Ion'},
        {prenume: 'Aura', nume: 'Țurcanu', patronimic: 'Radu'}
    ],
    w2312: [
        {prenume: 'Nadejda', nume: 'Antonii', patronimic: ''},
        {prenume: 'Valeria', nume: 'Baciu', patronimic: 'Alexandru'},
        {prenume: 'Nichita', nume: 'Bencheci', patronimic: 'Marin'},
        {prenume: 'Maxim', nume: 'Boțan', patronimic: 'Tudor'},
        {prenume: 'Andreea', nume: 'Bulbaș', patronimic: 'Andrei'},
        {prenume: 'Albert', nume: 'Bulmaga', patronimic: 'Iurie'},
        {prenume: 'Carolina', nume: 'Caproș', patronimic: 'Alexandru'},
        {prenume: 'Natalia', nume: 'Ceban', patronimic: 'Serghei'},
        {prenume: 'Dorin', nume: 'Ceban', patronimic: 'Eugeniu'},
        {prenume: 'Sebastian', nume: 'Ciburciu', patronimic: 'Mihail'},
        {prenume: 'Veniamin', nume: 'Costandoi', patronimic: 'Viorel'},
        {prenume: 'Teodor', nume: 'Danu', patronimic: 'Victor'},
        {prenume: 'Melania', nume: 'Gobjila', patronimic: 'Serghei'},
        {prenume: 'Vladislav', nume: 'Gorbatiuc', patronimic: 'Eduard'},
        {prenume: 'Cristian', nume: 'Guțu', patronimic: 'Igor'},
        {prenume: 'Elizaveta', nume: 'Iacovlev', patronimic: 'Victor'},
        {prenume: 'Andrei', nume: 'Kolin', patronimic: 'Piotr'},
        {prenume: 'Maria', nume: 'Lebediuc', patronimic: 'Boris'},
        {prenume: 'Marin', nume: 'Melnic', patronimic: 'Anatolie'},
        {prenume: 'Daria', nume: 'Morozova', patronimic: 'Daniil'},
        {prenume: 'Maria-Carina', nume: 'Năstase', patronimic: 'Adrian'},
        {prenume: 'Loredana', nume: 'Neculce', patronimic: 'Valentin'},
        {prenume: 'Ion', nume: 'Paierele', patronimic: 'Alexandru'},
        {prenume: 'Eugen', nume: 'Popa', patronimic: 'Serghei'},
        {prenume: 'Iulian', nume: 'Procopii', patronimic: 'Eduard'},
        {prenume: 'Dionis', nume: 'Roșca', patronimic: 'Vitalie'},
        {prenume: 'Mihai', nume: 'Rotaru', patronimic: 'Sergiu'},
        {prenume: 'Sandu', nume: 'Sanduţa', patronimic: 'Tudor'},
        {prenume: 'Vlad', nume: 'Savan', patronimic: 'Nicolai'},
        {prenume: 'Ionela', nume: 'Stepanciuc', patronimic: 'Vladimir'},
        {prenume: 'Nicoleta', nume: 'Șcerbataia', patronimic: 'Vasile'},
        {prenume: 'Vlada', nume: 'Zaharadji', patronimic: 'Veaceslav'}
    ],
    w2311: [
        {prenume: 'Vladislav', nume: 'Aftenev', patronimic: 'Sergiu'},
        {prenume: 'Robert', nume: 'Boldescu', patronimic: 'Andrei'},
        {prenume: 'Ana-Alberta', nume: 'Borcan', patronimic: ''},
        {prenume: 'Bogdan', nume: 'Bordei', patronimic: 'Valentin'},
        {prenume: 'Liviu', nume: 'Bordeianu', patronimic: 'Ruslan'},
        {prenume: 'Alexandru', nume: 'Budeanu', patronimic: 'Alexandru'},
        {prenume: 'Vlad', nume: 'Bunacalea', patronimic: 'Vladimir'},
        {prenume: 'Ana', nume: 'Buruianî', patronimic: 'Maxim'},
        {prenume: 'Laura', nume: 'Cecan', patronimic: 'Igor'},
        {prenume: 'Vladislav', nume: 'Ciocan', patronimic: 'Mihail'},
        {prenume: 'Mihaela', nume: 'Ciubuc', patronimic: 'Andrian'},
        {prenume: 'Ruslana', nume: 'Cîrlan', patronimic: 'Victor'},
        {prenume: 'Lucian', nume: 'Culinca', patronimic: 'Ruslan'},
        {prenume: 'Leonard', nume: 'Curtiș', patronimic: 'Anatolie'},
        {prenume: 'Alexandr', nume: 'Iurii', patronimic: 'Vadim'},
        {prenume: 'Sergiu', nume: 'Leanca', patronimic: 'Sergiu'},
        {prenume: 'Eduard', nume: 'Lungu', patronimic: 'Ion'},
        {prenume: 'Mădălina', nume: 'Mihalache', patronimic: 'Igor'},
        {prenume: 'Daniela', nume: 'Mîrca', patronimic: 'Iurie'},
        {prenume: 'Cătălina', nume: 'Nercaş', patronimic: 'Arcadii'},
        {prenume: 'Cristian', nume: 'Nica', patronimic: 'Alexandru'},
        {prenume: 'Maria', nume: 'Odainîi', patronimic: 'Anatoli'},
        {prenume: 'Eugeniu', nume: 'Poberejnîi', patronimic: 'Sergiu'},
        {prenume: 'Vladimir', nume: 'Raducan', patronimic: 'Vladimir'},
        {prenume: 'Sebastian', nume: 'Rusu', patronimic: 'Veaceslav'},
        {prenume: 'Denis', nume: 'Sevacov', patronimic: 'Anatolie'},
        {prenume: 'Andreea', nume: 'Sîrbu', patronimic: 'Vasilii'},
        {prenume: 'Igor', nume: 'Sîrbu', patronimic: 'Vasile'},
        {prenume: 'Damian', nume: 'Tofăneasă', patronimic: 'Nicolae'},
        {prenume: 'Vladislav', nume: 'Tudose', patronimic: 'Gheorghe'},
        {prenume: 'Magdalena', nume: 'Zabrian', patronimic: 'Dragomir'},
        {prenume: 'Liudmila', nume: 'Zugravu', patronimic: 'Daniel'}
    ]
}

const createLabel = (id, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerText = text;

    return label;
}

const createElevi = (grupa) => {
    const elevi = students[grupa];

    const table = document.querySelector('tbody');

    elevi.forEach(elev => {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');

        const input = document.createElement('input');
        input.id = `${elev.prenume}-label`;
        input.type = 'checkbox';
        input.checked = true;
        td1.appendChild(input);

        const td2 = document.createElement('td');
        td2.className = 'nume';
        td2.appendChild(createLabel(`${elev.prenume}-label`, elev.nume));

        const td3 = document.createElement('td');
        td3.className = 'prenume';
        td3.appendChild(createLabel(`${elev.prenume}-label`, elev.prenume));

        const td4 = document.createElement('td');
        td4.className = 'patronimic';
        td4.appendChild(createLabel(`${elev.prenume}-label`, elev.patronimic));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    });
}

const generate = document.getElementById('generate');
const elevElement = document.getElementById('elev');

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generate.addEventListener('click', () => {
    const eleviElements = document.querySelectorAll('tr');
    const elevi = [];

    for (let i = 1; i < eleviElements.length; i++) {
        const checkbox = eleviElements[i].querySelector('td > input');
        const nume = eleviElements[i].querySelector('td.nume').innerText;
        const prenume = eleviElements[i].querySelector('td.prenume').innerText;
        const patronimic = eleviElements[i].querySelector('td.patronimic').innerText;

        if (checkbox.checked) {
            const numeElev = `${nume} ${prenume} ${patronimic}`;
            elevi.push(numeElev);
        }
    }

    const random = getRandom(0, elevi.length - 1);
    elevElement.innerText = elevi[random];
});