import { Component } from "./component.js";
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
   * @param {number} x - The x position of the LED.
   * @param {number} y - The y position of the LED.
   * @param {string} text - The text of the label of the LED.
   * @param {string} color - The color of the LED.
   * @param {boolean} lit - The initial lit state of the LED.
   */
  constructor(parent, x, y, text, color, lit) {
    super(parent, x, y);
    this._text = text || "";
    this._color = color || "#f00";
    this._lit = lit || false;
    this._textPosition = "top";

    const size = 16;

    this.createChildren();
    this.setWrapperClass("MinimalLED");
    this.createStyle();

    this.setSize(size, size);
    this.updateLED();
    this.updateLabel();
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.label = new Label(this.wrapper, 0, -15, this._text);
  }

  createStyle() {
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

  updateLED() {
    if (this.lit) {
      this.wrapper.style.background = `radial-gradient(circle at 60% 37%, #fff, ${this.color} 50%, #444 100%)`;
    } else {
      this.wrapper.style.background = "radial-gradient(circle at 60% 37%, #fff, #999 50%)";
    }
  }

  updateLabel() {
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
  }

  /**
   * Stops the LED blinking and turns it off.
   */
  stop() {
    this.blinking = false;
    clearInterval(this.interval);
    this.lit = false;
  }

  /**
   * Sets the size of the LED. Because an LED will always be round, if you try to set width and height to different values, they will be set to the smallest value of the two.
   * @param {number} width - The width of the LED.
   * @param {number} height - The height of the LED.
   */
  setSize(w, h) {
    const size = Math.min(w, h);
    super.width = size;
    super.height = size;
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
    this.updateLED();
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
    this.updateLED();
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
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the LED. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
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

