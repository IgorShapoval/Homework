// Створити HTML - сторінку для відображення / редагування тексту.При відкритті сторінки текст відображається за допомогою тега div.
//  При натисканні Ctrl + E,замість div з'являється textarea з тим же текстом, який тепер можна редагувати.
//  При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.
//  Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

const mainRef = document.querySelector(".main");
const textRef = document.querySelector(".text");

window.addEventListener("keydown", onKeyPress);

const textarea = document.createElement("textarea");
textarea.rows = 10;
textarea.cols = 30;

function onKeyPress(event) {
  if (event.ctrlKey && event.code === "KeyE") {
    event.preventDefault();
    textarea.value = textRef.textContent.trim();
    mainRef.innerHTML = " ";
    mainRef.prepend(textarea);
  }

  if (event.ctrlKey && event.code === "KeyS" && textarea.value !== "") {
    event.preventDefault();
    mainRef.innerHTML = `<div class = "text">${textarea.value}</div>`;
    console.log(event);
  }
}
