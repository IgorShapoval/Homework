const MY_KEY = "eefd47684bf93c126bb0b38b3baeccd7";
let query = "";
let page = 1;

const formRef = document.querySelector(".form-inline");
const filmsListRef = document.querySelector(".films-list");
const paginationRef = document.querySelector(".pagination");

formRef.addEventListener("submit", onSubmit);
formRef.addEventListener("input", onSearch);
paginationRef.addEventListener("click", onButtonClickPage);

function onSubmit(e) {
  e.preventDefault();
  page = 1;
  getFilms();
}

function onSearch(e) {
  query = e.target.value;
}

function getFilms() {
  if (page <= 0) {
    page = 1;
  }
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.results.length <= 0) {
        filmsListRef.innerHTML = "<p class='erorr'>Movie not found!</p>";
        paginationRef.classList.toggle("is-visible");
      } else {
        clearFilmList();
        paginationRef.classList.toggle("is-visible");
        return appendMarkupFilmsList(data.results);
      }
    })
    .catch((erorr) => console.log(erorr));
}

function createMarkupFilmsListItem(films) {
  const { poster_path, title, release_date } = films;
  return `<li class="films-list__item">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}" alt="${title}" width="220"/>
            <div>${title}</div>
            <div>${release_date}</div>
        </li>`;
}

function appendMarkupFilmsList(data) {
  const list = data.map((film) => createMarkupFilmsListItem(film)).join("");
  filmsListRef.insertAdjacentHTML("beforeend", list);
}

function clearFilmList() {
  filmsListRef.innerHTML = "";
}

function onButtonClickPage(e) {
  if (e.target.getAttribute("aria-label") === "Previous") {
    page -= 1;
  }
  if (e.target.getAttribute("aria-label") === "Next") {
    page += 1;
  }

  getFilms();
}
