document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    setInterval(nextSlide, 5000);
});
