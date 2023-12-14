const navLinks = document.querySelectorAll(".nav-link");
const activePage = window.location.pathname;

// This will set the active nav link
navLinks.forEach(navLink => {
  if (navLink.href.includes(activePage)) {
    navLink.classList.add("active");
  } else {
    console.log("Hi")
  }
})

