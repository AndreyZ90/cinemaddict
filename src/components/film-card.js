const createFilmCard = (film) => {
  const {
    filmInfo: {
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
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${date}</span>
        <span class="film-card__duration">${runtime}</span>
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
};

export default createFilmCard;
