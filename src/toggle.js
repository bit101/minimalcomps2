import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Creates a clickable toggle that can be switched off and on.
 * <div><img src="https://www.minimalcomps2.com/images/toggle.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Toggle(panel, 20, 20, "Toggle", false, event => console.log(event.target.toggled));
 * @extends Component
 */
export class Toggle extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this toggle to.
   * @param {number} x - The x position of the toggle. Default 0.
   * @param {number} y - The y position of the toggle. Default 0.
   * @param {boolean} toggled - The initial toggled state of the toggle. Default false.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, toggled, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._textPosition = "top";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(50, 20);
    this.toggled = toggled || false;
    this._updateLabel();
    this.addEventListener("click", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalToggle");
    this.wrapper.tabIndex = 0;
    this.label = new Label(this.wrapper, 0, -15, this._text);
    this.handle = this._createDiv(this.wrapper, "MinimalToggleHandle");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.toggle;
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
      this.dispatchEvent(new CustomEvent("click", { detail: this.toggled }));
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
   * Toggles the state of the toggle between toggled and not toggled.
   */
  toggle() {
    this.toggled = !this.toggled;
    this._updateToggle();
  }

  _updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  _updateToggle() {
    if (this.toggled) {
      this.handle.style.left = "50%";
    } else {
      this.handle.style.left = 0;
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the toggled state of the toggle.
   */
  get toggled() {
    return this._toggled;
  }

  set toggled(toggled) {
    this._toggled = toggled;
    this._updateToggle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.label.enable = enabled;
      if (this.enabled) {
        this._setWrapperClass("MinimalToggle");
        this.wrapper.tabIndex = 0;
      } else {
        this._setWrapperClass("MinimalToggleDisabled");
        this.wrapper.tabIndex = -1;
      }
    }
  }

  /**
   * Gets and sets the text of the toggle's text label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this._updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the toggle. Valid values are "top" (default), "left" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
  }
}

customElements.define("minimal-toggle", Toggle);

