import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a static box for multiline text. Accepts HTML text.
 * <div><img src="https://www.minimalcomps2.com/images/textbox.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new TextBox(panel, 20, 20, "Hello");
 * @extends Component
 */
export class TextBox extends Component {
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
    this.__setWrapperClass("MinimalTextBox");
    this.wrapper.textContent = this._text;
  }

  _createStyle() {
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

