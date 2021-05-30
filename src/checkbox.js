import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Creates a clickable checkbox with a label that toggles on and off when clicked.
 * <div><img src="https://www.minimalcomps2.com/images/checkbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Checkbox(panel, 20, 20, "Check it", false, event => console.log(event.target.checked));
 * @extends Component
 */
export class Checkbox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this checkbox to.
   * @param {number} x - The x position of the checkbox.
   * @param {number} y - The y position of the checkbox.
   * @param {string} text - The text label of the checkbox.
   * @param {boolean} checked - The initial checked state of the checkbox.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, checked, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 10);
    this.checked = checked;
    this.addEventListener("click", defaultHandler);
    this._addToParent();
    this._updateWidth();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.setWrapperClass("MinimalCheckbox");
    this.wrapper.tabIndex = 0;
    this.check = this._createDiv(this.wrapper, "MinimalCheckboxCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.checkbox;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this._onClick);
    this.wrapper.addEventListener("keypress", this._onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new CustomEvent("click", { detail: this.checked }));
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Toggles the state of the checkbox between checked and not checked.
   */
  toggle() {
    this.checked = !this.checked;
  }

  _updateCheckStyle() {
    let className = this.checked
      ? "MinimalCheckboxCheckChecked "
      : "MinimalCheckboxCheck ";

    if (!this.enabled) {
      className += "MinimalCheckboxCheckDisabled";
    }
    this.check.setAttribute("class", className);
    if (this.enabled) {
      this.setWrapperClass("MinimalCheckbox");
    } else {
      this.setWrapperClass("MinimalCheckboxDisabled");
    }
  }

  _updateWidth() {
    this.style.width = this.label.x + this.label.width + "px";
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the checked state of the checkbox.
   */
  get checked() {
    return this._checked;
  }

  set checked(checked) {
    this._checked = checked;
    this._updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this._updateCheckStyle();
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
      } else {
        this.wrapper.tabIndex = -1;
      }
    }
  }

  /**
   * Gets and sets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this.label.height = h;
    this.check.style.top = Math.round((this.height - 10) / 2) + "px";
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
    this._updateWidth();
  }

  /**
   * Gets the width of this radio button. Setting the width does nothing because it is automatically determined by the width of the label.
   */
  get width() {
    return this.label.x + this.label.width;
  }

  set width(w) {
    w = w; // noop
  }
}

customElements.define("minimal-checkbox", Checkbox);

