export class VSlider extends HSlider {

  setSliderSize(w, h) {
    this.setSize(h, w);
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
        height: ${this.handleSize}px;
        width: 100%;
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
        text-align: center;
        overflow: hidden;
      }
      .MinimalSliderLabelDisabled {
        ${Style.disabledStyle}
      } 
    `;
    this.shadowRoot.append(style);
  }


  onMouseDown(event) {
    if (!this.enabled) {
      return;
    }
    this.offsetY = event.clientY - this.getBoundingClientRect().top - this.handle.offsetTop;
    if (this.offsetY < 0 || this.offsetY > this.handleSize) {
      let y = event.clientY - this.getBoundingClientRect().top - this.handleSize / 2;
      this.updateValueFromY(y);
      this.updateBar();
      this.offsetY = this.handleSize / 2;
    }
    document.body.addEventListener("mousemove", this.onMouseMove);
    document.body.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseMove(event) {
    if (!this.enabled) {
      return;
    }
    let y = event.clientY - this.getBoundingClientRect().top - this.offsetY;
    this.handle.style.top = y + "px";
    this.updateValueFromY(y);
    this.updateBar();
  }

  updateValueFromY(y) {
    y = Math.min(y, this.height - this.handleSize);
    y = Math.max(y, 0);
    const percent = 1 - y / (this.height - this.handleSize);
    const value = this.min + (this.max - this.min) * percent;
    const mult = Math.pow(10, this.decimals);
    this._value = Math.round(value * mult) / mult;
    this.setValueLabel();
    this._defaultHander && this._defaultHander(this._value);
  }

  updateBar() {
    let percent = (this.value - this.min) / (this.max - this.min);
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.top = this.height - this.handleSize - percent * (this.height - this._handleSize) + "px";
  }

  addLabels(text, width) {
    super.addLabels(text, width);
    this.label.style.left = (-width + this.width) / 2 + "px";
    this.label.style.top = "-15px";
    this.label.style.width = width + "px";

    this.valueLabel.style.width = width + "px";
    this.valueLabel.style.left = (-width + this.width) / 2 + "px";
    this.valueLabel.style.top = this.height + 5 + "px";
  }

  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.height = handleSize + "px";
    this.updateBar();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    console.log(enabled);
    super.enabled = enabled;
    this.setEnabledStyle();
    if (this.enabled) {
      this.slider.tabIndex = 0;
    } else {
      this.slider.tabIndex = -1;
    }
  }

}

customElements.define("minimal-vslider", VSlider);



