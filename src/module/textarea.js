import { Component } from "./component.js";
import { Style } from "./style.js";

export class TextArea extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);

    const textArea = document.createElement("textArea");
    textArea.setAttribute("class", "MinimalTextArea");
    textArea.value = text;
    this.textArea = textArea;

    this.setSize(100, 100);

    const style = document.createElement("style");
    style.textContent = `
      .MinimalTextArea {
        ${Style.baseStyle}
        ${Style.textStyle}
        ${Style.shadowStyle}
        padding: 4px;
        resize: none;
      }
      .MinimalTextArea:disabled,
      .MinimalTextArea[disabled] {
        ${Style.disabledStyle}
      }
      .MinimalTextArea::selection {
        ${Style.textSelectionStyle}
      }
      .MinimalTextArea:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style, textArea);
  }

  get text() {
    return this.textArea.value;
  }

  set text(text) {
    this.textArea.value = text;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.textArea.disabled = !this.enabled;
  }
}

customElements.define("minimal-textarea", TextArea);
