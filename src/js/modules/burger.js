/*Burger Menu*/
document
  .querySelector(".burger-wrapper")
  .addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("open");
    document.querySelector(".header__menu").classList.toggle("open");
  });

document.querySelector(".menu__blur").addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("open");
  document.querySelector(".header__menu").classList.toggle("open");
});

document.querySelector(".menu__list").addEventListener("click", function (e) {
  if (e.target.classList.value === "menu__link") {
    document.querySelector(".burger").classList.toggle("open");
    document.querySelector(".header__menu").classList.toggle("open");
  }
});
