import { Defaults } from "./defaults.js";
import { HSlider } from "./hslider.js";
import { Style } from "./style.js";

/**
 * A vertical slider for visually selecting a numeric value. The slider can be moved by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/vslider.png"/></div>
 * @extends HSlider
 */
export class VSlider extends HSlider {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this slider to.
   * @param {number} x - The x position of the slider.
   * @param {number} y - The y position of the slider.
   * @param {string} text - The text label of the slider.
   * @param {number} value - The initial value of the slider.
   * @param {number} min - The minimum value of the slider.
   * @param {number} max - The maximum value of the slider.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y, text, value, min, max, defaultHandler);
  }
  //////////////////////////////////
  // Core
  //////////////////////////////////

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.vslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.vslider.handleSize;
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  onMouseDown(event) {
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
      this.calculateValueFromPos(y);
    }
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.getBoundingClientRect().top - this.offsetY;
    this.calculateValueFromPos(y);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  calculateValueFromPos(y) {
    let percent = 1 - y / (this.height - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    this.updateValue(value);
  }

  setDefaults() {
    this._decimals = Defaults.vslider.decimals;
    this._handleSize = Defaults.vslider.handleSize;
  }

  updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.top = this.height - this.handleSize - percent * (this.height - this._handleSize) + "px";
  }

  updateLabelPosition() {
    this.label.x = -(this.label.width - this.width) / 2;
    this.label.y = -this.label.height - 5;
  }

  updateValueLabelPosition() {
    this.valueLabel.x = -(this.valueLabel.width - this.width) / 2;
    this.valueLabel.y = this.height + 5;
  }

  setSliderSize() {
    this.setSize(Defaults.vslider.width, Defaults.vslider.height);
  }

  updateValue(value) {
    super.updateValue(value);
    this.updateValueLabelPosition();
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
    this.updateHandlePosition();
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.updateLabelPosition();
    this.updateHandlePosition();
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateLabelPosition();
    this.updateHandlePosition();
  }
}

customElements.define("minimal-vslider", VSlider);

