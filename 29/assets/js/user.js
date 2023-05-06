const refs = {
  form: document.querySelector(".form"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { name, role },
  } = e.currentTarget;

  if (
    role.value.toLowerCase() !== "admin".toLowerCase() &&
    role.value.toLowerCase() !== "user".toLowerCase()
  ) {
    alert("Некоректні данні");
    return;
  }

  if (role.value.toLowerCase() === "admin".toLowerCase()) {
    console.log(new Admin(`${name.value}`, `${role.value}`));
  }

  if (role.value.toLowerCase() === "user".toLowerCase()) {
    console.log(new User(`${name.value}`, `${role.value}`));
  }
}

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  login() {}
  logout() {}
  сhangeName(newName) {
    this.name = newName;
  }
  changePassword() {}
}

class Admin extends User {
  constructor(name, role) {
    super(name, role);
  }

  addUser() {}
  removeUser() {}
  changeUserRole() {}
  getAllUsers() {}
  removeAllUsers() {}
}
