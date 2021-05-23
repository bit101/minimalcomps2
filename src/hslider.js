import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

export class HSlider extends Component {
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min;
    this._max = max;
    this.setDefaults();
    this._reversed = false;
    this._value = value;
    this._showValue = true;
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSliderSize();
    this.updateHandlePosition();
    this.updateLabelPosition();
    this.updateValueLabelPosition();
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  createChildren() {
    this.wrapper.tabIndex = 0;
    this.setWrapperClass("MinimalSlider");
    this.handle = this.createDiv(this.wrapper, "MinimalSliderHandle");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this.formatValue());
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.hslider;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.wrapper.addEventListener("mousedown", this.onMouseDown);
    this.wrapper.addEventListener("touchstart", this.onMouseDown);
    this.wrapper.addEventListener("keydown", this.onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  onMouseDown(event) {
    event.preventDefault();
    let mouseX;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].pageX;
    } else {
      mouseX = event.clientX;
    }
    this.offsetX = mouseX - this.getBoundingClientRect().left - this.handle.offsetLeft;
    if (this.offsetX < 0 || this.offsetX > this.handleSize) {
      this.offsetX = this.handleSize / 2;
      const x = mouseX - this.getBoundingClientRect().left - this.handleSize / 2;
      this.calculateValueFromPos(x);
    }
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    event.preventDefault();
    let mouseX;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].pageX;
    } else {
      mouseX = event.clientX;
    }
    const x = mouseX - this.getBoundingClientRect().left - this.offsetX;
    this.calculateValueFromPos(x);
  }

  onMouseUp() {
    event.preventDefault();
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("touchmove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onMouseUp);
  }

  onKeyDown(event) {
    let inc = 1 / Math.pow(10, this._decimals);
    if (this.reversed) {
      inc = -inc;
    }
    let value = this.value;

    switch (event.keyCode) {
    case 37:
    case 40:
      value -= inc;
      break;
    case 38:
    case 39:
      value += inc;
      break;
    default:
      break;
    }
    this.updateValue(value);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  calculateValueFromPos(x) {
    let percent = x / (this.width - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    this.updateValue(value);
  }

  formatValue() {
    let valStr = this.value.toString();
    if (this.decimals <= 0) {
      return valStr;
    }
    if (valStr.indexOf(".") === -1) {
      valStr += ".";
    }
    const dec = valStr.split(".")[1].length;
    for (let i = dec; i < this.decimals; i++) {
      valStr += "0";
    }
    return valStr;
  }

  roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  setDefaults() {
    this._handleSize = Defaults.hslider.handleSize;
    this._decimals = Defaults.hslider.decimals;
    this._textPosition = Defaults.hslider.textPosition;
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
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this.setWrapperClass("MinimalSlider");
      this.handle.setAttribute("class", "MinimalSliderHandle");
    } else {
      this.setWrapperClass("MinimalSliderDisabled");
      this.handle.setAttribute("class", "MinimalSliderHandleDisabled");
    }
  }

  updateLabelPosition() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else if (this._textPosition === "bottom") {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  updateValueLabelPosition() {
    this.valueLabel.x = this.width + 5;
    this.valueLabel.y = (this.height - this.valueLabel.height) / 2;
  }

  setSliderSize() {
    this.setSize(Defaults.hslider.width, Defaults.hslider.height);
  }

  updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this.updateHandlePosition();
      this.valueLabel.text = this.formatValue();
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
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
    this.valueLabel.text = this.formatValue();
    this.updateValueLabelPosition();
    this.updateHandlePosition();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.wrapper.addEventListener("mousedown", this.onMouseDown);
        this.wrapper.addEventListener("touchstart", this.onMouseDown);
        this.wrapper.addEventListener("keydown", this.onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.wrapper.removeEventListener("mousedown", this.onMouseDown);
        this.wrapper.removeEventListener("touchstart", this.onMouseDown);
        this.wrapper.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("touchmove", this.onMouseMove);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("touchend", this.onMouseUp);
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
    this.updateLabelPosition();
    this.updateValueLabelPosition();
  }

  get textPosition() {
    return this.textPosition;
  }

  set textPosition(position) {
    this._textPosition = position;
    this.updateLabelPosition();
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

  get showValue() {
    return this._showValue;
  }

  set showValue(show) {
    this._showValue = show;
    if (this._showValue) {
      this.valueLabel.style.visibility = "visible";
    } else {
      this.valueLabel.style.visibility = "hidden";
    }
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateLabelPosition();
  }

  get value() {
    return this.roundValue(this._value);
  }

  set value(value) {
    this.updateValue(value);
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateValueLabelPosition();
    this.updateHandlePosition();
  }
}

customElements.define("minimal-hslider", HSlider);

