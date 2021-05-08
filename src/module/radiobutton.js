import { Component } from "./component.js";
import { Style } from "./style.js";
import { Label } from "./label.js";

export class RadioButton extends Component {
  static groups = {};

  static getValueForGroup(group) {
    const rbGroup = RadioButton.groups[group];
    if (!rbGroup) {
      return null;
    }
    for (let i = 0; i < rbGroup.length; i++) {
      const rb = rbGroup[i];
      if (rb.checked) {
        return rb.text;
      }
    }
    return null;
  }

  static clearGroup(group) {
    const rbGroup = RadioButton.groups[group];
    if (!rbGroup) {
      return;
    }
    for (let i = 0; i < rbGroup.length; i++) {
      const rb = rbGroup[i];
      rb.checked = false;
    }
  }


  constructor(parent, x, y, group, text, checked, defaultHandler) {
    super(parent, x, y);
    
    if (!RadioButton.groups[group]) {
      RadioButton.groups[group] = [];
    }
    RadioButton.groups[group].push(this);
      

    this.group = group;
    this.defaultHandler = defaultHandler;
    this._text = text;
    this.setSize(100, 10);


    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", "MinimalRadioButton");
    this.wrapper.setAttribute("tabindex", "0");

    this.check = document.createElement("div");
    this.check.setAttribute("class", "MinimalRadioButtonCheck");
    this.wrapper.appendChild(this.check);

    this.label = new Label(this.wrapper, 15, -1, this.text);

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
      .MinimalRadioButton {
        ${Style.baseStyle}
        cursor: pointer;
        height: 100%;
        width: 100%;
      }
      .MinimalRadioButton:focus {
        ${Style.focusStyle}
      }
      .MinimalRadioButtonCheck {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        border-radius: 5px;
        background-color: #ccc;
        width: 10px;
        height: 10px;
      }
      .MinimalRadioButtonCheckChecked {
        ${Style.baseStyle}
        border-radius: 5px;
        border: 2px solid #999;
        background-color: #fff;
        width: 10px;
        height: 10px;
      }
      .MinimalRadioButtonCheckDisabled {
        ${Style.disabledStyle}
      }
    `;
    this.shadowRoot.append(style, this.wrapper);
  }

  setCheckStyle() {
    let className = "MinimalRadioButtonCheck ";
    if (this.checked) {
      className = "MinimalRadioButtonCheckChecked ";
    }
    if (!this.enabled) {
      className += "MinimalRadioButtonCheckDisabled";
    }
    this.check.setAttribute("class", className);
  }


  get checked() {
    return this._checked;
  }

  set checked(checked) {
    if(checked) {
      RadioButton.clearGroup(this.group);
    }
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

customElements.define("minimal-radiobutton", RadioButton);


