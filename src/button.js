import { Defaults } from "./defaults.js";
import { Component } from "./component.js";
import { Style } from "./style.js";

import { Label } from "./label.js";

export class Button extends Component {

  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(Defaults.button.width, Defaults.button.height);
    this.addEventListener("click", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.wrapper.tabIndex = 0;
    this.setWrapperClass("MinimalButton");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.label.autosize = false;
    this.label.align = "center";
  }

  createStyle() {
    const buttonStyle = `
      ${Style.baseStyle}
      background-color: #f9f9f9;
      border-radius: 0;
      border: 1px solid #999;
      height: 100%;
      width: 100%;
    `;

    const style = document.createElement("style");
    style.textContent = `
      .MinimalButton {
        ${buttonStyle}
        cursor: pointer;
      }
      .MinimalButton:hover {
        background-color: #fff;
      }
      .MinimalButton:active {
        background-color: #ccc;
      }
      .MinimalButtonDisabled {
        ${Style.disabledStyle}
        ${buttonStyle}
      }
      .MinimalButton:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onClick = this.onClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.wrapper.addEventListener("click", this.onClick);
    this.wrapper.addEventListener("keyup", this.onKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.dispatchEvent(new Event("click"));
    }
  }

  onKeyUp(event) {
    if (event.keyCode == 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////


  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.label.enabled = enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalButton");
      this.wrapper.tabIndex = 0;
    } else {
      this.wrapper.setAttribute("class", "MinimalButtonDisabled");
      this.wrapper.tabIndex = -1;
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.label.height = height;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.label.width = width;
  }
}

customElements.define("minimal-button", Button);

