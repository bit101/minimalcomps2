import { Component } from "./component.js";
import { Style } from "./style.js";

/**
 * Creates a progress bar that tracks a value compared to a potential total.
 * <div><img src="https://www.minimalcomps2.com/images/progressbar.png"/></div>
 * @extends Component
 */
export class ProgressBar extends Component {
  /**
   * Constructor
   * @param {HTMLElement} parent - The element to add this progress bar to.
   * @param {number} x - The x position of the progress bar.
   * @param {number} y - The y position of the progress bar.
   * @param {number} progress - The current progress value of the progress bar.
   * @param {number} max - The maximum potential value of the progress bar.
   * @param {function} defaultHandler - A function that will handle the "click" event.
   */
  constructor(parent, x, y, progress, max) {
    super(parent, x, y);
    this._progress = progress;
    this._max = max;

    this.createChildren();
    this.createStyle();

    this.setSize(100, 15);
    this.updateBar();
    this.addToParent();
  }

  //////////////////////////////////
  // Core
  //////////////////////////////////

  createChildren() {
    this.setWrapperClass("MinimalProgressBar");
    this.fill = this.createDiv(this.wrapper, "MinimalProgressBarFill");
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = Style.progressbar;
    this.shadowRoot.append(style);
  }

  //////////////////////////////////
  // General
  //////////////////////////////////

  updateBar() {
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
      this.setWrapperClass("MinimalProgressBar");
      this.fill.setAttribute("class", "MinimalProgressBarFill");
    } else {
      this.setWrapperClass("MinimalProgressBarDisabled");
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
    this.updateBar();
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
    this.updateBar();
  }
}

customElements.define("minimal-progressbar", ProgressBar);

