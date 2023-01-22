// Button

document.querySelectorAll(".btn__inner").forEach((btn) => {
  btn.addEventListener("mouseenter", function (ev) {
    btn.previousElementSibling.style.left = `${ev.layerX}px`;
    btn.previousElementSibling.style.top = `${ev.layerY}px`;
  });
});

document.querySelectorAll(".btn__inner").forEach((btn) => {
  btn.addEventListener("mouseleave", function (ev) {
    btn.previousElementSibling.style.left = `${ev.layerX}px`;
    btn.previousElementSibling.style.top = `${ev.layerY}px`;
  });
});
