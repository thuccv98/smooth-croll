const toggle = document.querySelector('#mobile-menu');
const menu = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// toggle mobile menu
const mobileMenu = () => {
  toggle.classList.toggle('is-active');
  menu.classList.toggle('active');
};

toggle.addEventListener('click', mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const home = document.querySelector('#home-page');
  const about = document.querySelector('#about-page');
  const services = document.querySelector('#services-page');
  let scrollPosition = window.scrollY;

  // add 'highlight' class to my menu items
  if (window.innerWidth > 767 && scrollPosition < 600) {
    home.classList.add('highlight');
    about.classList.remove('highlight');
  } else if (window.innerWidth > 767 && scrollPosition < 1600) {
    about.classList.add('highlight');
    home.classList.remove('highlight');
    services.classList.remove('highlight');
  } else if (window.innerWidth > 767 && scrollPosition < 2400) {
    services.classList.add('highlight');
    about.classList.remove('highlight');
  } else {
    services.classList.remove('highlight');
  }

  // clear 'highlight' class when screen < 768px
  if (window.innerWidth < 768 && element) {
    element.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBar = document.querySelector('.is-active');
  if (window.innerWidth < 768 && menuBar) {
    toggle.classList.toggle('is-active');
    menu.classList.remove('active');
  }
};

menu.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
