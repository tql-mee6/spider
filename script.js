document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление карточек при скролле
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Применяем анимацию к карточкам и цитатам
    const elementsToAnimate = document.querySelectorAll('.glass-card, .quote-block, .character-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});