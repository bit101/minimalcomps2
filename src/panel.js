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
