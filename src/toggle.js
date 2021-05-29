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
   * @param {number} x - The x position of the toggle.
   * @param {number} y - The y position of the toggle.
   * @param {boolean} toggled - The initial toggled state of the toggle.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, toggled, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._textPosition = "top";

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(50, 20);
    this.toggled = toggled;
    this.updateLabel();
    this.addEventListener("click", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalToggle");
    this.wrapper.tabIndex = 0;
    this.label = new Label(this.wrapper, 0, -15, this._text);
    this.handle = this.createDiv(this.wrapper, "MinimalToggleHandle");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.toggle;
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
      this.dispatchEvent(new CustomEvent("click", { detail: this.toggled }));
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
   * Toggles the state of the toggle between toggled and not toggled.
   */
  toggle() {
    this.toggled = !this.toggled;
    this.updateToggle();
  }

  updateLabel() {
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

  updateToggle() {
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
    this.updateToggle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.label.enable = enabled;
      if (this.enabled) {
        this.setWrapperClass("MinimalToggle");
        this.wrapper.tabIndex = 0;
      } else {
        this.setWrapperClass("MinimalToggleDisabled");
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
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the toggle. Valid values are "top" (default), "left" and "bottom". Not applicable to a VSlider.
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
  }
}

customElements.define("minimal-toggle", Toggle);

