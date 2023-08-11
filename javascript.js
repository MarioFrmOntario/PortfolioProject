
/*only thing this does is allow the dropdown menu on the hamburger*/
function toggleMenu() {
  const menu = document.querySelector(".dropdown-items");
  const icon = document.querySelector(".menu-toggle");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
