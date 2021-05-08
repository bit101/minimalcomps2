import { Component } from "./component.js";
import { Style } from "./style.js";

export class HSlider extends Component {
  constructor(parent, x, y, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._value = value;
    this._min = min;
    this._max = max;
    this._defaultHander = defaultHandler;
    this._handleSize = 10;
    this._decimals = 1;

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
    this.slider.setAttribute("tabindex", "0");

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
      .MinimalSliderHandle {
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
        width: ${this.handleSize}px;
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
    this.addEventListener("mousedown", this.onMouseDown);
    this.addEventListener("keydown", this.onKeyDown)
  }

  onMouseDown(event) {
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
    const mult = Math.pow(10, this.decimals);
    this._value = Math.round(value * mult) / mult;
    this._defaultHander && this._defaultHander(this._value);
  }

  onMouseUp() {
    document.body.removeEventListener("mousemove", this.onMouseMove);
    document.body.removeEventListener("mouseup", this.onMouseUp);
  }

  onKeyDown(event) {
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
      value = Math.min(value, this.max);
      value = Math.max(value, this.min);
      const mult = Math.pow(10, this.decimals);
      this._value = Math.round(value * mult) / mult;
      this.updateBar();
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
  }

  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.width = handleSize + "px";
    this.updateBar();
  }

}

customElements.define("minimal-hslider", HSlider);



