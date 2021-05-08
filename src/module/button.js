import { Component } from "./component.js";

export class Button extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);

    this.setAttribute("class", "MinimalButton");
    this.setSize(100, 20);

    const button = document.createElement("div");
    button.setAttribute("class", "MinimalButton");
    button.setAttribute("tabindex", "0");

    const label = document.createElement("div");
    label.textContent = text;
    label.setAttribute("class", "MinimalButtonLabel");
    button.appendChild(label);

    this.addEventListener("click", defaultHandler);
    this.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        this.click();
      }
    });

    const style = document.createElement("style");
    style.textContent = `
      .MinimalButtonLabel {
        ${Component.baseStyle}
        ${Component.fontStyle}
        color: #000;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
        white-space: nowrap;
        width: 100%;
      }
      .MinimalButton {
        ${Component.baseStyle}
        background-color: #fff;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        width: 100%;
      }
      .MinimalButton:hover {
        background-color: #eee;
      }
      .MinimalButton:active {
        background-color: #ccc;
      }
      .MinimalButton:disabled,
      .MinimalButton[disabled] {
        cursor: default;
        opacity: 0.5;
      }
      .MinimalButton:focus {
        ${Component.focusStyle}
      }
    `;
    this.shadowRoot.append(style, button);
  }

}

customElements.define("minimal-button", Button);

