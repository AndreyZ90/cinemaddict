import UserRank from './components/user-rank.js';
import Navigation from './components/navigation.js';
import SortList from './components/sort-list.js';
import Films from './components/films.js';
import FilmsList from './components/films-list.js';
import FilmCard from './components/film-card.js';
import FilmDetails from './components/film-details.js';
import ShowMoreButton from './components/show-more-button.js';

import {createFilms} from './mocks/films.js';
import {render} from './helpers/common.js';

const FILMS_COUNT = 16;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

const films = createFilms(FILMS_COUNT);

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const showMoreButtonComponent = new ShowMoreButton();

render(headerContainer, new UserRank().getElement());
render(mainContainer, new Navigation().getElement());
render(mainContainer, new SortList().getElement());
render(mainContainer, new Films().getElement());

const filmsContainer = document.querySelector(`.films`);

render(filmsContainer, new FilmsList().getElement());

const filmsListContainer = filmsContainer.querySelector(`.films-list`);
const filmListCardContainer = filmsListContainer.querySelector(`.films-list__container`);

const renderFilm = (container, film) => {
  const filmCardComponent = new FilmCard(film).getElement();
  const filmDetailsComponent = new FilmDetails(film).getElement();

  const title = filmCardComponent.querySelector(`.film-card__title`);
  const poster = filmCardComponent.querySelector(`.film-card__poster`);
  const comments = filmCardComponent.querySelector(`.film-card__comments`);

  const closeButton = filmDetailsComponent.querySelector(`.film-details__close-btn`);

  [title, poster, comments].forEach((item) => item.addEventListener(`click`, () => {
    document.body.appendChild(filmDetailsComponent);
    document.body.classList.add(`hide-overflow`);

    closeButton.addEventListener(`click`, () => {
      document.body.removeChild(filmDetailsComponent);
      document.body.classList.remove(`hide-overflow`);
    });
  }));

  render(container, filmCardComponent, `beforeend`);
};

films.slice(0, showingFilmsCount).forEach((film) => renderFilm(filmListCardContainer, film));

showMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevShowingFilms = showingFilmsCount;
  showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

  if (prevShowingFilms < FILMS_COUNT) {
    films.slice(prevShowingFilms, showingFilmsCount).forEach((film) => renderFilm(filmListCardContainer, film));
  }

  if (showingFilmsCount >= FILMS_COUNT) {
    showMoreButtonComponent.getElement().remove();
    showMoreButtonComponent.removeElement();
  }
});

render(filmsListContainer, showMoreButtonComponent.getElement());

