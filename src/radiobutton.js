export class RadioButton extends Component {
  constructor(parent, x, y, group, text, checked, defaultHandler) {
    super(parent, x, y);
    RadioButtonGroup.addToGroup(group, this);
    this.group = group;
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 10);
    this.checked = checked;
    this.addEventListener("click", defaultHandler);
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  
  createChildren() {
    this.setWrapperClass("MinimalRadioButton");
    this.wrapper.tabIndex = 0;
    this.check = this.createDiv(this.wrapper, "MinimalRadioButtonCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalRadioButton {
        ${Style.baseStyle}
        cursor: pointer;
        height: 100%;
        width: auto;
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
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this.onClick);
    this.wrapper.addEventListener("keydown", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.checked = true;
      this.dispatchEvent(new Event("click"));
    }
  }

  onKeyPress(event) {
    if (event.keyCode == 13 && this.enabled) {
      // enter
      this.wrapper.click();
    } else if (event.keyCode == 40) {
      // down
      RadioButtonGroup.getNextInGroup(this.group, this).focus();
    } else if (event.keyCode == 38) {
      // up
      RadioButtonGroup.getPrevInGroup(this.group, this).focus();
    }
  }


  //////////////////////////////////
  // General
  //////////////////////////////////
  
  focus() {
    this.wrapper.focus();
  }

  updateCheckStyle() {
    let className = this.checked
      ? "MinimalRadioButtonCheckChecked "
      : "MinimalRadioButtonCheck ";

    if (!this.enabled) {
      className += "MinimalRadioButtonCheckDisabled";
    }
    this.check.setAttribute("class", className);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////
  
  get checked() {
    return this._checked;
  }

  set checked(checked) {
    if(checked) {
      RadioButtonGroup.clearGroup(this.group);
    }
    this._checked = checked;
    this.updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled != enabled) {
      super.enabled = enabled;
      this.updateCheckStyle();
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
      } else {
        this.wrapper.tabIndex = -1;
      }
    }
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

  set width(w) {
    this.wrapper.style.width = this.label.width + 15 + "px";
  }
}

customElements.define("minimal-radiobutton", RadioButton);


