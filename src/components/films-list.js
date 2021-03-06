import AbstractComponent from './abstract-component.js';

export default class FilmsList extends AbstractComponent {
  _getTemplate() {
    return this._createTemplate();
  }

  _createTemplate() {
    return (
      `<section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container"></div>
      </section>`
    );
  }
}
