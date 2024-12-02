document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".participant_card");
  const cardContainer = document.getElementById("card_container");
  const leftBtn = document.getElementById("turn_left_btn");
  const rightBtn = document.getElementById("turn_right_btn");
  const counter = document.getElementById("slides_counter");

  let currentSlide = 0;

  // Функция для обновления положения слайдера
  function updateSliderPosition() {
    cardContainer.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  }

  // При клике на кнопку "вправо" сдвигаем слайде р
  rightBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 3) {
      currentSlide++;
    } else {
      currentSlide = 0; // При достижении последнего слайда показываем первый
    }
    counter.innerHTML = currentSlide + 3;
    updateSliderPosition();
  });

  // При клике на кнопку "влево" сдвигаем слайдер
  leftBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slides.length - 3; // При достижении первого слайда показываем последний
    }
    counter.innerHTML = currentSlide + 3;
    updateSliderPosition();
  });

  // Автоматическое переключение слайдов каждую секунду
  setInterval(() => {
    if (currentSlide < slides.length - 3) {
      currentSlide++;
    } else {
      currentSlide = 0; // Зацикливаем слайдер
    }
    counter.innerHTML = currentSlide + 3;
    updateSliderPosition();
  }, 4000);
});
