import { Component } from "./component.js";

export class TextInput extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "MinimalTextInput");
    input.value = text;
    this.input = input;

    this.setSize(100, 16);

    const style = document.createElement("style");
    style.textContent = `
      .MinimalTextInput {
        ${Component.baseStyle}
        ${Component.shadowStyle}
        background-color: #ccc;
        border: none;
        color: #000;
        height: 100%;
        margin: 0;
        overflow: hidden;
        padding: 0 2px;
        width: 100%;
      }
      .MinimalTextInput:disabled,
      .MinimalTextInput[disabled] {
        opacity: 50%;
        user-select: none;
      }
      .MinimalTextInput::selection {
        background: #666;
        color: #fff;
      }
      .MinimalTextInput:focus {
        ${Component.focusStyle}
      }
    `;
    this.shadowRoot.append(style, input);
  }

  get text() {
    return this.input.value;
  }

  set text(text) {
    this.input.value = text;
  }
}

customElements.define("minimal-textinput", TextInput);
