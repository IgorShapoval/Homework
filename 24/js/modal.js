"use strict";

// 2.Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити".
//  Спочатку модальне вікно не відображається.При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const createModal = document.createElement("div");
const createModalWindow = document.createElement("div");
const createOverlay = document.createElement("div");
const textModal = document.createElement("p");
const createBtnOpen = document.createElement("button");
const createBtnClose = document.createElement("button");

textModal.textContent = "Текст модалки";
createBtnOpen.textContent = "Відкрити модалку";
createBtnClose.textContent = "Закрити модалку";

createModal.classList.add("modal");
createModalWindow.classList.add("modal-window");
createOverlay.classList.add("overlay");
createBtnOpen.classList.add("btn", "btn-open");
createBtnClose.classList.add("btn", "btn-close");

createModalWindow.append(textModal, createBtnClose);
createModal.append(createModalWindow, createOverlay);
main.prepend(createBtnOpen, createModal);

const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", () => {
  modal.classList.toggle("open");
});
btnClose.addEventListener("click", () => {
  modal.classList.toggle("open");
});
