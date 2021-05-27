import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a clickable toggle that can be switched off and on.
 * <div><img src="https://www.minimalcomps2.com/images/toggle.png"/></div>
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
  constructor(parent, x, y, toggled, defaultHandler) {
    super(parent, x, y);

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(50, 20);
    this.toggled = toggled;
    this.addEventListener("click", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalToggle");
    this.wrapper.tabIndex = 0;
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
   * Toggles the state of the checkbox between toggled and not toggled.
   */
  toggle() {
    this.toggled = !this.toggled;
    this.updateToggle();
  }

  updateToggle() {
    console.log(this.toggled);
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
   * Sets and gets the toggled state of the checkbox.
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
      if (this.enabled) {
        this.setWrapperClass("MinimalToggle");
        this.wrapper.tabIndex = 0;
      } else {
        this.setWrapperClass("MinimalToggleDisabled");
        this.wrapper.tabIndex = -1;
      }
    }
  }
}

customElements.define("minimal-toggle", Toggle);

