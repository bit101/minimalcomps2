import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Creates a clickable checkbox with a label that toggles on and off when clicked.
 * <div><img src="https://www.minimalcomps2.com/images/checkbox.png"/></div>
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

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 10);
    this.checked = checked;
    this.addEventListener("click", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalCheckbox");
    this.wrapper.tabIndex = 0;
    this.check = this.createDiv(this.wrapper, "MinimalCheckboxCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.checkbox;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this.onClick);
    this.wrapper.addEventListener("keypress", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new CustomEvent("click", { detail: this.checked }));
    }
  }

  onKeyPress(event) {
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

  updateCheckStyle() {
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
    this.updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.updateCheckStyle();
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
      } else {
        this.wrapper.tabIndex = -1;
      }
    }
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

  set width(w) {
    this.wrapper.style.width = this.label.width + 15 + "px";
  }
}

customElements.define("minimal-checkbox", Checkbox);

