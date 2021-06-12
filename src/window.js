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
   * @param {number} x - The x position of the window. Default 0.
   * @param {number} y - The y position of the window. Default 0.
   * @param {number} w - The width of the window. Default 400.
   * @param {number} h - The height of the window. Default 400.
   * @param {number} text - The text to put in the title bar. Default 0.
   */
  constructor(parent, x, y, w, h, text) {
    super(parent, x, y);
    // don't break where text is second param - original signature.
    if (typeof arguments[1] === "string") {
      text = arguments[1];
      x = arguments[2];
      y = arguments[3];
      w = arguments[4];
      h = arguments[5];
      this.move(x, y);
    }
    w = w || 400;
    h = h || 400;
    this._text = text;
    this._draggable = true;
    this._minimizable = true;
    this.minimized = false;

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(w, h);
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalWindow");
    this.titleBar = this._createDiv(this.wrapper, "MinimalWindowTitleBar");
    this.label = new Label(this.titleBar, 5, 0, this._text);
    this.label.height = 30;
    this.button = this._createDiv(this.titleBar, "MinimalWindowButton");
    this.content = this._createDiv(this.wrapper, "MinimalWindowContent");
    this.content.appendChild(document.createElement("slot"));
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.window;
    this.shadowRoot.append(style);
  }

  _createWrapper() {
    this.wrapper = this._createDiv(null, "MinimalWrapper");
    this.shadowRoot.appendChild(this.wrapper);
  }

  _createListeners() {
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMinimize = this._onMinimize.bind(this);
    this.titleBar.addEventListener("mousedown", this._onMouseDown);
    this.titleBar.addEventListener("touchstart", this._onMouseDown);
    this.button.addEventListener("click", this._onMinimize);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onMouseDown(event) {
    this.style.zIndex = Style.windowIndex++;
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
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("touchmove", this._onMouseMove);
    document.addEventListener("mouseup", this._onMouseUp);
    document.addEventListener("touchend", this._onMouseUp);
  }

  _onMouseMove(event) {
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

  _onMouseUp() {
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("touchmove", this._onMouseMove);
    document.removeEventListener("mouseup", this._onMouseUp);
    document.removeEventListener("touchend", this._onMouseUp);
  }

  _onMinimize() {
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

  /**
   * Sets whether or not this window can be dragged by its title bar.
   * @param {boolean} draggable - Whether this window can be dragged.
   * @returns This instance, suitable for chaining.
   */
  setDraggable(draggable) {
    this.draggable = draggable;
    return this;
  }

  /**
   * Sets whether or not this window can be minimized.
   * @param {boolean} minimizable - Whether this window can be minimized.
   * @returns This instance, suitable for chaining.
   */
  setMinimizable(minimizable) {
    this.minimizable = minimizable;
    return this;
  }

  /**
   * Sets the test shown in this window's title bar.
   * @param {string} text - The text in the title bar.
   * @returns This instance, suitable for chaining.
   */
  setText(text) {
    this.text = text;
    return this;
  }

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
        this.titleBar.addEventListener("mousedown", this._onMouseDown);
        this.titleBar.addEventListener("touchstart", this._onMouseDown);
      } else {
        this.titleBar.style.cursor = "default";
        this.titleBar.removeEventListener("mousedown", this._onMouseDown);
        this.titleBar.removeEventListener("touchstart", this._onMouseDown);
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
      this._onMinimize();
      this.minimizable = this.enabledMinimizable;
      this.draggable = this.enabledDraggable;
      this.wrapper.setAttribute("class", "MinimalWindow");
    } else {
      this.minimized = false;
      this._onMinimize();
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

