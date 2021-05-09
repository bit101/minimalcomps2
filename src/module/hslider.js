export class HSlider extends Component {
  constructor(parent, x, y, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min;
    this._max = max;
    this._decimals = 1;
    this._value = this.roundValue(value);
    this._defaultHander = defaultHandler;
    this._handleSize = 10;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSliderSize(100, this.handleSize);
    this.updateBar();
  }

  setSliderSize(w, h) {
    this.setSize(w, h);
  }

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

  roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }



  addLabels(text, width) {
    this.label = document.createElement("div");
    this.label.setAttribute("class", "MinimalSliderLabel")
    this.label.textContent = text;
    this.label.style.left = -width - 5 + "px";
    this.label.style.top = Math.round(this.height / 2 - 6) + "px";
    this.label.style.width = width + "px";
    this.shadowRoot.append(this.label);

    this.valueLabel = document.createElement("div");
    this.valueLabel.setAttribute("class", "MinimalSliderLabel")
    this.valueLabel.textContent = this.value;
    this.valueLabel.style.left = this.width + 5 + "px";
    this.valueLabel.style.top = Math.round(this.height / 2 - 6) + "px";
    this.shadowRoot.append(this.valueLabel);
  }

  onMouseDown(event) {
    if (!this.enabled) {
      return;
    }
    this.offsetX = event.clientX - this.getBoundingClientRect().left - this.handle.offsetLeft;
    if (this.offsetX < 0 || this.offsetX > this.handleSize) {
      let x = event.clientX - this.getBoundingClientRect().left - this.handleSize / 2;
      this.updateValueFromX(x);
      this.updateBar();
      this.offsetX = this.handleSize / 2;
    }
    document.body.addEventListener("mousemove", this.onMouseMove);
    document.body.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseMove(event) {
    if (!this.enabled) {
      return;
    }
    let x = event.clientX - this.getBoundingClientRect().left - this.offsetX;
    this.handle.style.left = x + "px";
    this.updateValueFromX(x);
    this.updateBar();
  }

  updateValueFromX(x) {
    x = Math.min(x, this.width - this.handleSize);
    x = Math.max(x, 0);
    const percent = x / (this.width - this.handleSize);
    const value = this.min + (this.max - this.min) * percent;
    this._value = this.roundValue(value);
    this.setValueLabel();
    this._defaultHander && this._defaultHander(this._value);
  }

  setValueLabel() {
    if (this.valueLabel) {
      this.valueLabel.textContent = this.value;
    }
  }

  onMouseUp() {
    if (!this.enabled) {
      return;
    }
    document.body.removeEventListener("mousemove", this.onMouseMove);
    document.body.removeEventListener("mouseup", this.onMouseUp);
  }

  onKeyDown(event) {
    if (!this.enabled) {
      return;
    }
    const inc = 1 / Math.pow(10, this._decimals);
    const oldValue = this.value;
    let value = oldValue;

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
    if (value != oldValue) {
      this._value = this.roundValue(value);
      this.updateBar();
      this.setValueLabel();
      this._defaultHander && this._defaultHander(this._value);
    }
  }

  updateBar() {
    let percent = (this.value - this.min) / (this.max - this.min);
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.left = percent * (this.width - this._handleSize) + "px";
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.updateBar();
  }

  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this.updateBar();
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateBar();
  }

  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    this._value = this.roundValue(this._value);
  }

  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.width = handleSize + "px";
    this.updateBar();
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    if (this.valueLabel) {
      this.valueLabel.style.left = this.width + 5 + "px";
    }
    this.updateBar();
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    if (this.valueLabel) {
      this.valueLabel.style.top = Math.round(this.height / 2 - 6) + "px";
    }
    if (this.label) {
      this.label.style.top = Math.round(this.height / 2 - 6) + "px";
    }
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.setEnabledStyle();
    if (this.enabled) {
      this.slider.tabIndex = 0;
    } else {
      this.slider.tabIndex = -1;
    }
  }

  setEnabledStyle() {
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
}

customElements.define("minimal-hslider", HSlider);



