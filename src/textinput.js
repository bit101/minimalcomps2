import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a single line input field for entering text.
 * <div><img src="https://www.minimalcomps2.com/images/textinput.png"/></div>
 * @extends Component
 */
export class TextInput extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this text input to.
   * @param {number} x - The x position of the text input.
   * @param {number} y - The y position of the text input.
   * @param {string} text - The initial text to display in the text input.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._maxLength = 0;
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("input", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.input = this.createInput(this.shadowRoot, "MinimalTextInput");
    this.input.value = this._text;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textinput;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInput = this.onInput.bind(this);
    this.input.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    this._text = this.input.value;
    this.dispatchEvent(new CustomEvent("input", { detail: this.text }));
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
        this.input.addEventListener("input", this.onInput);
      } else {
        this.input.removeEventListener("input", this.onInput);
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
