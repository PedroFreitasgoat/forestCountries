const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

// slider próximo botão
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
});

// slider anterior botão
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
});
