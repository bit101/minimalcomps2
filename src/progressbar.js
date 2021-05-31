import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a progress bar that tracks a value compared to a potential total.
 * <div><img src="https://www.minimalcomps2.com/images/progressbar.png"/></div>
 * @example
 * const panel = new Panel(document.body, 20, 20, 200, 200);
 * const pb = new ProgressBar(panel, 20, 20, 0, 100);
 * let progress = 0;
 * setInterval(() => {
 *   pb.progress = progress;
 *   progress += 0.1;
 * }, 100);
 * @extends Component
 */
export class ProgressBar extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this progress bar to.
   * @param {number} x - The x position of the progress bar. Default 0.
   * @param {number} y - The y position of the progress bar. Default 0.
   * @param {number} progress - The current progress value of the progress bar. Default 0.
   * @param {number} max - The maximum potential value of the progress bar. Default 100.
   */
  constructor(parent, x, y, progress, max) {
    super(parent, x, y);
    this._progress = progress || 0;
    this._max = max || 100;

    this._createChildren();
    this._createStyle();

    this.setSize(100, 15);
    this._updateBar();
    this._addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  _createChildren() {
    this._setWrapperClass("MinimalProgressBar");
    this.fill = this._createDiv(this.wrapper, "MinimalProgressBarFill");
  }

  _createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.progressbar;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  _updateBar() {
    let percent = this.progress / this.max;
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.fill.style.width = percent * this.width + "px";
  }

  //////////////////////////////////
  // Getters/Setters
  // alphabetical. getter first.
  //////////////////////////////////

  get enabled() {
    return super.enbled;
  }

  set enabled(enabled) {
    super.enabled = enabled;
    if (this._enabled) {
      this._setWrapperClass("MinimalProgressBar");
      this.fill.setAttribute("class", "MinimalProgressBarFill");
    } else {
      this._setWrapperClass("MinimalProgressBarDisabled");
      this.fill.setAttribute("class", "MinimalProgressBarFillDisabled");
    }
  }

  /**
   * Gets and sets the maximum value of the progress bar.
   */
  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    const progress = Math.min(this.progress, this.max);
    this.progress = Math.max(progress, 0);
    this._updateBar();
  }

  /**
   * Gets and sets the progress value of the progress bar.
   */
  get progress() {
    return this._progress;
  }

  set progress(progress) {
    progress = Math.min(progress, this.max);
    progress = Math.max(progress, 0);
    this._progress = progress;
    this._updateBar();
  }
}

customElements.define("minimal-progressbar", ProgressBar);

