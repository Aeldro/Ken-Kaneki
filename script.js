const hamburgerButton = document.querySelector(".rideau-toggler")
const navigation = document.querySelector(".rideau")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}