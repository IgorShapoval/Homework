// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// -поле, що зберігає радіус кола;
// -get-властивість, яке повертає радіус кола;
// -set-властивість, що встановлює радіус кола;
// -get-властивість, яке повертає діаметр кола;
// -метод, що обчислює площу кола;
// -метод, що обчислює довжину кола.

// Продемонструй роботу властивостей і методів.

class Circle {
  #radius = 0;

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(newRadius) {
    this.#radius = newRadius;
  }

  get diameter() {
    return 2 * this.#radius;
  }

  area() {
    return Math.round((Math.PI * this.#radius) ** 2);
  }

  length() {
    return Math.round(Math.PI * this.diameter);
  }
}

const cercle = new Circle(5);

console.log(cercle);
console.log("Радіус ", cercle.radius);
cercle.radius = 10;
console.log(cercle);
console.log("Діаметер ", cercle.diameter);
console.log("Площа ", cercle.area());
console.log("Довжина ", cercle.length());
