"use strict";

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const btnToggle = document.querySelector(".btn-toggle");

let index = 0;

function toggleColor() {
  const box = document.querySelectorAll(".box__item");

  if (index !== 0) {
    box[index - 1].classList.remove("active");
  }
  if (index >= box.length) index = 0;
  box[index].classList.add("active");
  index += 1;
}

btnToggle.addEventListener("click", toggleColor);
