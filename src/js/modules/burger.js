/*Burger Menu*/
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const lockPadding = document.querySelectorAll(".lock-padding");
const body = document.body;
let unlock = true;
const timeout = 300;

document.querySelector(".burger-wrapper").addEventListener("click", () => {
  toggleBurger();
});

document.querySelector(".menu__blur").addEventListener("click", () => {
  toggleBurger();
});

document.querySelector(".menu__list").addEventListener("click", (e) => {
  if (e.target.classList.value === "menu__link") {
    toggleBurger();
  }
});

function toggleBurger() {
  burger.classList.toggle("open");
  menu.classList.toggle("open");

  burger.classList.contains("open") ? bodyLock() : bodyUnLock();
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector("body").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
