export default class SortList {
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
      `<ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
      </ul>`
    );
  }
}
