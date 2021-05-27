import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a input for entering color values, with a preview swatch.
 * <div><img src="https://www.minimalcomps2.com/images/colorpicker.png"/></div>
 * @extends Component
 */
export class ColorPicker extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this color picker to.
   * @param {number} x - The x position of the color picker.
   * @param {number} y - The y position of the color picker.
   * @param {string} color - The initial color value of the color picker.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, color, defaultHandler) {
    super(parent, x, y);
    this._color = this.correctColor(color);
    this._color = this.cropColor(color);

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalColorPicker");

    this.input = this.createInput(this.wrapper, "MinimalColorPickerInput");
    this.input.maxLength = 7;
    this.input.value = this._color;

    this.preview = this.createDiv(this.wrapper, "MinimalColorPickerPreview");
    this.preview.style.backgroundColor = this.color;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.colorpicker;
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
    const color = this.correctColor(this.input.value);
    this.input.value = color;
    if ((color.length === 4 || color.length === 7) && this.color !== color) {
      this._color = color;
      this.preview.style.backgroundColor = this.color;
      this.dispatchEvent(new CustomEvent("change", { detail: this.color }));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /* eslint-disable class-methods-use-this */
  correctColor(color) {
    color = "#" + color.replace(/[^0-9a-fA-F]/g, "");
    return color.toUpperCase();
  }

  cropColor(color) {
    if (color.length > 7) {
      color = color.substring(0, 7);
    }
    return color;
  }
  /* eslint-enable */

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
        this.preview.setAttribute("class", "MinimalColorPickerPreview");
        this.input.addEventListener("input", this.onInput);
      } else {
        this.preview.setAttribute("class", "MinimalColorPickerPreviewDisabled");
        this.input.removeEventListener("input", this.onInput);
      }
    }
  }

  /**
   * Sets and gets the color value of this color picker. Valid inputs are three or six character strings containing hexadecimal digits (0-9 and upper or lower case A-F), optionally preceded by a "#" character.
   * @example
   * colorpicker.color = "#f9c";
   * colorpicker.color = "#F9C";
   * colorpicker.color = "f9c";
   * colorpicker.color = "F9C";
   * colorpicker.color = "#ff99cc";
   * colorpicker.color = "#FF99CC";
   * colorpicker.color = "ff99cc";
   * colorpicker.color = "FF99CC";
   */
  get color() {
    return this._color;
  }

  set color(color) {
    color = this.correctColor(color);
    color = this.cropColor(color);
    this._color = color;
    this.input.value = color;
    this.preview.style.backgroundColor = color;
  }
}

customElements.define("minimal-colorpicker", ColorPicker);
