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
  
  move(x, y) {
    // we'll use margins to position the panel so it plays well with other stuff on the page.
    this.style.marginLeft = this.x + "px";
    this.style.marginTop = this.y + "px";
  }
  
}

customElements.define("minimal-panel", Panel);

