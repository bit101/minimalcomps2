import { Button } from "./button.js";
import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * An input field with buttons for selecting a numeric value. The value can be changed by entering a value directly, clicking on the plus or minus buttons, or scrolling with a mouse wheel or trackpad.
 * <div><img src="https://www.minimalcomps2.com/images/numericstepper.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new NumericStepper(panel, 20, 20, 50, 0, 100, event => console.log(event.target.value));
 * @extends Component
 */
export class NumericStepper extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this numeric stepper to.
   * @param {number} x - The x position of the numeric stepper. Default 0.
   * @param {number} y - The y position of the numeric stepper. Default 0.
   * @param {string} text - The text label of the numeric stepper. Default empty string.
   * @param {number} value - The initial value of the numeric stepper. Default 0.
   * @param {number} min - The minimum value of the numeric stepper. Default 0.
   * @param {number} max - The maximum value of the numeric stepper. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);
    if (typeof(arguments[3]) !== "string") {
      // don't break the original signature, which was:
      // new NumericStepper(parent, x, y, value, min, max, defaultHandler);
      text = "";
      value = arguments[3];
      min = arguments[4];
      max = arguments[5];
      defaultHandler = arguments[6];
    }

    this._text = text || "";
    this._textPosition = Defaults.numericstepper.textPosition;

    this._min = min || 0;
    this._max = max || 0;
    this._decimals = Defaults.numericstepper.decimals;;
    value = value || 0;
    this._value = this._roundValue(value);

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.numericstepper.width, 20);
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalNumericStepper");

    this.input = this._createInput(this.wrapper, "MinimalNumericStepperInput");
    this.input.value = this._value;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.minus = new Button(this.wrapper, 60, 0, "-");
    this.minus.setSize(20, 20);
    this.plus = new Button(this.wrapper, 80, 0, "+");
    this.plus.setSize(20, 20);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.numericstepper;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInputChange = this._onInputChange.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onPlusDown = this._onPlusDown.bind(this);
    this._onMinusDown = this._onMinusDown.bind(this);
    this._onPlusUp = this._onPlusUp.bind(this);
    this._onMinusUp = this._onMinusUp.bind(this);
    this._onPlusKeyDown = this._onPlusKeyDown.bind(this);
    this._onMinusKeyDown = this._onMinusKeyDown.bind(this);
    this._onPlusKeyUp = this._onPlusKeyUp.bind(this);
    this._onMinusKeyUp = this._onMinusKeyUp.bind(this);
    this._onWheel = this._onWheel.bind(this);

    this.wrapper.addEventListener("wheel", this._onWheel);

    this.input.addEventListener("input", this._onInput);
    this.input.addEventListener("change", this._onInputChange);

    this.plus.addEventListener("mousedown", this._onPlusDown);
    document.addEventListener("mouseup", this._onPlusUp);
    this.plus.addEventListener("keydown", this._onPlusKeyDown);
    this.plus.addEventListener("keyup", this._onPlusKeyUp);

    this.minus.addEventListener("mousedown", this._onMinusDown);
    document.addEventListener("mouseup", this._onMinusUp);
    this.minus.addEventListener("keydown", this._onMinusKeyDown);
    this.minus.addEventListener("keyup", this._onMinusKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput() {
    let value = this.input.value;
    value = value.replace(/[^-.0-9]/g, "");
    this.input.value = value;
  }

  _onInputChange() {
    let value = parseFloat(this.input.value);
    value = this._roundValue(value);
    this.input.value = value;
    if (this.value !== value) {
      this._value = value;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _decrement() {
    if (this.isDecrementing) {
      const value = this._roundValue(this.value - 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this._decrement(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  _increment() {
    if (this.isIncrementing) {
      const value = this._roundValue(this.value + 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this._increment(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  _onMinusDown() {
    clearTimeout(this.timeout);
    this.isDecrementing = true;
    this.delay = 500;
    this._decrement();
  }

  _onMinusUp() {
    this.isDecrementing = false;
  }

  _onMinusKeyDown(event) {
    if (event.keyCode === 13) {
      this._onMinusDown();
    }
  }

  _onMinusKeyUp(event) {
    if (event.keyCode === 13) {
      this._onMinusUp();
    }
  }

  _onPlusDown() {
    clearTimeout(this.timeout);
    this.isIncrementing = true;
    this.delay = 500;
    this._increment();
  }

  _onPlusUp() {
    this.isIncrementing = false;
  }

  _onPlusKeyDown(event) {
    if (event.keyCode === 13) {
      this._onPlusDown();
    }
  }

  _onPlusKeyUp(event) {
    if (event.keyCode === 13) {
      this._onPlusUp();
    }
  }

  _onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    if (event.deltaY > 0) {
      this.value += inc;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    } else if (event.deltaY < 0) {
      this.value -= inc;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _roundValue(value) {
    if (this.max !== null) {
      value = Math.min(value, this.max);
    }
    if (this.min !== null) {
      value = Math.max(value, this.min);
    }
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
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
   * Adds a handler function for the "change" event on this numeric stepper.
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
   * Sets the number of decimals of precision to be used for the numeric stepper. This will effect what is shown in the value label as well as the value property of the numeric stepper. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   * @param {number} decimals - The decimals of precision to use.
   * @returns This instance, suitable for chaining.
   */
  setDecimals(decimals) {
    this.decimals = decimals;
    return this;
  }

  /**
   * Sets the maximum value of this numeric stepper.
   * @param {number} max - The maximum value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setMax(max) {
    this.max = max;
    return this;
  }

  /**
   * Sets the minimum value of this numeric stepper.
   * @param {number} min - The minimum value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setMin(min) {
    this.min = min;
    return this;
  }

  /**
   * Sets the value of this numeric stepper.
   * @param {number} value - The value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * Sets the value, minimum and maximum of this numeric stepper.
   * @param {number} value - The value of this numeric stepper.
   * @param {number} min - The minimum value of this numeric stepper.
   * @param {number} max - The maximum value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setValueMinMax(value, min, max) {
    this.min = min;
    this.max = max;
    this.value = value;
    return this;
  }

  /**
   * Sets the text of this numeric stepper.
   * @param {string} text - The text to set on this numeric stepper.
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

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.input.disabled = !this.enabled;
      this.plus.enabled = this.enabled;
      this.minus.enabled = this.enabled;
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.addEventListener("wheel", this._onWheel);
      } else {
        this.wrapper.removeEventListener("wheel", this._onWheel);
      }
    }
  }

  /**
   * Sets and gets the number of decimals of precision to be used for the stepper. This will effect what is shown in the value label as well as the value property of the stepper. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10. Clicking the plus and minus button will _increment or _decrement the stepper's value by the smallest displayed value.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    const value = this._roundValue(this.value);
    if (this._value !== value) {
      this._value = value;
      this.input.value = value;
    }
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
   * Gets and sets the maximum value of the stepper.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    if (this.max < this.value) {
      this.value = this.max;
    }
  }

  /**
   * Gets and sets the minimum value of the stepper.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    if (this.min > this.value) {
      this.value = this.min;
    }
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
  /**
   * Gets and sets the value of the stepper.
   */
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = this._roundValue(value);
    this.input.value = this._value;
  }

  /**
   * Sets and gets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(w) {
    super.width = w;
    this.input.style.width = w - 40 + "px";
    this.minus.x = w - 40;
    this.plus.x = w - 20;
  }
}

customElements.define("minimal-numericstepper", NumericStepper);

