// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const a = 0.1;
const b = 0.2;
console.log((a + b).toFixed(1));

// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const c = "1";
const d = 2;
console.log(Number(c + d));

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

// const flash = prompt("Вкажіть обсяг флешки в Гб");
// const file = (flash * 1024) / 820;
// console.log(`На цю флешку помістится ${Math.floor(file)} файлів по 820мб`);

// 4.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let many = prompt("Cкільки грошей маете?(грн)");
const priceChocolate = prompt("Ціна однієї шоколадки?(грн)");
const quantityChocolate = Math.floor(many / priceChocolate);
many -= quantityChocolate * priceChocolate;
console.log(
  `Вам вистачае на ${quantityChocolate} шоколадок, ваша решта ${many.toFixed(
    2
  )} грн`
);

// 5.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const num = Number(prompt("Введіть тризначне число яке не починается з 0"));
const one = num % 10;
const two = Math.floor(num / 10) % 10;
const thre = Math.floor(num / 100);
let reverseNum = one * 100 + two * 10 + thre;

if (one === 0) {
  reverseNum = "0" + reverseNum;
  console.log(reverseNum);
} else {
  console.log(reverseNum);
}

// 6.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const sum = Number(
  prompt("Введіть сумму яку б хотіли покласти на депозит на 2 місяці")
);
const oneMonth = sum * (5 / 12 / 100);
const twoMonth = (sum + oneMonth) * (5 / 12 / 100);
const result = oneMonth + twoMonth;
// console.log(`Ваша сумма нарахування за 2 місяці ${result.toFixed(2)} грн`);

// Що повернуть вирази:

// 2 && 0 && 3; =====> 0
// 2 || 0 || 3; =======> 2
// (2 && 0) || 3; =======> 3

// 1.
// Ваша годинна ставка 80 $ і ви готові працювати не більше 5 годин на день 5 днів на тиждень (крім вихідних).
// До вас приходить замовник і пропонує замовлення на 40 годин роботи. Нині понеділок.
// Ви повинні поїхати за 11 днів.
// Вивести в консоль:
// - Boolean змінну чи встигнете ви взятися за роботу
// - Скільки ви за неї попросите?

const rate = 80;
const workPerDay = 5;
const order = 40;
const days = 11;
if (order <= days * workPerDay - 10) {
  console.log(`Так я беру ваше замовлення з вас ${rate * order}$`);
} else {
  console.log("Не буре замовдення, мені не вистачае часу");
}

// 2.
// Олег вклав 15000$ під 7% річних, вивести в консоль чи зможе він купити дім за 20000$ через 2 роки, і залишок якщо є.
// const housePrice = 20000;
let deposit = 15000;
const percentages = 7;
for (let year = 1; year <= 2; year += 1) {
  deposit += deposit * (percentages / 100);
}
if (deposit >= housePrice) {
  console.log(
    `Ви можете купити будинок за ${housePrice}$, ваша решта ${(
      deposit - housePrice
    ).toFixed(2)}$.`
  );
} else {
  console.log(
    `Ви не можете купити будинок, вам невістачае ${housePrice - deposit}$.`
  );
}

// 3.
// Методом promt отримати відповідь від користувача “Скільки буде 10 + або - 20”. Якщо відповідь вірна вивести в консоль Успіх якщо ні Лузер. Якщо користувач введе Я не лузер вивести теж Успіх.

const howMuch = prompt("Скільки буде 10 + 20").toLowerCase();

if (Number(howMuch) === 30 || howMuch === "я не лузер") {
  console.log("Успіх");
} else {
  console.log("Лузер");
}

// 4.
// Користувач хоче купити артефакт. Він може це зробити лише:
// його баланс більше 1500 (balance), або кількість бонусів більше 200 (bonusBalance)
// він не робото (isRobot)
// артефакт не куплений (isExist)
// артефакт у продажу (isSaling)
// Написати умову для покупки вивести результат в консоль

let balance = 1600;
let bonusBalance = 190;
const isRobot = false;
const isExist = true;
const isSaling = true;

if (
  (balance >= 1500 || bonusBalance >= 200) &&
  !isRobot &&
  isSaling &&
  isExist
) {
  console.log("Ви можете придбати артефакт");
} else {
  console.log("Ви не можете придбати артефакт");
}

// 5.
// В нас є сервер розміром 1024мб (memoryStore).
// Є 3 ролі користувача ceo/admin/user (role).
// CEO - може розміщувати до 100мб файл.
// Admin - може розміщувати до 50мб файл.
// User - може розміщувати до 10мб файл.
// За допомогою методу promt дізнатися роль користувача і яким розміром файл він хоче розмістити, якщо розмір більший то вивести помилку.
// *** Зробити повторні запити і вираховувати кількість вільної памʼяті, якщо памʼяті не вистачає зупинити опитування

let memoryStore = 1024;
let memoryRole = null;
const role = prompt("Ваша роль?").toLowerCase();
const memory = prompt("Яким розміром файл ви хоче розмістити?");

switch (role) {
  case "ceo":
    memoryRole = 100;
    break;
  case "admin":
    memoryRole = 50;
    break;
  default:
    memoryRole = 10;
}

if (memoryRole < memory) {
  console.log("Вам не дозволено розміщувати файли такого розміру!");
} else {
  memoryStore -= memory;
  console.log(`На сервері залишилось ${memoryStore} памяті`);
}
