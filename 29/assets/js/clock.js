const refs = {
  form: document.querySelector(".form-clock"),
  clockList: document.querySelector(".clock-list"),
};

refs.form.addEventListener("submit", createClock);

class WorldClock {
  constructor() {}

  getCurrentDate() {
    return new Date().toLocaleTimeString();
  }
  getCurrentDateTime() {
    return new Date().toLocaleString();
  }
  deleteClock(item) {
    item.remove();
  }
}

function createClock(e) {
  e.preventDefault();

  const clock = new WorldClock();

  const clockName = e.currentTarget.elements.clock.value;
  e.currentTarget.elements.clock.value = "";

  if (!clockName) {
    alert("Введіть ім'я годинника");
    return;
  }

  const itemList = document.createElement("li");
  itemList.classList.add("clock-list__item");

  const itemName = document.createElement("div");
  itemName.classList.add("clock-list__name");
  itemName.textContent = clockName;

  const itemTime = document.createElement("div");
  itemTime.classList.add("clock-list__time");
  itemTime.textContent = "Time";

  const btnList = document.createElement("div");
  btnList.classList.add("buttons");

  const btnTime = document.createElement("button");
  btnTime.classList.add("button", "is-info");
  btnTime.setAttribute("data-time", "time");
  btnTime.textContent = "Date + Time";

  const btnDate = document.createElement("button");
  btnDate.classList.add("button", "is-success");
  btnDate.setAttribute("data-time", "date");
  btnDate.textContent = "Time";

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("button", "is-danger");
  btnDelete.setAttribute("data-time", "delete");
  btnDelete.textContent = "Delete";

  btnList.append(btnTime, btnDate, btnDelete);

  itemList.append(itemName, itemTime, btnList);

  refs.clockList.append(itemList);

  const itemArr = [...refs.clockList.children];

  itemArr.forEach((item) => {
    btnList.addEventListener("click", (e) => {
      const data = e.target.dataset.time;

      if (data === "time") {
        itemTime.textContent = clock.getCurrentDate();
      }

      if (data === "date") {
        itemTime.textContent = clock.getCurrentDateTime();
      }

      if (data === "delete") {
        clock.deleteClock(item);
      }
    });
  });
}
