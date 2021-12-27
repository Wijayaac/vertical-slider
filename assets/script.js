const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slidesLength = slideLeft.querySelectorAll("div").length;

let activateSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activateSlideIndex++;
    if (activateSlideIndex > slidesLength - 1) {
      activateSlideIndex = 0;
    }
  } else if (direction === "down") {
    activateSlideIndex--;
    if (activateSlideIndex < 0) {
      activateSlideIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activateSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activateSlideIndex * sliderHeight
  }px)`;
};
// Add eventListener
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
