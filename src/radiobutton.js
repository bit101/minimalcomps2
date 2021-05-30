import { Component } from "./component.js";
import { Label } from "./label.js";
import { RadioButtonGroup } from "./radiobuttongroup.js";
import { Style } from "./style.js";

/**
 * Creates a clickable radio button with a label that can be selected by clicking. Radio buttons are assigned to a group and only one radio button in a group will be selected at any one time.
 * You can get the text of the currently checked radio button in a group by calling RadioButtonGroup.getValueForGroup(group).
 * <div><img src="https://www.minimalcomps2.com/images/radiobutton.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const vbox = new VBox(panel, 20, 20, 10);
 * new RadioButton(vbox, 0, 0, "group", "Option 1", true, update);
 * new RadioButton(vbox, 0, 0, "group", "Option 2", false, update);
 * new RadioButton(vbox, 0, 0, "group", "Option 3", false, update);
 * function update() {
 *   console.log(RadioButtonGroup.getValueForGroup("group"));
 * }
 * @extends Component
 */
export class RadioButton extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this radio button to.
   * @param {number} x - The x position of the radio button. Default 0.
   * @param {number} y - The y position of the radio button. Default 0.
   * @param {string} group - The group this radio button belongs to. Default "group".
   * @param {string} text - The text label of the radio button. Default empty string.
   * @param {boolean} checked - The initial checked state of the radio button. Default false.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, group, text, checked, defaultHandler) {
    super(parent, x, y);
    RadioButtonGroup.addToGroup(group, this);
    this.group = group || "group";
    this._text = text || "";

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 10);
    this.checked = checked || false;
    this.addEventListener("click", defaultHandler);
    this.addToParent();
    this.updateWidth();
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
    style.textContent = Style.radiobutton;
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
      this.dispatchEvent(new CustomEvent("click", { detail: this.text }));
    }
  }

  onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      // enter
      this.wrapper.click();
    } else if (event.keyCode === 40) {
      // down
      event.preventDefault();
      RadioButtonGroup.getNextInGroup(this.group, this).focus();
    } else if (event.keyCode === 38) {
      // up
      event.preventDefault();
      RadioButtonGroup.getPrevInGroup(this.group, this).focus();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  focus() {
    if (this.enabled) {
      this.wrapper.focus();
    }
  }

  updateCheckStyle() {
    let className = this.checked
      ? "MinimalRadioButtonCheckChecked "
      : "MinimalRadioButtonCheck ";

    if (!this.enabled) {
      className += "MinimalRadioButtonCheckDisabled";
    }
    this.check.setAttribute("class", className);
    this.check.setAttribute("class", className);
    if (this.enabled) {
      this.setWrapperClass("MinimalRadioButton");
    } else {
      this.setWrapperClass("MinimalRadioButtonDisabled");
    }
  }

  updateWidth() {
    this.style.width = this.label.x + this.label.width + "px";
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this.label.height = h;
    this.check.style.top = Math.round((this.height - 10) / 2) + "px";
  }

  /**
   * Sets and gets the checked state of the radio button.
   */
  get checked() {
    return this._checked;
  }

  set checked(checked) {
    if (checked) {
      RadioButtonGroup.clearGroup(this.group);
    }
    this._checked = checked;
    this.updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
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

  /**
   * Sets and gets the text shown in the radio button's label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateWidth();
  }

  /**
   * Gets the width of this radio button. Setting the width does nothing because it is automatically determined by the width of the label.
   */
  get width() {
    return this.label.x + this.label.width;
  }

  set width(w) {
    w = w; // noop
  }
}

customElements.define("minimal-radiobutton", RadioButton);

