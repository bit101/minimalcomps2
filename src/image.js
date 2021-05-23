import { Component } from "./component.js";
import { Defaults } from "./defaults.js";
import { Style } from "./style.js";

export class Image extends Component {
  constructor(parent, x, y, url) {
    super(parent, x, y);
    this._url = url;

    this.createChildren();
    this.createStyle();
    this.createListeners();

    this.setSize(Defaults.image.width, 100);
    this.load();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.image = this.createElement(this.wrapper, "img", "MinimalImage");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalImage {
        ${Style.baseStyle}
        background-color: #eee;
        border-radius: 0;
        border: 1px solid #999;
      }
      .MinimalImageDisabled {
        ${Style.disabledStyle}
        ${Style.baseStyle}
        background-color: #eee;
        border-radius: 0;
        border: 1px solid #999;
      }
    `;
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

  get height() {
    return this.image.height;
  }

  set height(height) {
    super.height = height;
  }

  get url() {
    return this._url;
  }

  set url(url) {
    this._url = url;
    this.load();
  }

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

