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
    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "MinimalNumericStepper");

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.setAttribute("class", "MinimalNumericStepperInput");
    this.input.value = this._value;
    this.wrapper.appendChild(this.input);

    this.minus = new Button(this.wrapper, 60, 0, "-");
    this.minus.setSize(20, 20);
    this.plus = new Button(this.wrapper, 80, 0, "+");
    this.plus.setSize(20, 20);

    this.shadowRoot.append(this.wrapper);
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
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.input.addEventListener("input", this.onInput);
    this.input.addEventListener("change", this.onInputChange);
    this.plus.addEventListener("click", this.onPlus);
    this.minus.addEventListener("click", this.onMinus);
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

  onPlus() {
    const value = this.roundValue(this.value + 1 / Math.pow(10, this._decimals));
    if (this.value != value) {
      this.value = value;
      this.dispatchEvent(new Event("change"));
    }
  }

  onMinus() {
    const value = this.roundValue(this.value - 1 / Math.pow(10, this._decimals));
    if (this.value != value) {
      this.value = value;
      this.dispatchEvent(new Event("change"));
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
      this.input.value= value;
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

