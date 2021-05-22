import { Button } from "./button.js";
import { Component } from "./component.js";
import { Style } from "./style.js";

export class NumericStepper extends Component {
  constructor(parent, x, y, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min;
    this._max = max;
    this._decimals = 0;
    this._value = this.roundValue(value);

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.setWrapperClass("MinimalNumericStepper");

    this.input = this.createInput(this.wrapper, "MinimalNumericStepperInput");
    this.input.value = this._value;

    this.minus = new Button(this.wrapper, 60, 0, "-");
    this.minus.setSize(20, 20);
    this.plus = new Button(this.wrapper, 80, 0, "+");
    this.plus.setSize(20, 20);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalNumericStepper {
        ${Style.baseStyle}
        width: 100%;
        height: 100%;
      }
      .MinimalNumericStepperInput {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        ${Style.textStyle}
        padding: 0 4px;
        width: 60px;
        height: 20px;
      }
      .MinimalNumericStepperInput:disabled,
      .MinimalNumericStepperInput[disabled] {
        ${Style.disabledStyle}
      }
      .MinimalNumericStepperInput:focus {
        ${Style.focusStyle}
      }
    `;
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
    this.input.addEventListener("input", this.onInput);
    this.input.addEventListener("change", this.onInputChange);

    this.plus.addEventListener("mousedown", this.onPlusDown);
    this.plus.addEventListener("mouseup", this.onPlusUp);
    this.plus.addEventListener("keydown", this.onPlusKeyDown);
    this.plus.addEventListener("keyup", this.onPlusKeyUp);

    this.minus.addEventListener("mousedown", this.onMinusDown);
    this.minus.addEventListener("mouseup", this.onMinusUp);
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
    if (this.value != value) {
      this._value = value;
      this.dispatchEvent(new Event("change"));
    }
  }

  decrement() {
    if (this.isDecrementing) {
      const value = this.roundValue(this.value - 1 / Math.pow(10, this._decimals));
      if (this.value != value) {
        this.value = value;
        this.dispatchEvent(new Event("change"));
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
      if (this.value != value) {
        this.value = value;
        this.dispatchEvent(new Event("change"));
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
    if (event.keyCode == 13) {
      this.onMinusDown();
    }
  }

  onMinusKeyUp(event) {
    if (event.keyCode == 13) {
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
    if (event.keyCode == 13) {
      this.onPlusDown();
    }
  }

  onPlusKeyUp(event) {
    if (event.keyCode == 13) {
      this.onPlusUp();
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
  
  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////
  
  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled != enabled) {
      super.enabled = enabled;
      this.input.disabled = !this.enabled;
      this.plus.enabled = this.enabled;
      this.minus.enabled = this.enabled;
    }
  }

  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    const value = this.roundValue(this.value);
    if (this._value != value) {
      this._value = value;
      this.input.value = value;
      this.dispatchEvent(new Event("change"));
    }
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    if (this.max < this.value) {
      this.value = this.max;
      this.dispatchEvent(new Event("change"));
    }
  }

  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    if (this.min > this.value) {
      this.value = this.min;
      this.dispatchEvent(new Event("change"));
    }
  }

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

