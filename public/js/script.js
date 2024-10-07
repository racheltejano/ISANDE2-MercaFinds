// Language Dropdown
document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        const promoText = document.getElementById('promo-text');
        const currentLanguageDisplay = document.getElementById('current-language');

        // Update the promo text to the selected language
        promoText.textContent = promoText.getAttribute(`data-${selectedLang}`);

        // Update the current language display
        currentLanguageDisplay.textContent = this.textContent;
    });
});

// Carousel Functionality
const slides = [
    'https://via.placeholder.com/800x300/111',
    'https://via.placeholder.com/800x300/222',
    'https://via.placeholder.com/800x300/333',
    'https://via.placeholder.com/800x300/444',
    'https://via.placeholder.com/800x300/555',
    'https://via.placeholder.com/800x300/666',
    'https://via.placeholder.com/800x300/777'
];

let currentSlide = 0;
const carouselImg = document.querySelector('.carousel img');
const totalSlides = slides.length;

document.querySelector('.arrow.left').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    carouselImg.src = slides[currentSlide];
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    carouselImg.src = slides[currentSlide];
});

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    carouselImg.src = slides[currentSlide];
}, 5000);
