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
}, 5000);

// dark mode


const darkMode = document.querySelector('.input-switch');
const mainTitle = document.querySelector('.main-title');
const header = document.querySelector('.header');
const defile = document.querySelector('.defile');
const carrouselButton = document.querySelectorAll('.carousel-button');
const rideau = document.querySelector('.rideau');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const section = document.querySelectorAll('.individual-section');
const logo = document.querySelector('.image');
const card = document.querySelector('.cardzer');
const arrowButton = document.querySelectorAll('.arrow-button');
const slideBorder = document.querySelectorAll('.dark-border');
const buttonSlower = document.querySelector('.slower');
const buttonFaster = document.querySelector('.faster');
const titleOne = document.querySelector('.title-1');
const titleTwo = document.querySelector('.title-2');
const titleThree = document.querySelector('.title-3');
const titleFour = document.querySelector('.title-4');
const linkOne = document.querySelector('.link-1');
const linkTwo = document.querySelector('.link-2');
const linkThree = document.querySelector('.link-3');
const linkFour = document.querySelector('.link-4');
const paragraphOne = document.querySelector('.p-1');
const paragraphTwo = document.querySelector('.p-2');
const paragraphThree = document.querySelector('.p-3');
const paragraphFour = document.querySelector('.p-4');
const body = document.querySelector('body');

function toggleDarkMode() {

  main.classList.toggle('main-dark');
  header.classList.toggle('dark-header');
  defile.classList.toggle('dark-defile');
  nav.classList.toggle('second-dark');
  footer.classList.toggle('second-dark');
  card.classList.toggle('second-dark-typo');
  
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("second-dark");
  }
  for (let i = 0; i < arrowButton.length; i++) {
    arrowButton[i].classList.toggle("second-dark");
  }
  if (this.checked) {
    body.style.backgroundColor = '#383838';
    rideau.style.backgroundColor = 'rgb(109, 5, 6,0.6)';
    buttonSlower.style.background = 'var(--second-dark)';
    buttonFaster.style.background = 'var(--second-dark)';

    for (let i = 0; i < carrouselButton.length; i++) {
      carrouselButton[i].style.backgroundColor = "grey";
    }

    mainTitle.textContent = 'Le Roi Borgne';
    titleOne.textContent = 'Aogiri';
    titleTwo.textContent = 'Le Roi';
    titleThree.textContent = 'La torture';
    titleFour.textContent = 'Scolopendre';
    linkOne.textContent = 'Aogiri';
    linkTwo.textContent = 'Le Roi';
    linkThree.textContent = 'La torture';
    linkFour.textContent = 'Scolopendre';
    paragraphOne.textContent = `Kaneki rejoint l'organisation de l'Arbre Aogiri qui était une organisation de Goules fondée dans le but de "créer un monde qui soit bon avec les Goules". L’organisation avait donc comme mission de détruire le CCG et l’Organisation V qui se cachait derrière, afin de pouvoir espérer atteindre ce but.`;
    paragraphTwo.textContent = `Lorsque Kaneki a clairement indiqué qu’il ne tuerait jamais Arima, Hishio s’est suicidé, expliquant qu’il était en train de mourir d’un vieillissement accéléré et qu’il avait besoin d’un successeur pour prendre le manteau du Roi borgne pour le bien des goules et de l’humanité en général. C’est ainsi que Kaneki a été contraint d’adopter le titre de roi borgne et de succéder à Arima. Par conséquent, la véritable identité du Roi borgne n’était pas Eto Yoshimura mais plutôt Hishio Arima. À la mort d’Arima, le titre a été transmis à Kaneki.`;
    paragraphThree.textContent = `Après avoir été capturé par Jason, Kaneki est devenu l'une de ces victimes. Jason a fait compter Kaneki de mille en sept pendant qu'il était torturé. Cela permettait de garder l'esprit de Kaneki concentré et de s'assurer qu'il ne perdait pas conscience à cause de la douleur. Pendant que Kaneki était torturé, l'ordre de Jason était répété jusqu'à ce qu'il prenne la forme d'un mantra.`;
    paragraphFour.textContent = `Après s'être libéré, il forme un groupe composé des Masques à Gaz, de Shu Tsukiyama et d'Hinami Fueguchi, dans le but d'exterminer tous ceux qui pourraient menacer les êtres qui lui sont chers. L'apparence distincte de son Kagune de Feu lui vaut le surnom de Scolopendre.`;
    logo.src = './assets/logo-dark1-nuit.png'
    darkCarousel()

    for (let i = 0; i < slideBorder.length; i++) {
      slideBorder[i].classList.toggle("dark-mode-border");
    }
    for (let i = 0; i < section.length; i++) {
      section[i].firstChild.src = `./assets/section-dark-${i + 1}.jpg`;
    }
  } else {

    body.style.backgroundColor = 'var(--main-light)';
    rideau.style.backgroundColor = 'var(--main-color-fond-menu)';
    buttonSlower.style.background = 'var(--second-light)';
    buttonFaster.style.background = 'var(--second-light)';
    
    for (let i = 0; i < carrouselButton.length; i++) {
      carrouselButton[i].style.backgroundColor = "grey";
    }

    mainTitle.textContent = 'Kaneki Ken';
    titleOne.textContent = "L'accident";
    titleTwo.textContent = 'La détresse';
    titleThree.textContent = "L'université";
    titleFour.textContent = "L'Antique";
    linkOne.textContent = "L'accident";
    linkTwo.textContent = 'La détresse';
    linkThree.textContent =  "L'université";
    linkFour.textContent = "L'Antique";
    paragraphOne.textContent = `Autrefois simple humain, Ken Kaneki vivait une vie relativement normale.
    Cependant, suite à un accident les choses changent rapidement après que le docteur Akihiro Kano lui
    ait transplanté les Cellules RC de Lize Kamishiro une goule mangeuse d'homme, le transformant ainsi
    en Goule Artificielle.`;
    paragraphTwo.textContent = `Ken est effrayé car il a remarqué qu'il doit se nourrir de chair humaine s'il veut survivre. Les
    goules sont invulnérables aux attaques physiques ce qu'il remarquera en tentant de mettre fin à ses
    jours. Son œil gauche trahit sa nature lorsqu'il est affamé, il porte alors un cache-œil pour
    dissimuler sa condition de goule.`;
    paragraphThree.textContent = `Il étudie la littérature japonaise en 1ère année à l'Université Kamii. Il est alors un humain qui
    mène une vie relativement normale. Ken est un garçon calme. Il est aimable mais également
    introverti. Il lit beaucoup et passe du temps avec son meilleur ami, Hide.`;
    paragraphFour.textContent = `Il intègre par la suite l'Antique, café connu des Goules comme un lieu de réunion, en tant que
    serveur à temps partiel.
    En effet le café est la seule chose que les goules peuvent consommer en dehors de la chair humaine.
    Grâce aux membres de l'Antique, Ken essaye d'apprendre à vivre comme les Goules le font et adopte le
    surnom de Cache-Oeil.`;
    logo.src = './assets/logo-dark1-jour.png'
    lightCarousel()

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
let startPosition = 0;

/* plus vite */

faster.addEventListener("click", function () {
  scrollSpeed -= 15;
  track.style.animationDuration = `${scrollSpeed}s`;
});

/* moins vite  */

slower.addEventListener("click", function () {
  scrollSpeed += 15;
  track.style.animationDuration = `${scrollSpeed}s`;
});
