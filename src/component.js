import { Style } from "./style.js";

export class Component extends HTMLElement {
  constructor(parent, x, y) {
    super();
    this.parent = parent;
    this._enabled = true;

    this.attachShadow({mode: "open"});
    this._createWrapper();
    this._createWrapperStyle();

    this.move(x || 0, y || 0);
  }

  _addToParent() {
    this.parent && this.parent.appendChild(this);
  }

  //////////////////////////////////
  // Creators
  //////////////////////////////////

  _createDiv(parent, className) {
    return this._createElement(parent, "div", className);
  }

  /* eslint-disable class-methods-use-this */
  _createElement(parent, type, className) {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    parent && parent.appendChild(el);
    return el;
  }
  /* eslint-enable */

  _createInput(parent, className) {
    const input = this._createElement(parent, "input", className);
    input.type = "text";
    return input;
  }

  _createWrapper() {
    this.wrapper = this._createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
    this.shadowRoot.appendChild(document.createElement("slot"));
  }

  _createWrapperStyle() {
    const style = document.createElement("style");
    style.textContent = Style.component;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _setWrapperClass(className) {
    this.wrapper.setAttribute("class", className);
  }

  /**
   * Moves the component to a specified position.
   * @param {number} x - The new x position of the component.
   * @param {number} y - The new y position of the component.
   * @returns This instance, suitable for chaining.
   */
  move(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * Rotates the component.
   * @param {number} rad - The number of radians to rotate the component by.
   * @returns This instance, suitable for chaining.
   */
  rotate(rad) {
    this.style.transform = `rotate(${rad}rad)`;
    return this;
  }

  /**
   * Rotates the component.
   * @param {number} deg - The number of degrees to rotate the component by.
   * @returns This instance, suitable for chaining.
   */
  rotateDeg(deg) {
    this.style.transform = `rotate(${deg}deg)`;
    return this;
  }

  /**
   * Sizes the component.
   * @param {number} w - The new width of the component.
   * @param {number} h - The new height of the component.
   * @returns This instance, suitable for chaining.
   */
  setSize(w, h) {
    this.width = w;
    this.height = h;
    return this;
  }

  /**
   * Sets the enabled state of this component.
   * @param {boolean} enabled - Whether or not the component will be enabled.
   * @returns This instance, suitable for chaining.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * Sets the height of this component.
   * @param {number} height - The height of this component.
   * @returns This instance, suitable for chaining.
   */
  setHeight(h) {
    this.height = h;
    return this;
  }

  /**
   * Sets the width of this component.
   * @param {number} width - The width of this component.
   * @returns This instance, suitable for chaining.
   */
  setWidth(w) {
    this.width = w;
    return this;
  }

  /**
   * Sets the x position of this component.
   * @param {number} x - The x position of this component.
   * @returns This instance, suitable for chaining.
   */
  setX(x) {
    this.x = x;
    return this;
  }

  /**
   * Sets the y position of this component.
   * @param {number} y - The y position of this component.
   * @returns this instance, suitable for chaining.
   */
  setY(y) {
    this.y = y;
    return this;
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

