import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a multi-line scrollable input field for entering text.
 * <div><img src="https://www.minimalcomps2.com/images/textarea.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new TextArea(panel, 20, 20, "Hello", event => console.log(event.target.text));
 * @extends Component
 */
export class TextArea extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this text area to.
   * @param {number} x - The x position of the text area.
   * @param {number} y - The y position of the text area.
   * @param {string} text - The initial text to display in the text area.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 100);
    this.addEventListener("input", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.textArea = this.createElement(this.shadowRoot, "textArea", "MinimalTextArea");
    this.textArea.value = this._text;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textarea;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInput = this.onInput.bind(this);
    this.textArea.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    this._text = this.textArea.value;
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
      this.textArea.disabled = !this.enabled;
      if (this.enabled) {
        this.textArea.addEventListener("input", this.onInput);
      } else {
        this.textArea.removeEventListener("input", this.onInput);
      }
    }
  }

  /**
   * Gets and sets the text in the text area.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.textArea.value = text;
  }
}

customElements.define("minimal-textarea", TextArea);
