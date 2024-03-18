const left = document.getElementById('left');
const right = document.getElementById('right');

const img1 = document.getElementById('image-1');
const img2 = document.getElementById('image-2');
const img3 = document.getElementById('image-3');

const images = ['1', '2', '3', '4', '5'];
let initialPosition = 0;

const puneImagini = (i) => {
    img1.src = `./sources/${images[i]}.jpeg`;
    img2.src = `./sources/${images[i + 1]}.jpeg`;
    img3.src = `./sources/${images[i + 2]}.jpeg`;
}

puneImagini(0);

left.addEventListener('click', () => {
    initialPosition -= 1;

    if (initialPosition < 0) {
        initialPosition += 1;
        left.querySelector('img').src = `./sources/emptyLeft.png`;
        return;
    }
    right.querySelector('img').src = `./sources/arrowRight.png`;
    puneImagini(initialPosition);
});

right.addEventListener('click', () => {
    initialPosition += 1;

    if (initialPosition >= images.length - 2) {
        initialPosition -= 1;
        right.querySelector('img').src = `./sources/emptyRight.png`;
        return;
    }
    left.querySelector('img').src = `./sources/arrowLeft.png`;
    puneImagini(initialPosition);
});