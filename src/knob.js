import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

export class Knob extends Component {
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);

    this._text = text;
    this._min = min;
    this._max = max;
    this._decimals = Defaults.knob.decimals;
    this._value = value;
    this._sensitivity = 100;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(40, 40);
    this.updateHandleRotation();

    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalKnob");
    this.handle = this.createDiv(this.wrapper, "MinimalKnobHandle");
    this.wrapper.tabIndex = 0;
    this.zero = this.createDiv(this.handle, "MinimalKnobZero");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.label.autosize = false;
    this.label.align = "center";
    this.valueLabel = new Label(this.wrapper, 0, 0, this.roundValue(this._value));
    this.valueLabel.autosize = false;
    this.valueLabel.align = "center";
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.knob;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.handle.addEventListener("wheel", this.onWheel);
    this.wrapper.addEventListener("mousedown", this.onMouseDown);
    this.wrapper.addEventListener("touchstart", this.onMouseDown);
    this.wrapper.addEventListener("keydown", this.onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onMouseDown(event) {
    event.preventDefault();
    this.wrapper.focus();
    if (event.changedTouches) {
      this.startY = event.changedTouches[0].clientY;
    } else {
      this.startY = event.clientY;
    }
    this.startValue = this.value;
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    const mult = (this.max - this.min) / this.sensitivity;
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.startY;
    this.value = this.startValue + -y * mult;
  }

  onMouseUp() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("touchmove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onMouseUp);
  }

  onKeyDown(event) {
    const inc = 1 / Math.pow(10, this._decimals);
    let value = this.value;

    switch (event.keyCode) {
    case 34: // pagedown
      value -= inc * 10;
      break;
    case 33: // pageup
      value += inc * 10;
      break;
    case 36: // home
      value = this.max;
      break;
    case 35: // end
      value = this.min;
      break;
    case 37: // right
    case 40: // up
      value -= inc;
      break;
    case 38: // up
    case 39: // down
      value += inc;
      break;
    default:
      break;
    }
    this.updateValue(value);
  }

  onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    if (event.deltaY > 0) {
      this.value -= inc;
    } else {
      this.value += inc;
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

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

  updateHandleSize() {
    this.handle.style.top = (this.height - this.size) / 2 + "px";
    this.handle.style.left = (this.width - this.size) / 2 + "px";
    this.handle.style.width = this.size + "px";
    this.handle.style.height = this.size + "px";
  }

  updateHandleRotation() {
    const percent = (this.value - this.min) / (this.max - this.min);
    this.handle.style.transform = `rotate(${-240 + percent * 300}deg`;
  }

  updateEnabledStyle() {
    super.enabled = enabled;
    this.label.enabled = enabled;
    this.valueLabel.enabled = enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalKnob");
    } else {
      this.wrapper.setAttribute("class", "MinimalKnobDisabled");
    }
  }

  updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this.updateHandleRotation();
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
    this.updateHandleRotation();
    this.valueLabel.text = this.formatValue();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.updateEnabledStyle();
      if (this.enabled) {
        this.handle.tabIndex = 0;
        this.handle.addEventListener("wheel", this.onWheel);
        this.wrapper.addEventListener("mousedown", this.onMouseDown);
        this.wrapper.addEventListener("touchstart", this.onMouseDown);
        this.wrapper.addEventListener("keydown", this.onKeyDown);
      } else {
        this.handle.tabIndex = -1;
        this.handle.removeEventListener("wheel", this.onWheel);
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

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.size = Math.min(this.width, this.height);
    this.updateHandleSize();
    this.label.y = (this.height - this.size) / 2 - this.label.height - 5;
    this.valueLabel.y = (this.height + this.size) / 2 + 5;
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateValue(this.value);
  }

  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this.updateValue(this.value);
  }

  get sensitivity() {
    return this._sensitivity;
  }

  set sensitivity(sensitivity) {
    this._sensitivity = sensitivity;
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
    this.size = Math.min(this.width, this.height);
    this.updateHandleSize();
    this.label.width = width;
    this.valueLabel.width = width;
  }
}

customElements.define("minimal-knob", Knob);

