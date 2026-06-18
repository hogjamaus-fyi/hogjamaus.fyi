const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

let currentIndex = 0;

function renderSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    for (let i = 0; i < slides.length; i += 1) {
        const isActive = i === currentIndex;
        slides[i].classList.toggle('is-active', isActive);
        if (isActive) {
            slides[i].scrollTop = 0;
        }
        dots[i].classList.toggle('is-active', isActive);
        dots[i].setAttribute('aria-selected', String(isActive));
    }
}

prevBtn.addEventListener('click', () => renderSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => renderSlide(currentIndex + 1));

for (let i = 0; i < dots.length; i += 1) {
    dots[i].addEventListener('click', () => renderSlide(i));
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        renderSlide(currentIndex - 1);
    }

    if (event.key === 'ArrowRight') {
        renderSlide(currentIndex + 1);
    }
});
