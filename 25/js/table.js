// Створити HTML - сторінку з великою таблицею.При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
// Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

const tableHeadRef = document.querySelectorAll("th");
const tableBodyNameRef = document.querySelectorAll(".js-name");
const tableSalaryNameRef = document.querySelectorAll(".js-salary");
const table = document.querySelector("table");

tableHeadRef[0].addEventListener("click", sortByCity);
tableHeadRef[1].addEventListener("click", sortBySalary);

// console.log(tableBodyRef);

const sortNameTable = [...table.rows]
  .slice(1)
  .map((cityName) => cityName.firstElementChild.textContent)
  .sort((a, b) => a.localeCompare(b));

const sortSalaryTable = [...table.rows]
  .slice(1)
  .map((cityName) => Number(cityName.lastElementChild.textContent))
  .sort((a, b) => a - b);

console.log(sortSalaryTable);

function sortByCity() {
  tableBodyNameRef.forEach((el, index) => {
    el.textContent = sortNameTable[index];
  });
}

function sortBySalary() {
  tableSalaryNameRef.forEach((el, index) => {
    el.textContent = sortSalaryTable[index];
  });
}
