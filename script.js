// Navbar navbarToggle
navbarToggle = document.querySelector(".navbar-toggle");
navbarToggle.onclick = () => {
  navBar = document.querySelector(".container-navbar");
  navBar.classList.toggle("active");
};

const navbar = document.querySelector("header");
const navbarOffset = navbar.offsetTop;

// StickyNav Navbar
function stickyNav() {
  if (window.scrollY >= navbarOffset) {
    navbar.classList.add("sticky");
  } else if (window.scrollY <= navbarOffset) {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNav);

// Slider
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 3) {
    counter = 1;
  }
}, 5000);
