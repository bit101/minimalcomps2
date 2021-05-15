export class HSlider extends Component {
  constructor(parent, x, y, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min;
    this._max = max;
    this._decimals = 1;
    this._reversed = false;
    this._value = this.roundValue(value);
    this._handleSize = 10;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.updateSliderSize(100, this.handleSize);
    this.updateHandlePosition();
    this.addEventListener("change", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  createChildren() {
    this.wrapper.tabIndex = 0;
    this.setWrapperClass("MinimalSlider");
    this.handle = this.createDiv(this.wrapper, "MinimalSliderHandle");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalSlider {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        background-color: #ccc;
        border-radius: 0;
        height: 100%;
        width: 100%;
      }
      .MinimalSliderDisabled {
        ${Style.disabledStyle}
        ${Style.baseStyle}
        ${Style.shadowStyle}
        background-color: #ccc;
        border-radius: 0;
        height: 100%;
        width: 100%;
      }
      .MinimalSliderHandle {
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
        width: ${this.handleSize}px;
        cursor: pointer;
      }
      .MinimalSliderHandleDisabled {
        ${Style.disabledStyle}
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
        width: ${this.handleSize}px;
        cursor: default;
      }
      .MinimalSlider:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.wrapper.addEventListener("mousedown", this.onMouseDown);
    this.wrapper.addEventListener("keydown", this.onKeyDown)
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  onMouseDown(event) {
    this.offsetX = event.clientX - this.getBoundingClientRect().left - this.handle.offsetLeft;
    if (this.offsetX < 0 || this.offsetX > this.handleSize) {
      this.offsetX = this.handleSize / 2;
      let x = event.clientX - this.getBoundingClientRect().left - this.handleSize / 2;
      this.calculateValueFromPos(x);
    }
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseMove(event) {
    let x = event.clientX - this.getBoundingClientRect().left - this.offsetX;
    this.calculateValueFromPos(x);
  }

  onMouseUp() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  }

  onKeyDown(event) {
    let inc = 1 / Math.pow(10, this._decimals);
    if (this.reversed) {
      inc = -inc;
    }
    let value = this.value;

    switch(event.keyCode) {
      case 37:
      case 40:
        value -= inc;
        break;
      case 38:
      case 39:
        value += inc;
        break
      default:
        break;
    }
    this.updateValue(value);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////
  
  addLabels(text) {
    if (!this.label) {
      this.label = new Label(this.shadowRoot, 0, 0, text);
    }

    if (!this.valueLabel) {
      this.valueLabel = new Label(this.shadowRoot, 0, 0, this.value);
    }

    this.updateLabelPositions();
  }

  calculateValueFromPos(x) {
    let percent = x / (this.width - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    this.updateValue(value);
  }

  roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.left = percent * (this.width - this._handleSize) + "px";
  }

  updateEnabledStyle() {
    if (this.label) {
      this.label.enabled = this.enabled;
    }
    if (this.valueLabel) {
      this.valueLabel.enabled = this.enabled;
    }
    if (this.enabled) {
      this.setWrapperClass("MinimalSlider");
      this.handle.setAttribute("class", "MinimalSliderHandle");
    } else {
      this.setWrapperClass("MinimalSliderDisabled");
      this.handle.setAttribute("class", "MinimalSliderHandleDisabled");
    }
  }

  updateLabelPositions() {
    if (this.label) {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    }
    if (this.valueLabel) {
      this.valueLabel.x = this.width + 5;
      this.valueLabel.y = (this.height - this.valueLabel.height) / 2;
    }
  }

  updateSliderSize(w, h) {
    this.setSize(w, h);
  }

  updateValue(value) {
    value = this.roundValue(value);
    if (this._value != value) {
      this._value = value;
      this.updateHandlePosition();
      this.updateValueLabel();
      this.dispatchEvent(new Event("change"));
    }
  }

  updateValueLabel() {
    if (this.valueLabel) {
      this.valueLabel.text = this.value;
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////
  
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    this._value = this.roundValue(this._value);
    this.updateValueLabel();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled != enabled) {
      super.enabled = enabled;
      this.updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.wrapper.addEventListener("mousedown", this.onMouseDown);
        this.wrapper.addEventListener("keydown", this.onKeyDown)
      } else {
        this.wrapper.tabIndex = -1;
        this.wrapper.removeEventListener("mousedown", this.onMouseDown);
        this.wrapper.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("mouseup", this.onMouseUp);
      }
    }
  }

  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.width = handleSize + "px";
    this.updateHandlePosition();
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.updateLabelPositions();
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateValue(this.value);
    this.updateHandlePosition();
  }

  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this.updateValue(this.value);
    this.updateHandlePosition();
  }

  get reversed() {
    return this._reversed;
  }

  set reversed(reversed) {
    this._reversed = reversed;

  }

  get value() {
    return this._value;
  }

  set value(value) {
    this.updateValue(value);
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateLabelPositions();
    this.updateHandlePosition();
  }
}

customElements.define("minimal-hslider", HSlider);



