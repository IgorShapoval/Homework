// 1.Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

const milk = {
  name: "Milk",
  quantity: 2,
  isBought: true,
  price: 40,
  priceAll() {
    return this.quantity * this.price;
  },
};

const water = {
  name: "Water",
  quantity: 1,
  isBought: true,
  price: 20,
  priceAll() {
    return this.quantity * this.price;
  },
};

const ice = {
  name: "Ice",
  quantity: 1,
  isBought: false,
  price: 25,
  priceAll() {
    return this.quantity * this.price;
  },
};

const banana = {
  name: "Banana",
  quantity: 2,
  isBought: false,
  price: 5,
  priceAll() {
    return this.quantity * this.price;
  },
};

const shoppingList = [milk, water, ice, banana];

console.log(shoppingList);

// -Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function sortShoppingList() {
  const sortedList = [...shoppingList].sort(
    (ferstEl, secondEl) => ferstEl.isBought - secondEl.isBought
  );
  return sortedList;
}

console.log(sortShoppingList());

// -Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function buyProduct(productName) {
  const findProduct = shoppingList.find(
    (product) =>
      product.name.toLocaleLowerCase() === productName.toLocaleLowerCase()
  );
  if (findProduct.isBought) {
    return;
  }
  findProduct.isBought = true;
  return findProduct;
}

console.log(buyProduct("Banana"));

// 2.Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removingProduct(productName) {
  const findProduct = shoppingList.indexOf(productName);
  const removList = [...shoppingList];
  const removeProduct = removList.splice(findProduct, 1);
  return removList;
}

console.log(removingProduct(water));
console.log(shoppingList);

// 3.Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
//  При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const orange = {
  name: "Orange",
  quantity: 1,
  isBought: true,
  price: 15,
  priceAll() {
    return this.quantity * this.price;
  },
};

function addedProduct(productName) {
  const findProduct = shoppingList.find((product) => product === productName);
  if (findProduct) {
    findProduct.quantity += 1;
  } else shoppingList.push(productName);

  return shoppingList;
}

console.log(addedProduct(orange));

// 4.Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function allPrice(productList) {
  let total = 0;
  productList.reduce((prevEl, product) => {
    total += product.priceAll();
  }, 0);
  return total;
}

console.log(allPrice(shoppingList));
// 5.Підрахунок суми всіх (не) придбаних продуктів.

function allPriceNotBuy() {
  const filterProduct = shoppingList.filter(
    (product) => product.isBought === false
  );
  return allPrice(filterProduct);
}

console.log(allPriceNotBuy());
