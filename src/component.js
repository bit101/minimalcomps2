export class Component extends HTMLElement {
  constructor(parent, x, y) {
    super();
    x = x || 0;
    y = y || 0;
    this._enabled = true;

    this.createWrapper();
    this.createWrapperStyle();

    this.move(x, y);
    this.addToParent(parent, this);
  }

  //////////////////////////////////
  // Creators
  //////////////////////////////////

  createDiv(parent, className) {
    return this.createElement(parent, "div", className);
  }

  createElement(parent, type, className) {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    this.addToParent(parent, el);
    return el;
  }

  createInput(parent, className) {
    const input = this.createElement(parent, "input", className);
    input.type = "text";
    return input;
  }

  createWrapper() {
    this.attachShadow({mode: "open"});
    this.wrapper = this.createDiv(null, "MinimalWrapper");
    this.shadowRoot.append(this.wrapper);
  }

  createWrapperStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalWrapper {
        ${Style.baseStyle}
        height: 100%;
        overflow: hidden;
        width: 100%;
      }
    `;
    this.shadowRoot.append(style);
    this.style.position = "absolute";  
  }

  //////////////////////////////////
  // Creators
  //////////////////////////////////

  addToParent(parent, child) {
    if (!parent) {
      return;
    }
    if (parent.toString() === "[object ShadowRoot]") {
      parent.append(child);
    } else {
      parent.appendChild(child);
    }
  }

  appendChild(child) {
    this.shadowRoot.append(child);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  setSize(w, h) {
    this.width = w;
    this.height = h;
  }

  setWrapperClass(className) {
    this.wrapper.setAttribute("class", className);
  }

  
  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return this._enabled;
  }

  set enabled(enabled) {
    this._enabled = enabled;
  }
  
  get height() {
    return this._height;
  }

  set height(h) {
    this._height = h;
    this.style.height = h + "px";
  }

  get width() {
    return this._width;
  }

  set width(w) {
    this._width = w;
    this.style.width = w + "px";
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
}


customElements.define("minimal-component", Component);

