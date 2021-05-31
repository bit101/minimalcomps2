import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Style } from "./style.js";

/**
 * Creates a static single line text label.
 * <div><img src="https://www.minimalcomps2.com/images/label.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Label(panel, 20, 20, "I am a label");
 * @extends Component
 */
export class Label extends Component {
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
