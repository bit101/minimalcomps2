import { Defaults } from "./defaults.js";
import { HSlider } from "./hslider.js";
import { Style } from "./style.js";

/**
 * A vertical slider for visually selecting a numeric value. The slider can be moved by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/vslider.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new VSlider(panel, 20, 20, "Volume", 50, 0, 100,  event => console.log(event.target.value));
 * @extends HSlider
 */
export class VSlider extends HSlider {
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
    super(parent, x, y, text, value, min, max, defaultHandler);
    this._labelsSwapped = false;
  }
  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.vslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.vslider.handleSize;
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  _onMouseDown(event) {
    let mouseY;
    if (event.changedTouches) {
      event.preventDefault();
      this.wrapper.focus();
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    this.offsetY = mouseY - this.getBoundingClientRect().top - this.handle.offsetTop;
    if (this.offsetY < 0 || this.offsetY > this.handleSize) {
      this.offsetY = this.handleSize / 2;
      const y = mouseY - this.getBoundingClientRect().top - this.handleSize / 2;
      this._calculateValueFromPos(y);
    }
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.getBoundingClientRect().top - this.offsetY;
    this._calculateValueFromPos(y);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _calculateValueFromPos(y) {
    let percent = 1 - y / (this.height - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _setDefaults() {
    this._decimals = Defaults.vslider.decimals;
    this._handleSize = Defaults.vslider.handleSize;
  }

  _updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.top = this.height - this.handleSize - percent * (this.height - this._handleSize) + "px";
  }

  _updateLabelPosition() {
    this.label.x = -(this.label.width - this.width) / 2;
    if (this._labelsSwapped) {
      this.label.y = this.height + 5;
    } else {
      this.label.y = -this.label.height - 5;
    }
  }

  _updateValueLabelPosition() {
    this.valueLabel.x = -(this.valueLabel.width - this.width) / 2;
    if (this._labelsSwapped) {
      this.valueLabel.y = -this.valueLabel.height - 5;
    } else {
      this.valueLabel.y = this.height + 5;
    }
  }

  _setSliderSize() {
    this.setSize(Defaults.vslider.width, Defaults.vslider.height);
  }

  _updateValue(value) {
    super._updateValue(value);
    this._updateValueLabelPosition();
  }

  /**
   * Sets whether the text label and value label will be swapped. If true, the text label will be on the bottom and the value label will be on the top.
   * @param {boolean} swapped - Whether the labels will be swapped.
   * @returns This instance, suitable for chaining.
   */
  setLabelsSwapped(swapped) {
    this.labelsSwapped = swapped;
    return this;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the height of the draggable slider handle. If you make the slider thicker by changing its width, you may want to adjust the handle size as well. If handleSize is the same as the slider width, then the handle will be a square.
   * <div><img src="https://www.minimalcomps2.com/images/vsliderhandlesize.png"/></div>
   */
  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.height = handleSize + "px";
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
    this._updateHandlePosition();
  }

  /**
   * Gets and sets whether the text label and value label will be swapped. If true, the text label will be on the bottom and the value label will be on the top.
   */
  get labelsSwapped() {
    return this._labelsSwapped;
  }

  set labelsSwapped(swap) {
    this._labelsSwapped = swap;
    this._updateLabelPosition();
    this._updateValueLabelPosition();
  }

  /**
   * Gets and sets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this._updateLabelPosition();
    this._updateHandlePosition();
  }
}

customElements.define("minimal-vslider", VSlider);

