// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml().

// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml().

const refs = {
  tbody: document.querySelector(".tbody"),
};

class Employee {
  #salary;

  constructor({ firstName, lastName, age, salary }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#salary = newSalary;
  }
}

const bob = new Employee({
  firstName: "Bob",
  lastName: "Ivanov",
  age: 30,
  salary: 12000,
});

const tamara = new Employee({
  firstName: "Tamara",
  lastName: "Ivanova",
  age: 28,
  salary: 11000,
});

const oleg = new Employee({
  firstName: "Oleg",
  lastName: "Ivanov",
  age: 35,
  salary: 15000,
});

const igor = new Employee({
  firstName: "Igor",
  lastName: "Ivanov",
  age: 30,
  salary: 13000,
});

const employees = [bob, tamara, oleg, igor];

console.log(employees);

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    const markupTable = this.employees
      .map((employee, index) => {
        return `<tr>
          <th>${index + 1}</th>
          <th>${employee.firstName} ${employee.lastName}</th>
          <th>${employee.salary}</th>
        </tr>`;
      })
      .join("");

    refs.tbody.insertAdjacentHTML("beforeend", markupTable);
  }
}

const employeesTable = new EmpTable(employees);

employeesTable.getHtml();
