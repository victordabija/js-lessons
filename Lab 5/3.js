const sumaImparePanaLa15 = () => {
    let produs = 1;
    for (let i = 2; i <= 15; i++) {
        produs *= i;
    }

    return produs;
}

console.log(`Produsul numerelor de la 1 la 15: ${sumaImparePanaLa15()}`)
