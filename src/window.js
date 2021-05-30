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
   * @param {number} text - The text to put in the title bar. Default 0.
   * @param {number} x - The x position of the window. Default 0.
   * @param {number} y - The y position of the window. Default 0.
   * @param {number} w - The width of the window. Default 400.
   * @param {number} h - The height of the window. Default 400.
   */
  constructor(parent, text, x, y, w, h) {
    super(parent, x, y);
    w = w || 400;
    h = h || 400;
    this._text = text;
    this._draggable = true;
    this._minimizable = true;
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
    this.button = this.createDiv(this.titleBar, "MinimalWindowButton");
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
    this.titleBar.addEventListener("touchstart", this.onMouseDown);
    this.button.addEventListener("click", this.onMinimize);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onMouseDown(event) {
    this.style.zIndex = 1000000;
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
    const x = mouseX - this.offsetParent.getBoundingClientRect().left - this.offsetX;
    const y = mouseY - this.offsetParent.getBoundingClientRect().top - this.offsetY;
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
   * Gets and sets whether the window can be dragged by its title bar.
   */
  get draggable() {
    return this._draggable;
  }

  set draggable(draggable) {
    if (this._draggable !== draggable) {
      this._draggable = draggable;
      if (draggable) {
        this.titleBar.style.cursor = "pointer";
        this.titleBar.addEventListener("mousedown", this.onMouseDown);
        this.titleBar.addEventListener("touchstart", this.onMouseDown);
      } else {
        this.titleBar.style.cursor = "default";
        this.titleBar.removeEventListener("mousedown", this.onMouseDown);
        this.titleBar.removeEventListener("touchstart", this.onMouseDown);
      }
    }
  }

  /**
   * Gets and sets the enabled state of this window. A disabled window will be faded and non-draggable. It will be minimized to prevent its contents from being active and will not be able to be unminimized.
   */
  get enabled() {
    return super.enabled;
  }

  set enabled(enabled) {
    if (this.enabled === enabled) {
      return;
    }
    super.enabled = enabled;
    if (this.enabled) {
      this.minimized = true;
      this.onMinimize();
      this.minimizable = this.enabledMinimizable;
      this.draggable = this.enabledDraggable;
      this.wrapper.setAttribute("class", "MinimalWindow");
    } else {
      this.minimized = false;
      this.onMinimize();
      this.enabledMinimizable = this.minimizable;
      this.enabledDraggable = this.draggable;
      this.minimizable = false;
      this.draggable = false;
      this.wrapper.setAttribute("class", "MinimalWindowDisabled");
    }
  }
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
   * Gets and sets whether the window has a minimize button.
   */
  get minimizable() {
    return this._minimizable;
  }

  set minimizable(minimizable) {
    this._minimizable = minimizable;
    if (minimizable) {
      this.button.style.visibility = "visible";
    } else {
      this.button.style.visibility = "hidden";
    }
  }

  /**
   * Sets and gets the text shown in the window's title bar.
   */
  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    this.label.text = text;
  }

  /**
   * Gets and sets the width of the window.
   */
  get width() {
    return super.width;
  }

  set width(w) {
    super.width = w;
    this.titleBar.style.width = w + "px";
    this.content.style.width = w + "px";
  }
}

customElements.define("minimal-window", Window);

