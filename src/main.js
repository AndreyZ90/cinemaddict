import UserRank from './components/user-rank.js';

import PageController from './controllers/page.js';

import {createFilms} from './mocks/films.js';
import {render} from './helpers/common.js';

const FILMS_COUNT = 16;

const films = createFilms(FILMS_COUNT);

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const pageController = new PageController(mainContainer);

render(headerContainer, new UserRank());
pageController.render(films);

