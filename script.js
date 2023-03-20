// Menu burger

const hamburgerButton = document.querySelector(".rideau-toggler")
const navigation = document.querySelector(".rideau")

function toggleNav() {
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}

hamburgerButton.addEventListener("click", function () {
  toggleNav()
})


// Carousel

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const containerCarouselButtons = document.querySelector(".container-carousel-buttons")
const carouselButton = []
const lisCarousel = document.querySelectorAll(".li-carousel")
const carouselImgContainer = document.querySelector(".carousel-img-container")
let countSet = 0
let countDirection = true

function countDirectionGestion() {
  if (countSet <= 0) {
    leftArrow.style.opacity = 0.5
    countDirection = true
  } else if (countSet >= lisCarousel.length - 1) {
    rightArrow.style.opacity = 0.5
    countDirection = false
  } else {
    leftArrow.style.opacity = 1
  }
}

function createCarouselButton(tableOfCarouselImgs) {
  tableOfCarouselImgs.forEach((el) => {
    let newButton = document.createElement("button")
    newButton.classList.add("carousel-button")
    if (el.classList.contains("show-carousel-img")) {
      newButton.classList.add("active-carousel-button")
    }
    containerCarouselButtons.appendChild(newButton)
    carouselButton.push(newButton)
  })
}

function rightArrowClick() {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img") && i < lisCarousel.length - 1) {
      lisCarousel[i].classList.remove("show-carousel-img")
      lisCarousel[i + 1].classList.add("show-carousel-img")
      carouselButton[i].classList.remove("active-carousel-button")
      carouselButton[i + 1].classList.add("active-carousel-button")
      leftArrow.style.opacity = 1
      countSet++
      console.log(countSet);
      countDirectionGestion()
      break
    }
  }
}

function leftArrowClick() {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img") && i > 0) {
      lisCarousel[i].classList.remove("show-carousel-img")
      lisCarousel[i - 1].classList.add("show-carousel-img")
      carouselButton[i].classList.remove("active-carousel-button")
      carouselButton[i - 1].classList.add("active-carousel-button")
      rightArrow.style.opacity = 1
      countSet--
      console.log(countSet);
      countDirectionGestion()
      break
    }
  }
}

function carouselButtonClick(el, index) {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img")) {
      lisCarousel[i].classList.remove("show-carousel-img")
      lisCarousel[index].classList.add("show-carousel-img")
      carouselButton[i].classList.remove("active-carousel-button")
      el.classList.add("active-carousel-button")
      countSet = index
      console.log(countSet)
      countDirectionGestion()
    }
  }
}

function darkCarousel() {
  for (let i = 0; i < lisCarousel.length; i++) {
    lisCarousel[i].firstChild.src = `./assets/caroudark${i + 1}.jpg`
  }
}

function lightCarousel() {
  for (let i = 0; i < lisCarousel.length; i++) {
    lisCarousel[i].firstChild.src = `./assets/carousel${i + 1}.jpg`
  }
}


createCarouselButton(lisCarousel)
carouselButton.forEach((el, index) => el.addEventListener("click", () => carouselButtonClick(el, index)))
rightArrow.addEventListener("click", rightArrowClick)
leftArrow.addEventListener("click", leftArrowClick)
carouselImgContainer.addEventListener("click", (e) => {
  if (e.offsetX < e.target.clientWidth / 2) {
    leftArrowClick()
  } else if (e.offsetX >= e.target.clientWidth / 2) {
    rightArrowClick()
  }
})

setInterval(() => {
  if (countDirection === true) {
    rightArrowClick()
  } else if (countDirection === false) {
    leftArrowClick()
  } else {
    countDirection = true
  }
}, 1000)

// dark mode
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const section = document.querySelectorAll('.individual-section');
const darkMode = document.querySelector('.darkmode');
const logo = document.querySelector('.image');

darkMode.addEventListener('click', function () {

  main.style.backgroundColor = "#202020";
  nav.style.backgroundColor = "#6d0506";
  footer.style.backgroundColor = "#6d0506";
  for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = "#6d0506";

  }
  logo.src = "./assets/logo-dark1-nuit.png";

});





