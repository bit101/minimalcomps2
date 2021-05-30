import { Button } from "./button.js";
import { Component } from "./component.js";
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
    this._textPosition = "top";

    this._min = min || 0;
    this._max = max || 0;
    this._decimals = 0;
    value = value || 0;
    this._value = this.roundValue(value);

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
    this.setWrapperClass("MinimalNumericStepper");

    this.input = this.createInput(this.wrapper, "MinimalNumericStepperInput");
    this.input.value = this._value;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.minus = new Button(this.wrapper, 60, 0, "-");
    this.minus.setSize(20, 20);
    this.plus = new Button(this.wrapper, 80, 0, "+");
    this.plus.setSize(20, 20);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.numericstepper;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInputChange = this.onInputChange.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onPlusDown = this.onPlusDown.bind(this);
    this.onMinusDown = this.onMinusDown.bind(this);
    this.onPlusUp = this.onPlusUp.bind(this);
    this.onMinusUp = this.onMinusUp.bind(this);
    this.onPlusKeyDown = this.onPlusKeyDown.bind(this);
    this.onMinusKeyDown = this.onMinusKeyDown.bind(this);
    this.onPlusKeyUp = this.onPlusKeyUp.bind(this);
    this.onMinusKeyUp = this.onMinusKeyUp.bind(this);
    this.onWheel = this.onWheel.bind(this);

    this.wrapper.addEventListener("wheel", this.onWheel);

    this.input.addEventListener("input", this.onInput);
    this.input.addEventListener("change", this.onInputChange);

    this.plus.addEventListener("mousedown", this.onPlusDown);
    document.addEventListener("mouseup", this.onPlusUp);
    this.plus.addEventListener("keydown", this.onPlusKeyDown);
    this.plus.addEventListener("keyup", this.onPlusKeyUp);

    this.minus.addEventListener("mousedown", this.onMinusDown);
    document.addEventListener("mouseup", this.onMinusUp);
    this.minus.addEventListener("keydown", this.onMinusKeyDown);
    this.minus.addEventListener("keyup", this.onMinusKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    let value = this.input.value;
    value = value.replace(/[^-.0-9]/g, "");
    this.input.value = value;
  }

  onInputChange() {
    let value = parseFloat(this.input.value);
    value = this.roundValue(value);
    this.input.value = value;
    if (this.value !== value) {
      this._value = value;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  decrement() {
    if (this.isDecrementing) {
      const value = this.roundValue(this.value - 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this.decrement(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  increment() {
    if (this.isIncrementing) {
      const value = this.roundValue(this.value + 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this.increment(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  onMinusDown() {
    clearTimeout(this.timeout);
    this.isDecrementing = true;
    this.delay = 500;
    this.decrement();
  }

  onMinusUp() {
    this.isDecrementing = false;
  }

  onMinusKeyDown(event) {
    if (event.keyCode === 13) {
      this.onMinusDown();
    }
  }

  onMinusKeyUp(event) {
    if (event.keyCode === 13) {
      this.onMinusUp();
    }
  }

  onPlusDown() {
    clearTimeout(this.timeout);
    this.isIncrementing = true;
    this.delay = 500;
    this.increment();
  }

  onPlusUp() {
    this.isIncrementing = false;
  }

  onPlusKeyDown(event) {
    if (event.keyCode === 13) {
      this.onPlusDown();
    }
  }

  onPlusKeyUp(event) {
    if (event.keyCode === 13) {
      this.onPlusUp();
    }
  }

  onWheel(event) {
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

  roundValue(value) {
    if (this.max !== null) {
      value = Math.min(value, this.max);
    }
    if (this.min !== null) {
      value = Math.max(value, this.min);
    }
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  updateLabel() {
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
        this.wrapper.addEventListener("wheel", this.onWheel);
      } else {
        this.wrapper.removeEventListener("wheel", this.onWheel);
      }
    }
  }

  /**
   * Sets and gets the number of decimals of precision to be used for the stepper. This will effect what is shown in the value label as well as the value property of the stepper. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10. Clicking the plus and minus button will increment or decrement the stepper's value by the smallest displayed value.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    const value = this.roundValue(this.value);
    if (this._value !== value) {
      this._value = value;
      this.input.value = value;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
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
    this.updateLabel();
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
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
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
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
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
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the color picker. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
  }
  /**
   * Gets and sets the value of the stepper.
   */
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = this.roundValue(value);
    this.input.value = this._value;
  }

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

