import { Style } from "./style.js";

export class Component extends HTMLElement {
  constructor(parent, x, y) {
    super();
    this.parent = parent;
    this._enabled = true;

    this.attachShadow({mode: "open"});
    this.createWrapper();
    this.createWrapperStyle();

    this.move(x || 0, y || 0);
  }

  addToParent() {
    this.parent && this.parent.appendChild(this);
  }

  //////////////////////////////////
  // Creators
  //////////////////////////////////

  createDiv(parent, className) {
    return this.createElement(parent, "div", className);
  }

  /* eslint-disable class-methods-use-this */
  createElement(parent, type, className) {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    parent && parent.appendChild(el);
    return el;
  }
  /* eslint-enable */

  createInput(parent, className) {
    const input = this.createElement(parent, "input", className);
    input.type = "text";
    return input;
  }

  createWrapper() {
    this.wrapper = this.createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
    this.shadowRoot.appendChild(document.createElement("slot"));
  }

  createWrapperStyle() {
    const style = document.createElement("style");
    style.textContent = Style.component;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  /**
   * Moves the component to a specified position.
   * @param {number} x - The new x position of the component.
   * @param {number} y - The new y position of the component.
   */
  move(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Rotates the component.
   * @param {number} rad - The number of radians to rotate the component by.
   */
  rotate(rad) {
    this.style.transform = `rotate(${rad}rad)`;
  }

  /**
   * Rotates the component.
   * @param {number} deg - The number of degrees to rotate the component by.
   */
  rotateDeg(deg) {
    this.style.transform = `rotate(${deg}deg)`;
  }

  /**
   * Sizes the component.
   * @param {number} w - The new width of the component.
   * @param {number} h - The new height of the component.
   */
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

  /**
   * Sets and gets whether or not this component is enabled. Non-enabled components will be faded out and not respond to events.
   */
  get enabled() {
    return this._enabled;
  }

  set enabled(enabled) {
    this._enabled = enabled;
  }

  /**
   * Sets and gets the height of this component.
   */
  get height() {
    return this._height;
  }

  set height(h) {
    this._height = h;
    this.style.height = h + "px";
  }

  /**
   * Sets and gets the width of this component.
   */
  get width() {
    return this._width;
  }

  set width(w) {
    this._width = w;
    this.style.width = w + "px";
  }

  /**
   * Sets and gets the x position of this component.
   */
  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
    this.style.left = x + "px";
  }

  /**
   * Sets and gets the y position of this component.
   */
  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
    this.style.top = y + "px";
  }
}

customElements.define("minimal-component", Component);

