const sumaImpare = (n) => {
    let produs = 1;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 1) {
            produs *= i;
        }
    }

    return produs;
}

const n = Number(prompt('Introduceti n'))
console.log(`Produsul numerelor de la 1 la 15: ${sumaImpare(n)}`)
