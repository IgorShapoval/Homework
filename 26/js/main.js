const MY_KEY = "eefd47684bf93c126bb0b38b3baeccd7";
let query = "";
let page = 1;

const formRef = document.querySelector(".form-inline");
const filmsListRef = document.querySelector(".films-list");
const paginationRef = document.querySelector(".pagination");
const modalRef = document.querySelector(".modal-content");

formRef.addEventListener("submit", onSubmit);
formRef.addEventListener("input", onSearch);
paginationRef.addEventListener("click", onButtonClickPage);
filmsListRef.addEventListener("click", onOpenFilmInfo);

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
        paginationRef.classList.remove("is-visible");
      } else {
        clearFilmList();
        paginationRef.classList.add("is-visible");
        return appendMarkupFilmsList(data.results);
      }
    })
    .catch((erorr) => console.log(erorr));
}

function createMarkupFilmsListItem(films) {
  const { poster_path, title, release_date, id } = films;

  return `<li class="films-list__item" aria-id="${id}">
            <img aria-id="${id}" src="https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}" alt="${title}" width="220"/>
            <div aria-id="${id}">${title}</div>
            <div aria-id="${id}">${release_date}</div>
        </li>`;
}

function createMarkupFilmsInfo(films) {
  const { backdrop_path, title, overview, release_date } = films;
  return `<div class="film-info">
        <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}"/>
        <div class="film-info__wrap">
          <div>${title}</div>
          <p>${overview}</p>
          <div>${release_date}</div>
        </div>
  </div>`;
}

function appendMarkupFilmsList(data) {
  const list = data.map((film) => createMarkupFilmsListItem(film)).join("");
  filmsListRef.insertAdjacentHTML("beforeend", list);
}

function appendMarkupFilmsInfo(film) {
  const info = createMarkupFilmsInfo(film);
  modalRef.insertAdjacentHTML("afterbegin", info);
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

function onOpenFilmInfo(e) {
  const filmId = e.target.getAttribute("aria-id");

  fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${MY_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((film) => {
      const filmInfo = document.querySelector(".film-info");
      if (filmInfo) {
        filmInfo.remove();
      }
      return appendMarkupFilmsInfo(film);
    });
}
