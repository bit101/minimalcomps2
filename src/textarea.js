import { Component } from "./component.js";
import { Style } from "./style.js";

export class TextArea extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 100);
    this.addEventListener("input", defaultHandler);
 }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.textArea = this.createElement(this.shadowRoot, "textArea", "MinimalTextArea");
    this.textArea.value = this._text;
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
    this.onInput = this.onInput.bind(this);
    this.textArea.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  
  onInput() {
    this._text = this.textArea.value;
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
      this.textArea.disabled = !this.enabled;
      if (this.enabled) {
        this.textArea.addEventListener("input", this.onInput);
      } else {
        this.textArea.removeEventListener("input", this.onInput);
      }
    }
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.textArea.value = text;
  }
}

customElements.define("minimal-textarea", TextArea);
