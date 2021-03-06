import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * A representation of a colored LED. It can be set to lit or unlit and be set to blink at any rate. The color of the LED can be set to any valid CSS color. It also has a text label.
 * <div><img src="https://www.minimalcomps2.com/images/led.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 240, 240);
 * const canvas = new LED(panel, 20, 20, "LED", "#f00", true);
 * @extends Component
 */
export class LED extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this LED to.
   * @param {number} x - The x position of the LED. Default 0.
   * @param {number} y - The y position of the LED. Default 0.
   * @param {string} text - The text of the label of the LED. Default empty string.
   * @param {string} color - The color of the LED. Default #f00.
   * @param {boolean} lit - The initial lit state of the LED. Default false.
   */
  constructor(parent, x, y, text, color, lit) {
    super(parent, x, y);
    this._text = text || "";
    this._color = color || "#f00";
    this._lit = lit || false;
    this._textPosition = Defaults.led.textPosition;

    const size = 16;

    this._createChildren();
    this._setWrapperClass("MinimalLED");
    this._createStyle();

    this.setSize(size, size);
    this._updateLED();
    this._updateLabel();
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.label = new Label(this.wrapper, 0, -15, this._text);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.led;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateLED() {
    if (this.lit) {
      this.wrapper.style.background = `radial-gradient(circle at 60% 37%, #fff, ${this.color} 50%, #444 100%)`;
    } else {
      this.wrapper.style.background = "radial-gradient(circle at 60% 37%, #fff, #999 50%)";
    }
  }

  _updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = (this.width - this.label.width) / 2;
      this.label.y = -this.label.height - 5;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else {
      this.label.x = (this.width - this.label.width) / 2;
      this.label.y = this.height + 5;
    }
  }

  /**
   * Starts the LED blinking at a specified or default rate.
   * @param {number} bps - Blinks per second. Defaults to 2 blinks per second if no parameter is given.
   * @returns This instance, suitable for chaining.
   */
  blink(bps) {
    if (!this.enabled) {
      return;
    }
    bps = bps || 2;
    clearInterval(this.interval);
    this.blinking = true;
    this.interval = setInterval(() => {
      if (this.blinking) {
        this.lit = !this.lit;
      }
    }, 1 / bps * 1000);
    return this;
  }

  /**
   * Stops the LED blinking and turns it off.
   * @returns This instance, suitable for chaining.
   */
  stop() {
    this.blinking = false;
    clearInterval(this.interval);
    this.lit = false;
    return this;
  }

  /**
   * Sets whether this LED is lit up.
   * @param {boolean} lit - Whether or not the LED is lit.
   * @returns This instance, suitable for chaining.
   */
  setLit(lit) {
    this.lit = lit;
    return this;
  }

  /**
   * Sets the color of this LED.
   * @param {string} color - The color to set.
   * @returns This instance, suitable for chaining.
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Sets the size of the LED. Because an LED will always be round, if you try to set width and height to different values, they will be set to the smallest value of the two.
   * @param {number} width - The width of the LED.
   * @param {number} height - The height of the LED.
   * @returns This instance, suitable for chaining.
   */
  setSize(w, h) {
    const size = Math.min(w, h);
    super.width = size;
    super.height = size;
    return this;
  }

  /**
   * Sets the text of this LED.
   * @param {string} text - The text to set on this LED.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left", "right" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the color of the LED.
   */
  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this._updateLED();
  }

  /**
   * Gets and sets the enabled state of the LED. A disabled LED will not be lit and will not blink.
   */
  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.label.enabled = enabled;
    if (this._enabled) {
      this.wrapper.setAttribute("class", "MinimalLED");
    } else {
      this.stop();
      this.wrapper.setAttribute("class", "MinimalLEDDisabled");
    }
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    super.width = height;
  }

  /**
   * Gets and sets whether or not this LED is lit.
   */
  get lit() {
    return this._lit;
  }

  set lit(lit) {
    this._lit = lit;
    this._updateLED();
  }

  /**
   * Gets and sets the text of the LED's text label.
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
   * Gets and sets the position of the text label displayed on the LED. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
  }

  /**
   * Sets and gets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    super.height = width;
  }
}

customElements.define("minimal-led", LED);

