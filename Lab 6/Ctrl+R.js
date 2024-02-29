const haystack = prompt('Introduceti sirul', '')
const needle = prompt('Introduceti subșirul care trebuie de schimbat', '')
const toReplace = prompt('Introduceti subșirul cu care se va schimba', '')

const newWord = haystack.replaceAll(needle, toReplace)

console.log(newWord)
