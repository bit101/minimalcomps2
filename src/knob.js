import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * A rotary knob for selecting numerical values. The knob value can be changed by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/knob.png"/></div>
 * @extends Component
 */
export class Knob extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this knob to.
   * @param {number} x - The x position of the knob.
   * @param {number} y - The y position of the knob.
   * @param {string} text - The text label of the knob.
   * @param {number} value - The initial value of the knob.
   * @param {number} min - The minimum value of the knob.
   * @param {number} max - The maximum value of the knob.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
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

    this.setSize(Defaults.knob.size, Defaults.knob.size);
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
      event.preventDefault();
      value -= inc * 10;
      break;
    case 33: // pageup
      event.preventDefault();
      value += inc * 10;
      break;
    case 36: // home
      event.preventDefault();
      value = this.min;
      break;
    case 35: // end
      event.preventDefault();
      value = this.max;
      break;
    case 37: // right
    case 40: // up
      event.preventDefault();
      value -= inc;
      break;
    case 38: // up
    case 39: // down
      event.preventDefault();
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
      this.value += inc;
    } else if (event.deltaY < 0) {
      this.value -= inc;
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
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalKnob");
    } else {
      this.wrapper.setAttribute("class", "MinimalKnobDisabled");
    }
  }

  updateLabelPositions() {
    this.label.y = (this.height - this.size) / 2 - this.label.height - 5;
    this.valueLabel.y = (this.height + this.size) / 2 + 5;
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

  /**
   * Sets and gets the number of decimals of precision to be used for the knob. This will effect what is shown in the value label as well as the value property of the knob. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   */
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
        this.wrapper.tabIndex = 0;
        this.handle.addEventListener("wheel", this.onWheel);
        this.wrapper.addEventListener("mousedown", this.onMouseDown);
        this.wrapper.addEventListener("touchstart", this.onMouseDown);
        this.wrapper.addEventListener("keydown", this.onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
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

  /**
   * Gets and sets the height of the knob container. Of course the knob itself will always be round, so it will be sized according to the minimum of width and height if they are different, and centered within the container rectangle.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.size = Math.min(this.width, this.height);
    this.updateHandleSize();
    this.updateLabelPositions();
  }

  /**
   * Gets and sets the maximum value of the knob.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateValue(this.value);
  }

  /**
   * Gets and sets the minimum value of the knob.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this.updateValue(this.value);
  }

  /**
   * Gets and sets the sensitivity of the knob when clicking and dragging to set a value. Default is 100, which means you'll have to drag the mouse 100 pixels to make the knob value go from its minimum value to its maximum. A higher sensitivity means that the knob will rotate a smaller amount for the same amount of vertical mouse movement.
   */
  get sensitivity() {
    return this._sensitivity;
  }

  set sensitivity(sensitivity) {
    this._sensitivity = sensitivity;
  }

  /**
   * Gets and sets the text of the text label of the knob.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  /**
   * Gets and sets the value of the knob.
   */
  get value() {
    return this.roundValue(this._value);
  }

  set value(value) {
    this.updateValue(value);
  }

  /**
   * Gets and sets the width of the knob container. Of course the knob itself will always be round, so it will be sized according to the minimum of width and height if they are different, and centered within the container rectangle.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.size = Math.min(this.width, this.height);
    this.updateHandleSize();
    this.updateLabelPositions();
    this.label.width = width;
    this.valueLabel.width = width;
  }
}

customElements.define("minimal-knob", Knob);

