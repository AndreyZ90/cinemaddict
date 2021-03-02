export default class UserRank {
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
      `<section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    );
  }
}
