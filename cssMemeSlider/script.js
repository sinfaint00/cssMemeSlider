document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 1;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("mouseover", () => {
            indicator.style.backgroundColor = "white";
        });

        indicator.addEventListener("mouseleave", () => {
            if (currentIndex !== index) {
                indicator.style.backgroundColor = "rgb(152, 152, 255)";
            }
        });

        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();

            // Устанавливаем черный фон внутри индикатора после нажатия
            indicator.style.backgroundColor = "black";

            // Сбрасываем стиль фона для всех остальных индикаторов
            indicators.forEach((otherIndicator, otherIndex) => {
                if (otherIndex !== currentIndex) {
                    otherIndicator.style.backgroundColor = "rgb(152, 152, 255)";
                }
            });
        });
    });
});
