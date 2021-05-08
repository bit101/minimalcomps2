import { Component } from "./component.js";
import { Style } from "./style.js";

export class TextArea extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._defaultHandler = defaultHandler;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 100);
 }

  createChildren() {
    this.textArea = document.createElement("textArea");
    this.textArea.setAttribute("class", "MinimalTextArea");
    this.textArea.value = this._text;
    this.textArea = this.textArea;
    this.shadowRoot.append(this.textArea);
  }

  createStyle() {
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
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.textArea.addEventListener("input", (event) => {
      this.enabled && this._defaultHandler && this._defaultHandler(event);
    });
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
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
