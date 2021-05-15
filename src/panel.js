export class Panel extends Component {
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
    this.setWrapperClass("MinimalPanel");
  }

  createStyle() {
    this.style.position = "relative";
    this.style.display = "block";
    this.style.overflow = "hidden";
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
  
  get x() {
    return super.x;
  }

  set x(x) {
    this._x = x;
    // we'll use margins to position the panel so it plays well with other stuff on the page.
    this.style.marginLeft = x + "px";
  }

  get y() {
    return super.y;
  }

  set y(y) {
    this._y = y;
    this.style.marginTop = y + "px";
  }
  
}

customElements.define("minimal-panel", Panel);

