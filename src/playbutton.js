import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a clickable pushbutton with play/pause icons.
 * <div><img src="https://www.minimalcomps2.com/images/playbutton.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new PlayButton(panel, 20, 20, false, event => console.log("playing!"));
 * @extends Component
 */
export class PlayButton extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this play button to.
   * @param {number} x - The x position of the play button. Default 0.
   * @param {number} y - The y position of the play button. Default 0.
   * @param {boolean} playing - Whether the play button initially shows as playing.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, playing, defaultHandler) {
    super(parent, x, y);

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(40, 20);
    this.addEventListener("click", defaultHandler);
    this.playing = playing;
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.wrapper.tabIndex = 0;
    this._setWrapperClass("MinimalPlayButton");
    this._createPlayIcon();
    this._createPauseIcon();
  }

  _createPlayIcon() {
    this.playIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.playIcon.setAttribute("width", 12);
    this.playIcon.setAttribute("height", 12);
    this.playIcon.setAttribute("class", "MinimalPlayButtonIcon");

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute("points", "2, 0, 12, 6, 2, 12");
    this.playIcon.appendChild(arrow);
    this.wrapper.appendChild(this.playIcon);
  }

  _createPauseIcon() {
    this.pauseIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.pauseIcon.setAttribute("width", 12);
    this.pauseIcon.setAttribute("height", 12);
    this.pauseIcon.setAttribute("class", "MinimalPlayButtonIcon");

    const bar1 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    bar1.setAttribute("points", "1, 0, 5, 0, 5, 12, 1, 12");
    this.pauseIcon.appendChild(bar1);

    const bar2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    bar2.setAttribute("points", "7, 0, 11, 0, 11, 12, 7, 12");
    this.pauseIcon.appendChild(bar2);

    this.wrapper.appendChild(this.pauseIcon);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.playbutton;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onClick = this._onClick.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this.wrapper.addEventListener("click", this._onClick);
    this.wrapper.addEventListener("keyup", this._onKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this._playing = !this._playing;
      this._updateButton();
      this.dispatchEvent(new CustomEvent("click", { detail: this._playing }));
    }
  }

  _onKeyUp(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateButton() {
    if (this._playing) {
      this.playIcon.style.display = "none";
      this.pauseIcon.style.display = "block";
    } else {
      this.playIcon.style.display = "block";
      this.pauseIcon.style.display = "none";
    }
  }

  /**
   * Adds a handler function for the "click" event on this button.
   * @param {function} handler - A function that will handle the "click" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("click", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("click", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets whether or not the button shows a pause icon (playing == true) or a play icon (playing == false).
   * @param {boolean} playing - Whether or not the button relects it is in a playing state.
   * @returns This instance, suitable for chaining.
   */
  setPlaying(playing) {
    this.playing = playing;
    return this;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalPlayButton");
      this.wrapper.tabIndex = 0;
    } else {
      this.wrapper.setAttribute("class", "MinimalPlayButtonDisabled");
      this.wrapper.tabIndex = -1;
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
  }

  /**
   * Gets and sets whether or not the button shows a pause icon (playing == true) or a play icon (playing == false).
   */
  get playing() {
    return this._playing;
  }

  set playing(playing) {
    this._playing = playing;
    this._updateButton();
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
  }
}

customElements.define("minimal-playbutton", PlayButton);

