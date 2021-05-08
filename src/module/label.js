import { Component } from "./component.js";
import { Style } from "./style.js";

export class Label extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);

    this.label = document.createElement("div");
    this.label.textContent = text;
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
}

customElements.define("minimal-label", Label);
