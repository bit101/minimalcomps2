export class Button extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("click", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.wrapper.tabIndex = 0;
    this.setWrapperClass("MinimalButton");
    this.label = new Label(this.wrapper, 0, 0, this._text);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalButton {
        ${Style.baseStyle}
        background-color: #f9f9f9;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        width: 100%;
      }
      .MinimalButton:hover {
        background-color: #fff;
      }
      .MinimalButton:active {
        background-color: #ccc;
      }
      .MinimalButtonDisabled {
        ${Style.disabledStyle}
        ${Style.baseStyle}
        background-color: #f9f9f9;
        border-radius: 0;
        border: 1px solid #999;
        cursor: default;
        height: 100%;
        overflow: hidden;
        width: 100%;
      }
      .MinimalButton:focus {
        ${Style.focusStyle}
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
      this.dispatchEvent(new Event("click"));
    }
  }

  onKeyPress(event) {
    if (event.keyCode == 13 && this.enabled) {
      this.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  setSize(w, h) {
    super.setSize(w, h);
    this.label.x = (this.width - this.label.width) / 2 - 1;
    this.label.y = (this.height - this.label.height) / 2 -1;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalButton");
      this.wrapper.tabIndex = 0;
    } else {
      this.wrapper.setAttribute("class", "MinimalButtonDisabled");
      this.wrapper.tabIndex = -1;
    }
    this.wrapper.enabled = enabled;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }
}

customElements.define("minimal-button", Button);

