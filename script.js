navbarToggle = document.querySelector(".navbar-toggle");
navbarToggle.onclick = () => {
  navBar = document.querySelector(".container-navbar");
  navBar.classList.toggle("active");
};

const navbar = document.querySelector("header");
const navbarOffset = navbar.offsetTop;

function stickyNav() {
  if (window.scrollY >= navbarOffset) {
    navbar.classList.add("sticky");
  } else if (window.scrollY <= navbarOffset) {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNav);
