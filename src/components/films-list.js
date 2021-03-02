export default class FilmsList {
  constructor() {
    this._element = null;
  }

  getTemplate(...args) {
    return this._createTemplate(...args);
  }

  getElement() {
    if (!this._element) {
      this._element = this._createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  _createElement(template) {
    const div = document.createElement(`div`);
    div.innerHTML = template;

    return div.firstChild;
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
