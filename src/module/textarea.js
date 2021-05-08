import { Component } from "./component.js";

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
        ${Component.baseStyle}
        ${Component.shadowStyle}
        background-color: #fff;
        border: none;
        color: #333;
        height: 100%;
        margin: 0;
        overflow: hidden;
        padding: 2 2px;
        resize: none;
        width: 100%;
      }
      .MinimalTextArea:disabled,
      .MinimalTextArea[disabled] {
        opacity: 50%;
        user-select: none;
      }
      .MinimalTextArea::selection {
        background: #666;
        color: #fff;
      }
      .MinimalTextArea:focus {
        ${Component.focusStyle}
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
}

customElements.define("minimal-textarea", TextArea);
