export class Component extends HTMLElement{constructor(parent,x,y){super();x=x||0;y=y||0;this._enabled=true;this.attachShadow({mode:"open"});this.style.position="absolute";this.move(x,y);if(!parent){return}if(parent instanceof Panel){parent.addChild(this)}else{parent.appendChild(this)}}move(x,y){this.x=x;this.y=y}setSize(w,h){this.width=w;this.height=h}get enabled(){return this._enabled}set enabled(enabled){this._enabled=enabled}get height(){return this._height}set height(h){this._height=h;this.style.height=h+"px"}get width(){return this._width}set width(w){this._width=w;this.style.width=w+"px"}get x(){return this._x}set x(x){this._x=x;this.style.left=x+"px"}get y(){return this._y}set y(y){this._y=y;this.style.top=y+"px"}}customElements.define("minimal-component",Component);export class Button extends Component{constructor(parent,x,y,text,defaultHandler){super(parent,x,y);this._text=text;this.createChildren();this.createStyle();this.createListeners();this.setSize(100,20);this.addEventListener("click",defaultHandler)}createChildren(){this.button=document.createElement("div");this.button.setAttribute("class","MinimalButton");this.button.tabIndex=0;this.label=document.createElement("div");this.label.textContent=this._text;this.label.setAttribute("class","MinimalButtonLabel");this.button.appendChild(this.label);this.shadowRoot.append(this.button)}createStyle(){const style=document.createElement("style");style.textContent=`
      .MinimalButtonLabel {
        ${Style.baseStyle}
        color: #333;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        user-select: none;
        white-space: nowrap;
        width: 100%;
      }
      .MinimalButton,
      .MinimalButtonDisabled {
        ${Style.baseStyle}
        background-color: #eee;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        width: 100%;
      }
      .MinimalButton:hover {
        background-color: #fff;
      }
      .MinimalButton:active {
        background-color: #ccc;
      }
      .MinimalButtonDisabled {
        ${Style.disabledStyle}
      }
      .MinimalButton:focus {
        ${Style.focusStyle}
      }
    `;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.button.addEventListener("click",this.onClick);this.button.addEventListener("keypress",this.onKeyPress)}onClick(event){event.stopPropagation();if(this.enabled){this.dispatchEvent(new Event("click"))}}onKeyPress(event){if(event.keyCode==13&&this.enabled){this.click()}}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;if(this.enabled){this.button.setAttribute("class","MinimalButton");this.button.tabIndex=0}else{this.button.setAttribute("class","MinimalButtonDisabled");this.button.tabIndex=-1}this.button.enabled=enabled}get text(){return this._text}set text(text){this._text=text;this.label.textContent=text}}customElements.define("minimal-button",Button);export class Checkbox extends Component{constructor(parent,x,y,text,checked,defaultHandler){super(parent,x,y);this._text=text;this.createChildren();this.createStyle();this.createListeners();this.setSize(100,10);this.checked=checked;this.addEventListener("click",defaultHandler)}createChildren(){this.wrapper=document.createElement("div");this.wrapper.setAttribute("class","MinimalCheckbox");this.wrapper.tabIndex=0;this.check=document.createElement("div");this.check.setAttribute("class","MinimalCheckboxCheck");this.wrapper.appendChild(this.check);this.label=new Label(this.wrapper,15,0,this._text);this.shadowRoot.append(this.wrapper)}createStyle(){const style=document.createElement("style");style.textContent=`
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
    `;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.wrapper.addEventListener("click",this.onClick);this.addEventListener("keypress",this.onKeyPress)}onClick(event){event.stopPropagation();if(this.enabled){this.toggle();this.dispatchEvent(new Event("click"))}}onKeyPress(event){if(event.keyCode==13&&this.enabled){this.wrapper.click()}}toggle(){this.checked=!this.checked}updateCheckStyle(){let className=this.checked?"MinimalCheckboxCheckChecked ":"MinimalCheckboxCheck ";if(!this.enabled){className+="MinimalCheckboxCheckDisabled"}this.check.setAttribute("class",className)}get checked(){return this._checked}set checked(checked){this._checked=checked;this.updateCheckStyle()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!=enabled){super.enabled=enabled;this.updateCheckStyle();this.label.enabled=enabled;if(this.enabled){this.wrapper.tabIndex=0}else{this.wrapper.tabIndex=-1}}}get text(){return this._text}set text(text){this._text=text;this.label.text=text}}customElements.define("minimal-checkbox",Checkbox);export class HSlider extends Component{constructor(parent,x,y,value,min,max,defaultHandler){super(parent,x,y);this._min=min;this._max=max;this._decimals=1;this._value=this.roundValue(value);this._handleSize=10;this._labelWidth=100;this.createChildren();this.createStyle();this.createListeners();this.updateSliderSize(100,this.handleSize);this.updateHandlePosition();this.addEventListener("change",defaultHandler)}createChildren(){this.slider=document.createElement("div");this.slider.setAttribute("class","MinimalSlider");this.slider.tabIndex=0;this.handle=document.createElement("div");this.handle.setAttribute("class","MinimalSliderHandle");this.slider.appendChild(this.handle);this.shadowRoot.append(this.slider)}createStyle(){const style=document.createElement("style");style.textContent=`
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
      }
      .MinimalSliderHandle {
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
        width: ${this.handleSize}px;
        cursor: pointer;
      }
      .MinimalSliderHandleDisabled {
        ${Style.disabledStyle}
      }
      .MinimalSlider:focus {
        ${Style.focusStyle}
      }
      .MinimalSliderLabel {
        ${Style.baseStyle}
        color: #333;
        white-space: nowrap;
        text-align: right;
        overflow: hidden;
        user-select: none;        
      }
      .MinimalSliderLabelDisabled {
        ${Style.disabledStyle}
      } 
    `;this.shadowRoot.append(style)}createListeners(){this.onMouseDown=this.onMouseDown.bind(this);this.onMouseMove=this.onMouseMove.bind(this);this.onMouseUp=this.onMouseUp.bind(this);this.onKeyDown=this.onKeyDown.bind(this);this.addEventListener("mousedown",this.onMouseDown);this.addEventListener("keydown",this.onKeyDown)}onMouseDown(event){this.offsetX=event.clientX-this.getBoundingClientRect().left-this.handle.offsetLeft;if(this.offsetX<0||this.offsetX>this.handleSize){this.offsetX=this.handleSize/2;let x=event.clientX-this.getBoundingClientRect().left-this.handleSize/2;this.calculateValueFromPos(x)}document.addEventListener("mousemove",this.onMouseMove);document.addEventListener("mouseup",this.onMouseUp)}onMouseMove(event){let x=event.clientX-this.getBoundingClientRect().left-this.offsetX;this.calculateValueFromPos(x)}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp)}onKeyDown(event){const inc=1/Math.pow(10,this._decimals);let value=this.value;switch(event.keyCode){case 37:case 40:value-=inc;break;case 38:case 39:value+=inc;break;default:break}this.updateValue(value)}addLabels(text){if(!this.label){this.label=document.createElement("div");this.label.setAttribute("class","MinimalSliderLabel");this.shadowRoot.append(this.label);this.label.textContent=text}if(!this.valueLabel){this.valueLabel=document.createElement("div");this.valueLabel.setAttribute("class","MinimalSliderLabel");this.valueLabel.textContent=this.value;this.shadowRoot.append(this.valueLabel)}this.updateLabelStyles()}calculateValueFromPos(x){const percent=x/(this.width-this.handleSize);const value=this.min+(this.max-this.min)*percent;this.updateValue(value)}roundValue(value){value=Math.min(value,this.max);value=Math.max(value,this.min);const mult=Math.pow(10,this.decimals);return Math.round(value*mult)/mult}updateHandlePosition(){let percent=(this.value-this.min)/(this.max-this.min);percent=Math.max(0,percent);percent=Math.min(1,percent);this.handle.style.left=percent*(this.width-this._handleSize)+"px"}updateEnabledStyle(){if(this.enabled){this.label&&this.label.setAttribute("class","MinimalSliderLabel");this.valueLabel&&this.valueLabel.setAttribute("class","MinimalSliderLabel");this.slider.setAttribute("class","MinimalSlider");this.handle.setAttribute("class","MinimalSliderHandle")}else{this.label&&this.label.setAttribute("class","MinimalSliderLabel MinimalSliderLabelDisabled");this.valueLabel&&this.valueLabel.setAttribute("class","MinimalSliderLabel MinimalSliderLabelDisabled");this.slider.setAttribute("class","MinimalSlider MinimalSliderDisabled");this.handle.setAttribute("class","MinimalSliderHandle MinimalSliderHandleDisabled")}}updateLabelStyles(){if(this.label){this.label.style.left=-this._labelWidth-5+"px";this.label.style.top=Math.round(this.height/2-6)+"px"}if(this.valueLabel){this.label.style.width=this._labelWidth+"px";this.valueLabel.style.left=this.width+5+"px";this.valueLabel.style.top=Math.round(this.height/2-6)+"px"}}updateSliderSize(w,h){this.setSize(w,h)}updateValue(value){value=this.roundValue(value);if(this._value!=value){this._value=value;this.updateHandlePosition();this.updateValueLabel();this.dispatchEvent(new Event("change"))}}updateValueLabel(){if(this.valueLabel){this.valueLabel.textContent=this.value}}get decimals(){return this._decimals}set decimals(decimals){this._decimals=decimals;this._value=this.roundValue(this._value);this.updateValueLabel()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!=enabled){super.enabled=enabled;this.updateEnabledStyle();if(this.enabled){this.slider.tabIndex=0;this.addEventListener("mousedown",this.onMouseDown);this.addEventListener("keydown",this.onKeyDown)}else{console.log("removing");this.slider.tabIndex=-1;this.removeEventListener("mousedown",this.onMouseDown);this.removeEventListener("keydown",this.onKeyDown);document.removeEventListener("mousemove",this.onMouseMove);document.removeEventListener("mouseup",this.onMouseUp)}}}get handleSize(){return this._handleSize}set handleSize(handleSize){this._handleSize=handleSize;this.handle.style.width=handleSize+"px";this.updateHandlePosition()}get height(){return super.height}set height(height){super.height=height;this.updateLabelStyles()}get labelWidth(){return this._labelWidth}set labelWidth(labelWidth){this._labelWidth=labelWidth;this.updateLabelStyles()}get max(){return this._max}set max(max){this._max=max;if(this.max<this.value){this.updateValue(this.value)}else{this.updateHandlePosition()}}get min(){return this._min}set min(min){this._min=min;if(this.min>this.value){this.updateValue(this.value)}else{this.updateHandlePosition()}}get value(){return this._value}set value(value){this.updateValue(value)}get width(){return super.width}set width(width){super.width=width;this.updateLabelStyles();this.updateHandlePosition()}}customElements.define("minimal-hslider",HSlider);export class Label extends Component{constructor(parent,x,y,text){super(parent,x,y);this._text=text;this.createChildren();this.createStyle()}createChildren(){this._text=this._text;this.label=document.createElement("div");this.label.textContent=this._text;this.label.setAttribute("class","MinimalLabel");this.shadowRoot.append(this.label)}createStyle(){const style=document.createElement("style");style.textContent=`
      .MinimalLabel {
        ${Style.baseStyle}
        white-space: nowrap;
        color: #333;
        user-select: none;
      }
      .MinimalLabelDisabled {
        ${Style.disabledStyle}
      }
    `;this.shadowRoot.append(style)}get enabled(){return super.enabled}set enabled(enabled){super.enabled=enabled;if(this.enabled){this.label.setAttribute("class","MinimalLabel")}else{this.label.setAttribute("class","MinimalLabel MinimalLabelDisabled")}}get text(){return this._text}set text(text){this._text=text;this.label.textContent=text}get width(){return this.label.offsetWidth}}customElements.define("minimal-label",Label);export class Panel extends Component{constructor(parent,x,y,w,h){super(parent,x,y);w=w||window.innerWidth;h=h||window.innerHeight;this.createChildren();this.createStyle();this.setSize(w,h)}createChildren(){const panel=document.createElement("div");panel.setAttribute("class","MinimalPanel");this.shadowRoot.append(panel)}createStyle(){const style=document.createElement("style");style.textContent=`
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
      `;this.shadowRoot.append(style)}addChild(child){this.shadowRoot.append(child)}}customElements.define("minimal-panel",Panel);export class ProgressBar extends Component{constructor(parent,x,y,progress,max){super(parent,x,y);this._progress=progress;this._max=max;this.createChildren();this.createStyle();this.setSize(100,10);this.updateBar()}createChildren(){this.bar=document.createElement("div");this.bar.setAttribute("class","MinimalProgressBar");this.fill=document.createElement("div");this.fill.setAttribute("class","MinimalProgressBarFill");this.bar.appendChild(this.fill);this.shadowRoot.append(this.bar)}createStyle(){const style=document.createElement("style");style.textContent=`
      .MinimalProgressBar {
        ${Style.baseStyle}
        ${Style.shadowStyle}
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
    `;this.shadowRoot.append(style)}updateBar(){let percent=this.progress/this.max;percent=Math.max(0,percent);percent=Math.min(1,percent);this.fill.style.width=percent*this.width+"px"}get max(){return this._max}set max(max){this._max=max;let progress=Math.min(this.progress,this.max);this.progress=Math.max(progress,0);this.updateBar()}get progress(){return this._progress}set progress(progress){progress=Math.min(progress,this.max);progress=Math.max(progress,0);this._progress=progress;this.updateBar()}}customElements.define("minimal-progressbar",ProgressBar);export class RadioButton extends Component{constructor(parent,x,y,group,text,checked,defaultHandler){super(parent,x,y);RadioButtonGroup.addToGroup(group,this);this._group=group;this._text=text;this.createStyle();this.createChildren();this.createListeners();this.setSize(100,10);this.checked=checked;this.addEventListener("click",defaultHandler)}createChildren(){this.wrapper=document.createElement("div");this.wrapper.setAttribute("class","MinimalRadioButton");this.wrapper.tabIndex=0;this.check=document.createElement("div");this.check.setAttribute("class","MinimalRadioButtonCheck");this.wrapper.appendChild(this.check);this.label=new Label(this.wrapper,15,0,this.text);this.shadowRoot.append(this.wrapper)}createStyle(){const style=document.createElement("style");style.textContent=`
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
    `;this.shadowRoot.append(style)}createListeners(){this.onClick=this.onClick.bind(this);this.onKeyPress=this.onKeyPress.bind(this);this.wrapper.addEventListener("click",this.onClick);this.wrapper.addEventListener("keypress",this.onKeyPress)}onClick(event){event.stopPropagation();if(this.enabled){this.checked=true;this.dispatchEvent(new Event("click"))}}onKeyPress(event){if(event.keyCode==13&&this.enabled){this.wrapper.click()}}updateCheckStyle(){let className=this.checked?"MinimalRadioButtonCheckChecked ":"MinimalRadioButtonCheck ";if(!this.enabled){className+="MinimalRadioButtonCheckDisabled"}this.check.setAttribute("class",className)}get checked(){return this._checked}set checked(checked){if(checked){RadioButtonGroup.clearGroup(this._group)}this._checked=checked;this.updateCheckStyle()}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!=enabled){super.enabled=enabled;this.updateCheckStyle();this.label.enabled=enabled;if(this.enabled){this.wrapper.tabIndex=0}else{this.wrapper.tabIndex=-1}}}get text(){return this._text}set text(text){this._text=text;this.label.text=text}}customElements.define("minimal-radiobutton",RadioButton);export class RadioButtonGroup{static groups={};static getValueForGroup(group){const rbGroup=RadioButtonGroup.groups[group];if(!rbGroup){return null}for(let i=0;i<rbGroup.length;i++){const rb=rbGroup[i];if(rb.checked){return rb.text}}return null}static clearGroup(group){const rbGroup=RadioButtonGroup.groups[group];if(!rbGroup){return}for(let i=0;i<rbGroup.length;i++){const rb=rbGroup[i];rb.checked=false}}static addToGroup(group,rb){if(!RadioButtonGroup.groups[group]){RadioButtonGroup.groups[group]=[]}RadioButtonGroup.groups[group].push(rb)}}export class Style{static baseStyle=`
    box-sizing: border-box;
    position: absolute;
    font: 10px sans-serif;
  `;static disabledStyle=` 
    cursor: default;
    opacity: 0.5;
    user-select: none;
  `;static focusStyle=`
    outline: 1px solid #ccc;
    outline-offset: 2px;
  `;static shadowStyle=`
    box-shadow: inset 1px 1px 2px #808080;
  `;static textStyle=`
    background-color: #fff;
    border: none;
    color: #333;
    overflow: hidden;
    height: 100%;
    width: 100%;
  `;static textSelectionStyle=`
    background: #666;
    color: #fff;
  `}export class TextArea extends Component{constructor(parent,x,y,text,defaultHandler){super(parent,x,y);this._text=text;this._defaultHandler=defaultHandler;this.createStyle();this.createChildren();this.createListeners();this.setSize(100,100);this.addEventListener("input",defaultHandler)}createChildren(){this.textArea=document.createElement("textArea");this.textArea.setAttribute("class","MinimalTextArea");this.textArea.value=this._text;this.shadowRoot.append(this.textArea)}createStyle(){const style=document.createElement("style");style.textContent=`
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
    `;this.shadowRoot.append(style)}createListeners(){this.onInput=this.onInput.bind(this);this.textArea.addEventListener("input",this.onInput)}onInput(){this._text=this.textArea.value;this.dispatchEvent(new Event("input"))}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!=enabled){super.enabled=enabled;this.textArea.disabled=!this.enabled;if(this.enabled){this.textArea.addEventListener("input",this.onInput)}else{this.textArea.removeEventListener("input",this.onInput)}}}get text(){return this._text}set text(text){this._text=text;this.textArea.value=text}}customElements.define("minimal-textarea",TextArea);export class TextInput extends Component{constructor(parent,x,y,text,defaultHandler){super(parent,x,y);this._text=text;this._defaultHandler=defaultHandler;this.createStyle();this.createChildren();this.createListeners();this.setSize(100,20);this.addEventListener("input",defaultHandler)}createChildren(){this.input=document.createElement("input");this.input.setAttribute("type","text");this.input.setAttribute("class","MinimalTextInput");this.input.value=this._text;this.shadowRoot.append(this.input)}createStyle(){const style=document.createElement("style");style.textContent=`
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
    `;this.shadowRoot.append(style)}createListeners(){this.onInput=this.onInput.bind(this);this.input.addEventListener("input",this.onInput)}onInput(){this._text=this.input.value;this.dispatchEvent(new Event("input"))}get enabled(){return super.enabled}set enabled(enabled){if(this.enabled!=enabled){super.enabled=enabled;this.input.disabled=!this.enabled;if(this.enabled){this.input.addEventListener("input",this.onInput)}else{this.input.removeEventListener("input",this.onInput)}}}get text(){return this._text}set text(text){this._text=text;this.input.value=text}}customElements.define("minimal-textinput",TextInput);export class VSlider extends HSlider{createStyle(){const style=document.createElement("style");style.textContent=`
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
      }
      .MinimalSliderHandle {
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: ${this.handleSize}px;
        width: 100%;
        cursor: pointer;
      }
      .MinimalSliderHandleDisabled {
        ${Style.disabledStyle}
      }
      .MinimalSlider:focus {
        ${Style.focusStyle}
      }
      .MinimalSliderLabel {
        ${Style.baseStyle}
        color: #333;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        user-select: none;
      }
      .MinimalSliderLabelDisabled {
        ${Style.disabledStyle}
      } 
    `;this.shadowRoot.append(style)}onMouseDown(event){this.offsetY=event.clientY-this.getBoundingClientRect().top-this.handle.offsetTop;if(this.offsetY<0||this.offsetY>this.handleSize){this.offsetY=this.handleSize/2;let y=event.clientY-this.getBoundingClientRect().top-this.handleSize/2;this.calculateValueFromPos(y)}document.addEventListener("mousemove",this.onMouseMove);document.addEventListener("mouseup",this.onMouseUp)}onMouseMove(event){let y=event.clientY-this.getBoundingClientRect().top-this.offsetY;this.calculateValueFromPos(y)}calculateValueFromPos(y){const percent=1-y/(this.height-this.handleSize);const value=this.min+(this.max-this.min)*percent;this.updateValue(value)}updateHandlePosition(){let percent=(this.value-this.min)/(this.max-this.min);percent=Math.max(0,percent);percent=Math.min(1,percent);this.handle.style.top=this.height-this.handleSize-percent*(this.height-this._handleSize)+"px"}updateLabelStyles(){if(this.label){this.label.style.left=(-this._labelWidth+this.width)/2+"px";this.label.style.top="-15px";this.label.style.width=this._labelWidth+"px"}if(this.valueLabel){this.valueLabel.style.width=this._labelWidth+"px";this.valueLabel.style.left=(-this._labelWidth+this.width)/2+"px";this.valueLabel.style.top=this.height+5+"px"}}updateSliderSize(w,h){this.setSize(h,w)}get handleSize(){return this._handleSize}set handleSize(handleSize){this._handleSize=handleSize;this.handle.style.height=handleSize+"px";this.updateHandlePosition()}}customElements.define("minimal-vslider",VSlider);