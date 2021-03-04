import Navigation from '../components/navigation.js';
import SortList from '../components/sort-list.js';
import Films from '../components/films.js';
import FilmsList from '../components/films-list.js';
import FilmCard from '../components/film-card.js';
import FilmDetails from '../components/film-details.js';
import ShowMoreButton from '../components/show-more-button.js';

import {render, remove} from '../helpers/common.js';

const FILMS_COUNT = 16;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

const renderFilm = (container, film) => {
  const filmCardComponent = new FilmCard(film);
  const filmDetailsComponent = new FilmDetails(film);

  const openPopupClickHandler = () => {
    document.body.appendChild(filmDetailsComponent.getElement());
    document.body.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, escKeyDownHandler);

    filmDetailsComponent.setCloseButtonClickHandler(closePopupClickHandler);
  };

  const closePopupClickHandler = () => {
    document.body.removeChild(filmDetailsComponent.getElement());
    document.body.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, escKeyDownHandler);

    filmDetailsComponent.removeCloseButtonClickHandler(closePopupClickHandler);
  };

  const escKeyDownHandler = (evt) => {
    if (evt.key === `Esc` || evt.key === `Escape`) {
      closePopupClickHandler();
      document.removeEventListener(`keydown`, escKeyDownHandler);
    }
  };

  filmCardComponent.setOpenPopupClickHandler(openPopupClickHandler);

  render(container, filmCardComponent);
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._navigationComponent = new Navigation();
    this._sortListComponent = new SortList();
    this._filmsComponent = new Films();
    this._filmsListComponent = new FilmsList();
    this._showMoreButtonComponent = new ShowMoreButton();
  }

  render(films) {
    render(this._container, this._navigationComponent);
    render(this._container, this._sortListComponent);
    render(this._container, this._filmsComponent);

    const filmsContainer = document.querySelector(`.films`);

    render(filmsContainer, this._filmsListComponent);

    const filmsListContainer = filmsContainer.querySelector(`.films-list`);
    const filmListCardContainer = filmsListContainer.querySelector(`.films-list__container`);

    films.slice(0, showingFilmsCount).forEach((film) => renderFilm(filmListCardContainer, film));

    this._showMoreButtonComponent.setClickHandler(() => {
      const prevShowingFilms = showingFilmsCount;
      showingFilmsCount += SHOWING_FILMS_COUNT_BY_BUTTON;

      if (prevShowingFilms < FILMS_COUNT) {
        films.slice(prevShowingFilms, showingFilmsCount).forEach((film) => renderFilm(filmListCardContainer, film));
      }

      if (showingFilmsCount >= FILMS_COUNT) {
        remove(this._showMoreButtonComponent);
      }
    });

    render(filmsListContainer, this._showMoreButtonComponent);
  }
}
