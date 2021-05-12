var mc2 = (function (exports) {
  'use strict';

  class Component extends HTMLElement {
    constructor(parent, x, y) {
      super();
      x = x || 0;
      y = y || 0;

      this._enabled = true;
      this.attachShadow({mode: "open"});
      this.style.position = "absolute";  
      this.move(x, y);
      this.addToParent(parent);
    }

    addToParent(parent) {
      if (!parent) {
        return;
      }
      if (parent instanceof Panel) {
        parent.addChild(this);
      } else if (parent.toString() === "[object ShadowRoot]") {
        parent.append(this);
      } else {
        parent.appendChild(this);
      }
    }

    move(x, y) {
      this.x = x;
      this.y = y;
    }

    setSize(w, h) {
      this.width = w;
      this.height = h;
    }
    
    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////

    get enabled() {
      return this._enabled;
    }

    set enabled(enabled) {
      this._enabled = enabled;
    }
    
    get height() {
      return this._height;
    }

    set height(h) {
      this._height = h;
      this.style.height = h + "px";
    }

    get width() {
      return this._width;
    }

    set width(w) {
      this._width = w;
      this.style.width = w + "px";
    }

    get x() {
      return this._x;
    }

    set x(x) {
      this._x = x;
      this.style.left = x + "px";
    }

    get y() {
      return this._y;
    }

    set y(y) {
      this._y = y;
      this.style.top = y + "px";
    }
  }


  customElements.define("minimal-component", Component);

  class Button extends Component {
    constructor(parent, x, y, text, defaultHandler) {
      super(parent, x, y);
      this._text = text;

      this.createChildren();
      this.createStyle();
      this.createListeners();

      this.setSize(100, 20);
      this.addEventListener("click", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.button = document.createElement("div");
      this.button.setAttribute("class", "MinimalButton");
      this.button.tabIndex = 0;
      this.shadowRoot.append(this.button);

      this.label = new Label(this.button, 0, 0, this._text);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
    `;
      this.shadowRoot.append(style);
    }

    createListeners() {
      this.onClick = this.onClick.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
      this.button.addEventListener("click", this.onClick);
      this.button.addEventListener("keypress", this.onKeyPress);
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

    onKeyPress(event) {
      if (event.keyCode == 13 && this.enabled) {
        this.click();
      }
    }

    //////////////////////////////////
    // General
    //////////////////////////////////

    setSize(w, h) {
      super.setSize(w, h);
      this.label.x = (this.width - this.label.width) / 2 - 1;
      this.label.y = (this.height - this.label.height) / 2 -1;
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
      if (this.enabled) {
        this.button.setAttribute("class", "MinimalButton");
        this.button.tabIndex = 0;
      } else {
        this.button.setAttribute("class", "MinimalButtonDisabled");
        this.button.tabIndex = -1;
      }
      this.button.enabled = enabled;
    }

    get text() {
      return this._text;
    }

    set text(text) {
      this._text = text;
      this.label.text = text;
    }
  }

  customElements.define("minimal-button", Button);

  class Checkbox extends Component {
    constructor(parent, x, y, text, checked, defaultHandler) {
      super(parent, x, y);
      this._text = text;

      this.createChildren();
      this.createStyle();
      this.createListeners();

      this.setSize(100, 10);
      this.checked = checked;
      this.addEventListener("click", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.wrapper = document.createElement("div");
      this.wrapper.setAttribute("class", "MinimalCheckbox");
      this.wrapper.tabIndex = 0;

      this.check = document.createElement("div");
      this.check.setAttribute("class", "MinimalCheckboxCheck");
      this.wrapper.appendChild(this.check);

      this.label = new Label(this.wrapper, 15, 0, this._text);
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
      this.onClick = this.onClick.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
      this.wrapper.addEventListener("click", this.onClick);
      this.addEventListener("keypress", this.onKeyPress);
    }

    //////////////////////////////////
    // Handlers
    //////////////////////////////////

    onClick(event) {
      event.stopPropagation();
      if (this.enabled) {
        this.toggle();
        this.dispatchEvent(new Event("click"));
      }
    }

    onKeyPress(event) {
      if (event.keyCode == 13 && this.enabled) {
        this.wrapper.click();
      }
    }

    //////////////////////////////////
    // General
    //////////////////////////////////

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
    }

    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////

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

  }

  customElements.define("minimal-checkbox", Checkbox);


  class HSlider extends Component {
    constructor(parent, x, y, value, min, max, defaultHandler) {
      super(parent, x, y);
      this._min = min;
      this._max = max;
      this._decimals = 1;
      this._value = this.roundValue(value);
      this._handleSize = 10;

      this.createChildren();
      this.createStyle();
      this.createListeners();

      this.updateSliderSize(100, this.handleSize);
      this.updateHandlePosition();
      this.addEventListener("change", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    createChildren() {
      this.slider = document.createElement("div");
      this.slider.setAttribute("class", "MinimalSlider");
      this.slider.tabIndex = 0;

      this.handle = document.createElement("div");
      this.handle.setAttribute("class", "MinimalSliderHandle");
      this.slider.appendChild(this.handle);
      this.shadowRoot.append(this.slider);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
    `;
      this.shadowRoot.append(style);
    }

    createListeners() {
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.addEventListener("mousedown", this.onMouseDown);
      this.addEventListener("keydown", this.onKeyDown);
    }

    //////////////////////////////////
    // Handlers
    //////////////////////////////////
    onMouseDown(event) {
      this.offsetX = event.clientX - this.getBoundingClientRect().left - this.handle.offsetLeft;
      if (this.offsetX < 0 || this.offsetX > this.handleSize) {
        this.offsetX = this.handleSize / 2;
        let x = event.clientX - this.getBoundingClientRect().left - this.handleSize / 2;
        this.calculateValueFromPos(x);
      }
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    }

    onMouseMove(event) {
      let x = event.clientX - this.getBoundingClientRect().left - this.offsetX;
      this.calculateValueFromPos(x);
    }

    onMouseUp() {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    }

    onKeyDown(event) {
      const inc = 1 / Math.pow(10, this._decimals);
      let value = this.value;

      switch(event.keyCode) {
        case 37:
        case 40:
          value -= inc;
          break;
        case 38:
        case 39:
          value += inc;
          break
      }
      this.updateValue(value);
    }

    //////////////////////////////////
    // General
    //////////////////////////////////
    
    addLabels(text) {
      if (!this.label) {
        this.label = new Label(this.shadowRoot, 0, 0, text);
      }

      if (!this.valueLabel) {
        this.valueLabel = new Label(this.shadowRoot, 0, 0, this.value);
      }

      this.updateLabelPositions();
    }

    calculateValueFromPos(x) {
      const percent = x / (this.width - this.handleSize);
      const value = this.min + (this.max - this.min) * percent;
      this.updateValue(value);
    }

    roundValue(value) {
      value = Math.min(value, this.max);
      value = Math.max(value, this.min);
      const mult = Math.pow(10, this.decimals);
      return Math.round(value * mult) / mult;
    }

    updateHandlePosition() {
      let percent = (this.value - this.min) / (this.max - this.min);
      percent = Math.max(0, percent);
      percent = Math.min(1, percent);
      this.handle.style.left = percent * (this.width - this._handleSize) + "px";
    }

    updateEnabledStyle() {
      if (this.label) {
        this.label.enabled = this.enabled;
      }
      if (this.valueLabel) {
        this.valueLabel.enabled = this.enabled;
      }
      if (this.enabled) {
        this.slider.setAttribute("class", "MinimalSlider");
        this.handle.setAttribute("class", "MinimalSliderHandle");
      } else {
        this.slider.setAttribute("class", "MinimalSlider MinimalSliderDisabled");
        this.handle.setAttribute("class", "MinimalSliderHandle MinimalSliderHandleDisabled");
      }
    }

    updateLabelPositions() {
      if (this.label) {
        this.label.x = -this.label.width - 5;
        this.label.y = (this.height - this.label.height) / 2;
      }
      if (this.valueLabel) {
        this.valueLabel.x = this.width + 5;
        this.valueLabel.y = (this.height - this.valueLabel.height) / 2;
      }
    }

    updateSliderSize(w, h) {
      this.setSize(w, h);
    }

    updateValue(value) {
      value = this.roundValue(value);
      if (this._value != value) {
        this._value = value;
        this.updateHandlePosition();
        this.updateValueLabel();
        this.dispatchEvent(new Event("change"));
      }
    }

    updateValueLabel() {
      if (this.valueLabel) {
        this.valueLabel.text = this.value;
      }
    }

    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
    get decimals() {
      return this._decimals;
    }

    set decimals(decimals) {
      this._decimals = decimals;
      this._value = this.roundValue(this._value);
      this.updateValueLabel();
    }

    get enabled() {
      return super.enabled;
    }

    set enabled(enabled) {
      if (this.enabled != enabled) {
        super.enabled = enabled;
        this.updateEnabledStyle();
        if (this.enabled) {
          this.slider.tabIndex = 0;
          this.addEventListener("mousedown", this.onMouseDown);
          this.addEventListener("keydown", this.onKeyDown);
        } else {
          this.slider.tabIndex = -1;
          this.removeEventListener("mousedown", this.onMouseDown);
          this.removeEventListener("keydown", this.onKeyDown);
          document.removeEventListener("mousemove", this.onMouseMove);
          document.removeEventListener("mouseup", this.onMouseUp);
        }
      }
    }

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
      this.updateLabelPositions();
    }

    get max() {
      return this._max;
    }

    set max(max) {
      this._max = max;
      if (this.max < this.value) {
        this.updateValue(this.value);
      } else {
        this.updateHandlePosition();
      }
    }

    get min() {
      return this._min;
    }

    set min(min) {
      this._min = min;
      if (this.min > this.value) {
        this.updateValue(this.value);
      } else {
        this.updateHandlePosition();
      }
    }

    get value() {
      return this._value;
    }

    set value(value) {
      this.updateValue(value);
    }

    get width() {
      return super.width;
    }

    set width(width) {
      super.width = width;
      this.updateLabelPositions();
      this.updateHandlePosition();
    }
  }

  customElements.define("minimal-hslider", HSlider);



  class Label extends Component {
    constructor(parent, x, y, text) {
      super(null, x, y);
      this._text = text;
      this._autosize = true;

      this.createChildren();
      this.createStyle();
      // width will be 0 until it is on the live DOM
      // so we put it on document.body, get width
      // then remove it and add it to parent.
      document.body.appendChild(this);
      this._width = this.label.offsetWidth;
      document.body.removeChild(this);
      this.addToParent(parent);
      this.height = 12;
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this._text = this._text;
      this.label = document.createElement("div");
      this.label.textContent = this._text;
      this.label.setAttribute("class", "MinimalLabel");
      this.shadowRoot.append(this.label);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
      .MinimalLabel {
        ${Style.baseStyle}
        white-space: nowrap;
        color: #333;
        user-select: none;
        height: 100%;
        overflow: hidden;
      }
      .MinimalLabelDisabled {
        ${Style.disabledStyle}
      }
    `;
      this.shadowRoot.append(style);
    }

    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
    get autosize() {
      return this._autosize;
    }

    set autosize(autosize) {
      this._autosize = autosize;
      if (this._autosize) {
        this.label.style.width = "auto";
        this._width = this.label.offsetWidth;
      } else {
        this._width = this.label.offsetWidth;
        this.label.style.width = this._width + "px";
      }
    }

    get enabled() {
      return super.enabled;
    }

    set enabled(enabled) {
      super.enabled = enabled;
      if (this.enabled) {
        this.label.setAttribute("class", "MinimalLabel");
      } else {
        this.label.setAttribute("class", "MinimalLabel MinimalLabelDisabled");
      }
    }

    get text() {
      return this._text;
    }

    set text(text) {
      this._text = text;
      this.label.textContent = text;
      if (this._autosize) {
        this._width = this.label.offsetWidth;
      }
    }

    get width() {
      return this._width;
    }

    set width(w) {
      if (!this.autosize) {
        this._width = w;      
        this.label.style.width = w + "px";
      }
    }
  }

  customElements.define("minimal-label", Label);
  class Panel extends Component {
    constructor(parent, x, y, w, h) {
      super(parent, x, y);
      w = w || window.innerWidth;
      h = h || window.innerHeight;

      this.createChildren();
      this.createStyle();
      this.setSize(w, h);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      const panel = document.createElement("div");
      panel.setAttribute("class", "MinimalPanel");
      this.shadowRoot.append(panel);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
      `;
      this.shadowRoot.append(style);
    }

    //////////////////////////////////
    // General
    //////////////////////////////////
    
    addChild(child) {
      this.shadowRoot.append(child);
    }
  }

  customElements.define("minimal-panel", Panel);

  class ProgressBar extends Component {
    constructor(parent, x, y, progress, max) {
      super(parent, x, y);
      this._progress = progress;
      this._max = max;

      this.createChildren();
      this.createStyle();

      this.setSize(100, 10);
      this.updateBar();
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////

    createChildren() {
      this.bar = document.createElement("div");
      this.bar.setAttribute("class", "MinimalProgressBar");

      this.fill = document.createElement("div");
      this.fill.setAttribute("class", "MinimalProgressBarFill");
      this.bar.appendChild(this.fill);
      this.shadowRoot.append(this.bar);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
    `;
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
    
    get max() {
      return this._max;
    }

    set max(max) {
      this._max = max;
      let progress = Math.min(this.progress, this.max);
      this.progress = Math.max(progress, 0);
      this.updateBar();
    }

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


  class RadioButton extends Component {
    constructor(parent, x, y, group, text, checked, defaultHandler) {
      super(parent, x, y);
      RadioButtonGroup.addToGroup(group, this);

      this._group = group;
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
      this.wrapper = document.createElement("div");
      this.wrapper.setAttribute("class", "MinimalRadioButton");
      this.wrapper.tabIndex = 0;

      this.check = document.createElement("div");
      this.check.setAttribute("class", "MinimalRadioButtonCheck");
      this.wrapper.appendChild(this.check);

      this.label = new Label(this.wrapper, 15, 0, this.text);

      this.shadowRoot.append(this.wrapper);
    }

    createStyle() {
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
        this.checked = true;
        this.dispatchEvent(new Event("click"));
      }
    }

    onKeyPress(event) {
      if (event.keyCode == 13 && this.enabled) {
        this.wrapper.click();
      }
    }


    //////////////////////////////////
    // General
    //////////////////////////////////
    
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
        RadioButtonGroup.clearGroup(this._group);
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
  }

  customElements.define("minimal-radiobutton", RadioButton);


  class RadioButtonGroup {
    static groups = {};

    static getValueForGroup(group) {
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
    }

    static clearGroup(group) {
      const rbGroup = RadioButtonGroup.groups[group];
      if (!rbGroup) {
        return;
      }
      for (let i = 0; i < rbGroup.length; i++) {
        const rb = rbGroup[i];
        rb.checked = false;
      }
    }

    static addToGroup(group, rb) {
      if (!RadioButtonGroup.groups[group]) {
        RadioButtonGroup.groups[group] = [];
      }
      RadioButtonGroup.groups[group].push(rb);
    }

  }
  class Style {
    static baseStyle = `
    box-sizing: border-box;
    position: absolute;
    font: 10px sans-serif;
  `;
    static disabledStyle = ` 
    cursor: default;
    opacity: 0.5;
    user-select: none;
  `;
    static focusStyle = `
    outline: 1px solid #ccc;
    outline-offset: 2px;
  `;
    static shadowStyle = `
    box-shadow: inset 1px 1px 2px #808080;
  `;
    static textStyle = `
    background-color: #fff;
    border: none;
    color: #333;
    overflow: hidden;
    height: 100%;
    width: 100%;
  `;
    static textSelectionStyle = `
    background: #666;
    color: #fff;
  `;
  }
  class TextArea extends Component {
    constructor(parent, x, y, text, defaultHandler) {
      super(parent, x, y);
      this._text = text;
      this._defaultHandler = defaultHandler;

      this.createStyle();
      this.createChildren();
      this.createListeners();

      this.setSize(100, 100);
      this.addEventListener("input", defaultHandler);
   }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.textArea = document.createElement("textArea");
      this.textArea.setAttribute("class", "MinimalTextArea");
      this.textArea.value = this._text;
      this.shadowRoot.append(this.textArea);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
      this.dispatchEvent(new Event("input"));
    }

    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
    get enabled() {
      return super.enabled;
    }

    set enabled(enabled) {
      if (this.enabled != enabled) {
        super.enabled = enabled;
        this.textArea.disabled = !this.enabled;
        if (this.enabled) {
          this.textArea.addEventListener("input", this.onInput);
        } else {
          this.textArea.removeEventListener("input", this.onInput);
        }
      }
    }

    get text() {
      return this._text;
    }

    set text(text) {
      this._text = text;
      this.textArea.value = text;
    }
  }

  customElements.define("minimal-textarea", TextArea);
  class TextInput extends Component {
    constructor(parent, x, y, text, defaultHandler) {
      super(parent, x, y);
      this._text = text;

      this.createStyle();
      this.createChildren();
      this.createListeners();

      this.setSize(100, 20);
      this.addEventListener("input", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.input = document.createElement("input");
      this.input.setAttribute("type", "text");
      this.input.setAttribute("class", "MinimalTextInput");
      this.input.value = this._text;
      this.shadowRoot.append(this.input);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
      this.dispatchEvent(new Event("input"));
    }

    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
    get enabled() {
      return super.enabled;
    }

    set enabled(enabled) {
      if (this.enabled != enabled) {
        super.enabled = enabled;
        this.input.disabled = !this.enabled;
        if (this.enabled) {
          this.input.addEventListener("input", this.onInput);
        } else {
          this.input.removeEventListener("input", this.onInput);
        }
      }
    }

    get text() {
      return this._text;
    }

    set text(text) {
      this._text = text;
      this.input.value = text;
    }

  }

  customElements.define("minimal-textinput", TextInput);
  class VSlider extends HSlider {

    //////////////////////////////////
    // Core
    //////////////////////////////////

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
    `;
      this.shadowRoot.append(style);
    }

    //////////////////////////////////
    // Handlers
    //////////////////////////////////
    onMouseDown(event) {
      this.offsetY = event.clientY - this.getBoundingClientRect().top - this.handle.offsetTop;
      if (this.offsetY < 0 || this.offsetY > this.handleSize) {
        this.offsetY = this.handleSize / 2;
        let y = event.clientY - this.getBoundingClientRect().top - this.handleSize / 2;
        this.calculateValueFromPos(y);
      }
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    }

    onMouseMove(event) {
      let y = event.clientY - this.getBoundingClientRect().top - this.offsetY;
      this.calculateValueFromPos(y);
    }

    //////////////////////////////////
    // General
    //////////////////////////////////

    calculateValueFromPos(y) {
      const percent = 1 - y / (this.height - this.handleSize);
      const value = this.min + (this.max - this.min) * percent;
      this.updateValue(value);
    }

    updateHandlePosition() {
      let percent = (this.value - this.min) / (this.max - this.min);
      percent = Math.max(0, percent);
      percent = Math.min(1, percent);
      this.handle.style.top = this.height - this.handleSize - percent * (this.height - this._handleSize) + "px";
    }

    updateLabelPositions() {
      if (this.label) {
        this.label.x = -(this.label.width - this.width) / 2;
        this.label.y = -this.label.height - 5;
      }
      if (this.valueLabel) {
        this.valueLabel.x = -(this.valueLabel.width - this.width) / 2;
        this.valueLabel.y = this.height + 5;
      }
    }

    updateSliderSize(w, h) {
      this.setSize(h, w);
    }

    updateValueLabel() {
      super.updateValueLabel();
      this.updateLabelPositions();
    }

    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
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
      this.updateLabelPositions();
      this.updateHandlePosition();
    }


  }

  customElements.define("minimal-vslider", VSlider);



  class ColorPicker extends Component {
    constructor(parent, x, y, color, defaultHandler) {
      super(parent, x, y);
      this._color = this.correctColor(color);
      this._color = this.cropColor(color);

      this.createChildren();
      this.createStyle();
      this.createListeners();

      this.setSize(100, 20);
      this.addEventListener("change", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.wrapper = document.createElement("div");
      this.wrapper.setAttribute("class", "MinimalColorPicker");

      this.input = document.createElement("input");
      this.input.setAttribute("type", "text");
      this.input.setAttribute("class", "MinimalColorPickerInput");
      this.input.maxLength = 7;
      this.input.value = this._color;
      this.wrapper.appendChild(this.input);

      this.preview = document.createElement("div");
      this.preview.setAttribute("class", "MinimalColorPickerPreview");
      this.preview.style.backgroundColor = this.color;
      this.wrapper.appendChild(this.preview);

      this.shadowRoot.append(this.wrapper);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
      .MinimalColorPicker {
        ${Style.baseStyle}
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
      }
      .MinimalColorPickerInput:focus {
        ${Style.focusStyle}
      }
    `;
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
      if ((color.length === 4 || color.length === 7) && this.color != color) {
        this._color = color;
        this.preview.style.backgroundColor = this.color;
        this.dispatchEvent(new Event("change"));
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
    
    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
    get enabled() {
      return super.enabled;
    }

    set enabled(enabled) {
      if (this.enabled != enabled) {
        super.enabled = enabled;
        this.input.disabled = !this.enabled;
        if (this.enabled) {
          this.preview.setAttribute("class", "MinimalColorPickerPreview");
          this.input.addEventListener("input", this.onInput);
        } else {
          this.preview.setAttribute("class", "MinimalColorPickerPreview MinimalColorPickerPreviewDisabled");
          this.input.removeEventListener("input", this.onInput);
        }
      }
    }

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

  }

  customElements.define("minimal-colorpicker", ColorPicker);
  class NumericStepper extends Component {
    constructor(parent, x, y, value, min, max, defaultHandler) {
      super(parent, x, y);
      this._min = min;
      this._max = max;
      this._decimals = 0;
      this._value = this.roundValue(value);

      this.createChildren();
      this.createStyle();
      this.createListeners();

      this.setSize(100, 20);
      this.addEventListener("change", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.wrapper = document.createElement("div");
      this.wrapper.setAttribute("class", "MinimalNumericStepper");

      this.input = document.createElement("input");
      this.input.setAttribute("type", "text");
      this.input.setAttribute("class", "MinimalNumericStepperInput");
      this.input.value = this._value;
      this.wrapper.appendChild(this.input);

      this.minus = new Button(this.wrapper, 60, 0, "-");
      this.minus.setSize(20, 20);
      this.plus = new Button(this.wrapper, 80, 0, "+");
      this.plus.setSize(20, 20);

      this.shadowRoot.append(this.wrapper);
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
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
      this.shadowRoot.append(style);
    }

    createListeners() {
      this.onInputChange = this.onInputChange.bind(this);
      this.onInput = this.onInput.bind(this);
      this.onPlus = this.onPlus.bind(this);
      this.onMinus = this.onMinus.bind(this);
      this.input.addEventListener("input", this.onInput);
      this.input.addEventListener("change", this.onInputChange);
      this.plus.addEventListener("click", this.onPlus);
      this.minus.addEventListener("click", this.onMinus);
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
      if (this.value != value) {
        this._value = value;
        this.dispatchEvent(new Event("change"));
      }
    }

    onPlus() {
      const value = this.roundValue(this.value + 1 / Math.pow(10, this._decimals));
      if (this.value != value) {
        this.value = value;
        this.dispatchEvent(new Event("change"));
      }
    }

    onMinus() {
      const value = this.roundValue(this.value - 1 / Math.pow(10, this._decimals));
      if (this.value != value) {
        this.value = value;
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
    
    //////////////////////////////////
    // Getters/Setters
    // alphabetical. getter first.
    //////////////////////////////////
    
    get enabled() {
      return super.enabled;
    }

    set enabled(enabled) {
      if (this.enabled != enabled) {
        super.enabled = enabled;
        this.input.disabled = !this.enabled;
        this.plus.enabled = this.enabled;
        this.minus.enabled = this.enabled;
      }
    }

    get decimals() {
      return this._decimals;
    }

    set decimals(decimals) {
      this._decimals = decimals;
      const value = this.roundValue(this.value);
      if (this._value != value) {
        this._value = value;
        this.input.value= value;
        this.dispatchEvent(new Event("change"));
      }
    }

    get max() {
      return this._max;
    }

    set max(max) {
      this._max = max;
      if (this.max < this.value) {
        this.value = this.max;
        this.dispatchEvent(new Event("change"));
      }
    }

    get min() {
      return this._min;
    }

    set min(min) {
      this._min = min;
      if (this.min > this.value) {
        this.value = this.min;
        this.dispatchEvent(new Event("change"));
      }
    }

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

  class Dropdown extends Component {
    constructor(parent, x, y, items, defaultHandler) {
      super(parent, x, y);
      this.items = items;
      this.open = false;
      this.itemElements = [];
      this._index = -1;
      this._text = "";

      this.createChildren();
      this.createStyle();
      this.createListeners();

      this.setSize(100, 20);
      this.createItems();
      this.addEventListener("change", defaultHandler);
    }

    //////////////////////////////////
    // Core
    //////////////////////////////////
    
    createChildren() {
      this.wrapper = document.createElement("div");
      this.wrapper.setAttribute("class", "MinimalDropdown");
      this.wrapper.tabIndex = 0;
      this.shadowRoot.append(this.wrapper);

      this.label = new Label(this.wrapper, 3, 3);

      this.button = document.createElement("div");
      this.button.setAttribute("class", "MinimalDropdownButton");
      this.button.textContent = "+";
      this.wrapper.appendChild(this.button);

      this.dropdown = document.createElement("div");
      this.dropdown.style.display = "none";
      this.shadowRoot.append(this.dropdown);
    }

    createItems() {
      for (let i = 0; i < this.items.length; i++) {
        let item = this.createItem(i);
        this.dropdown.appendChild(item);
      }
    }

    createItem(index) {
      let item = document.createElement("div");
      item.setAttribute("class", "MinimalDropdownItem");
      item.addEventListener("click", this.onItemClick);
      item.setAttribute("data-index", index);

      let label = new Label(item, 3, 0, this.items[index]);
      label.y = (this.height - label.height) / 2;

      const itemObj = {item, label};
      this.updateItem(itemObj, index);
      this.itemElements.push(itemObj);
      return item;
    }

    createStyle() {
      const style = document.createElement("style");
      style.textContent = `
      .MinimalDropdown,
      .MinimalDropdownDisabled {
        ${Style.baseStyle}
        background-color: #fff;
        border-radius: 0;
        border: 1px solid #999;
        cursor: pointer;
        height: 100%;
        overflow: hidden;
        width: 100%;
        cursor: pointer;
      }
      .MinimalDropdownDisabled {
        ${Style.disabledStyle}
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
    `;
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
      this.open = !this.open;
      if (this.open) {
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
      this._text = event.target.firstChild.text;
      this._index = event.target.getAttribute("data-index");
      this.label.text = this._text;
      this.toggle();
      this.dispatchEvent(new Event("change"));
    }

    onKeyPress(event) {
      if (event.keyCode === 13 && this.enabled) {
        // enter
        this.wrapper.click();
      } else if (event.keyCode === 27 || event.keyCode == 9) {
        // escape || tab
        this.close();
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

    close() {
      this.open = true;
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
        this.wrapper.setAttribute("class", "MinimalDropdown MinimalDropdownDisabled");
        this.button.setAttribute("class", "MinimalDropdownButton MinimalDropdownButtonDisabled");
        this.tabIndex = -1;
        this.open = false;
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

    get index() {
      return this._index;
    }

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

  exports.Button = Button;
  exports.Checkbox = Checkbox;
  exports.ColorPicker = ColorPicker;
  exports.Component = Component;
  exports.Dropdown = Dropdown;
  exports.HSlider = HSlider;
  exports.Label = Label;
  exports.NumericStepper = NumericStepper;
  exports.Panel = Panel;
  exports.ProgressBar = ProgressBar;
  exports.RadioButton = RadioButton;
  exports.RadioButtonGroup = RadioButtonGroup;
  exports.Style = Style;
  exports.TextArea = TextArea;
  exports.TextInput = TextInput;
  exports.VSlider = VSlider;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
