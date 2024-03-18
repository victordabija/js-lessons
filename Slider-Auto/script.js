const left = document.getElementById('left');
const right = document.getElementById('right');

const img1 = document.getElementById('image-1');
const img2 = document.getElementById('image-2');
const img3 = document.getElementById('image-3');

const images = ['1', '2', '3', '4', '5'];

const puneImagini = () => {
    img1.src = `./resources/${images[0]}.jpg`;
    img2.src = `./resources/${images[1]}.jpg`;
    img3.src = `./resources/${images[2]}.jpg`;
}

puneImagini();

left.addEventListener('click', () => {
    const last = images[images.length - 1];

    for (let i = images.length - 1; i > 0; i--) {
        images[i] = images[i - 1];
    }

    images[0] = last;
    puneImagini();
});

right.addEventListener('click', () => {
    const first = images[0];
    for (let i = 1; i < images.length; i++) {
        images[i - 1] = images[i];
    }

    images[images.length - 1] = first;
    puneImagini();
});

setInterval(() => {
    right.click();
}, 1000);