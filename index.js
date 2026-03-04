const nextEL1 = document.querySelector(".next");
const prevEL = document.querySelector(".prev");
const imgcontainer = document.querySelector(".image-container");
const imgall = document.querySelectorAll("img");

let currentImage = 1;

nextEL1.addEventListener("click", () => {
    currentImage++;
    updateImage();
});

prevEL.addEventListener("click", () => {
    currentImage--;
    updateImage();
});

function updateImage() {
    if (currentImage > imgall.length) {
        currentImage = 1;
    }

    if (currentImage < 1) {
        currentImage = imgall.length;
    }

    imgcontainer.style.transform =
        `translateX(-${(currentImage - 1) * 200}px)`;
}