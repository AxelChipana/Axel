// Menu
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

// menu
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}
closeBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
// DETENER SCROLL AL ABRIR NAVBAR
menuBtn.addEventListener("click", () => {
  document.body.style.overflow="hidden";
  })
  closeBtn.addEventListener("click", () => {
  document.body.style.overflow="initial";
  })


// THEME SWITCHER
const input = document.querySelector(".theme-switcher input");
input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});








