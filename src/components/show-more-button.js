export default class ShowMoreButton {
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
      `<button class="films-list__show-more">Show more</button>`
    );
  }
}
