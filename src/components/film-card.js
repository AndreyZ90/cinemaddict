import AbstractComponent from "./abstract-component";

export default class FilmCard extends AbstractComponent {
  constructor(film) {
    super();

    this._film = film;
  }

  setOpenPopupClickHandler(handler) {
    const element = this.getElement();

    const title = element.querySelector(`.film-card__title`);
    const poster = element.querySelector(`.film-card__poster`);
    const comments = element.querySelector(`.film-card__comments`);

    [title, poster, comments].forEach((item) => item.addEventListener(`click`, handler));
  }

  _getTemplate() {
    return this._createTemplate(this._film);
  }

  _createTemplate(film) {
    const {
      filmInfo: {
        title,
        totalRating,
        runtime,
        poster,
        description,
        genre,
        release: {
          date
        }
      },
      userDetails: {
        watchlist,
        alreadyWatched,
        favorite
      },
      comments
    } = film;

    const isWatchListActiveClass = watchlist ? `film-card__controls-item--active` : ``;
    const isAlreadyWatchedActiveClass = alreadyWatched ? `film-card__controls-item--active` : ``;
    const isFavoriteActiveClass = favorite ? `film-card__controls-item--active` : ``;

    return (
      `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${new Date(date).getFullYear()}</span>
          <span class="film-card__duration">${Math.floor(runtime / 60)}h ${runtime % 60}m</span>
          <span class="film-card__genre">${genre[0]}</span>
        </p>
        <img src="./images/posters/${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${comments.length} comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchListActiveClass}">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isAlreadyWatchedActiveClass}">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavoriteActiveClass}">Mark as favorite</button>
        </form>
      </article>`
    );
  }
}
