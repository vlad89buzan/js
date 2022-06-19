"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img");
  const poster = document.querySelector(".promo__bg");
  const genre = poster.querySelector(".promo__genre");
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector(".add");
  const addInput = addForm.querySelector(".adding__input");
  const checkbox = addForm.querySelector('[type="checkbox"]');
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };
  const makeChanges = () => {
    genre.textContent = "Drama";
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };
  const sortArray = (arr) => {
    arr.sort();
  };
  deleteAdv(adv);
  makeChanges();
  sortArray(movieDB.movies);

  function createMovieList(films, parent) {
    sortArray(films);
    parent.innerHTML = "";
    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }
  createMovieList(movieDB.movies, movieList);

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if(favorite){
        
        console.log('aaa');
      }
     
      movieDB.movies.push(newFilm);
     
      createMovieList(movieDB.movies, movieList);
    }

    e.target.reset();
  });
});
