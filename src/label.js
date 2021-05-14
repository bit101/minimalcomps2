export class Label extends Component {
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
    this._width = this.wrapper.offsetWidth;
    document.body.removeChild(this);
    this.addToParent(parent, this);
    this.height = 12;
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
      this.wrapper.style.width = "auto";
      this._width = this.wrapper.offsetWidth;
    } else {
      this._width = this.wrapper.offsetWidth;
      this.wrapper.style.width = this._width + "px";
    }
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
