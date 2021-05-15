export class VSlider extends HSlider {

  //////////////////////////////////
  // Core
  //////////////////////////////////

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
        height: ${this.handleSize}px;
        width: 100%;
        cursor: pointer;
      }
      .MinimalSliderHandleDisabled {
        ${Style.disabledStyle}
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: ${this.handleSize}px;
        width: 100%;
        cursor: default;
      }
      .MinimalSlider:focus {
        ${Style.focusStyle}
      }
      .MinimalSliderLabel {
        ${Style.baseStyle}
        color: #333;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        user-select: none;
      }
      .MinimalSliderLabelDisabled {
        ${Style.disabledStyle}
      } 
    `;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  onMouseDown(event) {
    this.offsetY = event.clientY - this.getBoundingClientRect().top - this.handle.offsetTop;
    if (this.offsetY < 0 || this.offsetY > this.handleSize) {
      this.offsetY = this.handleSize / 2;
      let y = event.clientY - this.getBoundingClientRect().top - this.handleSize / 2;
      this.calculateValueFromPos(y);
    }
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseMove(event) {
    let y = event.clientY - this.getBoundingClientRect().top - this.offsetY;
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

  updateSliderSize(w, h) {
    this.setSize(h, w);
  }

  updateValue(value) {
    super.updateValue(value);
    this.updateValueLabelPosition();
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////
  
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

