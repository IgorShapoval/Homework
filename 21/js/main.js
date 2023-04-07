// Напиши всі можливі варіанти створення функцій.

function fu() {}

const fn1 = function () {};

const fn2 = () => {};

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function givNumOfArg() {
  return arguments.length;
}

console.log(givNumOfArg(1, 2, 3, 4));

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function comparingNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(comparingNumbers(6, 6));

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorialOfNumber(a) {
  let factorial = 1;

  for (let i = 1; i <= a; i += 1) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorialOfNumber(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function conversionIntoOneNumber(a, b, c) {
  const oneNumber = "" + a + b + c;

  return Number(oneNumber);
}

console.log(conversionIntoOneNumber(1, 2, 5));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calculateArea(a, b) {
  let area;

  if (!b) {
    area = a ** 2;
  } else {
    area = a * b;
  }

  return area;
}

console.log(calculateArea(10, 5));

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumber(num) {
  let sum = 0;

  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (num === sum) {
    return `Число ${num} - є досконалим числом`;
  }
  return `Число ${num} - не є досконалим числом`;
}

console.log(perfectNumber(24));
console.log(perfectNumber(28));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function perfectNumberFromRange(min, max) {
  for (let i = min; i <= max; i += 1) {
    if (perfectNumber(i) === `Число ${i} - є досконалим числом`) {
      console.log(perfectNumber(i));
    }
  }
}
console.log(perfectNumberFromRange(2, 100));
