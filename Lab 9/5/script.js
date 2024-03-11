/**
 *  sa spui ca ai folosit input type date, care deodata face valiidarea formatului de data si returneaza string cu data aleasa
 */

const date = document.getElementById('date');
const btn = document.getElementById('btn');
const zodiac = document.getElementById('zodiac');

function getZodiac(data) {
    const date = new Date(data);

    // luna vine incepand cu 0, de asta trebuie +1
    const luna = date.getMonth() + 1;
    const ziua = date.getDate();

    // acest algoritm e cu chatgpt, eu am verificat, parca tot corect
    if ((luna === 3 && ziua >= 21) || (luna === 4 && ziua <= 20)) {
        return "Berbec";
    } else if ((luna === 4 && ziua >= 21) || (luna === 5 && ziua <= 21)) {
        return "Taur";
    } else if ((luna === 5 && ziua >= 22) || (luna === 6 && ziua <= 21)) {
        return "Gemeni";
    } else if ((luna === 6 && ziua >= 22) || (luna === 7 && ziua <= 22)) {
        return "Rac";
    } else if ((luna === 7 && ziua >= 23) || (luna === 8 && ziua <= 22)) {
        return "Leu";
    } else if ((luna === 8 && ziua >= 23) || (luna === 9 && ziua <= 22)) {
        return "Fecioară";
    } else if ((luna === 9 && ziua >= 23) || (luna === 10 && ziua <= 22)) {
        return "Balanță";
    } else if ((luna === 10 && ziua >= 23) || (luna === 11 && ziua <= 21)) {
        return "Scorpion";
    } else if ((luna === 11 && ziua >= 22) || (luna === 12 && ziua <= 21)) {
        return "Săgetător";
    } else if ((luna === 12 && ziua >= 22) || (luna === 1 && ziua <= 20)) {
        return "Capricorn";
    } else if ((luna === 1 && ziua >= 21) || (luna === 2 && ziua <= 19)) {
        return "Vărsător";
    } else if ((luna === 2 && ziua >= 20) || (luna === 3 && ziua <= 20)) {
        return "Pești";
    }
}
    

btn.addEventListener('click', () => {
    zodiac.innerText = `Zodiacul dvs: ${getZodiac(date.value)}`
});