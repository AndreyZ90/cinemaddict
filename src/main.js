import UserRank from './components/user-rank.js';
import Navigation from './components/navigation.js';
import SortList from './components/sort-list.js';
import Films from './components/films.js';
import FilmsList from './components/films-list.js';
import FilmCard from './components/film-card.js';
import ShowMoreButton from './components/show-more-button.js';

import {createFilms} from './mocks/films.js';
import {render} from './helpers/common.js';

const FILMS_COUNT = 16;

const films = createFilms(FILMS_COUNT);

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

render(headerContainer, new UserRank().getElement(), `beforeend`);
render(mainContainer, new Navigation().getElement(), `beforeend`);
render(mainContainer, new SortList().getElement(), `beforeend`);
render(mainContainer, new Films().getElement(), `beforeend`);

const filmsContainer = document.querySelector(`.films`);

render(filmsContainer, new FilmsList().getElement(), `beforeend`);

const filmsListContainer = filmsContainer.querySelector(`.films-list`);
const filmListCardContainer = filmsListContainer.querySelector(`.films-list__container`);

films.forEach((film) => render(filmListCardContainer, new FilmCard(film).getElement(), `beforeend`));

render(filmsListContainer, new ShowMoreButton().getElement(), `beforeend`);

