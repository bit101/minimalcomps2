import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a panel to be used as a parent for other components.
 * <div><img src="https://www.minimalcomps2.com/images/panel.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Button(panel, 20, 20, "Click");
 * @extends Component
 */
export class Panel extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this panel to.
   * @param {number} x - The x position of the panel. Default 0.
   * @param {number} y - The y position of the panel. Default 0.
   * @param {number} w - The width of the panel. Default window.innerWidth.
   * @param {number} h - The height of the panel. Default window.innerHeight.
   */
  constructor(parent, x, y, w, h) {
    super(parent, x, y);
    w = w || window.innerWidth;
    h = h || window.innerHeight;

    this.createChildren();
    this.createStyle();
    this.setSize(w, h);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalPanel");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.panel;
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

