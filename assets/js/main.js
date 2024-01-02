/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

// verifica se o botão existe e mostra o menu ao clicar.
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// verifica se o botão existe e fecha o menu ao clicar.
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

// remove o menu ao clicar em algum link
const linkAction = () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
};

// adiciona o evento de click em cada link do menu
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header = document.querySelector("#header");
  // Quando o scroll é maior que 50 de altura de viewport, adciona a classe shadow-header
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");
  // Quando a viewport é maior que 350 adiciona a classe que mostra o scroll
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 60,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*="' + sectionId + '"]'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Seleciona o tema de preferência do usuário
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Validando o tema atual da interface
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, // Repetição da animação 
})

sr.reveal(`.home__data, .join__container, .footer`);
sr.reveal(".home__img", {origin: "bottom"})
sr.reveal(".enjoy__card, .popular__card", {interval: 100})
sr.reveal(".about__data", {origin: "right"})
sr.reveal(".about__img", {origin: "left"})
