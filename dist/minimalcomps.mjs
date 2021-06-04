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
    width: 100%;
  }
  .MinimalCheckboxDisabled {
    ${Style.baseStyle}
    cursor: default;
    height: 100%;
    width: 100%;
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
    width: 100%;
  }
  .MinimalRadioButtonDisabled {
    ${Style.baseStyle}
    cursor: default;
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

////////////////////
// Window
////////////////////
Style.window = `
  .MinimalWindow {
    ${Style.baseStyle}
    height: 100%;
    width: 100%;
    box-shadow: 2px 2px 2px #999;
    overflow: hidden;
  }
  .MinimalWindowDisabled {
    ${Style.baseStyle}
    ${Style.disabledStyle}
    height: 100%;
    width: 100%;
    box-shadow: 2px 2px 2px #999;
    overflow: hidden;
  }
  .MinimalWindowTitleBar {
    ${Style.baseStyle}
    height: 30px;
    background-color: #ddd;
    border: 1px solid #999;
    cursor: pointer;
  } 
  .MinimalWindowContent {
    ${Style.baseStyle}
    border: 1px solid #999;
    background-color: #eee;
    top: 30px;
    overflow: hidden;
  }
  .MinimalWindowButton {
    ${Style.baseStyle}
    border: 1px solid #999;
    background-color: #ccc;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    right: 7px;
    top: 7px;
  }
`;

class Component extends HTMLElement {
  constructor(parent, x, y) {
    super();
    this.parent = parent;
    this._enabled = true;

    this.attachShadow({mode: "open"});
    this._createWrapper();
    this._createWrapperStyle();

    this.move(x || 0, y || 0);
  }

  _addToParent() {
    this.parent && this.parent.appendChild(this);
  }

  //////////////////////////////////
  // Creators
  //////////////////////////////////

  _createDiv(parent, className) {
    return this._createElement(parent, "div", className);
  }

  /* eslint-disable class-methods-use-this */
  _createElement(parent, type, className) {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    parent && parent.appendChild(el);
    return el;
  }
  /* eslint-enable */

  _createInput(parent, className) {
    const input = this._createElement(parent, "input", className);
    input.type = "text";
    return input;
  }

  _createWrapper() {
    this.wrapper = this._createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
    this.shadowRoot.appendChild(document.createElement("slot"));
  }

  _createWrapperStyle() {
    const style = document.createElement("style");
    style.textContent = Style.component;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _setWrapperClass(className) {
    this.wrapper.setAttribute("class", className);
  }

  /**
   * Moves the component to a specified position.
   * @param {number} x - The new x position of the component.
   * @param {number} y - The new y position of the component.
   * @returns This instance, suitable for chaining.
   */
  move(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * Rotates the component.
   * @param {number} rad - The number of radians to rotate the component by.
   * @returns This instance, suitable for chaining.
   */
  rotate(rad) {
    this.style.transform = `rotate(${rad}rad)`;
    return this;
  }

  /**
   * Rotates the component.
   * @param {number} deg - The number of degrees to rotate the component by.
   * @returns This instance, suitable for chaining.
   */
  rotateDeg(deg) {
    this.style.transform = `rotate(${deg}deg)`;
    return this;
  }

  /**
   * Sizes the component.
   * @param {number} w - The new width of the component.
   * @param {number} h - The new height of the component.
   * @returns This instance, suitable for chaining.
   */
  setSize(w, h) {
    this.width = w;
    this.height = h;
    return this;
  }

  /**
   * Sets the enabled state of this component.
   * @param {boolean} enabled - Whether or not the component will be enabled.
   * @returns This instance, suitable for chaining.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * Sets the height of this component.
   * @param {number} height - The height of this component.
   * @returns This instance, suitable for chaining.
   */
  setHeight(h) {
    this.height = h;
    return this;
  }

  /**
   * Sets the width of this component.
   * @param {number} width - The width of this component.
   * @returns This instance, suitable for chaining.
   */
  setWidth(w) {
    this.width = w;
    return this;
  }

  /**
   * Sets the x position of this component.
   * @param {number} x - The x position of this component.
   * @returns This instance, suitable for chaining.
   */
  setX(x) {
    this.x = x;
    return this;
  }

  /**
   * Sets the y position of this component.
   * @param {number} y - The y position of this component.
   * @returns this instance, suitable for chaining.
   */
  setY(y) {
    this.y = y;
    return this;
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
   * @param {number} x - The x position of the label. Default 0.
   * @param {number} y - The y position of the label. Default 0.
   * @param {string} text - The initial text to display in the label. Default empty string.
   */
  constructor(parent, x, y, text) {
    super(parent, x, y);
    this._align = "left";
    this._autosize = true;
    this._color = "#333";
    this._bold = false;
    this._italic = false;

    this._createChildren();
    this._createStyle();
    this.fontSize = Defaults.label.fontSize;
    // width will be 0 until it is on the live DOM
    // so we put it on document.body, get width
    // then remove it and add it to parent.
    document.body.appendChild(this);
    this._width = this.wrapper.offsetWidth;
    this.text = text || "";
    this.height = Defaults.label.fontSize + 2;
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalLabel");
    this.wrapper.textContent = this._text;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.label;
    this.shadowRoot.append(style);
  }

  /**
   * Sets the alignment of the label's text - "left" (default), "right" or "center".
   * @param {string} align - The alignment of the text.
   * @returns This instance, suitable for chaining.
   */
  setAlign(align) {
    this.align = align;
    return this;
  }

  /**
   * Sets whether the label will be automatically sized to fit its text.
   * @param {boolean} autosize - Whether the label will be auto-sized.
   * @returns This instance, suitable for chaining.
   */
  setAutosize(autosize) {
    this.autosize = autosize;
    return this;
  }

  /**
   * Sets wheter or not the text will be bold.
   * @param {boolean} bold - Whether or not the text will be bold.
   * @returns This instance, suitable for chaining.
   */
  setBold(bold) {
    this.bold = bold;
    return this;
  }

  /**
   * Sets the color of the text.
   * @param {string} color - The color of the text.
   * @returns This instance, suitable for chaining.
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Sets the font size of the text.
   * @param {number} fontSize - The font size of the text.
   * @returns This instance, suitable for chaining.
   */
  setFontSize(fontSize) {
    this.fontSize = fontSize;
    return this;
  }

  /**
   * Sets whether or not the text will be italicized.
   * @param {boolean} italics - Whether or not the text will be italicized.
   * @returns This instance, suitable for chaining.
   */
  setItalic(italic) {
    this.italic = italic;
    return this;
  }

  /**
   * Sets the label's text.
   * @param {string} text - The text of the label.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
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
      this._setWrapperClass("MinimalLabel");
    } else {
      this._setWrapperClass("MinimalLabel MinimalLabelDisabled");
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
   * Gets and sets the height of this component.
   */
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
      super.width = this.wrapper.offsetWidth;
    }
  }

  /**
   * Gets and sets the width of this component.
   */
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
   * @param {number} x - The x position of the button. Default 0.
   * @param {number} y - The y position of the button. Default 0.
   * @param {string} text - The text label of the button. Default empty string.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text || "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.button.width, Defaults.button.height);
    this.addEventListener("click", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.wrapper.tabIndex = 0;
    this._setWrapperClass("MinimalButton");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.label.autosize = false;
    this.label.align = "center";
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.button;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onClick = this._onClick.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this.wrapper.addEventListener("click", this._onClick);
    this.wrapper.addEventListener("keyup", this._onKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.dispatchEvent(new Event("click"));
    }
  }

  _onKeyUp(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Adds a handler function for the "click" event on this button.
   * @param {function} handler - A function that will handle the "click" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("click", handler);
    return this;
  }

  /**
   * Sets the text of this button.
   * @param {string} text - The text to set on this button.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
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
   * @param {number} x - The x position of the canvas. Default 0.
   * @param {number} y - The y position of the canvas. Default 0.
   * @param {number} w - The width of the canvas. Default 200.
   * @param {number} h - The height of the canvas. Default 100.
   */
  constructor(parent, x, y, w, h) {
    super(parent, x, y);

    this._createChildren();
    this._createStyle();

    this.setSize(w || 200, h || 100);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.canvas = this._createElement(this.wrapper, "canvas", "MinimalCanvas");
    this._context = this.canvas.getContext("2d");
  }

  _createStyle() {
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

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 10);
    this.checked = checked;
    this.addEventListener("click", defaultHandler);
    this._addToParent();
    this._updateWidth();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalCheckbox");
    this.wrapper.tabIndex = 0;
    this.check = this._createDiv(this.wrapper, "MinimalCheckboxCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.checkbox;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this._onClick);
    this.wrapper.addEventListener("keypress", this._onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new CustomEvent("click", { detail: this.checked }));
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateCheckStyle() {
    let className = this.checked
      ? "MinimalCheckboxCheckChecked "
      : "MinimalCheckboxCheck ";

    if (!this.enabled) {
      className += "MinimalCheckboxCheckDisabled";
    }
    this.check.setAttribute("class", className);
    if (this.enabled) {
      this._setWrapperClass("MinimalCheckbox");
    } else {
      this._setWrapperClass("MinimalCheckboxDisabled");
    }
  }

  _updateWidth() {
    this.style.width = this.label.x + this.label.width + "px";
  }

  /**
   * Adds a handler function for the "click" event on this checkbox.
   * @param {function} handler - A function that will handle the "click" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("click", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("click", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the checked state of this checkbox.
   * @params {boolean} checked - Whether or not this checkbox will be checked.
   * @returns This instance, suitable for chaining.
   */
  setChecked(checked) {
    this.checked = checked;
    return this;
  }

  /**
   * Sets the text of this checkbox.
   * @param {string} text - The text to set on this checkbox.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Toggles the state of the checkbox between checked and not checked.
   * @returns This instance, suitable for chaining.
   */
  toggle() {
    this.checked = !this.checked;
    return this;
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
    this._updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this._updateCheckStyle();
      this.label.enabled = enabled;
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
      } else {
        this.wrapper.tabIndex = -1;
      }
    }
  }

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
   * Sets and gets the text shown in the button's label.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
    this._updateWidth();
  }

  /**
   * Gets the width of this checkbox. Setting the width does nothing because it is automatically determined by the width of the label.
   */
  get width() {
    return this.label.x + this.label.width;
  }

  set width(w) {
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
   * @param {number} x - The x position of the color picker. Default 0.
   * @param {number} y - The y position of the color picker. Default 0.
   * @param {string} text - The text shown in the text label of the color picker. Default empty string.
   * @param {string} color - The initial color value of the color picker. Default #f00.
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
    color = color || "#f00";
    this._text = text || "";
    this._textPosition = "top";
    this._color = this._correctColor(color);
    this._color = this._cropColor(color);

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalColorPicker");

    this.input = this._createInput(this.wrapper, "MinimalColorPickerInput");
    this.input.maxLength = 7;
    this.input.value = this._color;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.preview = this._createDiv(this.wrapper, "MinimalColorPickerPreview");
    this.preview.style.backgroundColor = this.color;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.colorpicker;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInput = this._onInput.bind(this);
    this.input.addEventListener("input", this._onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput() {
    const color = this._correctColor(this.input.value);
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

  _correctColor(color) {
    color = "#" + color.replace(/[^0-9a-fA-F]/g, "");
    return color.toUpperCase();
  }

  _cropColor(color) {
    if (color.length > 7) {
      color = color.substring(0, 7);
    }
    return color;
  }

  _updateLabel() {
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
   * Adds a handler function for the "change" event on this color picker.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the color of this component.
   * @param {string} color - The color to set.
   * @returns This instance, suitable for chaining.
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Sets the color value using three values for red, green and blue.
   * @param {number} r - The value of the red channel (0 - 255).
   * @param {number} g - The value of the red channel (0 - 255).
   * @param {number} b - The value of the red channel (0 - 255).
   * @returns This instance, suitable for chaining.
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
    return this;
  }

  /**
   * Sets the color value using a single 24-bit number.
   * @param {number} num - The number to parse into a color value. This would usually be in decimal (e.g. 16777215) or hexadecimal (e.g. 0xffffff).
   * @returns This instance, suitable for chaining.
   */
  setNumber(num) {
    const red = num >> 16;
    const green = num >> 8 & 255;
    const blue = num & 255;
    this.setRGB(red, green, blue);
    return this;
  }

  /**
   * Sets the color value to a random RGB value.
   * @returns This instance, suitable for chaining.
   */
  setRandom() {
    this.setNumber(Math.random() * 0xffffff);
    return this;
  }

  /**
   * Sets the text of this color picker.
   * @param {string} text - The text to set on this color picker.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
  }

  /**
   * Gets the current value of this component as a single 24-bit number from 0 to 16777215 (0x000000 to 0xffffff).
   * @returns {number} The numeric representation of this color picker's color.
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
        this.input.addEventListener("input", this._onInput);
      } else {
        this.preview.setAttribute("class", "MinimalColorPickerPreviewDisabled");
        this.input.removeEventListener("input", this._onInput);
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
    color = this._correctColor(color);
    color = this._cropColor(color);
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
    this._updateLabel();
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
    this._updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the color picker. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
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
   * @param {number} x - The x position of the dropdown. Default 0.
   * @param {number} y - The y position of the dropdown. Default 0.
   * @param {array} items - An array of strings to populate the dropdown list with. Default empty array.
   * @param {number} index - The initial selected index of the dropdown. default -1.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, items, index, defaultHandler) {
    super(parent, x, y);
    this.items = items || [];
    this._open = false;
    this.itemElements = [];
    this._text = "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 20);
    this._createItems();
    this.index = index;
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalDropdown");
    this.wrapper.tabIndex = 0;

    this.label = new Label(this.wrapper, 3, 3);

    this.button = this._createDiv(this.wrapper, "MinimalDropdownButton");
    this.button.textContent = "+";

    this.dropdown = this._createDiv(this.wrapper, null);
    this.dropdown.style.display = "none";
  }

  _createItems() {
    for (let i = 0; i < this.items.length; i++) {
      this._createItem(i);
    }
  }

  _createItem(index) {
    const item = this._createDiv(this.dropdown, "MinimalDropdownItem");
    item.setAttribute("data-index", index);
    item.addEventListener("click", this._onItemClick);
    item.tabIndex = 0;

    const label = new Label(item, 3, 0, this.items[index]);
    label.y = (this.height - label.height) / 2;

    const itemObj = {item, label};
    this._updateItem(itemObj, index);
    this.itemElements.push(itemObj);
    return item;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.dropdown;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._toggle = this._toggle.bind(this);
    this._onItemClick = this._onItemClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);

    this.wrapper.addEventListener("click", this._toggle);
    for (let i = 0; i < this.itemElements.length; i++) {
      this.itemElements[i].addEventListener("click", this._onItemClick);
    }
    this.addEventListener("keydown", this._onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _toggle(event) {
    event && event.stopPropagation();
    this._open = !this._open;
    if (this._open) {
      this.initialZ = this.style.zIndex;
      this.style.zIndex = 1000000;
      this.dropdown.style.display = "block";
      document.addEventListener("click", this._onDocumentClick);
    } else {
      this.style.zIndex = this.initialZ;
      this.dropdown.style.display = "none";
      document.removeEventListener("click", this._onDocumentClick);
    }
  }

  _onItemClick(event) {
    event.stopPropagation();
    this.index = event.target.getAttribute("data-index");
    this._toggle();
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        text: this.text,
        index: this.index,
      },
    }));
    this.wrapper.focus();
  }

  _onKeyPress(event) {
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

  _onDocumentClick(event) {
    if (event.target.className !== "MinimalDropdownItem") {
      this.close();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateButton() {
    this.button.style.left = this.width - this.height + "px";
    this.button.style.width = this.height + "px";
    this.button.style.height = this.height + "px";
    this.button.style.lineHeight = this.height - 1 + "px";
  }

  _updateItem(itemObj, i) {
    const { item, label } = itemObj;

    const h = this.height - 1;
    item.style.top = h + i * h + "px";
    item.style.width = this.width + "px";
    item.style.height = this.height + "px";
    if (item.firstChild) {
      label.y = (this.height - label.height) / 2;
    }
  }

  /**
   * Adds a handler function for the "change" event on this dropdown.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Programatically closes the dropdown if it is open.
   * @returns This instance, suitable for chaining.
   */
  close() {
    this._open = true;
    this._toggle();
    return this;
  }

  /**
   * Programatically opens the dropdown if it is closed.
   * @returns This instance, suitable for chaining.
   */
  open() {
    this._open = false;
    this._toggle();
    return this;
  }

  /**
   * Sets the selected index of this dropdown.
   * @param {number} index - The index to set.
   * @returns This instance, suitable for chaining.
   */
  setIndex(index) {
    this.index = index;
    return this;
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
      this.wrapper.addEventListener("click", this._toggle);
      this.wrapper.setAttribute("class", "MinimalDropdown");
      this.button.setAttribute("class", "MinimalDropdownButton");
      this.tabIndex = 0;
    } else {
      this.wrapper.removeEventListener("click", this._toggle);
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
    this._updateButton();
    this.itemElements.forEach((item, i) => this._updateItem(item, i));
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
    this._updateButton();
    this.itemElements.forEach(item => {
      this._updateItem(item);
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
   * @param {number} x - The x position of the hbox. Default 0.
   * @param {number} y - The y position of the hbox. Default 0.
   * @param {number} spacing - The space to put in between each element in the box. Default 0.
   */
  constructor(parent, x, y, spacing) {
    super(parent, x, y);
    this._spacing = spacing || 0;
    this._xpos = 0;
    this._createChildren();
    this.setSize(0, 0);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalVbox");
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Overrides the built in appendChild method of an HTMLElement to add some very simple horizontal layout to its children.
   */
  appendChild(child) {
    super.appendChild(child);
    if (this._xpos > 0) {
      this._xpos += this.spacing;
    }
    child.x = this._xpos;
    this.height = Math.max(this.height, child.y + child.height);
    this._xpos += child.width;
    this.width = this._xpos;
  }

  /**
   * Sets the spacing between items in this box. Setting this value will not change the layout of existing elements, but will affect the spacing of future elements added.
   * @param {number} spacing - How much spacing to put between each element.
   * @returns This instance, suitable for chaining.
   */
  setSpacing(spacing) {
    this.spacing = spacing;
    return this;
  }

  /**
   * Gets and sets the spacing between items in this box. Setting this value will not change the layout of existing elements, but will affect the spacing of future elements added.
   */
  get spacing() {
    return this._spacing;
  }

  set spacing(spacing) {
    this._spacing = spacing;
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
   * @param {number} x - The x position of the slider. Default 0.
   * @param {number} y - The y position of the slider. Default 0.
   * @param {string} text - The text label of the slider. Default empty string.
   * @param {number} value - The initial value of the slider. Default 0.
   * @param {number} min - The minimum value of the slider. Default 0.
   * @param {number} max - The maximum value of the slider. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);
    this._min = min || 0;
    this._max = max || 100;
    this._setDefaults();
    this._reversed = false;
    this._value = value || 0;
    this._showValue = true;
    this._text = text || "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this._setSliderSize();
    this._updateHandlePosition();
    this._updateLabelPosition();
    this._updateValueLabelPosition();
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////
  _createChildren() {
    this.wrapper.tabIndex = 0;
    this._setWrapperClass("MinimalSlider");
    this.handle = this._createDiv(this.wrapper, "MinimalSliderHandle");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this._formatValue());
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.hslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.hslider.handleSize;
  }

  _createListeners() {
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this.wrapper.addEventListener("wheel", this._onWheel);
    this.wrapper.addEventListener("mousedown", this._onMouseDown);
    this.wrapper.addEventListener("touchstart", this._onMouseDown);
    this.wrapper.addEventListener("keydown", this._onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  _onMouseDown(event) {
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
      this._calculateValueFromPos(x);
    }
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
    let mouseX;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].clientX;
    } else {
      mouseX = event.clientX;
    }
    const x = mouseX - this.getBoundingClientRect().left - this.offsetX;
    this._calculateValueFromPos(x);
  }

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("touchmove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchend", this._onMouseUp);
  }

  _onKeyDown(event) {
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
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    let value = this.value;
    if (event.deltaY > 0) {
      value += inc;
    } else if (event.deltaY < 0) {
      value -= inc;
    }
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _calculateValueFromPos(x) {
    let percent = x / (this.width - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _formatValue() {
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

  _roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  _setDefaults() {
    this._handleSize = Defaults.hslider.handleSize;
    this._decimals = Defaults.hslider.decimals;
    this._textPosition = Defaults.hslider.textPosition;
  }

  _updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.left = percent * (this.width - this._handleSize) + "px";
  }

  _updateEnabledStyle() {
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this._setWrapperClass("MinimalSlider");
      this.handle.setAttribute("class", "MinimalSliderHandle");
    } else {
      this._setWrapperClass("MinimalSliderDisabled");
      this.handle.setAttribute("class", "MinimalSliderHandleDisabled");
    }
  }

  _updateLabelPosition() {
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

  _updateValueLabelPosition() {
    this.valueLabel.x = this.width + 5;
    this.valueLabel.y = (this.height - this.valueLabel.height) / 2;
  }

  _setSliderSize() {
    this.setSize(Defaults.hslider.width, Defaults.hslider.height);
  }

  _updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this._updateHandlePosition();
      this.valueLabel.text = this._formatValue();
    }
  }

  /**
   * Adds a handler function for the "change" event on this slider.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the number of decimals of precision to be used for the slider. This will effect what is shown in the value label as well as the value property of the slider. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   * @param {number} decimals - The decimals of precision to use.
   * @returns This instance, suitable for chaining.
   */
  setDecimals(decimals) {
    this.decimals = decimals;
    return this;
  }

  /**
   * Gets and sets the width of the draggable slider handle. If you make the slider thicker by changing its height, you may want to adjust the handle size as well. If handleSize is the same as the slider height, then the handle will be a square.
   * @param {number} handleSize - The size of the handle.
   * @returns This instance, suitable for chaining.
   */
  setHandleSize(handleSize) {
    this.handleSize = handleSize;
    return this;
  }

  /**
   * Sets the maximum value of this slider.
   * @param {number} max - The maximum value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setMax(max) {
    this.max = max;
    return this;
  }

  /**
   * Sets the minimum value of this slider.
   * @param {number} min - The minimum value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setMin(min) {
    this.min = min;
    return this;
  }

  /**
   * Sets the value of this slider.
   * @param {number} value - The value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * Sets the value, minimum and maximum of this slider.
   * @param {number} value - The value of this slider.
   * @param {number} min - The minimum value of this slider.
   * @param {number} max - The maximum value of this slider.
   * @returns This instance, suitable for chaining.
   */
  setValueMinMax(value, min, max) {
    this.min = min;
    this.max = max;
    this.value = value;
    return this;
  }

  /**
   * Sets whether the slider is reversed. A reversed HSlider will show its maximum value on the left and minumum on the right. A reversed VSlider will show its maximum value on the bottom and minimum on the top.
   * @param {boolean} reversed - Whether or not this slider will be reversed.
   * @returns This instance, suitable for chaining.
   */
  setReversed(reversed) {
    this.reversed = reversed;
    return this;
  }

  /**
   * Sets whether or not the value of this slider will be shown.
   * @param {boolean} showValue - Whether or not the value will be shown.
   * @returns This instance, suitable for chaining.
   */
  setShowValue(showValue) {
    this.showValue = showValue;
    return this;
  }

  /**
   * Sets the text of this slider.
   * @param {string} text - The text to set on this slider.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
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
    this.valueLabel.text = this._formatValue();
    this._updateValueLabelPosition();
    this._updateHandlePosition();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this._updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.wrapper.addEventListener("wheel", this._onWheel);
        this.wrapper.addEventListener("mousedown", this._onMouseDown);
        this.wrapper.addEventListener("touchstart", this._onMouseDown);
        this.wrapper.addEventListener("keydown", this._onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.wrapper.removeEventListener("wheel", this._onWheel);
        this.wrapper.removeEventListener("mousedown", this._onMouseDown);
        this.wrapper.removeEventListener("touchstart", this._onMouseDown);
        this.wrapper.removeEventListener("keydown", this._onKeyDown);
        document.removeEventListener("mousemove", this._onMouseMove);
        document.removeEventListener("touchmove", this._onMouseMove);
        document.removeEventListener("mouseup", this._onMouseUp);
        document.removeEventListener("touchend", this._onMouseUp);
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
    this._updateHandlePosition();
  }

  /**
   * Gets and sets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this._updateLabelPosition();
    this._updateValueLabelPosition();
  }

  /**
   * Gets and sets the position of the text label displayed on the slider. Valid values are "top" (default), "left" and "bottom". Not applicable to a VSlider.
   */
  get textPosition() {
    return this.textPosition;
  }

  set textPosition(position) {
    this._textPosition = position;
    this._updateLabelPosition();
  }

  /**
   * Gets and sets the maximum value of the slider.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this._updateValue(this.value);
    this._updateHandlePosition();
  }

  /**
   * Gets and sets the minimum value of the slider.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this._updateValue(this.value);
    this._updateHandlePosition();
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
    this._updateLabelPosition();
  }

  /**
   * Gets and sets the value of the slider.
   */
  get value() {
    return this._roundValue(this._value);
  }

  set value(value) {
    this._updateValue(value);
  }

  /**
   * Gets and sets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this._updateValueLabelPosition();
    this._updateHandlePosition();
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
   * @param {number} x - The x position of the image. Default 0.
   * @param {number} y - The y position of the image. Default 0.
   * @param {string} url - The URL of the image to display. Default empty string.
   */
  constructor(parent, x, y, url) {
    super(parent, x, y);
    this._url = url || "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.image.width, 100);
    this._load();
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.image = this._createElement(this.wrapper, "img", "MinimalImage");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.image;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onLoad = this._onLoad.bind(this);
    this.image.addEventListener("load", this._onLoad);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onLoad() {
    this.origWidth = this.image.width;
    this.origHeight = this.image.height;
    this._updateImageSize();
    this.image.style.visibility = "visible";
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _load() {
    this.image.style.visibility = "hidden";
    this.image.setAttribute("src", this._url);
  }

  _updateImageSize() {
    const aspectRatio = this.origWidth / this.origHeight;
    this.image.width = this.width;
    this.image.height = this.height = this.width / aspectRatio;
  }

  /**
   * Sets the url of the image to be displayed. Setting this value will trigger the load of the new image.
   * @param {string} url - The url of the image to load.
   * @returns This instance, suitable for chaining.
   */
  setURL(url) {
    this.url = url;
    return this;
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
    this._load();
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
      this._updateImageSize();
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
   * @param {number} x - The x position of the knob. Default 0.
   * @param {number} y - The y position of the knob. Default 0.
   * @param {string} text - The text label of the knob. Default empty string.
   * @param {number} value - The initial value of the knob. Default 0.
   * @param {number} min - The minimum value of the knob. Default 0.
   * @param {number} max - The maximum value of the knob. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y);

    this._text = text || "";
    this._min = min || 0;
    this._max = max || 100;
    this._decimals = Defaults.knob.decimals;
    this._value = value || 0;
    this._sensitivity = 100;
    this._labelsSwapped = false;

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.knob.size, Defaults.knob.size);
    this._updateHandleRotation();

    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalKnob");
    this.handle = this._createDiv(this.wrapper, "MinimalKnobHandle");
    this.wrapper.tabIndex = 0;
    this.zero = this._createDiv(this.handle, "MinimalKnobZero");
    this.label = new Label(this.wrapper, 0, 0, this._text);
    this.valueLabel = new Label(this.wrapper, 0, 0, this._roundValue(this._value));
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.knob;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this.handle.addEventListener("wheel", this._onWheel);
    this.wrapper.addEventListener("mousedown", this._onMouseDown);
    this.wrapper.addEventListener("touchstart", this._onMouseDown);
    this.wrapper.addEventListener("keydown", this._onKeyDown);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onMouseDown(event) {
    event.preventDefault();
    this.wrapper.focus();
    if (event.changedTouches) {
      this.startY = event.changedTouches[0].clientY;
    } else {
      this.startY = event.clientY;
    }
    this.startValue = this.value;
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
    const mult = (this.max - this.min) / this.sensitivity;
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.startY;
    const value = this.startValue + -y * mult;
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("touchmove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchend", this._onMouseUp);
  }

  _onKeyDown(event) {
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
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    let value = this.value;
    if (event.deltaY > 0) {
      value += inc;
    } else if (event.deltaY < 0) {
      value -= inc;
    }
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _formatValue() {
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

  _roundValue(value) {
    value = Math.min(value, this.max);
    value = Math.max(value, this.min);
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  _updateHandleSize() {
    this.handle.style.top = (this.height - this.size) / 2 + "px";
    this.handle.style.left = (this.width - this.size) / 2 + "px";
    this.handle.style.width = this.size + "px";
    this.handle.style.height = this.size + "px";
  }

  _updateHandleRotation() {
    const percent = (this.value - this.min) / (this.max - this.min);
    this.handle.style.transform = `rotate(${-240 + percent * 300}deg`;
  }

  _updateEnabledStyle() {
    this.label.enabled = this.enabled;
    this.valueLabel.enabled = this.enabled;
    if (this.enabled) {
      this.wrapper.setAttribute("class", "MinimalKnob");
    } else {
      this.wrapper.setAttribute("class", "MinimalKnobDisabled");
    }
  }

  _updateLabelPositions() {
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

  _updateValue(value) {
    if (this._value !== value) {
      this._value = value;
      this._updateHandleRotation();
      this.valueLabel.text = this._formatValue();
      this._updateLabelPositions();
    }
  }

  /**
   * Adds a handler function for the "change" event on this knob.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the number of decimals of precision to be used for the knob. This will effect what is shown in the value label as well as the value property of the knob. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   * @param {number} decimals - The decimals of precision to use.
   * @returns This instance, suitable for chaining.
   */
  setDecimals(decimals) {
    this.decimals = decimals;
    return this;
  }

  /**
   * Sets the maximum value of this knob.
   * @param {number} max - The maximum value of this knob.
   * @returns This instance, suitable for chaining.
   */
  setMax(max) {
    this.max = max;
    return this;
  }

  /**
   * Sets the minimum value of this knob.
   * @param {number} min - The minimum value of this knob.
   * @returns This instance, suitable for chaining.
   */
  setMin(min) {
    this.min = min;
    return this;
  }

  /**
   * Sets the value of this knob.
   * @param {number} value - The value of this knob.
   * @returns This instance, suitable for chaining.
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * Sets the value, minimum and maximum of this knob.
   * @param {number} value - The value of this knob.
   * @param {number} min - The minimum value of this knob.
   * @param {number} max - The maximum value of this knob.
   * @returns This instance, suitable for chaining.
   */
  setValueMinMax(value, min, max) {
    this.min = min;
    this.max = max;
    this.value = value;
    return this;
  }

  /**
   * Sets the text of this knob.
   * @param {string} text - The text to set on this knob.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets whether the text and value labels will be swapped (value on top, text on bottom).
   * @param {boolean} swapped - Whether the labels will be swapped.
   * @return This instance, suitable for chaining.
   */
  setLabelSwapped(swapped) {
    this.labelsSwapped = swapped;
    return this;
  }

  /**
   * Sets the mouse drag sensitivity.
   * @param {number} sensitivity - How many pixels of mouse motion are required to move the value between min and max.
   * @return This instance, suitable for chaining.
   */
  setSensitivity(sensitivity) {
    this.sensitivity = sensitivity;
    return this;
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
    this._updateHandleRotation();
    this.valueLabel.text = this._formatValue();
    this._updateLabelPositions();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this._updateEnabledStyle();
      if (this.enabled) {
        this.wrapper.tabIndex = 0;
        this.handle.addEventListener("wheel", this._onWheel);
        this.wrapper.addEventListener("mousedown", this._onMouseDown);
        this.wrapper.addEventListener("touchstart", this._onMouseDown);
        this.wrapper.addEventListener("keydown", this._onKeyDown);
      } else {
        this.wrapper.tabIndex = -1;
        this.handle.removeEventListener("wheel", this._onWheel);
        this.wrapper.removeEventListener("mousedown", this._onMouseDown);
        this.wrapper.removeEventListener("touchstart", this._onMouseDown);
        this.wrapper.removeEventListener("keydown", this._onKeyDown);
        document.removeEventListener("mousemove", this._onMouseMove);
        document.removeEventListener("touchmove", this._onMouseMove);
        document.removeEventListener("mouseup", this._onMouseUp);
        document.removeEventListener("touchend", this._onMouseUp);
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
    this._updateHandleSize();
    this._updateLabelPositions();
  }

  /**
   * Gets and sets whether the text label and value label will be swapped. If true, the text label will be on the bottom and the value label will be on the top.
   */
  get labelsSwapped() {
    return this._labelsSwapped;
  }

  set labelsSwapped(swap) {
    this._labelsSwapped = swap;
    this._updateLabelPositions();
  }

  /**
   * Gets and sets the maximum value of the knob.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this._updateValue(this.value);
  }

  /**
   * Gets and sets the minimum value of the knob.
   */
  get min() {
    return this._min;
  }

  set min(min) {
    this._min = min;
    this._updateValue(this.value);
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
    return this._roundValue(this._value);
  }

  set value(value) {
    this._updateValue(value);
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
    this._updateHandleSize();
    this._updateLabelPositions();
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
   * @param {number} x - The x position of the LED. Default 0.
   * @param {number} y - The y position of the LED. Default 0.
   * @param {string} text - The text of the label of the LED. Default empty string.
   * @param {string} color - The color of the LED. Default #f00.
   * @param {boolean} lit - The initial lit state of the LED. Default false.
   */
  constructor(parent, x, y, text, color, lit) {
    super(parent, x, y);
    this._text = text || "";
    this._color = color || "#f00";
    this._lit = lit || false;
    this._textPosition = "top";

    const size = 16;

    this._createChildren();
    this._setWrapperClass("MinimalLED");
    this._createStyle();

    this.setSize(size, size);
    this._updateLED();
    this._updateLabel();
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.label = new Label(this.wrapper, 0, -15, this._text);
  }

  _createStyle() {
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

  _updateLED() {
    if (this.lit) {
      this.wrapper.style.background = `radial-gradient(circle at 60% 37%, #fff, ${this.color} 50%, #444 100%)`;
    } else {
      this.wrapper.style.background = "radial-gradient(circle at 60% 37%, #fff, #999 50%)";
    }
  }

  _updateLabel() {
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
   * @returns This instance, suitable for chaining.
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
    return this;
  }

  /**
   * Stops the LED blinking and turns it off.
   * @returns This instance, suitable for chaining.
   */
  stop() {
    this.blinking = false;
    clearInterval(this.interval);
    this.lit = false;
    return this;
  }

  /**
   * Sets whether this LED is lit up.
   * @param {boolean} lit - Whether or not the LED is lit.
   * @returns This instance, suitable for chaining.
   */
  setLit(lit) {
    this.lit = lit;
    return this;
  }

  /**
   * Sets the color of this LED.
   * @param {string} color - The color to set.
   * @returns This instance, suitable for chaining.
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Sets the size of the LED. Because an LED will always be round, if you try to set width and height to different values, they will be set to the smallest value of the two.
   * @param {number} width - The width of the LED.
   * @param {number} height - The height of the LED.
   * @returns This instance, suitable for chaining.
   */
  setSize(w, h) {
    const size = Math.min(w, h);
    super.width = size;
    super.height = size;
    return this;
  }

  /**
   * Sets the text of this LED.
   * @param {string} text - The text to set on this LED.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left", "right" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
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
    this._updateLED();
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
    this._updateLED();
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
    this._updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the LED. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
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
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this numeric stepper to.
   * @param {number} x - The x position of the numeric stepper. Default 0.
   * @param {number} y - The y position of the numeric stepper. Default 0.
   * @param {string} text - The text label of the numeric stepper. Default empty string.
   * @param {number} value - The initial value of the numeric stepper. Default 0.
   * @param {number} min - The minimum value of the numeric stepper. Default 0.
   * @param {number} max - The maximum value of the numeric stepper. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
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

    this._text = text || "";
    this._textPosition = "top";

    this._min = min || 0;
    this._max = max || 0;
    this._decimals = 0;
    value = value || 0;
    this._value = this._roundValue(value);

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(100, 20);
    this.addEventListener("change", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalNumericStepper");

    this.input = this._createInput(this.wrapper, "MinimalNumericStepperInput");
    this.input.value = this._value;

    this.label = new Label(this.wrapper, 0, -15, this._text);

    this.minus = new Button(this.wrapper, 60, 0, "-");
    this.minus.setSize(20, 20);
    this.plus = new Button(this.wrapper, 80, 0, "+");
    this.plus.setSize(20, 20);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.numericstepper;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInputChange = this._onInputChange.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onPlusDown = this._onPlusDown.bind(this);
    this._onMinusDown = this._onMinusDown.bind(this);
    this._onPlusUp = this._onPlusUp.bind(this);
    this._onMinusUp = this._onMinusUp.bind(this);
    this._onPlusKeyDown = this._onPlusKeyDown.bind(this);
    this._onMinusKeyDown = this._onMinusKeyDown.bind(this);
    this._onPlusKeyUp = this._onPlusKeyUp.bind(this);
    this._onMinusKeyUp = this._onMinusKeyUp.bind(this);
    this._onWheel = this._onWheel.bind(this);

    this.wrapper.addEventListener("wheel", this._onWheel);

    this.input.addEventListener("input", this._onInput);
    this.input.addEventListener("change", this._onInputChange);

    this.plus.addEventListener("mousedown", this._onPlusDown);
    document.addEventListener("mouseup", this._onPlusUp);
    this.plus.addEventListener("keydown", this._onPlusKeyDown);
    this.plus.addEventListener("keyup", this._onPlusKeyUp);

    this.minus.addEventListener("mousedown", this._onMinusDown);
    document.addEventListener("mouseup", this._onMinusUp);
    this.minus.addEventListener("keydown", this._onMinusKeyDown);
    this.minus.addEventListener("keyup", this._onMinusKeyUp);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput() {
    let value = this.input.value;
    value = value.replace(/[^-.0-9]/g, "");
    this.input.value = value;
  }

  _onInputChange() {
    let value = parseFloat(this.input.value);
    value = this._roundValue(value);
    this.input.value = value;
    if (this.value !== value) {
      this._value = value;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _decrement() {
    if (this.isDecrementing) {
      const value = this._roundValue(this.value - 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this._decrement(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  _increment() {
    if (this.isIncrementing) {
      const value = this._roundValue(this.value + 1 / Math.pow(10, this._decimals));
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
      }
      this.timeout = setTimeout(() => this._increment(), this.delay);
      if (this.delay === 500) {
        this.delay = 50;
      }
    }
  }

  _onMinusDown() {
    clearTimeout(this.timeout);
    this.isDecrementing = true;
    this.delay = 500;
    this._decrement();
  }

  _onMinusUp() {
    this.isDecrementing = false;
  }

  _onMinusKeyDown(event) {
    if (event.keyCode === 13) {
      this._onMinusDown();
    }
  }

  _onMinusKeyUp(event) {
    if (event.keyCode === 13) {
      this._onMinusUp();
    }
  }

  _onPlusDown() {
    clearTimeout(this.timeout);
    this.isIncrementing = true;
    this.delay = 500;
    this._increment();
  }

  _onPlusUp() {
    this.isIncrementing = false;
  }

  _onPlusKeyDown(event) {
    if (event.keyCode === 13) {
      this._onPlusDown();
    }
  }

  _onPlusKeyUp(event) {
    if (event.keyCode === 13) {
      this._onPlusUp();
    }
  }

  _onWheel(event) {
    event.preventDefault();
    const inc = 1 / Math.pow(10, this._decimals);
    if (event.deltaY > 0) {
      this.value += inc;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    } else if (event.deltaY < 0) {
      this.value -= inc;
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _roundValue(value) {
    if (this.max !== null) {
      value = Math.min(value, this.max);
    }
    if (this.min !== null) {
      value = Math.max(value, this.min);
    }
    const mult = Math.pow(10, this.decimals);
    return Math.round(value * mult) / mult;
  }

  _updateLabel() {
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
   * Adds a handler function for the "change" event on this numeric stepper.
   * @param {function} handler - A function that will handle the "change" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("change", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("change", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the number of decimals of precision to be used for the numeric stepper. This will effect what is shown in the value label as well as the value property of the numeric stepper. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10.
   * @param {number} decimals - The decimals of precision to use.
   * @returns This instance, suitable for chaining.
   */
  setDecimals(decimals) {
    this.decimals = decimals;
    return this;
  }

  /**
   * Sets the maximum value of this numeric stepper.
   * @param {number} max - The maximum value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setMax(max) {
    this.max = max;
    return this;
  }

  /**
   * Sets the minimum value of this numeric stepper.
   * @param {number} min - The minimum value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setMin(min) {
    this.min = min;
    return this;
  }

  /**
   * Sets the value of this numeric stepper.
   * @param {number} value - The value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * Sets the value, minimum and maximum of this numeric stepper.
   * @param {number} value - The value of this numeric stepper.
   * @param {number} min - The minimum value of this numeric stepper.
   * @param {number} max - The maximum value of this numeric stepper.
   * @returns This instance, suitable for chaining.
   */
  setValueMinMax(value, min, max) {
    this.min = min;
    this.max = max;
    this.value = value;
    return this;
  }

  /**
   * Sets the text of this numeric stepper.
   * @param {string} text - The text to set on this numeric stepper.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left", "right" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
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
        this.wrapper.addEventListener("wheel", this._onWheel);
      } else {
        this.wrapper.removeEventListener("wheel", this._onWheel);
      }
    }
  }

  /**
   * Sets and gets the number of decimals of precision to be used for the stepper. This will effect what is shown in the value label as well as the value property of the stepper. A decimals value of 0 will display integers only. Negative decimals will round to the nearest power of 10. Clicking the plus and minus button will _increment or _decrement the stepper's value by the smallest displayed value.
   */
  get decimals() {
    return this._decimals;
  }

  set decimals(decimals) {
    this._decimals = decimals;
    const value = this._roundValue(this.value);
    if (this._value !== value) {
      this._value = value;
      this.input.value = value;
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
    this._updateLabel();
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
    this._updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the color picker. Valid values are "top" (default), "left", "right" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
  }
  /**
   * Gets and sets the value of the stepper.
   */
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = this._roundValue(value);
    this.input.value = this._value;
  }

  /**
   * Sets and gets the width of this component.
   */
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
   * @param {number} x - The x position of the panel. Default 0.
   * @param {number} y - The y position of the panel. Default 0.
   * @param {number} w - The width of the panel. Default window.innerWidth.
   * @param {number} h - The height of the panel. Default window.innerHeight.
   */
  constructor(parent, x, y, w, h) {
    super(parent, x, y);
    w = w || window.innerWidth;
    h = h || window.innerHeight;

    this._createChildren();
    this._createStyle();
    this.setSize(w, h);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalPanel");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.panel;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Gets and sets the x position of this component.
   */
  get x() {
    return super.x;
  }

  set x(x) {
    this._x = x;
    // we'll use margins to position the panel so it plays well with other stuff on the page.
    this.style.marginLeft = x + "px";
  }

  /**
   * Gets and sets the y position of this component.
   */
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
   * @param {number} x - The x position of the progress bar. Default 0.
   * @param {number} y - The y position of the progress bar. Default 0.
   * @param {number} progress - The current progress value of the progress bar. Default 0.
   * @param {number} max - The maximum potential value of the progress bar. Default 100.
   */
  constructor(parent, x, y, progress, max) {
    super(parent, x, y);
    this._progress = progress || 0;
    this._max = max || 100;

    this._createChildren();
    this._createStyle();

    this.setSize(100, 15);
    this._updateBar();
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalProgressBar");
    this.fill = this._createDiv(this.wrapper, "MinimalProgressBarFill");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.progressbar;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateBar() {
    let percent = this.progress / this.max;
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.fill.style.width = percent * this.width + "px";
  }

  /**
   * Sets the maximum value of this progress bar.
   * @param {number} max - The maximum value.
   * @returns This instance, suitable for chaining.
   */
  setMax(max) {
    this.max = max;
    return this;
  }

  /**
   * Sets the current progress value of this progress bar.
   * @param {number} max - The current progress value.
   * @returns This instance, suitable for chaining.
   */
  setProgress(progress) {
    this.progress = progress;
    return this;
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
      this._setWrapperClass("MinimalProgressBar");
      this.fill.setAttribute("class", "MinimalProgressBarFill");
    } else {
      this._setWrapperClass("MinimalProgressBarDisabled");
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
    this._updateBar();
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
    this._updateBar();
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

RadioButtonGroup._clearGroup = (group) => {
  const rbGroup = RadioButtonGroup.groups[group];
  if (!rbGroup) {
    return;
  }
  for (let i = 0; i < rbGroup.length; i++) {
    const rb = rbGroup[i];
    rb.checked = false;
  }
};

RadioButtonGroup._addToGroup = (group, rb) => {
  if (!RadioButtonGroup.groups[group]) {
    RadioButtonGroup.groups[group] = [];
  }
  RadioButtonGroup.groups[group].push(rb);
};

RadioButtonGroup._getNextInGroup = (group, rb) => {
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

RadioButtonGroup._getPrevInGroup = (group, rb) => {
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
   * @param {number} x - The x position of the radio button. Default 0.
   * @param {number} y - The y position of the radio button. Default 0.
   * @param {string} group - The group this radio button belongs to. Default "group".
   * @param {string} text - The text label of the radio button. Default empty string.
   * @param {boolean} checked - The initial checked state of the radio button. Default false.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, group, text, checked, defaultHandler) {
    super(parent, x, y);
    RadioButtonGroup._addToGroup(group, this);
    this.group = group || "group";
    this._text = text || "";

    this._createStyle();
    this._createChildren();
    this._createListeners();

    this.setSize(100, 10);
    this.checked = checked || false;
    this.addEventListener("click", defaultHandler);
    this._addToParent();
    this._updateWidth();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalRadioButton");
    this.wrapper.tabIndex = 0;
    this.check = this._createDiv(this.wrapper, "MinimalRadioButtonCheck");
    this.label = new Label(this.wrapper, 15, 0, this.text);
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.radiobutton;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this._onClick);
    this.wrapper.addEventListener("keydown", this._onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.checked = true;
      this.dispatchEvent(new CustomEvent("click", { detail: this.text }));
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      // enter
      this.wrapper.click();
    } else if (event.keyCode === 40) {
      // down
      event.preventDefault();
      RadioButtonGroup._getNextInGroup(this.group, this).focus();
    } else if (event.keyCode === 38) {
      // up
      event.preventDefault();
      RadioButtonGroup._getPrevInGroup(this.group, this).focus();
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

  _updateCheckStyle() {
    let className = this.checked
      ? "MinimalRadioButtonCheckChecked "
      : "MinimalRadioButtonCheck ";

    if (!this.enabled) {
      className += "MinimalRadioButtonCheckDisabled";
    }
    this.check.setAttribute("class", className);
    this.check.setAttribute("class", className);
    if (this.enabled) {
      this._setWrapperClass("MinimalRadioButton");
    } else {
      this._setWrapperClass("MinimalRadioButtonDisabled");
    }
  }

  _updateWidth() {
    this.style.width = this.label.x + this.label.width + "px";
  }

  /**
   * Adds a handler function for the "click" event on this radio button.
   * @param {function} handler - A function that will handle the "click" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("click", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("click", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the checked state of this radio button.
   * @params {boolean} checked - Whether or not this radio button will be checked.
   * @returns This instance, suitable for chaining.
   */
  setChecked(checked) {
    this.checked = checked;
    return this;
  }

  /**
   * Sets the text of this radio button.
   * @param {string} text - The text to set on this radio button.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
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
      RadioButtonGroup._clearGroup(this.group);
    }
    this._checked = checked;
    this._updateCheckStyle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this._updateCheckStyle();
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
    this._updateWidth();
  }

  /**
   * Gets the width of this radio button. Setting the width does nothing because it is automatically determined by the width of the label.
   */
  get width() {
    return this.label.x + this.label.width;
  }

  set width(w) {
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
   * @param {number} x - The x position of the text area. Default 0.
   * @param {number} y - The y position of the text area. Default 0.
   * @param {string} text - The initial text to display in the text area. Default empty string.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._text = text || "";

    this._createStyle();
    this._createChildren();
    this._createListeners();

    this.setSize(100, 100);
    this.addEventListener("input", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.textArea = this._createElement(this.shadowRoot, "textArea", "MinimalTextArea");
    this.textArea.value = this._text;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textarea;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInput = this._onInput.bind(this);
    this.textArea.addEventListener("input", this._onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput(event) {
    event.stopPropagation();
    this._text = this.textArea.value;
    this.dispatchEvent(new CustomEvent("input", { detail: this.text }));
  }

  /**
   * Adds a handler function for the "input" event on this component.
   * @param {function} handler - A function that will handle the "input" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("input", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("input", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the text of this text area.
   * @param {string} text - The text of this text area.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
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
        this.textArea.addEventListener("input", this._onInput);
      } else {
        this.textArea.removeEventListener("input", this._onInput);
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
   * @param {number} x - The x position of the text box. Default 0.
   * @param {number} y - The y position of the text box. Default 0.
   * @param {string} text - The initial text to display in the text box. Default empty string.
   */
  constructor(parent, x, y, text) {
    super(parent, x, y);
    this._align = "left";
    this._color = "#333";
    this._bold = false;
    this._italic = false;
    this._html = false;
    this._text = text || "";

    this._createChildren();
    this._createStyle();

    this.setSize(100, 100);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalTextBox");
    this.wrapper.textContent = this._text;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textbox;
    this.shadowRoot.append(style);
  }

  /**
   * Sets the alignment of the text box's text - "left" (default), "right" or "center".
   * @param {string} align - The alignment of the text.
   * @returns This instance, suitable for chaining.
   */
  setAlign(align) {
    this.align = align;
    return this;
  }

  /**
   * Sets wheter or not the text will be bold.
   * @param {boolean} bold - Whether or not the text will be bold.
   * @returns This instance, suitable for chaining.
   */
  setBold(bold) {
    this.bold = bold;
    return this;
  }

  /**
   * Sets the color of the text.
   * @param {string} color - The color of the text.
   * @returns This instance, suitable for chaining.
   */
  setColor(color) {
    this.color = color;
    return this;
  }

  /**
   * Sets the font size of the text.
   * @param {number} fontSize - The font size of the text.
   * @returns This instance, suitable for chaining.
   */
  setFontSize(fontSize) {
    this.fontSize = fontSize;
    return this;
  }

  /**
   * Sets a string of HTML text to display. This will accept pretty much any kind of valid HTML markup you can put into a string.
   * @param {string} html - The HTML to set.
   * @returns This instance, suitable for chaining.
   */
  setHtml(html) {
    this.html = html;
    return this;
  }

  /**
   * Sets whether or not the text will be italicized.
   * @param {boolean} italics - Whether or not the text will be italicized.
   * @returns This instance, suitable for chaining.
   */
  setItalic(italic) {
    this.italic = italic;
    return this;
  }

  /**
   * Sets the text box's text.
   * @param {string} text - The text of the text box.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
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
      this._setWrapperClass("MinimalTextBox");
    } else {
      this._setWrapperClass("MinimalTextBoxDisabled");
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
   * @param {number} x - The x position of the text input. Default 0.
   * @param {number} y - The y position of the text input. Default 0.
   * @param {string} text - The initial text to display in the text input. Default empty string.
   * @param {function} defaultHandler - A function that will handle the "input" event.
   */
  constructor(parent, x, y, text, defaultHandler) {
    super(parent, x, y);
    this._maxLength = 0;
    this._text = text || "";

    this._createStyle();
    this._createChildren();
    this._createListeners();

    this.setSize(100, 20);
    this.addEventListener("input", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.input = this._createInput(this.shadowRoot, "MinimalTextInput");
    this.input.value = this._text;
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.textinput;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onInput = this._onInput.bind(this);
    this.input.addEventListener("input", this._onInput);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onInput(event) {
    event.stopPropagation();
    this._text = this.input.value;
    this.dispatchEvent(new CustomEvent("input", { detail: this.text }));
  }

  /**
   * Adds a handler function for the "input" event on this component.
   * @param {function} handler - A function that will handle the "input" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("input", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("input", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets the text of this text input.
   * @param {string} text - The text of this text input.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
  }

  /**
   * Sets the maximum number of characters in this text input.
   * @param {number} maxLength - The max number of chars.
   * @returns This instance, suitable for chaining.
   */
  setMaxLength(maxLength) {
    this.maxLength = maxLength;
    return this;
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
        this.input.addEventListener("input", this._onInput);
      } else {
        this.input.removeEventListener("input", this._onInput);
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
   * @param {number} x - The x position of the toggle. Default 0.
   * @param {number} y - The y position of the toggle. Default 0.
   * @param {string} text - The text for the toggle's label. Default empty string.
   * @param {boolean} toggled - The initial toggled state of the toggle. Default false.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, text, toggled, defaultHandler) {
    super(parent, x, y);
    this._text = text;
    this._textPosition = "top";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(50, 20);
    this.toggled = toggled || false;
    this._updateLabel();
    this.addEventListener("click", defaultHandler);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalToggle");
    this.wrapper.tabIndex = 0;
    this.label = new Label(this.wrapper, 0, -15, this._text);
    this.handle = this._createDiv(this.wrapper, "MinimalToggleHandle");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.toggle;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
    this.wrapper.addEventListener("click", this._onClick);
    this.wrapper.addEventListener("keypress", this._onKeyPress);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onClick(event) {
    event.stopPropagation();
    if (this.enabled) {
      this.toggle();
      this.dispatchEvent(new CustomEvent("click", { detail: this.toggled }));
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13 && this.enabled) {
      this.wrapper.click();
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateLabel() {
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

  _updateToggle() {
    if (this.toggled) {
      this.handle.style.left = "50%";
    } else {
      this.handle.style.left = 0;
    }
  }

  /**
   * Adds a handler function for the "click" event on this toggle.
   * @param {function} handler - A function that will handle the "click" event.
   * @returns This instance, suitable for chaining.
   */
  addHandler(handler) {
    this.addEventListener("click", handler);
    return this;
  }

  /**
   * Automatically changes the value of a property on a target object with the main value of this component changes.
   * @param {object} target - The target object to change.
   * @param {string} prop - The string name of a property on the target object.
   * @return This instance, suitable for chaining.
   */
  bind(target, prop) {
    this.addEventListener("click", event => {
      target[prop] = event.detail;
    });
    return this;
  }

  /**
   * Sets whether or not this toggle will be toggled (on).
   * @params {boolean} toggle - Whether this toggle will be toggled on or off.
   * @returns This instance, suitable for chaining.
   */
  setToggled(toggled) {
    this.toggled = toggled;
    return this;
  }

  /**
   * Toggles the state of the toggle between toggled and not toggled.
   * @returns This instance, suitable for chaining.
   */
  toggle() {
    this.toggled = !this.toggled;
    this._updateToggle();
    return this;
  }

  /**
   * Sets the text of this toggle.
   * @param {string} text - The text to set on this toggle.
   * @returns this instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  /**
   * Sets the text position of the text label.
   * @param {string} position - The position to place the text lable: "top" (default), "left", "right" or "bottom".
   * @returns this instance, suitable for chaining.
   */
  setTextPosition(position) {
    this.textPosition = position;
    return this;
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
    this._updateToggle();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled !== enabled) {
      super.enabled = enabled;
      this.label.enable = enabled;
      if (this.enabled) {
        this._setWrapperClass("MinimalToggle");
        this.wrapper.tabIndex = 0;
      } else {
        this._setWrapperClass("MinimalToggleDisabled");
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
    this._updateLabel();
  }

  /**
   * Gets and sets the position of the text label displayed on the toggle. Valid values are "top" (default), "left" and "bottom".
   */
  get textPosition() {
    return this._textPosition;
  }

  set textPosition(pos) {
    this._textPosition = pos;
    this._updateLabel();
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
   * @param {number} x - The x position of the vbox. Default 0.
   * @param {number} y - The y position of the vbox. Default 0.
   * @param {number} spacing - The space to put in between each element in the box. Default 0.
   */
  constructor(parent, x, y, spacing) {
    super(parent, x, y);
    this._spacing = spacing || 0;
    this._ypos = 0;
    this._createChildren();
    this.setSize(0, 0);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalVbox");
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Overrides the built in appendChild method of an HTMLElement to add some very simple vertical layout to its children.
   */
  appendChild(child) {
    super.appendChild(child);
    if (this._ypos > 0) {
      this._ypos += this.spacing;
    }
    child.y = this._ypos;
    this.width = Math.max(this.width, child.x + child.width);
    this._ypos += child.height;
    this.height = this._ypos;
  }

  /**
   * Sets the spacing between items in this box. Setting this value will not change the layout of existing elements, but will affect the spacing of future elements added.
   * @param {number} spacing - How much spacing to put between each element.
   * @returns This instance, suitable for chaining.
   */
  setSpacing(spacing) {
    this.spacing = spacing;
    return this;
  }

  /**
   * Gets and sets the spacing between items in this box. Setting this value will not change the layout of existing elements, but will affect the spacing of future elements added.
   */
  get spacing() {
    return this._spacing;
  }

  set spacing(spacing) {
    this._spacing = spacing;
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
   * @param {number} x - The x position of the slider. Default 0.
   * @param {number} y - The y position of the slider. Default 0.
   * @param {string} text - The text label of the slider. Default empty string.
   * @param {number} value - The initial value of the slider. Default 0.
   * @param {number} min - The minimum value of the slider. Default 0.
   * @param {number} max - The maximum value of the slider. Default 100.
   * @param {function} defaultHandler - A function that will handle the "change" event.
   */
  constructor(parent, x, y, text, value, min, max, defaultHandler) {
    super(parent, x, y, text, value, min, max, defaultHandler);
  }
  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.vslider;
    this.shadowRoot.append(style);
    this.handleSize = Defaults.vslider.handleSize;
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////
  _onMouseDown(event) {
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
      this._calculateValueFromPos(y);
    }
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
    let mouseY;
    if (event.changedTouches) {
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseY = event.clientY;
    }
    const y = mouseY - this.getBoundingClientRect().top - this.offsetY;
    this._calculateValueFromPos(y);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _calculateValueFromPos(y) {
    let percent = 1 - y / (this.height - this.handleSize);
    if (this.reversed) {
      percent = 1 - percent;
    }
    const value = this.min + (this.max - this.min) * percent;
    if (value !== this.value) {
      this._updateValue(value);
      this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    }
  }

  _setDefaults() {
    this._decimals = Defaults.vslider.decimals;
    this._handleSize = Defaults.vslider.handleSize;
  }

  _updateHandlePosition() {
    let percent = (this.value - this.min) / (this.max - this.min);
    if (this.reversed) {
      percent = 1 - percent;
    }
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.handle.style.top = this.height - this.handleSize - percent * (this.height - this._handleSize) + "px";
  }

  _updateLabelPosition() {
    this.label.x = -(this.label.width - this.width) / 2;
    this.label.y = -this.label.height - 5;
  }

  _updateValueLabelPosition() {
    this.valueLabel.x = -(this.valueLabel.width - this.width) / 2;
    this.valueLabel.y = this.height + 5;
  }

  _setSliderSize() {
    this.setSize(Defaults.vslider.width, Defaults.vslider.height);
  }

  _updateValue(value) {
    super._updateValue(value);
    this._updateValueLabelPosition();
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
    this._updateHandlePosition();
  }

  /**
   * Gets and sets the height of this component.
   */
  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this._updateLabelPosition();
    this._updateHandlePosition();
  }

  /**
   * Gets and sets the width of this component.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this._updateLabelPosition();
    this._updateHandlePosition();
  }
}

customElements.define("minimal-vslider", VSlider);

/**
 * Creates a draggable, collapsible window to be used as a parent for other components.
 * <div><img src="https://www.minimalcomps2.com/images/window.png"/></div>
 * @example
 * const win = new Window(document.body, 20, 20, 200, 200);
 * new Button(win, 20, 20, "Click");
 * @extends Component
 */
class Window extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this window to.
   * @param {number} text - The text to put in the title bar. Default 0.
   * @param {number} x - The x position of the window. Default 0.
   * @param {number} y - The y position of the window. Default 0.
   * @param {number} w - The width of the window. Default 400.
   * @param {number} h - The height of the window. Default 400.
   */
  constructor(parent, text, x, y, w, h) {
    super(parent, x, y);
    w = w || 400;
    h = h || 400;
    this._text = text;
    this._draggable = true;
    this._minimizable = true;
    this.minimized = false;

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(w, h);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalWindow");
    this.titleBar = this._createDiv(this.wrapper, "MinimalWindowTitleBar");
    this.label = new Label(this.titleBar, 5, 0, this._text);
    this.label.height = 30;
    this.button = this._createDiv(this.titleBar, "MinimalWindowButton");
    this.content = this._createDiv(this.wrapper, "MinimalWindowContent");
    this.content.appendChild(document.createElement("slot"));
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.window;
    this.shadowRoot.append(style);
  }

  _createWrapper() {
    this.wrapper = this._createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
  }

  _createListeners() {
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMinimize = this._onMinimize.bind(this);
    this.titleBar.addEventListener("mousedown", this._onMouseDown);
    this.titleBar.addEventListener("touchstart", this._onMouseDown);
    this.button.addEventListener("click", this._onMinimize);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onMouseDown(event) {
    this.style.zIndex = 1000000;
    let mouseX;
    let mouseY;
    if (event.changedTouches) {
      event.preventDefault();
      mouseX = event.changedTouches[0].clientX;
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    this.offsetX = mouseX - this.getBoundingClientRect().left;
    this.offsetY = mouseY - this.getBoundingClientRect().top;
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
    let mouseX;
    let mouseY;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].clientX;
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    const x = mouseX - this.offsetParent.getBoundingClientRect().left - this.offsetX;
    const y = mouseY - this.offsetParent.getBoundingClientRect().top - this.offsetY;
    this.move(x, y);
  }

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("touchmove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchend", this._onMouseUp);
  }

  _onMinimize() {
    this.minimized = !this.minimized;
    if (this.minimized) {
      super.height = 30;
    } else {
      super.height = this._openHeight;
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Sets whether or not this window can be dragged by its title bar.
   * @param {boolean} draggable - Whether this window can be dragged.
   * @returns This instance, suitable for chaining.
   */
  setDraggable(draggable) {
    this.draggable = draggable;
    return this;
  }

  /**
   * Sets whether or not this window can be minimized.
   * @param {boolean} minimizable - Whether this window can be minimized.
   * @returns This instance, suitable for chaining.
   */
  setMinimizable(minimizable) {
    this.minimizable = minimizable;
    return this;
  }

  /**
   * Sets the test shown in this window's title bar.
   * @param {string} text - The text in the title bar.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

  //////////////////////////////////
  // Getters and Setters
  //////////////////////////////////

  /**
   * Gets and sets whether the window can be dragged by its title bar.
   */
  get draggable() {
    return this._draggable;
  }

  set draggable(draggable) {
    if (this._draggable !== draggable) {
      this._draggable = draggable;
      if (draggable) {
        this.titleBar.style.cursor = "pointer";
        this.titleBar.addEventListener("mousedown", this._onMouseDown);
        this.titleBar.addEventListener("touchstart", this._onMouseDown);
      } else {
        this.titleBar.style.cursor = "default";
        this.titleBar.removeEventListener("mousedown", this._onMouseDown);
        this.titleBar.removeEventListener("touchstart", this._onMouseDown);
      }
    }
  }

  /**
   * Gets and sets the enabled state of this window. A disabled window will be faded and non-draggable. It will be minimized to prevent its contents from being active and will not be able to be unminimized.
   */
  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled === enabled) {
      return;
    }
    super.enabled = enabled;
    if (this.enabled) {
      this.minimized = true;
      this._onMinimize();
      this.minimizable = this.enabledMinimizable;
      this.draggable = this.enabledDraggable;
      this.wrapper.setAttribute("class", "MinimalWindow");
    } else {
      this.minimized = false;
      this._onMinimize();
      this.enabledMinimizable = this.minimizable;
      this.enabledDraggable = this.draggable;
      this.minimizable = false;
      this.draggable = false;
      this.wrapper.setAttribute("class", "MinimalWindowDisabled");
    }
  }
  /**
   * Gets and sets the height of the window.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this._openHeight = h;
    this.content.style.height = (h - 30) + "px";
  }

  /**
   * Gets and sets whether the window has a minimize button.
   */
  get minimizable() {
    return this._minimizable;
  }

  set minimizable(minimizable) {
    this._minimizable = minimizable;
    if (minimizable) {
      this.button.style.visibility = "visible";
    } else {
      this.button.style.visibility = "hidden";
    }
  }

  /**
   * Sets and gets the text shown in the window's title bar.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  /**
   * Gets and sets the width of the window.
   */
  get width() {
    return super.width;
  }

  set width(w) {
    super.width = w;
    this.titleBar.style.width = w + "px";
    this.content.style.width = w + "px";
  }
}

customElements.define("minimal-window", Window);

const version = "1.3.1";

export { Button, Canvas, Checkbox, ColorPicker, Component, Defaults, Dropdown, HBox, HSlider, Image, Knob, LED, Label, NumericStepper, Panel, ProgressBar, RadioButton, RadioButtonGroup, Style, TextArea, TextBox, TextInput, Toggle, VBox, VSlider, Window, version };
