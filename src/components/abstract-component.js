export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = this._createElement(this._getTemplate());
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
    throw new Error(`Abstract method not implemented: _createTemplate()`);
  }

  _getTemplate() {
    throw new Error(`Abstract method not implemented: _getTemplate`);
  }
}
