// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const a = 0.1;
const b = 0.2;
console.log((a + b).toFixed(1));

// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const c = "1";
const d = 2;
console.log(Number(c + d));

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flash = prompt("Вкажіть обсяг флешки в Гб");
const file = (flash * 1024) / 820;
console.log(`На цю флешку помістится ${Math.floor(file)} файлів по 820мб`);

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
console.log(`Ваша сумма нарахування за 2 місяці ${result.toFixed(2)} грн`);

// Що повернуть вирази:

// 2 && 0 && 3; =====> 0
// 2 || 0 || 3; =======> 2
// (2 && 0) || 3; =======> 3
