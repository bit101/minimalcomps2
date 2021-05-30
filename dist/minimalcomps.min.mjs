const Style={};Style.baseStyle=`
  box-sizing: border-box;
  position: absolute;
  font: 10px sans-serif;
`;Style.disabledStyle=` 
  cursor: default;
  opacity: 0.5;
  user-select: none;
  -webkit-user-select: none;
`;Style.focusStyle=`
  outline: 1px solid #ccc;
  outline-offset: 2px;
`;Style.shadowStyle=`
  box-shadow: inset 1px 1px 2px #808080;
`;Style.textStyle=`
  background-color: #fff;
  border: none;
  color: #333;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;Style.textSelectionStyle=`
  background: #666;
  color: #fff;
`;Style.buttonStyle=`
  ${Style.baseStyle}
  background-color: #f9f9f9;
  border-radius: 0;
  border: 1px solid #999;
  height: 100%;
  width: 100%;
`;Style.button=`
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
`;Style.canvas=`
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
`;Style.checkbox=`
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
`;Style.colorpicker=`
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
`;Style.component=`
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
`;Style.dropdown=`
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
`;Style.hslider=`
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
`;Style.image=`
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
`;Style.knob=`
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
`;Style.label=`
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
`;Style.led=`
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
`;Style.numericstepper=`
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
`;Style.panel=`
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
`;Style.progressbar=`
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
`;Style.radiobutton=`
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
`;Style.textarea=`
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
`;Style.textbox=`
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
`;Style.textinput=`
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
`;Style.toggle=`
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
`;Style.vslider=`
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
`;Style.window=`
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
`;class Component extends HTMLElement{constructor(parent,x,y){super();this.parent=parent;this._enabled=true;this.attachShadow({mode:"open"});this.createWrapper();this.createWrapperStyle();this.move(x||0,y||0)}addToParent(){this.parent&&this.parent.appendChild(this)}createDiv(parent,className){return this.createElement(parent,"div",className)}createElement(parent,type,className){const el=document.createElement(type);el.setAttribute("class",className);parent&&parent.appendChild(el);return el}createInput(parent,className){const input=this.createElement(parent,"input",className);input.type="text";return input}createWrapper(){this.wrapper=this.createDiv(null,"MinimalWrapper");this.shadowRoot.appendChild(this.wrapper);this.shadowRoot.appendChild(document.createElement("slot"))}createWrapperStyle(){const style=document.createElement("style");style.textContent=Style.component;this.shadowRoot.append(style)}move(x,y){this.x=x;this.y=y}rotate(rad){this.style.transform=`rotate(${rad}rad)`}rotateDeg(deg){this.style.transform=`rotate(${deg}deg)`}setSize(w,h){this.width=w;this.height=h}setWrapperClass(className){this.wrapper.setAttribute("class",className)}get enabled(){return this._enabled}set enabled(enabled){this._enabled=enabled}get height(){return this._height}set height(h){this._height=h;this.style.height=h+"px"}get width(){return this._width}set width(w){this._width=w;this.style.width=w+"px"}get x(){return this._x}set x(x){this._x=x;this.style.left=x+"px"}get y(){return this._y}set y(y){this._y=y;this.style.top=y+"px"}}customElements.define("minimal-component",Component);const Defaults={button:{width:100,height:20},hslider:{decimals:0,textPosition:"top",width:150,height:15,handleSize:15},image:{width:100},knob:{decimals:0,size:40},label:{fontSize:10},vslider:{decimals:0,width:15,height:150,handleSize:15}};class Label extends Component{constructor(parent,x,y,text){super(parent,x,y);this._align="left";this._autosize=true;this._color="#333";this._bold=false;this._italic=false;this.createChildren();this.createStyle();this.fontSize=Defaults.label.fontSize;document.body.appendChild(this);this._width=this.wrapper.offsetWidth;this.text=text||"";this.height=Defaults.label.fontSize+2;this.addToParent()}createChildren(){this.setWrapperClass("MinimalLabel");this.wrapper.textContent=this._text}createStyle(){const style=document.createElement("style");style.textContent=Style.label;this.shadowRoot.append(style)}get align(){return this._align}set align(align){this._align=align;this.wrapper.style.textAlign=align}get autosize(){return this._autosize}set autosize(autosize){this._autosize=autosize;if(this._autosize){this.wrapper.style.width="auto";this._width=this.wrapper.offsetWidth}else{this._width=this.wrapper.offsetWidth;this.wrapper.style.width=this._width+"px"}}get bold(){return this._bold}set bold(bold){this._bold=bold;if(this._bold){this.wrapper.style.fontWeight="bold"}else{this.wrapper.style.fontWeight="normal"}}get color(){return this._color}set color(color){this._color=color;this.wrapper.style.color=color}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;if(this.enabled){this.setWrapperClass("MinimalLabel")}else{this.setWrapperClass("MinimalLabel MinimalLabelDisabled")}}get fontSize(){return this._fontSize}set fontSize(fontSize){this._fontSize=fontSize;this.wrapper.style.fontSize=fontSize+"px"}get height(){return super.height}set height(height){super.height=height;this.wrapper.style.lineHeight=height+"px"}get italic(){return this._italics}set italic(italic){this._italic=italic;if(this._italic){this.wrapper.style.fontStyle="italic"}else{this.wrapper.style.fontStyle="normal"}}get text(){return this._text}set text(text){this._text=text;this.wrapper.textContent=text;if(this._autosize){super.width=this.wrapper.offsetWidth}}get width(){return this._width}set width(w){if(!this.autosize){this._width=w;this.wrapper.style.width=w+"px"}}}customElements.define("minimal-label",Label);class Button extends Component{constructor(parent,x,y,text,defaultHandler){super(parent,x,y);this._text=text||"";this.createChildren();this.createStyle();this.createListeners();this.setSize(Defaults.button.width,Defaults.button.height);this.addEventListener("click",defaultHandler);this.addToParent()}createChildren(){this.wrapper.tabIndex=0;this.setWrapperClass("MinimalButton");this.label=new Label(this.wrapper,0,0,this._text);this.label.autosize=false;this.label.align="center"}createStyle(){const style=document.createElement("style");style.textContent=Style.button;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyUp=this.onKeyUp.bind(this);this.wrapper.addEventListener("click",this.onClick);this.wrapper.addEventListener("keyup",this.onKeyUp)}onClick(event){event.stopPropagation();if(this.enabled){this.dispatchEvent(new Event("click"))}}onKeyUp(event){if(event.keyCode===13&&this.enabled){this.wrapper.click()}}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;this.label.enabled=enabled;if(this.enabled){this.wrapper.setAttribute("class","MinimalButton");this.wrapper.tabIndex=0}else{this.wrapper.setAttribute("class","MinimalButtonDisabled");this.wrapper.tabIndex=-1}}get height(){return super.height}set height(height){super.height=height;this.label.height=height}get text(){return this._text}set text(text){this._text=text;this.label.text=text}get width(){return super.width}set width(width){super.width=width;this.label.width=width}}customElements.define("minimal-button",Button);class Canvas extends Component{constructor(parent,x,y,w,h){super(parent,x,y);this.createChildren();this.createStyle();this.setSize(w||200,h||100);this.addToParent()}createChildren(){this.canvas=this.createElement(this.wrapper,"canvas","MinimalCanvas");this._context=this.canvas.getContext("2d")}createStyle(){const style=document.createElement("style");style.textContent=Style.canvas;this.shadowRoot.append(style)}get context(){return this._context}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;if(this._enabled){this.canvas.setAttribute("class","MinimalCanvas")}else{this.canvas.setAttribute("class","MinimalCanvasDisabled")}}get height(){return super.height}set height(height){super.height=height;this.canvas.height=height}get width(){return super.width}set width(width){super.width=width;this.canvas.width=width}}customElements.define("minimal-canvas",Canvas);class Checkbox extends Component{constructor(parent,x,y,text,checked,defaultHandler){super(parent,x,y);this._text=text;this.createChildren();this.createStyle();this.createListeners();this.setSize(100,10);this.checked=checked;this.addEventListener("click",defaultHandler);this.addToParent();this.updateWidth()}createChildren(){this.setWrapperClass("MinimalCheckbox");this.wrapper.tabIndex=0;this.check=this.createDiv(this.wrapper,"MinimalCheckboxCheck");this.label=new Label(this.wrapper,15,0,this.text)}createStyle(){const style=document.createElement("style");style.textContent=Style.checkbox;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.wrapper.addEventListener("click",this.onClick);this.wrapper.addEventListener("keypress",this.onKeyPress)}onClick(event){event.stopPropagation();if(this.enabled){this.toggle();this.dispatchEvent(new CustomEvent("click",{detail:this.checked}))}}onKeyPress(event){if(event.keyCode===13&&this.enabled){this.wrapper.click()}}toggle(){this.checked=!this.checked}updateCheckStyle(){let className=this.checked?"MinimalCheckboxCheckChecked ":"MinimalCheckboxCheck ";if(!this.enabled){className+="MinimalCheckboxCheckDisabled"}this.check.setAttribute("class",className);if(this.enabled){this.setWrapperClass("MinimalCheckbox")}else{this.setWrapperClass("MinimalCheckboxDisabled")}}updateWidth(){this.style.width=this.label.x+this.label.width+"px"}get checked(){return this._checked}set checked(checked){this._checked=checked;this.updateCheckStyle()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.updateCheckStyle();this.label.enabled=enabled;if(this.enabled){this.wrapper.tabIndex=0}else{this.wrapper.tabIndex=-1}}}get height(){return super.height}set height(h){super.height=h;this.label.height=h;this.check.style.top=Math.round((this.height-10)/2)+"px"}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateWidth()}get width(){return this.label.x+this.label.width}set width(w){}}customElements.define("minimal-checkbox",Checkbox);class ColorPicker extends Component{constructor(parent,x,y,text,color,defaultHandler){super(parent,x,y);if(typeof arguments[4]!=="string"){text="";color=arguments[3];defaultHandler=arguments[4]}color=color||"#f00";this._text=text||"";this._textPosition="top";this._color=this.correctColor(color);this._color=this.cropColor(color);this.createChildren();this.createStyle();this.createListeners();this.setSize(100,20);this.addEventListener("change",defaultHandler);this.addToParent()}createChildren(){this.setWrapperClass("MinimalColorPicker");this.input=this.createInput(this.wrapper,"MinimalColorPickerInput");this.input.maxLength=7;this.input.value=this._color;this.label=new Label(this.wrapper,0,-15,this._text);this.preview=this.createDiv(this.wrapper,"MinimalColorPickerPreview");this.preview.style.backgroundColor=this.color}createStyle(){const style=document.createElement("style");style.textContent=Style.colorpicker;this.shadowRoot.append(style)}createListeners(){this.onInput=this.onInput.bind(this);this.input.addEventListener("input",this.onInput)}onInput(){const color=this.correctColor(this.input.value);this.input.value=color;if((color.length===4||color.length===7)&&this.color!==color){this._color=color;this.preview.style.backgroundColor=this.color;this.dispatchEvent(new CustomEvent("change",{detail:this.color}))}}correctColor(color){color="#"+color.replace(/[^0-9a-fA-F]/g,"");return color.toUpperCase()}cropColor(color){if(color.length>7){color=color.substring(0,7)}return color}updateLabel(){if(this._textPosition==="left"){this.label.x=-this.label.width-5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="right"){this.label.x=this.width+5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="top"){this.label.x=0;this.label.y=-this.label.height-5}else{this.label.x=0;this.label.y=this.height+5}}setRGB(r,g,b){let red=r.toString(16);let green=g.toString(16);let blue=b.toString(16);if(red.length===1){red="0"+red}if(green.length===1){green="0"+green}if(blue.length===1){blue="0"+blue}if(red.charAt(0)===red.charAt(1)&&green.charAt(0)===green.charAt(1)&&blue.charAt(0)===blue.charAt(1)){red=red.charAt(0);green=green.charAt(0);blue=blue.charAt(0)}this.color=red+green+blue}setNumber(num){const red=num>>16;const green=num>>8&255;const blue=num&255;this.setRGB(red,green,blue)}setRandom(){this.setNumber(Math.random()*16777215)}getNumber(){const c=this.color.substring(1);if(c.length===3){let r=c.charAt(0);let g=c.charAt(1);let b=c.charAt(2);r+=r;g+=g;b+=b;return parseInt(r+g+b,16)}return parseInt(c,16)}get red(){return this.getNumber()>>16}get green(){return this.getNumber()>>8&255}get blue(){return this.getNumber()&255}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.label.enabled=enabled;this.input.disabled=!this.enabled;if(this.enabled){this.preview.setAttribute("class","MinimalColorPickerPreview");this.input.addEventListener("input",this.onInput)}else{this.preview.setAttribute("class","MinimalColorPickerPreviewDisabled");this.input.removeEventListener("input",this.onInput)}}}get color(){return this._color}set color(color){color=this.correctColor(color);color=this.cropColor(color);this._color=color;this.input.value=color;this.preview.style.backgroundColor=color}get height(){return super.height}set height(h){super.height=h;this.updateLabel()}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateLabel()}get textPosition(){return this._textPosition}set textPosition(pos){this._textPosition=pos;this.updateLabel()}}customElements.define("minimal-colorpicker",ColorPicker);class Dropdown extends Component{constructor(parent,x,y,items,index,defaultHandler){super(parent,x,y);this.items=items;this._open=false;this.itemElements=[];this._text="";this.createChildren();this.createStyle();this.createListeners();this.setSize(100,20);this.createItems();this.index=index||-1;this.addEventListener("change",defaultHandler);this.addToParent()}createChildren(){this.setWrapperClass("MinimalDropdown");this.wrapper.tabIndex=0;this.label=new Label(this.wrapper,3,3);this.button=this.createDiv(this.wrapper,"MinimalDropdownButton");this.button.textContent="+";this.dropdown=this.createDiv(this.wrapper,null);this.dropdown.style.display="none"}createItems(){for(let i=0;i<this.items.length;i++){this.createItem(i)}}createItem(index){const item=this.createDiv(this.dropdown,"MinimalDropdownItem");item.setAttribute("data-index",index);item.addEventListener("click",this.onItemClick);item.tabIndex=0;const label=new Label(item,3,0,this.items[index]);label.y=(this.height-label.height)/2;const itemObj={item:item,label:label};this.updateItem(itemObj,index);this.itemElements.push(itemObj);return item}createStyle(){const style=document.createElement("style");style.textContent=Style.dropdown;this.shadowRoot.append(style)}createListeners(){this.toggle=this.toggle.bind(this);this.onItemClick=this.onItemClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.onDocumentClick=this.onDocumentClick.bind(this);this.wrapper.addEventListener("click",this.toggle);for(let i=0;i<this.itemElements.length;i++){this.itemElements[i].addEventListener("click",this.onItemClick)}this.addEventListener("keydown",this.onKeyPress)}toggle(event){event&&event.stopPropagation();this._open=!this._open;if(this._open){this.initialZ=this.style.zIndex;this.style.zIndex=1e6;this.dropdown.style.display="block";document.addEventListener("click",this.onDocumentClick)}else{this.style.zIndex=this.initialZ;this.dropdown.style.display="none";document.removeEventListener("click",this.onDocumentClick)}}onItemClick(event){event.stopPropagation();this.index=event.target.getAttribute("data-index");this.toggle();this.dispatchEvent(new CustomEvent("change",{detail:{text:this.text,index:this.index}}));this.wrapper.focus()}onKeyPress(event){if(event.keyCode===13&&this.enabled){this.shadowRoot.activeElement.click()}else if(event.keyCode===27||event.keyCode===9){this.close()}else if(event.keyCode===40){if(this.shadowRoot.activeElement===this.wrapper||this.shadowRoot.activeElement===this.dropdown.lastChild){this.dropdown.firstChild.focus()}else{this.shadowRoot.activeElement.nextSibling.focus()}}else if(event.keyCode===38){if(this.shadowRoot.activeElement===this.wrapper||this.shadowRoot.activeElement===this.dropdown.firstChild){this.dropdown.lastChild.focus()}else{this.shadowRoot.activeElement.previousSibling.focus()}}}onDocumentClick(event){if(event.target.className!=="MinimalDropdownItem"){this.close()}}close(){this._open=true;this.toggle()}open(){this._open=false;this.toggle()}updateButton(){this.button.style.left=this.width-this.height+"px";this.button.style.width=this.height+"px";this.button.style.height=this.height+"px";this.button.style.lineHeight=this.height-1+"px"}updateItem(itemObj,i){const{item,label}=itemObj;const h=this.height-1;item.style.top=h+i*h+"px";item.style.width=this.width+"px";item.style.height=this.height+"px";if(item.firstChild){label.y=(this.height-label.height)/2}}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled===enabled){return}super.enabled=enabled;if(this.enabled){this.wrapper.addEventListener("click",this.toggle);this.wrapper.setAttribute("class","MinimalDropdown");this.button.setAttribute("class","MinimalDropdownButton");this.tabIndex=0}else{this.wrapper.removeEventListener("click",this.toggle);this.wrapper.setAttribute("class","MinimalDropdownDisabled");this.button.setAttribute("class","MinimalDropdownButtonDisabled");this.tabIndex=-1;this._open=false;this.style.zIndex=this.initialZ;this.dropdown.style.display="none"}}get height(){return super.height}set height(height){super.height=height;this.label.y=(this.height-this.label.height)/2;this.updateButton();this.itemElements.forEach((item,i)=>this.updateItem(item,i))}get index(){return this._index}set index(index){if(index<0||index>=this.items.length||index===null||index===undefined){this._index=-1;this._text="";this.label.text="Choose..."}else{this._index=index;this._text=this.items[this._index];this.label.text=this._text}}get text(){return this._text}get width(){return super.width}set width(width){super.width=width;this.updateButton();this.itemElements.forEach(item=>{this.updateItem(item)})}}customElements.define("minimal-dropdown",Dropdown);class HBox extends Component{constructor(parent,x,y,spacing){super(parent,x,y);this.spacing=spacing||0;this.xpos=0;this.ypos=0;this.createChildren();this.setSize(0,0);this.addToParent()}createChildren(){this.setWrapperClass("MinimalVbox")}appendChild(child){super.appendChild(child);if(this.xpos>0){this.xpos+=this.spacing}child.x=this.xpos;this.height=Math.max(this.height,child.y+child.height);this.xpos+=child.width;this.width=this.xpos}}customElements.define("minimal-hbox",HBox);class HSlider extends Component{constructor(parent,x,y,text,value,min,max,defaultHandler){super(parent,x,y);this._min=min||0;this._max=max||100;this.setDefaults();this._reversed=false;this._value=value||0;this._showValue=true;this._text=text||"";this.createChildren();this.createStyle();this.createListeners();this.setSliderSize();this.updateHandlePosition();this.updateLabelPosition();this.updateValueLabelPosition();this.addEventListener("change",defaultHandler);this.addToParent()}createChildren(){this.wrapper.tabIndex=0;this.setWrapperClass("MinimalSlider");this.handle=this.createDiv(this.wrapper,"MinimalSliderHandle");this.label=new Label(this.wrapper,0,0,this._text);this.valueLabel=new Label(this.wrapper,0,0,this.formatValue())}createStyle(){const style=document.createElement("style");style.textContent=Style.hslider;this.shadowRoot.append(style);this.handleSize=Defaults.hslider.handleSize}createListeners(){this.onMouseDown=this.onMouseDown.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.onMouseUp=this.onMouseUp.bind(this);this.onKeyDown=this.onKeyDown.bind(this);this.onWheel=this.onWheel.bind(this);this.wrapper.addEventListener("wheel",this.onWheel);this.wrapper.addEventListener("mousedown",this.onMouseDown);this.wrapper.addEventListener("touchstart",this.onMouseDown);this.wrapper.addEventListener("keydown",this.onKeyDown)}onMouseDown(event){let mouseX;if(event.changedTouches){event.preventDefault();this.wrapper.focus();mouseX=event.changedTouches[0].clientX}else{mouseX=event.clientX}this.offsetX=mouseX-this.getBoundingClientRect().left-this.handle.offsetLeft;if(this.offsetX<0||this.offsetX>this.handleSize){this.offsetX=this.handleSize/2;const x=mouseX-this.getBoundingClientRect().left-this.handleSize/2;this.calculateValueFromPos(x)}document.addEventListener("mousemove",this.onMouseMove);document.addEventListener("touchmove",this.onMouseMove);document.addEventListener("mouseup",this.onMouseUp);document.addEventListener("touchend",this.onMouseUp)}onMouseMove(event){let mouseX;if(event.changedTouches){mouseX=event.changedTouches[0].clientX}else{mouseX=event.clientX}const x=mouseX-this.getBoundingClientRect().left-this.offsetX;this.calculateValueFromPos(x)}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("touchmove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp);document.removeEventListener("touchend",this.onMouseUp)}onKeyDown(event){let inc=1/Math.pow(10,this._decimals);if(this.reversed){inc=-inc}let value=this.value;switch(event.keyCode){case 34:event.preventDefault();value-=inc*10;break;case 33:event.preventDefault();value+=inc*10;break;case 36:event.preventDefault();value=this.min;break;case 35:event.preventDefault();value=this.max;break;case 37:case 40:event.preventDefault();value-=inc;break;case 38:case 39:event.preventDefault();value+=inc;break}this.updateValue(value)}onWheel(event){event.preventDefault();const inc=1/Math.pow(10,this._decimals);if(event.deltaY>0){this.value+=inc}else if(event.deltaY<0){this.value-=inc}}calculateValueFromPos(x){let percent=x/(this.width-this.handleSize);if(this.reversed){percent=1-percent}const value=this.min+(this.max-this.min)*percent;this.updateValue(value)}formatValue(){let valStr=this.value.toString();if(this.decimals<=0){return valStr}if(valStr.indexOf(".")===-1){valStr+="."}const dec=valStr.split(".")[1].length;for(let i=dec;i<this.decimals;i++){valStr+="0"}return valStr}roundValue(value){value=Math.min(value,this.max);value=Math.max(value,this.min);const mult=Math.pow(10,this.decimals);return Math.round(value*mult)/mult}setDefaults(){this._handleSize=Defaults.hslider.handleSize;this._decimals=Defaults.hslider.decimals;this._textPosition=Defaults.hslider.textPosition}updateHandlePosition(){let percent=(this.value-this.min)/(this.max-this.min);if(this.reversed){percent=1-percent}percent=Math.max(0,percent);percent=Math.min(1,percent);this.handle.style.left=percent*(this.width-this._handleSize)+"px"}updateEnabledStyle(){this.label.enabled=this.enabled;this.valueLabel.enabled=this.enabled;if(this.enabled){this.setWrapperClass("MinimalSlider");this.handle.setAttribute("class","MinimalSliderHandle")}else{this.setWrapperClass("MinimalSliderDisabled");this.handle.setAttribute("class","MinimalSliderHandleDisabled")}}updateLabelPosition(){if(this._textPosition==="left"){this.label.x=-this.label.width-5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="top"){this.label.x=0;this.label.y=-this.label.height-5}else if(this._textPosition==="bottom"){this.label.x=0;this.label.y=this.height+5}}updateValueLabelPosition(){this.valueLabel.x=this.width+5;this.valueLabel.y=(this.height-this.valueLabel.height)/2}setSliderSize(){this.setSize(Defaults.hslider.width,Defaults.hslider.height)}updateValue(value){if(this._value!==value){this._value=value;this.updateHandlePosition();this.valueLabel.text=this.formatValue();this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}get decimals(){return this._decimals}set decimals(decimals){this._decimals=decimals;this.valueLabel.text=this.formatValue();this.updateValueLabelPosition();this.updateHandlePosition()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.updateEnabledStyle();if(this.enabled){this.wrapper.tabIndex=0;this.wrapper.addEventListener("wheel",this.onWheel);this.wrapper.addEventListener("mousedown",this.onMouseDown);this.wrapper.addEventListener("touchstart",this.onMouseDown);this.wrapper.addEventListener("keydown",this.onKeyDown)}else{this.wrapper.tabIndex=-1;this.wrapper.removeEventListener("wheel",this.onWheel);this.wrapper.removeEventListener("mousedown",this.onMouseDown);this.wrapper.removeEventListener("touchstart",this.onMouseDown);this.wrapper.removeEventListener("keydown",this.onKeyDown);document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("touchmove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp);document.removeEventListener("touchend",this.onMouseUp)}}}get handleSize(){return this._handleSize}set handleSize(handleSize){this._handleSize=handleSize;this.handle.style.width=handleSize+"px";this.updateHandlePosition()}get height(){return super.height}set height(height){super.height=height;this.updateLabelPosition();this.updateValueLabelPosition()}get textPosition(){return this.textPosition}set textPosition(position){this._textPosition=position;this.updateLabelPosition()}get max(){return this._max}set max(max){this._max=max;this.updateValue(this.value);this.updateHandlePosition()}get min(){return this._min}set min(min){this._min=min;this.updateValue(this.value);this.updateHandlePosition()}get reversed(){return this._reversed}set reversed(reversed){this._reversed=reversed}get showValue(){return this._showValue}set showValue(show){this._showValue=show;if(this._showValue){this.valueLabel.style.visibility="visible"}else{this.valueLabel.style.visibility="hidden"}}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateLabelPosition()}get value(){return this.roundValue(this._value)}set value(value){this.updateValue(value)}get width(){return super.width}set width(width){super.width=width;this.updateValueLabelPosition();this.updateHandlePosition()}}customElements.define("minimal-hslider",HSlider);class Image extends Component{constructor(parent,x,y,url){super(parent,x,y);this._url=url||"";this.createChildren();this.createStyle();this.createListeners();this.setSize(Defaults.image.width,100);this.load();this.addToParent()}createChildren(){this.image=this.createElement(this.wrapper,"img","MinimalImage")}createStyle(){const style=document.createElement("style");style.textContent=Style.image;this.shadowRoot.append(style)}createListeners(){this.onLoad=this.onLoad.bind(this);this.image.addEventListener("load",this.onLoad)}onLoad(){this.origWidth=this.image.width;this.origHeight=this.image.height;this.updateImageSize();this.image.style.visibility="visible"}load(){this.image.style.visibility="hidden";this.image.setAttribute("src",this._url)}updateImageSize(){const aspectRatio=this.origWidth/this.origHeight;this.image.width=this.width;this.image.height=this.height=this.width/aspectRatio}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;if(this._enabled){this.image.setAttribute("class","MinimalImage")}else{this.image.setAttribute("class","MinimalImageDisabled")}}get height(){return this.image.height}set height(h){super.height=h}get url(){return this._url}set url(url){this._url=url;this.load()}get width(){return super.width}set width(width){super.width=width;if(this.image.width){this.updateImageSize()}}}customElements.define("minimal-image",Image);class Knob extends Component{constructor(parent,x,y,text,value,min,max,defaultHandler){super(parent,x,y);this._text=text||"";this._min=min||0;this._max=max||100;this._decimals=Defaults.knob.decimals;this._value=value||0;this._sensitivity=100;this._labelsSwapped=false;this.createChildren();this.createStyle();this.createListeners();this.setSize(Defaults.knob.size,Defaults.knob.size);this.updateHandleRotation();this.addEventListener("change",defaultHandler);this.addToParent()}createChildren(){this.setWrapperClass("MinimalKnob");this.handle=this.createDiv(this.wrapper,"MinimalKnobHandle");this.wrapper.tabIndex=0;this.zero=this.createDiv(this.handle,"MinimalKnobZero");this.label=new Label(this.wrapper,0,0,this._text);this.valueLabel=new Label(this.wrapper,0,0,this.roundValue(this._value))}createStyle(){const style=document.createElement("style");style.textContent=Style.knob;this.shadowRoot.append(style)}createListeners(){this.onMouseDown=this.onMouseDown.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.onMouseUp=this.onMouseUp.bind(this);this.onKeyDown=this.onKeyDown.bind(this);this.onWheel=this.onWheel.bind(this);this.handle.addEventListener("wheel",this.onWheel);this.wrapper.addEventListener("mousedown",this.onMouseDown);this.wrapper.addEventListener("touchstart",this.onMouseDown);this.wrapper.addEventListener("keydown",this.onKeyDown)}onMouseDown(event){event.preventDefault();this.wrapper.focus();if(event.changedTouches){this.startY=event.changedTouches[0].clientY}else{this.startY=event.clientY}this.startValue=this.value;document.addEventListener("mousemove",this.onMouseMove);document.addEventListener("touchmove",this.onMouseMove);document.addEventListener("mouseup",this.onMouseUp);document.addEventListener("touchend",this.onMouseUp)}onMouseMove(event){const mult=(this.max-this.min)/this.sensitivity;let mouseY;if(event.changedTouches){mouseY=event.changedTouches[0].clientY}else{mouseY=event.clientY}const y=mouseY-this.startY;this.value=this.startValue+-y*mult}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("touchmove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp);document.removeEventListener("touchend",this.onMouseUp)}onKeyDown(event){const inc=1/Math.pow(10,this._decimals);let value=this.value;switch(event.keyCode){case 34:event.preventDefault();value-=inc*10;break;case 33:event.preventDefault();value+=inc*10;break;case 36:event.preventDefault();value=this.min;break;case 35:event.preventDefault();value=this.max;break;case 37:case 40:event.preventDefault();value-=inc;break;case 38:case 39:event.preventDefault();value+=inc;break}this.updateValue(value)}onWheel(event){event.preventDefault();const inc=1/Math.pow(10,this._decimals);if(event.deltaY>0){this.value+=inc}else if(event.deltaY<0){this.value-=inc}}formatValue(){let valStr=this.value.toString();if(this.decimals<=0){return valStr}if(valStr.indexOf(".")===-1){valStr+="."}const dec=valStr.split(".")[1].length;for(let i=dec;i<this.decimals;i++){valStr+="0"}return valStr}roundValue(value){value=Math.min(value,this.max);value=Math.max(value,this.min);const mult=Math.pow(10,this.decimals);return Math.round(value*mult)/mult}updateHandleSize(){this.handle.style.top=(this.height-this.size)/2+"px";this.handle.style.left=(this.width-this.size)/2+"px";this.handle.style.width=this.size+"px";this.handle.style.height=this.size+"px"}updateHandleRotation(){const percent=(this.value-this.min)/(this.max-this.min);this.handle.style.transform=`rotate(${-240+percent*300}deg`}updateEnabledStyle(){this.label.enabled=this.enabled;this.valueLabel.enabled=this.enabled;if(this.enabled){this.wrapper.setAttribute("class","MinimalKnob")}else{this.wrapper.setAttribute("class","MinimalKnobDisabled")}}updateLabelPositions(){this.label.x=(this.width-this.label.width)/2;this.valueLabel.x=(this.width-this.valueLabel.width)/2;if(this._labelsSwapped){this.label.y=(this.height+this.size)/2+5;this.valueLabel.y=(this.height-this.size)/2-this.label.height-5}else{this.label.y=(this.height-this.size)/2-this.label.height-5;this.valueLabel.y=(this.height+this.size)/2+5}}updateValue(value){if(this._value!==value){this._value=value;this.updateHandleRotation();this.valueLabel.text=this.formatValue();this.updateLabelPositions();this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}get decimals(){return this._decimals}set decimals(decimals){this._decimals=decimals;this.updateHandleRotation();this.valueLabel.text=this.formatValue();this.updateLabelPositions()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.updateEnabledStyle();if(this.enabled){this.wrapper.tabIndex=0;this.handle.addEventListener("wheel",this.onWheel);this.wrapper.addEventListener("mousedown",this.onMouseDown);this.wrapper.addEventListener("touchstart",this.onMouseDown);this.wrapper.addEventListener("keydown",this.onKeyDown)}else{this.wrapper.tabIndex=-1;this.handle.removeEventListener("wheel",this.onWheel);this.wrapper.removeEventListener("mousedown",this.onMouseDown);this.wrapper.removeEventListener("touchstart",this.onMouseDown);this.wrapper.removeEventListener("keydown",this.onKeyDown);document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("touchmove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp);document.removeEventListener("touchend",this.onMouseUp)}}}get height(){return super.height}set height(height){super.height=height;this.size=Math.min(this.width,this.height);this.updateHandleSize();this.updateLabelPositions()}get labelsSwapped(){return this._labelsSwapped}set labelsSwapped(swap){this._labelsSwapped=swap;this.updateLabelPositions()}get max(){return this._max}set max(max){this._max=max;this.updateValue(this.value)}get min(){return this._min}set min(min){this._min=min;this.updateValue(this.value)}get sensitivity(){return this._sensitivity}set sensitivity(sensitivity){this._sensitivity=sensitivity}get text(){return this._text}set text(text){this._text=text;this.label.text=text}get value(){return this.roundValue(this._value)}set value(value){this.updateValue(value)}get width(){return super.width}set width(width){super.width=width;this.size=Math.min(this.width,this.height);this.updateHandleSize();this.updateLabelPositions()}}customElements.define("minimal-knob",Knob);class LED extends Component{constructor(parent,x,y,text,color,lit){super(parent,x,y);this._text=text||"";this._color=color||"#f00";this._lit=lit||false;this._textPosition="top";const size=16;this.createChildren();this.setWrapperClass("MinimalLED");this.createStyle();this.setSize(size,size);this.updateLED();this.updateLabel();this.addToParent()}createChildren(){this.label=new Label(this.wrapper,0,-15,this._text)}createStyle(){const style=document.createElement("style");style.textContent=Style.led;this.shadowRoot.append(style)}updateLED(){if(this.lit){this.wrapper.style.background=`radial-gradient(circle at 60% 37%, #fff, ${this.color} 50%, #444 100%)`}else{this.wrapper.style.background="radial-gradient(circle at 60% 37%, #fff, #999 50%)"}}updateLabel(){if(this._textPosition==="left"){this.label.x=-this.label.width-5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="top"){this.label.x=(this.width-this.label.width)/2;this.label.y=-this.label.height-5}else if(this._textPosition==="right"){this.label.x=this.width+5;this.label.y=(this.height-this.label.height)/2}else{this.label.x=(this.width-this.label.width)/2;this.label.y=this.height+5}}blink(bps){if(!this.enabled){return}bps=bps||2;clearInterval(this.interval);this.blinking=true;this.interval=setInterval(()=>{if(this.blinking){this.lit=!this.lit}},1/bps*1e3)}stop(){this.blinking=false;clearInterval(this.interval);this.lit=false}setSize(w,h){const size=Math.min(w,h);super.width=size;super.height=size}get color(){return this._color}set color(color){this._color=color;this.updateLED()}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;this.label.enabled=enabled;if(this._enabled){this.wrapper.setAttribute("class","MinimalLED")}else{this.stop();this.wrapper.setAttribute("class","MinimalLEDDisabled")}}get height(){return super.height}set height(height){super.height=height;super.width=height}get lit(){return this._lit}set lit(lit){this._lit=lit;this.updateLED()}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateLabel()}get textPosition(){return this._textPosition}set textPosition(pos){this._textPosition=pos;this.updateLabel()}get width(){return super.width}set width(width){super.width=width;super.height=width}}customElements.define("minimal-led",LED);class NumericStepper extends Component{constructor(parent,x,y,text,value,min,max,defaultHandler){super(parent,x,y);if(typeof arguments[3]!=="string"){text="";value=arguments[3];min=arguments[4];max=arguments[5];defaultHandler=arguments[6]}this._text=text||"";this._textPosition="top";this._min=min||0;this._max=max||0;this._decimals=0;value=value||0;this._value=this.roundValue(value);this.createChildren();this.createStyle();this.createListeners();this.setSize(100,20);this.addEventListener("change",defaultHandler);this.addToParent()}createChildren(){this.setWrapperClass("MinimalNumericStepper");this.input=this.createInput(this.wrapper,"MinimalNumericStepperInput");this.input.value=this._value;this.label=new Label(this.wrapper,0,-15,this._text);this.minus=new Button(this.wrapper,60,0,"-");this.minus.setSize(20,20);this.plus=new Button(this.wrapper,80,0,"+");this.plus.setSize(20,20)}createStyle(){const style=document.createElement("style");style.textContent=Style.numericstepper;this.shadowRoot.append(style)}createListeners(){this.onInputChange=this.onInputChange.bind(this);this.onInput=this.onInput.bind(this);this.onPlusDown=this.onPlusDown.bind(this);this.onMinusDown=this.onMinusDown.bind(this);this.onPlusUp=this.onPlusUp.bind(this);this.onMinusUp=this.onMinusUp.bind(this);this.onPlusKeyDown=this.onPlusKeyDown.bind(this);this.onMinusKeyDown=this.onMinusKeyDown.bind(this);this.onPlusKeyUp=this.onPlusKeyUp.bind(this);this.onMinusKeyUp=this.onMinusKeyUp.bind(this);this.onWheel=this.onWheel.bind(this);this.wrapper.addEventListener("wheel",this.onWheel);this.input.addEventListener("input",this.onInput);this.input.addEventListener("change",this.onInputChange);this.plus.addEventListener("mousedown",this.onPlusDown);document.addEventListener("mouseup",this.onPlusUp);this.plus.addEventListener("keydown",this.onPlusKeyDown);this.plus.addEventListener("keyup",this.onPlusKeyUp);this.minus.addEventListener("mousedown",this.onMinusDown);document.addEventListener("mouseup",this.onMinusUp);this.minus.addEventListener("keydown",this.onMinusKeyDown);this.minus.addEventListener("keyup",this.onMinusKeyUp)}onInput(){let value=this.input.value;value=value.replace(/[^-.0-9]/g,"");this.input.value=value}onInputChange(){let value=parseFloat(this.input.value);value=this.roundValue(value);this.input.value=value;if(this.value!==value){this._value=value;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}decrement(){if(this.isDecrementing){const value=this.roundValue(this.value-1/Math.pow(10,this._decimals));if(this.value!==value){this.value=value;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}this.timeout=setTimeout(()=>this.decrement(),this.delay);if(this.delay===500){this.delay=50}}}increment(){if(this.isIncrementing){const value=this.roundValue(this.value+1/Math.pow(10,this._decimals));if(this.value!==value){this.value=value;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}this.timeout=setTimeout(()=>this.increment(),this.delay);if(this.delay===500){this.delay=50}}}onMinusDown(){clearTimeout(this.timeout);this.isDecrementing=true;this.delay=500;this.decrement()}onMinusUp(){this.isDecrementing=false}onMinusKeyDown(event){if(event.keyCode===13){this.onMinusDown()}}onMinusKeyUp(event){if(event.keyCode===13){this.onMinusUp()}}onPlusDown(){clearTimeout(this.timeout);this.isIncrementing=true;this.delay=500;this.increment()}onPlusUp(){this.isIncrementing=false}onPlusKeyDown(event){if(event.keyCode===13){this.onPlusDown()}}onPlusKeyUp(event){if(event.keyCode===13){this.onPlusUp()}}onWheel(event){event.preventDefault();const inc=1/Math.pow(10,this._decimals);if(event.deltaY>0){this.value+=inc;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}else if(event.deltaY<0){this.value-=inc;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}roundValue(value){if(this.max!==null){value=Math.min(value,this.max)}if(this.min!==null){value=Math.max(value,this.min)}const mult=Math.pow(10,this.decimals);return Math.round(value*mult)/mult}updateLabel(){if(this._textPosition==="left"){this.label.x=-this.label.width-5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="right"){this.label.x=this.width+5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="top"){this.label.x=0;this.label.y=-this.label.height-5}else{this.label.x=0;this.label.y=this.height+5}}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.input.disabled=!this.enabled;this.plus.enabled=this.enabled;this.minus.enabled=this.enabled;this.label.enabled=enabled;if(this.enabled){this.wrapper.addEventListener("wheel",this.onWheel)}else{this.wrapper.removeEventListener("wheel",this.onWheel)}}}get decimals(){return this._decimals}set decimals(decimals){this._decimals=decimals;const value=this.roundValue(this.value);if(this._value!==value){this._value=value;this.input.value=value;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}get height(){return super.height}set height(h){super.height=h;this.updateLabel()}get max(){return this._max}set max(max){this._max=max;if(this.max<this.value){this.value=this.max;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}get min(){return this._min}set min(min){this._min=min;if(this.min>this.value){this.value=this.min;this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateLabel()}get textPosition(){return this._textPosition}set textPosition(pos){this._textPosition=pos;this.updateLabel()}get value(){return this._value}set value(value){this._value=this.roundValue(value);this.input.value=this._value}get width(){return super.width}set width(w){super.width=w;this.input.style.width=w-40+"px";this.minus.x=w-40;this.plus.x=w-20}}customElements.define("minimal-numericstepper",NumericStepper);class Panel extends Component{constructor(parent,x,y,w,h){super(parent,x,y);w=w||window.innerWidth;h=h||window.innerHeight;this.createChildren();this.createStyle();this.setSize(w,h);this.addToParent()}createChildren(){this.setWrapperClass("MinimalPanel")}createStyle(){const style=document.createElement("style");style.textContent=Style.panel;this.shadowRoot.append(style)}get x(){return super.x}set x(x){this._x=x;this.style.marginLeft=x+"px"}get y(){return super.y}set y(y){this._y=y;this.style.marginTop=y+"px"}}customElements.define("minimal-panel",Panel);class ProgressBar extends Component{constructor(parent,x,y,progress,max){super(parent,x,y);this._progress=progress||0;this._max=max||100;this.createChildren();this.createStyle();this.setSize(100,15);this.updateBar();this.addToParent()}createChildren(){this.setWrapperClass("MinimalProgressBar");this.fill=this.createDiv(this.wrapper,"MinimalProgressBarFill")}createStyle(){const style=document.createElement("style");style.textContent=Style.progressbar;this.shadowRoot.append(style)}updateBar(){let percent=this.progress/this.max;percent=Math.max(0,percent);percent=Math.min(1,percent);this.fill.style.width=percent*this.width+"px"}get enabled(){return super.enbled}set enabled(enabled){super.enabled=enabled;if(this._enabled){this.setWrapperClass("MinimalProgressBar");this.fill.setAttribute("class","MinimalProgressBarFill")}else{this.setWrapperClass("MinimalProgressBarDisabled");this.fill.setAttribute("class","MinimalProgressBarFillDisabled")}}get max(){return this._max}set max(max){this._max=max;const progress=Math.min(this.progress,this.max);this.progress=Math.max(progress,0);this.updateBar()}get progress(){return this._progress}set progress(progress){progress=Math.min(progress,this.max);progress=Math.max(progress,0);this._progress=progress;this.updateBar()}}customElements.define("minimal-progressbar",ProgressBar);const RadioButtonGroup={};RadioButtonGroup.groups={};RadioButtonGroup.getValueForGroup=group=>{const rbGroup=RadioButtonGroup.groups[group];if(!rbGroup){return null}for(let i=0;i<rbGroup.length;i++){const rb=rbGroup[i];if(rb.checked){return rb.text}}return null};RadioButtonGroup.clearGroup=group=>{const rbGroup=RadioButtonGroup.groups[group];if(!rbGroup){return}for(let i=0;i<rbGroup.length;i++){const rb=rbGroup[i];rb.checked=false}};RadioButtonGroup.addToGroup=(group,rb)=>{if(!RadioButtonGroup.groups[group]){RadioButtonGroup.groups[group]=[]}RadioButtonGroup.groups[group].push(rb)};RadioButtonGroup.getNextInGroup=(group,rb)=>{const g=RadioButtonGroup.groups[group];const index=g.indexOf(rb);let result;if(index>=g.length-1){result=g[0]}else{result=g[index+1]}if(result.enabled){return result}return RadioButtonGroup.getNextInGroup(group,result)};RadioButtonGroup.getPrevInGroup=(group,rb)=>{const g=RadioButtonGroup.groups[group];const index=g.indexOf(rb);let result;if(index<=0){result=g[g.length-1]}else{result=g[index-1]}if(result.enabled){return result}return RadioButtonGroup.getPrevInGroup(group,result)};class RadioButton extends Component{constructor(parent,x,y,group,text,checked,defaultHandler){super(parent,x,y);RadioButtonGroup.addToGroup(group,this);this.group=group||"group";this._text=text||"";this.createStyle();this.createChildren();this.createListeners();this.setSize(100,10);this.checked=checked||false;this.addEventListener("click",defaultHandler);this.addToParent();this.updateWidth()}createChildren(){this.setWrapperClass("MinimalRadioButton");this.wrapper.tabIndex=0;this.check=this.createDiv(this.wrapper,"MinimalRadioButtonCheck");this.label=new Label(this.wrapper,15,0,this.text)}createStyle(){const style=document.createElement("style");style.textContent=Style.radiobutton;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.wrapper.addEventListener("click",this.onClick);this.wrapper.addEventListener("keydown",this.onKeyPress)}onClick(event){event.stopPropagation();if(this.enabled){this.checked=true;this.dispatchEvent(new CustomEvent("click",{detail:this.text}))}}onKeyPress(event){if(event.keyCode===13&&this.enabled){this.wrapper.click()}else if(event.keyCode===40){event.preventDefault();RadioButtonGroup.getNextInGroup(this.group,this).focus()}else if(event.keyCode===38){event.preventDefault();RadioButtonGroup.getPrevInGroup(this.group,this).focus()}}focus(){if(this.enabled){this.wrapper.focus()}}updateCheckStyle(){let className=this.checked?"MinimalRadioButtonCheckChecked ":"MinimalRadioButtonCheck ";if(!this.enabled){className+="MinimalRadioButtonCheckDisabled"}this.check.setAttribute("class",className);this.check.setAttribute("class",className);if(this.enabled){this.setWrapperClass("MinimalRadioButton")}else{this.setWrapperClass("MinimalRadioButtonDisabled")}}updateWidth(){this.style.width=this.label.x+this.label.width+"px"}get height(){return super.height}set height(h){super.height=h;this.label.height=h;this.check.style.top=Math.round((this.height-10)/2)+"px"}get checked(){return this._checked}set checked(checked){if(checked){RadioButtonGroup.clearGroup(this.group)}this._checked=checked;this.updateCheckStyle()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.updateCheckStyle();this.label.enabled=enabled;if(this.enabled){this.wrapper.tabIndex=0}else{this.wrapper.tabIndex=-1}}}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateWidth()}get width(){return this.label.x+this.label.width}set width(w){}}customElements.define("minimal-radiobutton",RadioButton);class TextArea extends Component{constructor(parent,x,y,text,defaultHandler){super(parent,x,y);this._text=text||"";this.createStyle();this.createChildren();this.createListeners();this.setSize(100,100);this.addEventListener("input",defaultHandler);this.addToParent()}createChildren(){this.textArea=this.createElement(this.shadowRoot,"textArea","MinimalTextArea");this.textArea.value=this._text}createStyle(){const style=document.createElement("style");style.textContent=Style.textarea;this.shadowRoot.append(style)}createListeners(){this.onInput=this.onInput.bind(this);this.textArea.addEventListener("input",this.onInput)}onInput(){this._text=this.textArea.value;this.dispatchEvent(new CustomEvent("input",{detail:this.text}))}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.textArea.disabled=!this.enabled;if(this.enabled){this.textArea.addEventListener("input",this.onInput)}else{this.textArea.removeEventListener("input",this.onInput)}}}get text(){return this._text}set text(text){this._text=text;this.textArea.value=text}}customElements.define("minimal-textarea",TextArea);class TextBox extends Component{constructor(parent,x,y,text){super(parent,x,y);this._align="left";this._color="#333";this._bold=false;this._italic=false;this._html=false;this._text=text||"";this.createChildren();this.createStyle();this.setSize(100,100);this.addToParent()}createChildren(){this.setWrapperClass("MinimalTextBox");this.wrapper.textContent=this._text}createStyle(){const style=document.createElement("style");style.textContent=Style.textbox;this.shadowRoot.append(style)}get align(){return this._align}set align(align){this._align=align;this.wrapper.style.textAlign=align}get bold(){return this._bold}set bold(bold){this._bold=bold;if(this._bold){this.wrapper.style.fontWeight="bold"}else{this.wrapper.style.fontWeight="normal"}}get color(){return this._color}set color(color){this._color=color;this.wrapper.style.color=color}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;if(this.enabled){this.setWrapperClass("MinimalTextBox")}else{this.setWrapperClass("MinimalTextBoxDisabled")}}get fontSize(){return this._fontSize}set fontSize(fontSize){this._fontSize=fontSize;this.wrapper.style.fontSize=fontSize+"px"}get html(){return this._html}set html(html){this._html=html;if(this._html){this.wrapper.innerHTML=this._text}else{this.wrapper.textContent=this._text}}get italic(){return this._italics}set italic(italic){this._italic=italic;if(this._italic){this.wrapper.style.fontStyle="italic"}else{this.wrapper.style.fontStyle="normal"}}get text(){return this._text}set text(text){this._text=text;if(this._html){this.wrapper.innerHTML=this._text}else{this.wrapper.textContent=this._text}}}customElements.define("minimal-textbox",TextBox);class TextInput extends Component{constructor(parent,x,y,text,defaultHandler){super(parent,x,y);this._maxLength=0;this._text=text||"";this.createStyle();this.createChildren();this.createListeners();this.setSize(100,20);this.addEventListener("input",defaultHandler);this.addToParent()}createChildren(){this.input=this.createInput(this.shadowRoot,"MinimalTextInput");this.input.value=this._text}createStyle(){const style=document.createElement("style");style.textContent=Style.textinput;this.shadowRoot.append(style)}createListeners(){this.onInput=this.onInput.bind(this);this.input.addEventListener("input",this.onInput)}onInput(){this._text=this.input.value;this.dispatchEvent(new CustomEvent("input",{detail:this.text}))}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.input.disabled=!this.enabled;if(this.enabled){this.input.addEventListener("input",this.onInput)}else{this.input.removeEventListener("input",this.onInput)}}}get maxLength(){return this._maxLength}set maxLength(maxLength){this._maxLength=maxLength;this.input.maxLength=maxLength}get text(){return this._text}set text(text){this._text=text;this.input.value=text}}customElements.define("minimal-textinput",TextInput);class Toggle extends Component{constructor(parent,x,y,text,toggled,defaultHandler){super(parent,x,y);this._text=text;this._textPosition="top";this.createChildren();this.createStyle();this.createListeners();this.setSize(50,20);this.toggled=toggled||false;this.updateLabel();this.addEventListener("click",defaultHandler);this.addToParent()}createChildren(){this.setWrapperClass("MinimalToggle");this.wrapper.tabIndex=0;this.label=new Label(this.wrapper,0,-15,this._text);this.handle=this.createDiv(this.wrapper,"MinimalToggleHandle")}createStyle(){const style=document.createElement("style");style.textContent=Style.toggle;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.wrapper.addEventListener("click",this.onClick);this.wrapper.addEventListener("keypress",this.onKeyPress)}onClick(event){event.stopPropagation();if(this.enabled){this.toggle();this.dispatchEvent(new CustomEvent("click",{detail:this.toggled}))}}onKeyPress(event){if(event.keyCode===13&&this.enabled){this.wrapper.click()}}toggle(){this.toggled=!this.toggled;this.updateToggle()}updateLabel(){if(this._textPosition==="left"){this.label.x=-this.label.width-5;this.label.y=(this.height-this.label.height)/2}else if(this._textPosition==="top"){this.label.x=0;this.label.y=-this.label.height-5}else if(this._textPosition==="right"){this.label.x=this.width+5;this.label.y=(this.height-this.label.height)/2}else{this.label.x=0;this.label.y=this.height+5}}updateToggle(){if(this.toggled){this.handle.style.left="50%"}else{this.handle.style.left=0}}get toggled(){return this._toggled}set toggled(toggled){this._toggled=toggled;this.updateToggle()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!==enabled){super.enabled=enabled;this.label.enable=enabled;if(this.enabled){this.setWrapperClass("MinimalToggle");this.wrapper.tabIndex=0}else{this.setWrapperClass("MinimalToggleDisabled");this.wrapper.tabIndex=-1}}}get text(){return this._text}set text(text){this._text=text;this.label.text=text;this.updateLabel()}get textPosition(){return this._textPosition}set textPosition(pos){this._textPosition=pos;this.updateLabel()}}customElements.define("minimal-toggle",Toggle);class VBox extends Component{constructor(parent,x,y,spacing){super(parent,x,y);this.spacing=spacing||0;this.xpos=0;this.ypos=0;this.createChildren();this.setSize(0,0);this.addToParent()}createChildren(){this.setWrapperClass("MinimalVbox")}appendChild(child){super.appendChild(child);if(this.ypos>0){this.ypos+=this.spacing}child.y=this.ypos;this.width=Math.max(this.width,child.x+child.width);this.ypos+=child.height;this.height=this.ypos}}customElements.define("minimal-vbox",VBox);class VSlider extends HSlider{constructor(parent,x,y,text,value,min,max,defaultHandler){super(parent,x,y,text,value,min,max,defaultHandler)}createStyle(){const style=document.createElement("style");style.textContent=Style.vslider;this.shadowRoot.append(style);this.handleSize=Defaults.vslider.handleSize}onMouseDown(event){let mouseY;if(event.changedTouches){event.preventDefault();this.wrapper.focus();mouseY=event.changedTouches[0].clientY}else{mouseY=event.clientY}this.offsetY=mouseY-this.getBoundingClientRect().top-this.handle.offsetTop;if(this.offsetY<0||this.offsetY>this.handleSize){this.offsetY=this.handleSize/2;const y=mouseY-this.getBoundingClientRect().top-this.handleSize/2;this.calculateValueFromPos(y)}document.addEventListener("mousemove",this.onMouseMove);document.addEventListener("touchmove",this.onMouseMove);document.addEventListener("mouseup",this.onMouseUp);document.addEventListener("touchend",this.onMouseUp)}onMouseMove(event){let mouseY;if(event.changedTouches){mouseY=event.changedTouches[0].clientY}else{mouseY=event.clientY}const y=mouseY-this.getBoundingClientRect().top-this.offsetY;this.calculateValueFromPos(y)}calculateValueFromPos(y){let percent=1-y/(this.height-this.handleSize);if(this.reversed){percent=1-percent}const value=this.min+(this.max-this.min)*percent;this.updateValue(value)}setDefaults(){this._decimals=Defaults.vslider.decimals;this._handleSize=Defaults.vslider.handleSize}updateHandlePosition(){let percent=(this.value-this.min)/(this.max-this.min);if(this.reversed){percent=1-percent}percent=Math.max(0,percent);percent=Math.min(1,percent);this.handle.style.top=this.height-this.handleSize-percent*(this.height-this._handleSize)+"px"}updateLabelPosition(){this.label.x=-(this.label.width-this.width)/2;this.label.y=-this.label.height-5}updateValueLabelPosition(){this.valueLabel.x=-(this.valueLabel.width-this.width)/2;this.valueLabel.y=this.height+5}setSliderSize(){this.setSize(Defaults.vslider.width,Defaults.vslider.height)}updateValue(value){super.updateValue(value);this.updateValueLabelPosition()}get handleSize(){return this._handleSize}set handleSize(handleSize){this._handleSize=handleSize;this.handle.style.height=handleSize+"px";this.updateHandlePosition()}get height(){return super.height}set height(height){super.height=height;this.updateLabelPosition();this.updateHandlePosition()}get width(){return super.width}set width(width){super.width=width;this.updateLabelPosition();this.updateHandlePosition()}}customElements.define("minimal-vslider",VSlider);class Window extends Component{constructor(parent,text,x,y,w,h){super(parent,x,y);w=w||400;h=h||400;this._text=text;this._draggable=true;this._minimizable=true;this.minimized=false;this.createChildren();this.createStyle();this.createListeners();this.setSize(w,h);this.addToParent()}createChildren(){this.setWrapperClass("MinimalWindow");this.titleBar=this.createDiv(this.wrapper,"MinimalWindowTitleBar");this.label=new Label(this.titleBar,5,0,this._text);this.label.height=30;this.button=this.createDiv(this.titleBar,"MinimalWindowButton");this.content=this.createDiv(this.wrapper,"MinimalWindowContent");this.content.appendChild(document.createElement("slot"))}createStyle(){const style=document.createElement("style");style.textContent=Style.window;this.shadowRoot.append(style)}createWrapper(){this.wrapper=this.createDiv(null,"MinimalWrapper");this.shadowRoot.appendChild(this.wrapper)}createListeners(){this.onMouseDown=this.onMouseDown.bind(this);this.onMouseUp=this.onMouseUp.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.onMinimize=this.onMinimize.bind(this);this.titleBar.addEventListener("mousedown",this.onMouseDown);this.titleBar.addEventListener("touchstart",this.onMouseDown);this.button.addEventListener("click",this.onMinimize)}onMouseDown(event){this.style.zIndex=1e6;let mouseX;let mouseY;if(event.changedTouches){event.preventDefault();mouseX=event.changedTouches[0].clientX;mouseY=event.changedTouches[0].clientY}else{mouseX=event.clientX;mouseY=event.clientY}this.offsetX=mouseX-this.getBoundingClientRect().left;this.offsetY=mouseY-this.getBoundingClientRect().top;document.addEventListener("mousemove",this.onMouseMove);document.addEventListener("touchmove",this.onMouseMove);document.addEventListener("mouseup",this.onMouseUp);document.addEventListener("touchend",this.onMouseUp)}onMouseMove(event){let mouseX;let mouseY;if(event.changedTouches){mouseX=event.changedTouches[0].clientX;mouseY=event.changedTouches[0].clientY}else{mouseX=event.clientX;mouseY=event.clientY}const x=mouseX-this.offsetParent.getBoundingClientRect().left-this.offsetX;const y=mouseY-this.offsetParent.getBoundingClientRect().top-this.offsetY;this.move(x,y)}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("touchmove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp);document.removeEventListener("touchend",this.onMouseUp)}onMinimize(){this.minimized=!this.minimized;if(this.minimized){super.height=30}else{super.height=this._openHeight}}get draggable(){return this._draggable}set draggable(draggable){if(this._draggable!==draggable){this._draggable=draggable;if(draggable){this.titleBar.style.cursor="pointer";this.titleBar.addEventListener("mousedown",this.onMouseDown);this.titleBar.addEventListener("touchstart",this.onMouseDown)}else{this.titleBar.style.cursor="default";this.titleBar.removeEventListener("mousedown",this.onMouseDown);this.titleBar.removeEventListener("touchstart",this.onMouseDown)}}}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled===enabled){return}super.enabled=enabled;if(this.enabled){this.minimized=true;this.onMinimize();this.minimizable=this.enabledMinimizable;this.draggable=this.enabledDraggable;this.wrapper.setAttribute("class","MinimalWindow")}else{this.minimized=false;this.onMinimize();this.enabledMinimizable=this.minimizable;this.enabledDraggable=this.draggable;this.minimizable=false;this.draggable=false;this.wrapper.setAttribute("class","MinimalWindowDisabled")}}get height(){return super.height}set height(h){super.height=h;this._openHeight=h;this.content.style.height=h-30+"px"}get minimizable(){return this._minimizable}set minimizable(minimizable){this._minimizable=minimizable;if(minimizable){this.button.style.visibility="visible"}else{this.button.style.visibility="hidden"}}get text(){return this._text}set text(text){this._text=text;this.label.text=text}get width(){return super.width}set width(w){super.width=w;this.titleBar.style.width=w+"px";this.content.style.width=w+"px"}}customElements.define("minimal-window",Window);const version="1.3.0";export{Button,Canvas,Checkbox,ColorPicker,Component,Defaults,Dropdown,HBox,HSlider,Image,Knob,LED,Label,NumericStepper,Panel,ProgressBar,RadioButton,RadioButtonGroup,Style,TextArea,TextBox,TextInput,Toggle,VBox,VSlider,Window,version};