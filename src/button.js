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
    this.button = document.createElement("div");
    this.button.setAttribute("class", "MinimalButton");
    this.button.tabIndex = 0;

    this.label = document.createElement("div");
    this.label.textContent = this._text;
    this.label.setAttribute("class", "MinimalButtonLabel");
    this.button.appendChild(this.label);
    this.shadowRoot.append(this.button);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalButtonLabel {
        ${Style.baseStyle}
        color: #333;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
        white-space: nowrap;
        width: 100%;
      }
      .MinimalButton,
      .MinimalButtonDisabled {
        ${Style.baseStyle}
        background-color: #eee;
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
    this.button.addEventListener("click", this.onClick);
    this.button.addEventListener("keypress", this.onKeyPress);
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
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      this.button.setAttribute("class", "MinimalButton");
      this.button.tabIndex = 0;
    } else {
      this.button.setAttribute("class", "MinimalButtonDisabled");
      this.button.tabIndex = -1;
    }
    this.button.enabled = enabled;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.textContent = text;
  }
}

customElements.define("minimal-button", Button);

