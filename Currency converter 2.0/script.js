const exchangeRates = {
    USD: {USD: 1, EUR: 0.84, GBP: 0.73, MDL: 17.61, RUB: 73.75, RON: 4.32, UAH: 27.42, CHF: 0.92},
    EUR: {USD: 1.19, EUR: 1, GBP: 0.86, MDL: 19.12, RUB: 87.58, RON: 4.89, UAH: 31.01, CHF: 1.04},
    GBP: {USD: 1.37, EUR: 1.16, GBP: 1, MDL: 22.44, RUB: 103.82, RON: 6.13, UAH: 38.89, CHF: 1.31},
    MDL: {USD: 0.056, EUR: 0.044, GBP: 0.037, MDL: 1, RUB: 1.78, RON: 0.1, UAH: 0.63, CHF: 0.021},
    RUB: {USD: 0.014, EUR: 0.011, GBP: 0.0096, MDL: 0.56, RUB: 1, RON: 0.059, UAH: 0.38, CHF: 0.013},
    RON: {USD: 0.23, EUR: 0.20, GBP: 0.16, MDL: 9.22, RUB: 16.91, RON: 1, UAH: 6.32, CHF: 0.21},
    UAH: {USD: 0.036, EUR: 0.032, GBP: 0.026, MDL: 1.63, RUB: 2.64, RON: 0.16, UAH: 1, CHF: 0.034},
    CHF: {USD: 1.09, EUR: 0.96, GBP: 0.76, MDL: 46.45, RUB: 77.13, RON: 4.74, UAH: 29.18, CHF: 1}
};


const inputElement = document.getElementById('amount');
const resultInput = document.getElementById('result');
const inputButtons = document.querySelectorAll('.btn1');
const resultButtons = document.querySelectorAll('.btn2');

let fromCurrency = 'MDL';
let toCurrency = 'USD';

const date = new Date();
document.getElementById('date').innerText = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

const calculeaza = () => {
    let amount = Number(inputElement.value);
    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

    resultInput.value = convertedAmount.toFixed(2);
}

const calculeazaInvers = () => {
    let amount = Number(resultInput.value);
    let convertedAmount = amount * exchangeRates[toCurrency][fromCurrency];

    inputElement.value = convertedAmount.toFixed(2);
}

calculeaza();
document.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 32 && e.keyCode < 48) || (e.keyCode > 57 && e.keyCode <= 126)) {
        e.preventDefault();
    }

    inputElement.addEventListener('input', () => {
        calculeaza();
    });

    resultInput.addEventListener('input', () => {
        calculeazaInvers();
    });
});

inputButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active.btn1').classList.remove('active');
        button.classList.add('active');

        fromCurrency = button.innerText;
        calculeaza();
    });
});

resultButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active.btn2').classList.remove('active');
        button.classList.add('active');

        toCurrency = button.innerText;
        calculeaza();
    });
});