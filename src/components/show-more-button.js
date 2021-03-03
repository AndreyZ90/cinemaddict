import AbstractComponent from './abstract-component.js';

export default class ShowMoreButton extends AbstractComponent {
  _getTemplate() {
    return this._createTemplate();
  }

  _createTemplate() {
    return (
      `<button class="films-list__show-more">Show more</button>`
    );
  }
}
