import { Component } from "./component.js";

export class Label extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);

    const label = document.createElement("div");
    label.textContent = text;
    label.setAttribute("class", "MinimalLabel");

    const style = document.createElement("style");
    style.textContent = `
      .MinimalLabel {
        ${Component.baseStyle}
        white-space: nowrap;
        font: 10px sans;
        color: #000;
        user-select: none;
      }
    `;
    this.shadowRoot.append(style, label);
  }
}

customElements.define("minimal-label", Label);
