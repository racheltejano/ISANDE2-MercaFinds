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