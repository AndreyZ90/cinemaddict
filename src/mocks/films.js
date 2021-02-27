import {getRandomNumber, getRandomArray} from '../helpers/common.js';

import {
  titles,
  posters,
  directors,
  writers,
  actors,
  countries,
  genres,
  descriptions,
} from './const.js';

const createFilm = (id, comments = []) => {
  return {
    id,
    comments,
    filmInfo: {
      title: titles[getRandomNumber(0, titles.length - 1)],
      alternativeTitle: titles[getRandomNumber(0, titles.length - 1)],
      totalRating: (Math.random() * 10).toFixed(1),
      poster: posters[getRandomNumber(0, posters.length - 1)],
      ageRating: getRandomNumber(0, 18),
      director: directors[getRandomNumber(0, directors.length - 1)],
      writers: getRandomArray(writers),
      actors: getRandomArray(actors),
      release: {
        date: `2019-05-11T00:00:00.000Z`,
        releaseCountry: countries[getRandomNumber(0, countries.length - 1)]
      },
      runtime: getRandomNumber(59, 250),
      genre: getRandomArray(genres),
      description: descriptions[getRandomNumber(0, descriptions.length - 1)]
    },
    userDetails: {
      watchlist: Math.random() > 0.5 ? true : false,
      alreadyWatched: Math.random() > 0.5 ? true : false,
      watchingDate: `2019-04-12T16:12:32.554Z`,
      favorite: Math.random() > 0.5 ? true : false
    }
  };
};

const createFilms = (count) => {
  const films = [];

  for (let i = 0; i < count; i++) {
    films.push(createFilm(i));
  }

  return films;
};

export {createFilms};
