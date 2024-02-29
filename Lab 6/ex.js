const text = prompt("Introduceti un sir", '');

const print = (word) => {
    document.write(word + `<br>`)
}

print(`Lower case: ${text.toUpperCase()}`)
print(`Upper case: ${text.toLowerCase()}`)
print(`Textul introdus are ${text.length} caractere`)
print(``)

