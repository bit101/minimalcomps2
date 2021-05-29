const Style = {};

////////////////////
// Base Styles
////////////////////
Style.baseStyle = `
  box-sizing: border-box;
  position: absolute;
  font: 10px sans-serif;
`;

Style.disabledStyle = ` 
  cursor: default;
  opacity: 0.5;
  user-select: none;
  -webkit-user-select: none;
`;

Style.focusStyle = `
  outline: 1px solid #ccc;
  outline-offset: 2px;
`;

Style.shadowStyle = `
  box-shadow: inset 1px 1px 2px #808080;
`;

Style.textStyle = `
  background-color: #fff;
  border: none;
  color: #333;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

Style.textSelectionStyle = `
  background: #666;
  color: #fff;
`;

Style.buttonStyle = `
  ${Style.baseStyle}
  background-color: #f9f9f9;
  border-radius: 0;
  border: 1px solid #999;
  height: 100%;
  width: 100%;
`;

////////////////////
// Button
////////////////////
Style.button = `
  .MinimalButton {
    ${Style.buttonStyle}
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
    ${Style.buttonStyle}
  }
  .MinimalButton:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// Canvas
////////////////////
Style.canvas = `
  .MinimalCanvas {
    ${Style.baseStyle}
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #999;
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-select: none;
  }
  .MinimalCanvasDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #999;
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-select: none;
  }
`;

////////////////////
// Checkbox
////////////////////
Style.checkbox = `
  .MinimalCheckbox {
    ${Style.baseStyle}
    cursor: pointer;
    height: 100%;
    width: auto;
  }
  .MinimalCheckboxDisabled {
    ${Style.baseStyle}
    cursor: default;
    height: 100%;
    width: auto;
  }
  .MinimalCheckbox:focus {
    ${Style.focusStyle}
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
`;

////////////////////
// ColorPicker
////////////////////
Style.colorpicker = `
  .MinimalColorPicker {
    ${Style.baseStyle}
    width: 100%;
    height: 100%;
  }
  .MinimalColorPickerInput {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    ${Style.textStyle}
    letter-spacing: 1px;
    padding: 0 4px;
    width: 70px;
    height: 20px;
    text-transform: uppercase;
  }
  .MinimalColorPickerInput:disabled,
  .MinimalColorPickerInput[disabled] {
    ${Style.disabledStyle}
  }
  .MinimalColorPickerPreview {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    width: 20px;
    height: 20px;
    left: 80px;
    background-color: #fff;
  }
  .MinimalColorPickerPreviewDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    ${Style.shadowStyle}
    width: 20px;
    height: 20px;
    left: 80px;
    background-color: #fff;
  }
  .MinimalColorPickerInput:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// Component
////////////////////
Style.component = `
  .MinimalWrapper {
    ${Style.baseStyle}
    height: 100%;
    overflow: hidden;
    width: 100%;
  }
  :host {
    position: absolute;
    display: block;
    box-sizing: border-box;
  }
`;

////////////////////
// Dropdown
////////////////////
Style.dropdown = `
  .MinimalDropdown {
    ${Style.baseStyle}
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #999;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  .MinimalDropdownDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #999;
    cursor: default;
    height: 100%;
    width: 100%;
  }
  .MinimalDropdown:focus {
    ${Style.focusStyle}
  }
  .MinimalDropdownButton,
  .MinimalDropdownButtonDisabled {
    ${Style.baseStyle}
    line-height: 9px;
    color: #333;
    background-color: #eee;
    border-radius: 0;
    border: 1px solid #999;
    height: 20px;
    width: 20px;
    left: 80px;
    top: -1px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
  .MinimalDropdownButtonDisabled {
    ${Style.disabledStyle}
  }
  .MinimalDropdownItem {
    ${Style.baseStyle}
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #999;
    cursor: pointer;
  }
  .MinimalDropdownItem:hover {
    background-color: #f8f8f8;
  }
  .MinimalDropdownItem:focus {
    ${Style.focusStyle}
    background-color: #f8f8f8;
  }
`;

////////////////////
// HSlider
////////////////////
Style.hslider = `
  .MinimalSlider {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalSliderDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    ${Style.shadowStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalSliderHandle {
    ${Style.baseStyle}
    background-color: #fff;
    border: 1px solid #999;
    height: 100%;
    cursor: pointer;
  }
  .MinimalSliderHandleDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    background-color: #fff;
    border: 1px solid #999;
    height: 100%;
    cursor: default;
  }
  .MinimalSlider:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// Image
////////////////////
Style.image = `
  .MinimalImage {
    ${Style.baseStyle}
    background-color: #eee;
    border-radius: 0;
    border: 1px solid #999;
  }
  .MinimalImageDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    background-color: #eee;
    border-radius: 0;
    border: 1px solid #999;
  }
`;

////////////////////
// Knob
////////////////////
Style.knob = `
  .MinimalKnob {
    ${Style.baseStyle}
    width: 100%;
    height: 100%;
  }
  .MinimalKnob:focus {
    ${Style.baseStyle}
    ${Style.focusStyle}
    width: 100%;
    height: 100%;
  }
  .MinimalKnobDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    width: 100%;
    height: 100%;
  }
  .MinimalKnobHandle {
    ${Style.baseStyle}
    border-radius: 50%;
    border: 1px solid #999;
    background-color: #fff;
  }
  .MinimalKnobZero {
    ${Style.baseStyle}
    width: 33%;
    height: 2px;
    background-color: #bbb;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

////////////////////
// Label
////////////////////
Style.label = `
  .MinimalLabel {
    ${Style.baseStyle}
    color: #333;
    height: 100%;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
  }
  .MinimalLabelDisabled {
    ${Style.disabledStyle}
  }
`;

////////////////////
// LED
////////////////////
Style.led = `
  .MinimalLED {
    ${Style.baseStyle}
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .MinimalLEDDisabled {
    ${Style.disabledStyle}
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

////////////////////
// NumericStepper
////////////////////
Style.numericstepper = `
  .MinimalNumericStepper {
    ${Style.baseStyle}
    width: 100%;
    height: 100%;
  }
  .MinimalNumericStepperInput {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    ${Style.textStyle}
    padding: 0 4px;
    width: 60px;
    height: 20px;
  }
  .MinimalNumericStepperInput:disabled,
  .MinimalNumericStepperInput[disabled] {
    ${Style.disabledStyle}
  }
  .MinimalNumericStepperInput:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// Panel
////////////////////
Style.panel = `
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
  :host {
    overflow: hidden;
    position: relative;
  }
`;

////////////////////
// ProgressBar
////////////////////
Style.progressbar = `
  .MinimalProgressBar {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalProgressBarDisabled {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    ${Style.disabledStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalProgressBarFill {
    ${Style.baseStyle}
    background-color: #fff;
    border: 1px solid #999;
    height: 100%;
  }
  .MinimalProgressBarFillDisabled {
    ${Style.baseStyle}
    ${Style.disabledStyle}
    background-color: #fff;
    border: 1px solid #999;
    height: 100%;
  }
`;

////////////////////
// RadioButton
////////////////////
Style.radiobutton = `
  .MinimalRadioButton {
    ${Style.baseStyle}
    cursor: pointer;
    height: 100%;
    width: auto;
  }
  .MinimalRadioButtonDisabled {
    ${Style.baseStyle}
    cursor: default;
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

////////////////////
// TextArea
////////////////////
Style.textarea = `
  .MinimalTextArea {
    ${Style.baseStyle}
    ${Style.textStyle}
    ${Style.shadowStyle}
    padding: 4px;
    resize: none;
  }
  .MinimalTextArea:disabled,
  .MinimalTextArea[disabled] {
    ${Style.disabledStyle}
  }
  .MinimalTextArea::selection {
    ${Style.textSelectionStyle}
  }
  .MinimalTextArea:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// TextBox
////////////////////
Style.textbox = `
  .MinimalTextBox {
    ${Style.baseStyle}
    color: #333;
    height: 100%;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    width: 100%;
  }
  .MinimalTextBoxDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    height: 100%;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
    width: 100%;
  }
`;

////////////////////
// TextInput
////////////////////
Style.textinput = `
  .MinimalTextInput {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    ${Style.textStyle}
    padding: 0 4px;
  }
  .MinimalTextInput:disabled,
  .MinimalTextInput[disabled] {
    ${Style.disabledStyle}
  }
  .MinimalTextInput::selection {
    ${Style.textSelectionStyle}
  }
  .MinimalTextInput:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// Toggle
////////////////////
Style.toggle = `
  .MinimalToggle {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .MinimalToggleDisabled {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    ${Style.disabledStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalToggleHandle {
    ${Style.baseStyle}
    background-color: #fff;
    border: 1px solid #999;
    width: 50%;
    height: 100%;
  }
  .MinimalToggle:focus {
    ${Style.focusStyle}
  }
`;

////////////////////
// VSlider
////////////////////
Style.vslider = `
  .MinimalSlider {
    ${Style.baseStyle}
    ${Style.shadowStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalSliderDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    ${Style.shadowStyle}
    background-color: #ccc;
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
  .MinimalSliderHandle {
    ${Style.baseStyle}
    background-color: #fff;
    border: 1px solid #999;
    width: 100%;
    cursor: pointer;
  }
  .MinimalSliderHandleDisabled {
    ${Style.disabledStyle}
    ${Style.baseStyle}
    background-color: #fff;
    border: 1px solid #999;
    width: 100%;
    cursor: default;
  }
  .MinimalSlider:focus {
    ${Style.focusStyle}
  }
`;

class Component extends HTMLElement {
  constructor(parent, x, y) {
    super();
    this.parent = parent;
    this._enabled = true;

    this.attachShadow({mode: "open"});
    this.createWrapper();
    this.createWrapperStyle();

    this.move(x || 0, y || 0);
  }

  addToParent() {
    this.parent && this.parent.appendChild(this);
  }

  //////////////////////////////////
  // Creators
  //////////////////////////////////

  createDiv(parent, className) {
    return this.createElement(parent, "div", className);
  }

  /* eslint-disable class-methods-use-this */
  createElement(parent, type, className) {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    parent && parent.appendChild(el);
    return el;
  }
  /* eslint-enable */

  createInput(parent, className) {
    const input = this.createElement(parent, "input", className);
    input.type = "text";
    return input;
  }

  createWrapper() {
    this.wrapper = this.createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
    this.shadowRoot.appendChild(document.createElement("slot"));
  }

  createWrapperStyle() {
    const style = document.createElement("style");
    style.textContent = Style.component;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Moves the component to a specified position.
   * @param {number} x - The new x position of the component.
   * @param {number} y - The new y position of the component.
   */
  move(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Rotates the component.
   * @param {number} rad - The number of radians to rotate the component by.
   */
  rotate(rad) {
    this.style.transform = `rotate(${rad}rad)`;
  }

  /**
   * Rotates the component.
   * @param {number} deg - The number of degrees to rotate the component by.
   */
  rotateDeg(deg) {
    this.style.transform = `rotate(${deg}deg)`;
  }

  /**
   * Sizes the component.
   * @param {number} w - The new width of the component.
   * @param {number} h - The new height of the component.
   */
  setSize(w, h) {
    this.width = w;
    this.height = h;
  }

  setWrapperClass(className) {
    this.wrapper.setAttribute("class", className);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets whether or not this component is enabled. Non-enabled components will be faded out and not respond to events.
   */
  get enabled() {
    return this._enabled;
  }

  set enabled(enabled) {
    this._enabled = enabled;
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return this._height;
  }

  set height(h) {
    this._height = h;
    this.style.height = h + "px";
  }

  /**
   * Sets and gets the width of this component.
   */
  get width() {
    return this._width;
  }

  set width(w) {
    this._width = w;
    this.style.width = w + "px";
  }

  /**
   * Sets and gets the x position of this component.
   */
  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
    this.style.left = x + "px";
  }

  /**
   * Sets and gets the y position of this component.
   */
  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
    this.style.top = y + "px";
  }
}

customElements.define("minimal-component", Component);

/**
 * Defaults contains default properties for different components.
 */
const Defaults = {
  /**
   * Default properties for the Button component.
   */
  button: {
    width: 100,
    height: 20,
  },
  /**
   * Default properties for the HSlider component.
   */
  hslider: {
    decimals: 0,
    textPosition: "top",
    width: 150,
    height: 15,
    handleSize: 15,
  },
  /**
   * Default properties for the Image component.
   */
  image: {
    width: 100,
  },
  /**
   * Default properties for the knob component.
   */
  knob: {
    decimals: 0,
    size: 40,
  },
  /**
   * Default properties for the Label component.
   */
  label: {
    fontSize: 10,
  },
  /**
   * Default properties for the VSlider component.
   */
  vslider: {
    decimals: 0,
    width: 15,
    height: 150,
    handleSize: 15,
  },
};

/**
 * Creates a static single line text label.
 * <div><img src="https://www.minimalcomps2.com/images/label.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Label(panel, 20, 20, "I am a label");
 * @extends Component
 */
class Label extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this label to.
   * @param {number} x - The x position of the label.
   * @param {number} y - The y position of the label.
   * @param {string} text - The initial text to display in the label.
   */
  constructor(parent, x, y, text) {
    super(parent, x, y);
    this._align = "left";
    this._autosize = true;
    this._color = "#333";
    this._bold = false;
    this._italic = false;
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.fontSize = Defaults.label.fontSize;
    // width will be 0 until it is on the live DOM
    // so we put it on document.body, get width
    // then remove it and add it to parent.
    document.body.appendChild(this);
    this._width = this.wrapper.offsetWidth;
    this.height = Defaults.label.fontSize + 2;
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalLabel");
    this.wrapper.textContent = this._text;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.label;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the horizontal alignment of the text in the label (left, right, center). This property will be ingored unless autosize is set to false and the label's width is set to a value higher than the actual width of the text.
   */
  get align() {
    return this._align;
  }

  set align(align) {
    this._align = align;
    this.wrapper.style.textAlign = align;
  }

  /**
   * Gets and sets whether or not the size of the label will automatically adjust to fit the text assigned to it. If autosize is true, setting width or align will be ignored.
   */
  get autosize() {
    return this._autosize;
  }

  set autosize(autosize) {
    this._autosize = autosize;
    if (this._autosize) {
      this.wrapper.style.width = "auto";
      this._width = this.wrapper.offsetWidth;
    } else {
      this._width = this.wrapper.offsetWidth;
      this.wrapper.style.width = this._width + "px";
    }
  }

  /**
   * Gets and sets whether or not the text will be bold.
   */
  get bold() {
    return this._bold;
  }

  set bold(bold) {
    this._bold = bold;
    if (this._bold) {
      this.wrapper.style.fontWeight = "bold";
    } else {
      this.wrapper.style.fontWeight = "normal";
    }
  }

  /**
   * Gets and sets the color of the text.
   */
  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this.wrapper.style.color = color;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      this.setWrapperClass("MinimalLabel");
    } else {
      this.setWrapperClass("MinimalLabel MinimalLabelDisabled");
    }
  }

  /**
   * Gets and sets the size of the text.
   */
  get fontSize() {
    return this._fontSize;
  }

  set fontSize(fontSize) {
    this._fontSize = fontSize;
    this.wrapper.style.fontSize = fontSize + "px";
  }
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.wrapper.style.lineHeight = height + "px";
  }

  /**
   * Gets and sets whether or not the text will be italicized.
   */
  get italic() {
    return this._italics;
  }

  set italic(italic) {
    this._italic = italic;
    if (this._italic) {
      this.wrapper.style.fontStyle = "italic";
    } else {
      this.wrapper.style.fontStyle = "normal";
    }
  }

  /**
   * Gets and sets the plain text to be displayed. Compare with the htmlText property.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.wrapper.textContent = text;
    if (this._autosize) {
      this._width = this.wrapper.offsetWidth;
    }
  }

  get width() {
    return this._width;
  }

  set width(w) {
    if (!this.autosize) {
      this._width = w;
      this.wrapper.style.width = w + "px";
    }
  }
}

customElements.define("minimal-label", Label);

/**
 * Creates a clickable pushbutton with a text label.
 * <div><img src="https://www.minimalcomps2.com/images/button.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Button(panel, 20, 20, "Click me", event => console.log("clicked!"));
 * @extends Component
 */
class Button extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this button to.
   * @param {number} x - The x position of the button.
   * @param {number} y - The y position of the button.
   * @param {string} text - The text label of the button.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(Defaults.button.width, Defaults.button.height);
    this.addEventListener("click", defaultHandler);
    this.addToParent();
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
    const style = document.createElement("style");
    style.textContent = Style.button;
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
    if (event.keyCode === 13 && this.enabled) {
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

  /**
   * Sets and gets the text shown in the button's label.
   */
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

/**
 * Creates an HTML Canvas element for dynamically drawn content.
 * <div><img src="https://www.minimalcomps2.com/images/canvas.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 240, 240);
 * const canvas = new Canvas(panel, 20, 20, 200, 200);
 * canvas.context.fillStyle = "red";
 * canvas.context.beginPath();
 * canvas.context.arc(100, 100, 100, 0, Math.PI * 2);
 * canvas.context.fill();
 *
 * @extends Component
 */
class Canvas extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this canvas to.
   * @param {number} x - The x position of the canvas.
   * @param {number} y - The y position of the canvas.
   * @param {number} w - The width of the canvas.
   * @param {number} h - The height of the canvas.
   */
  constructor(parent, x, y, w, h) {
    super(parent, x, y);

    this.createChildren();
    this.createStyle();

    this.setSize(w, h);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.canvas = this.createElement(this.wrapper, "canvas", "MinimalCanvas");
    this._context = this.canvas.getContext("2d");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.canvas;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  //////////////////////////////////
  // General
  //////////////////////////////////

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Returns the current 2d drawing context of the canvas (read only).
   */
  get context() {
    return this._context;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this._enabled) {
      this.canvas.setAttribute("class", "MinimalCanvas");
    } else {
      this.canvas.setAttribute("class", "MinimalCanvasDisabled");
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.canvas.height = height;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.canvas.width = width;
  }
}

customElements.define("minimal-canvas", Canvas);

/**
 * Creates a clickable checkbox with a label that toggles on and off when clicked.
 * <div><img src="https://www.minimalcomps2.com/images/checkbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Checkbox(panel, 20, 20, "Check it", false, event => console.log(event.target.checked));
 * @extends Component
 */
class Checkbox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this checkbox to.
   * @param {number} x - The x position of the checkbox.
   * @param {number} y - The y position of the checkbox.
   * @param {string} text - The text label of the checkbox.
   * @param {boolean} checked - The initial checked state of the checkbox.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, checked, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 10);
    this.checked = checked;
    this.addEventListener("click", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalCheckbox");
    this.wrapper.tabIndex = 0;
    this.check = this.createDiv(this.wrapper, "MinimalCheckboxCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.checkbox;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this.onClick);
    this.wrapper.addEventListener("keypress", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new CustomEvent("click", { detail: this.checked }));
    }
  }

  onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Toggles the state of the checkbox between checked and not checked.
   */
  toggle() {
    this.checked = !this.checked;
  }

  updateCheckStyle() {
    let className = this.checked
      ? "MinimalCheckboxCheckChecked "
      : "MinimalCheckboxCheck ";

    if (!this.enabled) {
      className += "MinimalCheckboxCheckDisabled";
    }
    this.check.setAttribute("class", className);
    if (this.enabled) {
      this.setWrapperClass("MinimalCheckbox");
    } else {
      this.setWrapperClass("MinimalCheckboxDisabled");
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the checked state of the checkbox.
   */
  get checked() {
    return this._checked;
  }

  set checked(checked) {
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
   * Sets and gets the text shown in the button's label.
   */
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

customElements.define("minimal-checkbox", Checkbox);

/**
 * Creates a input for entering color values, with a preview swatch.
 * <div><img src="https://www.minimalcomps2.com/images/colorpicker.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Colon(panel, 20, 20, "#f00", event => console.log(event.target.color));
 * @extends Component
 */
class ColorPicker extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this color picker to.
   * @param {number} x - The x position of the color picker.
   * @param {number} y - The y position of the color picker.
   * @param {string} text - The text shown in the text label of the color picker.
   * @param {string} color - The initial color value of the color picker.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, color, defaultHandler) {
    super(parent, x, y);
    if (typeof(arguments[4]) !== "string") {
      // don't break the original signature, which was:
      // new ColorPicker(parent, x, y, color, defaultHandler);
      text = "";
      color = arguments[3];
      defaultHandler = arguments[4];
    }
    this._text = text;
    this._textPosition = "top";
    this._color = this.correctColor(color);
    this._color = this.cropColor(color);

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalColorPicker");

    this.input = this.createInput(this.wrapper, "MinimalColorPickerInput");
    this.input.maxLength = 7;
    this.input.value = this._color;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.preview = this.createDiv(this.wrapper, "MinimalColorPickerPreview");
    this.preview.style.backgroundColor = this.color;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.colorpicker;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInput = this.onInput.bind(this);
    this.input.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    const color = this.correctColor(this.input.value);
    this.input.value = color;
    if ((color.length === 4 || color.length === 7) && this.color !== color) {
      this._color = color;
      this.preview.style.backgroundColor = this.color;
      this.dispatchEvent(new CustomEvent("change", { detail: this.color }));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  correctColor(color) {
    color = "#" + color.replace(/[^0-9a-fA-F]/g, "");
    return color.toUpperCase();
  }

  cropColor(color) {
    if (color.length > 7) {
      color = color.substring(0, 7);
    }
    return color;
  }

  updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  /**
   * Sets the color value using three values for red, green and blue.
   * @param {number} r - The value of the red channel (0 - 255).
   * @param {number} g - The value of the red channel (0 - 255).
   * @param {number} b - The value of the red channel (0 - 255).
   */
  setRGB(r, g, b) {
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);
    if (red.length === 1) {
      red = "0" + red;
    }
    if (green.length === 1) {
      green = "0" + green;
    }
    if (blue.length === 1) {
      blue = "0" + blue;
    }
    if ( red.charAt(0) === red.charAt(1) && green.charAt(0) === green.charAt(1) && blue.charAt(0) === blue.charAt(1)) {
      red = red.charAt(0);
      green = green.charAt(0);
      blue = blue.charAt(0);
    }
    this.color = red + green + blue;
  }

  /**
   * Sets the color value using a single 24-bit number.
   * @param {number} num - The number to parse into a color value. This would usually be in decimal (e.g. 16777215) or hexadecimal (e.g. 0xffffff).
   */
  setNumber(num) {
    const red = num >> 16;
    const green = num >> 8 & 255;
    const blue = num & 255;
    this.setRGB(red, green, blue);
  }

  /**
   * Sets the color value to a random RGB value.
   */
  setRandom() {
    this.setNumber(Math.random() * 0xffffff);
  }

  /**
   * Gets the current value of this component as a single 24-bit number from 0 to 16777215 (0x000000 to 0xffffff).
   */
  getNumber() {
    const c = this.color.substring(1);
    if (c.length === 3) {
      let r = c.charAt(0);
      let g = c.charAt(1);
      let b = c.charAt(2);
      r += r;
      g += g;
      b += b;
      return parseInt(r + g + b, 16);
    }
    return parseInt(c, 16);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets the red channel of the current color value as a numerical value from 0 to 255.
   */
  get red() {
    return this.getNumber() >> 16;
  }

  /**
   * Gets the green channel of the current color value as a numerical value from 0 to 255.
   */
  get green() {
    return this.getNumber() >> 8 & 255;
  }

  /**
   * Gets the blue channel of the current color value as a numerical value from 0 to 255.
   */
  get blue() {
    return this.getNumber() & 255;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.label.enabled = enabled;
      this.input.disabled = !this.enabled;
      if (this.enabled) {
        this.preview.setAttribute("class", "MinimalColorPickerPreview");
        this.input.addEventListener("input", this.onInput);
      } else {
        this.preview.setAttribute("class", "MinimalColorPickerPreviewDisabled");
        this.input.removeEventListener("input", this.onInput);
      }
    }
  }

  /**
   * Sets and gets the color value of this color picker. Valid inputs are three or six character strings containing hexadecimal digits (0-9 and upper or lower case A-F), optionally preceded by a "#" character.
   * @example
   * colorpicker.color = "#f9c";
   * colorpicker.color = "#F9C";
   * colorpicker.color = "f9c";
   * colorpicker.color = "F9C";
   * colorpicker.color = "#ff99cc";
   * colorpicker.color = "#FF99CC";
   * colorpicker.color = "ff99cc";
   * colorpicker.color = "FF99CC";
   */
  get color() {
    return this._color;
  }

  set color(color) {
    color = this.correctColor(color);
    color = this.cropColor(color);
    this._color = color;
    this.input.value = color;
    this.preview.style.backgroundColor = color;
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this.updateLabel();
  }

  /**
   * Gets and sets the text of the color picker's text label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the color picker. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
  }
}

customElements.define("minimal-colorpicker", ColorPicker);

/**
 * Provides a dropdown list of items when clicked. One of those items can then be selected and be shown in the main component.
 * <div><img src="https://www.minimalcomps2.com/images/dropdown.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const items = ["Item 1", "Item 2", "Item 3"];
 * new Dropdown(panel, 20, 20, items, 0, event => console.log(event.target.text));
 * @extends Component
 */
class Dropdown extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this dropdown to.
   * @param {number} x - The x position of the dropdown.
   * @param {number} y - The y position of the dropdown.
   * @param {array} items - An array of strings to populate the dropdown list with.
   * @param {number} index - The initial selected index of the dropdown.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, items, index, defaultHandler) {
    super(parent, x, y);
    this.items = items;
    this._open = false;
    this.itemElements = [];
    this._text = "";

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.createItems();
    this.index = index;
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalDropdown");
    this.wrapper.tabIndex = 0;

    this.label = new Label(this.wrapper, 3, 3);

    this.button = this.createDiv(this.wrapper, "MinimalDropdownButton");
    this.button.textContent = "+";

    this.dropdown = this.createDiv(this.wrapper, null);
    this.dropdown.style.display = "none";
  }

  createItems() {
    for (let i = 0; i < this.items.length; i++) {
      this.createItem(i);
    }
  }

  createItem(index) {
    const item = this.createDiv(this.dropdown, "MinimalDropdownItem");
    item.setAttribute("data-index", index);
    item.addEventListener("click", this.onItemClick);
    item.tabIndex = 0;

    const label = new Label(item, 3, 0, this.items[index]);
    label.y = (this.height - label.height) / 2;

    const itemObj = {item, label};
    this.updateItem(itemObj, index);
    this.itemElements.push(itemObj);
    return item;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.dropdown;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.toggle = this.toggle.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    this.wrapper.addEventListener("click", this.toggle);
    for (let i = 0; i < this.itemElements.length; i++) {
      this.itemElements[i].addEventListener("click", this.onItemClick);
    }
    this.addEventListener("keydown", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  toggle(event) {
    event && event.stopPropagation();
    this._open = !this._open;
    if (this._open) {
      this.initialZ = this.style.zIndex;
      this.style.zIndex = 1000000;
      this.dropdown.style.display = "block";
      document.addEventListener("click", this.onDocumentClick);
    } else {
      this.style.zIndex = this.initialZ;
      this.dropdown.style.display = "none";
      document.removeEventListener("click", this.onDocumentClick);
    }
  }

  onItemClick(event) {
    event.stopPropagation();
    this.index = event.target.getAttribute("data-index");
    this.toggle();
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        text: this.text,
        index: this.index,
      },
    }));
    this.wrapper.focus();
  }

  onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      // enter
      this.shadowRoot.activeElement.click();
    } else if (event.keyCode === 27 || event.keyCode === 9) {
      // escape || tab
      this.close();
    } else if (event.keyCode === 40) {
      // down
      if (this.shadowRoot.activeElement === this.wrapper ||
          this.shadowRoot.activeElement === this.dropdown.lastChild) {
        this.dropdown.firstChild.focus();
      } else {
        this.shadowRoot.activeElement.nextSibling.focus();
      }
    } else if (event.keyCode === 38) {
      // up
      if (this.shadowRoot.activeElement === this.wrapper ||
          this.shadowRoot.activeElement === this.dropdown.firstChild) {
        this.dropdown.lastChild.focus();
      } else {
        this.shadowRoot.activeElement.previousSibling.focus();
      }
    }
  }

  onDocumentClick(event) {
    if (event.target.className !== "MinimalDropdownItem") {
      this.close();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Programatically closes the dropdown if it is open.
   */
  close() {
    this._open = true;
    this.toggle();
  }

  /**
   * Programatically opens the dropdown if it is closed.
   */
  open() {
    this._open = false;
    this.toggle();
  }

  updateButton() {
    this.button.style.left = this.width - this.height + "px";
    this.button.style.width = this.height + "px";
    this.button.style.height = this.height + "px";
    this.button.style.lineHeight = this.height - 1 + "px";
  }

  updateItem(itemObj, i) {
    const { item, label } = itemObj;

    const h = this.height - 1;
    item.style.top = h + i * h + "px";
    item.style.width = this.width + "px";
    item.style.height = this.height + "px";
    if (item.firstChild) {
      label.y = (this.height - label.height) / 2;
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled === enabled) {
      return;
    }
    super.enabled = enabled;
    if (this.enabled) {
      this.wrapper.addEventListener("click", this.toggle);
      this.wrapper.setAttribute("class", "MinimalDropdown");
      this.button.setAttribute("class", "MinimalDropdownButton");
      this.tabIndex = 0;
    } else {
      this.wrapper.removeEventListener("click", this.toggle);
      this.wrapper.setAttribute("class", "MinimalDropdownDisabled");
      this.button.setAttribute("class", "MinimalDropdownButtonDisabled");
      this.tabIndex = -1;
      this._open = false;
      this.style.zIndex = this.initialZ;
      this.dropdown.style.display = "none";
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.label.y = (this.height - this.label.height) / 2;
    this.updateButton();
    this.itemElements.forEach((item, i) => this.updateItem(item, i));
  }

  /**
   * Reading this property tells you the index of the currently selected item. Setting it caused the new index to be selected and the dropdown to display that item.
   */
  get index() {
    return this._index;
  }

  set index(index) {
    if (index < 0 || index >= this.items.length || index === null || index === undefined) {
      this._index = -1;
      this._text = "";
      this.label.text = "Choose...";
    } else {
      this._index = index;
      this._text = this.items[this._index];
      this.label.text = this._text;
    }
  }

  /**
   * Get the text of the currently selected item in the dropdown (read only).
   */
  get text() {
    return this._text;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateButton();
    this.itemElements.forEach(item => {
      this.updateItem(item);
    });
  }
}

customElements.define("minimal-dropdown", Dropdown);

/**
 * A container that lays out its children in a horizontal row with a set spacing between each child.
 * <div><img src="https://www.minimalcomps2.com/images/hbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 400, 200);
 * const hbox = new HBox(panel, 20, 20, 10);
 * new Button(hbox, 0, 0, "Button 1");
 * new Button(hbox, 0, 0, "Button 2");
 * new Button(hbox, 0, 0, "Button 3");
 * @extends Component
 */
class HBox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this hbox to.
   * @param {number} x - The x position of the hbox.
   * @param {number} y - The y position of the hbox.
   * @param {number} spacing - The space to put in between each element in the box.
   */
  constructor(parent, x, y, spacing) {
    super(parent, x, y);
    this.spacing = spacing;
    this.xpos = 0;
    this.ypos = 0;
    this.createChildren();
    this.setSize(0, 0);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalVbox");
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Overrides the built in appendChild method of an HTMLElement to add some very simple horizontal layout to its children.
   */
  appendChild(child) {
    super.appendChild(child);
    if (this.xpos > 0) {
      this.xpos += this.spacing;
    }
    child.x = this.xpos;
    this.height = Math.max(this.height, child.y + child.height);
    this.xpos += child.width;
    this.width = this.xpos;
  }
}

customElements.define("minimal-hbox", HBox);

/**
 * A horizontal slider for visually selecting a numeric value. The slider can be moved by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/hslider.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new HSlider(panel, 20, 20, "Volume", 50, 0, 100,  event => console.log(event.target.value));
 * @extends Component
 */
class HSlider extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this slider to.
   * @param {number} x - The x position of the slider.
   * @param {number} y - The y position of the slider.
   * @param {string} text - The text label of the slider.
   * @param {number} value - The initial value of the slider.
   * @param {number} min - The minimum value of the slider.
   * @param {number} max - The maximum value of the slider.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min;
    this._max = max;
    this.setDefaults();
    this._reversed = false;
    this._value = value;
    this._showValue = true;
    this._text = text;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSliderSize();
    this.updateHandlePosition();
    this.updateLabelPosition();
    this.updateValueLabelPosition();
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  createChildren() {
    this.wrapper.tabIndex = 0;
    this.setWrapperClass("MinimalSlider");
    this.handle = this.createDiv(this.wrapper, "MinimalSliderHandle");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this.formatValue());
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.hslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.hslider.handleSize;
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.wrapper.addEventListener("wheel", this.onWheel);
    this.wrapper.addEventListener("mousedown", this.onMouseDown);
    this.wrapper.addEventListener("touchstart", this.onMouseDown);
    this.wrapper.addEventListener("keydown", this.onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  onMouseDown(event) {
    let mouseX;
    if (event.changedTouches) {
      event.preventDefault();
      this.wrapper.focus();
      mouseX = event.changedTouches[0].clientX;
    } else {
      mouseX = event.clientX;
    }
    this.offsetX = mouseX - this.getBoundingClientRect().left - this.handle.offsetLeft;
    if (this.offsetX < 0 || this.offsetX > this.handleSize) {
      this.offsetX = this.handleSize / 2;
      const x = mouseX - this.getBoundingClientRect().left - this.handleSize / 2;
      this.calculateValueFromPos(x);
    }
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    let mouseX;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].clientX;
    } else {
      mouseX = event.clientX;
    }
    const x = mouseX - this.getBoundingClientRect().left - this.offsetX;
    this.calculateValueFromPos(x);
  }

  onMouseUp() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("touchmove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onMouseUp);
  }

  onKeyDown(event) {
    let inc = 1 / Math.pow(10, this._decimals);
    if (this.reversed) {
      inc = -inc;
    }
    let value = this.value;

    switch (event.keyCode) {
    case 34: // pagedown
      event.preventDefault();
      value -= inc * 10;
      break;
    case 33: // pageup
      event.preventDefault();
      value += inc * 10;
      break;
    case 36: // home
      event.preventDefault();
      value = this.min;
      break;
    case 35: // end
      event.preventDefault();
      value = this.max;
      break;
    case 37: // right
    case 40: // up
      event.preventDefault();
      value -= inc;
      break;
    case 38: // up
    case 39: // down
      event.preventDefault();
      value += inc;
      break;
    }
    this.updateValue(value);
  }

  onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    if (event.deltaY > 0) {
      this.value += inc;
    } else if (event.deltaY < 0) {
      this.value -= inc;
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  calculateValueFromPos(x) {
    let percent = x / (this.width - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    this.updateValue(value);
  }

  formatValue() {
    let valStr = this.value.toString();
    if (this.decimals <= 0) {
      return valStr;
    }
    if (valStr.indexOf(".") === -1) {
      valStr += ".";
    }
    const dec = valStr.split(".")[1].length;
    for (let i = dec; i < this.decimals; i++) {
      valStr += "0";
    }
    return valStr;
  }

  roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  setDefaults() {
    this._handleSize = Defaults.hslider.handleSize;
    this._decimals = Defaults.hslider.decimals;
    this._textPosition = Defaults.hslider.textPosition;
  }

  updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.left = percent * (this.width - this._handleSize) + "px";
  }

  updateEnabledStyle() {
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this.setWrapperClass("MinimalSlider");
      this.handle.setAttribute("class", "MinimalSliderHandle");
    } else {
      this.setWrapperClass("MinimalSliderDisabled");
      this.handle.setAttribute("class", "MinimalSliderHandleDisabled");
    }
  }

  updateLabelPosition() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else if (this._textPosition === "bottom") {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  updateValueLabelPosition() {
    this.valueLabel.x = this.width + 5;
    this.valueLabel.y = (this.height - this.valueLabel.height) / 2;
  }

  setSliderSize() {
    this.setSize(Defaults.hslider.width, Defaults.hslider.height);
  }

  updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this.updateHandlePosition();
      this.valueLabel.text = this.formatValue();
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the number of decimals of precision to be used for the slider. This will effect what is shown in the value label as well as the value property of the slider. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    this.valueLabel.text = this.formatValue();
    this.updateValueLabelPosition();
    this.updateHandlePosition();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.wrapper.addEventListener("wheel", this.onWheel);
        this.wrapper.addEventListener("mousedown", this.onMouseDown);
        this.wrapper.addEventListener("touchstart", this.onMouseDown);
        this.wrapper.addEventListener("keydown", this.onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.wrapper.removeEventListener("wheel", this.onWheel);
        this.wrapper.removeEventListener("mousedown", this.onMouseDown);
        this.wrapper.removeEventListener("touchstart", this.onMouseDown);
        this.wrapper.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("touchmove", this.onMouseMove);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("touchend", this.onMouseUp);
      }
    }
  }

  /**
   * Gets and sets the width of the draggable slider handle. If you make the slider thicker by changing its height, you may want to adjust the handle size as well. If handleSize is the same as the slider height, then the handle will be a square.
   * <div><img src="https://www.minimalcomps2.com/images/hsliderhandlesize.png"/></div>
   */
  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.width = handleSize + "px";
    this.updateHandlePosition();
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.updateLabelPosition();
    this.updateValueLabelPosition();
  }

  /**
   * Gets and sets the position of the text label displayed on the slider. Valid values are "top" (default), "left" and "bottom". Not applicable to a VSlider.
   */
  get textPosition() {
    return this.textPosition;
  }

  set textPosition(position) {
    this._textPosition = position;
    this.updateLabelPosition();
  }

  /**
   * Gets and sets the maximum value of the slider.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateValue(this.value);
    this.updateHandlePosition();
  }

  /**
   * Gets and sets the minimum value of the slider.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this.updateValue(this.value);
    this.updateHandlePosition();
  }

  /**
   * Gets and sets whether the slider is reversed. A reversed HSlider will show its maximum value on the left and minumum on the right. A reversed VSlider will show its maximum value on the bottom and minimum on the top.
   */
  get reversed() {
    return this._reversed;
  }

  set reversed(reversed) {
    this._reversed = reversed;
  }

  /**
   * Gets and sets whether or not the value label will be displayed.
   */
  get showValue() {
    return this._showValue;
  }

  set showValue(show) {
    this._showValue = show;
    if (this._showValue) {
      this.valueLabel.style.visibility = "visible";
    } else {
      this.valueLabel.style.visibility = "hidden";
    }
  }

  /**
   * Gets and sets the text of the text label of the slider.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateLabelPosition();
  }

  /**
   * Gets and sets the value of the slider.
   */
  get value() {
    return this.roundValue(this._value);
  }

  set value(value) {
    this.updateValue(value);
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateValueLabelPosition();
    this.updateHandlePosition();
  }
}

customElements.define("minimal-hslider", HSlider);

/**
 * A component that displays an image loaded from a URL.
 * <div><img src="https://www.minimalcomps2.com/images/image.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Image(panel, 20, 20, "http://www.example.com/someimage.png");
 * @extends Component
 */
class Image extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this image to.
   * @param {number} x - The x position of the image.
   * @param {number} y - The y position of the image.
   * @param {string} url - The URL of the image to display.
   */
  constructor(parent, x, y, url) {
    super(parent, x, y);
    this._url = url;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(Defaults.image.width, 100);
    this.load();
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.image = this.createElement(this.wrapper, "img", "MinimalImage");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.image;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onLoad = this.onLoad.bind(this);
    this.image.addEventListener("load", this.onLoad);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onLoad() {
    this.origWidth = this.image.width;
    this.origHeight = this.image.height;
    this.updateImageSize();
    this.image.style.visibility = "visible";
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  load() {
    this.image.style.visibility = "hidden";
    this.image.setAttribute("src", this._url);
  }

  updateImageSize() {
    const aspectRatio = this.origWidth / this.origHeight;
    this.image.width = this.width;
    this.image.height = this.height = this.width / aspectRatio;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this._enabled) {
      this.image.setAttribute("class", "MinimalImage");
    } else {
      this.image.setAttribute("class", "MinimalImageDisabled");
    }
  }

  /**
   * Gets and sets the height of the image. This is read only because the height will be set according to the assigned width and the aspect ratio of the loaded image.
   */
  get height() {
    return this.image.height;
  }

  set height(h) {
    super.height = h;
  }

  /**
   * Gets and sets the url of the image to be displayed. Setting this value will trigger the load of the new image.
   */
  get url() {
    return this._url;
  }

  set url(url) {
    this._url = url;
    this.load();
  }

  /**
   * Gets and sets the width of the image. When the image is loaded, it will be set to the assigned width. The height will be set according to the assigned with and the aspect ratio of the loaded image.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    if (this.image.width) {
      this.updateImageSize();
    }
  }
}

customElements.define("minimal-image", Image);

/**
 * A rotary knob for selecting numerical values. The knob value can be changed by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/knob.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Knob(panel, 20, 20, "Knob", 50, 0, 100, event => console.log(event.target.value));
 * @extends Component
 */
class Knob extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this knob to.
   * @param {number} x - The x position of the knob.
   * @param {number} y - The y position of the knob.
   * @param {string} text - The text label of the knob.
   * @param {number} value - The initial value of the knob.
   * @param {number} min - The minimum value of the knob.
   * @param {number} max - The maximum value of the knob.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);

    this._text = text;
    this._min = min;
    this._max = max;
    this._decimals = Defaults.knob.decimals;
    this._value = value;
    this._sensitivity = 100;
    this._labelsSwapped = false;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(Defaults.knob.size, Defaults.knob.size);
    this.updateHandleRotation();

    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalKnob");
    this.handle = this.createDiv(this.wrapper, "MinimalKnobHandle");
    this.wrapper.tabIndex = 0;
    this.zero = this.createDiv(this.handle, "MinimalKnobZero");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this.roundValue(this._value));
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.knob;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.handle.addEventListener("wheel", this.onWheel);
    this.wrapper.addEventListener("mousedown", this.onMouseDown);
    this.wrapper.addEventListener("touchstart", this.onMouseDown);
    this.wrapper.addEventListener("keydown", this.onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onMouseDown(event) {
    event.preventDefault();
    this.wrapper.focus();
    if (event.changedTouches) {
      this.startY = event.changedTouches[0].clientY;
    } else {
      this.startY = event.clientY;
    }
    this.startValue = this.value;
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    const mult = (this.max - this.min) / this.sensitivity;
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.startY;
    this.value = this.startValue + -y * mult;
  }

  onMouseUp() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("touchmove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onMouseUp);
  }

  onKeyDown(event) {
    const inc = 1 / Math.pow(10, this._decimals);
    let value = this.value;

    switch (event.keyCode) {
    case 34: // pagedown
      event.preventDefault();
      value -= inc * 10;
      break;
    case 33: // pageup
      event.preventDefault();
      value += inc * 10;
      break;
    case 36: // home
      event.preventDefault();
      value = this.min;
      break;
    case 35: // end
      event.preventDefault();
      value = this.max;
      break;
    case 37: // right
    case 40: // up
      event.preventDefault();
      value -= inc;
      break;
    case 38: // up
    case 39: // down
      event.preventDefault();
      value += inc;
      break;
    }
    this.updateValue(value);
  }

  onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    if (event.deltaY > 0) {
      this.value += inc;
    } else if (event.deltaY < 0) {
      this.value -= inc;
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  formatValue() {
    let valStr = this.value.toString();
    if (this.decimals <= 0) {
      return valStr;
    }
    if (valStr.indexOf(".") === -1) {
      valStr += ".";
    }
    const dec = valStr.split(".")[1].length;
    for (let i = dec; i < this.decimals; i++) {
      valStr += "0";
    }
    return valStr;
  }

  roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  updateHandleSize() {
    this.handle.style.top = (this.height - this.size) / 2 + "px";
    this.handle.style.left = (this.width - this.size) / 2 + "px";
    this.handle.style.width = this.size + "px";
    this.handle.style.height = this.size + "px";
  }

  updateHandleRotation() {
    const percent = (this.value - this.min) / (this.max - this.min);
    this.handle.style.transform = `rotate(${-240 + percent * 300}deg`;
  }

  updateEnabledStyle() {
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalKnob");
    } else {
      this.wrapper.setAttribute("class", "MinimalKnobDisabled");
    }
  }

  updateLabelPositions() {
    this.label.x = (this.width - this.label.width) / 2;
    this.valueLabel.x = (this.width - this.valueLabel.width) / 2;
    if (this._labelsSwapped) {
      this.label.y = (this.height + this.size) / 2 + 5;
      this.valueLabel.y = (this.height - this.size) / 2 - this.label.height - 5;
    } else {
      this.label.y = (this.height - this.size) / 2 - this.label.height - 5;
      this.valueLabel.y = (this.height + this.size) / 2 + 5;
    }
  }

  updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this.updateHandleRotation();
      this.valueLabel.text = this.formatValue();
      this.updateLabelPositions();
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }
  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the number of decimals of precision to be used for the knob. This will effect what is shown in the value label as well as the value property of the knob. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    this.updateHandleRotation();
    this.valueLabel.text = this.formatValue();
    this.updateLabelPositions();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.handle.addEventListener("wheel", this.onWheel);
        this.wrapper.addEventListener("mousedown", this.onMouseDown);
        this.wrapper.addEventListener("touchstart", this.onMouseDown);
        this.wrapper.addEventListener("keydown", this.onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.handle.removeEventListener("wheel", this.onWheel);
        this.wrapper.removeEventListener("mousedown", this.onMouseDown);
        this.wrapper.removeEventListener("touchstart", this.onMouseDown);
        this.wrapper.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("touchmove", this.onMouseMove);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("touchend", this.onMouseUp);
      }
    }
  }

  /**
   * Gets and sets the height of the knob container. Of course the knob itself will always be round, so it will be sized according to the minimum of width and height if they are different, and centered within the container rectangle.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.size = Math.min(this.width, this.height);
    this.updateHandleSize();
    this.updateLabelPositions();
  }

  /**
   * Gets and sets whether the text label and value label will be swapped. If true, the text label will be on the bottom and the value label will be on the top.
   */
  get labelsSwapped() {
    return this._labelsSwapped;
  }

  set labelsSwapped(swap) {
    this._labelsSwapped = swap;
    this.updateLabelPositions();
  }

  /**
   * Gets and sets the maximum value of the knob.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateValue(this.value);
  }

  /**
   * Gets and sets the minimum value of the knob.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this.updateValue(this.value);
  }

  /**
   * Gets and sets the sensitivity of the knob when clicking and dragging to set a value. Default is 100, which means you'll have to drag the mouse 100 pixels to make the knob value go from its minimum value to its maximum. A higher sensitivity means that the knob will rotate a smaller amount for the same amount of vertical mouse movement.
   */
  get sensitivity() {
    return this._sensitivity;
  }

  set sensitivity(sensitivity) {
    this._sensitivity = sensitivity;
  }

  /**
   * Gets and sets the text of the text label of the knob.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  /**
   * Gets and sets the value of the knob.
   */
  get value() {
    return this.roundValue(this._value);
  }

  set value(value) {
    this.updateValue(value);
  }

  /**
   * Gets and sets the width of the knob container. Of course the knob itself will always be round, so it will be sized according to the minimum of width and height if they are different, and centered within the container rectangle.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.size = Math.min(this.width, this.height);
    this.updateHandleSize();
    this.updateLabelPositions();
  }
}

customElements.define("minimal-knob", Knob);

/**
 * A representation of a colored LED. It can be set to lit or unlit and be set to blink at any rate. The color of the LED can be set to any valid CSS color. It also has a text label.
 * <div><img src="https://www.minimalcomps2.com/images/led.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 240, 240);
 * const canvas = new LED(panel, 20, 20, "LED", "#f00", true);
 * @extends Component
 */
class LED extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this LED to.
   * @param {number} x - The x position of the LED.
   * @param {number} y - The y position of the LED.
   * @param {string} text - The text of the label of the LED.
   * @param {string} color - The color of the LED.
   * @param {boolean} lit - The initial lit state of the LED.
   */
  constructor(parent, x, y, text, color, lit) {
    super(parent, x, y);
    this._text = text || "";
    this._color = color || "#f00";
    this._lit = lit || false;
    this._textPosition = "top";

    const size = 16;

    this.createChildren();
    this.setWrapperClass("MinimalLED");
    this.createStyle();

    this.setSize(size, size);
    this.updateLED();
    this.updateLabel();
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.label = new Label(this.wrapper, 0, -15, this._text);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.led;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  //////////////////////////////////
  // General
  //////////////////////////////////

  updateLED() {
    if (this.lit) {
      this.wrapper.style.background = `radial-gradient(circle at 60% 37%, #fff, ${this.color} 50%, #444 100%)`;
    } else {
      this.wrapper.style.background = "radial-gradient(circle at 60% 37%, #fff, #999 50%)";
    }
  }

  updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = (this.width - this.label.width) / 2;
      this.label.y = -this.label.height - 5;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else {
      this.label.x = (this.width - this.label.width) / 2;
      this.label.y = this.height + 5;
    }
  }

  /**
   * Starts the LED blinking at a specified or default rate.
   * @param {number} bps - Blinks per second. Defaults to 2 blinks per second if no parameter is given.
   */
  blink(bps) {
    if (!this.enabled) {
      return;
    }
    bps = bps || 2;
    clearInterval(this.interval);
    this.blinking = true;
    this.interval = setInterval(() => {
      if (this.blinking) {
        this.lit = !this.lit;
      }
    }, 1 / bps * 1000);
  }

  /**
   * Stops the LED blinking and turns it off.
   */
  stop() {
    this.blinking = false;
    clearInterval(this.interval);
    this.lit = false;
  }

  /**
   * Sets the size of the LED. Because an LED will always be round, if you try to set width and height to different values, they will be set to the smallest value of the two.
   * @param {number} width - The width of the LED.
   * @param {number} height - The height of the LED.
   */
  setSize(w, h) {
    const size = Math.min(w, h);
    super.width = size;
    super.height = size;
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the color of the LED.
   */
  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this.updateLED();
  }

  /**
   * Gets and sets the enabled state of the LED. A disabled LED will not be lit and will not blink.
   */
  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    this.label.enabled = enabled;
    if (this._enabled) {
      this.wrapper.setAttribute("class", "MinimalLED");
    } else {
      this.stop();
      this.wrapper.setAttribute("class", "MinimalLEDDisabled");
    }
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    super.width = height;
  }

  /**
   * Gets and sets whether or not this LED is lit.
   */
  get lit() {
    return this._lit;
  }

  set lit(lit) {
    this._lit = lit;
    this.updateLED();
  }

  /**
   * Gets and sets the text of the LED's text label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the LED. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
  }

  /**
   * Sets and gets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    super.height = width;
  }
}

customElements.define("minimal-led", LED);

/**
 * An input field with buttons for selecting a numeric value. The value can be changed by entering a value directly, clicking on the plus or minus buttons, or scrolling with a mouse wheel or trackpad.
 * <div><img src="https://www.minimalcomps2.com/images/numericstepper.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new NumericStepper(panel, 20, 20, 50, 0, 100, event => console.log(event.target.value));
 * @extends Component
 */
class NumericStepper extends Component {
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);
    if (typeof(arguments[3]) !== "string") {
      // don't break the original signature, which was:
      // new NumericStepper(parent, x, y, value, min, max, defaultHandler);
      text = "";
      value = arguments[3];
      min = arguments[4];
      max = arguments[5];
      defaultHandler = arguments[6];
    }

    this._text = text;
    this._textPosition = "top";

    this._min = min;
    this._max = max;
    this._decimals = 0;
    this._value = this.roundValue(value);

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalNumericStepper");

    this.input = this.createInput(this.wrapper, "MinimalNumericStepperInput");
    this.input.value = this._value;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.minus = new Button(this.wrapper, 60, 0, "-");
    this.minus.setSize(20, 20);
    this.plus = new Button(this.wrapper, 80, 0, "+");
    this.plus.setSize(20, 20);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.numericstepper;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInputChange = this.onInputChange.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onPlusDown = this.onPlusDown.bind(this);
    this.onMinusDown = this.onMinusDown.bind(this);
    this.onPlusUp = this.onPlusUp.bind(this);
    this.onMinusUp = this.onMinusUp.bind(this);
    this.onPlusKeyDown = this.onPlusKeyDown.bind(this);
    this.onMinusKeyDown = this.onMinusKeyDown.bind(this);
    this.onPlusKeyUp = this.onPlusKeyUp.bind(this);
    this.onMinusKeyUp = this.onMinusKeyUp.bind(this);
    this.onWheel = this.onWheel.bind(this);

    this.wrapper.addEventListener("wheel", this.onWheel);

    this.input.addEventListener("input", this.onInput);
    this.input.addEventListener("change", this.onInputChange);

    this.plus.addEventListener("mousedown", this.onPlusDown);
    document.addEventListener("mouseup", this.onPlusUp);
    this.plus.addEventListener("keydown", this.onPlusKeyDown);
    this.plus.addEventListener("keyup", this.onPlusKeyUp);

    this.minus.addEventListener("mousedown", this.onMinusDown);
    document.addEventListener("mouseup", this.onMinusUp);
    this.minus.addEventListener("keydown", this.onMinusKeyDown);
    this.minus.addEventListener("keyup", this.onMinusKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    let value = this.input.value;
    value = value.replace(/[^-.0-9]/g, "");
    this.input.value = value;
  }

  onInputChange() {
    let value = parseFloat(this.input.value);
    value = this.roundValue(value);
    this.input.value = value;
    if (this.value !== value) {
      this._value = value;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  decrement() {
    if (this.isDecrementing) {
      const value = this.roundValue(this.value - 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this.decrement(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  increment() {
    if (this.isIncrementing) {
      const value = this.roundValue(this.value + 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this.increment(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  onMinusDown() {
    clearTimeout(this.timeout);
    this.isDecrementing = true;
    this.delay = 500;
    this.decrement();
  }

  onMinusUp() {
    this.isDecrementing = false;
  }

  onMinusKeyDown(event) {
    if (event.keyCode === 13) {
      this.onMinusDown();
    }
  }

  onMinusKeyUp(event) {
    if (event.keyCode === 13) {
      this.onMinusUp();
    }
  }

  onPlusDown() {
    clearTimeout(this.timeout);
    this.isIncrementing = true;
    this.delay = 500;
    this.increment();
  }

  onPlusUp() {
    this.isIncrementing = false;
  }

  onPlusKeyDown(event) {
    if (event.keyCode === 13) {
      this.onPlusDown();
    }
  }

  onPlusKeyUp(event) {
    if (event.keyCode === 13) {
      this.onPlusUp();
    }
  }

  onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    if (event.deltaY > 0) {
      this.value += inc;
      this.dispatchEvent(new Event("change"));
    } else if (event.deltaY < 0) {
      this.value -= inc;
      this.dispatchEvent(new Event("change"));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  roundValue(value) {
    if (this.max !== null) {
      value = Math.min(value, this.max);
    }
    if (this.min !== null) {
      value = Math.max(value, this.min);
    }
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.input.disabled = !this.enabled;
      this.plus.enabled = this.enabled;
      this.minus.enabled = this.enabled;
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.addEventListener("wheel", this.onWheel);
      } else {
        this.wrapper.removeEventListener("wheel", this.onWheel);
      }
    }
  }

  /**
   * Sets and gets the number of decimals of precision to be used for the stepper. This will effect what is shown in the value label as well as the value property of the stepper. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10. Clicking the plus and minus button will increment or decrement the stepper's value by the smallest displayed value.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    const value = this.roundValue(this.value);
    if (this._value !== value) {
      this._value = value;
      this.input.value = value;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this.updateLabel();
  }

  /**
   * Gets and sets the maximum value of the stepper.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    if (this.max < this.value) {
      this.value = this.max;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  /**
   * Gets and sets the minimum value of the stepper.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    if (this.min > this.value) {
      this.value = this.min;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  /**
   * Gets and sets the text of the color picker's text label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the color picker. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
  }
  /**
   * Gets and sets the value of the stepper.
   */
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = this.roundValue(value);
    this.input.value = this._value;
  }

  get width() {
    return super.width;
  }

  set width(w) {
    super.width = w;
    this.input.style.width = w - 40 + "px";
    this.minus.x = w - 40;
    this.plus.x = w - 20;
  }
}

customElements.define("minimal-numericstepper", NumericStepper);

/**
 * Creates a panel to be used as a parent for other components.
 * <div><img src="https://www.minimalcomps2.com/images/panel.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Button(panel, 20, 20, "Click");
 * @extends Component
 */
class Panel extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this panel to.
   * @param {number} x - The x position of the panel.
   * @param {number} y - The y position of the panel.
   * @param {number} w - The width of the panel.
   * @param {number} h - The height of the panel.
   */
  constructor(parent, x, y, w, h) {
    super(parent, x, y);
    w = w || window.innerWidth;
    h = h || window.innerHeight;

    this.createChildren();
    this.createStyle();
    this.setSize(w, h);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalPanel");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.panel;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  get x() {
    return super.x;
  }

  set x(x) {
    this._x = x;
    // we'll use margins to position the panel so it plays well with other stuff on the page.
    this.style.marginLeft = x + "px";
  }

  get y() {
    return super.y;
  }

  set y(y) {
    this._y = y;
    this.style.marginTop = y + "px";
  }
}

customElements.define("minimal-panel", Panel);

/**
 * Creates a progress bar that tracks a value compared to a potential total.
 * <div><img src="https://www.minimalcomps2.com/images/progressbar.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const pb = new ProgressBar(panel, 20, 20, 0, 100);
 * let progress = 0;
 * setInterval(() => {
 *   pb.progress = progress;
 *   progress += 0.1;
 * }, 100);
 * @extends Component
 */
class ProgressBar extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this progress bar to.
   * @param {number} x - The x position of the progress bar.
   * @param {number} y - The y position of the progress bar.
   * @param {number} progress - The current progress value of the progress bar.
   * @param {number} max - The maximum potential value of the progress bar.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, progress, max) {
    super(parent, x, y);
    this._progress = progress;
    this._max = max;

    this.createChildren();
    this.createStyle();

    this.setSize(100, 15);
    this.updateBar();
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalProgressBar");
    this.fill = this.createDiv(this.wrapper, "MinimalProgressBarFill");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.progressbar;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  updateBar() {
    let percent = this.progress / this.max;
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.fill.style.width = percent * this.width + "px";
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enbled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this._enabled) {
      this.setWrapperClass("MinimalProgressBar");
      this.fill.setAttribute("class", "MinimalProgressBarFill");
    } else {
      this.setWrapperClass("MinimalProgressBarDisabled");
      this.fill.setAttribute("class", "MinimalProgressBarFillDisabled");
    }
  }

  /**
   * Gets and sets the maximum value of the progress bar.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    const progress = Math.min(this.progress, this.max);
    this.progress = Math.max(progress, 0);
    this.updateBar();
  }

  /**
   * Gets and sets the progress value of the progress bar.
   */
  get progress() {
    return this._progress;
  }

  set progress(progress) {
    progress = Math.min(progress, this.max);
    progress = Math.max(progress, 0);
    this._progress = progress;
    this.updateBar();
  }
}

customElements.define("minimal-progressbar", ProgressBar);

const RadioButtonGroup = {};

RadioButtonGroup.groups = {};

RadioButtonGroup.getValueForGroup = (group) => {
  const rbGroup = RadioButtonGroup.groups[group];
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
};

RadioButtonGroup.clearGroup = (group) => {
  const rbGroup = RadioButtonGroup.groups[group];
  if (!rbGroup) {
    return;
  }
  for (let i = 0; i < rbGroup.length; i++) {
    const rb = rbGroup[i];
    rb.checked = false;
  }
};

RadioButtonGroup.addToGroup = (group, rb) => {
  if (!RadioButtonGroup.groups[group]) {
    RadioButtonGroup.groups[group] = [];
  }
  RadioButtonGroup.groups[group].push(rb);
};

RadioButtonGroup.getNextInGroup = (group, rb) => {
  const g = RadioButtonGroup.groups[group];
  const index = g.indexOf(rb);
  let result;
  if (index >= g.length - 1) {
    result = g[0];
  } else {
    result = g[index + 1];
  }
  if (result.enabled) {
    return result;
  }
  return RadioButtonGroup.getNextInGroup(group, result);
};

RadioButtonGroup.getPrevInGroup = (group, rb) => {
  const g = RadioButtonGroup.groups[group];
  const index = g.indexOf(rb);
  let result;
  if (index <= 0) {
    result = g[g.length - 1];
  } else {
    result = g[index - 1];
  }
  if (result.enabled) {
    return result;
  }
  return RadioButtonGroup.getPrevInGroup(group, result);
};

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
class RadioButton extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this radio button to.
   * @param {number} x - The x position of the radio button.
   * @param {number} y - The y position of the radio button.
   * @param {string} group - The group this radio button belongs to.
   * @param {string} text - The text label of the radio button.
   * @param {boolean} checked - The initial checked state of the radio button.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
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
    this.addToParent();
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

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

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
  }

  get width() {
    return super.width;
  }

  set width(w) {
    this.wrapper.style.width = this.label.width + 15 + "px";
  }
}

customElements.define("minimal-radiobutton", RadioButton);

/**
 * Creates a multi-line scrollable input field for entering text.
 * <div><img src="https://www.minimalcomps2.com/images/textarea.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new TextArea(panel, 20, 20, "Hello", event => console.log(event.target.text));
 * @extends Component
 */
class TextArea extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this text area to.
   * @param {number} x - The x position of the text area.
   * @param {number} y - The y position of the text area.
   * @param {string} text - The initial text to display in the text area.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 100);
    this.addEventListener("input", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.textArea = this.createElement(this.shadowRoot, "textArea", "MinimalTextArea");
    this.textArea.value = this._text;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textarea;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInput = this.onInput.bind(this);
    this.textArea.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    this._text = this.textArea.value;
    this.dispatchEvent(new CustomEvent("input", { detail: this.text }));
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.textArea.disabled = !this.enabled;
      if (this.enabled) {
        this.textArea.addEventListener("input", this.onInput);
      } else {
        this.textArea.removeEventListener("input", this.onInput);
      }
    }
  }

  /**
   * Gets and sets the text in the text area.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.textArea.value = text;
  }
}

customElements.define("minimal-textarea", TextArea);

/**
 * Creates a static box for multiline text. Accepts HTML text.
 * <div><img src="https://www.minimalcomps2.com/images/textbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new TextBox(panel, 20, 20, "Hello");
 * @extends Component
 */
class TextBox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this text box to.
   * @param {number} x - The x position of the text box.
   * @param {number} y - The y position of the text box.
   * @param {string} text - The initial text to display in the text box.
   */
  constructor(parent, x, y, text) {
    super(parent, x, y);
    this._align = "left";
    this._color = "#333";
    this._bold = false;
    this._italic = false;
    this._html = false;
    this._text = text;

    this.createChildren();
    this.createStyle();

    this.setSize(100, 100);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalTextBox");
    this.wrapper.textContent = this._text;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textbox;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the horizontal alignment of the text in the text box (left, right, center).
   */
  get align() {
    return this._align;
  }

  set align(align) {
    this._align = align;
    this.wrapper.style.textAlign = align;
  }

  /**
   * Gets and sets whether or not the text will be bold.
   */
  get bold() {
    return this._bold;
  }

  set bold(bold) {
    this._bold = bold;
    if (this._bold) {
      this.wrapper.style.fontWeight = "bold";
    } else {
      this.wrapper.style.fontWeight = "normal";
    }
  }

  /**
   * Gets and sets the color of the text.
   */
  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this.wrapper.style.color = color;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this.enabled) {
      this.setWrapperClass("MinimalTextBox");
    } else {
      this.setWrapperClass("MinimalTextBoxDisabled");
    }
  }

  /**
   * Gets and sets the size of the text.
   */
  get fontSize() {
    return this._fontSize;
  }

  set fontSize(fontSize) {
    this._fontSize = fontSize;
    this.wrapper.style.fontSize = fontSize + "px";
  }

  /**
   * Gets and sets a string of HTML text to display. This will accept pretty much any kind of valid HTML markup you can put into a string.
   */
  get html() {
    return this._html;
  }

  set html(html) {
    this._html = html;
    if (this._html) {
      this.wrapper.innerHTML = this._text;
    } else {
      this.wrapper.textContent = this._text;
    }
  }

  /**
   * Gets and sets whether or not the text will be italicized.
   */
  get italic() {
    return this._italics;
  }

  set italic(italic) {
    this._italic = italic;
    if (this._italic) {
      this.wrapper.style.fontStyle = "italic";
    } else {
      this.wrapper.style.fontStyle = "normal";
    }
  }

  /**
   * Gets and sets the plain text to be displayed. Compare with the htmlText property.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    if (this._html) {
      this.wrapper.innerHTML = this._text;
    } else {
      this.wrapper.textContent = this._text;
    }
  }
}

customElements.define("minimal-textbox", TextBox);

/**
 * Creates a single line input field for entering text.
 * <div><img src="https://www.minimalcomps2.com/images/textinput.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new TextInput(panel, 20, 20, "Hello", event => console.log(event.target.text));
 * @extends Component
 */
class TextInput extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this text input to.
   * @param {number} x - The x position of the text input.
   * @param {number} y - The y position of the text input.
   * @param {string} text - The initial text to display in the text input.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._maxLength = 0;
    this._text = text;

    this.createStyle();
    this.createChildren();
    this.createListeners();

    this.setSize(100, 20);
    this.addEventListener("input", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.input = this.createInput(this.shadowRoot, "MinimalTextInput");
    this.input.value = this._text;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textinput;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onInput = this.onInput.bind(this);
    this.input.addEventListener("input", this.onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onInput() {
    this._text = this.input.value;
    this.dispatchEvent(new CustomEvent("input", { detail: this.text }));
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.input.disabled = !this.enabled;
      if (this.enabled) {
        this.input.addEventListener("input", this.onInput);
      } else {
        this.input.removeEventListener("input", this.onInput);
      }
    }
  }

  /**
   * Gets and sets the maximum length of the string that can be typed into the input.
   */
  get maxLength() {
    return this._maxLength;
  }

  set maxLength(maxLength) {
    this._maxLength = maxLength;
    this.input.maxLength = maxLength;
  }

  /**
   * Gets and sets the text in the input.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.input.value = text;
  }
}

customElements.define("minimal-textinput", TextInput);

/**
 * Creates a clickable toggle that can be switched off and on.
 * <div><img src="https://www.minimalcomps2.com/images/toggle.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Toggle(panel, 20, 20, "Toggle", false, event => console.log(event.target.toggled));
 * @extends Component
 */
class Toggle extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this toggle to.
   * @param {number} x - The x position of the toggle.
   * @param {number} y - The y position of the toggle.
   * @param {boolean} toggled - The initial toggled state of the toggle.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, toggled, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._textPosition = "top";

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(50, 20);
    this.toggled = toggled;
    this.updateLabel();
    this.addEventListener("click", defaultHandler);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalToggle");
    this.wrapper.tabIndex = 0;
    this.label = new Label(this.wrapper, 0, -15, this._text);
    this.handle = this.createDiv(this.wrapper, "MinimalToggleHandle");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.toggle;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this.onClick);
    this.wrapper.addEventListener("keypress", this.onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new CustomEvent("click", { detail: this.toggled }));
    }
  }

  onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Toggles the state of the toggle between toggled and not toggled.
   */
  toggle() {
    this.toggled = !this.toggled;
    this.updateToggle();
  }

  updateLabel() {
    if (this._textPosition === "left") {
      this.label.x = -this.label.width - 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else if (this._textPosition === "top") {
      this.label.x = 0;
      this.label.y = -this.label.height - 5;
    } else if (this._textPosition === "right") {
      this.label.x = this.width + 5;
      this.label.y = (this.height - this.label.height) / 2;
    } else {
      this.label.x = 0;
      this.label.y = this.height + 5;
    }
  }

  updateToggle() {
    if (this.toggled) {
      this.handle.style.left = "50%";
    } else {
      this.handle.style.left = 0;
    }
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Sets and gets the toggled state of the toggle.
   */
  get toggled() {
    return this._toggled;
  }

  set toggled(toggled) {
    this._toggled = toggled;
    this.updateToggle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.label.enable = enabled;
      if (this.enabled) {
        this.setWrapperClass("MinimalToggle");
        this.wrapper.tabIndex = 0;
      } else {
        this.setWrapperClass("MinimalToggleDisabled");
        this.wrapper.tabIndex = -1;
      }
    }
  }

  /**
   * Gets and sets the text of the toggle's text label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this.updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the toggle. Valid values are "top" (default), "left" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this.updateLabel();
  }
}

customElements.define("minimal-toggle", Toggle);

/**
 * A container that lays out its children in a vertical column with a set spacing between each child.
 * <div><img src="https://www.minimalcomps2.com/images/vbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const vbox = new VBox(panel, 20, 20, 10);
 * new Button(vbox, 0, 0, "Button 1");
 * new Button(vbox, 0, 0, "Button 2");
 * new Button(vbox, 0, 0, "Button 3");
 * @extends Component
 */
class VBox extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this vbox to.
   * @param {number} x - The x position of the vbox.
   * @param {number} y - The y position of the vbox.
   * @param {number} spacing - The space to put in between each element in the box.
   */
  constructor(parent, x, y, spacing) {
    super(parent, x, y);
    this.spacing = spacing;
    this.xpos = 0;
    this.ypos = 0;
    this.createChildren();
    this.setSize(0, 0);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalVbox");
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Overrides the built in appendChild method of an HTMLElement to add some very simple vertical layout to its children.
   */
  appendChild(child) {
    super.appendChild(child);
    if (this.ypos > 0) {
      this.ypos += this.spacing;
    }
    child.y = this.ypos;
    this.width = Math.max(this.width, child.x + child.width);
    this.ypos += child.height;
    this.height = this.ypos;
  }
}

customElements.define("minimal-vbox", VBox);

/**
 * A vertical slider for visually selecting a numeric value. The slider can be moved by clicking and dragging, scrolling with a mouse wheel or trackpad or the use of the keyboard (arrow keys, page up/down, home/end).
 * <div><img src="https://www.minimalcomps2.com/images/vslider.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new VSlider(panel, 20, 20, "Volume", 50, 0, 100,  event => console.log(event.target.value));
 * @extends HSlider
 */
class VSlider extends HSlider {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this slider to.
   * @param {number} x - The x position of the slider.
   * @param {number} y - The y position of the slider.
   * @param {string} text - The text label of the slider.
   * @param {number} value - The initial value of the slider.
   * @param {number} min - The minimum value of the slider.
   * @param {number} max - The maximum value of the slider.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y, text, value, min, max, defaultHandler);
  }
  //////////////////////////////////
  // Core
  //////////////////////////////////

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.vslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.vslider.handleSize;
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  onMouseDown(event) {
    let mouseY;
    if (event.changedTouches) {
      event.preventDefault();
      this.wrapper.focus();
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    this.offsetY = mouseY - this.getBoundingClientRect().top - this.handle.offsetTop;
    if (this.offsetY < 0 || this.offsetY > this.handleSize) {
      this.offsetY = this.handleSize / 2;
      const y = mouseY - this.getBoundingClientRect().top - this.handleSize / 2;
      this.calculateValueFromPos(y);
    }
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.getBoundingClientRect().top - this.offsetY;
    this.calculateValueFromPos(y);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  calculateValueFromPos(y) {
    let percent = 1 - y / (this.height - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    this.updateValue(value);
  }

  setDefaults() {
    this._decimals = Defaults.vslider.decimals;
    this._handleSize = Defaults.vslider.handleSize;
  }

  updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.top = this.height - this.handleSize - percent * (this.height - this._handleSize) + "px";
  }

  updateLabelPosition() {
    this.label.x = -(this.label.width - this.width) / 2;
    this.label.y = -this.label.height - 5;
  }

  updateValueLabelPosition() {
    this.valueLabel.x = -(this.valueLabel.width - this.width) / 2;
    this.valueLabel.y = this.height + 5;
  }

  setSliderSize() {
    this.setSize(Defaults.vslider.width, Defaults.vslider.height);
  }

  updateValue(value) {
    super.updateValue(value);
    this.updateValueLabelPosition();
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Gets and sets the height of the draggable slider handle. If you make the slider thicker by changing its width, you may want to adjust the handle size as well. If handleSize is the same as the slider width, then the handle will be a square.
   * <div><img src="https://www.minimalcomps2.com/images/vsliderhandlesize.png"/></div>
   */
  get handleSize() {
    return this._handleSize;
  }

  set handleSize(handleSize) {
    this._handleSize = handleSize;
    this.handle.style.height = handleSize + "px";
    this.updateHandlePosition();
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.updateLabelPosition();
    this.updateHandlePosition();
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.updateLabelPosition();
    this.updateHandlePosition();
  }
}

customElements.define("minimal-vslider", VSlider);

const version = "1.2.1";

export { Button, Canvas, Checkbox, ColorPicker, Component, Defaults, Dropdown, HBox, HSlider, Image, Knob, LED, Label, NumericStepper, Panel, ProgressBar, RadioButton, RadioButtonGroup, Style, TextArea, TextBox, TextInput, Toggle, VBox, VSlider, version };
