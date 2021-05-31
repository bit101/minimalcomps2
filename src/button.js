import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Creates a clickable pushbutton with a text label.
 * <div><img src="https://www.minimalcomps2.com/images/button.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Button(panel, 20, 20, "Click me", event => console.log("clicked!"));
 * @extends Component
 */
export class Button extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this button to.
   * @param {number} x - The x position of the button. Default 0.
   * @param {number} y - The y position of the button. Default 0.
   * @param {string} text - The text label of the button. Default empty string.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text || "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.button.width, Defaults.button.height);
    this.addEventListener("click", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.wrapper.tabIndex = 0;
    this._setWrapperClass("MinimalButton");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.label.autosize = false;
    this.label.align = "center";
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.button;
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
      this.dispatchEvent(new Event("click"));
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

  /**
   * Sets the text of this button.
   * @param {string} text - The text to set on this button.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
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
    this.label.enabled = enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalButton");
      this.wrapper.tabIndex = 0;
    } else {
      this.wrapper.setAttribute("class", "MinimalButtonDisabled");
      this.wrapper.tabIndex = -1;
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.label.height = height;
  }

  /**
   * Sets and gets the text shown in the button's label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.label.width = width;
  }
}

customElements.define("minimal-button", Button);

