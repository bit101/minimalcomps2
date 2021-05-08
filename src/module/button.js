import { Component } from "./component.js";
import { Style } from "./style.js";

export class Button extends Component {
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);

    this.setSize(100, 20);

    this.button = document.createElement("div");
    this.button.setAttribute("class", "MinimalButton");
    this.button.setAttribute("tabindex", "0");

    this.label = document.createElement("div");
    this.label.textContent = text;
    this.label.setAttribute("class", "MinimalButtonLabel");
    this.button.appendChild(this.label);

    this.addEventListener("click", (event) => {
      if (this.enabled) {
        defaultHandler(event);
      }
    })
    this.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        this.click();
      }
    });

    const style = document.createElement("style");
    style.textContent = `
      .MinimalButtonLabel {
        ${Style.baseStyle}
        color: #333;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
        white-space: nowrap;
        width: 100%;
      }
      .MinimalButton,
      .MinimalButtonDisabled {
        ${Style.baseStyle}
        background-color: #eee;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        width: 100%;
      }
      .MinimalButton:hover {
        background-color: #fff;
      }
      .MinimalButton:active {
        background-color: #ccc;
      }
      .MinimalButtonDisabled {
        ${Style.disabledStyle}
      }
      .MinimalButton:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style, this.button);
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
        this.button.setAttribute("class", "MinimalButton");
    } else {
      this.button.setAttribute("class", "MinimalButtonDisabled");
    }
    this.button.enabled = enabled;
  }
}

customElements.define("minimal-button", Button);

