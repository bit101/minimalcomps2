import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates an HTML Canvas element for dynamically drawn content.
 * <div><img src="https://www.minimalcomps2.com/images/canvas.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 240, 240);
 * const canvas = new Canvas(panel, 20, 20, 200, 200);
 * canvas.context.fillStyle = "red";
 * canvas.context.beginPath();
 * canvas.context.arc(100, 100, 100, 0, Math.PI * 2);
 * canvas.context.fill();
 *
 * @extends Component
 */
export class Canvas extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this canvas to.
   * @param {number} x - The x position of the canvas.
   * @param {number} y - The y position of the canvas.
   * @param {number} w - The width of the canvas.
   * @param {number} h - The height of the canvas.
   */
  constructor(parent, x, y, w, h) {
    super(parent, x, y);

    this.createChildren();
    this.createStyle();

    this.setSize(w, h);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.canvas = this.createElement(this.wrapper, "canvas", "MinimalCanvas");
    this._context = this.canvas.getContext("2d");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.canvas;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  //////////////////////////////////
  // General
  //////////////////////////////////

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  /**
   * Returns the current 2d drawing context of the canvas (read only).
   */
  get context() {
    return this._context;
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this._enabled) {
      this.canvas.setAttribute("class", "MinimalCanvas");
    } else {
      this.canvas.setAttribute("class", "MinimalCanvasDisabled");
    }
  }

  get height() {
    return super.height;
  }

  set height(height) {
    super.height = height;
    this.canvas.height = height;
  }

  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    this.canvas.width = width;
  }
}

customElements.define("minimal-canvas", Canvas);

