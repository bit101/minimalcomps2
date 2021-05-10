export class ColorPicker extends Component {
  constructor(parent, x, y, color, defaultHandler) {
    super(parent, x, y);
    this._color = this.correctColor(color);
    this._color = this.cropColor(color);

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "MinimalColorPicker");

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.setAttribute("class", "MinimalColorPickerInput");
    this.input.maxLength = 7;
    this.input.value = this._color;
    this.wrapper.appendChild(this.input);

    this.preview = document.createElement("div");
    this.preview.setAttribute("class", "MinimalColorPickerPreview");
    this.preview.style.backgroundColor = this.color;
    this.wrapper.appendChild(this.preview);

    this.shadowRoot.append(this.wrapper);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalColorPicker {
        ${Style.baseStyle}
      }
      .MinimalColorPickerInput {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        ${Style.textStyle}
        letter-spacing: 1px;
        padding: 0 4px;
        width: 70px;
        height: 20px;
        text-transform: uppercase;
      }
      .MinimalColorPickerInput:disabled,
      .MinimalColorPickerInput[disabled] {
        ${Style.disabledStyle}
      }
      .MinimalColorPickerPreview {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        width: 20px;
        height: 20px;
        left: 80px;
        background-color: #fff;
      }
      .MinimalColorPickerPreviewDisabled {
        ${Style.disabledStyle}
      }
      .MinimalColorPickerInput:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInput = this.onInput.bind(this);
    this.input.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  
  onInput() {
    const color = this.correctColor(this.input.value);
    this.input.value = color;
    if ((color.length === 4 || color.length === 7) && this.color != color) {
      this._color = color;
      this.preview.style.backgroundColor = this.color;
      this.dispatchEvent(new Event("change"));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////
  
  correctColor(color) {
    color = "#" + color.replace(/[^0-9a-fA-F]/g, "");
    return color.toUpperCase();
  }

  cropColor(color) {
    if (color.length > 7) {
      color = color.substring(0, 7);
    }
    return color;
  }
  
  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////
  
  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled != enabled) {
      super.enabled = enabled;
      this.input.disabled = !this.enabled;
      if (this.enabled) {
        this.preview.setAttribute("class", "MinimalColorPickerPreview");
        this.input.addEventListener("input", this.onInput);
      } else {
        this.preview.setAttribute("class", "MinimalColorPickerPreview MinimalColorPickerPreviewDisabled");
        this.input.removeEventListener("input", this.onInput);
      }
    }
  }

  get color() {
    return this._color;
  }

  set color(color) {
    color = this.correctColor(color);
    color = this.cropColor(color);
    this._color = color;
    this.input.value = color;
    this.preview.style.backgroundColor = color;
  }

}

customElements.define("minimal-colorpicker", ColorPicker);
