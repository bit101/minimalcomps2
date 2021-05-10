export class TextInput extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("input", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
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
    this.onInput = this.onInput.bind(this);
    this.input.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  
  onInput() {
    this._text = this.input.value;
    this.dispatchEvent(new Event("input"));
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
        this.input.addEventListener("input", this.onInput);
      } else {
        this.input.removeEventListener("input", this.onInput);
      }
    }
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.input.value = text;
  }

}

customElements.define("minimal-textinput", TextInput);
