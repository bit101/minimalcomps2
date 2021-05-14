export class Checkbox extends Component {
  constructor(parent, x, y, text, checked, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 10);
    this.checked = checked;
    this.addEventListener("click", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.setWrapperClass("MinimalCheckbox");
    this.wrapper.tabIndex = 0;
    this.check = this.createDiv(this.wrapper, "MinimalCheckboxCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalCheckbox {
        ${Style.baseStyle}
        cursor: pointer;
        height: 100%;
        width: auto;
      }
      .MinimalCheckboxDisabled {
        ${Style.baseStyle}
        cursor: default;
        height: 100%;
        width: auto;
      }
      .MinimalCheckbox:focus {
        ${Style.focusStyle}
      }
      .MinimalCheckboxCheck {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        background-color: #ccc;
        width: 10px;
        height: 10px;
      }
      .MinimalCheckboxCheckChecked {
        ${Style.baseStyle}
        border: 2px solid #999;
        background-color: #fff;
        width: 10px;
        height: 10px;
      }
      .MinimalCheckboxCheckDisabled {
        ${Style.disabledStyle}
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this.onClick);
    this.wrapper.addEventListener("keypress", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new Event("click"));
    }
  }

  onKeyPress(event) {
    if (event.keyCode == 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  toggle() {
    this.checked = !this.checked;
  }
  
  updateCheckStyle() {
    let className = this.checked
      ? "MinimalCheckboxCheckChecked "
      : "MinimalCheckboxCheck ";

    if (!this.enabled) {
      className += "MinimalCheckboxCheckDisabled";
    }
    this.check.setAttribute("class", className);
    if (this.enabled) {
      this.setWrapperClass("MinimalCheckbox");
    } else {
      this.setWrapperClass("MinimalCheckboxDisabled");
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get checked() {
    return this._checked;
  }

  set checked(checked) {
    this._checked = checked;
    this.updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled != enabled) {
      super.enabled = enabled;
      this.updateCheckStyle();
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
      } else {
        this.wrapper.tabIndex = -1;
      }
    }
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  get width() {
    return super.width;
  }

  set width(w) {
    this.wrapper.style.width = this.label.width + 15 + "px";
  }
}

customElements.define("minimal-checkbox", Checkbox);


