import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Style } from "./style.js";

/**
 * A component that displays an image loaded from a URL.
 * <div><img src="https://www.minimalcomps2.com/images/image.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * new Image(panel, 20, 20, "http://www.example.com/someimage.png");
 * @extends Component
 */
export class Image extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this image to.
   * @param {number} x - The x position of the image. Default 0.
   * @param {number} y - The y position of the image. Default 0.
   * @param {string} url - The URL of the image to display. Default empty string.
   */
  constructor(parent, x, y, url) {
    super(parent, x, y);
    this._url = url || "";

    this._createChildren();
    this._createStyle();
    this._createListeners();

    this.setSize(Defaults.image.width, 100);
    this._load();
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this.image = this._createElement(this.wrapper, "img", "MinimalImage");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.image;
    this.shadowRoot.append(style);
  }

  _createListeners() {
    this._onLoad = this._onLoad.bind(this);
    this.image.addEventListener("load", this._onLoad);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  _onLoad() {
    this.origWidth = this.image.width;
    this.origHeight = this.image.height;
    this._updateImageSize();
    this.image.style.visibility = "visible";
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _load() {
    this.image.style.visibility = "hidden";
    this.image.setAttribute("src", this._url);
  }

  _updateImageSize() {
    const aspectRatio = this.origWidth / this.origHeight;
    this.image.width = this.width;
    this.image.height = this.height = this.width / aspectRatio;
  }

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
      this.image.setAttribute("class", "MinimalImage");
    } else {
      this.image.setAttribute("class", "MinimalImageDisabled");
    }
  }

  /**
   * Gets and sets the height of the image. This is read only because the height will be set according to the assigned width and the aspect ratio of the loaded image.
   */
  get height() {
    return this.image.height;
  }

  set height(h) {
    super.height = h;
  }

  /**
   * Gets and sets the url of the image to be displayed. Setting this value will trigger the load of the new image.
   */
  get url() {
    return this._url;
  }

  set url(url) {
    this._url = url;
    this._load();
  }

  /**
   * Gets and sets the width of the image. When the image is loaded, it will be set to the assigned width. The height will be set according to the assigned with and the aspect ratio of the loaded image.
   */
  get width() {
    return super.width;
  }

  set width(width) {
    super.width = width;
    if (this.image.width) {
      this._updateImageSize();
    }
  }
}

customElements.define("minimal-image", Image);

