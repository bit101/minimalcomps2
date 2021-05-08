import { Component } from "./component.js";

export class Panel extends Component {
  constructor(parent, x, y, w, h) {
    super(parent, x, y);

    this.setAttribute("class", "MinimalPanel");
    this.setSize(w, h);

    const panel = document.createElement("div");
    panel.setAttribute("class", "MinimalPanel");

    const style = document.createElement("style");
    style.textContent = `
    .MinimalPanel {
      ${Component.baseStyle}
      ${Component.shadowStyle}
      background-color: #eee;
      height: 100%;
      position: relative;
      width: 100%;
    }
    `;
    this.shadowRoot.append(style, panel);
  }

  addChild(child) {
    this.shadowRoot.append(child);
  }
}

customElements.define("minimal-panel", Panel);

