import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * A rotary knob for selecting numerical values. The knob value can be changed by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/knob.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Knob(panel, 20, 20, "Knob", 50, 0, 100, event => console.log(event.target.value));
 * @extends Component
 */
export class Knob extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this knob to.
   * @param {number} x - The x position of the knob. Default 0.
   * @param {number} y - The y position of the knob. Default 0.
   * @param {string} text - The text label of the knob. Default empty string.
   * @param {number} value - The initial value of the knob. Default 0.
   * @param {number} min - The minimum value of the knob. Default 0.
   * @param {number} max - The maximum value of the knob. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);

    this._text = text || "";
    this._min = min || 0;
    this._max = max || 100;
    this._decimals = Defaults.knob.decimals;
    this._value = value || 0;
    this._sensitivity = 100;
    this._labelsSwapped = false;

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.knob.size, Defaults.knob.size);
    this._updateHandleRotation();

    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalKnob");
    this.handle = this._createDiv(this.wrapper, "MinimalKnobHandle");
    this.wrapper.tabIndex = 0;
    this.zero = this._createDiv(this.handle, "MinimalKnobZero");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this._roundValue(this._value));
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.knob;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this.handle.addEventListener("wheel", this._onWheel);
    this.wrapper.addEventListener("mousedown", this._onMouseDown);
    this.wrapper.addEventListener("touchstart", this._onMouseDown);
    this.wrapper.addEventListener("keydown", this._onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onMouseDown(event) {
    event.preventDefault();
    this.wrapper.focus();
    if (event.changedTouches) {
      this.startY = event.changedTouches[0].clientY;
    } else {
      this.startY = event.clientY;
    }
    this.startValue = this.value;
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
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

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("touchmove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchend", this._onMouseUp);
  }

  _onKeyDown(event) {
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
    this._updateValue(value);
  }

  _onWheel(event) {
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

  _formatValue() {
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

  _roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  _updateHandleSize() {
    this.handle.style.top = (this.height - this.size) / 2 + "px";
    this.handle.style.left = (this.width - this.size) / 2 + "px";
    this.handle.style.width = this.size + "px";
    this.handle.style.height = this.size + "px";
  }

  _updateHandleRotation() {
    const percent = (this.value - this.min) / (this.max - this.min);
    this.handle.style.transform = `rotate(${-240 + percent * 300}deg`;
  }

  _updateEnabledStyle() {
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalKnob");
    } else {
      this.wrapper.setAttribute("class", "MinimalKnobDisabled");
    }
  }

  _updateLabelPositions() {
    this.label.x = (this.width - this.label.width) / 2;
    this.valueLabel.x = (this.width - this.valueLabel.width) / 2;
    if (this._labelsSwapped) {
      this.label.y = (this.height + this.size) / 2 + 5;
      this.valueLabel.y = (this.height - this.size) / 2 - this.label.height - 5;
    } else {
      this.label.y = (this.height - this.size) / 2 - this.label.height - 5;
      this.valueLabel.y = (this.height + this.size) / 2 + 5;
    }
  }

  _updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this._updateHandleRotation();
      this.valueLabel.text = this._formatValue();
      this._updateLabelPositions();
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
    this._updateHandleRotation();
    this.valueLabel.text = this._formatValue();
    this._updateLabelPositions();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this._updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.handle.addEventListener("wheel", this._onWheel);
        this.wrapper.addEventListener("mousedown", this._onMouseDown);
        this.wrapper.addEventListener("touchstart", this._onMouseDown);
        this.wrapper.addEventListener("keydown", this._onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.handle.removeEventListener("wheel", this._onWheel);
        this.wrapper.removeEventListener("mousedown", this._onMouseDown);
        this.wrapper.removeEventListener("touchstart", this._onMouseDown);
        this.wrapper.removeEventListener("keydown", this._onKeyDown);
        document.removeEventListener("mousemove", this._onMouseMove);
        document.removeEventListener("touchmove", this._onMouseMove);
        document.removeEventListener("mouseup", this._onMouseUp);
        document.removeEventListener("touchend", this._onMouseUp);
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
    this._updateHandleSize();
    this._updateLabelPositions();
  }

  /**
   * Gets and sets whether the text label and value label will be swapped. If true, the text label will be on the bottom and the value label will be on the top.
   */
  get labelsSwapped() {
    return this._labelsSwapped;
  }

  set labelsSwapped(swap) {
    this._labelsSwapped = swap;
    this._updateLabelPositions();
  }

  /**
   * Gets and sets the maximum value of the knob.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this._updateValue(this.value);
  }

  /**
   * Gets and sets the minimum value of the knob.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this._updateValue(this.value);
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
    return this._roundValue(this._value);
  }

  set value(value) {
    this._updateValue(value);
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
    this._updateHandleSize();
    this._updateLabelPositions();
  }
}

customElements.define("minimal-knob", Knob);

