export class Component extends HTMLElement {
  constructor(parent, x, y) {
    super();

    this._enabled = true;
    this.attachShadow({mode: "open"});
    this.style.position = "absolute";  
    this.move(x, y);
    if (!parent) {
      return;
    }
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

  get enabled() {
    return this._enabled;
  }

  set enabled(enabled) {
    this._enabled = enabled;
  }
}

customElements.define("minimal-component", Component);

