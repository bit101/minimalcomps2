import { Button } from "./button.js";
import { Component } from "./component.js";
import { Label } from "./label.js";
import { Style } from "./style.js";

/**
 * Creates a draggable, collapsible window to be used as a parent for other components.
 * <div><img src="https://www.minimalcomps2.com/images/window.png"/></div>
 * @example
 * const win = new Window(document.body, 20, 20, 200, 200);
 * new Button(win, 20, 20, "Click");
 * @extends Component
 */
export class Window extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this window to.
   * @param {number} text - The text to put in the title bar.
   * @param {number} x - The x position of the window.
   * @param {number} y - The y position of the window.
   * @param {number} w - The width of the window.
   * @param {number} h - The height of the window.
   */
  constructor(parent, text, x, y, w, h) {
    super(parent, x, y);
    w = w || 400;
    h = h || 400;
    this._text = text;
    this.minimized = false;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(w, h);
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalWindow");
    this.titleBar = this.createDiv(this.wrapper, "MinimalWindowTitleBar");
    this.label = new Label(this.titleBar, 5, 0, this._text);
    this.label.height = 30;
    this.button = new Button(this.titleBar, 0, 4, "-");
    this.button.setSize(20, 20);
    this.content = this.createDiv(this.wrapper, "MinimalWindowContent");
    this.content.appendChild(document.createElement("slot"));
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.window;
    this.shadowRoot.append(style);
  }

  createWrapper() {
    this.wrapper = this.createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
  }

  createListeners() {
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMinimize = this.onMinimize.bind(this);
    this.titleBar.addEventListener("mousedown", this.onMouseDown);
    this.button.addEventListener("click", this.onMinimize);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onMouseDown(event) {
    let mouseX;
    let mouseY;
    if (event.changedTouches) {
      event.preventDefault();
      mouseX = event.changedTouches[0].clientX;
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    this.offsetX = mouseX - this.getBoundingClientRect().left;
    this.offsetY = mouseY - this.getBoundingClientRect().top;
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onMouseUp);
  }

  onMouseMove(event) {
    let mouseX;
    let mouseY;
    if (event.changedTouches) {
      mouseX = event.changedTouches[0].clientX;
      mouseY = event.changedTouches[0].clientY;
    } else {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    const x = mouseX - this.offsetX;
    const y = mouseY - this.offsetY;
    this.move(x, y);
  }

  onMouseUp() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("touchmove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onMouseUp);
  }

  onMinimize() {
    this.minimized = !this.minimized;
    if (this.minimized) {
      super.height = 30;
    } else {
      super.height = this._openHeight;
    }
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  //////////////////////////////////
  // Getters and Setters
  //////////////////////////////////

  /**
   * Gets and sets the height of the window.
   */
  get height() {
    return super.height;
  }

  set height(h) {
    super.height = h;
    this._openHeight = h;
    this.content.style.height = (h - 30) + "px";
  }

  /**
   * Gets and sets the width of the window.
   */
  get width() {
    return super.width;
  }

  set width(w) {
    super.width = w;
    this.button.x = this.width - 25;
    this.titleBar.style.width = w + "px";
    this.content.style.width = w + "px";
  }
}

customElements.define("minimal-window", Window);

