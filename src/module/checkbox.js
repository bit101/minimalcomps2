import { Component } from "./component.js";
import { Style } from "./style.js";
import { Label } from "./label.js";

export class Checkbox extends Component {
  constructor(parent, x, y, text, checked, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._defaultHandler = defaultHandler;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 10);
    this.checked = checked;
  }

  createChildren() {
    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "MinimalCheckbox");
    this.wrapper.setAttribute("tabindex", "0");

    this.check = document.createElement("div");
    this.check.setAttribute("class", "MinimalCheckboxCheck");
    this.wrapper.appendChild(this.check);

    this.label = new Label(this.wrapper, 15, -1, this._text);
    this.shadowRoot.append(this.wrapper);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalCheckbox {
        ${Style.baseStyle}
        cursor: pointer;
        height: 100%;
        width: 100%;
      }
      .MinimalCheckboxCheck {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        background-color: #ccc;
        width: 10px;
        height: 10px;
      }
      .MinimalCheckboxCheckChecked {
        ${Style.baseStyle}
        border: 2px solid #999;
        background-color: #fff;
        width: 10px;
        height: 10px;
      }
      .MinimalCheckboxCheckDisabled {
        ${Style.disabledStyle}
      }
      .MinimalCheckbox:focus {
        ${Style.focusStyle}
      }
    `;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.addEventListener("click", (event) => {
      if(this.enabled) {
        this.toggle();
        this._defaultHandler && this._defaultHandler(event);
      }
    });
    this.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        this.click();
      }
    });
  }

  setCheckStyle() {
    let className = "MinimalCheckboxCheck ";
    if (this.checked) {
      className = "MinimalCheckboxCheckChecked ";
    }
    if (!this.enabled) {
      className += "MinimalCheckboxCheckDisabled";
    }
    this.check.setAttribute("class", className);
  }

  get checked() {
    return this._checked;
  }

  set checked(checked) {
    this._checked = checked;
    this.setCheckStyle();
  }

  toggle() {
    this.checked = !this.checked;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.setCheckStyle();
    this.label.enabled = enabled;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

}

customElements.define("minimal-checkbox", Checkbox);


