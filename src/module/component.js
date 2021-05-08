import { Panel } from "./panel.js";


export class Component extends HTMLElement {
  static baseStyle = "box-sizing: border-box;position: absolute;font: 10px sans;";
  static focusStyle = "outline: 1px solid #ccc; outline-offset: 2px;"
  static shadowStyle = "box-shadow: inset 1px 1px 2px #808080;"

  constructor(parent, x, y) {
    super();

    this.attachShadow({mode: "open"});
    this.style.position = "absolute";  
    this.move(x, y);
    if (parent instanceof Panel) {
      parent.addChild(this);
    } else {
      parent.appendChild(this);
    }
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  setSize(w, h) {
    this.width = w;
    this.height = h;
  }
  
  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
    this.style.left = x + "px";
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
    this.style.top = y + "px";
  }

  get width() {
    return this._width;
  }

  set width(w) {
    this._width = w;
    this.style.width = w + "px";
  }

  get height() {
    return this._height;
  }

  set height(h) {
    this._height = h;
    this.style.height = h + "px";
  }
}

customElements.define("minimal-component", Component);

