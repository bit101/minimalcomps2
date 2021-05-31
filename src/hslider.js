import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * A horizontal slider for visually selecting a numeric value. The slider can be moved by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/hslider.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new HSlider(panel, 20, 20, "Volume", 50, 0, 100,  event => console.log(event.target.value));
 * @extends Component
 */
export class HSlider extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this slider to.
   * @param {number} x - The x position of the slider. Default 0.
   * @param {number} y - The y position of the slider. Default 0.
   * @param {string} text - The text label of the slider. Default empty string.
   * @param {number} value - The initial value of the slider. Default 0.
   * @param {number} min - The minimum value of the slider. Default 0.
   * @param {number} max - The maximum value of the slider. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min || 0;
    this._max = max || 100;
    this._setDefaults();
    this._reversed = false;
    this._value = value || 0;
    this._showValue = true;
    this._text = text || "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this._setSliderSize();
    this._updateHandlePosition();
    this._updateLabelPosition();
    this._updateValueLabelPosition();
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  _createChildren() {
    this.wrapper.tabIndex = 0;
    this._setWrapperClass("MinimalSlider");
    this.handle = this._createDiv(this.wrapper, "MinimalSliderHandle");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this._formatValue());
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.hslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.hslider.handleSize;
  }

  _createListeners() {
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this.wrapper.addEventListener("wheel", this._onWheel);
    this.wrapper.addEventListener("mousedown", this._onMouseDown);
    this.wrapper.addEventListener("touchstart", this._onMouseDown);
    this.wrapper.addEventListener("keydown", this._onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  _onMouseDown(event) {
    let mouseX;
    if (event.changedTouches) {
      event.preventDefault();
      this.wrapper.focus();
      mouseX = event.changedTouches[0].clientX;
    } else {
      mouseX = event.clientX;
    }
    this.offsetX = mouseX - this.getBoundingClientRect().left - this.handle.offsetLeft;
    if (this.offsetX < 0 || this.offsetX > this.handleSize) {
      this.offsetX = this.handleSize / 2;
      const x = mouseX - this.getBoundingClientRect().left - this.handleSize / 2;
      this._calculateValueFromPos(x);
    }
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
    let mouseX;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].clientX;
    } else {
      mouseX = event.clientX;
    }
    const x = mouseX - this.getBoundingClientRect().left - this.offsetX;
    this._calculateValueFromPos(x);
  }

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("touchmove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchend", this._onMouseUp);
  }

  _onKeyDown(event) {
    let inc = 1 / Math.pow(10, this._decimals);
    if (this.reversed) {
      inc = -inc;
    }
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

  _calculateValueFromPos(x) {
    let percent = x / (this.width - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    this._updateValue(value);
  }

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

  _setDefaults() {
    this._handleSize = Defaults.hslider.handleSize;
    this._decimals = Defaults.hslider.decimals;
    this._textPosition = Defaults.hslider.textPosition;
  }

  _updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.left = percent * (this.width - this._handleSize) + "px";
  }

  _updateEnabledStyle() {
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this._setWrapperClass("MinimalSlider");
      this.handle.setAttribute("class", "MinimalSliderHandle");
    } else {
      this._setWrapperClass("MinimalSliderDisabled");
      this.handle.setAttribute("class", "MinimalSliderHandleDisabled");
    }
  }

  _updateLabelPosition() {
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

  _updateValueLabelPosition() {
    this.valueLabel.x = this.width + 5;
    this.valueLabel.y = (this.height - this.valueLabel.height) / 2;
  }

  _setSliderSize() {
    this.setSize(Defaults.hslider.width, Defaults.hslider.height);
  }

  _updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this._updateHandlePosition();
      this.valueLabel.text = this._formatValue();
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  /**
   * Adds a handler function for the "change" event on this slider.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Sets the number of decimals of precision to be used for the slider. This will effect what is shown in the value label as well as the value property of the slider. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   * @param {number} decimals - The decimals of precision to use.
   * @returns This instance, suitable for chaining.
   */
  setDecimals(decimals) {
    this.decimals = decimals;
    return this;
  }

  /**
   * Gets and sets the width of the draggable slider handle. If you make the slider thicker by changing its height, you may want to adjust the handle size as well. If handleSize is the same as the slider height, then the handle will be a square.
   * @param {number} handleSize - The size of the handle.
   * @returns This instance, suitable for chaining.
   */
  setHandleSize(handleSize) {
    this.handleSize = handleSize;
    return this;
  }

  /**
   * Sets the maximum value of this slider.
   * @param {number} max - The maximum value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setMax(max) {
    this.max = max;
    return this;
  }

  /**
   * Sets the minimum value of this slider.
   * @param {number} min - The minimum value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setMin(min) {
    this.min = min;
    return this;
  }

  /**
   * Sets the value of this slider.
   * @param {number} value - The value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * Sets the value, minimum and maximum of this slider.
   * @param {number} value - The value of this slider.
   * @param {number} min - The minimum value of this slider.
   * @param {number} max - The maximum value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setValueMinMax(value, min, max) {
    this.min = min;
    this.max = max;
    this.value = value;
    return this;
  }

  /**
   * Sets whether the slider is reversed. A reversed HSlider will show its maximum value on the left and minumum on the right. A reversed VSlider will show its maximum value on the bottom and minimum on the top.
   * @param {boolean} reversed - Whether or not this slider will be reversed.
   * @returns This instance, suitable for chaining.
   */
  setReversed(reversed) {
    this.reversed = reversed;
    return this;
  }

  /**
   * Sets whether or not the value of this slider will be shown.
   * @param {boolean} showValue - Whether or not the value will be shown.
   * @returns This instance, suitable for chaining.
   */
  setShowValue(showValue) {
    this.showValue = showValue;
    return this;
  }

  /**
   * Sets the text of this slider.
   * @param {string} text - The text to set on this slider.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the number of decimals of precision to be used for the slider. This will effect what is shown in the value label as well as the value property of the slider. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    this.valueLabel.text = this._formatValue();
    this._updateValueLabelPosition();
    this._updateHandlePosition();
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
        this.wrapper.addEventListener("wheel", this._onWheel);
        this.wrapper.addEventListener("mousedown", this._onMouseDown);
        this.wrapper.addEventListener("touchstart", this._onMouseDown);
        this.wrapper.addEventListener("keydown", this._onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.wrapper.removeEventListener("wheel", this._onWheel);
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
   * Gets and sets the width of the draggable slider handle. If you make the slider thicker by changing its height, you may want to adjust the handle size as well. If handleSize is the same as the slider height, then the handle will be a square.
   * <div><img src="https://www.minimalcomps2.com/images/hsliderhandlesize.png"/></div>
   */
  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.width = handleSize + "px";
    this._updateHandlePosition();
  }

  /**
   * Gets and sets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this._updateLabelPosition();
    this._updateValueLabelPosition();
  }

  /**
   * Gets and sets the position of the text label displayed on the slider. Valid values are "top" (default), "left" and "bottom". Not applicable to a VSlider.
   */
  get textPosition() {
    return this.textPosition;
  }

  set textPosition(position) {
    this._textPosition = position;
    this._updateLabelPosition();
  }

  /**
   * Gets and sets the maximum value of the slider.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this._updateValue(this.value);
    this._updateHandlePosition();
  }

  /**
   * Gets and sets the minimum value of the slider.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this._updateValue(this.value);
    this._updateHandlePosition();
  }

  /**
   * Gets and sets whether the slider is reversed. A reversed HSlider will show its maximum value on the left and minumum on the right. A reversed VSlider will show its maximum value on the bottom and minimum on the top.
   */
  get reversed() {
    return this._reversed;
  }

  set reversed(reversed) {
    this._reversed = reversed;
  }

  /**
   * Gets and sets whether or not the value label will be displayed.
   */
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

  /**
   * Gets and sets the text of the text label of the slider.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this._updateLabelPosition();
  }

  /**
   * Gets and sets the value of the slider.
   */
  get value() {
    return this._roundValue(this._value);
  }

  set value(value) {
    this._updateValue(value);
  }

  /**
   * Gets and sets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this._updateValueLabelPosition();
    this._updateHandlePosition();
  }
}

customElements.define("minimal-hslider", HSlider);

