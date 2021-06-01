import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a single line input field for entering text.
 * <div><img src="https://www.minimalcomps2.com/images/textinput.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new TextInput(panel, 20, 20, "Hello", event => console.log(event.target.text));
 * @extends Component
 */
export class TextInput extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this text input to.
   * @param {number} x - The x position of the text input. Default 0.
   * @param {number} y - The y position of the text input. Default 0.
   * @param {string} text - The initial text to display in the text input. Default empty string.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._maxLength = 0;
    this._text = text || "";

    this._createStyle();
    this._createChildren();
    this._createListeners();

    this.setSize(100, 20);
    this.addEventListener("input", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.input = this._createInput(this.shadowRoot, "MinimalTextInput");
    this.input.value = this._text;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textinput;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInput = this._onInput.bind(this);
    this.input.addEventListener("input", this._onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput(event) {
    event.stopPropagation();
    this._text = this.input.value;
    this.dispatchEvent(new CustomEvent("input", { detail: this.text }));
  }

  /**
   * Adds a handler function for the "input" event on this component.
   * @param {function} handler - A function that will handle the "input" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("input", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("input", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the text of this text input.
   * @param {string} text - The text of this text input.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
  }

  /**
   * Sets the maximum number of characters in this text input.
   * @param {number} maxLength - The max number of chars.
   * @returns This instance, suitable for chaining.
   */
  setMaxLength(maxLength) {
    this.maxLength = maxLength;
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
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.input.disabled = !this.enabled;
      if (this.enabled) {
        this.input.addEventListener("input", this._onInput);
      } else {
        this.input.removeEventListener("input", this._onInput);
      }
    }
  }

  /**
   * Gets and sets the maximum length of the string that can be typed into the input.
   */
  get maxLength() {
    return this._maxLength;
  }

  set maxLength(maxLength) {
    this._maxLength = maxLength;
    this.input.maxLength = maxLength;
  }

  /**
   * Gets and sets the text in the input.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.input.value = text;
  }
}

customElements.define("minimal-textinput", TextInput);
