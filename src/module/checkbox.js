import { Component } from "./component.js";
import { Style } from "./style.js";
import { Label } from "./label.js";

export class Checkbox extends Component {
  constructor(parent, x, y, text, checked, defaultHandler) {
    super(parent, x, y);

    this.defaultHandler = defaultHandler;
    this.setSize(100, 10);


    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "MinimalCheckbox");
    this.wrapper.setAttribute("tabindex", "0");

    this.check = document.createElement("div");
    this.check.setAttribute("class", "MinimalCheckboxCheck");
    this.wrapper.appendChild(this.check);

    this.label = new Label(this.wrapper, 15, -1, text);

    this.addEventListener("click", (event) => {
      if(this.enabled) {
        this.toggle();
        this.defaultHandler(event);
      }
    });
    this.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        this.click();
      }
    });
    this.checked = checked;

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
    this.shadowRoot.append(style, this.wrapper);
  }

  get checked() {
    return this._checked;
  }

  set checked(checked) {
    this._checked = checked;
    if (this._checked) {
      this.check.setAttribute("class", "MinimalCheckboxCheckChecked");
    } else {
      this.check.setAttribute("class", "MinimalCheckboxCheck");
    }
  }

  toggle() {
    this.checked = !this.checked;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      if (this.checked) {
        this.check.setAttribute("class", "MinimalCheckboxCheckChecked");
      } else {
        this.check.setAttribute("class", "MinimalCheckboxCheck");
      }
    } else {
      this.check.setAttribute("class", this.check.getAttribute("class") + " MinimalCheckboxCheckDisabled");
    }
    this.label.enabled = enabled;
  }

}

customElements.define("minimal-checkbox", Checkbox);


