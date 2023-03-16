// Menu burger

const hamburgerButton = document.querySelector(".rideau-toggler")
const navigation = document.querySelector(".rideau")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}

// Carousel

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const lisCarousel = document.querySelectorAll(".li-carousel")
const carouselImgContainer = document.querySelector(".carousel-img-container")

function rightArrowClick() {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img") && i < lisCarousel.length - 1) {
      lisCarousel[i].classList.remove("show-carousel-img")
      lisCarousel[i + 1].classList.add("show-carousel-img")
      leftArrow.style.opacity = 1
      if (i >= lisCarousel.length - 2) {
        rightArrow.style.opacity = 0.5
      } else {
        rightArrow.style.opacity = 1
      }
      break
    }
  }
}

function leftArrowClick() {
  for (let i = 0; i < lisCarousel.length; i++) {
    if (lisCarousel[i].classList.contains("show-carousel-img") && i > 0) {
      lisCarousel[i].classList.remove("show-carousel-img")
      lisCarousel[i - 1].classList.add("show-carousel-img")
      rightArrow.style.opacity = 1
      if (i <= 1) {
        leftArrow.style.opacity = 0.5
      } else {
        leftArrow.style.opacity = 1
      }
      break
    }
  }
}

rightArrow.addEventListener("click", rightArrowClick)
leftArrow.addEventListener("click", leftArrowClick)
carouselImgContainer.addEventListener("click", (e) => {
  if (e.offsetX < e.target.clientWidth / 2) {
    leftArrowClick()
  } else if (e.offsetX >= e.target.clientWidth / 2) {
    rightArrowClick()
  }
})