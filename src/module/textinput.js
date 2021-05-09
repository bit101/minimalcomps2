export class TextInput extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._defaultHandler = defaultHandler;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 20);
  }

  createChildren() {
    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.setAttribute("class", "MinimalTextInput");
    this.input.value = this._text;
    this.shadowRoot.append(this.input);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalTextInput {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        ${Style.textStyle}
        padding: 0 4px;
      }
      .MinimalTextInput:disabled,
      .MinimalTextInput[disabled] {
        ${Style.disabledStyle}
      }
      .MinimalTextInput::selection {
        ${Style.textSelectionStyle}
      }
      .MinimalTextInput:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.input.addEventListener("input", (event) => {
      this.enabled && this._defaultHandler && this._defaultHandler(event);
    });
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.input.value = text;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.input.disabled = !this.enabled;
  }
}

customElements.define("minimal-textinput", TextInput);
