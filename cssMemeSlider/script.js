document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 5;
        updateCarousel();
    }

    setInterval(nextSlide, 5000);
});
