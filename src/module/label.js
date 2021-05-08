import { Component } from "./component.js";
import { Style } from "./style.js";

export class Label extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);

    this._text = text;
    this.label = document.createElement("div");
    this.label.textContent = this._text;
    this.label.setAttribute("class", "MinimalLabel");

    const style = document.createElement("style");
    style.textContent = `
      .MinimalLabel {
        ${Style.baseStyle}
        white-space: nowrap;
        color: #333;
        user-select: none;
      }
      .MinimalLabelDisabled {
        ${Style.disabledStyle}
      }
    `;
    this.shadowRoot.append(style, this.label);
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      this.label.setAttribute("class", "MinimalLabel");
    } else {
      this.label.setAttribute("class", "MinimalLabel MinimalLabelDisabled");
    }
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.textContent = text;
  }
}

customElements.define("minimal-label", Label);
