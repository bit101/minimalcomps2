import { Component } from "./component.js";
import { Style } from "./style.js";

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
      ${Style.baseStyle}
      ${Style.shadowStyle}
      background-color: #eee;
      height: 100%;
      position: relative;
      width: 100%;
    }
    .MinimalPanel:disabled,
    .MinimalPanel[disabled] {
      ${Style.disabledStyle}
    }
    `;
    this.shadowRoot.append(style, panel);
  }

  addChild(child) {
    this.shadowRoot.append(child);
  }
}

customElements.define("minimal-panel", Panel);

