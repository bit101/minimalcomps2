import { Component } from "./component.js";
import { Style } from "./style.js";

export class ProgressBar extends Component {
  constructor(parent, x, y, value, max) {
    super(parent, x, y);
    this._value = value;
    this._max = max;

    this.createChildren();
    this.createStyle();

    this.setSize(100, 10);
    this.updateBar();
  }

  createChildren() {
    this.bar = document.createElement("div");
    this.bar.setAttribute("class", "MinimalProgressBar");

    this.fill = document.createElement("div");
    this.fill.setAttribute("class", "MinimalProgressBarFill");
    this.bar.appendChild(this.fill);
    this.shadowRoot.append(this.bar);
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .MinimalProgressBar {
        ${Style.baseStyle}
        ${Style.shadowStyle}
        background-color: #ccc;
        border-radius: 0;
        height: 100%;
        width: 100%;
      }
      .MinimalProgressBarFill {
        ${Style.baseStyle}
        background-color: #fff;
        border: 1px solid #999;
        height: 100%;
      }
    `;
    this.shadowRoot.append(style);
  }

  updateBar() {
    let percent = this.value / this.max;
    percent = Math.max(0, percent);
    percent = Math.min(1, percent);
    this.fill.style.width = percent * this.width + "px";
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.updateBar();
  }

  get max() {
    return this._max;
  }

  set max(max) {
    this._max = max;
    this.updateBar();
  }

}

customElements.define("minimal-progressbar", ProgressBar);


