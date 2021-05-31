import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Creates a input for entering color values, with a preview swatch.
 * <div><img src="https://www.minimalcomps2.com/images/colorpicker.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Colon(panel, 20, 20, "#f00", event => console.log(event.target.color));
 * @extends Component
 */
export class ColorPicker extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this color picker to.
   * @param {number} x - The x position of the color picker. Default 0.
   * @param {number} y - The y position of the color picker. Default 0.
   * @param {string} text - The text shown in the text label of the color picker. Default empty string.
   * @param {string} color - The initial color value of the color picker. Default #f00.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, color, defaultHandler) {
    super(parent, x, y);
    if (typeof(arguments[4]) !== "string") {
      // don't break the original signature, which was:
      // new ColorPicker(parent, x, y, color, defaultHandler);
      text = "";
      color = arguments[3];
      defaultHandler = arguments[4];
    }
    color = color || "#f00";
    this._text = text || "";
    this._textPosition = "top";
    this._color = this._correctColor(color);
    this._color = this._cropColor(color);

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalColorPicker");

    this.input = this._createInput(this.wrapper, "MinimalColorPickerInput");
    this.input.maxLength = 7;
    this.input.value = this._color;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.preview = this._createDiv(this.wrapper, "MinimalColorPickerPreview");
    this.preview.style.backgroundColor = this.color;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.colorpicker;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInput = this._onInput.bind(this);
    this.input.addEventListener("input", this._onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput() {
    const color = this._correctColor(this.input.value);
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

  _correctColor(color) {
    color = "#" + color.replace(/[^0-9a-fA-F]/g, "");
    return color.toUpperCase();
  }

  _cropColor(color) {
    if (color.length > 7) {
      color = color.substring(0, 7);
    }
    return color;
  }

  _updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  /**
   * Adds a handler function for the "change" event on this color picker.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Sets the color of this component.
   * @param {string} color - The color to set.
   * @returns This instance, suitable for chaining.
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Sets the color value using three values for red, green and blue.
   * @param {number} r - The value of the red channel (0 - 255).
   * @param {number} g - The value of the red channel (0 - 255).
   * @param {number} b - The value of the red channel (0 - 255).
   * @returns This instance, suitable for chaining.
   */
  setRGB(r, g, b) {
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);
    if (red.length === 1) {
      red = "0" + red;
    }
    if (green.length === 1) {
      green = "0" + green;
    }
    if (blue.length === 1) {
      blue = "0" + blue;
    }
    if ( red.charAt(0) === red.charAt(1) && green.charAt(0) === green.charAt(1) && blue.charAt(0) === blue.charAt(1)) {
      red = red.charAt(0);
      green = green.charAt(0);
      blue = blue.charAt(0);
    }
    this.color = red + green + blue;
    return this;
  }

  /**
   * Sets the color value using a single 24-bit number.
   * @param {number} num - The number to parse into a color value. This would usually be in decimal (e.g. 16777215) or hexadecimal (e.g. 0xffffff).
   * @returns This instance, suitable for chaining.
   */
  setNumber(num) {
    const red = num >> 16;
    const green = num >> 8 & 255;
    const blue = num & 255;
    this.setRGB(red, green, blue);
    return this;
  }

  /**
   * Sets the color value to a random RGB value.
   * @returns This instance, suitable for chaining.
   */
  setRandom() {
    this.setNumber(Math.random() * 0xffffff);
    return this;
  }

  /**
   * Sets the text of this color picker.
   * @param {string} text - The text to set on this color picker.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
  }

  /**
   * Gets the current value of this component as a single 24-bit number from 0 to 16777215 (0x000000 to 0xffffff).
   * @returns {number} The numeric representation of this color picker's color.
   */
  getNumber() {
    const c = this.color.substring(1);
    if (c.length === 3) {
      let r = c.charAt(0);
      let g = c.charAt(1);
      let b = c.charAt(2);
      r += r;
      g += g;
      b += b;
      return parseInt(r + g + b, 16);
    }
    return parseInt(c, 16);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets the red channel of the current color value as a numerical value from 0 to 255.
   */
  get red() {
    return this.getNumber() >> 16;
  }

  /**
   * Gets the green channel of the current color value as a numerical value from 0 to 255.
   */
  get green() {
    return this.getNumber() >> 8 & 255;
  }

  /**
   * Gets the blue channel of the current color value as a numerical value from 0 to 255.
   */
  get blue() {
    return this.getNumber() & 255;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.label.enabled = enabled;
      this.input.disabled = !this.enabled;
      if (this.enabled) {
        this.preview.setAttribute("class", "MinimalColorPickerPreview");
        this.input.addEventListener("input", this._onInput);
      } else {
        this.preview.setAttribute("class", "MinimalColorPickerPreviewDisabled");
        this.input.removeEventListener("input", this._onInput);
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
    color = this._correctColor(color);
    color = this._cropColor(color);
    this._color = color;
    this.input.value = color;
    this.preview.style.backgroundColor = color;
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this._updateLabel();
  }

  /**
   * Gets and sets the text of the color picker's text label.
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
   * Gets and sets the position of the text label displayed on the color picker. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
  }
}

customElements.define("minimal-colorpicker", ColorPicker);
