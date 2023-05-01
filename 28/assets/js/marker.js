// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// -поле, яке зберігає колір маркера;
// -поле, яке зберігає кількість чорнил у маркері (у відсотках);
// -метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).

// Продемонструй роботу написаних методів.

const refs = {
  input: document.querySelector(".input"),
  text: document.querySelector(".text-wrap"),
};

refs.input.addEventListener("input", _.debounce(onInput, 400));

function onInput(e) {
  marker.text = e.target.value;
  if (marker.text) {
    marker.appendMarkup();
  }
}

class Marker {
  #colorMarker;
  amountInk;
  textString = null;

  constructor(color, amountInk) {
    this.#colorMarker = color;
    if (amountInk > 100) {
      this.amountInk = 100;
    } else {
      this.amountInk = amountInk;
    }
  }

  get color() {
    return this.#colorMarker;
  }

  set color(newColor) {
    return (this.#colorMarker = newColor);
  }

  get amountInk() {
    return this.amountInk;
  }

  set amountInk(amount) {
    return (this.amountInk = amount);
  }

  get text() {
    return this.textString;
  }

  set text(text) {
    return (this.textString = text);
  }

  createMarkup(text) {
    return `<p style="color: ${this.#colorMarker}">${text}</p>`;
  }

  appendMarkup(text) {
    for (let i = this.amountInk; i >= 0; i -= 0.5) {
      refs.text.insertAdjacentHTML(
        "beforeend",
        this.createMarkup(this.textString)
      );
      this.amountInk -= 0.5;
    }
  }
}

const marker = new Marker("green", 10);
console.log(marker);
