// const dataNasterii = "2005-07-31T17:50:00";
const dataNasterii = "2005-03-04T19:27:00";

const button = document.getElementById('button');
const audio = document.getElementById('audio');
const dateElement = document.getElementById('date');

const currentDate = new Date();
const birthdayDate = new Date(dataNasterii);

getTextDays = (day) => {
    if (day === 1) {
        return `${day} zi `;
    }

    return `${day} zile `;
}

getTextHours = (hour) => {
    if (hour === 1) {
        return `${hour} oră `;
    }

    return `${hour} ore `;
}

getTextMinutes = (minute) => {
    if (minute === 1) {
        return `${minute} minută `;
    }

    return `${minute} minute `;
}

getTextSeconds = (sec) => {
    if (sec === 1) {
        return `${sec} secundă`;
    }

    return `${sec} secunde`;
}

const startClock = (date) => {
    const interval = setInterval(() => {
        const currentDate = new Date();
        const diferenta = diferentaDeTimp(date, currentDate);

        if (diferenta === true) {
            audio.play();
            dateElement.innerText = "ESTE ZIUA TA";
            clearInterval(interval);
            return;
        }

        let time = "Timp rămas: ";

        const zile = diferenta[0] > 0 ? getTextDays(diferenta[0]) : "";
        const ore = diferenta[1] > 0 ? getTextHours(diferenta[1]) : "";
        const minute = diferenta[2] > 0 ? getTextMinutes(diferenta[2]) : "";
        const secunde = diferenta[3] > 0 ? getTextSeconds(diferenta[3]) : "";

        time += zile + ore + minute + secunde;

        dateElement.innerText = time;
    }, 1000);
}

const diferentaDeTimp = (timeAfter, timeBefore) => {
    const diferentaInMilisecunde = timeAfter - timeBefore;

    const milisecundeIn1Zi = 1000 * 60 * 60 * 24;
    const zile = Math.floor(diferentaInMilisecunde / milisecundeIn1Zi);
    const ore = Math.floor((diferentaInMilisecunde % milisecundeIn1Zi) / (1000 * 60 * 60));
    const minute = Math.floor((diferentaInMilisecunde % (1000 * 60 * 60)) / (1000 * 60));
    const secunde = Math.floor((diferentaInMilisecunde % (1000 * 60)) / 1000);

    if (zile === 0 && ore === 0 && minute === 0 && secunde === 0) {
        return true;
    }

    if (zile === -1 && (ore <= 0 || minute <= 0 || secunde <= 0)) {
        return true;
    }

    if (Math.sign(diferentaInMilisecunde) === -1) {
        timeAfter.setFullYear(timeAfter.getFullYear() + 1);
        return diferentaDeTimp(timeAfter, timeBefore);
    }

    return [zile, ore, minute, secunde];
}

button.addEventListener('click', () => {
    birthdayDate.setFullYear(currentDate.getFullYear());
    startClock(birthdayDate);
});