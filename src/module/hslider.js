export class HSlider extends Component {
  constructor(parent, x, y, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min;
    this._max = max;
    this._decimals = 1;
    this._value = this.roundValue(value);
    this._handleSize = 10;
    this._labelWidth = 100;

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
    this.slider = document.createElement("div");
    this.slider.setAttribute("class", "MinimalSlider");
    this.slider.tabIndex = 0;

    this.handle = document.createElement("div");
    this.handle.setAttribute("class", "MinimalSliderHandle");
    this.slider.appendChild(this.handle);
    this.shadowRoot.append(this.slider);
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
      }
      .MinimalSlider:focus {
        ${Style.focusStyle}
      }
      .MinimalSliderLabel {
        ${Style.baseStyle}
        color: #333;
        white-space: nowrap;
        text-align: right;
        overflow: hidden;
        user-select: none;        
      }
      .MinimalSliderLabelDisabled {
        ${Style.disabledStyle}
      } 
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.addEventListener("mousedown", this.onMouseDown);
    this.addEventListener("keydown", this.onKeyDown)
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
    const inc = 1 / Math.pow(10, this._decimals);
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
    this.label = document.createElement("div");
    this.label.setAttribute("class", "MinimalSliderLabel")
    this.label.textContent = text;
    this.shadowRoot.append(this.label);

    this.valueLabel = document.createElement("div");
    this.valueLabel.setAttribute("class", "MinimalSliderLabel")
    this.valueLabel.textContent = this.value;
    this.shadowRoot.append(this.valueLabel);

    this.updateLabelStyles();
  }

  roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.left = percent * (this.width - this._handleSize) + "px";
  }

  updateEnabledStyle() {
    if (this.enabled) {
      this.label && this.label.setAttribute("class", "MinimalSliderLabel");
      this.valueLabel && this.valueLabel.setAttribute("class", "MinimalSliderLabel");
      this.slider.setAttribute("class", "MinimalSlider");
      this.handle.setAttribute("class", "MinimalSliderHandle");
    } else {
      this.label && this.label.setAttribute("class", "MinimalSliderLabel MinimalSliderLabelDisabled");
      this.valueLabel && this.valueLabel.setAttribute("class", "MinimalSliderLabel MinimalSliderLabelDisabled");
      this.slider.setAttribute("class", "MinimalSlider MinimalSliderDisabled");
      this.handle.setAttribute("class", "MinimalSliderHandle MinimalSliderHandleDisabled");
    }
  }

  updateLabelStyles() {
    if (this.label) {
      this.label.style.left = -this._labelWidth - 5 + "px";
      this.label.style.top = Math.round(this.height / 2 - 6) + "px";
    }
    if (this.valueLabel) {
      this.label.style.width = this._labelWidth + "px";
      this.valueLabel.style.left = this.width + 5 + "px";
      this.valueLabel.style.top = Math.round(this.height / 2 - 6) + "px";
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

  calculateValueFromPos(x) {
    const percent = x / (this.width - this.handleSize);
    const value = this.min + (this.max - this.min) * percent;
    this.updateValue(value);
  }

  updateValueLabel() {
    if (this.valueLabel) {
      this.valueLabel.textContent = this.value;
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
        this.slider.tabIndex = 0;
        this.addEventListener("mousedown", this.onMouseDown);
        this.addEventListener("keydown", this.onKeyDown)
      } else {
        console.log("removing");
        this.slider.tabIndex = -1;
        this.removeEventListener("mousedown", this.onMouseDown);
        this.removeEventListener("keydown", this.onKeyDown);
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
    this.updateLabelStyles();
  }

  get labelWidth() {
    return this._labelWidth;
  }

  set labelWidth(labelWidth) {
    this._labelWidth = labelWidth;
    this.updateLabelStyles();
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    if (this.max < this.value) {
      this.updateValue(this.value);
    } else {
      this.updateHandlePosition();
    }
  }

  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    if (this.min > this.value) {
      this.updateValue(this.value);
    } else {
      this.updateHandlePosition();
    }
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
    this.updateLabelStyles();
    this.updateHandlePosition();
  }
}

customElements.define("minimal-hslider", HSlider);



