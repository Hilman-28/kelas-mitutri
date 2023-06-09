// toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika option di klik
document.querySelect("#options").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk meghilanglan options
const options = document.querySelector("#options");
document.addEventListener("click", function (e) {
  if (!options.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
