export class TextBox extends Component {
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
    style.textContent = `
      .MinimalTextBox {
        ${Style.baseStyle}
        color: #333;
        height: 100%;
        overflow: hidden;
        user-select: none;
        width: 100%;
      }
      .MinimalTextBoxDisabled {
        ${Style.disabledStyle}
        ${Style.baseStyle}
        height: 100%;
        overflow: hidden;
        user-select: none;
        width: 100%;
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
      this.setWrapperClass("MinimalTextBox");
    } else {
      this.setWrapperClass("MinimalTextBoxDisabled");
    }
  }

  get fontSize() {
    return this._fontSize;
  }

  set fontSize(fontSize) {
    this._fontSize = fontSize;
    this.wrapper.style.fontSize = fontSize + "px";
  }
  
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
    if (this._html) {
      this.wrapper.innerHTML = this._text;
    } else {
      this.wrapper.textContent = this._text;
    }
  }
}

customElements.define("minimal-textbox", TextBox);

