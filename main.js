const slides = document.querySelectorAll(".participant_card");
const cardContainer = document.getElementById("card_container");
const counter = document.querySelectorAll(".slides_counter")[0];
const mob_counter = document.querySelectorAll(".slides_counter")[1];

let currentSlide = 0;

// Функция для обновления положения слайдера
function updateSliderPosition() {
  if (window.screen.width < 1000) {
    cardContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  } else {
    cardContainer.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  }
}

function handleSliderClick(btn) {
  if (window.screen.width < 1000) {
    if (btn === "left") {
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = slides.length - 1; // При достижении первого слайда показываем последний
      }
      mob_counter.innerHTML = currentSlide + 1;
      updateSliderPosition();
    } else {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0; // При достижении последнего слайда показываем первый
      }
      mob_counter.innerHTML = currentSlide + 1;

      updateSliderPosition();
    }
  } else {
    if (btn === "left") {
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = slides.length - 3; // При достижении первого слайда показываем последний
      }
      counter.innerHTML = currentSlide + 3;
      updateSliderPosition();
    } else {
      if (currentSlide < slides.length - 3) {
        currentSlide++;
      } else {
        currentSlide = 0; // При достижении последнего слайда показываем первый
      }
      counter.innerHTML = currentSlide + 3;

      updateSliderPosition();
    }
  }
}

// Автоматическое переключение слайдов каждую секунду
setInterval(() => {
  if (currentSlide < slides.length - 3) {
    currentSlide++;
  } else {
    currentSlide = 0; // Зацикливаем слайдер
  }
  if (window.screen.width < 1000) {
    mob_counter.innerHTML = currentSlide + 1;
  } else {
    counter.innerHTML = currentSlide + 3;
  }
  updateSliderPosition();
}, 4000);

const mob_slides = document.querySelector(".mob_slides");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let current_mob_Slide = 0;

// Обновление положения слайдера
function updateSlider() {
  mob_slides.style.transform = `translateX(-${current_mob_Slide * 100}%)`;

  // Обновление активных точек
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === current_mob_Slide);
  });
}

// Обработчик для кнопки "Влево"
prevBtn.addEventListener("click", () => {
  current_mob_Slide =
    current_mob_Slide === 0 ? dots.length - 1 : current_mob_Slide - 1;
  updateSlider();
});

// Обработчик для кнопки "Вправо"
nextBtn.addEventListener("click", () => {
  current_mob_Slide =
    current_mob_Slide === dots.length - 1 ? 0 : current_mob_Slide + 1;
  updateSlider();
});

// Обработчик для точек
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current_mob_Slide = index;
    updateSlider();
  });
});

// Инициализация слайдера
updateSlider();
