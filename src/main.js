import createUserRank from './components/user-rank.js';
import createNavigation from './components/navigation.js';
import createSortList from './components/sort-list.js';
import createFilms from './components/films.js';
import createFilmsList from './components/films-list.js';
import createFilmCard from './components/film-card.js';
import createShowMoreButton from './components/show-more-button.js';

import {createFilms as createFilmsMock} from './mocks/films.js';

const FILMS_COUNT = 16;

const films = createFilmsMock(FILMS_COUNT);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

render(headerContainer, createUserRank(), `beforeend`);
render(mainContainer, createNavigation(), `beforeend`);
render(mainContainer, createSortList(), `beforeend`);
render(mainContainer, createFilms(), `beforeend`);

const filmsContainer = document.querySelector(`.films`);

render(filmsContainer, createFilmsList(), `beforeend`);

const filmsListContainer = filmsContainer.querySelector(`.films-list`);
const filmListCardContainer = filmsListContainer.querySelector(`.films-list__container`);

films.forEach((film) => render(filmListCardContainer, createFilmCard(film), `beforeend`));

render(filmsListContainer, createShowMoreButton(), `beforeend`);

