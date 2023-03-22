// Menu burger

const hamburgerButton = document.querySelector(".rideau-toggler");
const navigation = document.querySelector(".rideau");

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

hamburgerButton.addEventListener("click", function () {
  toggleNav();
});

// Carousel

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const containerCarouselButtons = document.querySelector(
  ".container-carousel-buttons"
);
const carouselButton = [];
const lisCarousel = document.querySelectorAll(".li-carousel");
const carouselImgContainer = document.querySelector(".carousel-img-container");
let countSet = 0;
let countDirection = true;

function countDirectionGestion() {
  if (countSet <= 0) {
    leftArrow.style.opacity = 0.5;
    countDirection = true;
  } else if (countSet >= lisCarousel.length - 1) {
    rightArrow.style.opacity = 0.5;
    countDirection = false;
  } else {
    leftArrow.style.opacity = 1;
  }
}

function createCarouselButton(tableOfCarouselImgs) {
  tableOfCarouselImgs.forEach((el) => {
    let newButton = document.createElement("div");
    newButton.classList.add("carousel-button");
    if (el.classList.contains("show-carousel-img")) {
      newButton.classList.add("active-carousel-button");
    }
    containerCarouselButtons.appendChild(newButton);
    carouselButton.push(newButton);
  });
}

function rightArrowClick() {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (
      lisCarousel[i].classList.contains("show-carousel-img") &&
      i < lisCarousel.length - 1
    ) {
      lisCarousel[i].classList.remove("show-carousel-img");
      lisCarousel[i + 1].classList.add("show-carousel-img");
      carouselButton[i].classList.remove("active-carousel-button");
      carouselButton[i + 1].classList.add("active-carousel-button");
      leftArrow.style.opacity = 1;
      countSet++;
      console.log(countSet);
      countDirectionGestion();
      break;
    }
  }
}

function leftArrowClick() {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img") && i > 0) {
      lisCarousel[i].classList.remove("show-carousel-img");
      lisCarousel[i - 1].classList.add("show-carousel-img");
      carouselButton[i].classList.remove("active-carousel-button");
      carouselButton[i - 1].classList.add("active-carousel-button");
      rightArrow.style.opacity = 1;
      countSet--;
      console.log(countSet);
      countDirectionGestion();
      break;
    }
  }
}

function carouselButtonClick(el, index) {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img")) {
      lisCarousel[i].classList.remove("show-carousel-img");
      lisCarousel[index].classList.add("show-carousel-img");
      carouselButton[i].classList.remove("active-carousel-button");
      el.classList.add("active-carousel-button");
      countSet = index;
      console.log(countSet);
      countDirectionGestion();
    }
  }
}

function darkCarousel() {
  for (let i = 0; i < lisCarousel.length; i++) {
    lisCarousel[i].firstChild.src = `./assets/caroudark${i + 1}.jpg`;
  }
}

function lightCarousel() {
  for (let i = 0; i < lisCarousel.length; i++) {
    lisCarousel[i].firstChild.src = `./assets/carousel${i + 1}.jpg`;
  }
}

createCarouselButton(lisCarousel);
carouselButton.forEach((el, index) =>
  el.addEventListener("click", () => carouselButtonClick(el, index))
);
rightArrow.addEventListener("click", rightArrowClick);
leftArrow.addEventListener("click", leftArrowClick);
carouselImgContainer.addEventListener("click", (e) => {
  if (e.offsetX < e.target.clientWidth / 2) {
    leftArrowClick();
  } else if (e.offsetX >= e.target.clientWidth / 2) {
    rightArrowClick();
  }
});

setInterval(() => {
  if (countDirection === true) {
    rightArrowClick();
  } else if (countDirection === false) {
    leftArrowClick();
  } else {
    countDirection = true;
  }
}, 1000);

// dark mode
const darkMode = document.querySelector(".input-switch");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const section = document.querySelectorAll(".individual-section");
const logo = document.querySelector(".image");
const card = document.querySelector(".cardzer");
const arrowButton = document.querySelectorAll(".arrow-button");
const slideBorder = document.querySelectorAll(".dark-border");

function toggleDarkMode() {
  main.classList.toggle("main-dark");
  nav.classList.toggle("second-dark");
  footer.classList.toggle("second-dark");
  card.classList.toggle("second-dark-typo");
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("second-dark");
  }
  for (let i = 0; i < arrowButton.length; i++) {
    arrowButton[i].classList.toggle("second-dark");
  }
  if (this.checked) {
    logo.src = "./assets/logo-dark1-nuit.png";
    darkCarousel();
    for (let i = 0; i < slideBorder.length; i++) {
      slideBorder[i].classList.toggle("dark-mode-border");
    }
    for (let i = 0; i < section.length; i++) {
      section[i].firstChild.src = `./assets/section-dark-${i + 1}.jpg`;
    }
  } else {
    logo.src = "./assets/logo-dark1-jour.png";
    lightCarousel();
    for (let i = 0; i < slideBorder.length; i++) {
      slideBorder[i].classList.toggle("dark-mode-border");
    }
    for (let i = 0; i < section.length; i++) {
      section[i].firstChild.src = `./assets/section-light-${i + 1}.jpg`;
    }
  }
}

darkMode.addEventListener("change", toggleDarkMode);

/* déroulement cartes */

const faster = document.querySelector(".faster");
const slower = document.querySelector(".slower");
const track = document.querySelector(".track");

/* vitesse de base */
let scrollSpeed = 70;

/* plus vite */

faster.addEventListener("click", function () {
  scrollSpeed -= 20;
  track.style.animationDuration = `${scrollSpeed}s`;
});

/* moins vite  */

slower.addEventListener("click", function () {
  scrollSpeed += 20;
  track.style.animationDuration = `${scrollSpeed}s`;
});
