const exchangeRates = {
    USD: { title: "United States Dollar", USD: 1, EUR: 0.84, GBP: 0.73, MDL: 17.61 },
    EUR: { title: "Euro", USD: 1.19, EUR: 1, GBP: 0.86, MDL: 19.12 },
    GBP: { title: "Great Britain Pound", USD: 1.37, EUR: 1.16, GBP: 1, MDL: 22.44 },
    MDL: { title: "Moldovan Leu", USD: 0.056, EUR: 0.044, GBP: 0.037, MDL: 1 }
};

// inputurile, selecturile si butonul de schimb
const swap = document.getElementById('swap');
const fromCurrencyElement = document.getElementById('fromCurrency');
const toCurrencyElement = document.getElementById('toCurrency');
const amountElement = document.getElementById('amount');
const resultInput = document.getElementById('result');

// elementele din titlu
const mainTitle = document.getElementById('mainTitle');
const secondTitle = document.getElementById('secondTitle');
const fromCurrencyValue = document.getElementById('fromCurrencyValue');
const fromCurrencyName = document.getElementById('fromCurrencyName');
const equal = document.getElementById('equal');
const toCurrencyValue = document.getElementById('toCurrencyValue');
const toCurrencyName = document.getElementById('toCurrencyName');

const calculeaza = () => {
    let amount = Number(amountElement.value);
    const toCurrency = toCurrencyElement.value;
    const fromCurrency = fromCurrencyElement.value;

    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

    // daca am introdus o litera in select el automat pune 0
    if (isNaN(convertedAmount)) {
        convertedAmount = 0;
    }

    resultInput.value = convertedAmount.toFixed(2);
}

// detectam ca se scrie in input
amountElement.addEventListener('input', () => {
    calculeaza();
});

// detectam daca s-a schimbat valoarea la unul din select-uri si chemam functia care calculeaza
fromCurrencyElement.addEventListener('change', () => {
    // dispare elementul cu textul "Convertor Valutar si apare acela unde dinamic se pun valutele"
    mainTitle.style.display = 'none';
    secondTitle.style.display = 'flex';

    // afiseaza valuta initiala in header
    fromCurrencyValue.innerText = "1";
    fromCurrencyName.innerText = exchangeRates[fromCurrencyElement.value].title;

    calculeaza();
});

toCurrencyElement.addEventListener('change', () => {
    // afiseaza valuta secundara in header
    toCurrencyValue.innerText = exchangeRates[toCurrencyElement.value][fromCurrencyElement.value];
    toCurrencyName.innerText = exchangeRates[toCurrencyElement.value].title;
    equal.style.display = 'block';

    calculeaza();
});

// interschimbam valorile la select-uri si inputuri
swap.addEventListener('click', () => {
    const toCurrency = toCurrencyElement.value;
    const fromCurrency = fromCurrencyElement.value;
    const resultValue = resultInput.value;

    // setam valorile noi pentru selecturi si inputul cu amount
    toCurrencyElement.value = fromCurrency;
    fromCurrencyElement.value = toCurrency;
    amountElement.value = resultValue;

    // interschimbam valorile din header
    fromCurrencyValue.innerText = "1";
    fromCurrencyName.innerText = exchangeRates[fromCurrency].title;

    toCurrencyValue.innerText = exchangeRates[fromCurrency][toCurrency];
    toCurrencyName.innerText = exchangeRates[toCurrency].title;

    calculeaza();
})