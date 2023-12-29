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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
