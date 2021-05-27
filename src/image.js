import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Style } from "./style.js";

/**
 * A component that displays an image loaded from a URL.
 * <div><img src="https://www.minimalcomps2.com/images/image.png"/></div>
 * @extends Component
 */
export class Image extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this image to.
   * @param {number} x - The x position of the image.
   * @param {number} y - The y position of the image.
   * @param {string} url - The URL of the image to display.
   */
  constructor(parent, x, y, url) {
    super(parent, x, y);
    this._url = url;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(Defaults.image.width, 100);
    this.load();
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.image = this.createElement(this.wrapper, "img", "MinimalImage");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.image;
    this.shadowRoot.append(style);
  }

  createListeners() {
    this.onLoad = this.onLoad.bind(this);
    this.image.addEventListener("load", this.onLoad);
  }

  //////////////////////////////////
  // Handlers
  //////////////////////////////////

  onLoad() {
    this.origWidth = this.image.width;
    this.origHeight = this.image.height;
    this.updateImageSize();
    this.image.style.visibility = "visible";
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  load() {
    this.image.style.visibility = "hidden";
    this.image.setAttribute("src", this._url);
  }

  updateImageSize() {
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
    this.load();
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
      this.updateImageSize();
    }
  }
}

customElements.define("minimal-image", Image);

