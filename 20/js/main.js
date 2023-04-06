// 1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let message = "";
const age = Number(prompt("Введіть ваш вік"));

if (age >= 0 && age <= 11) {
  message = "Дитина";
} else if (age >= 12 && age <= 17) {
  message = "Підліток";
} else if (age >= 18 && age <= 59) {
  message = "Дорослий";
} else if (age >= 60 && age < 130) {
  message = "Пенсіонер";
} else {
  message = "Ви ввели не коректні данні";
}

console.log(message);

// 2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let specialCharacter = "";
const num = Number(prompt("Введіт чісло від 0 до 9"));

switch (num) {
  case 1:
    specialCharacter = "!";
    break;
  case 2:
    specialCharacter = "@";
    break;
  case 3:
    specialCharacter = "#";
    break;
  case 4:
    specialCharacter = "$";
    break;
  case 5:
    specialCharacter = "%";
    break;
  case 6:
    specialCharacter = "^";
    break;
  case 7:
    specialCharacter = "&";
    break;
  case 8:
    specialCharacter = "*";
    break;
  case 9:
    specialCharacter = "(";
    break;
  case 0:
    specialCharacter = ")";
    break;
  default:
    specialCharacter = "Ви ввели не правильне число";
}
console.log(specialCharacter);

// 3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const firstNum = Number(prompt("Введіть перше чісло"));
const secondNum = Number(prompt("Введіть друге чісло"));
let sumNum = 0;

for (let i = firstNum; i <= secondNum; i += 1) {
  sumNum += i;
}

console.log(sumNum);

// 4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNumber = Number(prompt("Введіть перше чісло"));
const secondNumber = Number(prompt("Введіть друге чісло"));

let greatestDivisor = firstNumber > secondNumber ? secondNumber : firstNumber;

console.log(`Найбільший спільний дільник ${greatestDivisor}`);

// 5.Запитай у користувача число і виведи всі дільники цього числа.

const number = Number(prompt("Дай число"));
console.log(`Дільники числа ${number}:`);
for (let i = 1; i <= number; i += 1) {
  console.log(i);
}

// 6.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const fivedigitNumber = Number(prompt("Введіть п’ятирозрядне число"));
const numInStr = String(fivedigitNumber);
let palindrome = "";
for (let i = numInStr.length - 1; i >= 0; i -= 1) {
  palindrome += numInStr[i];
}

if (fivedigitNumber === Number(palindrome)) {
  console.log(
    `Число ${Number(palindrome)} є паліндромом числа ${fivedigitNumber}`
  );
} else {
  console.log(
    `Число ${Number(palindrome)} не є паліндромом числа ${fivedigitNumber}`
  );
}

// 7.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const amount = Number(prompt("Введіть суму покупки"));
let discount = null;

if (amount >= 200 && amount < 300) {
  discount = 0.03;
} else if (amount >= 300 && amount < 500) {
  discount = 0.05;
} else if (amount >= 500) {
  discount = 0.07;
} else {
  discount = 0;
}

console.log(`Ваша знижка ${discount}%`);

// 8.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let addNum = 0;
let negativNum = 0;
let zero = 0;
let evenNum = 0;
let oddNum = 0;

for (let i = 0; i < 10; i += 1) {
  const tenNumbers = Number(prompt("Введіть 10 чисел"));

  if (tenNumbers === 0) {
    zero += 1;
  } else if (tenNumbers > 0) {
    addNum += 1;
  } else {
    negativNum += 1;
  }

  if (tenNumbers % 2 === 0) {
    evenNum += 1;
  } else {
    oddNum += 1;
  }
}

console.log(
  `Ви ввели ${addNum} додатніх чисел, ${negativNum} від'ємних чисел і ${zero} нулів, з них парних ${evenNum} і непарних ${oddNum}`
);

// 9.Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const daysWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
  "Неділя",
];

for (let i = 0; i < Infinity; i += 1) {
  const result = prompt(`${daysWeek[i]}. Хочеш побачити наступний день?`);
  if (result === null) {
    break;
  }
}

// 10.Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
//  Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100.
//  І так до тих пір, поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").

// 11.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let i = 2; i <= 9; i += 1) {
  console.log(`таблиця множення на - ${i}`);
  for (let j = 1; j <= 10; j += 1) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 12.Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
