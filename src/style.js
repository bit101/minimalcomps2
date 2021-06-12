export const Style = {};

Style.windowIndex = 99999;
Style.popupZIndex = 9999;

////////////////////
// Base Styles
////////////////////
Style.baseStyle = `
  box-sizing: border-box;
  position: absolute;
  font: 10px sans-serif;
  -webkit-user-select: none;
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
    -webkit-user-select: text;
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
  .MinimalColorPickerSliders {
    ${Style.baseStyle}
    width: 100px;
    height: 150px;
    top: 25px;
    background-color: #fff;
    border: 1px solid #999;
    display: none;
    box-shadow: 2px 2px 2px #ccc;
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
  .MinimalDropdownPanel {
    ${Style.baseStyle};
    box-shadow: 2px 2px 2px #ccc;
    display: none;
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
    -webkit-user-select: text;
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
// PlayButton
////////////////////
Style.playbutton = `
  .MinimalPlayButton {
    ${Style.buttonStyle}
    cursor: pointer;
  }
  .MinimalPlayButton:hover {
    background-color: #fff;
  }
  .MinimalPlayButton:active {
    background-color: #ccc;
  }
  .MinimalPlayButtonDisabled {
    ${Style.disabledStyle}
    ${Style.buttonStyle}
  }
  .MinimalPlayButton:focus {
    ${Style.focusStyle}
  }
  .MinimalPlayButtonIcon {
    ${Style.baseStyle}
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    fill: #333;
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
    -webkit-user-select: text;
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
    -webkit-user-select: text;
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
