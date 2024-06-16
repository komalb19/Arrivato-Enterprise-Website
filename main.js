let slideImages = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
let counter = 0;

function showSlide(index) {
    slideImages.forEach((img, i) => {
        img.classList.remove('active');
        img.style.left = '100%';
        img.style.opacity = '0';
    });
    slideImages[index].classList.add('active');
    slideImages[index].style.left = '0';
    slideImages[index].style.opacity = '1';
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function slideNext() {
    counter = (counter + 1) % slideImages.length;
    showSlide(counter);
}

function slidePrev() {
    counter = (counter - 1 + slideImages.length) % slideImages.length;
    showSlide(counter);
}

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        counter = index;
        showSlide(index);
    });
});

let autoSlideInterval = setInterval(slideNext, 2000);

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

container.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(slideNext, 2000);
});

showSlide(0);