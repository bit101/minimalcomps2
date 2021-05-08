import { Component } from "./component.js";
import { Style } from "./style.js";

export class TextInput extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);

    this.input = document.createElement("input");
    this.input.setAttribute("type", "text");
    this.input.setAttribute("class", "MinimalTextInput");
    this.input.value = text;

    this.setSize(100, 20);

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
    this.shadowRoot.append(style, this.input);
  }

  get text() {
    return this.input.value;
  }

  set text(text) {
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
