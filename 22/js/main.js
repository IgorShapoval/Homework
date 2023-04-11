/*
1.Створити склад з методами додавання на склад, пошуку по складу товара
і розрахунку ваги

*/

const sklad = {
  goods: [],
  findGoodById(id) {
    const search = this.goods.find((good) => good.id === id);
    if (!search) {
      return "Такого товару немає на складі";
    }
    return search;
  },
  addGoodL(good) {
    this.goods.push(good);
  },
  getWeightKg() {
    let totalWeigth = 0;
    this.goods.map((good) => {
      for (let key in good.weight) {
        totalWeigth += good.weight[key];
      }
    });
    return totalWeigth;
  },
};

const door = {
  id: 1,
  weight: {
    kg: 100,
  },
  brand: "Ikea",
};

const window = {
  id: 2,
  weight: {
    kg: 10,
  },
};

const paper = {
  id: 3,
  color: "red",
};

sklad.addGoodL(door);
sklad.addGoodL(window);
sklad.addGoodL(paper);
console.log(sklad);
console.log(sklad.findGoodById(2));
console.log(sklad.getWeightKg());
console.log("--------------------------------------");

// 2.Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// -Метод, який виводить на екран інформацію про автомобіль.
// -Додавання ім’я водія у список
// -Перевірка водія на наявність його ім’я у списку
// -Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const car = {
  manufacturer: "Volkswagen",
  model: "Golf",
  graduationYear: 2003,
  averageSpeed: 80,
  tankVolume: 45,
  fuelPerHundred: 5,
  drivers: [],
  carInfo() {
    return `Автомобіль ${this.manufacturer} ${this.model}, ${this.graduationYear} року виробництва.`;
  },
  addDriver(driver) {
    this.drivers.push(driver);
  },
  searchDriver(driverName) {
    if (this.drivers.includes(driverName)) {
      return `Водій ${driverName} є у списку`;
    }
    return `Водія ${driverName} немає`;
  },
  amountFuelAndTime(distance) {
    const fuel = (distance / 100) * this.fuelPerHundred;
    let time = distance / this.averageSpeed;
    if (time >= 4) {
      time += 1;
    } else if (time >= 8) {
      time += 2;
    }

    if (time > 12) {
      return `Відстань в ${distance} не можно подолати за одну добу`;
    }

    return `На таку відстань ${distance} км вам необхідно ${fuel} літрів палива та ${time} годин часу`;
  },
};
console.log(car);
console.log(car.carInfo());
car.addDriver("Igor");
console.log(car.searchDriver("Igor"));
console.log(car.amountFuelAndTime(800));
console.log("--------------------------------------");

// 3.Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// -Для виведення часу на екран.
// -Зміни часу на передану кількість секунд.
// -Зміни часу на передану кількість хвилин.
// -Зміни часу на передану кількість годин.
// -Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75».
//  Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const clock = {
  hour: new Date().getHours(),
  minute: new Date().getMinutes(),
  second: new Date().getSeconds(),
  getTime() {
    if (String(this.minute).length < 2) {
      this.minute = "0" + this.minute;
    }
    if (String(this.second).length < 2) {
      this.second = "0" + this.second;
    }
    if (String(this.hour).length < 2) {
      this.hour = "0" + this.hour;
    }
    return `${this.hour}:${this.minute}:${this.second}`;
  },
  setHour(hour) {
    if (!hour) {
      return;
    }
    this.hour = Math.floor(
      (new Date().setHours(new Date().getHours() + hour) / (1000 * 60 * 60)) %
        24
    );
    return this.hour;
  },
  setMinute(minute) {
    if (!minute) {
      return;
    }
    if (this.minute + minute >= 60) {
      this.hour += Math.ceil(minute / 60);
    }
    this.minute = Math.floor(
      (new Date().setMinutes(new Date().getMinutes() + minute) / (1000 * 60)) %
        60
    );

    return this.minute;
  },
  setSecond(second) {
    if (!second) {
      return;
    }
    if (this.second + second >= 60) {
      this.minute += Math.ceil(second / 60);
    }

    this.second = Math.floor(
      (new Date().setSeconds(new Date().getSeconds() + second) / 1000) % 60
    );
    return this.second;
  },
};

console.log(clock);
console.log(clock.getTime());
console.log(clock.setHour(13));
console.log(clock.getTime());
console.log(clock.setMinute(5));
console.log(clock.getTime());
console.log(clock.setSecond(120));
console.log(clock.getTime());
