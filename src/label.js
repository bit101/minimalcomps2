import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Style } from "./style.js";

export class Label extends Component {

  constructor(parent, x, y, text) {
    super(null, x, y);
    this._align = "left";
    this._autosize = true;
    this._color = "#333";
    this._bold = false;
    this._italic = false;
    this._text = text;

    this.createChildren();
    this.createStyle();
    // width will be 0 until it is on the live DOM
    // so we put it on document.body, get width
    // then remove it and add it to parent.
    document.body.appendChild(this);
    this._width = this.wrapper.offsetWidth;
    parent && parent.appendChild(this);
    this.height = Defaults.label.fontSize + 2;
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
    style.textContent = `
      .MinimalLabel {
        ${Style.baseStyle}
        font-size: ${Defaults.label.fontSize}px;
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
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get align() {
    return this._align;
  }

  set align(align) {
    this._align = align;
    this.wrapper.style.textAlign = align;
  }
  
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
