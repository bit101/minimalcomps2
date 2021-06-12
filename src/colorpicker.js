import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";
import { VSlider } from "./vslider.js";

/**
 * Creates a input for entering color values, with a preview swatch. Now includes optional sliders for visually setting colors.
 * <div><img src="https://www.minimalcomps2.com/images/colorpicker.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new ColorPicker(panel, 20, 20, "Color", "#f00", event => console.log(event.target.color));
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
    this._textPosition = Defaults.colorpicker.textPosition;
    this._color = this._correctColor(color);
    this._color = this._cropColor(color);
    this._sliderPosition = "bottom";
    this._useSliders = true;
    this._width = 100;
    this._height = 20;

    this._createChildren();
    this._createStyle();
    this._createListeners();

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

    this.sliderContainer = this._createDiv(this.wrapper, "MinimalColorPickerSliders");
    this.redSlider = new VSlider(this.sliderContainer, 12, 20, "R", this.red, 0, 255).setHeight(100);
    this.greenSlider = new VSlider(this.sliderContainer, 42, 20, "G", this.green, 0, 255).setHeight(100);
    this.blueSlider = new VSlider(this.sliderContainer, 72, 20, "B", this.blue, 0, 255).setHeight(100);

    this.preview = this._createDiv(this.wrapper, "MinimalColorPickerPreview");
    this.preview.style.backgroundColor = this.color;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.colorpicker;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onFocus = this._onFocus.bind(this);
    this._onInput = this._onInput.bind(this);
    this._updateFromSliders = this._updateFromSliders.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);

    this.redSlider.addHandler(this._updateFromSliders);
    this.greenSlider.addHandler(this._updateFromSliders);
    this.blueSlider.addHandler(this._updateFromSliders);
    this.input.addEventListener("input", this._onInput);
    this.input.addEventListener("focus", this._onFocus);
    this.addEventListener("keydown", this._onKeyPress);
    this.addEventListener("blur", () => this.showSliders(false));
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
      this._updateSliders();
      this.dispatchEvent(new CustomEvent("change", { detail: this.color }));
    }
  }

  _onFocus() {
    this.showSliders(true);
  }

  _updateFromSliders() {
    const red = this.redSlider.value;
    const green = this.greenSlider.value;
    const blue = this.blueSlider.value;
    this.setRGB(red, green, blue);
    this.dispatchEvent(new CustomEvent("change", { detail: this.color }));
  }

  _onKeyPress(event) {
    if (event.keyCode === 27) {
      // escape
      this.showSliders(false);
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

  _updateSliders() {
    this.redSlider.value = this.red;
    this.greenSlider.value = this.green;
    this.blueSlider.value = this.blue;
  }

  _updateSliderPosition() {
    if (this._sliderPosition === "bottom") {
      this.sliderContainer.style.top = "25px";
    } else if (this._sliderPosition === "top") {
      this.sliderContainer.style.top = "-155px";
    }
  }

  /**
   * Programatically show or hide the slider container for setting rgb values visually.
   * @param {boolean} show - Whether to show or hide the sliders.
   * @returns This instance, suitable for chaining.
   */
  showSliders(show) {
    if (show && this._useSliders) {
      this.initialZ = this.style.zIndex;
      this.style.zIndex = Style.popupZIndex;
      this.sliderContainer.style.display = "block";
    } else {
      this.style.zIndex = this.initialZ;
      this.sliderContainer.style.display = "none";
    }
    return this;
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
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
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
   * Gets and sets the position of the slider popup.
   * @param {string} position - The position where the popup will open. Valid values are "bottom" (default) and "top".
   * @returns This instance, suitable for chaining.
   */
  setSliderPosition(position) {
    this.sliderPosition = position;
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

  /**
   * Sets whether clicking into the input area will open up a pane with sliders for setting colors visually.
   * @param {boolean} useSliders - Whether or not to use the slider ui.
   * @returns This instance, suitable for chaining.
   */
  setUseSliders(useSliders) {
    this.useSliders = useSliders;
    return this;
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
    this._updateSliders();
  }

  /**
   * Sets and gets the height of this component. In reality, this component is fixed size, so setting height or width has no effect.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    // noop
    h = h;
  }

  /**
   * Gets and sets the position of the slider popup. Valid values are "bottom" (default) and "top".
   */
  get sliderPosition() {
    return this._sliderPosition;
  }

  set sliderPosition(pos) {
    this._sliderPosition = pos;
    this._updateSliderPosition();
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
   * Gets and sets whether clicking into the input area will open up a pane with sliders for setting colors visually.
   */
  get useSliders() {
    return this._useSliders;
  }

  set useSliders(useSliders) {
    this._useSliders = useSliders;
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

  /**
   * Sets and gets the width of this component. In reality, this component is fixed size, so setting height or width has no effect.
   */
  get width() {
    return super.width;
  }

  set width(w) {
    // noop
    w = w;
  }
}

customElements.define("minimal-colorpicker", ColorPicker);
