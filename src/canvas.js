import { Component } from "./component.js";
import { Style } from "./style.js";

export class Canvas extends Component {
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
    this.context = this.canvas.getContext("2d");
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

