const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-close");
  document.body.style.overflowY = "hidden";
});
closeIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-close");
  document.body.style.overflowY = "scroll";
});
