export class Label extends Component {
  constructor(parent, x, y, text) {
    super(parent, x, y);
    this._text = text;
    this._autosize = true;

    this.createChildren();
    this.createStyle();
    this._width = this.label.offsetWidth;
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
